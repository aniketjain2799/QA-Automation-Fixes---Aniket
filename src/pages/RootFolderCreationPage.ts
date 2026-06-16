import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class RootFolderCreationPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
    existingEnvironment: "//a[text()='TestAutomation45432']",
    existingEnvironment2: "//a[text()='TestAutomation68922']",
    root: "a[id='9d3e9ab6-c2d0-42c5-a543-5f421385d590_00000000-0000-0000-0000-000000000000_anchor']",
    new: "//a[text()='New']",
    folder: "a[href='#'][rel='1']",
    rename: "a[href='#'][rel='0']",
    newFolder: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='New Folder']",
    bot: "a[href='#'][rel='2']",
    queue: "a[href='#'][rel='4']",
    dataTable: "a[href='#'][rel='3']",
    dataTableTeamWorkspaces: "a[href='#'][rel='4']",
    delete: "a[href='#'][rel='10']",
    ok: "button[id='alertify-ok']",
    solutions: "li[id='tileBar'] span",
    dataTableTest: "//a[normalize-space()='DataTableTest']",
    datatable1: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Data table']",
    dataTableDelete: "a[href='#'][rel='2']",
    dataTbaleVerification: "(//div[contains(text(),'Data table')])[1]",
    pagesVerification: "//div[normalize-space()='Page 1 of 1 (2 items)']",
    nameAdele: "//td[normalize-space()='Adele']",
    nameNestor: "//td[normalize-space()='Nestor']",
    newBotTest: "//a[normalize-space()='NewBotTest']",
    newBotTest2: "//a[@id='38a0c026-da3c-4d65-805e-32649dfc1fce_423763d7-a46c-4067-862a-7d19c822b995_anchor']",
    newBotTest24: "//a[@id='40323b19-762b-490a-9308-4e8ea8edcac6_3426e80e-a03b-4433-9b9b-13a03b87d896_anchor']",
    newBotTest3: "//a[normalize-space()='NewBotTest3']",
    newBotTest4: "//a[normalize-space()='NewBotTest4']",
    newBotTest5: "//a[normalize-space()='NewBotTest5']",
    newBotTest6: "//a[normalize-space()='NewBotTest6']",
    rawData0: "//div[normalize-space()='Raw Data-0']",
    pagesVerificationBot: "//div[normalize-space()='Page 1 of 1 (5 items)']",
    NameToday1: "//td[normalize-space()='NameToday1 - 0']",
    id5: "//td[normalize-space()='5']",
    newBot1: "//li[@role='treeitem']//a[@href='#'][normalize-space()='New Bot']",
    newBotMw: "(//a[@href='#'][normalize-space()='New Bot'])[2]",
    newBotNameChange: "//input[@value='New Bot']",
    newBotMWNew: "(//a[normalize-space()='New Bot'])[1]",
    rootMyWorkspace: "(//a[normalize-space()='Root'])[1]",
    rootMyWorkspace1: "(//a[@id='00000000-0000-0000-0000-000000000000_anchor'])[2]",
    newFolderl: "(//li[@data-type='shared']//a[.//span[normalize-space()='New Folder']])[last()]",
    newFolderP: "(//span[normalize-space()='New Folder'])[1]",

  };

  async clickExistingEnvironment() {
    await this.base.waitAndClick(this.Elements.existingEnvironment);
  }

  async clickExistingEnvironment2() {
    await this.base.waitAndClick(this.Elements.existingEnvironment2);
  }

  async rightClickOnRoot() {
    const rightElement = await this.page.locator(this.Elements.root);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnNewAndFolder() {
    await this.base.waitAndClick(this.Elements.new);
    await this.base.waitAndClick(this.Elements.folder);
    await this.page.waitForTimeout(1000);
  }

  async clickOnRootForFolderCreation() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.base.waitAndClick(this.Elements.solutions);
    await this.page.waitForTimeout(1000);

  }

  async rightClickOnNewFolder() {
    const rightElement = await this.page.locator(this.Elements.newFolder);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnNewBot() {
    await this.base.waitAndClick(this.Elements.newFolder);
  }

  async clickOnNewAndQueue() {
    await this.base.waitAndClick(this.Elements.new);
    await this.base.waitAndClick(this.Elements.queue);
  }

  async clickOnRootForQueueCreation() {
    await this.page.waitForTimeout(700);
    await this.base.waitAndClick(this.Elements.solutions);

  }

  async clickOnNewAndBot() {
    await this.base.waitAndClick(this.Elements.new);
    await this.base.waitAndClick(this.Elements.bot);

    await this.page.waitForTimeout(700);
  }

  async clickOnRootForBotCreation() {
    await this.page.waitForTimeout(700);
    await this.base.waitAndClick(this.Elements.solutions);

  }

  async clickOnNewBotMWNew() {
    await this.base.waitAndClick(this.Elements.newBotMWNew);
  }

  async clickOnNewAndDataTable() {
    await this.base.waitAndClick(this.Elements.new);
    await this.base.waitAndClick(this.Elements.dataTable);
    await this.page.waitForTimeout(700);
  }

  async clickOnRootForDataTableCreation() {
    await this.page.waitForTimeout(700);
    await this.base.waitAndClick(this.Elements.solutions);

  }

  async clickOnDeleteAndOk() {
    await this.base.waitAndClick(this.Elements.delete);
    await this.base.waitAndClick(this.Elements.ok);
    await this.page.waitForTimeout(700);
  }

  async clickOnRootToVerifyThatNewFolderDeleted() {
    await this.page.waitForTimeout(700);
    await this.base.waitAndClick(this.Elements.solutions);

  }

  async clickOnEnvironments() {
    await this.base.waitAndClick(this.Elements.environments);
  }

  async waitForEnvironmentsElement() {
    await this.page.waitForSelector(
      "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
      { state: "visible" }
    );
  }


  async rightClickOnDataTableTest() {
    const rightElement = await this.page.locator(this.Elements.dataTableTest);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnDeleteAndOkDataTable() {
    await this.base.waitAndClick(this.Elements.dataTableDelete);
    await this.base.waitAndClick(this.Elements.ok);
    await this.page.waitForTimeout(700);
  }

  async rightClickOnDataTable() {
    const rightElement = await this.page.locator(this.Elements.datatable1);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnDataTableVerification() {
    await this.base.waitAndClick(this.Elements.dataTbaleVerification);
  }

  async getTotalRowsTable() {
    await this.page.waitForSelector(this.Elements.pagesVerification, { timeout: 15000 });
    return this.page.locator(this.Elements.pagesVerification);
  }

  async validateTotalRowsCountTable() {
    const totalRowCount = await this.getTotalRowsTable();
    await expect(totalRowCount).toContainText('Page 1 of 1 (2 items)');
  }

  async getNameValidationTable() {
    await this.page.waitForSelector(this.Elements.nameAdele, { timeout: 15000 });
    return this.page.locator(this.Elements.nameAdele);
  }

  async ValidateNameTextTable() {
    const nameValidate = await this.getNameValidationTable();
    await expect(nameValidate).toContainText('Adele');
  }


  async getNameValidationTableTwo() {
    await this.page.waitForSelector(this.Elements.nameNestor, { timeout: 15000 });
    return this.page.locator(this.Elements.nameNestor);
  }

  async ValidateNameTextTableTwo() {
    const nameValidate2 = await this.getNameValidationTableTwo();
    await expect(nameValidate2).toContainText('Nestor');
  }

  async rightClickOnNewBotTest() {
    const rightElement = await this.page.locator(this.Elements.newBotTest);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnRawData0() {
    await this.base.waitAndClick(this.Elements.rawData0);
  }

  async getTotalRowsBot() {
    await this.page.waitForSelector(this.Elements.pagesVerificationBot, { timeout: 15000 });
    return this.page.locator(this.Elements.pagesVerificationBot);
  }

  async validateTotalRowsCountBot() {
    const totalRowCount1 = await this.getTotalRowsBot();
    await expect(totalRowCount1).toContainText('Page 1 of 1 (5 items)');
  }

  async getNameValidationBot() {
    await this.page.waitForSelector(this.Elements.NameToday1, { timeout: 15000 });
    return this.page.locator(this.Elements.NameToday1);
  }

  async ValidateNameTextBot() {
    const nameValidate4 = await this.getNameValidationBot();
    await expect(nameValidate4).toContainText('NameToday1 - 0');
  }


  async getIdValidationBotTwo() {
    await this.page.waitForSelector(this.Elements.id5, { timeout: 15000 });
    return this.page.locator(this.Elements.id5);
  }

  async ValidateIdTextBotTwo() {
    const nameValidate3 = await this.getIdValidationBotTwo();
    await expect(nameValidate3).toContainText('5');
  }

  async rightClickOnNewBot() {
    const rightElement = await this.page.locator(this.Elements.newBot1);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBot1() {
    const rightElement = await this.page.locator(this.Elements.newBotMw);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickOnNewAndDataTableTW() {
    await this.base.waitAndClick(this.Elements.new);
    await this.base.waitAndClick(this.Elements.dataTableTeamWorkspaces);
    await this.page.waitForTimeout(700);
  }

  async rightClickOnNewBotTest2() {
    const rightElement = await this.page.locator(this.Elements.newBotTest2);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBotTest24() {
    const rightElement = await this.page.locator(this.Elements.newBotTest24);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBotRename() {
    const rightElement = await this.page.locator(this.Elements.newBotMw);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async clickRenameBot() {
    await this.base.waitAndClick(this.Elements.rename);
  }

  async enterBotReNameForChange(botName4: string) {
    await this.page.fill(this.Elements.newBotNameChange, ""); // Clear the input field
    await this.page.fill(this.Elements.newBotNameChange, botName4);
    await this.page.waitForTimeout(2000)
  }

  async rightClickOnNewBotTest3() {
    const rightElement = await this.page.locator(this.Elements.newBotTest3);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBotTest4() {
    const rightElement = await this.page.locator(this.Elements.newBotTest4);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBotTest5() {
    const rightElement = await this.page.locator(this.Elements.newBotTest5);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async rightClickOnNewBotTest6() {
    const rightElement = await this.page.locator(this.Elements.newBotTest6);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }

  async getTotalRowsBotRB(page) {
    await page.waitForSelector(this.Elements.pagesVerificationBot, { timeout: 45000 });
    return page.locator(this.Elements.pagesVerificationBot);
  }

  async validateTotalRowsCountBotRB(page) {
    const totalRowCount91 = await this.getTotalRowsBotRB(page);
    await expect(totalRowCount91).toContainText('Page 1 of 1 (5 items)');
  }

  async getNameValidationBotRB(page) {
    await page.waitForSelector(this.Elements.NameToday1, { timeout: 15000 });
    return page.locator(this.Elements.NameToday1);
  }


  async ValidateNameTextBotRB(page) {
    const nameValidate46 = await this.getNameValidationBotRB(page);
    await expect(nameValidate46).toContainText('NameToday1 - 0');
  }

  async getIdValidationBotTwoRB(page) {
    await page.waitForSelector(this.Elements.id5, { timeout: 15000 });
    return page.locator(this.Elements.id5);
  }


  async ValidateIdTextBotTwoRB(page) {
    const idValidate56 = await this.getIdValidationBotTwoRB(page);
    await expect(idValidate56).toContainText('5');
  }

  async deleteIfExistsAndCreateNewFolder(folderName) {
    const folderXPath = `//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='${folderName}']`;

    const isFolderPresent = await this.page.locator(folderXPath).count() > 0;

    if (isFolderPresent) {
      console.log(`Folder "${folderName}" exists. Deleting it first.`);
      const rightElement = await this.page.locator(this.Elements.newFolder);
      await rightElement.click({ button: "right" });
      await this.page.waitForTimeout(1000);
      await this.base.waitAndClick(this.Elements.delete);
      await this.base.waitAndClick(this.Elements.ok);
      await this.page.waitForTimeout(700);
    }

    // console.log(`Creating new folder: "${folderName}"`);
    // await this.base.waitAndClick(this.Elements.new);
    // await this.base.waitAndClick(this.Elements.folder);
    // await this.page.waitForTimeout(1000);
  }

  async rightClickOnRootMyWorkspace() {
    const rightElement = await this.page.waitForSelector(this.Elements.rootMyWorkspace1, { timeout: 80000 });
    await rightElement.click({ button: "right" });
  }

  async clickOnNewFolderL() {
    await this.base.waitAndClick(this.Elements.newFolderl);
  }

  async clickOnNewFolderP() {
    await this.base.waitAndClick(this.Elements.newFolderP);
  }


}
