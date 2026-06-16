import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import RunCommandletsPage from "../../pages/E2EFlowOfRunCommandletswithDynamicUserPage";
import * as data from "../../helper/util/test-data/TestData.json";



let runCommandletsPage: RunCommandletsPage;

setDefaultTimeout(1200 * 1000 * 2);

Given("User Already Logged In From Microsoft Account", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.navigateToHomePageAndLoginWithMicrosoft();
});

Given("User Already Logged In From Dynamic Microsoft Account", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.navigateToHomePageAndLoginWithMicrosoftDynamic();
});

When("User clicks on Hamburger menu", async function () {
    await new Promise(resolve => setTimeout(resolve, 40000));
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.clickOnHumburgerMenu();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Commandlets to run Environment should be visible and clickable to User", async function () {
    await runCommandletsPage.clickOnCommandletsToRunEnv();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await runCommandletsPage.clickOnCommandletsToRunEnvMainPage();
});

Then("Commandlets to run Environment should be Visible and clickable to User", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.clickOnCommandletsToRunEnvP();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await runCommandletsPage.clickOnCommandletsToRunEnvMainPage();
});

When("User clicks on the Caller Bot", async function () {
    await runCommandletsPage.clickOnCallerBot();
});


When("click On Properties Section", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.clickOnProperties();
});

When("the User clicks on properties section", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.clickOnProperties();
    await runCommandletsPage.clickOnProperties();
});

When("click on Run Button", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);
    await runCommandletsPage.clickOnRunButton();
    await runCommandletsPage.clickOnYesButton();
    await new Promise(resolve => setTimeout(resolve, 7000));
});

Then("Caller Bot script should be executed Successfully", async function () {

    const jobFinishedText = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("Caller Bot script Should Be executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(180000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText = await runCommandletsPage.getJobFinishedText(540000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("NB Bot script Should Be executed Successfully", async function () {
    runCommandletsPage = new RunCommandletsPage(fixture.page);

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue81 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue81);

    const jobFinishedText = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("User clicks on the New Bot", async function () {
    await runCommandletsPage.clickOnNewBot();
});

When("click On Show execution log", async function () {
    await runCommandletsPage.clickOnShowExecutionLogIfVisible();
});

Then("User can verify that New Bot script should be executed Successfully", async function () {
    const jobFinishedText11 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue11 = "Job finished";
    expect(jobFinishedText11).toContain(expectedValue11);

    const noErrorText12 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText12);
    const expectedValue12 = "no errors";
    expect(noErrorText12).toContain(expectedValue12);
});

Then("User can verify that New Bot Script Should Be executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText11 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue11 = "Job finished";
    expect(jobFinishedText11).toContain(expectedValue11);

    const noErrorText12 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText12);
    const expectedValue12 = "no errors";
    expect(noErrorText12).toContain(expectedValue12);
});

When("the User clicks on the AddRbLogArray Bot", async function () {
    await runCommandletsPage.clickOnAddRbLog_Array();
});

Then("the AddRbLogArray Bot script should be executed Successfully", async function () {
    const jobFinishedText13 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue13 = "Job finished";
    expect(jobFinishedText13).toContain(expectedValue13);

    const noErrorText14 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText14);
    const expectedValue14 = "no errors";
    expect(noErrorText14).toContain(expectedValue14);
});

Then("the AddRbLogArray Bot Script Should Be executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText13 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue13 = "Job finished";
    expect(jobFinishedText13).toContain(expectedValue13);

    const noErrorText14 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText14);
    const expectedValue14 = "no errors";
    expect(noErrorText14).toContain(expectedValue14);
});


When("the User clicks on the GetAtlas Bot", async function () {
    await runCommandletsPage.clickOnGet_Atlas();
});

Then("the GetAtlas Bot script should be executed Successfully", async function () {
    const jobFinishedText15 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue15 = "Job finished";
    expect(jobFinishedText15).toContain(expectedValue15);

    const noErrorText16 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText16);
    const expectedValue16 = "no errors";
    expect(noErrorText16).toContain(expectedValue16);
});

Then("the GetAtlas Bot Script Should Be executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText15 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue15 = "Job finished";
    expect(jobFinishedText15).toContain(expectedValue15);

    const noErrorText16 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText16);
    const expectedValue16 = "no errors";
    expect(noErrorText16).toContain(expectedValue16);
});


When("the User clicks on the NewBotSimpleHTML Bot", async function () {
    await runCommandletsPage.clickOnNewBotSH();
});

Then("the NewBotSimpleHTML Bot script should be executed Successfully", async function () {
    const jobFinishedText17 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue17 = "Job finished";
    expect(jobFinishedText17).toContain(expectedValue17);

    const noErrorText18 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText18);
    const expectedValue18 = "no errors";
    expect(noErrorText18).toContain(expectedValue18);
});

Then("the NewBotSimpleHTML Bot Script Should Be executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText17 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue17 = "Job finished";
    expect(jobFinishedText17).toContain(expectedValue17);

    const noErrorText18 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText18);
    const expectedValue18 = "no errors";
    expect(noErrorText18).toContain(expectedValue18);
});

When("the User clicks on the ROI Bot", async function () {
    await runCommandletsPage.clickOnRoi();
});

Then("the ROI Bot script should be executed Successfully", async function () {
    const jobFinishedText19 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue19 = "Job finished";
    expect(jobFinishedText19).toContain(expectedValue19);

    const noErrorText20 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText20);
    const expectedValue20 = "no errors";
    expect(noErrorText20).toContain(expectedValue20);
});

Then("the ROI Bot script Should Be Executed Successfully", async function () {

    const ProxyConnectText = await runCommandletsPage.getProxyConnectIdText(60000);
    const expectedValue78 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue78);

    const jobFinishedText19 = await runCommandletsPage.getJobFinishedText(240000);
    const expectedValue19 = "Job finished";
    expect(jobFinishedText19).toContain(expectedValue19);

    const noErrorText20 = await runCommandletsPage.getNoErrorText(240000);
    console.log(noErrorText20);
    const expectedValue20 = "no errors";
    expect(noErrorText20).toContain(expectedValue20);
});

