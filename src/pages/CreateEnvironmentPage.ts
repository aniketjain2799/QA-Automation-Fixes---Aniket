import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";

export default class CreateEnvironmentPage {
  private base: PlaywrightWrapper;
  private loginPage: LoginPage;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
    this.loginPage = new LoginPage(page);
  }

  public Elements = {
    home: "//li[text()='Explore Solutions']",
    environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
    new: "//a[text()='New']",
    environment: "//a[text()='Environment']",
    txtEnvironmentName: "input[id='txtEnvironmentName']",
    CreateNewEnvironment: "button[id='btnCreateNewEnvironment']",
    environmentLink: "a[data-testid='environment-link']",
  };

  async navigateToHomePageAndLogin() {
    await this.navigateToHomePage();
    const secretKey = process.env.SECRET_KEY || "";
    const { username } = getCredentials("validUser", secretKey);
    const { password } = getCredentials("validPass", secretKey);
    await this.loginPage.enterUserName(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLoginButton();
    await this.loginPage.clickRemindMeButton();
    await this.loginPage.waitForSomeElement();
  }

  async navigateToHomePage() {
    const loginUrl = process.env.BASEURL || "";
    await this.base.goto(loginUrl);
  }

  async rightClickOnEnvironments() {
    const rightElement = await this.page.waitForSelector(this.Elements.environments, { timeout: 80000 });
    await rightElement.click({ button: "right" });
}

  async clickEnvironmentButton() {
    await this.base.waitAndClick(this.Elements.environment);
  }

  async waitForElement() {
    await this.page.waitForSelector(
      "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
      { state: "visible" }
    );
  }

  getExploreHeading() {
    return this.page.locator(this.Elements.home);
  }

  async clickNewButton() {
    await this.base.waitAndClick(this.Elements.new);
  }

  async clickCreateNewEnvironmentButton() {
    await this.base.waitAndClick(this.Elements.CreateNewEnvironment);
  }

  async enterEnvironmentName(EnvironmentName: string) {
    await this.page
      .locator(this.Elements.txtEnvironmentName)
      .fill(EnvironmentName);
  }

  async clickEnvironmentLink(environmentName: string) {
    const environmentLinkSelector = `//a[normalize-space()='${environmentName}']`;
    await this.page.waitForSelector(environmentLinkSelector, { state: 'visible', timeout: 65000 });
    await this.page.click(environmentLinkSelector);
  }
}
