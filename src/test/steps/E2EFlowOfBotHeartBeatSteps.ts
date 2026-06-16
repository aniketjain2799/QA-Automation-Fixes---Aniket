import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import BotHeartBeatPage from "../../pages/E2EFlowOfBotHeartBeatPage";


let botHeartBeatPage: BotHeartBeatPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the BotHeartBeat Folder", async function () {
    botHeartBeatPage = new BotHeartBeatPage(fixture.page);
    await botHeartBeatPage.clickOnBotHeartBeat();

});

When("the User click on New Bot", async function () {
    await botHeartBeatPage.clickOnNewBot();

});

When("the User click on New Bot19", async function () {
    await botHeartBeatPage.clickOnNewBot19();

});

When("the User click on New Bot29", async function () {
    await botHeartBeatPage.clickOnNewBot29();

});

When("the User click on New Bot39", async function () {
    await botHeartBeatPage.clickOnNewBot39();

});

Then("New Bot script Should Be executed Successfully", async function () {
    const jobFinishedText = await botHeartBeatPage.getJobFinishedText(360000);
    const expectedValue = "ERROR: Job termination initiated due to missing heartbeat.";
    expect(jobFinishedText).toContain(expectedValue);

    const JobTerminatedText = await botHeartBeatPage.getJobTerminatedText(360000);
    const expectedValue1 = "No heartbeat received. Job terminated.";
    expect(JobTerminatedText).toContain(expectedValue1);

});

When("the User can check the Execution icon is visible", async function () {
    const isExecutionIconVisible = await botHeartBeatPage.isExecutionIconVisible();
    expect(isExecutionIconVisible).toBeTruthy();
});

Then("the User can also verify that Execution should not be Visible", async function () {
    const isExecutionVisible = await botHeartBeatPage.isExecutionIconVisible();
    expect(isExecutionVisible).toBeFalsy();
});


Then("New Bot script Should Be executed SuccessfullyP5", async function () {

    const ProxyConnectText = await botHeartBeatPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText = await botHeartBeatPage.getJobFinishedText(360000);
    const expectedValue = "ERROR: Job termination initiated due to missing heartbeat.";
    expect(jobFinishedText).toContain(expectedValue);

    const JobTerminatedText = await botHeartBeatPage.getJobTerminatedText(360000);
    const expectedValue1 = "No heartbeat received. Job terminated.";
    expect(JobTerminatedText).toContain(expectedValue1);
});

Then("New Bot script Should Be executed SuccessfullyP7", async function () {

    const PS7TextInitializedWithCsvData = await botHeartBeatPage.getPS7Text(80000);
    const expectedValue423 = "PS7 Sub-process started";
    expect(PS7TextInitializedWithCsvData).toContain(expectedValue423);

    const jobFinishedText = await botHeartBeatPage.getJobFinishedText(360000);
    const expectedValue = "ERROR: Job termination initiated due to missing heartbeat.";
    expect(jobFinishedText).toContain(expectedValue);

    const JobTerminatedText = await botHeartBeatPage.getJobTerminatedText(360000);
    const expectedValue1 = "No heartbeat received. Job terminated.";
    expect(JobTerminatedText).toContain(expectedValue1);
});

Then("New Bot script Should Be executed SuccessfullyP7Proxy", async function () {

    const ProxyConnectText = await botHeartBeatPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const PS7TextInitializedWithCsvData = await botHeartBeatPage.getPS7Text(80000);
    const expectedValue423 = "PS7 Sub-process started";
    expect(PS7TextInitializedWithCsvData).toContain(expectedValue423);

    const jobFinishedText = await botHeartBeatPage.getJobFinishedText(360000);
    const expectedValue = "ERROR: Job termination initiated due to missing heartbeat.";
    expect(jobFinishedText).toContain(expectedValue);

    const JobTerminatedText = await botHeartBeatPage.getJobTerminatedText(360000);
    const expectedValue1 = "No heartbeat received. Job terminated.";
    expect(JobTerminatedText).toContain(expectedValue1);
});

