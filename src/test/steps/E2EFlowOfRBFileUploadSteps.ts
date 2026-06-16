import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import RBFileUploadPage from "../../pages/E2EFlowOfRBFileUploadPage";
import * as fs from "fs";
import * as path from "path";
import * as data from "../../helper/util/test-data/TestData.json";

let rbFileUploadPage: RBFileUploadPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the RBFileUpload folder", async function () {
    rbFileUploadPage = new RBFileUploadPage(fixture.page);
    await rbFileUploadPage.clickOnRBFIleUpload();

});

When("the User clicks on the Data Table", async function () {
    await rbFileUploadPage.clickOnDataTable();

});

When("click on Run Button and upload the file", async function () {
    await rbFileUploadPage.clickOnRunButton();
    await rbFileUploadPage.clickOnYes();
    await rbFileUploadPage.clickOnResetDataTable();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await rbFileUploadPage.uploadFile('Data_3586.csv');
    await rbFileUploadPage.clickOnClickOk();
    await rbFileUploadPage.clickOnRun();

});

When('I upload the data file', async function () {
    await rbFileUploadPage.uploadFile('Data_3586.csv');
});

Then("Data Table script Should Be executed Successfully", async function () {

    const jobFinishedText = await rbFileUploadPage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await rbFileUploadPage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User clicks on the Data Table Tab", async function () {
    await rbFileUploadPage.clickOnDataTableTab();

});

Then("the User can validate that the complete last row with three column values and the total row count", async function () {
    await rbFileUploadPage.validateRowCount();
    await rbFileUploadPage.validateLastRowColumns();

});