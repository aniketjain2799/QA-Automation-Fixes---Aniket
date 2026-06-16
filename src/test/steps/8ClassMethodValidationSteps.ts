import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import MethodClassValidation from "../../pages/8ClassMethodValidationPage";
import { expect } from '@playwright/test';


let methodClassValidation: MethodClassValidation;

When("Expand the classes section", async function () {
    methodClassValidation = new MethodClassValidation(fixture.page);
    await methodClassValidation.expandClassesSection();
});

When("the User clicks on the User class", async function () {
    await methodClassValidation.clickUserClass();
});

When("User first clears the value of Display Name", async function () {
    await methodClassValidation.clearDisplayName();
});

When("the user clicks on the check icon to save the class", async function () {
    methodClassValidation = new MethodClassValidation(fixture.page);
    await methodClassValidation.clickCheckIcon();
});

Then("User can validate this text \"Display Name field is invalid\"", async function () {
    await methodClassValidation.validateInvalidDisplayNameText();
});

When("the User clicks on the OK button", async function () {
    await methodClassValidation.clickOkButton();
});

Then("the user can validate this text \"Display Name field is required\"", async function () {
    await methodClassValidation.validateRequiredDisplayNameText();
});

When("the User sends the value {string} again in the Display Name box", async function (displayValue: string) {
    await methodClassValidation.enterDisplayNameAgain(displayValue);
});

Then("the User can validate the import fields From Json Schema3", async function () {
    await methodClassValidation.validateJsonSchemaFields();
});

When("the User expands the User class", async function () {
    await methodClassValidation.expandUserClass();
});

When("the User clicks on the Methods tab", async function () {
    await methodClassValidation.clickMethodsTab();
});

When("the User expands the selected method", async function () {
    await methodClassValidation.expandMethod();
});

When("the User clicks on the Add icon", async function () {
    await methodClassValidation.clickAddIcon();
});

When("the User turns off the script toggle", async function () {
    methodClassValidation = new MethodClassValidation(fixture.page);
    await methodClassValidation.toggleOffScript();
});

Then("the User sends the following script to the Monaco editor:", async function (docString: string) {
    await methodClassValidation.enterScript(docString);
});

When("the User clicks on the Publish icon", async function () {
    await methodClassValidation.clickPublishAndContinue();
});

Then("the User should not see the imported field from JSON Schema Schema4", async function () {
    await methodClassValidation.validateJsonSchemaFieldIsNotVisible();
});

Then("the User should see the imported field from JSON Schema Schema5", async function () {
    await methodClassValidation.validateJsonSchemaFieldIsVisible();
});

Then("the User can validate that the Framework Name and Display Name fields are visible", async function () {
    await methodClassValidation.validateFrameworkAndDisplayNameVisible();
});

When("the User clicks on the Get Method tab", async function () {
    await methodClassValidation.clickOnMethodTab("Get");
});

Then("the User can validate that the Get method framework name is visible in the JSON schema", async function () {
    await methodClassValidation.validateMethodInSchema("Get");
});

When("the User clicks on the New Method tab", async function () {
    await methodClassValidation.clickOnMethodTab("New");
});

Then("the User can validate that the New method framework name is visible in the JSON schema", async function () {
    await methodClassValidation.validateMethodInSchema("New");
});

When("the User clicks on the Update Method tab", async function () {
    await methodClassValidation.clickOnMethodTab("Update");
});

Then("the User can validate that the Update method framework name is visible in the JSON schema", async function () {
    await methodClassValidation.validateMethodInSchema("Update");
});

When("the User clicks on the Remove Method tab", async function () {
    await methodClassValidation.clickOnMethodTab("Remove");
});

Then("the User can validate that the Remove method framework name is visible in the JSON schema", async function () {
    await methodClassValidation.validateMethodInSchema("Remove");
});

When("the User click on delete Icon1", async function () {
    methodClassValidation = new MethodClassValidation(fixture.page);
    await methodClassValidation.clickOnDelete();
});
