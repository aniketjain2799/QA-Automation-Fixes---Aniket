import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPageCU from "../../pages/1ConnectorUILoginPage";
import { getCredentials } from "../../helper/credentialsManager";

let loginPageCU: LoginPageCU;

setDefaultTimeout(1200 * 1000 * 2);

const waitBriefly = async () => {
  await fixture.page.waitForLoadState();
  await fixture.page.waitForTimeout(2000);
};

Given("User navigates to the CU application", async function () {
  await fixture.page.goto(process.env.BASEURL, { timeout: 120000 });
  fixture.logger.info("Navigated to CU application");
});

Given("User enters CU username as {string}", async function (type) {
  loginPageCU = new LoginPageCU(fixture.page);
  const { username } = getCredentials(type, process.env.SECRET_KEY || '');
  await loginPageCU.fillUsername(username);
});

Given("User enters CU password as {string}", async function (type) {
  const { password } = getCredentials(type, process.env.SECRET_KEY || '');
  await loginPageCU.fillPassword(password);
});

When("User clicks on the CU Continue button", async function () {
  await loginPageCU.clickContinue();
  await waitBriefly();
});

When("User clicks on the CU Login button", async function () {
  await loginPageCU.clickLogin();
  await waitBriefly();
});

Then("CU login result should be {string}", async function (result) {
  if (result === "success") {
    await loginPageCU.chooseEnvironment();
    const appSection = await loginPageCU.isLoginSuccessful();
    await expect(appSection).toBeVisible();
    const text = await appSection.textContent();
    fixture.logger.info(`Login success. Page contains: ${text}`);
  } else if (result === "fail") {
    const error = await loginPageCU.getErrorMessage();
    await expect(error).toBeVisible();
    fixture.logger.info("Login failed as expected.");
  } else {
    throw new Error(`Unknown login result: ${result}`);
  }
});
