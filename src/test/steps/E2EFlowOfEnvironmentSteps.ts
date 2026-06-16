import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import E2EFlowOfEnvironmentPage from "../../pages/E2EFlowOfEnvironmentPage";
import * as fs from "fs";
import * as path from "path";

let e2eFlowOfEnvironmentPage: E2EFlowOfEnvironmentPage;

setDefaultTimeout(1200 * 1000);


When("Right click on the newly created Environment's root folder", async function () {
  e2eFlowOfEnvironmentPage = new E2EFlowOfEnvironmentPage(fixture.page);
  await e2eFlowOfEnvironmentPage.rightClickOnRoot();
});


When("User click on the New Bot", async function () {
  await e2eFlowOfEnvironmentPage.clickOnNewBot();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User click on the New BotI2", async function () {
  e2eFlowOfEnvironmentPage = new E2EFlowOfEnvironmentPage(fixture.page);
  await e2eFlowOfEnvironmentPage.clickOnNewBotI1();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User click on the Queue", async function () {
  await e2eFlowOfEnvironmentPage.clickOnQueue();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("Enable the Run Button by on the toggle  button the check the three Checkboxes", async function () {
  e2eFlowOfEnvironmentPage = new E2EFlowOfEnvironmentPage(fixture.page);
  await e2eFlowOfEnvironmentPage.clickOnEnableRubButton();
  await e2eFlowOfEnvironmentPage.clickOnBot2BotCheckBox();
  await e2eFlowOfEnvironmentPage.clickOnInteractiveCheckBox();
  await e2eFlowOfEnvironmentPage.clickOnRestTCheckBox();

});

function readJsonFile(filePath: string): any {
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

When("Sent the data from JSON file to New Bot Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await new Promise(resolve => setTimeout(resolve, 5000));
  await e2eFlowOfEnvironmentPage.fillBotPropertiesSection(jsonData[3]);
  await new Promise(resolve => setTimeout(resolve, 5000));
});

When("User click on the Service Bot", async function () {
  e2eFlowOfEnvironmentPage = new E2EFlowOfEnvironmentPage(fixture.page);
  await e2eFlowOfEnvironmentPage.clickOnServiceBot();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("Sent the data from JSON file to Service Bot Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await new Promise(resolve => setTimeout(resolve, 3000));
  await e2eFlowOfEnvironmentPage.clearInput("viewlinesCompleteBox");
  await new Promise(resolve => setTimeout(resolve, 3000));
  await e2eFlowOfEnvironmentPage.fillServiceBotPropertiesSection(jsonData[4]);
  await new Promise(resolve => setTimeout(resolve, 3000));
});

When("Sent the Data from JSON file to Service Bot Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await new Promise(resolve => setTimeout(resolve, 3000));
  await e2eFlowOfEnvironmentPage.clearInput("viewlinesCompleteBox");
  await new Promise(resolve => setTimeout(resolve, 3000));
  await e2eFlowOfEnvironmentPage.processQueueData();
  await new Promise(resolve => setTimeout(resolve, 3000));
});

Then("The data should store in the monaco editor", async function () {
  const jobFinishedText = await e2eFlowOfEnvironmentPage.getJobFinishedText(600000);
  const expectedValue = "Job finished";
  expect(jobFinishedText).toContain(expectedValue);

  const noErrorText = await e2eFlowOfEnvironmentPage.getNoErrorText(600000);
  console.log(noErrorText);
  const expectedValue1 = "no errors";
  expect(noErrorText).toContain(expectedValue1);

});

Then("New Bot script should be executed Successfully", async function () {
  const jobFinishedText = await e2eFlowOfEnvironmentPage.getJobFinishedText(600000);
  const expectedValue = "Job finished";
  expect(jobFinishedText).toContain(expectedValue);

  const noErrorText = await e2eFlowOfEnvironmentPage.getNoErrorText(600000);
  console.log(noErrorText);
  const expectedValue1 = "no errors";
  expect(noErrorText).toContain(expectedValue1);

});

When("click Show execution log", async function () {
  await e2eFlowOfEnvironmentPage.clickOnShowExecutionLog();
});

Then("success messeage of Service bot should be visible", async function () {
  const jobFinishedText = await e2eFlowOfEnvironmentPage.getJobFinishedText(600000);
  const expectedValue = "Job finished";
  expect(jobFinishedText).toContain(expectedValue);

  const noErrorText = await e2eFlowOfEnvironmentPage.getNoErrorText(600000);
  console.log(noErrorText);
  const expectedValue1 = "no errors";
  expect(noErrorText).toContain(expectedValue1);

});


When("click on Store Table", async function () {
  await e2eFlowOfEnvironmentPage.clickOnStoreTable();
});

Then("User can validate the total 11 entries in the table as well as the Phone number", async function () {
  await e2eFlowOfEnvironmentPage.validateTableEntriesAndPhoneNumber();

});