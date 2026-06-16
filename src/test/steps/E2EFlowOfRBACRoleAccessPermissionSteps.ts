import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import RBACRoleAccessPermissionPage from "../../pages/E2EFlowOfRBACRoleAccessPermissionPage";



let rbacCRoleAccessPermissionPage: RBACRoleAccessPermissionPage;

setDefaultTimeout(1200 * 1000 * 2);

When("RBACRolesOwner Environment should be visible and clickable to User", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnRBACRolesOwner();

});

When("the User clicks on Bot", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await rbacCRoleAccessPermissionPage.clickOnBot();
    await new Promise(resolve => setTimeout(resolve, 7000));

});

Then("User can validate that Total Row count Should be 20 also that The First Name and id", async function () {
    await rbacCRoleAccessPermissionPage.validateTotalRowsCountTable1();

});

When("the User Clicks on the Dashboard", async function () {
    await rbacCRoleAccessPermissionPage.clickOnDashboard();
});

Then("the User should see that the Dashboard Contains a Productivity Value entity", async function () {
    await rbacCRoleAccessPermissionPage.ProductivityValueValidation();
});

When("the User clicks On the Log View", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnLogView();
});

Then("the User should see that the Show All button and a start date entity Are visible", async function () {
    await rbacCRoleAccessPermissionPage.ShowallValidationValidation();
    await rbacCRoleAccessPermissionPage.StartDateValidationValidation();
});

Then("the User Fill The Command Builder Form with respective values for RESTAPI_Retrieve_Powershell", async function () {
    await rbacCRoleAccessPermissionPage.clickonRestApi();
    await rbacCRoleAccessPermissionPage.clickOnExecute();
    await rbacCRoleAccessPermissionPage.clickOnMethodDropDown();
    await rbacCRoleAccessPermissionPage.clickOnPostJson();
});

When("RBACRolesDeveloper Environment should be visible and clickable to User", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnRBACRolesDeveloper();

});

Then("the User verifies all the Important fields in the Credentials tab section", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    const isChkRunCCB1Disabled = await rbacCRoleAccessPermissionPage.isChkRunCCB1Disabled();
    expect(isChkRunCCB1Disabled).toBe(true);

    const isRadioRunScriptDisabled = await rbacCRoleAccessPermissionPage.isRadioRunScriptWithSelectiveConnectIdsDisabled();
    expect(isRadioRunScriptDisabled).toBe(true);
});

Then("the User Verifies all the important Fields in the Permissions tab section", async function () {
    const isChkSharingInheritedDisabled = await rbacCRoleAccessPermissionPage.isChkSharingInheritedDisabled();
    expect(isChkSharingInheritedDisabled).toBe(true);

    const ischkAllreadibotsBotsDisabled = await rbacCRoleAccessPermissionPage.ischkAllreadibotsBotsDisabled();
    expect(ischkAllreadibotsBotsDisabled).toBe(true);

    const isChk1AllowReadDisabled = await rbacCRoleAccessPermissionPage.isChk1AllowReadDisabled();
    expect(isChk1AllowReadDisabled).toBe(true);
});

When("RBACRolesActionUser Environment should be visible and clickable to User", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnRBACRolesActionUser();

});

When("RBACRolesReviewerUser Environment should be visible and clickable to User", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnRBACRolesReviewerUser();

});

When("RBACRolesPowerUser Environment should be visible and clickable to User", async function () {
    rbacCRoleAccessPermissionPage = new RBACRoleAccessPermissionPage(fixture.page);
    await rbacCRoleAccessPermissionPage.clickOnRBACRolesPowerUser();

});

Then("User verifies that Dashboard is NOT visible", async function () {
    await expect(rbacCRoleAccessPermissionPage.getDashboard()).not.toBeVisible();
});

Then("User verifies that Properties Section is NOT visible", async function () {
    await expect(rbacCRoleAccessPermissionPage.getPropertiesSection()).not.toBeVisible();
});

Then("User verifies that Credentials tab is NOT visible", async function () {
    await expect(rbacCRoleAccessPermissionPage.getCredentialsTab()).not.toBeVisible();
});

Then("User verifies that Permissions tab is NOT visible", async function () {
    await expect(rbacCRoleAccessPermissionPage.getPermissionsTab()).not.toBeVisible();
});

Then("User verifies that Properties Section is visible", async function () {
    await expect(rbacCRoleAccessPermissionPage.getPropertiesSection()).toBeVisible();
});

When("the User click on Run Button", async function () {
    await rbacCRoleAccessPermissionPage.clickOnRun();
});

Then("the User can validate that text which tells that user does not have any permission to run Bot", async function () {
    await rbacCRoleAccessPermissionPage.NotRunPermissionPopUpValidationValidation();
});
