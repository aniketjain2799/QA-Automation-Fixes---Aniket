import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import VariableConnectIdPage from "../../pages/E2EFlowOfRunningBotWithConnectIDHavingVariablePage";



let variableConnectIdPage: VariableConnectIdPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the ConnectId Variable folder", async function () {
    variableConnectIdPage = new VariableConnectIdPage(fixture.page);
    await variableConnectIdPage.clickOnConnectIDVariable();
});

When("the User clicks on the Bot1", async function () {
    await variableConnectIdPage.clickOnBot1();
});

When("the User clicks on the Bot2", async function () {
    await variableConnectIdPage.clickOnBot2();
});

When("the User clicks on Raw data 1 tab", async function () {
    await variableConnectIdPage.clickOnRawData1();
});

Then("Bot1 script Should Be Executed Successfully", async function () {

    const ProxyConnectText = await variableConnectIdPage.getProxyConnectIdText(600000);
    const expectedValue88 = "Using Connect IDs: ConnectID_New1";
    expect(ProxyConnectText).toContain(expectedValue88);

    const jobFinishedText = await variableConnectIdPage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await variableConnectIdPage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("the User can validate all the value present in Raw Data 0 Tab", async function () {
    await variableConnectIdPage.doubleClickOnMicrosoftCloud();
    await variableConnectIdPage.validateJsonEditorText();
    await variableConnectIdPage.validateConnectIdNew1FirstText();
    await variableConnectIdPage.validatUniqueIdText();
    await variableConnectIdPage.validateConnectIdNew1SecondText();
    await variableConnectIdPage.validateMicrosoftCloudText();
    await variableConnectIdPage.validateUserNameText();
    await variableConnectIdPage.validateCertificateValueText();
    await variableConnectIdPage.clickOnCloseButton();

});

Then("the User can validate All the value present in Raw Data 0 Tab", async function () {
    await variableConnectIdPage.doubleClickOnMicrosoftCloud();
    await variableConnectIdPage.validateJsonEditorText();
    await variableConnectIdPage.validateConnectIdNew1FirstText();
    await variableConnectIdPage.validatUniqueIdTextP();
    await variableConnectIdPage.validateConnectIdNew1SecondText();
    await variableConnectIdPage.validateMicrosoftCloudText();
    await variableConnectIdPage.validateUserNameText();
    await variableConnectIdPage.validateCertificateValueText();
    await variableConnectIdPage.clickOnCloseButton();

});

Then("Bot2 Script Should Be Executed Successfully", async function () {

    const ProxyConnectText1 = await variableConnectIdPage.getProxyConnectIdText(600000);
    const expectedValue881 = "Using Connect IDs: ConnectID_New1";
    expect(ProxyConnectText1).toContain(expectedValue881);

    const jobFinishedText1 = await variableConnectIdPage.getJobFinishedText(120000);
    const expectedValue11 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue11);

    const noErrorText12 = await variableConnectIdPage.getNoErrorText(120000);
    console.log(noErrorText12);
    const expectedValue12 = "no errors";
    expect(noErrorText12).toContain(expectedValue12);
});

Then("the User can validate all the value present in Raw Data 1 Tab", async function () {
    await variableConnectIdPage.doubleClickOnConnectId1();
    await variableConnectIdPage.clickOnView1();
    await variableConnectIdPage.validateJsonStructure1();
    await variableConnectIdPage.clickOnCancleButton();
    await variableConnectIdPage.clickOnView2();
    await variableConnectIdPage.validateJsonStructure2();
    await variableConnectIdPage.clickOnCancleButton();
    await variableConnectIdPage.clickOnView3();
    await variableConnectIdPage.validateJsonStructure3();
    await variableConnectIdPage.clickOnCancleButton();

});


Then("the User can validate All the value present in Raw Data 1 Tab", async function () {
    await variableConnectIdPage.doubleClickOnConnectId1();
    await variableConnectIdPage.clickOnView1();
    await variableConnectIdPage.validateJsonStructure4();
    await variableConnectIdPage.clickOnCancleButton();
    await variableConnectIdPage.clickOnView2();
    await variableConnectIdPage.validateJsonStructure6();
    await variableConnectIdPage.clickOnCancleButton();
    await variableConnectIdPage.clickOnView3();
    await variableConnectIdPage.validateJsonStructure5();
    await variableConnectIdPage.clickOnCancleButton();

});

