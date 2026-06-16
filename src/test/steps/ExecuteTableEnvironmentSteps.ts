import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ExecuteTableEnvironmentPage from "../../pages/ExecuteTableEnvironmentPage";
import * as fs from "fs";
import * as path from "path";

let executeTableEnvironmentPage: ExecuteTableEnvironmentPage;

setDefaultTimeout(1200 * 1000 * 2);

When("User click on the second existing Environment folder", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.waitForEnvironmentsElement();
  await executeTableEnvironmentPage.clickOnEnvironments();
  await executeTableEnvironmentPage.clickExistingEnvironment2();
});

When("Right click on the root folder", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.rightClickOnRoot();
});

When("User click on the Data table", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnDataTable();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

function readJsonFile(filePath: string): any {
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

When("Sent the data from JSON file to Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection(jsonData[1]);
});

When("Sent the data from JSON file to Properties Section1", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection11();
});

When("Sent the data from JSON file to Properties Section2", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection12();
});

When("Sent the data from JSON file to Properties Section3", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection13();
});

When("Sent the data from JSON file to Properties Section4", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection14();
});

When("Sent the data from JSON file to Properties Section5", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection15();
});

When("Sent the data from JSON file to Properties Section6", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection16();
});

When("Sent the data from JSON file to Properties Section7", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection17();
});

When("Sent the data from JSON file to Properties Section8", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection18();
});

When("Sent the data from JSON file to Properties Section9", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection19();
});

When("Sent the data from JSON file to Properties Section10", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection20();
});

When("Sent the data from JSON file to Properties Section12", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection22();
});

When("Sent the data from JSON file to Properties Section31", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);

  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );

  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");

  const { uniqueFirstName, staticId } = await executeTableEnvironmentPage.fillPropertiesSectionWithRandomFirstName();

  this.dynamicFirstName = uniqueFirstName;
  this.dynamicLinkId = staticId.toLowerCase();
});

When("the user updates the country field with a random country name", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);

  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );

  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  const updatedCountry = await executeTableEnvironmentPage.updateUserCountryDynamically();
  this.dynamicCountry = updatedCountry;
});

When("Sent the data from JSON file to Properties Section14", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSection24();
});

When("click on Run button", async function () {
  // await executeTableEnvironmentPage.clickScriptDescriptionName();
  await executeTableEnvironmentPage.clickOnRunButton();
  await executeTableEnvironmentPage.clickOnYesButton();
});

When("clicks On Run button", async function () {
  // await executeTableEnvironmentPage.clickScriptDescriptionName();
  await executeTableEnvironmentPage.clickOnRunButton();
  await executeTableEnvironmentPage.clickOnYesButton();
});

When("Click On Run Button", async function () {
  // await executeTableEnvironmentPage.clickScriptDescriptionName();
  await executeTableEnvironmentPage.clickOnRunButton();
  await executeTableEnvironmentPage.clickOnYesButton();
});

Then("Datatable script should be executed Successfully", async function () {
  const jobFinishedText = await executeTableEnvironmentPage.getJobFinishedText(140000);
  const expectedValue = "Job finished";
  expect(jobFinishedText).toContain(expectedValue);

  const noErrorText = await executeTableEnvironmentPage.getNoErrorText(140000);
  console.log(noErrorText);
  const expectedValue1 = "no errors";
  expect(noErrorText).toContain(expectedValue1);
});

When("Sent the data from JSON file To Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSectionDataTableTest(jsonData[6]);
});

When("User click on The New Bot", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotOwner();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User click on The New Bot Rename", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotOwner();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("open NewFolder2", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.openNewFolder2();
});

When("open NewFolder24", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.openNewFolder24();
});

When("check and delete existing OwnerNewBot if present", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.checkAndDeleteExistingBot();
});

When("User click on The New Bot Rename Dev", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotDeveloper();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User click on The New Bot Rename Action", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotAction();
  await new Promise(resolve => setTimeout(resolve, 6000));
});

When("User click on The New Bot Rename Power", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotPower();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User click on The New Bot Rename Reviewer", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotReviewer();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When("User clicks On The New Bot", async function () {
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clickOnNewBotTW();
  await new Promise(resolve => setTimeout(resolve, 2000));
});



When("Sent the data from JSON file TO Properties Section", async function () {
  const jsonData = readJsonFile(
    path.join(__dirname, "../../helper/util/test-data/TestData.json")
  );
  executeTableEnvironmentPage = new ExecuteTableEnvironmentPage(fixture.page);
  await executeTableEnvironmentPage.clearInput("viewlinesCompleteBox");
  await executeTableEnvironmentPage.fillPropertiesSectionNewBotTest(jsonData[7]);
});

When("user clicks on the PUBLISH text", async function () {
  await executeTableEnvironmentPage.clickOnPublish();
  await new Promise(resolve => setTimeout(resolve, 6000));
});

Then("NewBot script should be executed Successfully", async function () {
  const jobFinishedText = await executeTableEnvironmentPage.getJobFinishedText(140000);
  const expectedValue = "Job finished";
  expect(jobFinishedText).toContain(expectedValue);

  const noErrorText = await executeTableEnvironmentPage.getNoErrorText(140000);
  console.log(noErrorText);
  const expectedValue1 = "no errors";
  expect(noErrorText).toContain(expectedValue1);
});
