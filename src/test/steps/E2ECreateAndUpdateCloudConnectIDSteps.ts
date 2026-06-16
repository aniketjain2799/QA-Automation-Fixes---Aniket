import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CreateUpdateConnectIdPage from "../../pages/E2ECreateAndUpdateCloudConnectIDPage";
import * as data from "../../helper/util/test-data/TestData.json";



let createUpdateConnectIdPage: CreateUpdateConnectIdPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the user clicks on the Setting menu", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);
    await createUpdateConnectIdPage.clickOnSettings();
    
});

When("the user clicks on Key Vault", async function () {
    await createUpdateConnectIdPage.clickOnKeyVault();
    
});

Then("the user should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID", async function () {
    const connectIdName = data[8].newConnectionName;
    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnAddCredentials();
    await createUpdateConnectIdPage.enterNewConnectionNameText(connectIdName);
    await createUpdateConnectIdPage.enterNewConnectionUserIdText(data[8].newConnectionUserId);
    await createUpdateConnectIdPage.enterNewConnectionPasswordText(data[8].newConnectionUserPassword);
    await createUpdateConnectIdPage.clickOnOkButton();
    await createUpdateConnectIdPage.clickOnAchalCloud();
    await createUpdateConnectIdPage.NewConnectIdTextValidation();
});


Then("the User should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);

    const connectIdName = data[8].newConnectionName1;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnAddCredentials();
    await createUpdateConnectIdPage.enterNewConnectionNameText(connectIdName);
    await createUpdateConnectIdPage.clickOnExecuteOn();
    await createUpdateConnectIdPage.clickOnQaTest2();
    await createUpdateConnectIdPage.enterNewConnectionUserIdText(data[8].newConnectionUserId);
    await createUpdateConnectIdPage.enterNewConnectionPasswordText(data[8].newConnectionUserPassword);
    await createUpdateConnectIdPage.clickOnOkButton();
});

Then("the User Should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);

    const connectIdName = data[8].newConnectionName2;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnAddCredentials();
    await createUpdateConnectIdPage.clickOnMicrosoftCloud();
    await createUpdateConnectIdPage.clickOnWindowsSystem();
    await createUpdateConnectIdPage.enterNewConnectionNameText(connectIdName);
    await createUpdateConnectIdPage.clickOnExecuteOn1();
    await createUpdateConnectIdPage.clickOnQaTest2();
    await createUpdateConnectIdPage.enterNewConnectionUserIdText(data[8].newConnectionUserId1);
    await createUpdateConnectIdPage.enterNewConnectionPasswordText(data[8].newConnectionUserPassword1);
    await createUpdateConnectIdPage.clickOnOkButton();
});

Then("the User should Be Able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);

    const connectIdName = data[8].newConnectionName4;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnAddCredentials();
    await createUpdateConnectIdPage.clickOnMicrosoftCloud();
    await createUpdateConnectIdPage.clickOnWindowsSystem();
    await createUpdateConnectIdPage.enterNewConnectionNameText(connectIdName);
    await createUpdateConnectIdPage.clickOnExecuteOn1();
    await createUpdateConnectIdPage.clickOnQaTest2();
    await createUpdateConnectIdPage.enterNewConnectionUserIdText(data[8].newConnectionUserId1);
    await createUpdateConnectIdPage.enterNewConnectionPasswordText(data[8].newConnectionUserPassword1);
    await createUpdateConnectIdPage.clickOnOkButton();
});

Then("the User should Be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);

    const connectIdName = data[8].newConnectionName3;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnAddCredentials();
    await createUpdateConnectIdPage.enterNewConnectionNameText(connectIdName);
    await createUpdateConnectIdPage.clickOnExecuteOn();
    await createUpdateConnectIdPage.clickOnQaTest2();
    await createUpdateConnectIdPage.enterNewConnectionUserIdText(data[8].newConnectionUserId);
    await createUpdateConnectIdPage.enterNewConnectionPasswordText(data[8].newConnectionUserPassword);
    await createUpdateConnectIdPage.clickOnOkButton();
});


When("User click on Bot", async function () {
    await createUpdateConnectIdPage.clickOnBot();
    
});

When("User click on Bot4", async function () {
    await createUpdateConnectIdPage.clickOnBot4();
    
});

When("click on Use this ConnectIds", async function () {
    await createUpdateConnectIdPage.clickOnUseConnectID();
    
});

When("click On Use this ConnectIds", async function () {
    await createUpdateConnectIdPage.clickOnUseConnectID();
    await createUpdateConnectIdPage.clickOnConnectIDNew1();
    await createUpdateConnectIdPage.clickOnConnectIDNew2();
    await createUpdateConnectIdPage.clickOnConnectIDNew3();
    
});

Then("user can able to assign the connect ID to that Bot", async function () {
    await createUpdateConnectIdPage.clickOnDropDown();
    await createUpdateConnectIdPage.clickOnDropDownAchalCloud();
    
    
});

Then("Bot script should be executed Successfully", async function () {

    const ProxyConnectText = await createUpdateConnectIdPage.getProxyConnectIdText(600000);
    const expectedValue88 = "Using Connect IDs: Achal-Cloud";
    expect(ProxyConnectText).toContain(expectedValue88);

    const jobFinishedTextE2 = await createUpdateConnectIdPage.getJobFinishedText(1200000);
    const expectedValue2 = "Job finished";
    expect(jobFinishedTextE2).toContain(expectedValue2);

    const noErrorTextE2 = await createUpdateConnectIdPage.getNoErrorText(1200000);
    console.log(noErrorTextE2);
    const expectedValue3 = "no errors";
    expect(noErrorTextE2).toContain(expectedValue3);
});

When("the user click on newly created ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnAchalCloud();
    
});

When("the user click on newly Created ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnTestautomation_CloudUpdate();
    
});

When("the user Click on newly Created ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnTestautomation_WindowUpdate();
    
});

Then("the user can delete the the newly created ConnectID", async function () {
    await createUpdateConnectIdPage.clickOnDelete();
    await createUpdateConnectIdPage.clickOnDeleteOk();
    
});

Then("the user can update the Newly created connectID", async function () {
    await createUpdateConnectIdPage.clickOnEdit();
    await createUpdateConnectIdPage.enterUpdateConnectionNameText(data[8].updateConnectionName);
    await createUpdateConnectIdPage.clickOnOkButton();
    await createUpdateConnectIdPage.clickOnCloudLalit();
    await createUpdateConnectIdPage.UpdateConnectIdTextValidation();
    
});

Then("the User can update the Newly created connectID", async function () {
    
    const connectIdName = data[8].updateConnectionName1;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnEdit();
    await createUpdateConnectIdPage.enterUpdateConnectionNameText(data[8].updateConnectionName1);
    await createUpdateConnectIdPage.clickOnOkButton();
    await createUpdateConnectIdPage.clickOnCloudLalit1();
    await createUpdateConnectIdPage.UpdateConnectIdTextValidation1();
    
});

Then("the User can update the Newly Created connectID", async function () {
    
    const connectIdName = data[8].updateConnectionName2;

    const isConnectIdPresent = await createUpdateConnectIdPage.isConnectIdPresent(connectIdName);
    if (isConnectIdPresent) {
        await createUpdateConnectIdPage.deleteConnectId(connectIdName);
    }
    await createUpdateConnectIdPage.clickOnEdit();
    await createUpdateConnectIdPage.enterUpdateConnectionNameText(data[8].updateConnectionName2);
    await createUpdateConnectIdPage.clickOnOkButton();
    await createUpdateConnectIdPage.clickOnWindowLalit1();
    await createUpdateConnectIdPage.UpdateConnectIdTextValidation2();
    
});

When("the user click on Updated ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnCloudLalit();
    
});

When("the User click on Updated ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnCloudLalit1();
    
});

When("the User click On Updated ConnectId", async function () {
    await createUpdateConnectIdPage.clickOnWindowLalit1();
    
});

When("click on ConnectID_Cases Folder", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);
    await createUpdateConnectIdPage.clickOnConnectIDCasesFolder();
    
});

When("User click on Bot1", async function () {
    await createUpdateConnectIdPage.clickOnBot1();
    
});

When("User click on Bot2", async function () {
    await createUpdateConnectIdPage.clickOnBot2();
    
});

When("User click on Bot3", async function () {
    await createUpdateConnectIdPage.clickOnBot3();
    
});

Then("User can able to assign the connect ID to that Bot", async function () {
    await createUpdateConnectIdPage.clickOnDropDown();
    await createUpdateConnectIdPage.clickOnDropDownTestautomation_Cloud();
    
    
});

Then("User Can able to assign the connect ID to that Bot", async function () {
    await createUpdateConnectIdPage.clickOnDropDown();
    await createUpdateConnectIdPage.clickOnDropDownTestautomation_Windows();
    
    
});

Then("Bot1 script should be executed Successfully", async function () {

    const ProxyConnectText1 = await createUpdateConnectIdPage.getProxyConnectIdText1(600000);
    const expectedValue881 = "Using Connect IDs: Testautomation_Cloud";
    expect(ProxyConnectText1).toContain(expectedValue881);

    const jobFinishedTextE21 = await createUpdateConnectIdPage.getJobFinishedText(1200000);
    const expectedValue21 = "Job finished";
    expect(jobFinishedTextE21).toContain(expectedValue21);

    const noErrorTextE211 = await createUpdateConnectIdPage.getNoErrorText(1200000);
    console.log(noErrorTextE211);
    const expectedValue311 = "no errors";
    expect(noErrorTextE211).toContain(expectedValue311);
});

Then("Bot2 script should be executed Successfully", async function () {

    const ProxyConnectText12 = await createUpdateConnectIdPage.getProxyConnectIdText2(600000);
    const expectedValue882 = "Using Connect IDs: Testautomation_windows";
    expect(ProxyConnectText12).toContain(expectedValue882);

    const jobFinishedTextE22 = await createUpdateConnectIdPage.getJobFinishedText(1200000);
    const expectedValue22 = "Job finished";
    expect(jobFinishedTextE22).toContain(expectedValue22);

    const noErrorTextE212 = await createUpdateConnectIdPage.getNoErrorText(1200000);
    console.log(noErrorTextE212);
    const expectedValue312 = "no errors";
    expect(noErrorTextE212).toContain(expectedValue312);
});

When("Click On Run Button1", async function () {
    createUpdateConnectIdPage = new CreateUpdateConnectIdPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 6000));
    await createUpdateConnectIdPage.clickOnRunButton();
    await createUpdateConnectIdPage.clickOnCombobox();
    await createUpdateConnectIdPage.clickOnConnectIDNew1();
    await createUpdateConnectIdPage.clickOnCombobox();
    await createUpdateConnectIdPage.clickOnConnectIDNew2();
    await createUpdateConnectIdPage.clickOnYesButton();
});

Then("Bot3 script should be executed Successfully", async function () {

    const ProxyConnectText15 = await createUpdateConnectIdPage.getMultiConnectIdText(600000);
    const expectedValue15 = "Using Connect IDs: ConnectID_New1,ConnectID_New3";
    expect(ProxyConnectText15).toContain(expectedValue15);

    const jobFinishedTextE216 = await createUpdateConnectIdPage.getJobFinishedText(1200000);
    const expectedValue216 = "Job finished";
    expect(jobFinishedTextE216).toContain(expectedValue216);

    const noErrorTextE218 = await createUpdateConnectIdPage.getNoErrorText(1200000);
    console.log(noErrorTextE218);
    const expectedValue318 = "no errors";
    expect(noErrorTextE218).toContain(expectedValue318);
});

