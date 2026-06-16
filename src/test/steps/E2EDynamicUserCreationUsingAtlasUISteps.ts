import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import DynamicUserCreationUsingAtlasUIPage from "../../pages/E2EDynamicUserCreationUsingAtlasUIPage";
import * as data from "../../helper/util/test-data/TestData.json";

let dynamicUserCreationUsingAtlasUIPage: DynamicUserCreationUsingAtlasUIPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Create User button", async function () {
    dynamicUserCreationUsingAtlasUIPage = new DynamicUserCreationUsingAtlasUIPage(fixture.page);
    await dynamicUserCreationUsingAtlasUIPage.clickOnCreateUserButton();
});

When("the User fills in the required fields", async function () {
    const userData = data[15];

    console.log(`Creating user: ${userData.displayName} (${userData.businessEmail})`);

    await dynamicUserCreationUsingAtlasUIPage.fillRequiredFields(
        userData.displayName,
        userData.firstName,
        userData.lastName,
        userData.businessEmail
    );
});

When("the User clicks on the Save button", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnSaveButton();
});

When("the User clicks on cross icon", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnCrossIcon();
});

Then("the User verify the newly created user is displayed in the Users list", async function () {
    const userData = data[15];
    await dynamicUserCreationUsingAtlasUIPage.validateNewlyCreatedUserIsDisplayed(userData.businessEmail);
});

When("the User clicks on Roles", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnRolesTab();
});

When("the User checks for checkbox and deletes Roles if visible", async function () {
    await dynamicUserCreationUsingAtlasUIPage.deleteRoleIfCheckboxVisible();
});

When("the User clicks on the Create Role button", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnCreateRoleButton();
});

When("the User fills in the required fields for Role", async function () {
    const roleData = data[15];
    const includeValue = roleData.displayName;

    console.log(`Filling role with Include value: ${includeValue}`);

    await dynamicUserCreationUsingAtlasUIPage.fillRequiredFieldsForRole(includeValue);
});

When("the User clicks on the Save button for Role", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnSaveButtonForRole();
});

Then("the User verify the newly created Role is displayed in the Roles list", async function () {
    const roleData = data[15];
    const expectedRoleName = roleData.displayName;

    await dynamicUserCreationUsingAtlasUIPage.validateNewlyCreatedRoleIsDisplayed(expectedRoleName);
});

When("clicks on Atlas role", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnAtlasRole();
});

When("Clicks on Environment Dropdown", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnEnvironmentDropdown();
});

When("Click on Atlas role dropdown", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnAtlasRoleDropdown();
});

When("Select the newly created Role", async function () {
    await dynamicUserCreationUsingAtlasUIPage.selectNewlyCreatedRole();
});

When("click on referesh icon", async function () {
    await dynamicUserCreationUsingAtlasUIPage.clickOnRefreshIcon();
});

When("Select the Option Achal Test Env", async function () {
    await dynamicUserCreationUsingAtlasUIPage.selectAchalTestEnv();
});

Then("the user can validate the email", async function () {
    await dynamicUserCreationUsingAtlasUIPage.validateEmailIsDisplayed();
});