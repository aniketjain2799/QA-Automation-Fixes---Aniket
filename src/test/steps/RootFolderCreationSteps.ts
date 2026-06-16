import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import RootFolderCreationPage from "../../pages/RootFolderCreationPage";
import { newPageInstance } from "../steps/RBACSteps";
import * as fs from "fs";
import * as path from "path";


let rootFolderCreationPage: RootFolderCreationPage;

setDefaultTimeout(1200 * 1000 * 2);

function readJsonFile(filePath: string): any {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
}

When("User click on the existing Environment folder", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.waitForEnvironmentsElement();
    await rootFolderCreationPage.clickOnEnvironments();
    await rootFolderCreationPage.clickExistingEnvironment();
});

When("Right click on root folder", async function () {
    await rootFolderCreationPage.rightClickOnRoot();
});

When("click on New and Folder", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.clickOnNewAndFolder();
});

When("click On New and Folder", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.deleteIfExistsAndCreateNewFolder("New Folder");
});

When("the User right clicks on the root folder of MyWorkspace", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.rightClickOnRootMyWorkspace();
});

When("Check if folder already present or not", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.deleteIfExistsAndCreateNewFolder("New Folder");
});


Then("New Folder should be created in the Root folder", async function () {
    await rootFolderCreationPage.clickOnRootForFolderCreation();
});

When("User Right click on the New Folder for Bot creation", async function () {
    await rootFolderCreationPage.rightClickOnNewFolder();
});

When("User click on the New Folder", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.clickOnNewBot();
});

When("User click on the New FolderL", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.clickOnNewFolderL();
});

When("User click on the New FolderP", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.clickOnNewFolderP();
});

When("User Right click on the New Folder for Deletion", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await rootFolderCreationPage.rightClickOnNewFolder();
});

When("the User clicks on the Delete Button so folder should be Deleted", async function () {
    await rootFolderCreationPage.clickOnDeleteAndOk();
});

When("click on New and Bot", async function () {
    await rootFolderCreationPage.clickOnNewAndBot();

});

When("rename the new Bot", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    const botRename = jsonData[0].botRename;
    // await rootFolderCreationPage.clickOnNewAndBot();
    await rootFolderCreationPage.enterBotReNameForChange(botRename);


});

When("rename The new Bot", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    const botRename = jsonData[0].botRenameDev;
    // await rootFolderCreationPage.clickOnNewAndBot();
    await rootFolderCreationPage.enterBotReNameForChange(botRename);


});

When("rename The New Bot", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    const botRename = jsonData[0].botRenameAction;
    // await rootFolderCreationPage.clickOnNewAndBot();
    await rootFolderCreationPage.enterBotReNameForChange(botRename);


});

When("rename the New bot", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    const botRename = jsonData[0].botRenamePower;
    // await rootFolderCreationPage.clickOnNewAndBot();
    await rootFolderCreationPage.enterBotReNameForChange(botRename);


});

When("Rename the New Bot", async function () {
    const jsonData = readJsonFile(
        path.join(__dirname, "../../helper/util/test-data/TestData.json")
    );
    const botRename = jsonData[0].botRenameReviewer;
    // await rootFolderCreationPage.clickOnNewAndBot();
    await rootFolderCreationPage.enterBotReNameForChange(botRename);


});

When("User clicks On The New Bot MW", async function () {
    await rootFolderCreationPage.clickOnNewBotMWNew();
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then("New Bot should be created in the New folder", async function () {
    await rootFolderCreationPage.clickOnRootForBotCreation();
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("User Right click on the New Folder for Queue creation", async function () {
    await rootFolderCreationPage.rightClickOnNewFolder();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("click on New and Queue", async function () {
    await rootFolderCreationPage.clickOnNewAndQueue();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

Then("New Queue should be created in the New folder", async function () {
    await rootFolderCreationPage.clickOnRootForQueueCreation();
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("User Right click on the New Folder for Data table creation", async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewFolder();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("click on New and Data table", async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.clickOnNewAndDataTable();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

Then("New Data table should be created in the New folder", async function () {
    await rootFolderCreationPage.clickOnRootForDataTableCreation();
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("User Right click on the New Folder for Delete the New Folder", async function () {
    await rootFolderCreationPage.rightClickOnNewFolder();
});

When("click on Delete and ok", async function () {
    await rootFolderCreationPage.clickOnDeleteAndOk();
});

Then("New Folder should be get Deleted", async function () {
    await rootFolderCreationPage.clickOnRootToVerifyThatNewFolderDeleted();
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("User Right click on the DataTableTest Folder for Data table creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnDataTableTest();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the DataTable for Delete the DataTable", async function () {
    await rootFolderCreationPage.rightClickOnDataTable();
});

Then("DataTable should be get Deleted", async function () {
    await rootFolderCreationPage.clickOnRootToVerifyThatNewFolderDeleted();
    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("click on Delete and Ok", async function () {
    await rootFolderCreationPage.clickOnDeleteAndOkDataTable();
});


When("User click on the Data table For Verification", async function () {
    await rootFolderCreationPage.clickOnDataTableVerification();
});

Then("User can validate that total Row count Should be 2 also that The First Names should be Adele and Nestor", async function () {
    await rootFolderCreationPage.validateTotalRowsCountTable();
    await rootFolderCreationPage.ValidateNameTextTable();
    await rootFolderCreationPage.ValidateNameTextTableTwo();
});

When("User Right click on the NewBotTest Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User click on the RawData0 For Verification", async function () {
    await rootFolderCreationPage.clickOnRawData0();
});

Then("User can validate that total Row count Should be 5 also that The First Name and id", async function () {
    await rootFolderCreationPage.validateTotalRowsCountBot();
    await rootFolderCreationPage.ValidateNameTextBot();
    await rootFolderCreationPage.ValidateIdTextBotTwo();
});

When("User Right click on the NewBot for Delete the Bot", async function () {
    await rootFolderCreationPage.rightClickOnNewBot();
});

When("User Right Click On the NewBot For Delete The Bot", async function () {
    await rootFolderCreationPage.rightClickOnNewBot1();
});

When("User Right click On the NewBot For Delete the Bot", async function () {
    await rootFolderCreationPage.rightClickOnNewBot1();
});

Then("Bot should be get Deleted", async function () {
    await rootFolderCreationPage.clickOnRootToVerifyThatNewFolderDeleted();
    await new Promise(resolve => setTimeout(resolve, 3000));
});


When("click on New and Data Table", async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.clickOnNewAndDataTableTW();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the NewBotTest2 Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest2();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the NewBotTest2 Folder for NewBot creation4", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest24();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

Then("User can validate that Total Row count Should be 5 also that The First Name and id", async function () {
    await rootFolderCreationPage.validateTotalRowsCountBotRB(newPageInstance);
    await rootFolderCreationPage.ValidateNameTextBotRB(newPageInstance);
    await rootFolderCreationPage.ValidateIdTextBotTwoRB(newPageInstance);
});

When("User Right click on the NewBotTest3 Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest3();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the NewBotTest4 Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest4();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the NewBotTest5 Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest5();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When("User Right click on the NewBotTest6 Folder for NewBot creation", async function () {
    rootFolderCreationPage = new RootFolderCreationPage(fixture.page);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await rootFolderCreationPage.rightClickOnNewBotTest6();
    await new Promise(resolve => setTimeout(resolve, 1000));
});
