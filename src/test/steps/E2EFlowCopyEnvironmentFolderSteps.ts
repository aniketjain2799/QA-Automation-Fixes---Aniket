import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CopyEnvPage from "../../pages/E2EFlowCopyEnvironmentFolderPage";


let copyEnvPage: CopyEnvPage;

setDefaultTimeout(1200 * 1000 * 2);

When("User click on Existing Copy Golbal Environment", async function () {
    copyEnvPage = new CopyEnvPage(fixture.page);
    await copyEnvPage.clickOnglobalCopyAutomation();
});

When("User click On Root Folder", async function () {
    await copyEnvPage.clickOnglobalCopyAutomationrRoot();
});

When("User click On Root Folder4", async function () {
    await copyEnvPage.clickOnglobalCopyAutomationrRoot4();
});

When("User Right click on LoadTestBotQueueTableParent Folder and click on Copy Button", async function () {
    await copyEnvPage.rightClickOnLoadTestBotQueueTableParentCopy();
    await copyEnvPage.clickOnCopy();
});

When("User Right click on LoadTestBotQueueTableParent Folder and click on Copy Button4", async function () {
    await copyEnvPage.rightClickOnLoadTestBotQueueTableParentCopy4();
    await copyEnvPage.clickOnCopy();
});

Then("User Successfully Copy that Folder", async function () {
    await copyEnvPage.clickOnCopyBtton();
});


When("User click on Existing Paste Golbal Environment", async function () {
    await copyEnvPage.clickOnGlobalPasteAutomation();
});

When("User Right click On Root Folder of Above Environment", async function () {
    await copyEnvPage.rightClickOnGlobalPasteAutomationRoot();
});

When("User Right click On Root Folder of Above Environment4", async function () {
    await copyEnvPage.rightClickOnGlobalPasteAutomationRoot4();
});

When("Click on Paste Button", async function () {
    await copyEnvPage.clickOnPaste();

});

Then("Previous copy folder should be Paste into the Root folder of Paste Global Environment", async function () {
    await copyEnvPage.clickOnGlobalPasteAutomationRoot();
});

Then("Previous copy folder should be Paste into the Root folder of Paste Global Environment4", async function () {
    await copyEnvPage.clickOnGlobalPasteAutomationRoot4();
});

When("The User clicks on the CopyBot within the Parent Paste Folder", async function () {
    await copyEnvPage.clickOnCopyBotPaste1();
});

When("Then navigates to the Properties Section", async function () {
    await copyEnvPage.clickOnPropertiesSection();

});

Then("The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted", async function () {
    await copyEnvPage.validateBotScriptPhoneNumberAndIndex();
});

When("The User clicks on the CopyQueue within the Parent Paste Folder", async function () {
    await copyEnvPage.clickOnCopyQueuePaste1();
});

When("Then navigates to the Service Bot", async function () {
    await copyEnvPage.clickOnCopyServiceBotPaste1();

});

Then("The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot", async function () {
    await copyEnvPage.validateServiceScriptCountAndQdata();
});

When("The User clicks on the CopyTable within the Parent Paste Folder", async function () {
    await copyEnvPage.clickOnCopyTablePaste1();
});


Then("The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted", async function () {
    await copyEnvPage.ValidateTableScriptPhoneAndDescription();
});

When("The User clicks on the LoadTestBotQueueTableChild Folder", async function () {
    await copyEnvPage.clickOnLoadTestBotQueueTableChildPasteFolder();
});


Then("The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder", async function () {
    await copyEnvPage.clickOnCopyChildBotPaste1();
    await copyEnvPage.clickOnCopyChildQueuePaste1();
    await copyEnvPage.clickOnCopyChildTablePaste1();
});


When("User Right click On LoadTestBotQueueTableParentPaste Folder", async function () {
    await copyEnvPage.rightClickOnLoadTestBotQueueTableParentPaste();
});

When("Click on Delete and OK Button", async function () {
    await copyEnvPage.clickOnDelete();

});

Then("LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully", async function () {
    await copyEnvPage.clickOnOk();
});

When("The User clicks on the MyWorkspace", async function () {
    await copyEnvPage.clickOnMyWorkspace();
});

When("Performs a right-click on the MyWorkspace Root Folder", async function () {
    await copyEnvPage.rightClickOnMyWorkspaceRoot();
});

When("Performs a right-click on the MyWorkspace Root Folder4", async function () {
    await copyEnvPage.rightClickOnMyWorkspaceRoot4();
});

Then("Selects the Paste option, ensuring the folder is successfully pasted", async function () {
    await copyEnvPage.clickOnPaste2();

});

When("The User clicks on Team Workspaces", async function () {
    await copyEnvPage.clickOnTeamWorkspaces();
});

When("Selects the already existing Developer Space", async function () {
    await copyEnvPage.clickOnDeveloper();
});

When("Selects the already existing Developer Space4", async function () {
    await copyEnvPage.clickOnDeveloper4();
});


When("Performs a right-click on the root folder of Team Workspaces", async function () {
    await copyEnvPage.rightClickOnTeamWorkspacesRoot();
});

When("Performs a right-click on the root folder of Team Workspaces4", async function () {
    await copyEnvPage.rightClickOnTeamWorkspacesRoot4();
});

Then("Selects the Paste option to ensure successful folder Pasting", async function () {
    await copyEnvPage.clickOnTeamWorkspacesPaste();
    await copyEnvPage.refreshPage();
    await copyEnvPage.clickOnTeamWorkspaces();
    await copyEnvPage.clickOnDeveloper();
    await copyEnvPage.clickOnTeamWorkspaceroot();

});

Then("Selects the Paste option to ensure successful folder Pasting4", async function () {
    await copyEnvPage.clickOnTeamWorkspacesPaste();
    await copyEnvPage.refreshPage();
    await copyEnvPage.clickOnTeamWorkspaces();
    await copyEnvPage.clickOnDeveloper4();
    await copyEnvPage.clickOnTeamWorkspaceroot4();

});

When("The User clicks on the Main Parent folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnParentFolderTW();
});

When("The User clicks on the CopyBot within the Parent Paste Folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnCopyBotPasteTW();
});

When("The User clicks on the CopyQueue within the Parent Paste Folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnCopyQueueTW();
});

When("Then navigates to the Service Bot of Team Workspaces", async function () {
    await copyEnvPage.clickOnServiceBotTW();
});


When("The User clicks on the CopyTable within the Parent Paste Folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnCopyTableTW();
});


When("The User clicks on the LoadTestBotQueueTableChild Folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnChildFolderTW();
});

Then("The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder of Team Workspaces", async function () {
    await copyEnvPage.clickOnCopyChildBotTW();
    await copyEnvPage.clickOnCopyChildQueueTW();
    await copyEnvPage.clickOnCopyChildtableTW();

});

When("Click on Delete and OK Button on Team Workspaces", async function () {
    await copyEnvPage.clickOnDeleteTW();
});

When("User Right click on LoadTestBotQueueTableParentPaste Folder", async function () {
    await copyEnvPage.rightClickOnParentFolderTW();
});