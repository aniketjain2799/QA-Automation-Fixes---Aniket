import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ChangeMonitoringPage from "../../pages/E2EFlowOfChangeMonitoringPage";
import * as data from "../../helper/util/test-data/TestData.json";
import * as fs from "fs";
import * as path from "path";



let changeMonitoringPage: ChangeMonitoringPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Change Monitoring Folder", async function () {
    changeMonitoringPage = new ChangeMonitoringPage(fixture.page);
    await changeMonitoringPage.clickOnChangeMonitoring();

});

When("the User clicks on the table", async function () {
    await changeMonitoringPage.clickOnTable();

});

function readJsonFile(filePath: string): any {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
}

When("Sent the data from JSON file to properties Section", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    await changeMonitoringPage.clearInput("viewlinesCompleteBox");
    await changeMonitoringPage.fillTablePropertiesSection();
});

When("click on Table Run Button", async function () {
    changeMonitoringPage = new ChangeMonitoringPage(fixture.page);
    await changeMonitoringPage.clickOnRunButton();
    await changeMonitoringPage.clickOnYesTable();
    await changeMonitoringPage.clickOnOkResetDataTable();
    await new Promise(resolve => setTimeout(resolve, 7000));
});

When("click on Table Run Button4", async function () {
    changeMonitoringPage = new ChangeMonitoringPage(fixture.page);
    await changeMonitoringPage.clickOnRunButton();
    await changeMonitoringPage.clickOnYesTable();
    //await changeMonitoringPage.clickOnOkResetDataTable();
    await new Promise(resolve => setTimeout(resolve, 7000));
});


Then("the Table script Should Be executed Successfully", async function () {

    const jobFinishedText = await changeMonitoringPage.getJobFinishedText(240000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await changeMonitoringPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User on table tab", async function () {
    await changeMonitoringPage.clickOnTableTab();

});

Then("the User can validate First name value with the value which we generate dynamically in the monaco editor", async function () {
    const generatedFirstName = ChangeMonitoringPage.generatedFirstName;
    const firstNameInTable = await changeMonitoringPage.getFirstNameFromTable();
    expect(firstNameInTable.trim()).toBe(generatedFirstName);
});

When("the User clicks on New Bot", async function () {
    await changeMonitoringPage.clickOnNewBot();

});

Then("New Bot Script should be executed Successfully", async function () {

    const jobFinishedText = await changeMonitoringPage.getJobFinishedText(240000);
    const expectedValue2 = "Job finished";
    expect(jobFinishedText).toContain(expectedValue2);

    const noErrorText = await changeMonitoringPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue3 = "no errors";
    expect(noErrorText).toContain(expectedValue3);

    const changeMonitoringStartedTextText = await changeMonitoringPage.getChangeMonitoringStartedText(240000);
    const expectedValue4 = "Change monitoring started";
    expect(changeMonitoringStartedTextText).toContain(expectedValue4);

    const changeMonitoringcompletedTextText = await changeMonitoringPage.getChangeMonitoringcompletedText(240000);
    console.log(noErrorText);
    const expectedValue5 = "Change monitoring completed";
    expect(changeMonitoringcompletedTextText).toContain(expectedValue5);
});

When("the User clicks on View24", async function () {
    await changeMonitoringPage.clickOnView24();

});

When("the User clicks on Arrow Icon", async function () {
    await changeMonitoringPage.clickOnArrowIcon();

});

Then("the User can validate First name Bot value with the value which we generate dynamically in the monaco editor", async function () {
    const generatedFirstName = ChangeMonitoringPage.generatedFirstName;
    const firstNameInBot = await changeMonitoringPage.getFirstNameFromBot();
    expect(firstNameInBot.trim()).toBe(generatedFirstName);
});

When("the User clicks on ENG677 Bot", async function () {
    await changeMonitoringPage.clickOnEng677Bot();

});


Then("the ENG677 Bot script Should Be executed Successfully", async function () {

    const jobFinishedText = await changeMonitoringPage.getJobFinishedText(240000);
    const expectedValue6 = "Job finished";
    expect(jobFinishedText).toContain(expectedValue6);

    const noErrorText = await changeMonitoringPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue7 = "no errors";
    expect(noErrorText).toContain(expectedValue7);
});

When("the User clicks on Raw Data0 tab", async function () {
    await changeMonitoringPage.clickOnRawData0();

});

Then("the User can validate First name ENG777 Bot value with the value which we generate dynamically in the monaco editor", async function () {
    const generatedFirstName = ChangeMonitoringPage.generatedFirstName;
    const firstNameInENG777Bot = await changeMonitoringPage.getFirstNameFromENG777Bot();
    expect(firstNameInENG777Bot.trim()).toBe(generatedFirstName);
});

