import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public Elements = {
    userInput: "input[id='Email']",
    passwordInput: "input[id='Password']",
    loginBtn: "input[type='submit']",
    errorMessage: "(//div[@class='validation-summary-errors text-danger'])[1]",
    userName: "span[class='displayname']",
    remindMe: "input[id='mfaSetupIgnore']",
    microsoftLoginBtn: "//span[normalize-space()='Sign in with Microsoft SSO']",
    microsoftEmailInput: "//input[@name='loginfmt']",
    microsoftNextBtn: "//input[@value='Next']",
    microsoftPasswordInput: "//input[@name='passwd']",
    microsoftSignInBtn: "//button[@type='submit']",
    noButton: "//button[normalize-space()='No']",
    verifyEmailHeader: "//h1[normalize-space()='Verify your email']",
    otherWaysToSignIn: "//span[contains(text(),'Other ways to sign in')]",
    useYourPasswordOption: "//span[normalize-space()='Use your password']",
    passwordEntry: "//input[@id='passwordEntry']",
    nextButton: "//button[normalize-space()='Next']",
  };

  async navigateToLoginPage() {
    await this.base.goto("");
    await expect(this.page).toHaveTitle("Sign in - Readibots");
  }
  async enterUserName(user: string) {
    await this.page.locator(this.Elements.userInput).fill(user);
  }
  async enterPassword(password: string) {
    // console.log("DEBUG - Entering password:", password);
    await this.page.locator(this.Elements.passwordInput).fill(password);
  }

  async clickLoginButton() {
    await this.base.waitAndClick(this.Elements.loginBtn);
  }

  async getErrorMessage() {
    await this.page.waitForSelector(this.Elements.errorMessage, { timeout: 45000 });
    return this.page.locator(this.Elements.errorMessage);
  }

  async loginUser(user: string, password: string) {
    await this.enterUserName(user);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getUserName() {
    await this.page.waitForSelector(this.Elements.userName, { timeout: 45000 });
    return this.page.locator(this.Elements.userName);
  }

  async clickRemindMeButton() {
    await this.page.waitForSelector(this.Elements.remindMe, { timeout: 45000 });
    await this.base.waitAndClick(this.Elements.remindMe);
  }

  async waitForSomeElement() {
    await this.page.waitForSelector("span[class='displayname']", {
      state: "visible",
    });
  }


  async openNewTabAndSignIn(username: string, password: string): Promise<Page> {

    const newPage = await this.page.context().newPage();
    // await newPage.setViewportSize({ width: 1355, height: 629 });
    await newPage.goto(process.env.BASEURL);
    await newPage.fill("input[id='Email']", username);
    await newPage.fill("input[id='Password']", password);
    await this.page.waitForTimeout(2000);
    await newPage.click("input[type='submit']");
    await this.page.waitForTimeout(5000);
    await newPage.waitForLoadState();
    return newPage;
  }

  async clickMicrosoftLoginButton() {
    await this.page.click(this.Elements.microsoftLoginBtn);
  }

  async enterMicrosoftEmail(email: string) {
    await this.page.fill(this.Elements.microsoftEmailInput, email);
  }

  async clickMicrosoftNextButton() {
    await this.page.click(this.Elements.microsoftNextBtn);
  }

  async enterMicrosoftPassword(password: string) {
    await this.page.fill(this.Elements.microsoftPasswordInput, password);
  }

  async clickMicrosoftSignInButton() {
    await this.page.click(this.Elements.microsoftSignInBtn);
  }

  async clickMicrosoftNoButton() {
    await this.page.click(this.Elements.noButton);
  }


  // async microsoftLogin(email: string, password: string) {
  //   await this.clickMicrosoftLoginButton();
  //   await this.enterMicrosoftEmail(email);
  //   await this.clickMicrosoftNextButton();
  //   await this.enterMicrosoftPassword(password);
  //   await this.clickMicrosoftSignInButton();
  //   await this.clickMicrosoftNoButton();
  // }

  // async microsoftLogin(email: string, password: string) {
  //   await this.clickMicrosoftLoginButton();
  //   await this.enterMicrosoftEmail(email);
  //   await this.clickMicrosoftNextButton();
  //   await this.page.waitForTimeout(5000);
  //   const isPasswordFieldVisible = await this.page.locator(this.Elements.microsoftPasswordInput).isVisible();
  //   await this.page.waitForTimeout(1000);
  //   if (!isPasswordFieldVisible) {
  //     const switchToPasswordSelector = "//span[@id='idA_PWD_SwitchToPassword']";
  //     await this.page.locator(switchToPasswordSelector).click();
  //   }
  //   await this.enterMicrosoftPassword(password);
  //   await this.clickMicrosoftSignInButton();
  //   await this.clickMicrosoftNoButton();
  // }

  async microsoftLogin(email: string, password: string) {
    await this.clickMicrosoftLoginButton();
    await this.enterMicrosoftEmail(email);
    await this.clickMicrosoftNextButton();

    await this.page.waitForTimeout(6000);

    // Handle "Verify your email" screen — attempt "Other ways to sign in" with short timeout.
    // Some accounts (e.g. achal.dynamic@outlook.com) may not show that button and transition
    // directly to the password page — in that case we catch and continue.
    const verifyEmailHeader = this.page.locator(this.Elements.verifyEmailHeader);
    if (await verifyEmailHeader.isVisible({ timeout: 3000 }).catch(() => false)) {
      console.log('Verify email screen detected — attempting Other ways to sign in');
      await this.page.locator(this.Elements.otherWaysToSignIn)
        .click({ timeout: 8000 })
        .catch(() => console.log('Other ways to sign in not available, continuing to password flow'));
      await this.page.waitForTimeout(3000);
    }

    const switchToPasswordSelector = "//span[contains(text(),'Use your password')]";

    const passwordField = this.page.locator(this.Elements.microsoftPasswordInput);
    const switchToPassword = this.page.locator(switchToPasswordSelector);

    if (await switchToPassword.isVisible({ timeout: 6000 })) {

      await switchToPassword.click();
      await this.page.waitForSelector(this.Elements.microsoftPasswordInput, { timeout: 5000 });
      await this.enterMicrosoftPassword(password);
      await this.clickMicrosoftSignInButton();
      await this.clickMicrosoftNoButton();

    } else if (await passwordField.isVisible({ timeout: 5000 })) {

      await this.enterMicrosoftPassword(password);
      await this.clickMicrosoftSignInButton();
      await this.clickMicrosoftNoButton();

    } else {
      throw new Error("Neither password field nor 'Use your password' option was found.");
    }

  }



  async enterUserName12(page: Page, user: string) {
    await page.locator(this.Elements.userInput).fill(user);
  }

  async enterPassword12(page: Page, password: string) {
    await page.locator(this.Elements.passwordInput).fill(password);
  }

  async clickLoginButton12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.loginBtn);
  }

  async clickRemindMeButton12(page: Page) {
    await page.waitForSelector(this.Elements.remindMe, { timeout: 45000 });
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.remindMe);
  }

  async waitForSomeElement12(page: Page) {
    await page.waitForSelector("span[class='displayname']", {
      state: "visible",
    });
  }


}