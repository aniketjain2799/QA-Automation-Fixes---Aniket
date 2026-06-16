import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import BotForTableTestPage from "../../pages/E2EFlowOfBotsForTableTestPage";
import ExecuteTableEnvironmentPage from "../../pages/ExecuteTableEnvironmentPage";
import { expect } from "@playwright/test";

setDefaultTimeout(1200 * 1000);

let executeTableEnvironmentPage: ExecuteTableEnvironmentPage;

let botForTableTestPage: BotForTableTestPage;

When("User click on the Existing Environment folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.waitForEnvironmentsElement();
    await botForTableTestPage.clickOnEnvironments();
    await botForTableTestPage.clickExistingEnvironment();
});

When("User click on the Existing Environment Folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.waitForEnvironmentsElement();
    await botForTableTestPage.clickOnEnvironments();
    await botForTableTestPage.clickExistingProxyEnvironment();
});

When("User click on the Existing Environment Folder4", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.waitForEnvironmentsElement();
    await botForTableTestPage.clickOnEnvironments();
    await botForTableTestPage.clickExistingProxyEnvironment4();
});

When("Click on root folder", async function () {
    await botForTableTestPage.clickOnRootFolder();
});

When("Click on root folder4", async function () {
    await botForTableTestPage.clickOnRootFolder4();
});

When("Click on Proxy root folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnProxyRootFolder();
});


When("Click on Proxy Proot folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnPProxyRootFolder();
});

When("Click on ActionBotStep2 Folder", async function () {
    await botForTableTestPage.clickOnActionBotStep2();
});

When("Click on ActionBotStep2 Folder4", async function () {
    await botForTableTestPage.clickOnActionBotStep24();
});

When("Clicks on the NB Bot", async function () {
    await botForTableTestPage.clickOnNBBot();
});

When("Clicks on the NB Bot4", async function () {
    await botForTableTestPage.clickOnNBBot4();
});

When("click on Table Test Folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnTableTestFolder();
});

When("click on Table Test1 Folder", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnTableTest1Folder();
});

When("click on Revoke Access Icon If Present", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnRevokeAccessIfPresent();
});

When("click on Table Test FolderL", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnTableTestFolderL();
});

When("click on Table Test FolderL1", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnTableTestFolderL1();
});

When("click on ConnectId Test Folder", async function () {
    await botForTableTestPage.clickOnConnectIdTestFolder();
});

When("click on Bots For Table Test Folder", async function () {
    await botForTableTestPage.clickOnBotsForTableTestFolder();
});

When("User clicks on StartBot", async function () {
    await botForTableTestPage.clickOnStartBot();
});

When("click On Run button", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 6000));
    await botForTableTestPage.clickOnRunButton();
    await botForTableTestPage.clickOnYesButton();
});

Then("User can validate that Bot_RbQueueMessage script executed Successfully", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(180000);
    const expectedValue881 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue881);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("User can validate that Bot_RbQueueMessage1 script executed Successfully", async function () {

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("User can validate that Bot script executed Successfully", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(180000);
    const expectedValue883 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue883);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE31 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE31);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue41 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue41);
});

Then("User can validate that Bot script1 executed Successfully", async function () {

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE31 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE31);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue41 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue41);
});

Then("User can validate that BotS script executed Successfully", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(180000);
    const expectedValue886 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue886);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE311 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE311);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue411 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue411);
});


Then("User can validate that BotS script1 executed Successfully", async function () {

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE311 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE311);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue411 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue411);
});


Then("the User can validate the Service Bot script with No errors", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(180000);
    const expectedValue882 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue882);

    const TotalItemsDequeuedText = await botForTableTestPage.getTotalItemsDequeuedText(1200000);
    console.log(TotalItemsDequeuedText);
    const expectedValueE358 = "Total Items Dequeued : 5";
    expect(TotalItemsDequeuedText).toContain(expectedValueE358);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});


Then("the User can validate the Service Bot script with No errors12", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(180000);
    const expectedValue882 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue882);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("the User can validate the Service Bot script1 with No errors", async function () {

    const TotalItemsDequeuedText = await botForTableTestPage.getTotalItemsDequeuedText(1200000);
    console.log(TotalItemsDequeuedText);
    const expectedValueE356 = "Total Items Dequeued : 5";
    expect(TotalItemsDequeuedText).toContain(expectedValueE356);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("the User can validate the Service Bot script11 with No errors", async function () {

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("StartBot script should be executed Successfully", async function () {

    const ProxyConnectText = await botForTableTestPage.getProxyConnectIdText(60000);
    const expectedValue88 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue88);

    botForTableTestPage = new BotForTableTestPage(fixture.page);
    const jobFinishedTextE2 = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue2 = "Job finished";
    expect(jobFinishedTextE2).toContain(expectedValue2);

    const noErrorTextE2 = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextE2);
    const expectedValue3 = "no errors";
    expect(noErrorTextE2).toContain(expectedValue3);
});


When("User click on StartJobsObject Bot", async function () {
    await botForTableTestPage.clickOnStartJobsObject();
});

When("click on Properties section", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);
    await botForTableTestPage.clickOnProperties();
});

When("click on Show execution log", async function () {
    await botForTableTestPage.clickOnShowExecutionLogIfVisible();
});

Then("User can validate that StartJobsObject Bot script executed Successfully", async function () {
    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);
    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});

Then("User can validate that StartJobsObject Bot script executed Successfully with PS7 Log", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);

    const PS7TextStartJobObject = await botForTableTestPage.getPS7Text(80000);
    const expectedValue41 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue41);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);

    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});


Then("User can validate that Start Bot script executed Successfully with PS7 Log", async function () {
    botForTableTestPage = new BotForTableTestPage(fixture.page);

    const PS7TextStartJobObject = await botForTableTestPage.getPS7Text(80000);
    const expectedValue41 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue41);

    const noErrorTextStartJobObject = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobObject);
    const expectedValueE3 = "no errors";
    expect(noErrorTextStartJobObject).toContain(expectedValueE3);

    const jobFinishedTextStartJobObject = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue4 = "Job finished";
    expect(jobFinishedTextStartJobObject).toContain(expectedValue4);
});


When("User click on StartJobsCsv Bot", async function () {
    await botForTableTestPage.clickOnStartJobsCsv();
});

Then("User can validate that SStartJobsCsv Bot script executed Successfully", async function () {
    const noErrorTextStartJobCsv = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue5 = "no errors";
    expect(noErrorTextStartJobCsv).toContain(expectedValue5);
});

Then("User can validate that SStartJobsCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextStartJobCsv = await botForTableTestPage.getPS7Text(80000);
    const expectedValue42 = "PS7 Sub-process started";
    expect(PS7TextStartJobCsv).toContain(expectedValue42);

    const noErrorTextStartJobCsv = await botForTableTestPage.getNoErrorText(1200000);
    console.log(noErrorTextStartJobCsv);
    const expectedValue43 = "no errors";
    expect(noErrorTextStartJobCsv).toContain(expectedValue43);

    const jobFinishedTextStartJobCsv = await botForTableTestPage.getJobFinishedText(1200000);
    const expectedValue44 = "Job finished";
    expect(jobFinishedTextStartJobCsv).toContain(expectedValue44);
});

When("User click on UpdateWithObject Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithObject();
});

Then("User can validate that UpdateWithObject Bot script executed Successfully", async function () {
    const noErrorTextUpdateWithObjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue6 = "no errors";
    expect(noErrorTextUpdateWithObjectBot).toContain(expectedValue6);
    const jobFinishedTextUpdateWithObjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue7 = "Job finished";
    expect(jobFinishedTextUpdateWithObjectBot).toContain(expectedValue7);
});

Then("User can validate that UpdateWithObject Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUpdateWithObjectBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue411 = "PS7 Sub-process started";
    expect(PS7TextUpdateWithObjectBot).toContain(expectedValue411);

    const noErrorTextUpdateWithObjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue611 = "no errors";
    expect(noErrorTextUpdateWithObjectBot).toContain(expectedValue611);

    const jobFinishedTextUpdateWithObjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue711 = "Job finished";
    expect(jobFinishedTextUpdateWithObjectBot).toContain(expectedValue711);
});


When("User click on UpdateWithForceObject Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithForceObject();
});

Then("User can validate that UpdateWithForceObject Bot script executed Successfully", async function () {
    const noErrorTextUpdatewithForcebjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue8 = "no errors";
    expect(noErrorTextUpdatewithForcebjectBot).toContain(expectedValue8);
    const jobFinishedTextUpdatewithForcebjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue9 = "Job finished";
    expect(jobFinishedTextUpdatewithForcebjectBot).toContain(expectedValue9);
});

Then("User can validate that UpdateWithForceObject Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUpdatewithForcebjectBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue412 = "PS7 Sub-process started";
    expect(PS7TextUpdatewithForcebjectBot).toContain(expectedValue412);

    const noErrorTextUpdatewithForcebjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue811 = "no errors";
    expect(noErrorTextUpdatewithForcebjectBot).toContain(expectedValue811);
    const jobFinishedTextUpdatewithForcebjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue911 = "Job finished";
    expect(jobFinishedTextUpdatewithForcebjectBot).toContain(expectedValue911);
});

When("User click on UpdateWithoutForceObject Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithoutForceObject();
});

Then("User can validate that UpdateWithoutForceObject Bot script executed Successfully", async function () {
    const jobFinishedTextUpdateWithoutForceObjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue10 = "Job finished";
    expect(jobFinishedTextUpdateWithoutForceObjectBot).toContain(expectedValue10);
    const noErrorTextUpdateWithoutForceObjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue11 = "no errors";
    expect(noErrorTextUpdateWithoutForceObjectBot).toContain(expectedValue11);
});

Then("User can validate that UpdateWithoutForceObject Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUpdateWithoutForceObjectBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue413 = "PS7 Sub-process started";
    expect(PS7TextUpdateWithoutForceObjectBot).toContain(expectedValue413);

    const jobFinishedTextUpdateWithoutForceObjectBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue101 = "Job finished";
    expect(jobFinishedTextUpdateWithoutForceObjectBot).toContain(expectedValue101);
    const noErrorTextUpdateWithoutForceObjectBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue111 = "no errors";
    expect(noErrorTextUpdateWithoutForceObjectBot).toContain(expectedValue111);
});

When("User click on UpdateWithCsv Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithCsv();
});

Then("User can validate that UpdateWithCsv Bot script executed Successfully", async function () {
    const noErrorTextUpdateWithCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue12 = "no errors";
    expect(noErrorTextUpdateWithCsvBot).toContain(expectedValue12);
    const jobFinishedTextUpdateWithCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue13 = "Job finished";
    expect(jobFinishedTextUpdateWithCsvBot).toContain(expectedValue13);
});

Then("User can validate that UpdateWithCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUpdateWithCsvBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue414 = "PS7 Sub-process started";
    expect(PS7TextUpdateWithCsvBot).toContain(expectedValue414);

    const noErrorTextUpdateWithCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue121 = "no errors";
    expect(noErrorTextUpdateWithCsvBot).toContain(expectedValue121);
    const jobFinishedTextUpdateWithCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue131 = "Job finished";
    expect(jobFinishedTextUpdateWithCsvBot).toContain(expectedValue131);
});


When("User click on UpdateWithForceCsv Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithForceCsv();
});

Then("User can validate that UpdateWithForceCsv Bot script executed Successfully", async function () {
    const noErrorTextUpdateWithForceCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue14 = "no errors";
    expect(noErrorTextUpdateWithForceCsvBot).toContain(expectedValue14);
});

Then("User can validate that UpdateWithForceCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUpdateWithForceCsvBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue415 = "PS7 Sub-process started";
    expect(PS7TextUpdateWithForceCsvBot).toContain(expectedValue415);

    const noErrorTextUpdateWithForceCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue141 = "no errors";
    expect(noErrorTextUpdateWithForceCsvBot).toContain(expectedValue141);
});

When("User click on UpdateWithoutForceCsv Bot", async function () {
    await botForTableTestPage.clickOnUpdateWithoutForceCsv();
});


Then("User can validate that UpdateWithoutForceCsv Bot script executed Successfully", async function () {
    const noErrorTextUpdateWithoutForceCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue15 = "no errors";
    expect(noErrorTextUpdateWithoutForceCsvBot).toContain(expectedValue15);
    const jobFinishedTextUpdateWithoutForceCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue16 = "Job finished";
    expect(jobFinishedTextUpdateWithoutForceCsvBot).toContain(expectedValue16);
});

Then("User can validate that UpdateWithoutForceCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextUUpdateWithoutForceCsvBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue416 = "PS7 Sub-process started";
    expect(PS7TextUUpdateWithoutForceCsvBot).toContain(expectedValue416);

    const noErrorTextUpdateWithoutForceCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue151 = "no errors";
    expect(noErrorTextUpdateWithoutForceCsvBot).toContain(expectedValue151);
    const jobFinishedTextUpdateWithoutForceCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue161 = "Job finished";
    expect(jobFinishedTextUpdateWithoutForceCsvBot).toContain(expectedValue161);
});

When("User click on RemoveFromObject Bot", async function () {
    await botForTableTestPage.clickOnRemoveFromObject();
});


Then("User can validate that RemoveFromObject Bot script executed Successfully", async function () {
    const noErrorTextRemoveFromObjectBotScript = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue17 = "no errors";
    expect(noErrorTextRemoveFromObjectBotScript).toContain(expectedValue17);
    const jobFinishedTextRemoveFromObjectBotScript = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue18 = "Job finished";
    expect(jobFinishedTextRemoveFromObjectBotScript).toContain(expectedValue18);
});


Then("User can validate that RemoveFromObject Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextRemoveFromObjectBotScript = await botForTableTestPage.getPS7Text(80000);
    const expectedValue417 = "PS7 Sub-process started";
    expect(PS7TextRemoveFromObjectBotScript).toContain(expectedValue417);

    const noErrorTextRemoveFromObjectBotScript = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue171 = "no errors";
    expect(noErrorTextRemoveFromObjectBotScript).toContain(expectedValue171);
    const jobFinishedTextRemoveFromObjectBotScript = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue181 = "Job finished";
    expect(jobFinishedTextRemoveFromObjectBotScript).toContain(expectedValue181);
});


When("User click on RemoveFromCsv Bot", async function () {
    await botForTableTestPage.clickOnRemoveFromCsv();
});


Then("User can validate that RemoveFromCsv Bot script executed Successfully", async function () {
    const noErrorTextRemoveFromCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue19 = "no errors";
    expect(noErrorTextRemoveFromCsvBot).toContain(expectedValue19);
    const jobFinishedTextRemoveFromCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue20 = "Job finished";
    expect(jobFinishedTextRemoveFromCsvBot).toContain(expectedValue20);
});

Then("User can validate that RemoveFromCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextRemoveFromCsvBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue418 = "PS7 Sub-process started";
    expect(PS7TextRemoveFromCsvBot).toContain(expectedValue418);

    const noErrorTextRemoveFromCsvBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue191 = "no errors";
    expect(noErrorTextRemoveFromCsvBot).toContain(expectedValue191);
    const jobFinishedTextRemoveFromCsvBot = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue201 = "Job finished";
    expect(jobFinishedTextRemoveFromCsvBot).toContain(expectedValue201);
});


When("User click on Get Bot", async function () {
    await botForTableTestPage.clickOnGet();
});


Then("User can validate that Get Bot script executed Successfully", async function () {
    const noErrorTextGetBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue21 = "no errors";
    expect(noErrorTextGetBot).toContain(expectedValue21);
});

Then("User can validate that Get Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextGetBot = await botForTableTestPage.getPS7Text(80000);
    const expectedValue419 = "PS7 Sub-process started";
    expect(PS7TextGetBot).toContain(expectedValue419);

    const noErrorTextGetBot = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue211 = "no errors";
    expect(noErrorTextGetBot).toContain(expectedValue211);
});

When("User click on AddWithObject Bot", async function () {
    await botForTableTestPage.clickOnAddWithObject();
});


Then("User can validate that AddWithObject Bot script executed Successfully", async function () {
    const noErrorTextAddWithObject = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue22 = "no errors";
    expect(noErrorTextAddWithObject).toContain(expectedValue22);
    const jobFinishedTextAddWithObject = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue23 = "Job finished";
    expect(jobFinishedTextAddWithObject).toContain(expectedValue23);
});

Then("User can validate that AddWithObject Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextAddWithObject = await botForTableTestPage.getPS7Text(80000);
    const expectedValue420 = "PS7 Sub-process started";
    expect(PS7TextAddWithObject).toContain(expectedValue420);

    const noErrorTextAddWithObject = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue221 = "no errors";
    expect(noErrorTextAddWithObject).toContain(expectedValue221);
    const jobFinishedTextAddWithObject = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue231 = "Job finished";
    expect(jobFinishedTextAddWithObject).toContain(expectedValue231);
});

When("User click on AddWithCsv Bot", async function () {
    await botForTableTestPage.clickOnAddWithCsv();
});


Then("User can validate that AddWithCsv Bot script executed Successfully", async function () {
    const noErrorTextAddWithCsv = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue24 = "no errors";
    expect(noErrorTextAddWithCsv).toContain(expectedValue24);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue25 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue25);
});

Then("User can validate that AddWithCsv Bot script executed Successfully with PS7 Log", async function () {

    const PS7TextAddWithCsv = await botForTableTestPage.getPS7Text(80000);
    const expectedValue421 = "PS7 Sub-process started";
    expect(PS7TextAddWithCsv).toContain(expectedValue421);

    const noErrorTextAddWithCsv = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue241 = "no errors";
    expect(noErrorTextAddWithCsv).toContain(expectedValue241);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue251 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue251);
});

When("User click on InitializedWithObjectData Table", async function () {
    await botForTableTestPage.clickOnInitializedWithObjectData();
});


Then("User can validate that InitializedWithObjectData Table script executed Successfully", async function () {
    const noErrorTextInitializedWithObjectData = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue25 = "no errors";
    expect(noErrorTextInitializedWithObjectData).toContain(expectedValue25);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue26 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue26);
});

Then("User can validate that InitializedWithObjectData Table script executed Successfully with PS7 Log", async function () {

    const PS7TextInitializedWithObjectData = await botForTableTestPage.getPS7Text(80000);
    const expectedValue422 = "PS7 Sub-process started";
    expect(PS7TextInitializedWithObjectData).toContain(expectedValue422);

    const noErrorTextInitializedWithObjectData = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue251 = "no errors";
    expect(noErrorTextInitializedWithObjectData).toContain(expectedValue251);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue261 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue261);
});


When("User click on InitializedWithCsvData Table", async function () {
    await botForTableTestPage.clickOnInitializedWithCsvData();
});


Then("User can validate that InitializedWithCsvData Table script executed Successfully", async function () {
    const noErrorTextInitializedWithCsvData = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue26 = "no errors";
    expect(noErrorTextInitializedWithCsvData).toContain(expectedValue26);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue27 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue27);
});

Then("User can validate that InitializedWithCsvData Table script executed Successfully with PS7 Log", async function () {

    const PS7TextInitializedWithCsvData = await botForTableTestPage.getPS7Text(80000);
    const expectedValue423 = "PS7 Sub-process started";
    expect(PS7TextInitializedWithCsvData).toContain(expectedValue423);

    const noErrorTextInitializedWithCsvData = await botForTableTestPage.getNoErrorText(6000);
    const expectedValue261 = "no errors";
    expect(noErrorTextInitializedWithCsvData).toContain(expectedValue261);
    const jobFinishedTextAddWithCsv = await botForTableTestPage.getJobFinishedText(6000);
    const expectedValue271 = "Job finished";
    expect(jobFinishedTextAddWithCsv).toContain(expectedValue271);
});

When("User click on StartJobCsv Bot", async function () {
    await botForTableTestPage.clickOnStartJobsCsv();
});

When("Go to RawData-1 Details", async function () {
    await botForTableTestPage.clickOnRawData1();
    await botForTableTestPage.clickOnDisplay100ItemsR1();
});


Then("User can validate that 5k rows inserted Successfully also that Last row is having number 4999", async function () {
    await botForTableTestPage.validateTotalRowCountR1();
    await botForTableTestPage.clickOnPageno50();
    await botForTableTestPage.validateLastRowEntryCount();

});


When("Go to RawData-3 Details", async function () {
    await botForTableTestPage.clickOnRawData3();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await botForTableTestPage.clickOnDisplay100ItemsR3();
});


Then("User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie", async function () {
    await botForTableTestPage.validateTotalRowCountR3();
    await botForTableTestPage.clickOnPageno53();
    await botForTableTestPage.validateLastRowEntryCountRaw3();
    await botForTableTestPage.validateLastRowTitleTextRaw3();
});


When("Go to RawData-5 Details", async function () {
    await botForTableTestPage.clickOnRawData5();
    await new Promise(resolve => setTimeout(resolve, 2000));
});


Then("User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There", async function () {
    await botForTableTestPage.validateTotalRowCountR5();
    await botForTableTestPage.clickOnPageno105();
    await botForTableTestPage.validateRaw5Column();
});


When("Go to RawData-7 Details", async function () {
    await botForTableTestPage.clickOnRawData7();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await botForTableTestPage.clickOnDisplay100ItemsR7();
});


Then("User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]", async function () {
    await botForTableTestPage.validateTotalRowCountR7();
    await botForTableTestPage.clickOnPageno53R7();
    await botForTableTestPage.validateLastRowTitleTextRaw7();
    await botForTableTestPage.getUserPrincipleNameValidationRaw7();
});


When("Go to RawData-9 Details", async function () {
    await botForTableTestPage.clickOnRawData9();
    await new Promise(resolve => setTimeout(resolve, 2000));
});


Then("User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director", async function () {
    await botForTableTestPage.validateTotalRowCountR9();
    await botForTableTestPage.clickOnPageno110();
    await botForTableTestPage.validateLastRowTitleTextRaw9();
    await botForTableTestPage.validateLastRowDirectorTextRaw9();
    await botForTableTestPage.validateLastRowUserPrincipalNameTextRaw9();
    await botForTableTestPage.clickOnPageno106();
    await botForTableTestPage.validateRowTitleTextRaw9();
    await botForTableTestPage.validateRowDirectorTextRaw9();
    await botForTableTestPage.validateRow106UserPrincipalNameTextRaw9();
    await botForTableTestPage.clickOnPageno107();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await botForTableTestPage.validateRowTitleTextRaw9();
    await botForTableTestPage.validateRowDirectorTextRaw9();
    await botForTableTestPage.validateRow107UserPrincipalNameTextRaw9();
    await botForTableTestPage.clickOnPageno108();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await botForTableTestPage.validateRowTitleTextRaw9();
    await botForTableTestPage.validateRowDirectorTextRaw9();
    await botForTableTestPage.validateRow108UserPrincipalNameTextRaw9();
    await botForTableTestPage.clickOnPageno109();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await botForTableTestPage.validateRowTitleTextRaw9();
    await botForTableTestPage.validateRowDirectorTextRaw9();
    await botForTableTestPage.validateRow109UserPrincipalNameTextRaw9();
});


When("Go to RawData-11 Details", async function () {
    await botForTableTestPage.clickOnRawData11();
    await new Promise(resolve => setTimeout(resolve, 2000));
});


Then("User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]", async function () {
    await botForTableTestPage.validateTotalRowCountR11();
    await botForTableTestPage.clickOnPageno110R11();
    await botForTableTestPage.validateRowTitleTextRaw11();
    await botForTableTestPage.validateRowDirectorTextRaw11();
    await botForTableTestPage.validateRowComposserTextRaw11();
    await botForTableTestPage.validateRowUserPrincipalNameTextRaw11();
});


When("click on InitializedWithCsvDataHeader section", async function () {
    await botForTableTestPage.clickOInitializedWithCsvDataHeader();
    await new Promise(resolve => setTimeout(resolve, 2000));
});


Then("User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]", async function () {
    await botForTableTestPage.validateTotalRowsCountTable1();
    await botForTableTestPage.clickOnPageNo110Table1();
    await botForTableTestPage.validateRowTitleTextTable1();
    await botForTableTestPage.validateRowDirectorTextTable1();
    await botForTableTestPage.validateRowComposserTextTable1();
    await botForTableTestPage.validateRowUserPrincipalNameTextTable1();
});

When("click on InitializedWithObjectDataHeader section", async function () {
    await botForTableTestPage.clickOnInitializedWithObjectDataHeader();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await botForTableTestPage.clickOnPageno100Table2();
});


Then("User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer", async function () {
    await botForTableTestPage.validateTotalRowsCountTable2();
    await botForTableTestPage.clickOnPageno105Table2();
    await botForTableTestPage.validateRowComposerTextTable2();
});