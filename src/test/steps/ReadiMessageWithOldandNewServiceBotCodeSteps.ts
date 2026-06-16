import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ReadiMessageServiceBotPage from "../../pages/ReadiMessageWithOldandNewServiceBotCodePage";
import * as data from "../../helper/util/test-data/TestData.json";



let readiMessageServiceBotPage: ReadiMessageServiceBotPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the RBQueueMessage Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRBQueueMessageFolder();

});

When("the User clicks on the RBQueueMessageProxy Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRBQueueMessageProxyFolder();

});

When("the User clicks on the RBQueueMessageNewSecondCode Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRbQueueMessage_NewCodeSecond();

});

When("the User clicks on the RBQueueMessageOldCode Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRbQueueMessage_OldCodeFirst();

});

When("the User can click on the NewSecond Bot", async function () {
    await readiMessageServiceBotPage.clickOnNewSecondBot();

});

When("the User click on the NewSecond QueueS", async function () {
    await readiMessageServiceBotPage.clickOnNewSecondQueue();

});

When("the User clicks on the RBQueueMessageNewFirstCode Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRbQueueMessage_NewCodeFirst();

});

When("the User clicks on the RBQueueMessageOldCodeSecond Folder", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnRbQueueMessage_OldCodeSecond();

});

When("the User click on the NewFirst Queue", async function () {
    await readiMessageServiceBotPage.clickOnQueue();

});


Then("the User can click on the RbQueueOld Bot", async function () {
    await readiMessageServiceBotPage.clickOnBot_RbQueueMessage();

});

Then("the User can click on the NewFirst Bot", async function () {
    await readiMessageServiceBotPage.clickOnBot();

});

When("the User click on the Queue_RbQueueMessage", async function () {
    await readiMessageServiceBotPage.clickOnQueue_RbQueueMessage();

});

Then("the User can click on the RbQueueOld Bot Second", async function () {
    await readiMessageServiceBotPage.clickOnBot_RbQueueMessageS();

});

When("the User click on the Queue_RbQueueMessage Second", async function () {
    await readiMessageServiceBotPage.clickOnQueue_RbQueueMessageS();

});

When("the User click on the Items tab", async function () {
    await readiMessageServiceBotPage.clickOnItems();

});

Then("the User can validate the total raw count should be 5", async function () {
    await readiMessageServiceBotPage.ValidateTotalRowsCountItems();

});

When("the User click on the Service Bot", async function () {
    await readiMessageServiceBotPage.clickOnServiceBot();

});

When("the User click on the Raw Data0", async function () {
    await readiMessageServiceBotPage.clickOnRawData0();

});

When("the User click on DashBoard Section", async function () {
    readiMessageServiceBotPage = new ReadiMessageServiceBotPage(fixture.page);
    await readiMessageServiceBotPage.clickOnDashboard();

});

When("the User click on Properties Section", async function () {
    await readiMessageServiceBotPage.clickOnProperties();
    await readiMessageServiceBotPage.clickOnProperties();

});


Then("the User can validate the total raw count should be 0", async function () {
    await readiMessageServiceBotPage.ValidateTotalRowsCountItems2();

});

