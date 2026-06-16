import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPageCU {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public Elements = {
    userInput: "#email-login",
    passwordInput: "input[type='password']",
    continueButton: "//h5[normalize-space()='CONTINUE']",
    loginButton: "//button[@type='submit']",
    loginSuccess: "//h2[normalize-space()='Apps']",
    errorMessage: "//p[contains(text(),'Invalid credentials.')]",
    chooseEnv: "//h5[normalize-space()='Achal Test Env']",
    selectButton: "//button[normalize-space()='Select']",
    settingIcon: "svg[name='vsc/VscSettingsGear']",
    atlas: "//h6[normalize-space()='Atlas']",
    connectors: "//h6[normalize-space()='Connectors']",
  };

  async navigateToLoginPage() {
    await this.base.goto("");
    await expect(this.page).toHaveTitle("Readibots React App");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.Elements.userInput).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.Elements.passwordInput).fill(password);
  }

  async clickOnSettingIcon() {
    await this.base.waitAndClick(this.Elements.settingIcon);
  }

  async clickOnAtlas() {
    await this.base.waitAndClick(this.Elements.atlas);
  }

  async clickOnConnectors() {
    await this.base.waitAndClick(this.Elements.connectors);
  }

  async clickContinue() {
    await this.base.waitAndClick(this.Elements.continueButton);
  }

  async clickLogin() {
    await this.base.waitAndClick(this.Elements.loginButton);
  }

  async chooseEnvironment() {
    await this.base.waitAndClick(this.Elements.chooseEnv);
    await this.base.waitAndClick(this.Elements.selectButton);
  }

  async getErrorMessage() {
    await this.page.waitForSelector(this.Elements.errorMessage, { timeout: 10000 });
    return this.page.locator(this.Elements.errorMessage);
  }

  async isLoginSuccessful() {
    const locator = this.page.locator(this.Elements.loginSuccess);
    await locator.waitFor({ timeout: 15000 });
    return locator;
  }
  
}