import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import RBACPage from "../../pages/RBACPage";
import * as data from "../../helper/util/test-data/TestData.json";
import LoginPage from "../../pages/loginPage";
import CreateEnvironmentPage from "../../pages/CreateEnvironmentPage";
import * as fs from "fs";
import * as path from "path";

let createEnvironmentPage: CreateEnvironmentPage;
let rbacPage: RBACPage;
let newPageInstance;
let originalPageInstance = fixture.page;

setDefaultTimeout(1200 * 1000 * 2);

When("User click on the Environments button", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnEnvironments();

});

When("User click on Existing Golbal Environment", async function () {
  await rbacPage.clickOnGlobalEnv();

});

When("User click on Root Folder4", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnRoot4();

});

When("User double clicks on MyWorkspace", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.DoubleclickOnMyWorkspace();

});

When("User click on Existing Golbal Proxy Environment", async function () {
  await rbacPage.clickOnGlobalProxyEnv();

});

When("User click on Existing PGolbal Proxy Environment", async function () {
  await rbacPage.clickOnPGlobalProxyEnv();

});

When("User click on Existing Delegate Environment Folder", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnDelegateAutomationTest();

});
When("User click on Root Folder", async function () {
  await rbacPage.clickOnRoot();

});

When("User click on PRoot Folder", async function () {
  await rbacPage.clickOnPRoot();

});

When("click on RBAC Folder", async function () {
  await rbacPage.clickOnRBAC();

});

When("click on RBAC Proxy Folder", async function () {
  await rbacPage.clickOnProxyRBACFolder();

});

When("User click on Delegate Access", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnDelegateAccess();
});


Then("Delegate Access PopUp should be open and user can add {string} in Email address box", async function (emailId: string) {
  const userData = data[0];
  const userEmail = userData.RBACUserEmail;
  await rbacPage.fillEmailAddress(userEmail);
});


When("User click on Search Icon", async function () {
  await rbacPage.clickOnSearchIcon();
});

When("click on Plus Icon", async function () {
  await rbacPage.clickOnPlusIcon();
  await rbacPage.clickOnOkButtonPopup();
});

Then("User can select Assignee User Role", async function () {
  await rbacPage.clickOnReviewerOption();
  await rbacPage.clickOnDeveloperOption();
  await rbacPage.clickOnOkButton();
});

When("User click on Signout Button", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnLogoutForm();
  await rbacPage.clickOnSignOut();
});

When("User Click on Signout Button", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.clickOnLogoutForm1();
  await rbacPage.clickOnSignOut();
});

When("User click on Signout Button1", async function () {
  rbacPage = new RBACPage(fixture.page);
  // await rbacPage.clickOnLogoutForm1();
  await rbacPage.clickOnSignOut();
});


When("User opens a new tab and logs in with RBAC user credentials", async function () {
  rbacPage = new RBACPage(fixture.page);
  newPageInstance = await rbacPage.openNewTabAndLoginWithRBACCredentials();
});

When("User clicks on hamburger menu", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerMenu(newPageInstance);
});

Then("RBAC Environment should be visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerRbac(newPageInstance);
  await rbacPage.clickOnRbacEnv(newPageInstance);
});

Then("RBAC Proxy Environment should be visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerRbacProxy(newPageInstance);
  await rbacPage.clickOnRbacEnv(newPageInstance);
});

When("User clicks on the RBAC Data table", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRbacDataTable();
});

When("click on Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnProperties();
});

When("click On Run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRunButton();
  await rbacPage.clickOnResetDataTableYes();
  await rbacPage.clickOnResetDataTableOk();
});

When("click On Proxy Run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRunButton();
  // await rbacPage.clickOnYesButton();
  await rbacPage.clickOnResetDataTableYes();
  await rbacPage.clickOnResetDataTableOk();
});

When("click On proxy run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRunButton();
  // await rbacPage.clickOnYesButton();
  await rbacPage.clickOnResetDataTableYes();
  await rbacPage.clickOnResetDataTableOk();
});

Then("RBAC Data table script should be executed Successfully", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }

  const noErrorTextUpdatewithForcebjectBot = await rbacPage.getNoErrorText(120000);
  const expectedValue8 = "no errors";
  expect(noErrorTextUpdatewithForcebjectBot).toContain(expectedValue8);

  const jobFinishedTextUpdatewithForcebjectBot = await rbacPage.getJobFinishedText(120000);
  const expectedValue9 = "Job finished";
  expect(jobFinishedTextUpdatewithForcebjectBot).toContain(expectedValue9);
});


When("User clicks on the RBAC Data table In Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRbacDataTableProperties();
});

Then("User can validate Two table rows are added and the one UserPrincipalName", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.validateTotalRowCountR1();
  await rbacPage.UserPrincipleNameValidationR2();
});

When("User clicks on RBAC data table Bot", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRBACdatatableBotTest();
});

When("click On run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRunButton();
  await rbacPage.clickOnYesButton();

});

Then("RBAC data table Bot script should be executed Successfully", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }

  const noErrorTextUpdatewithForcebjectBot = await rbacPage.getNoErrorText(120000);
  const expectedValue11 = "no errors";
  expect(noErrorTextUpdatewithForcebjectBot).toContain(expectedValue11);

  const jobFinishedTextUpdatewithForcebjectBot = await rbacPage.getJobFinishedText(120000);
  const expectedValue12 = "Job finished";
  expect(jobFinishedTextUpdatewithForcebjectBot).toContain(expectedValue12);
});

Then("RBAC data table Proxy Bot script should be executed Successfully", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }

  const ProxyConnectText = await rbacPage.getProxyConnectIdText(60000);
  const expectedValue81 = "Using Connect IDs: ConnectID_Lalit";
  expect(ProxyConnectText).toContain(expectedValue81);

  const noErrorTextUpdatewithForcebjectBot = await rbacPage.getNoErrorText(240000);
  const expectedValue11 = "no errors";
  expect(noErrorTextUpdatewithForcebjectBot).toContain(expectedValue11);

  const jobFinishedTextUpdatewithForcebjectBot = await rbacPage.getJobFinishedText(240000);
  const expectedValue12 = "Job finished";
  expect(jobFinishedTextUpdatewithForcebjectBot).toContain(expectedValue12);
});

When("User clicks on Raw Data-0", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRawData0();
});

Then("User can validate that total Row count Should be 3 and One of the UserPrincipalName should be NewName", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.validateTotalRowCountR0();
  await rbacPage.userPrincipalNameValidationR0();
});

When("User clicks on Raw Data-1", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRawData1();
});

Then("User can validate that total Row count Should be 2 and One row should be removed which UserPrincipalName is NewName", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.validateTotalRowCountRaw1();
  await rbacPage.validateRowsNames();
});


When("User clicks on Raw Data-2", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnRawData2();
});

Then("User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and firstName should be Adele", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.validateTotalRowCountR2();
  await rbacPage.validateTitle();
  await rbacPage.validateDirectorName();
  await rbacPage.validateComposserName();
  await rbacPage.validateFirstName();
});

Then("User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and also validate that First and second row UserPrincipalName", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.validateTotalRowCountR1();
  await rbacPage.validateTitle();
  await rbacPage.validateDirectorName();
  await rbacPage.validateComposserName();
  await rbacPage.UserPrincipalNameValidationR1();
  await rbacPage.UserPrincipalNameValidationR2();
});

When("User click on Delegate Root folder", async function () {
  await rbacPage.clickOnDelegateRoot();

});

When("User click on Delegate Root folder4", async function () {
  await rbacPage.clickOnDelegateRoot4();

});

Then("Delegate Access PopUp should be open and user can add {string} in Email Address box", async function (emailId: string) {
  rbacPage = new RBACPage(fixture.page);
  const userData = data[0];
  const userEmail1 = userData.userName;
  await rbacPage.fillEmailAddress(userEmail1);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Delegate Access PopUp should be open and user can add {string} in Email Address Box", async function (emailId: string) {
  rbacPage = new RBACPage(fixture.page);
  const userData = data[0];
  const userEmail1 = userData.RBACUserEmail;
  await rbacPage.fillEmailAddress(userEmail1);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Delegate Access PopUp should be Open And user can add {string} in Email Address Box", async function (emailId: string) {
  rbacPage = new RBACPage(fixture.page);
  const userData = data[0];
  const userEmail2 = userData.userName;
  await rbacPage.fillEmailAddress(userEmail2);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Delegate Access PopUp should be open and user can add EmailId in Email Address Box", async function () {
  await rbacPage.fillEmailAddress56(data[9].DyanmicUserEmail);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Delegate Access PopUp Should be open and user can add EmailId in Email Address Box", async function () {
  rbacPage = new RBACPage(fixture.page);
  await rbacPage.fillEmailAddress56(data[9].DyanmicUserEmailL);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("User can select Owner User Role", async function () {
  await rbacPage.clickOnReviewerOption();
  await rbacPage.clickOnOwnerOption();
  await rbacPage.clickOnOkButton();
});

Then("User can select Developer User Role", async function () {
  await rbacPage.clickOnReviewerOption();
  await rbacPage.clickOnDeveloperOption();
  await rbacPage.clickOnOkButton();
});

function readJsonFile(filePath: string): any {
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

Then("User can select Action User Role", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  const botName = jsonData[0].botNameNew;
  await rbacPage.clickOnReviewerOption();
  await rbacPage.clickOnActionUserOption();
  // await rbacPage.enterBotNameForChange(botName);
  await rbacPage.clickOnOkButton();
});

Then("User can select Power User Role", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  const botNameP = jsonData[0].botNameNewPower;
  await rbacPage.clickOnReviewerOption();
  await rbacPage.clickOnPowerUserOption();
  // await rbacPage.enterBotNameForChange(botNameP);
  await rbacPage.clickOnOkButton();
});

Then("User can select Reviewer User Role", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  const botNameR = jsonData[0].botNameNewReviewer;
  await rbacPage.clickOnPowerUserOption();
  await rbacPage.clickOnReviewerOption();
  // await rbacPage.enterBotNameForChange(botNameR);
  await rbacPage.clickOnOkButton();
});

When("User opens a new tab and logs in with Owner user credentials", async function () {
  rbacPage = new RBACPage(fixture.page);
  newPageInstance = await rbacPage.openNewTabAndLoginWithOwnerCredentials();
});

When("User opens a new tab and logs in with Developer user credentials", async function () {
  rbacPage = new RBACPage(fixture.page);
  newPageInstance = await rbacPage.openNewTabAndLoginWithRBACCredentials();
});

Then("NewBot should be visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerNewBot(newPageInstance);
});

Then("NewBot should be visible And Clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerNewBotDev(newPageInstance);
});

Then("NewBot should be Visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerNewBot3(newPageInstance);
});

Then("NewBot4 should be Visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerNewBot4(newPageInstance);
});

Then("NewBot5 should be Visible and clickable to User", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnHumburgerNewBot5(newPageInstance);
});

When("click ON Run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnPropertiesRB(newPageInstance);
  await rbacPage.clickOnRunButtonRB(newPageInstance);
  await rbacPage.clickOnYesButtonRB(newPageInstance);
});

When("Click ON Run Button", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  // await rbacPage.clickOnPropertiesRB(newPageInstance);
  await rbacPage.clickOnRunButtonRB(newPageInstance);
  await rbacPage.clickOnYesButtonRB(newPageInstance);
});

Then("NewBot script should be Executed Successfully", async function () {

  const jobFinishedText67 = await rbacPage.getJobFinishedTextRB(newPageInstance, 140000);
  const expectedValue34 = "Job finished";
  expect(jobFinishedText67).toContain(expectedValue34);

  const noErrorText67 = await rbacPage.getNoErrorTextRB(newPageInstance, 140000);
  console.log(noErrorText67);
  const expectedValue14 = "no errors";
  expect(noErrorText67).toContain(expectedValue14);
});


When("User click on The RawData0 For Verification", async function () {
  await rbacPage.clickOnRawData0RB(newPageInstance);
});

When("the User clicks on the Dashboard", async function () {
  await rbacPage.clickOnDashboard(newPageInstance);
});

Then("the User should see that the Dashboard contains a Productivity Value entity", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.ProductivityValueValidation(newPageInstance);
});


When("the User clicks on the Log View", async function () {
  await rbacPage.clickOnLogView(newPageInstance);
});

Then("the User should see that the Show All button and a start date entity are visible", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.ShowallValidationValidation(newPageInstance);
  await rbacPage.StartDateValidationValidation(newPageInstance);
});

When("the User go to Properties Section", async function () {
  await rbacPage.clickOnPropertiesRB(newPageInstance);
});

Then("the User can verify that all the Below tab should be Visible like General, credentials, schedule, Retention, Permissions, Parameters, Task and links, Metrics, Execution and Secrets", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnGeneralTab(newPageInstance);
  await rbacPage.clickOnscheduleTab(newPageInstance);
  await rbacPage.clickOnCredentialsTab(newPageInstance);
  await rbacPage.clickOnRetentionTab(newPageInstance);
  await rbacPage.clickOnPermissionsTab(newPageInstance);
  await rbacPage.clickOnParametersTab(newPageInstance);
  await rbacPage.clickOnTasksandLinksTab(newPageInstance);
  await rbacPage.clickOnMetricsTab(newPageInstance);
  await rbacPage.clickOnExecutionTab(newPageInstance);
  // await rbacPage.clickOnSecretsTab(newPageInstance);

});

Then("the User can Verify that the Below tab fields should be disabled like credentials, Permissions", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.clickOnGeneralTab(newPageInstance);
  await rbacPage.clickOnscheduleTab(newPageInstance);
  await rbacPage.clickOnCredentialsTab(newPageInstance);
  await rbacPage.verifyCredentialCheckboxIsDisabled(newPageInstance);
  await rbacPage.verifyCredentialDropDownIsDisabledSB(newPageInstance);
  await rbacPage.clickOnRetentionTab(newPageInstance);
  await rbacPage.clickOnPermissionsTab(newPageInstance);
  await rbacPage.verifyPermissionDisableInherited(newPageInstance);
  await rbacPage.verifyPermissionDisableExecuteBot(newPageInstance);
  await rbacPage.clickOnParametersTab(newPageInstance);
  await rbacPage.clickOnTasksandLinksTab(newPageInstance);
  await rbacPage.clickOnMetricsTab(newPageInstance);
  await rbacPage.clickOnExecutionTab(newPageInstance);
  // await rbacPage.clickOnSecretsTab(newPageInstance);

});

When("the User clicks on the properties section", async function () {
  await rbacPage.clickOnDashboard(newPageInstance);
  await rbacPage.clickOnPropertiesRB(newPageInstance);
});

Then("the Owner User can Verify the All the Tasks present in Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.tasksValidation(newPageInstance);
  await rbacPage.run2Validation(newPageInstance);
  await rbacPage.showExecutionLogValidation(newPageInstance);
  await rbacPage.viewFullScreenValidation(newPageInstance);
  await rbacPage.copyPortalURLValidation(newPageInstance);
  await rbacPage.copyScriptReferenceValidation(newPageInstance);
  await rbacPage.commandBuilderValidation(newPageInstance);
  await rbacPage.delegateAccess1Validation(newPageInstance);
  await rbacPage.shareSolutionValidation(newPageInstance);

});

Then("the Owner User can Verify the All The Tasks present in Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.tasksValidation(newPageInstance);
  await rbacPage.run2Validation(newPageInstance);
  await rbacPage.showExecutionLogValidation(newPageInstance);
  await rbacPage.viewFullScreenValidation(newPageInstance);
  await rbacPage.copyPortalURLValidation(newPageInstance);
  await rbacPage.copyScriptReferenceValidation(newPageInstance);
  await rbacPage.commandBuilderValidation(newPageInstance);
  await rbacPage.shareSolutionValidation(newPageInstance);

});


Then("the Owner User Can Verify the All The Tasks present in Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.tasksValidation(newPageInstance);
  await rbacPage.run2Validation(newPageInstance);
  await rbacPage.RefreshViewValidationValidation(newPageInstance);
  await rbacPage.ShowTaskDetailsValidation(newPageInstance);
  await rbacPage.ShowViewDescriptionValidation(newPageInstance);

});

Then("the Reviewer User Can Verify the All The Tasks present in Properties Section", async function () {
  if (!newPageInstance) {
    throw new Error("New page instance is not available. Make sure to login first.");
  }
  await rbacPage.tasksValidation(newPageInstance);
  // await rbacPage.run2Validation(newPageInstance);
  await rbacPage.RefreshViewValidationValidation(newPageInstance);
  await rbacPage.ShowTaskDetailsValidation(newPageInstance);
  await rbacPage.ShowViewDescriptionValidation(newPageInstance);

});

When("User click On Signout Button", async function () {
  await rbacPage.clickOnlogoutForm2(newPageInstance);
  await rbacPage.clickOnSignOut2(newPageInstance);
});

Then("the Admin User login Again form the First Tab", async function () {
  // await newPageInstance.context().pages()[0].bringToFront();
  // createEnvironmentPage = new CreateEnvironmentPage(originalPageInstance);
  await rbacPage.navigateToHomePageAndLogin12(newPageInstance);
});

When("User click on the Environments Button", async function () {
  await new Promise(resolve => setTimeout(resolve, 50000));
  await rbacPage.clickOnEnvironments12(newPageInstance);

});

When("User Click on Existing Delegate Environment Folder", async function () {
  await rbacPage.clickOnDelegateAutomationTest12(newPageInstance);

});

When("User click On Delegate Root folder", async function () {
  await rbacPage.clickOnDelegateRoot12(newPageInstance);

});

When("User click On NewBotTest2 folder", async function () {
  await rbacPage.clickOnNewBotTest12(newPageInstance);

});

When("User click On NewBotTest3 folder", async function () {
  await rbacPage.clickOnNewBotTest13(newPageInstance);

});

When("User click On NewBotTest4 folder", async function () {
  await rbacPage.clickOnNewBotTest14(newPageInstance);

});

When("User click On NewBotTest5 folder", async function () {
  await rbacPage.clickOnNewBotTest15(newPageInstance);

});

When("User click On NewBotTest6 folder", async function () {
  await rbacPage.clickOnNewBotTest16(newPageInstance);

});

When("User Right click on the NewBot for Delete The Bot", async function () {
  await rbacPage.rightClickOnNewBot12(newPageInstance);
});

When("User Right click On the NewBot for Delete The Bot", async function () {
  await rbacPage.rightClickOnNewBot13(newPageInstance);
});

When("User Right click On the NewBot For delete The Bot", async function () {
  await rbacPage.rightClickOnNewBot14(newPageInstance);
});

When("User Right Click On the NewBot For Delete the Bot", async function () {
  await rbacPage.rightClickOnNewBot15(newPageInstance);
});

When("User Right Click On The NewBot For Delete The Bot", async function () {
  await rbacPage.rightClickOnNewBot16(newPageInstance);
});

When("click on Delete And Ok", async function () {
  await rbacPage.clickOnDeleteAndOkDataTable12(newPageInstance);
});

Then("Bot should Be get Deleted", async function () {
  await rbacPage.clickOnRootToVerifyThatNewFolderDeleted12(newPageInstance);
  await new Promise(resolve => setTimeout(resolve, 3000));
});

export { newPageInstance };
