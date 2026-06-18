import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CommandBuilderRetrievingDataPage from "../../pages/CommandBuilderScriptRetrievingDataFromRESTAPIPages";
import * as data from "../../helper/util/test-data/TestData.json";
import * as fs from "fs";
import * as path from "path";



let commandBuilderRetrievingDataPage: CommandBuilderRetrievingDataPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Command Builder Folder", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnCommandBuilder();

});

When("the User click on Bot1", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1();

});

Then("Bot1 script Should Be executed Successfully", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("Bot1 script Should Be executed Successfully with PS7 and ConnectID", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(180000);
    const expectedValue01 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue01);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(180000);
    const expectedValue02 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue02);

    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(360000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(360000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("readiBotsJobRetrieveData Bot script Should Be executed Successfully", async function () {

    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(300000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("readiBotsJobRetrieveData Bot script Should Be executed Successfully with PS7 and ConnectID", async function () {

    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(60000);
    const expectedValue03 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue03);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue04 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue04);

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(300000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User clicks on Raw data 0 tab", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnRawData0();

});

Then("the User will be able to store the knowledge of the total number of rows present", async function () {
    this.bot1RowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`Bot1 Row Count: ${this.bot1RowCount}`);

});

When("the User clicks on Bot1ReadNew", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1ReadNew();

});

Then("Bot1ReadNew script Should Be executed Successfully", async function () {

    const jobFinishedText1 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue1 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue1);

    const noErrorText1 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText1);
    const expectedValue11 = "no errors";
    expect(noErrorText1).toContain(expectedValue11);
});

Then("the User can validate that Bot1ReadNew total number of rows present with Bot1 total number of rows present", async function () {
    this.bot1ReadNewRowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`Bot1ReadNew Row Count: ${this.bot1ReadNewRowCount}`);
    expect(this.bot1RowCount).toBe(this.bot1ReadNewRowCount);
    console.log('Row counts are equal');
});


When("the User clicks on Bot1ReadOld", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1ReadOld();

});

Then("Bot1ReadOld script Should Be executed Successfully", async function () {

    const jobFinishedText11 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue12 = "Job finished";
    expect(jobFinishedText11).toContain(expectedValue12);

    const noErrorText13 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText13);
    const expectedValue13 = "no errors";
    expect(noErrorText13).toContain(expectedValue13);
});

Then("the User can validate that Bot1ReadOld total number of rows present with Bot1 total number of rows present", async function () {
    this.bot1ReadOldRowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`Bot1ReadOld Row Count: ${this.bot1ReadOldRowCount}`);
    expect(this.bot1RowCount).toBe(this.bot1ReadOldRowCount);
    console.log('Row counts between Bot1 and Bot1ReadOld are equal');
});


// Then('the User can validate that the Raw Data 0 timestamp is New', async function () {
//     const rawDataTimeText = await fixture.page.textContent("//span[@class='dataRetrievalDate']");

//     const rawDataTime = new Date(rawDataTimeText.trim());

//     const currentTime = new Date();

//     console.log(`Raw Data Time from page: ${rawDataTime}`);
//     console.log(`Current System Time: ${currentTime}`);

//     const isSameHour = rawDataTime.getHours() === currentTime.getHours();
//     const isSameMinute = rawDataTime.getMinutes() === currentTime.getMinutes();
//     const isSameDate = rawDataTime.getDate() === currentTime.getDate();
//     const isSameMonth = rawDataTime.getMonth() === currentTime.getMonth();
//     const isSameYear = rawDataTime.getFullYear() === currentTime.getFullYear();

//     const isNew = isSameYear && isSameMonth && isSameDate && isSameHour && isSameMinute;

//     if (isNew) {
//         console.log('Raw Data timestamp is considered new within the same minute.');
//     } else {
//         console.log('Raw Data timestamp is considered old or from a different minute.');
//     }
//     expect(isNew).toBeTruthy();
// });

// Then('the User can validate that the Raw Data 0 timestamp is New', async function() {
//     const rawDataTimeText = await fixture.page.textContent("//span[@class='dataRetrievalDate']");
//     const rawDataTime = new Date(rawDataTimeText.trim());
//     const currentTime = new Date();
//     const rawDataTimeUTC = new Date(rawDataTime.getTime() + rawDataTime.getTimezoneOffset() * 60000);
//     const currentTimeUTC = new Date(currentTime.getTime() + currentTime.getTimezoneOffset() * 60000);
//     console.log(`Raw Data Time from page (UTC): ${rawDataTimeUTC}`);
//     console.log(`Current System Time (UTC): ${currentTimeUTC}`);
//     const isSameHour = rawDataTimeUTC.getUTCHours() === currentTimeUTC.getUTCHours();
//     const isSameMinute = rawDataTimeUTC.getUTCMinutes() === currentTimeUTC.getUTCMinutes();
//     const isSameDate = rawDataTimeUTC.getUTCDate() === currentTimeUTC.getUTCDate();
//     const isSameMonth = rawDataTimeUTC.getUTCMonth() === currentTimeUTC.getUTCMonth();
//     const isSameYear = rawDataTimeUTC.getUTCFullYear() === currentTimeUTC.getUTCFullYear();
//     const isNew = isSameYear && isSameMonth && isSameDate && isSameHour && isSameMinute;

//     if (isNew) {
//       console.log('Raw Data timestamp is considered new within the same minute (UTC).');
//     } else {
//       console.log('Raw Data timestamp is considered old or from a different minute (UTC).');
//     }
//     expect(isNew).toBeTruthy();
//   });


Then('the User can validate that the Raw Data 0 timestamp is New', async function () {

    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);

    const rawDataTimeText = await fixture.page.textContent("//span[@class='dataRetrievalDate']");
    const rawDataTime = new Date(rawDataTimeText.trim());
    const currentTime = new Date();
    const rawDataTimeUTC = new Date(rawDataTime.getTime() + rawDataTime.getTimezoneOffset() * 60000);
    const currentTimeUTC = new Date(currentTime.getTime() + currentTime.getTimezoneOffset() * 60000);

    console.log(`Raw Data Time from page (UTC): ${rawDataTimeUTC}`);
    console.log(`Current System Time (UTC): ${currentTimeUTC}`);

    const differenceInMilliseconds = currentTimeUTC.getTime() - rawDataTimeUTC.getTime();
    const fiveMinutesInMilliseconds = 5 * 60 * 1000;
    const isNew = differenceInMilliseconds >= -fiveMinutesInMilliseconds && differenceInMilliseconds <= fiveMinutesInMilliseconds;

    if (isNew) {
        console.log('Raw Data timestamp is considered new within ±5 minutes (UTC).');
    } else {
        console.log('Raw Data timestamp is considered old or outside the ±5 minutes range (UTC).');
    }

    expect(isNew).toBeTruthy();
});


When("the User clicks on Bot1ExecuteOld", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1ExecuteOld();

});


Then("the Bot1ExecuteOld script should be executed successfully, and the Run ID should be stored", async function () {

    const jobFinishedText16 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue16 = "Job finished";
    expect(jobFinishedText16).toContain(expectedValue16);

    const noErrorText17 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText17);
    const expectedValue17 = "no errors";
    expect(noErrorText17).toContain(expectedValue17);

    this.bot1ExecuteOldRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Extracted Run ID: ${this.bot1ExecuteOldRunId}`);
});


Then("the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteOld Run ID", async function () {

    const jobFinishedText18 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue18 = "Job finished";
    expect(jobFinishedText18).toContain(expectedValue18);

    const noErrorText19 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText19);
    const expectedValue19 = "no errors";
    expect(noErrorText19).toContain(expectedValue19);

    this.bot1WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Worker Created ID: ${this.bot1WorkerCreatedId}`);

    expect(this.bot1WorkerCreatedId).toBe(this.bot1ExecuteOldRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});

When("the User clicks on Bot1ExecuteGet", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1ExecuteGet();
});

Then("the Bot1ExecuteGet script should be executed successfully, and the Run ID should be stored", async function () {
    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    expect(jobFinishedText).toContain("Job finished");

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    expect(noErrorText).toContain("no errors");

    this.bot1ExecuteGetRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Bot1ExecuteGet Run ID: ${this.bot1ExecuteGetRunId}`);
});

When("the User clicks on Bot1ExecutePostForm", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot1ExecutePostForm();
});

Then("the Bot1ExecutePostForm script should be executed successfully, and the Run ID should be stored", async function () {
    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    expect(jobFinishedText).toContain("Job finished");

    const noErrorText = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    expect(noErrorText).toContain("no errors");

    this.bot1ExecutePostFormRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Bot1ExecutePostForm Run ID: ${this.bot1ExecutePostFormRunId}`);
});

Then("the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteGet Run ID", async function () {
    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    expect(jobFinishedText).toContain("Job finished");

    const workerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Worker Created ID: ${workerCreatedId}`);

    expect(workerCreatedId).toBe(this.bot1ExecuteGetRunId);
    console.log("Worker Created ID matches Bot1ExecuteGet Run ID.");
});

Then("the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecutePostForm Run ID", async function () {
    const jobFinishedText = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    expect(jobFinishedText).toContain("Job finished");

    const workerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Worker Created ID: ${workerCreatedId}`);

    expect(workerCreatedId).toBe(this.bot1ExecutePostFormRunId);
    console.log("Worker Created ID matches Bot1ExecutePostForm Run ID.");
});

Then("the User Will be able to store the knowledge of the total number of rows present", async function () {
    this.bot1RowCount1 = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`Bot1 Row Count1: ${this.bot1RowCount1}`);

});

Then("the User Will be able to store the knowledge of the total number of rows present in RESTAPIRetrievePowershell", async function () {
    this.RESTAPIRetrievePowershellRowCount1 = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`RESTAPIRetrievePowershell Row Count1: ${this.RESTAPIRetrievePowershellRowCount1}`);

});

Then("the User Will be able to store the Knowledge of the total number of rows present", async function () {
    this.readiBotsJobRetrieveDataRowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`readiBotsJobRetrieveDataBot Count: ${this.readiBotsJobRetrieveDataRowCount}`);

});

When("the User clicks on the MenuValue Selection Folder", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnMenuValueSelection();

});

When("the User clicks on the MenuValue Selection PS7Proxy Folder", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnMenuValueSelectionPS7Proxy();

});

When("the User clicks on the readiBotsJobRetrieveData Folder", async function () {
    await commandBuilderRetrievingDataPage.clickOnReadiBotsJobRetrieveData();

});


When("click On Command Builder option Tasks", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnCommandBuilder1();

});

When("the User fill the command build form with respective values", async function () {
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command build form with respective values PS7", async function () {
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection6();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command build form with respective values MW", async function () {
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath1);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection2();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command build form with respective values TW", async function () {
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath2);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection4();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("click on copy command button", async function () {
    await commandBuilderRetrievingDataPage.clickOnCopyButton();

});

Then("the Command should be successfully copied", async function () {


});

When("the User click on Bot1 under the MenuValue Selection Folder", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot12();

});

When("the User click on Bot1 under the MenuValue Selection Folder4", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot124();

});

When("the User click on Bot1 under the MenuValue Selection Folder Ps7", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot7();

});

When("the User click on Bot1 under the MenuValue Selection Folder Ps74", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot74();

});

When("the User click on Bot1 under the MenuValue Selection Folder MW", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot13();

});

When("the User click on Bot1 under the MenuValue Selection Folder MW4", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot134();

});

When("the User click on Bot1 under the MenuValue Selection Folder TW", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot14();

});

When("the User click on Bot1 under the MenuValue Selection Folder TW4", async function () {
    await commandBuilderRetrievingDataPage.clickOnBot144();

});

function readJsonFile(filePath: string): any {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
}

When("the User should be able to paste the script in the Monaco editor, run the script, and validate that it executes successfully with no errors", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.clearInput("viewlinesCompleteBox");

    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.fillMonacoEditorPropertiesSection();

    await new Promise(resolve => setTimeout(resolve, 3000));
});

When("the User clicks on readiBotsJobRetrieveDataBot", async function () {
    await commandBuilderRetrievingDataPage.clickOnReadiBotsJobRetrieveData();

});


Then("the User can validate that readiBotsJobRetrieveData Bot total number of rows present with bot1 total number of rows present", async function () {
    this.readiBotsJobRetrieveDataRowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`readiBotsJobRetrieveData Row Count: ${this.readiBotsJobRetrieveDataRowCount}`);
    console.log(`Bot1 Row Count: ${this.bot1RowCount1}`);

    expect(this.bot1RowCount1).toBe(this.readiBotsJobRetrieveDataRowCount);
    console.log('Row counts between readiBotsJobRetrieveData Bot and Bot1 are equal');
});

When("the User clicks on readiBotsJobExecute", async function () {
    await commandBuilderRetrievingDataPage.clickOnReadiBotsJobExecute();

});

When("the User Fill the command builder form with respective values", async function () {
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection();

});

When("the User Fill the command builder form with respective values PS7", async function () {
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection6();

});

When("the User Fill the command Builder form with respective values", async function () {
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath1);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection2();

});

When("the User Fill the command Builder form with respective values TW", async function () {
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath2);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection4();

});

When("the User should be able to paste the Execute script in the Monaco editor, run the script, and validate that it executes successfully with no errors", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.clearInput("viewlinesCompleteBox");

    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.fillMonacoEditorPropertiesSectionExe();

    await new Promise(resolve => setTimeout(resolve, 3000));
});

Then("readiBotsJobExecute Bot script Should Be executed Successfully, and the Run ID should be stored", async function () {

    const jobFinishedText14 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue14 = "Job finished";
    expect(jobFinishedText14).toContain(expectedValue14);

    const noErrorText16 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText16);
    const expectedValue16 = "no errors";
    expect(noErrorText16).toContain(expectedValue16);

    this.MenuExecuteOldRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`MenuExe Extracted Run ID: ${this.MenuExecuteOldRunId}`);
});

Then("readiBotsJobExecute Bot script Should Be executed Successfully, and the Run ID should be stored with PS7 and ConnectID", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue05 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue05);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue06 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue06);

    const jobFinishedText14 = await commandBuilderRetrievingDataPage.getJobFinishedText(180000);
    const expectedValue14 = "Job finished";
    expect(jobFinishedText14).toContain(expectedValue14);

    const noErrorText16 = await commandBuilderRetrievingDataPage.getNoErrorText(180000);
    console.log(noErrorText16);
    const expectedValue16 = "no errors";
    expect(noErrorText16).toContain(expectedValue16);

    this.MenuExecuteOldRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`MenuExe Extracted Run ID: ${this.MenuExecuteOldRunId}`);
});


Then("the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID", async function () {

    const jobFinishedText28 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue28 = "Job finished";
    expect(jobFinishedText28).toContain(expectedValue28);

    const noErrorText29 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText29);
    const expectedValue29 = "no errors";
    expect(noErrorText29).toContain(expectedValue29);

    this.menuExebot1WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Menuexe Worker Created ID: ${this.menuExebot1WorkerCreatedId}`);

    expect(this.menuExebot1WorkerCreatedId).toBe(this.MenuExecuteOldRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});

When("the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell PS7", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection6();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell TW", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath2);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection4();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell MW", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath1);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection2();
    await commandBuilderRetrievingDataPage.clickOnColumn();
    await commandBuilderRetrievingDataPage.clickOnId();

});

When("the User clicks on the Secrets tab", async function () {
    await commandBuilderRetrievingDataPage.clickOnSecrets();

});

When("the User clicks on the copy icon for SecretValue", async function () {
    await commandBuilderRetrievingDataPage.clickonCopyButton();

});

// When("the secret key should be copied successfully on clipboard after clicking the OK button", async function () {
//     await commandBuilderRetrievingDataPage.clickonOkButton();
//     const secretValue = await this.page.evaluate(() => navigator.clipboard.readText());
//     console.log('Secret Value:', secretValue);
//     this.secretKey = secretValue.trim();


// });

When("the User clicks on the Eye icon for SecretValue", async function () {
    await commandBuilderRetrievingDataPage.clickOnEyeIcon();

});

When("the secret key should be Extracted successfully", async function () {
    await commandBuilderRetrievingDataPage.extractSecretValue();

});

When("the User clicks on the RESTAPI_Retrieve_Powershell", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApiRetrievePowershell();

});

Then("the User should be able to paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.clearInput("viewlinesCompleteBox");

    await new Promise(resolve => setTimeout(resolve, 3000));
    this.secretKey = await commandBuilderRetrievingDataPage.extractSecretValue(); // Ensure secret is assigned
    await commandBuilderRetrievingDataPage.fillMonacoEditorWithFinalScript(this.secretKey);


    await new Promise(resolve => setTimeout(resolve, 3000));
});

Then("RESTAPI_Retrieve_Powershell Bot script Should Be executed Successfully", async function () {

    const jobFinishedText76 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue76 = "Job finished";
    expect(jobFinishedText76).toContain(expectedValue76);

    const noErrorText58 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText58);
    const expectedValue58 = "no errors";
    expect(noErrorText58).toContain(expectedValue58);
});

Then("RESTAPI_Retrieve_Powershell Bot script Should Be executed Successfully with PS7 and ConnectID", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue07 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue07);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue08 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue08);

    const jobFinishedText76 = await commandBuilderRetrievingDataPage.getJobFinishedText(180000);
    const expectedValue76 = "Job finished";
    expect(jobFinishedText76).toContain(expectedValue76);

    const noErrorText58 = await commandBuilderRetrievingDataPage.getNoErrorText(180000);
    console.log(noErrorText58);
    const expectedValue58 = "no errors";
    expect(noErrorText58).toContain(expectedValue58);
});

Then("the User can validate that RESTAPI_Retrieve_Powershell Bot total number of rows present with bot1 total number of rows present", async function () {
    this.menuBarBotRowCount = await commandBuilderRetrievingDataPage.getRawDataRowCount();
    console.log(`menuBarBot Row Count: ${this.menuBarBotRowCount}`);
    console.log(`RESTAPIRetrievePowershell Row Count1 Row Count: ${this.RESTAPIRetrievePowershellRowCount1}`);

    expect(this.RESTAPIRetrievePowershellRowCount1).toBe(this.menuBarBotRowCount);
    console.log('Row counts between RESTAPIRetrievePowershell Bot and menuBarBot are equal');
});

When("the User clicks on RestApiExecuteGetQuery", async function () {
    await commandBuilderRetrievingDataPage.clickOnRestApiExecuteGetQuery();

});

When("the User fill the command builder form with respective values for RestApiExecuteGetQuery", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection();

});

When("the User fill the command builder form with respective values for RestApiExecuteGetQuery PS7", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection6();

});

When("the User fill the command Builder Form with respective values for RestApiExecuteGetQuery", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath1);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection2();

});

When("the User fill the command Builder Form with respective values for RestApiExecuteGetQuery TW", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[8].ScriptPath2);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection4();

});

Then("the User should be able to paste the Script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.clearInput("viewlinesCompleteBox");

    // secretKey already extracted during the Eye icon step earlier in this scenario — reuse it
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.fillMonacoEditorWithFinalScriptExe(this.secretKey);

    await new Promise(resolve => setTimeout(resolve, 3000));
});


When("click On DashBoard Section", async function () {
    await commandBuilderRetrievingDataPage.clickOnDashboard();

});

Then("RestApiExecuteGetQuery Bot script Should Be executed Successfully, and the Run ID should be stored", async function () {

    const jobFinishedText141 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue141 = "Job finished";
    expect(jobFinishedText141).toContain(expectedValue141);

    const noErrorText161 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText161);
    const expectedValue161 = "no errors";
    expect(noErrorText161).toContain(expectedValue161);

    this.MenuExecuteOldRunId23 = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`MenuExe Extracted Run ID 23: ${this.MenuExecuteOldRunId23}`);
});

Then("RestApiExecuteGetQuery Bot script Should Be executed Successfully with PS7 and ConnectID, and the Run ID should be stored", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue09 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue09);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue010 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue010);

    const jobFinishedText141 = await commandBuilderRetrievingDataPage.getJobFinishedText(180000);
    const expectedValue141 = "Job finished";
    expect(jobFinishedText141).toContain(expectedValue141);

    const noErrorText161 = await commandBuilderRetrievingDataPage.getNoErrorText(180000);
    console.log(noErrorText161);
    const expectedValue161 = "no errors";
    expect(noErrorText161).toContain(expectedValue161);

    this.MenuExecuteOldRunId23 = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`MenuExe Extracted Run ID 23: ${this.MenuExecuteOldRunId23}`);
});

Then("the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID 23", async function () {

    const jobFinishedText281 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue281 = "Job finished";
    expect(jobFinishedText281).toContain(expectedValue281);

    const noErrorText291 = await commandBuilderRetrievingDataPage.getNoErrorText(180000);
    console.log(noErrorText291);
    const expectedValue291 = "no errors";
    expect(noErrorText291).toContain(expectedValue291);

    this.menuExebot1WorkerCreatedId23 = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Menuexe Worker Created ID: ${this.menuExebot1WorkerCreatedId23}`);

    expect(this.menuExebot1WorkerCreatedId23).toBe(this.MenuExecuteOldRunId23);
    console.log('Run ID and Worker Created ID match successfully.');
});

When("the User click on BotParam under the MenuValue Selection Folder", async function () {
    await commandBuilderRetrievingDataPage.clickOnBotParam();

});

When("the User clicks on Plus icon for generating new Secret key", async function () {
    await commandBuilderRetrievingDataPage.clickOnPlusIcon();

});


Then("the User can be able to generate new Secret Key by filling the form", async function () {
    await commandBuilderRetrievingDataPage.EnterScriptRestEndPointName(data[9].SecretName);
    await commandBuilderRetrievingDataPage.clickOnGenerateRandomToken();
    await commandBuilderRetrievingDataPage.EnterDate(data[9].SecretDate);
    await commandBuilderRetrievingDataPage.clickOnExecuteBotRestPermission();
    await commandBuilderRetrievingDataPage.clickOnReadDataRestPermission();
    await commandBuilderRetrievingDataPage.clickOnOkButton();

});

When("the secret key should be Extracted Successfully", async function () {
    await commandBuilderRetrievingDataPage.extractSecretValue1();

});

When("Click Ok", async function () {
    await commandBuilderRetrievingDataPage.clickOnOkButton();

});

When("the User clicks on the RestApiExecutPostQuery", async function () {
    await commandBuilderRetrievingDataPage.clickOnRestApiExecutePostQuery();

});

When("the User Fill The command builder form with respective values for RESTAPI_Retrieve_Powershell", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnMethodDropDown();
    await commandBuilderRetrievingDataPage.clickOnPostJson();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[9].ScriptPath);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection1();
});

When("the User Fill The Command Builder form with respective values for RESTAPI_Retrieve_Powershell", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnMethodDropDown();
    await commandBuilderRetrievingDataPage.clickOnPostJson();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[9].ScriptPath1);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection3();
});

When("the User Fill The Command Builder form with respective values for RESTAPI_Retrieve_Powershell TW", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnMethodDropDown();
    await commandBuilderRetrievingDataPage.clickOnPostJson();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[9].ScriptPath2);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection5();
});

When("the User Fill The Command Builder form with respective values For RESTAPI_Retrieve_Powershell PS7", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnMethodDropDown();
    await commandBuilderRetrievingDataPage.clickOnPostJson();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[9].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection7();
});

When("the User Fill The Command Builder form with respective values for RESTAPI_Retrieve_Powershell PS7", async function () {
    await commandBuilderRetrievingDataPage.clickonRestApi();
    await commandBuilderRetrievingDataPage.clickOnExecute();
    await commandBuilderRetrievingDataPage.clickOnMethodDropDown();
    await commandBuilderRetrievingDataPage.clickOnPostJson();
    await commandBuilderRetrievingDataPage.clickOnTxtScriptQueryBuilder();
    await commandBuilderRetrievingDataPage.EnterCompleteScriptPath(data[9].ScriptPath3);
    await commandBuilderRetrievingDataPage.clickOnFirstRowSelection6();
});

Then("the User should be able to Paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await commandBuilderRetrievingDataPage.clearInput("viewlinesCompleteBox");

    await new Promise(resolve => setTimeout(resolve, 3000));
    this.secretKey2 = await commandBuilderRetrievingDataPage.extractSecretValue1(); // Ensure `secretKey2` is assigned
    await commandBuilderRetrievingDataPage.fillMonacoEditorWithFinalScript2(this.secretKey2);

    await new Promise(resolve => setTimeout(resolve, 3000));
});



Then("the RestApiExecutPostQuery script should be executed successfully, and the Run ID should be stored", async function () {
    const jobFinishedText55 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    expect(jobFinishedText55).toContain("Job finished");

    const noErrorText55 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    expect(noErrorText55).toContain("no errors");

    this.restApiExecutPostQueryRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`RestApiExecutPostQuery Run ID: ${this.restApiExecutPostQueryRunId}`);
});

Then("the RestApiExecutPostQuery script should be executed successfully with PS7 and ConnectID, and the Run ID should be stored", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue011 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue011);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue012 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue012);

    const jobFinishedText55 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    expect(jobFinishedText55).toContain("Job finished");

    const noErrorText55 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    expect(noErrorText55).toContain("no errors");

    this.restApiExecutPostQueryRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`RestApiExecutPostQuery Run ID: ${this.restApiExecutPostQueryRunId}`);
});

Then("the Menu BotParam script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID  Also validate the all the data types are coming or not", async function () {

    const jobFinishedText283 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue283 = "Job finished";
    expect(jobFinishedText283).toContain(expectedValue283);

    const noErrorText293 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText293);
    const expectedValue293 = "no errors";
    expect(noErrorText293).toContain(expectedValue293);

    this.menuExebotParamWorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Menuexe Worker Created ID: ${this.menuExebotParamWorkerCreatedId}`);

    expect(this.menuExebotParamWorkerCreatedId).toBe(this.restApiExecutPostQueryRunId);
    console.log('Run ID and Worker Created ID match successfully.');

    await commandBuilderRetrievingDataPage.validateDataTypes1();
});

Then("the User can validate that all the data types are coming or not in Raw Data0 Tab", async function () {
    await commandBuilderRetrievingDataPage.validateRawData0Types();
});

When("click on Delete icon", async function () {
    await commandBuilderRetrievingDataPage.clickOnRemove();
});

Then("the Secret key should be Deleted", async function () {
    await commandBuilderRetrievingDataPage.clickOnOk();
});

Then("BotForQueuePostJson Bot script Should Be executed Successfully", async function () {

    const jobFinishedText76 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue76 = "Job finished";
    expect(jobFinishedText76).toContain(expectedValue76);

    const noErrorText76 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText76);
    const expectedValue176 = "no errors";
    expect(noErrorText76).toContain(expectedValue176);
});

Then("BotForQueuePostJson Bot script Should Be executed Successfully with PS7 and ConnectID", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue013 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue013);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue014 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue014);

    const jobFinishedText76 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue76 = "Job finished";
    expect(jobFinishedText76).toContain(expectedValue76);

    const noErrorText76 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText76);
    const expectedValue176 = "no errors";
    expect(noErrorText76).toContain(expectedValue176);
});

When("the User clicks on the SendingDataIntoQueue Folder", async function () {
    await commandBuilderRetrievingDataPage.clickOnSendingDataintoQueue();
});

When("the User clicks on the BotForQueuePostJson Bot", async function () {
    await commandBuilderRetrievingDataPage.clickOnBotForQueuePost();
});

When("the User clicks on the Queue", async function () {
    await commandBuilderRetrievingDataPage.clickOnQueue();
});

When("click on the Service Bot", async function () {
    await commandBuilderRetrievingDataPage.clickOnServiceBot();
});

Then("the Service Bot script Should Be executed Successfully", async function () {

    await commandBuilderRetrievingDataPage.clickShowExecutionLogIfVisible();
    const jobFinishedText761 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue761 = "Job finished";
    expect(jobFinishedText761).toContain(expectedValue761);

    const noErrorText761 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText761);
    const expectedValue1761 = "no errors";
    expect(noErrorText761).toContain(expectedValue1761);
});

Then("the Service Bot script Should Be executed Successfully with PS7 and ConnectID", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue015 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue015);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue016 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue016);

    const jobFinishedText761 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue761 = "Job finished";
    expect(jobFinishedText761).toContain(expectedValue761);

    const noErrorText761 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText761);
    const expectedValue1761 = "no errors";
    expect(noErrorText761).toContain(expectedValue1761);
});

Then("the User can validate that all the data Types are coming or not in Raw Data0 Tab", async function () {
    await commandBuilderRetrievingDataPage.validateRawDataTypes();
});

When("the User clicks on the DataTable Folder", async function () {
    await commandBuilderRetrievingDataPage.clickOnDataTable();

});

When("the User clicks on the BotForDataTableGetQuery Bot", async function () {
    await commandBuilderRetrievingDataPage.clickOnBotForDataTableGetQuery();

});

Then("the BotForDataTableGetQuery script should be executed successfully, and the Run ID should be stored", async function () {
    await commandBuilderRetrievingDataPage.clickShowExecutionLogIfVisible();
    const jobFinishedText160 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue160 = "Job finished";
    expect(jobFinishedText160).toContain(expectedValue160);

    const noErrorText170 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText170);
    const expectedValue170 = "no errors";
    expect(noErrorText170).toContain(expectedValue170);

    this.BotForDataTableGetQueryRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Extracted Run ID: ${this.BotForDataTableGetQueryRunId}`);
});

Then("the BotForDataTableGetQuery script should be executed successfully with PS7 and ConnectID, and the Run ID should be stored", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue017 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue017);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue018 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue018);

    const jobFinishedText160 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue160 = "Job finished";
    expect(jobFinishedText160).toContain(expectedValue160);

    const noErrorText170 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText170);
    const expectedValue170 = "no errors";
    expect(noErrorText170).toContain(expectedValue170);

    this.BotForDataTableGetQueryRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Extracted Run ID: ${this.BotForDataTableGetQueryRunId}`);
});

When("the User click on Table1", async function () {
    await commandBuilderRetrievingDataPage.clickOnTable1();

});

Then("the Table1 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableGetQuery Run ID", async function () {

    const jobFinishedText180 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue180 = "Job finished";
    expect(jobFinishedText180).toContain(expectedValue180);

    const noErrorText190 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText190);
    const expectedValue190 = "no errors";
    expect(noErrorText190).toContain(expectedValue190);

    this.table1WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Worker Created ID: ${this.table1WorkerCreatedId}`);

    expect(this.table1WorkerCreatedId).toBe(this.BotForDataTableGetQueryRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});


Then("the Table1 script should be executed successfully with PS7 and ConnectID, and the Worker-created ID should be captured and matched with the BotForDataTableGetQuery Run ID", async function () {

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(300000);
    const expectedValue024 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue024);

    const jobFinishedText180 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue180 = "Job finished";
    expect(jobFinishedText180).toContain(expectedValue180);

    const noErrorText190 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText190);
    const expectedValue190 = "no errors";
    expect(noErrorText190).toContain(expectedValue190);

    this.table1WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Worker Created ID: ${this.table1WorkerCreatedId}`);

    expect(this.table1WorkerCreatedId).toBe(this.BotForDataTableGetQueryRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});

When("the User clicks on Data table tab", async function () {
    await commandBuilderRetrievingDataPage.clickOnDataTableTab();

});

Then("the User can validate the phone number", async function () {
    await commandBuilderRetrievingDataPage.PhoneNumberValidationRaw1();

});

When("the User clicks on the BotForDataTableExecutePostJson Bot", async function () {
    await commandBuilderRetrievingDataPage.clickOnBotForDataTablePostJson();

});

Then("the BotForDataTableExecutePostJson script should be executed successfully, and the Run ID should be stored", async function () {

    const jobFinishedText168 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue168 = "Job finished";
    expect(jobFinishedText168).toContain(expectedValue168);

    const noErrorText178 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText178);
    const expectedValue178 = "no errors";
    expect(noErrorText178).toContain(expectedValue178);

    this.BotForDataTablePostJsonRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Extracted Run ID: ${this.BotForDataTablePostJsonRunId}`);
});

Then("the BotForDataTableExecutePostJson script should be executed successfully with PS7 and ConnectID, and the Run ID should be stored", async function () {

    const ProxyConnectText = await commandBuilderRetrievingDataPage.getProxyConnectIdText(300000);
    const expectedValue020 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText).toContain(expectedValue020);

    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(80000);
    const expectedValue021 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue021);

    const jobFinishedText168 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue168 = "Job finished";
    expect(jobFinishedText168).toContain(expectedValue168);

    const noErrorText178 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText178);
    const expectedValue178 = "no errors";
    expect(noErrorText178).toContain(expectedValue178);

    this.BotForDataTablePostJsonRunId = await commandBuilderRetrievingDataPage.extractRunId();
    console.log(`Extracted Run ID: ${this.BotForDataTablePostJsonRunId}`);
});

When("the User click on Table2", async function () {
    await commandBuilderRetrievingDataPage.clickOnTable2();

});

Then("the Table2 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableExecutePostJson Run ID", async function () {

    const jobFinishedText181 = await commandBuilderRetrievingDataPage.getJobFinishedText(1080000);
    const expectedValue181 = "Job finished";
    expect(jobFinishedText181).toContain(expectedValue181);

    const noErrorText191 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText191);
    const expectedValue191 = "no errors";
    expect(noErrorText191).toContain(expectedValue191);

    this.table2WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Worker Created ID: ${this.table2WorkerCreatedId}`);

    expect(this.table2WorkerCreatedId).toBe(this.BotForDataTablePostJsonRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});

Then("the Table2 script should be executed successfully with PS7 and ConnectID, and the Worker-created ID should be captured and matched with the BotForDataTableExecutePostJson Run ID", async function () {


    const PS7TextStartJobObject = await commandBuilderRetrievingDataPage.getPS7Text(300000);
    const expectedValue027 = "PS7 Sub-process started";
    expect(PS7TextStartJobObject).toContain(expectedValue027);


    const jobFinishedText181 = await commandBuilderRetrievingDataPage.getJobFinishedText(120000);
    const expectedValue181 = "Job finished";
    expect(jobFinishedText181).toContain(expectedValue181);

    const noErrorText191 = await commandBuilderRetrievingDataPage.getNoErrorText(120000);
    console.log(noErrorText191);
    const expectedValue191 = "no errors";
    expect(noErrorText191).toContain(expectedValue191);

    this.table2WorkerCreatedId = await commandBuilderRetrievingDataPage.extractWorkerCreatedId();
    console.log(`Extracted Worker Created ID: ${this.table2WorkerCreatedId}`);

    expect(this.table2WorkerCreatedId).toBe(this.BotForDataTablePostJsonRunId);
    console.log('Run ID and Worker Created ID match successfully.');
});

Then("the User can validate the ID Address and Name", async function () {
    await commandBuilderRetrievingDataPage.IdValidationRaw1();
    await commandBuilderRetrievingDataPage.AddressValidationRaw1();
    await commandBuilderRetrievingDataPage.NameValidationRaw1();

});

When("the User clicks on the ArrowButton of My Workspace", async function () {
    commandBuilderRetrievingDataPage = new CommandBuilderRetrievingDataPage(fixture.page);
    await commandBuilderRetrievingDataPage.clickOnMyWorkspaceArrowButton();

});