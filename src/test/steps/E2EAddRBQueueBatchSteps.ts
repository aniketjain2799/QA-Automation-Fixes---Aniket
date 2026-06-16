import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import AddRBQueueBatchPage from "../../pages/E2EAddRBQueueBatchPage";
import * as data from "../../helper/util/test-data/TestData.json";



let addRBQueueBatchPage: AddRBQueueBatchPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the AddRBQueueBatch folder", async function () {
    addRBQueueBatchPage = new AddRBQueueBatchPage(fixture.page);
    await addRBQueueBatchPage.clickOnAddRbQueueBatch();

});

When("the User clicks on the Batch Bot", async function () {
    await addRBQueueBatchPage.clickOnBatchBot();

});

Then("Batch Bot Script Should Be executed Successfully", async function () {

    const jobFinishedText = await addRBQueueBatchPage.getJobFinishedText(360000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await addRBQueueBatchPage.getNoErrorText(360000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User clicks On the Queue", async function () {
    await addRBQueueBatchPage.clickOnQueue();

});

When("the User clicks on the Service Bot", async function () {
    await addRBQueueBatchPage.clickOnServiceBot();

});

Then("The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed", async function () {
    await addRBQueueBatchPage.clickShowExecutionLogIfVisible();
    const jobFinishedText1 = await addRBQueueBatchPage.getJobFinishedText(180000);
    const expectedValue1 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue1);

    const noErrorText1 = await addRBQueueBatchPage.getNoErrorText(180000);
    console.log(noErrorText1);
    const expectedValue2 = "no errors";
    expect(noErrorText1).toContain(expectedValue2);

    await addRBQueueBatchPage.FirstRecordValidation();
    await addRBQueueBatchPage.getLastRecordValidation();
});

When("the User clicks on Items", async function () {
    await addRBQueueBatchPage.clickOnItems();

});

Then("the User validates the total number of items present in the Items section of the Queue", async function () {
    await addRBQueueBatchPage.getTotalRecordsValidation();
});

Then("Batch Bot Script Should Be executed Successfully with PS7 And ConnectID", async function () {

    const ProxyConnectText1 = await addRBQueueBatchPage.getProxyConnectIdText(60000);
    const expectedValue12 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText1).toContain(expectedValue12);

    const PS7Text = await addRBQueueBatchPage.getPS7Text(80000);
    const expectedValue40 = "PS7 Sub-process started";
    expect(PS7Text).toContain(expectedValue40);

    const jobFinishedText = await addRBQueueBatchPage.getJobFinishedText(180000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await addRBQueueBatchPage.getNoErrorText(180000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("The Service Bot script should execute successfully with PS7 And ConnectID, and it should also be verified that a total of 10 items are displayed", async function () {

    const ProxyConnectText1 = await addRBQueueBatchPage.getProxyConnectIdText(60000);
    const expectedValue12 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText1).toContain(expectedValue12);

    const PS7Text = await addRBQueueBatchPage.getPS7Text(80000);
    const expectedValue40 = "PS7 Sub-process started";
    expect(PS7Text).toContain(expectedValue40);

    const jobFinishedText1 = await addRBQueueBatchPage.getJobFinishedText(180000);
    const expectedValue1 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue1);

    const noErrorText1 = await addRBQueueBatchPage.getNoErrorText(180000);
    console.log(noErrorText1);
    const expectedValue2 = "no errors";
    expect(noErrorText1).toContain(expectedValue2);

    await addRBQueueBatchPage.FirstRecordValidation();
    await addRBQueueBatchPage.getLastRecordValidation();
});