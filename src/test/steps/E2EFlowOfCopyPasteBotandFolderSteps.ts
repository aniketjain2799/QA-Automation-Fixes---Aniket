import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CopyPasteBotAndFolderPage from "../../pages/E2EFlowOfCopyPasteBotandFolderPage";


let copyPasteBotAndFolderPage: CopyPasteBotAndFolderPage;

setDefaultTimeout(1200 * 1000 * 2);

When("User click on Existing Environment CopyFolderAndBot", async function () {
    copyPasteBotAndFolderPage = new CopyPasteBotAndFolderPage(fixture.page);
    await copyPasteBotAndFolderPage.clickOnCopyFolderAndBot();
});

When("User Click On Root Folder", async function () {
    await copyPasteBotAndFolderPage.clickOnRoot();
});

Then("User Successfully Copy that Bot", async function () {
    await copyPasteBotAndFolderPage.clickOnCopyButton();
    await copyPasteBotAndFolderPage.clickOnCopyButtonOk();
});

When("User Rightclick on PasteFolderAndBot Folder", async function () {
    await copyPasteBotAndFolderPage.rightClickOnPasteBotAndFolder();
});

When("User click on PastefolderAndbot Folder", async function () {
    await copyPasteBotAndFolderPage.clickOnPastefolderAndbot();
});

When("User click on PasteFolderAndBot Folder", async function () {
    await copyPasteBotAndFolderPage.clickOnPasteBotAndFolder();
});

When("User rightClick On Root Folder", async function () {
    await copyPasteBotAndFolderPage.rightClickOnRootFolder();
});

Then("Previous copy Bot should be Paste into the PasteFolderAndBot folder", async function () {
    await copyPasteBotAndFolderPage.clickOnPaste();
});

Then("Previous copy Bot should be Paste into the PasteFolderAndBot folder1", async function () {
    await copyPasteBotAndFolderPage.clickOnPaste3();
});

Then("Previous copy Folder should be Paste into the PasteFolderAndBot folder1", async function () {
    await copyPasteBotAndFolderPage.clickOnPaste3();
});

When("User Right click on BotForCopy bot", async function () {
    await copyPasteBotAndFolderPage.rightClickOnBotforCopy();
});

When("User Right click on CopyPaste Folder", async function () {
    await copyPasteBotAndFolderPage.rightClickOnCopyPaste();
});

Then("User Successfully Copy That Folder", async function () {
    await copyPasteBotAndFolderPage.clickOnCopyButton1();
    await copyPasteBotAndFolderPage.clickOnCopyButtonOk();
});

Then("Previous copy Folder should be Paste into the PasteFolderAndBot folder", async function () {
    await copyPasteBotAndFolderPage.clickOnPaste();
});

When("User click on BotForCopy bot", async function () {
    await copyPasteBotAndFolderPage.clickOnBotforCopy21();
});

When("User click on BotForCopy bot1", async function () {
    await copyPasteBotAndFolderPage.clickOnBotforCopy211();
});

Then("the User can validate Total Raw Count", async function () {
    await copyPasteBotAndFolderPage.validateTotalItems();
});

When("the User right click on the BotForCopy bot3", async function () {
    await copyPasteBotAndFolderPage.rightClickOnBotforCopy3();
});

When("the User right click on the BotForCopy bot4", async function () {
    await copyPasteBotAndFolderPage.rightClickOnBotforCopy4();
});

When("Click on delete button", async function () {
    await copyPasteBotAndFolderPage.clickOnDeleteButton();
});

When("User click on BotForCopy bot4", async function () {
    await copyPasteBotAndFolderPage.clickOnCopyPaste4();
});

When("User click on BotForCopy bot5", async function () {
    await copyPasteBotAndFolderPage.clickOnCopyPaste5();
});

Then("the BotForCopy bot should be Deleted", async function () {
    await copyPasteBotAndFolderPage.clickOnClickOk();
});

When("the User right click on the CopyPaste folder", async function () {
    await copyPasteBotAndFolderPage.rightClickOnCopyPaste2();
});

When("the User click on the CopyPaste folder", async function () {
    await copyPasteBotAndFolderPage.clickOnCopyPaste2();
});

When("Click on delete button1", async function () {
    await copyPasteBotAndFolderPage.clickOnDelete2();
});

Then("the CopyPaste folder should be Deleted", async function () {
    await copyPasteBotAndFolderPage.clickOnClickOk();
});