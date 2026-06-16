import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LogViewVerificationPage from "../../pages/E2EFlowOfLogViewVerificationPages";


let logViewVerificationPage: LogViewVerificationPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Log View Verification folder", async function () {
    logViewVerificationPage = new LogViewVerificationPage(fixture.page);
    await logViewVerificationPage.clickOnLogViewVerification();

});

When("User click on BotSuccess", async function () {
    await logViewVerificationPage.clickOnBotSuccess();

});

Then("BotSuccess script Should Be executed Successfully", async function () {
    logViewVerificationPage = new LogViewVerificationPage(fixture.page);
    const jobFinishedText = await logViewVerificationPage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await logViewVerificationPage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

Then("Truncating script Should Be executed Successfully", async function () {
    logViewVerificationPage = new LogViewVerificationPage(fixture.page);
    const truncatingLocator = await logViewVerificationPage.getTruncatingText(420000);
    const expectedValue314 = "Truncating old data completed.";
    expect(truncatingLocator).toContain(expectedValue314);
});

Then("BotSuccess script Should Be executed Successfully11", async function () {
    logViewVerificationPage = new LogViewVerificationPage(fixture.page);
    const jobFinishedText = await logViewVerificationPage.getJobFinishedText(420000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await logViewVerificationPage.getNoErrorText(420000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User clicks on the logView", async function () {
    await logViewVerificationPage.clickOnLogView();

});

Then("the User can validate the Execution mode and Status", async function () {
    logViewVerificationPage = new LogViewVerificationPage(fixture.page);
    await logViewVerificationPage.validateExecutionModeTextRaw1();
    await logViewVerificationPage.validateStatusTextRaw1();

});

When("User click on BotFailure", async function () {
    await logViewVerificationPage.clickOnBotFailure();

});

Then("BotFailure script Should Be Failed", async function () {

    const jobFinishedText1 = await logViewVerificationPage.getJobFinishedText(120000);
    const expectedValue1 = "Job finished";
    expect(jobFinishedText1).toContain(expectedValue1);

    const scriptFailedTextText1 = await logViewVerificationPage.getScriptFailedText(120000);
    const expectedValue17 = "Script failed";
    expect(scriptFailedTextText1).toContain(expectedValue17);
});

Then("the User can validate the Execution Mode and Status", async function () {
    await logViewVerificationPage.validateExecutionModeTextRaw1();
    await logViewVerificationPage.validateStatusFailTextRaw1();

});

When("User click on Table Success", async function () {
    await logViewVerificationPage.clickOnTableSuccess();

});

When("User click on Table Failure", async function () {
    await logViewVerificationPage.clickOnTablefailure();

});

Then("Table Success script Should Be executed Successfully", async function () {

    const jobFinishedText2 = await logViewVerificationPage.getJobFinishedText(120000);
    const expectedValue2 = "Job finished";
    expect(jobFinishedText2).toContain(expectedValue2);

    const noErrorText3 = await logViewVerificationPage.getNoErrorText(120000);
    console.log(noErrorText3);
    const expectedValue13 = "no errors";
    expect(noErrorText3).toContain(expectedValue13);
});

When("the User clicks on Table Success Tab", async function () {
    await logViewVerificationPage.clickOnTableSuccessTab();

});

Then("Table Failure script Should Be Failed", async function () {

    const jobFinishedText15 = await logViewVerificationPage.getJobFinishedText(120000);
    const expectedValue15 = "Job finished";
    expect(jobFinishedText15).toContain(expectedValue15);

    const scriptFailedTextText15 = await logViewVerificationPage.getScriptFailedText(120000);
    const expectedValue175 = "Script failed";
    expect(scriptFailedTextText15).toContain(expectedValue175);
});