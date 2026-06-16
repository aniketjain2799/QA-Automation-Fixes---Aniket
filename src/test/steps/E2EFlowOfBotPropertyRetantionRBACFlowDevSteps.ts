import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import BotPropertyRBACPage from "../../pages/E2EFlowOfBotPropertyRetantionRBACFlowDevPage";



let botPropertyRBACPage: BotPropertyRBACPage;

setDefaultTimeout(1200 * 1000 * 2);

When("User clicks on Hamburger Menu", async function () {
    await new Promise(resolve => setTimeout(resolve, 40000));
    botPropertyRBACPage = new BotPropertyRBACPage(fixture.page);
    await botPropertyRBACPage.clickOnHumburgerMenu();
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Then("Bot Properties Environment should be visible and clickable to User", async function () {
    await botPropertyRBACPage.clickOnBotPropertiesEnv();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await botPropertyRBACPage.clickOnBotPropertiesMainPage();
});

Then("Bot Properties Environment should be visible and clickable to User5", async function () {
    await botPropertyRBACPage.clickOnBotPropertiesEnv();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await botPropertyRBACPage.clickOnBotPropertiesMainPage4();
});

Then("Bot Properties Environment should be visible and clickable to User4", async function () {
    await botPropertyRBACPage.clickOnBotPropertiesEnv();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await botPropertyRBACPage.clickOnBotPropertiesMainPage4();
});

Then("RBQueueMessage Environment should be visible and clickable to User", async function () {
    botPropertyRBACPage = new BotPropertyRBACPage(fixture.page);
    await botPropertyRBACPage.clickOnRBQueueMessage();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await botPropertyRBACPage.clickOnRBQueueMessageMain();
});

Then("RBQueueMessage Environment should be visible and clickable to User4", async function () {
    botPropertyRBACPage = new BotPropertyRBACPage(fixture.page);
    await botPropertyRBACPage.clickOnRBQueueMessage();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await botPropertyRBACPage.clickOnRBQueueMessageMain4();
});
