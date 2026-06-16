import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoadTestBotTablePage from "../../pages/E2EFlowOfLoadTestBotTablePage";


let loadTestBotTablePage: LoadTestBotTablePage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the LoadTestBotTable Folder", async function () {
    loadTestBotTablePage = new LoadTestBotTablePage(fixture.page);
    await loadTestBotTablePage.clickOnLoadTestBotTable();

});

When("the User click on MainTable", async function () {
    await loadTestBotTablePage.clickOnMainTable();

});

When("click On the table", async function () {
    await loadTestBotTablePage.clickOnTable();

});

When("the user click on the New Bot", async function () {
    await loadTestBotTablePage.clickOnNewBot();

});

Then("the User can store the current Raw Count", async function () {
    await loadTestBotTablePage.storeCurrentRawCount();
});

Then("the User can validate that previous raw count should be incresed by 10 items", async function () {
    await loadTestBotTablePage.validateRawCountIncreasedBy10();
});


Then("New Bot Script Should Be executed Successfully", async function () {
    const jobFinishedText = await loadTestBotTablePage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await loadTestBotTablePage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});