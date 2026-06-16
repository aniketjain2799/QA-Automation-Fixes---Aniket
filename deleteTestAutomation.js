const { chromium } = require("playwright");

const BASE_URL = "https://stage.readiplatform.com/#";
const EMAIL = "achal24@mailinator.com";
const PASSWORD = "Achal@1234";

const userInput = "input[id='Email']";
const passwordInput = "input[id='Password']";
const loginBtn = "input[type='submit']";
const remindMe = "input[id='mfaSetupIgnore']";
const environmentsTab = "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']";
const confirmDeleteBtn = "button[id='alertify-ok']";

async function deleteTestAutomationEnvironments(page) {
  let environments = await page.$$("//a[contains(text(), 'TestAutomation')]");

  while (environments.length > 0) {
    for (const env of environments) {
      try {
        const envName = await env.textContent();
        console.log(`Deleting environment: ${envName}`);

        await env.click({ button: "right" });

        await page.click("//a[text()='Delete']");

        await page.click(confirmDeleteBtn);

        await page.waitForTimeout(5000);
      } catch (error) {
        console.error(`Error deleting environment: ${error.message}`);
      }
    }

    environments = await page.$$("//a[contains(text(), 'TestAutomation')]");
  }
  console.log("All TestAutomation environments deleted.");
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(BASE_URL);

  await page.fill(userInput, EMAIL);
  await page.fill(passwordInput, PASSWORD);
  await page.click(loginBtn);

  await page.waitForTimeout(7000);
  await page.click(remindMe);

  await page.waitForTimeout(5000);
  await page.click(environmentsTab);

  await page.waitForTimeout(30000);

  await deleteTestAutomationEnvironments(page);

  await browser.close();
})();

// node deleteTestAutomation.js
