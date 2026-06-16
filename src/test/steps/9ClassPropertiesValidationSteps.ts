import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import PropertiesClassValidation from "../../pages/9ClassPropertiesValidationPage";
import { expect } from '@playwright/test';


let propertiesClassValidation: PropertiesClassValidation;

When("the User clicks on the Properties tab", async function () {
    propertiesClassValidation = new PropertiesClassValidation(fixture.page);
    await propertiesClassValidation.clickOnPropertiesTab();
});

When("the User clicks on the Add button", async function () {
    await propertiesClassValidation.clickOnAddButton();
});

When("the User clears the Name input field and enters {string} into it", async function (name: string) {
    await propertiesClassValidation.enterPropertyName(name);
});

When("the User clears the Display Name input field and enters {string} into it", async function (displayName: string) {
    await propertiesClassValidation.clickOnNewProperty1Field();
    await propertiesClassValidation.enterDisplayName(displayName);
});

When("the User clicks on the Search Name icon", async function () {
    await propertiesClassValidation.clickSearchIcon();
});

When("the User clicks on the Contains button", async function () {
    await propertiesClassValidation.clickContainsButton();
});

When("the User enters {string} into the Search box", async function (value: string) {
    await propertiesClassValidation.enterSearchValue(value);
});

Then("the User can verify that the value {string} is present in the table", async function (expected: string) {
    await propertiesClassValidation.validateResultIsVisible(expected);
});


Then("the user clicks on the check Icon to save the class", async function () {
    await propertiesClassValidation.clickOnCheckIcon();
});

When("the User clears the Search box", async function () {
    await propertiesClassValidation.clearSearchBox();
});

When("the User clicks on the {string} button", async function (buttonName: string) {
    switch (buttonName) {
        case "Does not contain":
            await propertiesClassValidation.clickDoesNotContainButton();
            break;
        case "Starts with":
            await propertiesClassValidation.clickStartsWithButton();
            break;
        case "Ends with":
            await propertiesClassValidation.clickEndsWithButton();
            break;
        case "Equals":
            await propertiesClassValidation.clickEqualsButton();
            break;
        case "Does not equal":
            await propertiesClassValidation.clickDoesNotEqualButton();
            break;
        default:
            throw new Error(`Unsupported button: ${buttonName}`);
    }
});

Then("the User can verify that the value {string} is not present in the table", async function (value: string) {
    await propertiesClassValidation.validateValueIsNotVisible(value);
});

When("the User click on dropdown", async function () {
    await propertiesClassValidation.clickOnBooleanDropdown();
});

When("select the true option", async function () {
    await propertiesClassValidation.selectBooleanOption("true");
});



When("selects the value false", async function () {
    await propertiesClassValidation.selectBooleanOption("false");
});


When("the User click on All", async function () {
    await propertiesClassValidation.selectBooleanOption("(All)");
});

When("the User click on second checkbox", async function () {
    await propertiesClassValidation.clickOnIdcheckbox();
});

Then("the user can validate that checkbox should be checked", async function () {
    const checkbox = fixture.page.locator("(//span[@class='dx-checkbox-icon'])[1]/ancestor::div[@role='checkbox']");
    const isChecked = await checkbox.getAttribute("aria-checked");
    expect(isChecked).toBe("true");
});

Then("the user can validate the checkbox should not be checked", async function () {
    const checkbox = fixture.page.locator("(//span[@class='dx-checkbox-icon'])[1]/ancestor::div[@role='checkbox']");
    const isChecked = await checkbox.getAttribute("aria-checked");
    expect(isChecked).toBe("false");
});

When("the User clicks on the mapping dropdown", async function () {
    await propertiesClassValidation.clickOnMappingDropdown();
});

When("the User selects the {string} option from the dropdown", async function (value: string) {
    await propertiesClassValidation.selectDropdownOption(value);
});

Then("the User can see that {string} is visible in the table", async function (value: string) {
    await propertiesClassValidation.validateMappedValueVisible(value);
});

When("the user click on inbound dropdown", async function () {
    await propertiesClassValidation.clickInboundDropdown();
});

When("click on Merge option", async function () {
    await propertiesClassValidation.selectInboundOption("Merge");
});

Then("the User can validate Merge cell should be visible", async function () {
    await propertiesClassValidation.validateInboundCellVisible("Merge");
});

When("click on Extend option", async function () {
    await propertiesClassValidation.selectInboundOption("Extend");
});

Then("the User can validate Extendcell should be visible", async function () {
    await propertiesClassValidation.validateInboundCellVisible("Extend");
});

When("the user click on outrbound dropdown", async function () {
    await propertiesClassValidation.clickOutboundDropdown();
});

When("click in merge cell", async function () {
    await propertiesClassValidation.clickMergeCellOutbound();
});

When("click on merge cell dropdown", async function () {
    await propertiesClassValidation.clickMergeDropdownOutbound();
});

When("select the option block", async function () {
    await propertiesClassValidation.selectOutboundOption();
});

When("select the option Block", async function () {
    await propertiesClassValidation.selectOutboundOption();
});

Then("the Block cell should be visible to user", async function () {
    await propertiesClassValidation.validateBlockCellVisible();
});

When("the User selects the All option from the dropdown", async function () {
    await propertiesClassValidation.clickOnaAll();
});

When("the User selects the All option from the dropdown1", async function () {
    await propertiesClassValidation.clickOnaAll1();
});

When("the user right clicks on the property with display name {string}", async function (displayName: string) {
    await propertiesClassValidation.rightClickOnProperty(displayName);
});

When("the user clicks on Remove Property", async function () {
    await propertiesClassValidation.clickOnRemoveProperty();
});

When("the user clicks on Continue", async function () {
    await propertiesClassValidation.clickOnContinueButton();
});

When("the user clicks on the property title {string}", async function (propertyTitle: string) {
    await propertiesClassValidation.clickOnPropertyTitle(propertyTitle);
});

When("the user right clicks on the property label {string}", async function (label: string) {
    await propertiesClassValidation.rightClickOnProperty(label);
});

When("the user clicks on Disable", async function () {
    await propertiesClassValidation.clickOnDisable();
});

Then("the first checkbox should be in an unchecked state", async function () {
    const checkbox = fixture.page.locator("(//input[@type='checkbox'])[1]");
    const isChecked = await checkbox.isChecked();
    expect(isChecked).toBeFalsy();
});

When("the user clicks on the Down Arrow of Properties", async function () {
    await propertiesClassValidation.clickOnDownArrow();
});

When("the user clicks on the second checkbox", async function () {
    await propertiesClassValidation.clickSecondCheckbox();
});

Then('the user should see that the "Required" field is true', async function () {
    await propertiesClassValidation.verifyRequiredFieldIsTrue();
});

Then('the user should see that both "Name" and "Display Name" fields contain {string}', async function (value: string) {
    await propertiesClassValidation.verifyNameAndDisplayContain(value);
});

Then('the user should see that "DataSet" is {string} and "Type" is {string}', async function (dataset: string, type: string) {
    await propertiesClassValidation.verifyDatasetAndType(dataset, type);
});

When('the user clicks on the {string} dropdown', async function (dropdownName: string) {
    await propertiesClassValidation.clickDropdown(dropdownName);
});

When('the user selects {string} from the dropdown', async function (value: string) {
    await propertiesClassValidation.selectDropdownValue(value);
});

Then("the user should see that IN Action should be {string} and OUT Action should be {string}", async function (inAction: string, outAction: string) {
    await propertiesClassValidation.verifyAction("In", inAction);
    await propertiesClassValidation.verifyAction("Out", outAction);
});

Then('the user should see that {string} is visible in the dropdown', async function (value: string) {
    await propertiesClassValidation.verifyValueInDropdown(value);
});

When('the user clicks on the inbound dropdown', async function () {
    await propertiesClassValidation.clickInboundDropdown1();
});

When('the user clicks on the outbound dropdown', async function () {
    await propertiesClassValidation.clickOutboundDropdown1();
});

When('selects the value {string}', async function (value: string) {
    await propertiesClassValidation.selectDropdownValue(value);
});

When('the user clicks on the Atlas class property Dropdown', async function () {
    await propertiesClassValidation.clickAtlasClassDropdown();
});