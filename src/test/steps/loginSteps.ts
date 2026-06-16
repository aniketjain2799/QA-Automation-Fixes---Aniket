import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import { getCredentials } from "../../helper/credentialsManager";
import * as data from "../../helper/util/test-data/TestData.json";
import CryptoJS from "crypto-js";

let loginPage: LoginPage;

setDefaultTimeout(1200 * 1000 * 2);

Given("User navigates to the application", async function () {
    await fixture.page.goto(process.env.BASEURL, { timeout: 120000 });
    fixture.logger.info("Navigated to the application");
});

Given("User enter the username as {string}", async function (credentialType) {
    loginPage = new LoginPage(fixture.page);
    const secretKey = process.env.SECRET_KEY || '';
    const { username } = getCredentials(credentialType, secretKey);
    await loginPage.enterUserName(username);
});

Given("User enter the password as {string}", async function (credentialType) {
    const secretKey = process.env.SECRET_KEY || '';
    const { password } = getCredentials(credentialType, secretKey);
    await loginPage.enterPassword(password);
});


When("User click on the login button", async function () {
    await loginPage.clickLoginButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds");
    await fixture.page.waitForTimeout(2000);
});

Then("Login should be {string}", async function (result) {
    if (result === "success") {
        await loginPage.clickRemindMeButton();
        await loginPage.waitForSomeElement();
        const user = await loginPage.getUserName();
        await expect(user).toBeVisible();
        const userName = await user.textContent();
        console.log("Username: " + userName);
        fixture.logger.info("Username: " + userName);
    } else if (result === "fail") {
        const failureMessage = await loginPage.getErrorMessage();
        await expect(failureMessage).toBeVisible();
    } else {
        throw new Error(`Invalid result: ${result}`);
    }
});

Given("User logs in with Microsoft credentials as {string}", async function (credentialType) {
    if (credentialType.toUpperCase() === "MICROSOFT") {
        loginPage = new LoginPage(fixture.page);
        const secretKey = process.env.SECRET_KEY || '';
        console.log(`Credential Type: ${credentialType}`); // Debugging
        const { username, password } = getCredentials(credentialType, secretKey);
        await loginPage.microsoftLogin(username, password);
    } else {
        console.log("Skipping login with Microsoft for invalid user.");
    }
});


Given("User logs in with BOTPRBAC credentials", async function () {
    loginPage = new LoginPage(fixture.page);
    const secretKey = process.env.SECRET_KEY || '';
    const { username, password } = getCredentials("BOTPRBAC", secretKey);
    await loginPage.loginUser(username, password);
});

Given("User logs in to Bot Studio with DEVCU credentials", async function () {
    loginPage = new LoginPage(fixture.page);
    await fixture.page.goto("https://stage.readiplatform.com/", { timeout: 120000 });
    const encryptedUsername = "U2FsdGVkX1/BU93d4UUZ1pUMP+up3nL1SDFg2MrYXflJHcmw65A3khjERgvTdjGA";
    const encryptedPassword = "U2FsdGVkX1+R6K1wg0ydzHtfhv4R+5ga0kRWo1EqYfM=";
    const secretKey = process.env.SECRET_KEY || "";
    const username = CryptoJS.AES.decrypt(encryptedUsername, secretKey).toString(CryptoJS.enc.Utf8);
    const password = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(CryptoJS.enc.Utf8);
    await loginPage.loginUser(username, password);
    await loginPage.clickRemindMeButton();
    await loginPage.waitForSomeElement();
});



  
  