import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CreateNewClassInConnector from "../../pages/4CreationOfClassInConnectorPage";
import * as data from "../../helper/util/test-data/TestData.json";

let createNewClassInConnector: CreateNewClassInConnector;
const userData = data[13];

When("the user clicks on the Schema tab", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.clickOnSchemaTab();
});

When("the User clicks AutomationTwo connector", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.clickAutomationTwoConnector();
});


When("the user clicks on the Classes section", async function () {
    await createNewClassInConnector.clickOnClasses();
});

When("And the User clicks on the arrow icon of Classes", async function () {
    await createNewClassInConnector.clickOnArrowIcon();
});

When("the User clicks on the arrow icon of Properties", async function () {
    await createNewClassInConnector.clickOnArrowIcon();
});

When("the user clicks on the plus icon", async function () {
    await createNewClassInConnector.clickOnAddIcon();
});

When("the user verifies that the checkbox is clickable", async function () {
    await createNewClassInConnector.verifyCheckboxIsClickable();
});

When("the user clears the Name input and enters the username", async function () {

    await createNewClassInConnector.enterNameInput(userData.Name);
});

When("the user clears the Display Name input and enters the display name", async function () {
    await createNewClassInConnector.enterDisplayNameInput(userData.DisplayName);
});

When("the user clicks on the icon dropdown", async function () {
    await createNewClassInConnector.clickOnDropdown();
});

When("selects the person option", async function () {
    await createNewClassInConnector.selectPerson();
});

When("clicks again on the Classes section", async function () {
    await createNewClassInConnector.clickOnClasses();
});

Then("the user should see the message {string} and clicks on the {string} button", async function (message: string, button: string) {
    await createNewClassInConnector.validateDiscardMessageAndClickCancel(message);
});

When("the user clicks on the save icon", async function () {
    await createNewClassInConnector.clickOnSaveIcon();
});

Then("the user should See the message {string}", async function (successMsg1: string) {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.validateSuccessMessage1(successMsg1);
});

When("clicks on the main connector save icon", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.clickOnMainSaveIcon();
});

Then("the user should see the message {string}", async function (successMsg: string) {
    await createNewClassInConnector.validateSuccessMessage(successMsg);
});

Then("the user can validate the copy icon is clickable", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.validateCopyIconIsClickable();
});

When("the User clicks on Json Icon2", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.clickOnJsonSchema2();
});

Then("the User can validate the import fields from Json Schema2", async function () {
    await createNewClassInConnector.validateAutomationUserField();
    await createNewClassInConnector.validateAutomationUserDisplayField();
});

When("the User clicks on delete icon", async function () {
    await createNewClassInConnector.clickOnDelete();
});

Then("the User clicks on continue", async function () {
    await createNewClassInConnector.clickOnContinue();
});

Then("the connnector class should be Deleted with this message {string}", async function (successMsg2: string) {
    await createNewClassInConnector.validateSuccessMessage1(successMsg2);
});

When("the User click on User profile", async function () {
    createNewClassInConnector = new CreateNewClassInConnector(fixture.page);
    await createNewClassInConnector.clickOnProfile();
});

Then("the User click on Logout Button", async function () {
    await createNewClassInConnector.clickOnLogout();
});
