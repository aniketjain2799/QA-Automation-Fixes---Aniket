import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ExecuteTableEnvironmentPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
    datatable: "(//a[normalize-space()='Data table'])[1]",
    viewlinesCompleteBox: "//div[contains(@class,'view-lines')]",
    innerScript: "(//div[@class='view-line'])[1]",
    run: "//span[normalize-space()='Run']",
    runYes: "//button[@id='btnRunScriptWithoutParameters']",
    jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
    noError: "(//li[contains(text(), 'no errors')])[1]",
    logView: "//div[normalize-space()='Log View']",
    existingEnvironment2: "//a[text()='TestAutomation68922']",
    root: "a[id='55f2b2ac-faec-4cc8-a607-8a4e2570ac24_00000000-0000-0000-0000-000000000000_anchor']",
    scriptDescriptionName: "//input[@id='txtScriptDescription']",
    newBot: "//li[@role='treeitem']//a[@href='#'][normalize-space()='New Bot']",
    newBot1: "(//a[@href='#'][normalize-space()='New Bot'])[1]",
    newBotMW: "(//a[@href='#'][normalize-space()='New Bot'])[2]",
    newBotTW: "(//a[normalize-space()='New Bot'])[1]",
    properties: "(//div[contains(text(),'Properties')])[1]",
    publish: "//button[normalize-space()='PUBLISH']",
    ownerBotR: "(//li[@aria-selected='true']//a[@href='#'][normalize-space()='OwnerNewBot'])[1]",
    developerBotR: "//li[@aria-selected='true']//a[@href='#'][normalize-space()='DeveloperNewBot']",
    actionBotR: "//li[@aria-selected='true']//a[@href='#'][normalize-space()='ActionNewBot']",
    PowerBotR: "//li[@aria-selected='true']//a[@href='#'][normalize-space()='PowerNewBot']",
    reviewerBotR: "//li[@aria-selected='true']//a[@href='#'][normalize-space()='ReviewerNewBot']",
    deleteOption: "//a[text()='Delete']",
    confirmDeleteButton: "button[id='alertify-ok']",
    newBotTest2: "//a[@id='38a0c026-da3c-4d65-805e-32649dfc1fce_423763d7-a46c-4067-862a-7d19c822b995_anchor']",
    newBotTest24: "//a[@id='40323b19-762b-490a-9308-4e8ea8edcac6_3426e80e-a03b-4433-9b9b-13a03b87d896_anchor']",
    ownerBotR1: "(//a[@href='#'][normalize-space()='OwnerNewBot'])[2]",

  };

  async openNewFolder2() {
    const folderElement = await this.page.locator(this.Elements.newBotTest2);
    await folderElement.click();
    await this.page.waitForTimeout(1000);
  }

  async openNewFolder24() {
    const folderElement = await this.page.locator(this.Elements.newBotTest24);
    await folderElement.click();
    await this.page.waitForTimeout(1000);
  }

  async checkAndDeleteExistingBot() {
    await this.openNewFolder2();
    const botExists = await this.page.locator(this.Elements.ownerBotR1).count() > 0;
    if (botExists) {
      const rightElement = await this.page.locator(this.Elements.ownerBotR1);
      await rightElement.click({ button: "right" });
      // await this.page.locator(this.Elements.ownerBotR).click({ button: "right" });
      await this.base.waitAndClick(this.Elements.deleteOption);
      await this.base.waitAndClick(this.Elements.confirmDeleteButton);
      await this.page.waitForTimeout(2000);
    }
  }



  async rightClickOnRoot() {
    const rightElement = await this.page.locator(this.Elements.root);
    await rightElement.click({ button: "right" });
    await this.page.waitForTimeout(1000);
  }


  async clickExistingEnvironment2() {
    await this.base.waitAndClick(this.Elements.existingEnvironment2);
  }

  async clickScriptDescriptionName() {
    await this.base.waitAndClick(this.Elements.scriptDescriptionName);
  }

  async clickOnPublish() {
    await this.base.waitAndClick(this.Elements.publish);
    await this.page.waitForTimeout(2000)
  }

  async clickOnDataTable() {
    await this.base.waitAndClick(this.Elements.datatable);
  }

  async clickOnRunButton() {
    await this.base.waitAndClick(this.Elements.run);
  }

  async clickOnYesButton() {
    await this.base.waitAndClick(this.Elements.runYes);
  }

  async waitForEnvironmentsElement() {
    await this.page.waitForSelector(
      "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
      { state: "visible" }
    );
  }

  async clickOnEnvironments() {
    await this.base.waitAndClick(this.Elements.environments);
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


  async getElement(selector: string) {
    return await this.page.locator(selector);
  }

  async clearInput(selectorKey: string) {
    const selector = this.Elements[selectorKey];

    if (!selector) {
      console.error(`Selector for "${selectorKey}" not found.`);
      return;
    }

    const elementHandle = await this.page.$(selector);
    if (elementHandle) {
      await elementHandle.evaluate((element) => (element.innerText = ""));
      await this.page.waitForTimeout(5000);
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  }

  async sendPropertiesToSection(properties: string) {
    const viewLinesCompleteBox = await this.page.locator(
      this.Elements.viewlinesCompleteBox
    );
    await viewLinesCompleteBox.evaluate(
      (element, text) => (element.innerHTML = text.replace(/\n/g, "<br>")),
      properties
    );
  }

  async fillPropertiesSection(data: any) {
    const viewLinesElement = await this.page.locator(
      this.Elements.viewlinesCompleteBox
    );

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    $phoneNumber = '${data.phoneNumber}';
    $description = '${data.description}';
    $index = ${data.index.toString()};
    $data = @{
    Id=${data.dataTable.Id};
    name="${data.dataTable.name}";
    address="${data.dataTable.address}";
    phoneNumber=$phoneNumber;
    description=$description
    };
    $data | Initialize-CbDataTable -PrimaryKey Id -Truncate
    \`);
    `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);

  }

  async fillPropertiesSection11() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne"
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection12() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -validate
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection13() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -sync
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection14() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -validate -sync
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection15() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetActiveUsers = $true} -Targets '0'
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection16() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetActiveUsers = $true} -Targets '1'
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection17() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetActiveUsers = $true} -Targets '0' -validate -sync
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection18() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetActiveUsers = $true} -Targets '1' -validate -sync
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection19() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetUserswithName = $true} -Targets 'demo' -validate
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSection20() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Parameters @{GetUserswithName = $true} -Targets 'demo' -validate -sync
$a
$a.logs
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSectionDataTableTest(data: any) {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    ${data.script}
    \`);
    `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);
  }


  async fillPropertiesSection22() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftTwo.ODBCTwo.SQLTwo" -validate -sync
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async fillPropertiesSectionWithRandomFirstName() {
    const names = ["Divya", "Mona", "Nina", "Sara", "Tina", "Vanya", "Anya", "Kavya", "Riya", "Lana", "Mia"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000);
    const uniqueFirstName = `${randomName}${randomFourDigit}`;
    const email = `${uniqueFirstName}@gmail.com`;
    const staticId = "58248AEB-C3E8-46EC-A499-1A03EBC5B888";

    const scriptContent = `
  var editor = monaco.editor.getModels()[0];
  editor.setValue(\`
$data = [pscustomobject]@{
    Id = "${staticId}"
    FirstName = '${uniqueFirstName}'
    LastName = 'Sharma'
    IsActive = 1
    EmailConfirmed = 1
    PhoneNumberConfirmed = 1
    TwoFactorEnabled = 0
    LockoutEnabled = 1
    AccessFailedCount = 0
    UserName = '${email}'
    CompanyId = '20BD1F40-044E-4A3A-A608-0E8ADA3790CA'
    IsEnviorment = 1
    IsDynamicUser = 1
    isCheck = 0
}

$a = New-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Data $data
$a.logs
  \`);
  `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);

    console.log("Entered script with FirstName:", uniqueFirstName);
    return { uniqueFirstName, staticId };
  }


  async updateUserCountryDynamically(): Promise<string> {
    const countries = ["India", "USA", "China", "Russia", "Germany", "France", "Japan", "Brazil", "Canada", "Australia"];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    const updateScript = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$updatedata = [pscustomobject]@{
    Country = '${randomCountry}'
}
$a = Update-ReadiUser -Source "Connectors.MicrosoftOne.ODBCOne.SQLOne" -Data $updatedata -Targets 'e91bbafd-dc8e-49fc-a524-7c583f7ad9a0'
$a.logs
    \`);
  `;

    await this.page.evaluate(updateScript);
    await this.page.waitForTimeout(2000);

    console.log("Updated Country:", randomCountry);
    return randomCountry;
  }



  async fillPropertiesSection24() {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
$a = Get-ReadiUser -Source "Connectors.MicrosoftTwo.ODBCTwo.SQLTwo" -targets @('e91bbafd-dc8e-49fc-a524-7c583f7ad9a0') -validate -sync
$a
$a.items
    \`);
  `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }



  async clickOnNewBot() {
    await this.base.waitAndClick(this.Elements.newBot1);
  }

  async clickOnNewBotOwner() {
    await this.base.waitAndClick(this.Elements.ownerBotR);
  }

  async clickOnNewBotDeveloper() {
    await this.base.waitAndClick(this.Elements.developerBotR);
  }

  async clickOnNewBotAction() {
    await this.base.waitAndClick(this.Elements.actionBotR);
  }

  async clickOnNewBotPower() {
    await this.base.waitAndClick(this.Elements.PowerBotR);
  }

  async clickOnNewBotReviewer() {
    await this.base.waitAndClick(this.Elements.reviewerBotR);
  }

  async clickOnNewBot3() {
    await this.base.waitAndClick(this.Elements.newBotMW);
  }

  async clickOnNewBotTW() {
    await this.base.waitAndClick(this.Elements.newBotTW);
  }


  async fillPropertiesSectionNewBotTest(data: any) {
    const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    $data = @()
  
    $index = 1
  
    for ($inner = 0; $inner -lt ${data.recordCount}; $inner++) {
        $data += @{Id=$index; nametest="${data.prefix} - $inner $num"}
        write-debug "Records added...$index"
        $index++
    }
  
    $data
    \`);
    `;

    await this.page.evaluate(scriptContent);

    await this.page.waitForTimeout(2000);
  }

  async clickOnProperties() {
    await this.base.waitAndClick(this.Elements.properties);
  }


}