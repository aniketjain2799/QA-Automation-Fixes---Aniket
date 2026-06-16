import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import PropertiesCongigurationSection from "../../pages/6PropertiesConfigurationSectionFunctionalityValidationPage";
import * as data from "../../helper/util/test-data/TestData.json";

let propertiesCongigurationSection: PropertiesCongigurationSection;
const userData = data[14];

When("clear the Properties Name and sent a new Name in it", async function () {
    propertiesCongigurationSection = new PropertiesCongigurationSection(fixture.page);
    await propertiesCongigurationSection.enterNameInput(userData.Name11);
    await propertiesCongigurationSection.clickOnDisplayName();
});

When("clear the Properties DisplayName and sent a new DisplayName in it", async function () {
    await propertiesCongigurationSection.clickOnClearDisplayNameClick();
    await propertiesCongigurationSection.enterNameInput(userData.DisplayName11);
});

When("the User clicks on SQLQuries1", async function () {
    await propertiesCongigurationSection.clickOnSQLQueries2();
});

When("the User clicks on Properties", async function () {
    await propertiesCongigurationSection.clickOnProperties();
});

When("the User clicks on SQLQuries2", async function () {
    await propertiesCongigurationSection.clickOnSQLQueries1();
});

Then("the User can validate the all Details Related to General Info", async function () {
    await propertiesCongigurationSection.verifyGeneralInfoVisibleInputs();
    await propertiesCongigurationSection.validateSingleDropdownOptions();
    await propertiesCongigurationSection.validateMultipleArrayDropdownOptions();
    await propertiesCongigurationSection.fillDescription("Sample description for property");
});

When("the User clicks on Configuration Tab", async function () {
    await propertiesCongigurationSection.clickOnConfiguration();
});

Then("the User can verify that two box are visible to user first one SQLQuries and second one New Properties 1", async function () {
    await propertiesCongigurationSection.verifySQLQueriesAndNewProperty1Visible();
});

Then("the User can sent one string into SQLQuries Box", async function () {
    await propertiesCongigurationSection.typeSingleValueInSQLQueriesBox("FirstValue");
});

When("the User change the genaral info setting to Multiple data set", async function () {
    await propertiesCongigurationSection.changeGeneralInfoToMultipleDataset();
});

When("the User change the genaral info setting to Multiple data set1", async function () {
    propertiesCongigurationSection = new PropertiesCongigurationSection(fixture.page);
    await propertiesCongigurationSection.changeGeneralInfoToMultipleDataset1();
});

Then("the user can verify that Multiple data set can be sent to SQLQuries box by presing the enter butto before sending the second value", async function () {
    await propertiesCongigurationSection.typeMultipleValuesInSQLQueriesBox(["FirstValue", "SecondValue"]);
});

When("the User click on Delete Icon", async function () {
    propertiesCongigurationSection = new PropertiesCongigurationSection(fixture.page);
    await propertiesCongigurationSection.clickOnDelete();
});