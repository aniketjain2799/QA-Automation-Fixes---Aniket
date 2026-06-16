import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import SelfClassAndProperties from "../../pages/5SelfClassAndPropertiesValidationPage";

let selfClassAndProperties: SelfClassAndProperties;

When("the user clicks on the Self Class section", async function () {
    selfClassAndProperties = new SelfClassAndProperties(fixture.page);
    await selfClassAndProperties.clickOnSelfClass();
});

When("the User click on InheritsFrom Dropdown", async function () {
    await selfClassAndProperties.clickInheritsFromDropdown();
});

When("select the first value", async function () {
    await selfClassAndProperties.selectFirstOption();
});

When("click on check icon and continue button to save this", async function () {
    await selfClassAndProperties.clickCheckAndContinue();
});

Then("the User can validate the import fields From Json Schema2", async function () {
    await selfClassAndProperties.validateJsonSchemaFields();
});

When("the User clicks on the arrow icon of Self Class", async function () {
    await selfClassAndProperties.clickOnArrowIcon();
});

When("the User clicks on the properties Section", async function () {
    await selfClassAndProperties.clickOnPropertiesSection();
});

When("click on the plus icon", async function () {
    await selfClassAndProperties.clickPlusIcon();
});

When("the User click on discard Icon", async function () {
    await selfClassAndProperties.clickDiscardIcon();
});

Then("the User can validate discarded Text", async function () {
    await selfClassAndProperties.validateDiscardedText();
});

When("the User clicks on check Icon", async function () {
    await selfClassAndProperties.clickCheckIcon();
});

Then("the User can validate the properties name cannot be same", async function () {
    await selfClassAndProperties.validateUniqueNameError();
});

When("clicks onn the Json Icon", async function () {
    await selfClassAndProperties.clickJsonIcon();
});

Then("the User can validate the json schema fields", async function () {
    await selfClassAndProperties.validateJsonSchemaProperty();
});

When("the User clicks on Check icon", async function () {
    await selfClassAndProperties.clickCheckIcon1();
});