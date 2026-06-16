import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import QueueStatusVerificationPage from "../../pages/E2EFlowOfQueueStatusVerificationPage";


let queueStatusVerificationPage: QueueStatusVerificationPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the QueueStatusVerification Folder", async function () {
    queueStatusVerificationPage = new QueueStatusVerificationPage(fixture.page);
    await queueStatusVerificationPage.clickOnQueueStatusVerificationFolder();

});

When("the User clicks on the LoadTestBotQueueTable Folder", async function () {
    await queueStatusVerificationPage.clickOnLoadTestBotQueueTableFolder();

});

When("the User clicks on the LoadTestBotQueueTable Folder2", async function () {
    await queueStatusVerificationPage.clickOnLoadTestBotQueueTableFolder2();

});

When("the User clicks on the LoadTestBotQueueTable Folder3", async function () {
    await queueStatusVerificationPage.clickOnLoadTestBotQueueTableFolder3();

});

When("User Click on Bot", async function () {
    await queueStatusVerificationPage.clickOnBot();

});

Then("Bot script Should Be executed Successfully", async function () {

    const ScriptFailedText = await queueStatusVerificationPage.getScriptFailedText(120000);
    console.log(ScriptFailedText);
    const expectedValue12 = "Script failed";
    expect(ScriptFailedText).toContain(expectedValue12);

    const QueueDisabledText = await queueStatusVerificationPage.getQueueDisabledText(120000);
    console.log(QueueDisabledText);
    const expectedValue13 = "'Queue' is currently disabled.";
    expect(QueueDisabledText).toContain(expectedValue13);

    const jobFinishedText = await queueStatusVerificationPage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

});

Then("Bot script Should Be executed Successfully2", async function () {

    const ScriptFailedText1 = await queueStatusVerificationPage.getScriptFailedText(120000);
    console.log(ScriptFailedText1);
    const expectedValue121 = "Script failed";
    expect(ScriptFailedText1).toContain(expectedValue121);

    const QueueDisabledText1 = await queueStatusVerificationPage.getQueueDisabledText2(120000);
    console.log(QueueDisabledText1);
    const expectedValue131 = "'Queue' is currently disabled for Send";
    expect(QueueDisabledText1).toContain(expectedValue131);

    const jobFinishedText1 = await queueStatusVerificationPage.getJobFinishedText(120000);
    const expectedValue1 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue1);

});

When("User Click On Bot", async function () {
    await queueStatusVerificationPage.clickOnBot();

});

When("User click on Queue", async function () {
    await queueStatusVerificationPage.clickOnQueue();

});

When("clicks on the Items Tab", async function () {
    await queueStatusVerificationPage.clickOnItems();

});

Then("the User can validate the total raws in Items Tab", async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await queueStatusVerificationPage.validateTotalItems();

});

Then("the User can validate the total raws in Items Tab1", async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await queueStatusVerificationPage.validateTotalItems1();

});

When("the user click on Overview Tab", async function () {
    await queueStatusVerificationPage.clickOnOverview();

});


When("click on Queue status dropdown", async function () {
    await queueStatusVerificationPage.clickOnQueueStatusDropdown();

});

When("select Active queue status", async function () {
    await queueStatusVerificationPage.clickOnActive();

});

When("the user click on table", async function () {
    await queueStatusVerificationPage.clickOnTable();

});

Then("the User can validate the total raws in Table Items Tab", async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await queueStatusVerificationPage.validateTotalItems2();

});

Then("select queue status DenyDequeingItemsFromQueue", async function () {
    await queueStatusVerificationPage.clickOnDenyDequeingItemsFromQueue();

});