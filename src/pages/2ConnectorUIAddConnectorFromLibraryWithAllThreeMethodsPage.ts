import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPageCU from "./1ConnectorUILoginPage";
import { getCredentials } from "../helper/credentialsManager";
import * as path from 'path';

export default class CUPage {
  private base: PlaywrightWrapper;
  private loginPageCU: LoginPageCU;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
    this.loginPageCU = new LoginPageCU(page);
  }

  public Elements = {

    add: "//span[@aria-label='Add']",
    addFromLibrary: "//p[normalize-space()='Add from library']",
    installFromLibrary: "//h5[normalize-space()='Install from library']",
    creator: "//input[@placeholder='Creator']",
    productVeendor: "//input[@placeholder='Product vendor']",
    product: "//input[@placeholder='Product']",
    dropdownOption: "(//li[@role='option'])[1]",
    dropDownodbc: "//li[normalize-space()='ODBC']",
    retrieveAndConfigure: "//button[normalize-space()='Retrieve and configure']",
    odbc: "//h2[normalize-space()='ODBC']",
    delete: "//span[@aria-label='Delete']",
    continue: "//button[normalize-space()='Continue']",
    connectors: "//h2[normalize-space()='Connectors']",
    cloneExisting: "//h5[normalize-space()='Clone existing']",
    connectorObject: "//input[@placeholder='Connector object']",
    testOption: "//li[normalize-space()='test']",
    cloneAndConfigure: "//button[normalize-space()='Clone and configure']",
    testConnectorVerify: "//h2[normalize-space()='test']",
    propertiesFieldVerify: "//h5[normalize-space()='Properties']",
    fromFile: "//h5[normalize-space()='From file']",
    noFileSelected: "//input[@id='actual-btn']",
    importAndConfigure: "//button[normalize-space()='Import and configure']",
    fileMaster: "//h2[normalize-space()='File Master']",
    closeIcon: "//span[contains(text(),'close')]",
    checkBox: "(//span[@class='dx-checkbox-icon'])[3]",

  };

  async navigateToHomePageAndLogin() {
    await this.navigateToHomePage();
    const secretKey = process.env.SECRET_KEY || "";
    const { username } = getCredentials("validUser", secretKey);
    const { password } = getCredentials("validPass", secretKey);
    await this.loginPageCU.fillUsername(username);
    await this.loginPageCU.clickContinue();
    await this.loginPageCU.fillPassword(password);
    await this.loginPageCU.clickLogin();
    await this.loginPageCU.chooseEnvironment();
    await this.loginPageCU.clickOnSettingIcon();
    await this.loginPageCU.clickOnAtlas();
    await this.loginPageCU.clickOnConnectors();
  }


  async navigateToHomePageAndLogin6() {
    await this.navigateToHomePage();
    const secretKey = process.env.SECRET_KEY || "";
    await this.base.goto("https://qa.readiplatform.com/");
    
    const originalEnv = process.env.ENV;
    try {
      (process.env as any).ENV = "DEVCU";
      
      const { username } = getCredentials("validUser", secretKey);
      const { password } = getCredentials("validPass", secretKey);
      
      (process.env as any).ENV = originalEnv;
      
      await this.loginPageCU.fillUsername(username);
      await this.loginPageCU.fillPassword(password);
      await this.loginPageCU.clickLogin();
      await this.loginPageCU.chooseEnvironment();
      await this.loginPageCU.clickOnSettingIcon();
      await this.loginPageCU.clickOnAtlas();
      await this.loginPageCU.clickOnConnectors();
    } finally {

      (process.env as any).ENV = originalEnv;
    }
  }


  async navigateToHomePageAndLogin1() {
    await this.navigateToHomePage();
    const secretKey = process.env.SECRET_KEY || "";
    const { username } = getCredentials("validUser", secretKey);
    const { password } = getCredentials("validPass", secretKey);
    await this.loginPageCU.fillUsername(username);
    await this.loginPageCU.clickContinue();
    await this.loginPageCU.fillPassword(password);
    await this.loginPageCU.clickLogin();
    await this.loginPageCU.chooseEnvironment();
    await this.loginPageCU.clickOnSettingIcon();
    await this.loginPageCU.clickOnAtlas();
    // await this.loginPageCU.clickOnConnectors();
  }
  
  async navigateToHomePageAndLogin4(){
    await this.navigateToHomePage();
    const secretKey = process.env.SECRET_KEY || "";
    const { username } = getCredentials("validUser", secretKey);
    const { password } = getCredentials("validPass", secretKey);
    await this.loginPageCU.fillUsername(username);
    await this.loginPageCU.clickContinue();
    await this.loginPageCU.fillPassword(password);
    await this.loginPageCU.clickLogin();
    await this.loginPageCU.clickOnSettingIcon();
    await this.loginPageCU.clickOnAtlas();
    await this.loginPageCU.clickOnConnectors();
  }

  async navigateToHomePageAndLogin5(){
    await this.navigateToHomePage();
    // const secretKey = process.env.SECRET_KEY || "";
    // const { username } = getCredentials("validUser", secretKey);
    // const { password } = getCredentials("validPass", secretKey);
    // await this.loginPageCU.fillUsername(username);
    // await this.loginPageCU.clickContinue();
    // await this.loginPageCU.fillPassword(password);
    // await this.loginPageCU.clickLogin();
    await this.loginPageCU.clickOnSettingIcon();
    await this.loginPageCU.clickOnAtlas();
    await this.loginPageCU.clickOnConnectors();
  }

  async navigateToHomePage() {
    const loginUrl = process.env.BASEURL || "";
    await this.base.goto(loginUrl);
  }

  async clickOnAdd() {
    await this.base.waitAndClick(this.Elements.add);
  }

  async clickOnaAdFromLibrary() {
    await this.base.waitAndClick(this.Elements.addFromLibrary);
  }

  async clickOnInstallFromLibrary() {
    await this.base.waitAndClick(this.Elements.installFromLibrary);
  }

  async clickOnCreator() {
    await this.base.waitAndClick(this.Elements.creator);
  }

  async clickOnProduct() {
    await this.base.waitAndClick(this.Elements.product);
  }

  async clickOnProductVeendors() {
    await this.base.waitAndClick(this.Elements.productVeendor);
  }

  async clickOnDropdownOption() {
    await this.base.waitAndClick(this.Elements.dropdownOption);
  }

  async clickOnDropDownodbc() {
    await this.base.waitAndClick(this.Elements.dropDownodbc);
  }

  async clickOnRetrieveAndConfigure() {
    await this.base.waitAndClick(this.Elements.retrieveAndConfigure);
  }

  async clickOnOdbc() {
    await this.base.waitAndClick(this.Elements.odbc);
  }

  async clickOnDelete() {
    await this.base.waitAndClick(this.Elements.delete);
  }

  async clickOnContinue() {
    await this.base.waitAndClick(this.Elements.continue);
  }

  async clickOnConnectors() {
    await this.page.waitForTimeout(7000);
    await this.base.waitAndClick(this.Elements.connectors);
  }

  async clickOnCloneExisting() {
    await this.base.waitAndClick(this.Elements.cloneExisting);
  }

  async clickOnConnectorObject() {
    await this.base.waitAndClick(this.Elements.connectorObject);
  }

  async clickOnTestOption() {
    await this.base.waitAndClick(this.Elements.testOption);
  }

  async clickOnCloneAndConfigure() {
    await this.base.waitAndClick(this.Elements.cloneAndConfigure);
  }

  async clickOnTestConnectorVerify() {
    await this.base.waitAndClick(this.Elements.testConnectorVerify);
  }

  async clickOnPropertiesFieldVerify() {
    await this.base.waitAndClick(this.Elements.propertiesFieldVerify);
  }

  async clickOnFromFile() {
    await this.base.waitAndClick(this.Elements.fromFile);
  }

  async uploadFile(fileName: string) {
    const filePath = path.resolve('src', 'UploadFiles', fileName);
    // await this.page.waitForSelector(this.Elements.noFileSelected, { state: 'visible' });
    await this.page.locator(this.Elements.noFileSelected).setInputFiles(filePath);
  }

  async clickOnImportAndConfigure() {
    await this.base.waitAndClick(this.Elements.importAndConfigure);
  }

  async clickOnFileMaster() {
    await this.base.waitAndClick(this.Elements.fileMaster);
  }

  async clickOnCloseIcon() {
    await this.base.waitAndClick(this.Elements.closeIcon);
  }

  async clickOnCheckBox() {
    await this.base.waitAndClick(this.Elements.checkBox);
  }

}
