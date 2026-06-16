import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CreateEnvironmentPage from "../../pages/CreateEnvironmentPage";
import * as data from "../../helper/util/test-data/TestData.json";


let createEnvironmentPage: CreateEnvironmentPage;
let environmentName: string;

setDefaultTimeout(1200 * 1000 * 2);

Given("User Already Logged In.", async function () {
  createEnvironmentPage = new CreateEnvironmentPage(fixture.page);
  await createEnvironmentPage.navigateToHomePageAndLogin();
});

Then("User Logged In using Admin Credentials.", async function () {
  createEnvironmentPage = new CreateEnvironmentPage(fixture.page);
  await createEnvironmentPage.navigateToHomePageAndLogin();
});

Given("User is on Home Page", async function () {
  await new Promise(resolve => setTimeout(resolve, 8000));
  const ExploreHeading = await createEnvironmentPage.getExploreHeading();
  await expect(ExploreHeading).toBeVisible({ timeout: 200000 });
});

When("User right click on the Environments button", async function () {
  await createEnvironmentPage.waitForElement();
  await createEnvironmentPage.rightClickOnEnvironments();
});

When("click on New button", async function () {
  await createEnvironmentPage.clickNewButton();
});

When("click on succesor Environment botton", async function () {
  await createEnvironmentPage.clickEnvironmentButton();
});

When("Enter the {string} Name", async function (string) {
  const dynamicValue = Math.floor(10000 + Math.random() * 90000).toString();
  this.environmentName = `${data[0].EnvironmentName}${dynamicValue}`;
  console.log("Generated Environment Name:", this.environmentName);
  const beforeValue = await fixture.page.locator(createEnvironmentPage.Elements.txtEnvironmentName).inputValue();
  await createEnvironmentPage.enterEnvironmentName(this.environmentName);
  const afterValue = await fixture.page.locator(createEnvironmentPage.Elements.txtEnvironmentName).inputValue();

  await new Promise(resolve => setTimeout(resolve, 2000));
  const enteredValue = await fixture.page.locator(createEnvironmentPage.Elements.txtEnvironmentName).inputValue();
});


Then("User click on Create button and New Environment got created", async function () {
  const environmentName = this.environmentName;
  console.log("Environment Name:", environmentName);
  await createEnvironmentPage.clickCreateNewEnvironmentButton();
  await createEnvironmentPage.clickEnvironmentLink(environmentName);

});

