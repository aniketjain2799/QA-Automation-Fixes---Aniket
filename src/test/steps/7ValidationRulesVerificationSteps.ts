import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ValidationRules from "../../pages/7ValidationRulesVerificationPage";
import { expect } from '@playwright/test';


let validationRules: ValidationRules;

When("the User clicks on Allowed Validation Rules", async function () {
    validationRules = new ValidationRules(fixture.page);
    await validationRules.clickAllowedValidationTab();
});

When("the User sends three values to the Allowed box one by one, pressing Enter after each", async function () {
    await validationRules.enterAllowedValues(["Lalit", "Achal", "Aniket"]);
});

When("the User clicks on the Save checkbox under Allowed Validation Rules", async function () {
    await validationRules.clickSaveAllowedCheckbox();
});

When("the User enables the Allowed Validation Rule checkbox", async function () {
    await validationRules.clickEnabledCheckbox();
});

When("the User clicks on the Save checkbox of the Schema", async function () {
    await validationRules.clickSaveSchemaCheckbox();
    await new Promise(resolve => setTimeout(resolve, 8000));
});

When("the User clicks on the dropdown", async function () {
    await validationRules.clickDropdown();
});

Then("the User selects a single value from the dropdown", async function () {
    await validationRules.selectSingleDropdownValue("Achal");
});

Then("the User selects multiple values from the dropdown", async function () {
    validationRules = new ValidationRules(fixture.page);
    await validationRules.selectMultipleDropdownValues(["Achal", "Aniket", "Lalit"]);
});

When("the User clicks on Disallowed Validation Rules", async function () {
    await validationRules.clickDisallowedValidationTab();
});

When("the User sends one value to the Disallowed box by pressing Enter", async function () {
    await validationRules.sendSingleValueToDisallowed("Lalit");
});

When("the User enables the Disallowed Validation Rule checkbox", async function () {
    await validationRules.enableDisallowedCheckbox();
});

Then("the User sends two values to the Disallowed box one by one by pressing Enter, where the second value is disallowed", async function () {
    await validationRules.sendTwoValuesToDisallowed(["Achal", "Lalit"]);
});

Then("an error icon should be visible to the User", async function () {
    await validationRules.verifyErrorIconVisible();
});

When("the User clicks on Format Validation Rules", async function () {
    validationRules = new ValidationRules(fixture.page);
    await validationRules.clickFormatValidationTab();
});

When("the User sends one value to the Regex box by pressing Enter", async function () {
    await validationRules.enterRegexValue("^[A-Za-z]+$");
});

When("the User enables the Format Validation Rule checkbox", async function () {
    await validationRules.enableFormatValidationCheckbox();
});

Then("the User sends two values to the Format box one by one by pressing Enter, where the second value is of mix of letters and numbers", async function () {
    await validationRules.sendFormatValues(["OnlyLetters", "Mix123"]);
});

When("the User clicks on String Validation Rules", async function () {
    validationRules = new ValidationRules(fixture.page);
    await validationRules.clickStringValidationTab();
});

When("the User sends three values one by one to the Minimum, Maximum, and Restricted input boxes", async function () {
    await validationRules.setStringValidationInputs("1", "4", "A");
});

When("the User enables the String Validation Rule checkbox", async function () {
    await validationRules.enableStringValidationCheckbox();
});

Then("the User sends three values to the input box one by one by pressing Enter: {string}, {string}, and {string}, and validates when the error icon should appear",
    async function (val1, val2, val3) {
        await validationRules.sendAndValidateStringInputs([
            { value: val1, shouldError: false },
            { value: val2, shouldError: true },
            { value: val3, shouldError: true }
        ]);
    });

When("the User clicks on the dropdown1", async function () {
    validationRules = new ValidationRules(fixture.page);
    await validationRules.clickNumericDropdown();
});

When("the User selects the {string} option", async function (option: string) {
    await validationRules.selectDropdownOption(option);
});

When("the User clicks on Numeric Validation Rules and clears the Maximum value field and enters {int}", async function (maxVal: number) {
    await validationRules.clickNumericTabAndSetMaxValue(maxVal);
});

When("the User enables the Numeric Validation Rule checkbox", async function () {
    await validationRules.enableNumericCheckbox();
});

Then("the User sends two values to the input box one by one by pressing Enter: {string} and {string}, and validates when the error icon should appear",
    async function (val1: string, val2: string) {
        await validationRules.sendAndValidateNumericInputs([
            { value: val1, shouldError: false },
            { value: val2, shouldError: true }
        ]);
    });

Then("the {string} Validation Rule tab should not be clickable", async function (tabName: string) {
    const isClickable = await validationRules.isTabClickable(tabName);
    expect(isClickable).toBe(false);
});