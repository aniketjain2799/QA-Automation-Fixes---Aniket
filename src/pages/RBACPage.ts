import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";


export default class RBACPage {
  private base: PlaywrightWrapper;
  private loginPage: LoginPage;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
    this.loginPage = new LoginPage(page);
  }

  private Elements = {
    environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
    globalEnv: "//a[normalize-space()='Global_Env_Automation']",
    globalProxyEnv: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_anchor']",
    pglobalProxyEnv: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_anchor']",
    root: "//a[@id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_00000000-0000-0000-0000-000000000000_anchor']",
    Proot: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_00000000-0000-0000-0000-000000000000_anchor']",
    RBAC: "(//a[normalize-space()='AutomationRBAC'])[1]",
    RBACProxy: "(//a[normalize-space()='AutomationRBAC'])[1]",
    delegateAccess: "//span[normalize-space()='Delegate access']",
    rawData01: "//div[normalize-space()='Raw Data-0']",
    emailBox: "//input[@id='txtUserEmail']",
    searchIcon: "//i[@id='btnSearchUser']",
    plusIcon: "//i[@id='btnAddUser']",
    reviewerOption: "//label[@for='opt0_1']",
    developerOption: "//label[@for='opt0_3']",
    ownerOption: "//label[@for='opt0_4']",
    actionUserOption: "//label[@for='opt0_5']",
    powerUserOption: "//label[@for='opt0_2']",
    botNameChange: "//input[@id='txtIconName']",
    okButton: "//button[@id='btnSavePermissionChanges']",
    okButtonPopup: "//button[@id='alertify-ok']",
    logoutForm: "//li[@class='userPhoto']",
    logoutForm1: "//span[@class='glyphicon glyphicon-user']",
    signOut: "//a[normalize-space()='Sign out']",
    humburgerMenu: "//div[@id='PortalIcon']",
    humburgerRbac: "//span[normalize-space()='AutomationRBAC']",
    humburgerRbacProxy: "//span[normalize-space()='AutomationRBACProxy']",
    humburgerNewBot: "//span[normalize-space()='New Bot']",
    humburgerNewBotOwner: "//span[normalize-space()='OwnerNewBot']",
    humburgerNewBotAction: "//span[normalize-space()='ActionNewBot']",
    humburgerNewBotPower: "//span[normalize-space()='PowerNewBot']",
    humburgerNewBotReviewer: "//span[normalize-space()='ReviewerNewBot']",
    humburgerNewBotDeveloper: "//span[normalize-space()='DeveloperNewBot']",
    humburgerNewBot3: "//span[normalize-space()='New Bot3']",
    humburgerNewBot4: "//span[normalize-space()='New Bot4']",
    humburgerNewBot5: "//span[normalize-space()='New Bot5']",
    rbacEnv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='AutomationRBAC']",
    run: "//span[normalize-space()='Run']",
    runYes: "//button[@id='btnRunScriptWithoutParameters']",
    closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
    rbacDataTable: "//li[@role='treeitem']//a[@href='#'][normalize-space()='RBAC data table']",
    resetDataTableYes: "//label[normalize-space()='Yes']",
    resetDataTableOk: "//button[@id='btnResetDataTable']",
    jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
    noError: "(//li[contains(text(), 'no errors')])[1]",
    properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
    rbacDataTableProperties: "//div[normalize-space()='RBAC data table']",
    totalRows: "//div[normalize-space()='Page 1 of 1 (2 items)']",
    userPrincipleName: "//td[normalize-space()='NestorWilke@example.com']",
    rBACdatatableBotTest: "//li[@role='treeitem']//a[@href='#'][normalize-space()='RBAC data table Bot Test']",
    rawData0: "//div[normalize-space()='Raw Data-0']",
    totalRowsR0: "//div[normalize-space()='Page 1 of 1 (3 items)']",
    row03: "//td[normalize-space()='NewName[]']",
    rawData1: "//div[normalize-space()='Raw Data-1']",
    totalRowsR1: "//div[normalize-space()='Page 1 of 1 (2 items)']",
    row1Name1: "(//td[@role='gridcell'][normalize-space()='Adele'])[2]",
    row1Name2: "(//td[@role='gridcell'][normalize-space()='Nestor'])[2]",
    rawData2: "//div[normalize-space()='Raw Data-2']",
    totalRowsR2: "(//div[normalize-space()='Page 1 of 1 (2 items)'])[2]",
    row2Name1: "(//td[@role='gridcell'][normalize-space()='Adele'])[3]",
    title: "//td[normalize-space()='Interstellar']",
    director: "//td[normalize-space()='CristopherNolan']",
    delegateRoot: "//a[@id='38a0c026-da3c-4d65-805e-32649dfc1fce_00000000-0000-0000-0000-000000000000_anchor']",
    delegateRoot4: "//a[@id='40323b19-762b-490a-9308-4e8ea8edcac6_00000000-0000-0000-0000-000000000000_anchor']",
    composser: "//td[normalize-space()='HansZimmer']",
    delegateAutomationTest: "//a[normalize-space()='DelegateAutomationTest']",
    rbacDataTablePropertiesR1UserprincipalName: "//td[normalize-space()='AdeleVance@example.com']",
    rbacDataTablePropertiesR2UserprincipalName: "//td[normalize-space()='NestorWilke@example.com']",
    dashboard: "//div[contains(text(),'Dashboard')]",
    productivityValue: "//div[normalize-space()='Productivity Value']",
    logView: "//div[normalize-space()='Log View']",
    showall: "//button[normalize-space()='Show all']",
    startDate: "//div[normalize-space()='Start Date']",
    general: "//div[contains(text(),'General')]",
    credentials: "//div[contains(text(),'Credentials')]",
    schedule: "//div[contains(text(),'Schedule')]",
    retention: "//div[contains(text(),'Retention')]",
    permissions: "//li[@role='tab']//div//div[contains(text(),'Permissions')]",
    parameters: "(//div[contains(text(),'Parameters')])[1]",
    tasksandLinks: "//div[contains(text(),'Tasks and Links')]",
    metrics: "//div[contains(text(),'Metrics')]",
    execution: "li[id='scriptExecutionPannel']",
    secrets: "//div[contains(text(),'Secrets')]",
    tasks: "//span[normalize-space()='Tasks']",
    run2: "//span[normalize-space()='Run']",
    showExecutionLog: "//span[normalize-space()='Show execution log']",
    viewFullScreen: "//span[normalize-space()='View full screen']",
    copyPortalURL: "//span[normalize-space()='Copy portal URL']",
    copyScriptReference: "//span[normalize-space()='Copy script reference']",
    commandBuilder: "//span[normalize-space()='Command builder']",
    delegateAccess1: "//span[normalize-space()='Delegate access']",
    shareSolution: "//span[normalize-space()='Share solution']",
    newBotTest2: "//a[normalize-space()='NewBotTest2']",
    newBotTest3: "//a[normalize-space()='NewBotTest3']",
    newBotTest4: "//a[normalize-space()='NewBotTest4']",
    newBotTest5: "//a[normalize-space()='NewBotTest5']",
    newBotTest6: "//a[normalize-space()='NewBotTest6']",
    newBot1: "//li[@role='treeitem']//a[@href='#'][normalize-space()='New Bot']",
    newBotActive: "(//a[contains(@href,'#')][normalize-space()='New Bot'])[2]",
    newBotOwnerActive: "(//a[normalize-space()='OwnerNewBot'])[1]",
    newBotOwnerActive2: "(//a[normalize-space()='OwnerNewBot'])[2]",
    newBotDeveloperActive: "(//a[normalize-space()='DeveloperNewBot'])[1]",
    newBotDeveloperActive2: "(//a[normalize-space()='DeveloperNewBot'])[2]",
    newBotActionActive: "(//a[normalize-space()='ActionNewBot'])[1]",
    newBotActionActive2: "(//a[normalize-space()='ActionNewBot'])[2]",
    newBotPowerActive: "(//a[normalize-space()='PowerNewBot'])[1]",
    newBotPowerActive2: "(//a[normalize-space()='PowerNewBot'])[2]",
    newBotReviewerActive: "(//a[normalize-space()='ReviewerNewBot'])[1]",
    newBotReviewerActive2: "(//a[normalize-space()='ReviewerNewBot'])[2]",
    dataTableDelete: "a[href='#'][rel='2']",
    ok: "button[id='alertify-ok']",
    solutions: "//div[text()='Solutions']",
    checkboxsDisable: "#chkRunScriptWithSelectiveConnectIds",
    useconnectIDsDisableSB: "#use_connectID",
    permissionDisableInherited: "#sharingInherited",
    permissionDisableExecuteBot: "#chkAllowScriptExecutionThroughPowershell",
    refreshView: "//span[normalize-space()='Refresh view']",
    showTaskDetails: "//span[normalize-space()='Show task details']",
    showViewDescription: "//span[normalize-space()='Show view description']",
    proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
    MyWorkspace: "(//a[normalize-space()='My Workspace'])[1]",
    root4: "(//a[normalize-space()='Root'])[1]",
  };


  async clickOnGlobalEnv() {
    await this.base.waitAndClick(this.Elements.globalEnv);
  }

  async clickOnRoot4() {
    await this.base.waitAndClick(this.Elements.root4);
  }

  async DoubleclickOnMyWorkspace() {
    await this.base.waitAndDoubleClick(this.Elements.MyWorkspace);
  }

  async clickOnGlobalProxyEnv() {
    await this.base.waitAndClick(this.Elements.globalProxyEnv);
  }

  async clickOnPGlobalProxyEnv() {
    await this.base.waitAndClick(this.Elements.pglobalProxyEnv);
  }

  async enterBotNameForChange(botName: string) {
    await this.page.fill(this.Elements.botNameChange, ""); // Clear the input field
    await this.page.fill(this.Elements.botNameChange, botName);
  }

  async clickOnDelegateAutomationTest() {
    await this.base.waitAndClick(this.Elements.delegateAutomationTest);
  }

  async clickOnRoot() {
    await this.base.waitAndClick(this.Elements.root);
  }

  async clickOnPRoot() {
    await this.base.waitAndClick(this.Elements.Proot);
  }

  async clickOnDelegateRoot() {
    await this.base.waitAndClick(this.Elements.delegateRoot);
  }

  async clickOnDelegateRoot4() {
    await this.base.waitAndClick(this.Elements.delegateRoot4);
  }

  async clickOnRBAC() {
    await this.base.waitAndClick(this.Elements.RBAC);
  }

  async clickOnProxyRBACFolder() {
    await this.base.waitAndClick(this.Elements.RBACProxy);
  }

  async clickOnDelegateAccess() {
    await this.base.waitAndClick(this.Elements.delegateAccess);
    await this.page.waitForTimeout(2000)
  }

  async clickOnEnvironments() {
    await this.base.waitAndClick(this.Elements.environments);
  }

  async fillEmailAddress(email: string) {
    await this.page.fill(this.Elements.emailBox, email);
  }

  async fillEmailAddress56(email56: string) {
    await this.page.fill(this.Elements.emailBox, email56);
  }

  async clickOnSearchIcon() {
    await this.base.waitAndClick(this.Elements.searchIcon);
  }

  async clickOnPlusIcon() {
    await this.base.waitAndClick(this.Elements.plusIcon);
  }

  async clickOnReviewerOption() {
    await this.base.waitAndClick(this.Elements.reviewerOption);
  }

  async clickOnDeveloperOption() {
    await this.base.waitAndClick(this.Elements.developerOption);
  }

  async clickOnOwnerOption() {
    await this.base.waitAndClick(this.Elements.ownerOption);
  }

  async clickOnActionUserOption() {
    await this.base.waitAndClick(this.Elements.actionUserOption);
  }

  async clickOnPowerUserOption() {
    await this.base.waitAndClick(this.Elements.powerUserOption);
  }

  async clickOnOkButton() {
    await this.base.waitAndClick(this.Elements.okButton);
  }

  async isPopupVisible() {
    try {
      await this.page.waitForSelector(this.Elements.okButtonPopup, { timeout: 8000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async clickOnOkButtonPopup() {
    if (await this.isPopupVisible()) {
      await this.base.waitAndClick(this.Elements.okButtonPopup);
    }
  }


  async openNewTabAndLoginWithRBACCredentials() {
    const loginPage = new LoginPage(this.page);
    const secretKey = process.env.SECRET_KEY || '';
    const { username, password } = getCredentials('RBAC', secretKey);
    const newPage = await loginPage.openNewTabAndSignIn(username, password);
    this.page = newPage;
    this.base = new PlaywrightWrapper(newPage);
    return newPage;
  }

  async openNewTabAndLoginWithOwnerCredentials() {
    const loginPage = new LoginPage(this.page);
    const secretKey = process.env.SECRET_KEY || '';
    const { username, password } = getCredentials('BOTPRBAC', secretKey);
    const newPage = await loginPage.openNewTabAndSignIn(username, password);
    this.page = newPage;
    this.base = new PlaywrightWrapper(newPage);
    return newPage;
  }



  async clickOnRunButton() {
    try {
      await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
      await this.base.waitAndClick(this.Elements.run);
    } catch (error) {
      await this.base.waitAndClick(this.Elements.closeButton);
      await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
      await this.base.waitAndClick(this.Elements.run);
    }
  }


  async clickOnYesButton() {
    await this.base.waitAndClick(this.Elements.runYes);
    await this.page.waitForTimeout(10000);
  }


  async clickOnLogoutForm() {
    await this.page.waitForTimeout(4000);
    await this.base.waitAndClick(this.Elements.logoutForm);
    await this.page.waitForTimeout(4000);
  }

  async clickOnLogoutForm1() {
    await this.page.waitForTimeout(4000);
    await this.page.waitForSelector(this.Elements.logoutForm, { timeout: 60000 });
    await this.base.waitAndClick(this.Elements.logoutForm);
    await this.page.waitForTimeout(4000);
  }

  async clickOnSignOut() {
    await this.base.waitAndClick(this.Elements.signOut);
    await this.page.waitForTimeout(4000);
  }

  async clickOnHumburgerMenu(page: Page) {
    await page.waitForTimeout(30000);
    await page.waitForSelector(this.Elements.humburgerMenu, { timeout: 30000 });
    await this.base.waitAndClick(this.Elements.humburgerMenu);
  }

  async clickOnHumburgerRbac(newPage: Page) {
    await newPage.waitForSelector(this.Elements.humburgerRbac, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerRbac);
    await this.page.waitForTimeout(50000);
  }

  async clickOnHumburgerRbacProxy(newPage: Page) {
    await newPage.waitForSelector(this.Elements.humburgerRbacProxy, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerRbacProxy);
    await this.page.waitForTimeout(50000);
  }


  async clickOnRbacEnv(newPage: Page) {
    await newPage.waitForSelector(this.Elements.rbacEnv, { timeout: 15000 });
    await this.base.waitAndClick(this.Elements.rbacEnv);
  }

  async clickOnRbacDataTable() {
    await this.base.waitAndClick(this.Elements.rbacDataTable);
  }

  async clickOnResetDataTableYes() {
    await this.base.waitAndClick(this.Elements.resetDataTableYes);
  }

  async clickOnResetDataTableOk() {
    await this.base.waitAndClick(this.Elements.resetDataTableOk);
  }

  async getJobFinishedText(timeout = 120000) {
    const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
    await jobFinishedLocator.waitFor({ state: 'attached', timeout });
    return jobFinishedLocator.innerText();
  }

  async getNoErrorText(timeout = 120000) {
    const noErrorLocator = this.page.locator(this.Elements.noError);
    await noErrorLocator.waitFor({ state: 'attached', timeout });
    return noErrorLocator.innerText();
  }

  async getProxyConnectIdText(timeout = 60000) {
    const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
    await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
    return ProxyConnectLocator.innerText();
  }

  async clickOnProperties() {
    await this.base.waitAndClick(this.Elements.properties);
  }

  async clickOnRbacDataTableProperties() {
    await this.base.waitAndClick(this.Elements.rbacDataTableProperties);
  }


  async getTotalRowCountAssertionTextR1() {
    await this.page.waitForSelector(this.Elements.totalRows, { timeout: 15000 });
    return this.page.locator(this.Elements.totalRows);
  }

  async validateTotalRowCountR1() {
    const totalRowCount = await this.getTotalRowCountAssertionTextR1();
    await expect(totalRowCount).toContainText('Page 1 of 1 (2 items)');

  }

  async getUserPrincipleNameValidation() {
    await this.page.waitForSelector(this.Elements.userPrincipleName, { timeout: 45000 });
    return this.page.locator(this.Elements.userPrincipleName);
  }

  async UserPrincipleNameValidationR2() {
    const lastRowCount = await this.getUserPrincipleNameValidation();
    await expect(lastRowCount).toContainText('NestorWilke@example.com');
  }

  async clickOnRBACdatatableBotTest() {
    await this.base.waitAndClick(this.Elements.rBACdatatableBotTest);
  }

  async clickOnRawData0() {
    await this.base.waitAndClick(this.Elements.rawData0);
  }

  async getTotalRowCountAssertionTextR0() {
    await this.page.waitForSelector(this.Elements.totalRowsR0, { timeout: 45000 });
    return this.page.locator(this.Elements.totalRowsR0);
  }

  async validateTotalRowCountR0() {
    const totalRowCount = await this.getTotalRowCountAssertionTextR0();
    await expect(totalRowCount).toContainText('Page 1 of 1 (3 items)');
  }

  async getUserPrincipalNameValidationR0() {
    await this.page.waitForSelector(this.Elements.row03, { timeout: 45000 });
    return this.page.locator(this.Elements.row03);
  }

  async userPrincipalNameValidationR0() {
    const userPrincipalNameLocator = await this.getUserPrincipalNameValidationR0();
    await expect(userPrincipalNameLocator).toContainText('NewName[]');
  }


  async clickOnRawData1() {
    await this.base.waitAndClick(this.Elements.rawData1);
  }

  async getTotalRowCountAssertionTextRaw1() {
    await this.page.waitForSelector(this.Elements.totalRowsR1, { timeout: 45000 });
    return this.page.locator(this.Elements.totalRowsR1);
  }

  async validateTotalRowCountRaw1() {
    const totalRowCount = await this.getTotalRowCountAssertionTextRaw1();
    await expect(totalRowCount).toContainText('Page 1 of 1 (2 items)');
  }

  async getRow1Name1() {
    await this.page.waitForSelector(this.Elements.row1Name1, { timeout: 45000 });
    return this.page.locator(this.Elements.row1Name1);
  }

  async getRow1Name2() {
    await this.page.waitForSelector(this.Elements.row1Name2, { timeout: 45000 });
    return this.page.locator(this.Elements.row1Name2);
  }

  async validateRowsNames() {
    const row1Name1Locator = await this.getRow1Name1();
    await expect(row1Name1Locator).toContainText('Adele');

    const row1Name2Locator = await this.getRow1Name2();
    await expect(row1Name2Locator).toContainText('Nestor');
  }

  async clickOnRawData2() {
    await this.base.waitAndClick(this.Elements.rawData2);
  }

  async getTotalRowCountAssertionTextR2() {
    await this.page.waitForSelector(this.Elements.totalRowsR2, { timeout: 15000 });
    return this.page.locator(this.Elements.totalRowsR2);
  }

  async validateTotalRowCountR2() {
    const totalRowCount = await this.getTotalRowCountAssertionTextR2();
    await expect(totalRowCount).toContainText('Page 1 of 1 (2 items)');
  }

  async getTitle() {
    await this.page.waitForSelector(this.Elements.title, { timeout: 45000 });
    return this.page.locator(this.Elements.title);
  }

  async getDirectorName() {
    await this.page.waitForSelector(this.Elements.director, { timeout: 45000 });
    return this.page.locator(this.Elements.director);
  }

  async getComposserName() {
    await this.page.waitForSelector(this.Elements.composser, { timeout: 45000 });
    return this.page.locator(this.Elements.composser);
  }

  async getFirstName() {
    await this.page.waitForSelector(this.Elements.row2Name1, { timeout: 45000 });
    return this.page.locator(this.Elements.row2Name1);
  }

  async validateTitle() {
    const titleLocator = await this.getTitle();
    await expect(titleLocator).toContainText('Interstellar');
  }

  async validateDirectorName() {
    const directorLocator = await this.getDirectorName();
    await expect(directorLocator).toContainText('CristopherNolan');
  }

  async validateComposserName() {
    const composserLocator = await this.getComposserName();
    await expect(composserLocator).toContainText('HansZimmer');
  }

  async validateFirstName() {
    const firstNameLocator = await this.getFirstName();
    await expect(firstNameLocator).toContainText('Adele');
  }

  async getUserPrincipalNameR1Validation() {
    await this.page.waitForSelector(this.Elements.rbacDataTablePropertiesR1UserprincipalName, { timeout: 45000 });
    return this.page.locator(this.Elements.rbacDataTablePropertiesR1UserprincipalName);
  }

  async UserPrincipalNameValidationR1() {
    const userPrincipalNameLocator = await this.getUserPrincipalNameR1Validation();
    await expect(userPrincipalNameLocator).toContainText('AdeleVance@example.com');
  }

  async getUserPrincipalNameR2Validation() {
    await this.page.waitForSelector(this.Elements.rbacDataTablePropertiesR2UserprincipalName, { timeout: 45000 });
    return this.page.locator(this.Elements.rbacDataTablePropertiesR2UserprincipalName);
  }

  async UserPrincipalNameValidationR2() {
    const userPrincipalNameLocator = await this.getUserPrincipalNameR2Validation();
    await expect(userPrincipalNameLocator).toContainText('NestorWilke@example.com');
  }

  async clickOnHumburgerNewBot(newPage: Page) {
    await newPage.waitForTimeout(40000);
    await newPage.waitForSelector(this.Elements.humburgerNewBotOwner, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerNewBotOwner);
    await newPage.waitForTimeout(20000);
  }

  async clickOnHumburgerNewBotDev(newPage: Page) {
    await newPage.waitForTimeout(40000);
    await newPage.waitForSelector(this.Elements.humburgerNewBotDeveloper, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerNewBotDeveloper);
    await newPage.waitForTimeout(20000);
  }

  async clickOnHumburgerNewBot3(newPage: Page) {
    await newPage.waitForTimeout(40000);
    await newPage.waitForSelector(this.Elements.humburgerNewBotAction, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerNewBotAction);
    await newPage.waitForTimeout(20000);
  }

  async clickOnHumburgerNewBot4(newPage: Page) {
    await newPage.waitForTimeout(40000);
    await newPage.waitForSelector(this.Elements.humburgerNewBotPower, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerNewBotPower);
    await newPage.waitForTimeout(20000);
  }

  async clickOnHumburgerNewBot5(newPage: Page) {
    await newPage.waitForTimeout(40000);
    await newPage.waitForSelector(this.Elements.humburgerNewBotReviewer, { timeout: 60000 });
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.humburgerNewBotReviewer);
    await newPage.waitForTimeout(20000);
  }


  async clickOnPropertiesRB(newPage: Page) {
    const base = new PlaywrightWrapper(newPage);
    await base.waitAndClick(this.Elements.properties);
  }

  async clickOnRunButtonRB(newPage: Page) {
    try {
      await newPage.waitForSelector(this.Elements.run, { state: 'visible' });
      const base = new PlaywrightWrapper(newPage);
      await base.waitAndClick(this.Elements.run);
    } catch (error) {
      const base = new PlaywrightWrapper(newPage);
      await base.waitAndClick(this.Elements.closeButton);
      await newPage.waitForSelector(this.Elements.run, { state: 'visible' });
      await base.waitAndClick(this.Elements.run);
    }
  }

  async clickOnYesButtonRB(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.runYes);
  }

  async getJobFinishedTextRB(newPage, timeout = 120000) {
    const jobFinishedLocator = newPage.locator(this.Elements.jobFinished);
    await jobFinishedLocator.waitFor({ state: 'attached', timeout });
    return jobFinishedLocator.innerText();
  }

  async getNoErrorTextRB(newPage, timeout = 120000) {
    const noErrorLocator = newPage.locator(this.Elements.noError);
    await noErrorLocator.waitFor({ state: 'attached', timeout });
    return noErrorLocator.innerText();
  }

  async clickOnRawData0RB(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.rawData01);
  }

  async clickOnDashboard(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.dashboard);
  }

  async clickOnLogView(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.logView);
  }

  async getProductivityValueValidation(page) {
    await page.waitForSelector(this.Elements.productivityValue, { timeout: 45000 });
    return page.locator(this.Elements.productivityValue);
  }


  async ProductivityValueValidation(page) {
    const productivityValueLocator = await this.getProductivityValueValidation(page);
    await expect(productivityValueLocator).toContainText('Productivity Value');
  }

  async getShowallValidation(page) {
    await page.waitForSelector(this.Elements.showall, { timeout: 45000 });
    return page.locator(this.Elements.showall);
  }


  async ShowallValidationValidation(page) {
    const ShowallValidationLocator = await this.getShowallValidation(page);
    await expect(ShowallValidationLocator).toContainText('Show all');
  }


  async getStartDateValidation(page) {
    await page.waitForSelector(this.Elements.startDate, { timeout: 45000 });
    return page.locator(this.Elements.startDate);
  }


  async StartDateValidationValidation(page) {
    const StartDateValidationLocator = await this.getStartDateValidation(page);
    await expect(StartDateValidationLocator).toContainText('Start Date');
  }

  async clickOnGeneralTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.general);
  }

  async clickOnscheduleTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.schedule);
  }


  async clickOnCredentialsTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.credentials);
  }


  async clickOnRetentionTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.retention);
  }


  async clickOnPermissionsTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.permissions);
  }


  async clickOnParametersTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.parameters);
  }


  async clickOnTasksandLinksTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.tasksandLinks);
  }


  async clickOnMetricsTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.metrics);
  }

  async clickOnExecutionTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.execution);
  }

  async verifyCredentialCheckboxIsDisabled(newPage: Page) {
    const base = new PlaywrightWrapper(newPage);
    const isDisabled2 = await newPage.isDisabled(this.Elements.checkboxsDisable);
    expect(isDisabled2).toBe(true);
  }

  async verifyCredentialDropDownIsDisabledSB(newPage: Page) {
    const isDisabled6 = await newPage.isDisabled(this.Elements.useconnectIDsDisableSB);
    expect(isDisabled6).toBe(true);
  }

  async verifyPermissionDisableInherited(newPage: Page) {
    const isDisabled7 = await newPage.isDisabled(this.Elements.permissionDisableInherited);
    expect(isDisabled7).toBe(true);
  }

  async verifyPermissionDisableExecuteBot(newPage: Page) {
    const isDisabled8 = await newPage.isDisabled(this.Elements.permissionDisableExecuteBot);
    expect(isDisabled8).toBe(true);
  }


  async clickOnSecretsTab(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.secrets);
  }


  async getTasksValidation(page) {
    await page.waitForSelector(this.Elements.tasks, { timeout: 45000 });
    return page.locator(this.Elements.tasks);
  }

  async tasksValidation(page) {
    const tasksLocator = await this.getTasksValidation(page);
    await expect(tasksLocator).toContainText('Tasks');
  }

  async getRun2Validation(page) {
    await page.waitForSelector(this.Elements.run2, { timeout: 45000 });
    return page.locator(this.Elements.run2);
  }

  async run2Validation(page) {
    const run2Locator = await this.getRun2Validation(page);
    await expect(run2Locator).toContainText('Run');
  }

  async getShowExecutionLogValidation(page) {
    await page.waitForSelector(this.Elements.showExecutionLog, { timeout: 45000 });
    return page.locator(this.Elements.showExecutionLog);
  }

  async showExecutionLogValidation(page) {
    const showExecutionLogLocator = await this.getShowExecutionLogValidation(page);
    await expect(showExecutionLogLocator).toContainText('Show execution log');
  }

  async getViewFullScreenValidation(page) {
    await page.waitForSelector(this.Elements.viewFullScreen, { timeout: 45000 });
    return page.locator(this.Elements.viewFullScreen);
  }

  async viewFullScreenValidation(page) {
    const viewFullScreenLocator = await this.getViewFullScreenValidation(page);
    await expect(viewFullScreenLocator).toContainText('View full screen');
  }

  async getCopyPortalURLValidation(page) {
    await page.waitForSelector(this.Elements.copyPortalURL, { timeout: 45000 });
    return page.locator(this.Elements.copyPortalURL);
  }

  async copyPortalURLValidation(page) {
    const copyPortalURLLocator = await this.getCopyPortalURLValidation(page);
    await expect(copyPortalURLLocator).toContainText('Copy portal URL');
  }

  async getCopyScriptReferenceValidation(page) {
    await page.waitForSelector(this.Elements.copyScriptReference, { timeout: 45000 });
    return page.locator(this.Elements.copyScriptReference);
  }

  async copyScriptReferenceValidation(page) {
    const copyScriptReferenceLocator = await this.getCopyScriptReferenceValidation(page);
    await expect(copyScriptReferenceLocator).toContainText('Copy script reference');
  }

  async getCommandBuilderValidation(page) {
    await page.waitForSelector(this.Elements.commandBuilder, { timeout: 45000 });
    return page.locator(this.Elements.commandBuilder);
  }

  async commandBuilderValidation(page) {
    const commandBuilderLocator = await this.getCommandBuilderValidation(page);
    await expect(commandBuilderLocator).toContainText('Command builder');
  }

  async getDelegateAccess1Validation(page) {
    await page.waitForSelector(this.Elements.delegateAccess1, { timeout: 45000 });
    return page.locator(this.Elements.delegateAccess1);
  }

  async delegateAccess1Validation(page) {
    const delegateAccess1Locator = await this.getDelegateAccess1Validation(page);
    await expect(delegateAccess1Locator).toContainText('Delegate access');
  }

  async getShareSolutionValidation(page) {
    await page.waitForSelector(this.Elements.shareSolution, { timeout: 45000 });
    return page.locator(this.Elements.shareSolution);
  }

  async shareSolutionValidation(page) {
    const shareSolutionLocator = await this.getShareSolutionValidation(page);
    await expect(shareSolutionLocator).toContainText('Share solution');
  }

  async clickOnlogoutForm2(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.logoutForm);
  }

  async clickOnSignOut2(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.signOut);
  }

  async navigateToHomePageAndLogin12(page) {
    const secretKey = process.env.SECRET_KEY || "";
    const { username } = getCredentials("validUser", secretKey);
    const { password } = getCredentials("validPass", secretKey);

    await this.loginPage.enterUserName12(page, username);
    await this.loginPage.enterPassword12(page, password);
    await this.loginPage.clickLoginButton12(page);
    await this.loginPage.clickRemindMeButton12(page);
    await this.loginPage.waitForSomeElement12(page);
  }

  async clickOnEnvironments12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.environments);
  }

  async clickOnDelegateAutomationTest12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.delegateAutomationTest);
  }

  async clickOnDelegateRoot12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.delegateRoot);
  }

  async clickOnNewBotTest12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.newBotTest2);
  }

  async clickOnNewBotTest13(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.newBotTest3);
  }

  async clickOnNewBotTest14(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.newBotTest4);
  }

  async clickOnNewBotTest15(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.newBotTest5);
  }

  async clickOnNewBotTest16(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.newBotTest6);
  }

  // async rightClickOnNewBot12(page: Page) {
  //   const base = new PlaywrightWrapper(page);
  //   const rightElement = await page.locator(this.Elements.newBotOwnerActive);
  //   await rightElement.click({ button: "right" });
  //   await page.waitForTimeout(1000);
  // }

  async rightClickOnNewBot12(page: Page) {
    const base = new PlaywrightWrapper(page);
    try {
      const rightElement1 = await page.locator(this.Elements.newBotOwnerActive);
      await rightElement1.click({ button: "right" });
    } catch (error1) {
      console.log("Element not found at index 1, trying index 2");
      try {
        const rightElement2 = await page.locator(this.Elements.newBotOwnerActive2);
        await rightElement2.click({ button: "right" });
      } catch (error2) {
        console.error("Element not found at index 2 either. Check the visibility or existence of the element.");
        throw error2;
      }
    }
    await page.waitForTimeout(1000);
  }

  async rightClickOnNewBot13(page: Page) {
    const base = new PlaywrightWrapper(page);
    try {
      const rightElement3 = await page.locator(this.Elements.newBotDeveloperActive);
      await rightElement3.click({ button: "right" });
    } catch (error1) {
      console.log("Element not found at index 1, trying index 2");
      try {
        const rightElement4 = await page.locator(this.Elements.newBotDeveloperActive2);
        await rightElement4.click({ button: "right" });
      } catch (error2) {
        console.error("Element not found at index 2 either. Check the visibility or existence of the element.");
        throw error2;
      }
    }
    await page.waitForTimeout(1000);
  }

  async rightClickOnNewBot14(page: Page) {
    const base = new PlaywrightWrapper(page);
    try {
      const rightElement5 = await page.locator(this.Elements.newBotActionActive);
      await rightElement5.click({ button: "right" });
    } catch (error1) {
      console.log("Element not found at index 1, trying index 2");
      try {
        const rightElement6 = await page.locator(this.Elements.newBotActionActive2);
        await rightElement6.click({ button: "right" });
      } catch (error2) {
        console.error("Element not found at index 2 either. Check the visibility or existence of the element.");
        throw error2;
      }
    }
    await page.waitForTimeout(1000);
  }

  async rightClickOnNewBot15(page: Page) {
    const base = new PlaywrightWrapper(page);
    try {
      const rightElement7 = await page.locator(this.Elements.newBotPowerActive);
      await rightElement7.click({ button: "right" });
    } catch (error1) {
      console.log("Element not found at index 1, trying index 2");
      try {
        const rightElement8 = await page.locator(this.Elements.newBotPowerActive2);
        await rightElement8.click({ button: "right" });
      } catch (error2) {
        console.error("Element not found at index 2 either. Check the visibility or existence of the element.");
        throw error2;
      }
    }
    await page.waitForTimeout(1000);
  }

  async rightClickOnNewBot16(page: Page) {
    const base = new PlaywrightWrapper(page);
    try {
      const rightElement9 = await page.locator(this.Elements.newBotReviewerActive);
      await rightElement9.click({ button: "right" });
    } catch (error1) {
      console.log("Element not found at index 1, trying index 2");
      try {
        const rightElement10 = await page.locator(this.Elements.newBotReviewerActive2);
        await rightElement10.click({ button: "right" });
      } catch (error2) {
        console.error("Element not found at index 2 either. Check the visibility or existence of the element.");
        throw error2;
      }
    }
    await page.waitForTimeout(1000);
  }


  async clickOnDeleteAndOkDataTable12(page: Page) {
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.dataTableDelete);
    await base.waitAndClick(this.Elements.ok);
    await page.waitForTimeout(700);
  }

  async clickOnRootToVerifyThatNewFolderDeleted12(page: Page) {
    await page.waitForTimeout(700);
    const base = new PlaywrightWrapper(page);
    await base.waitAndClick(this.Elements.solutions);
  }

  async getRefreshViewValidation(page) {
    await page.waitForSelector(this.Elements.refreshView, { timeout: 45000 });
    return page.locator(this.Elements.refreshView);
  }

  async RefreshViewValidationValidation(page) {
    const RefreshViewValidationLocator = await this.getRefreshViewValidation(page);
    await expect(RefreshViewValidationLocator).toContainText('Refresh view');
  }


  async getShowTaskDetailsValidation(page) {
    await page.waitForSelector(this.Elements.showTaskDetails, { timeout: 45000 });
    return page.locator(this.Elements.showTaskDetails);
  }

  async ShowTaskDetailsValidation(page) {
    const ShowTaskDetailsValidationLocator = await this.getShowTaskDetailsValidation(page);
    await expect(ShowTaskDetailsValidationLocator).toContainText('Show task details');
  }


  async getShowViewDescriptionValidation(page) {
    await page.waitForSelector(this.Elements.showViewDescription, { timeout: 45000 });
    return page.locator(this.Elements.showViewDescription);
  }

  async ShowViewDescriptionValidation(page) {
    const ShowViewDescriptionValidationLocator = await this.getShowViewDescriptionValidation(page);
    await expect(ShowViewDescriptionValidationLocator).toContainText('Show view description');
  }

}