import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import DelegatedBotExecutingActionBotPage from "../../pages/E2EDelegatedBotExecutingActionsPage";



let delegatedBotExecutingActionBotPage: DelegatedBotExecutingActionBotPage;

setDefaultTimeout(1200 * 1000 * 2);

Then("the DataTable8080 Environment should be visible and clickable to the User", async function () {
    delegatedBotExecutingActionBotPage = new DelegatedBotExecutingActionBotPage(fixture.page);
    await delegatedBotExecutingActionBotPage.clickOnDataTable08();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

When("User clicks on the Data Table tab", async function () {
    await delegatedBotExecutingActionBotPage.clickOnDataTable();
});

When("clicks on the first name row", async function () {
    await delegatedBotExecutingActionBotPage.clickOnVance();
});

When("clicks on the DT icon", async function () {
    await delegatedBotExecutingActionBotPage.clickOnDT();
});

When("clicks on the Run button", async function () {
    await delegatedBotExecutingActionBotPage.clickOnNewRunButton();
});

Then("the User can validate that the script executed successfully by verifying the log and success message", async function () {
    await delegatedBotExecutingActionBotPage.validateRunningStatus();
    await delegatedBotExecutingActionBotPage.validateSuccessStatus();
    await delegatedBotExecutingActionBotPage.validateScriptSuccess();

});

Then("the New Bot8080 Environment should be visible and clickable to the User", async function () {
    await delegatedBotExecutingActionBotPage.clickOnNewBot8080();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("the New Bot8080 Environment should be visible and clickable to the User4", async function () {
    delegatedBotExecutingActionBotPage = new DelegatedBotExecutingActionBotPage(fixture.page);
    await delegatedBotExecutingActionBotPage.clickOnNewBot80804();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("the New Bot0809 Environment should be visible and clickable to the User", async function () {
    delegatedBotExecutingActionBotPage = new DelegatedBotExecutingActionBotPage(fixture.page);
    await delegatedBotExecutingActionBotPage.clickOnNewBot0809();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("the New Bot0809 Environment should be visible and clickable to the User2", async function () {
    delegatedBotExecutingActionBotPage = new DelegatedBotExecutingActionBotPage(fixture.page);
    await delegatedBotExecutingActionBotPage.clickOnNewBot20809();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

When("User clicks on the Raw Data0 tab", async function () {
    await delegatedBotExecutingActionBotPage.clickOnRawData0();
});

When("clicks on the first name row of the Bot", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName1924();
});

When("clicks on the first name row of the Bot4", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName2280();
});

When("clicks on the first id row of the Bot", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName256();
});

When("clicks on the first id row of the Bot9", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName2560();
});

When("clicks on the first id row of the Bot1", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName2561();
});

When("clicks on the first id row of the Bot4", async function () {
    await delegatedBotExecutingActionBotPage.clickOnName1164();
});

When("clicks on the NB icon", async function () {
    await delegatedBotExecutingActionBotPage.clickOnNB();
});

When("clicks on the Run ok Button", async function () {
    await delegatedBotExecutingActionBotPage.clickOnOkButton();
});

Then("the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080", async function () {
    await delegatedBotExecutingActionBotPage.validateRunningStatus();
    await delegatedBotExecutingActionBotPage.validateSuccessStatus();
    await delegatedBotExecutingActionBotPage.validateScriptSuccess();

});

