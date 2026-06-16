import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CreateNewConnector from "../../pages/3CreateNewConnectorGenralTabandJsonSchemaValidationPage";
import * as data from "../../helper/util/test-data/TestData.json";


let createNewConnector: CreateNewConnector;

setDefaultTimeout(1200 * 1000 * 2);

When("click on Create New", async function () {
    createNewConnector = new CreateNewConnector(fixture.page);
    await createNewConnector.clickOnCreateNew();
});

When("the User click on general tab", async function () {
    await createNewConnector.clickOnGeneralTab();
});

When("the User fill all the necessary deatils of general tab Except Display Name", async function () {
    const connectorData = data[12];
    await createNewConnector.enterName(connectorData.name);
    await createNewConnector.enterFrameworkName(connectorData.frameworkName);
    await createNewConnector.enterShortName(connectorData.shortName);
    await createNewConnector.enterVendorName(connectorData.vendorName);
    await createNewConnector.enterProductName(connectorData.productName);
    await createNewConnector.enterProductShortName(connectorData.productShortName);
    await createNewConnector.clickOnContactDropdown();
    await createNewConnector.clickOnSelectOptioncreatedBy();
    await createNewConnector.enterVersion(connectorData.version);
});

When("the User click on Save Icon", async function () {
    await createNewConnector.clickOnSaveIcon();
});

Then("the User should verify that the display name is mandatory and click ok", async function () {
    const errorVisible = await fixture.page.isVisible(createNewConnector.Elements.displayNameError);
    expect(errorVisible).toBeTruthy();

    await fixture.page.click(createNewConnector.Elements.okButton);
});

When("the User fill the require display field", async function () {
    const connectorData = data[12];
    await createNewConnector.enterDisplayNameInput(connectorData.displayName);
    await createNewConnector.enterVersion(connectorData.version);
});

Then("the User should be able to create a new Connector", async function () {
    await new Promise(resolve => setTimeout(resolve, 10000));
    await fixture.page.waitForSelector(createNewConnector.Elements.connectorHeader1, { timeout: 15000 });
    const isConnectorCreated = await fixture.page.isVisible(createNewConnector.Elements.connectorHeader1);
    expect(isConnectorCreated).toBeTruthy();
});

When("the User clicks on Json Icon", async function () {
    await createNewConnector.clickOnJsonIcon();
});


Then('the User can validate the import fields from Json Schema', async function () {
    await createNewConnector.validateConODBCField();
    await createNewConnector.validateConnectorODBCField();
    await createNewConnector.validateSQLField();
    await createNewConnector.validateAdeleVanceField();
    await createNewConnector.validateSODBCField();
    await createNewConnector.validateVODBCField();
    await createNewConnector.validatePODBCField();
    await createNewConnector.validatePSODBCField();
});

When("the User click on close Icon", async function () {
    createNewConnector = new CreateNewConnector(fixture.page);
    await createNewConnector.clickOnCloseIcon2();
});

