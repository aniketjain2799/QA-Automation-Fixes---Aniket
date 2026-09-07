import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";


export default class CommandBuilderRetrievingDataPage {
  private base: PlaywrightWrapper;
  private secretKey: string;
  private secretKey2: string;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public Elements = {
    commandBuilder: "//a[normalize-space()='CommandBuilder']",
    bot1: "(//a[normalize-space()='Bot1'])[1]",
    bot12: "a[id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_d2514976-2366-465b-abdf-e7bf72506341_anchor']",
    bot124: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_a1909bb4-94b7-446c-adaa-05fd260f7a41_anchor']",
    bot7: "//a[@id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_2b605f2d-ef77-4983-81dd-c24ab6599b3a_anchor']",
    bot74: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_d0ac8533-e885-4659-8175-ee8884aa50ed_anchor']",
    jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
    noError: "(//li[contains(text(), 'no errors')])[1]",
    rawData0: "//div[normalize-space()='Raw Data-0']",
    totalNumberOfRaws: "//div[contains(@class,'dx-info')]",
    bot1ReadNew: "(//a[normalize-space()='Bot1_Read_New'])[1]",
    bot1ReadOld: "(//a[normalize-space()='Bot1_Read_Old'])[1]",
    rawDataTimestamp: "//span[@class='dataRetrievalDate']",
    bot1ExecuteOld: "(//a[normalize-space()='Bot1_Execute_Old'])[1]",
    runId: "//li[contains(@class,'debug')]",
    workerCreatedId: "//li[contains(text(),'Worker created')]",
    bot1ExecuteGet: "(//a[normalize-space()='Bot1_Execute(GET)'])[1]",
    bot1ExecutePostForm: "(//a[normalize-space()='Bot1_Execute(POST+Form)'])[1]",
    menuValueSelection: "(//a[normalize-space()='MenuValueSelection'])[1]",
    readiBotsJobRetrieveData: "(//a[normalize-space()='ReadiBotsJobRetrieveData'])[1]",
    commandBuilder1: "(//span[normalize-space()='Command builder'])[1]",
    txtScriptQueryBuilder: "//input[@id='txtScriptQueryBuilder']",
    firstRowSelection: "(//div[contains(text(),'/Environments/Global_Env_Automation/Root/CommandBuilder/MenuValueSelection/Bot1')])[1]",
    firstRowSelection2: "(//div[contains(text(),'/My Workspace/MenuValueSelection/Bot1')])[1]",
    firstRowSelection1: "(//div[contains(text(),'/Environments/Global_Env_Automation/Root/CommandBuilder/MenuValueSelection/Bot_Param')])[1]",
    firstRowSelection3: "(//div[contains(text(),'/My Workspace/MenuValueSelection/Bot_Param')])[1]",
    firstRowSelection4: "(//div[contains(text(),'/Team Workspaces/Achal Singh(Developer)/Root/MenuValueSelection/Bot1')])[1]",
    firstRowSelection5: "(//div[contains(text(),'/Team Workspaces/Achal Singh(Developer)/Root/MenuValueSelection/Bot_Param')])[1]",
    firstRowSelection6: "(//div[contains(text(),'/Environments/Global_Env_Automation/Root/CommandBuilder/MenuValueSelection_PS7_Proxy/Bot1')])[1]",
    firstRowSelection7: "(//div[contains(text(),'/Environments/Global_Env_Automation/Root/CommandBuilder/MenuValueSelection_PS7_Proxy/Bot_Param')])[1]",
    column: "//div[@id='dvRetrieveDataControls']//div//span//ul",
    id: "//li[normalize-space()='Id']",
    copyButton: "//button[@id='btnCopyScriptQuery']",
    viewlinesCompleteBox: "//div[contains(@class,'view-lines')]",
    readiBotsJobExecute: "(//a[normalize-space()='ReadiBotsJobExecute'])[1]",
    execute: "//label[normalize-space()='Execute']",
    secrets: "//div[contains(text(),'Secrets')]",
    copy: "//button[@class='btn-transparent' and @title='Copy']",
    ok: "//button[@id='alertify-ok']",
    restApiRetrievePowershell: "(//a[normalize-space()='RESTAPI_Retrieve_Powershell'])[1]",
    restApi: "//label[normalize-space()='REST API']",
    secretValueSelector: "//td[@class='secretVal']",
    eyeIcon: "(//button[@title='Show value'])[1]",
    restApiExecuteGetQuery: "(//a[normalize-space()='RESTAPI_Execute_Get+Query'])[1]",
    dashboard: "//div[contains(text(),'Dashboard')]",
    botParam: "(//a[normalize-space()='Bot_Param'])[1]",
    plusIcon: "//button[@id='lnkCreateScriptRestEndpointSecret']",
    scriptRestEndPointName: "//input[@id='scriptRestEndPointName']",
    generateRandomToken: "//button[@id='generateRandomToken']",
    date: "//input[@id='start']",
    ExecuteBotRestPermission: "//label[normalize-space()='Execute Bot']",
    ReadDataRestPermission: "//label[normalize-space()='Read data']",
    okButton: "//button[@id='btnSaveScriptRestSecret']",
    restApiExecutePostQuery: "(//a[normalize-space()='RESTAPI_Execute_Post+JSON'])[1]",
    methodDropDown: "//span[@title='GET + QueryString']",
    postJson: "//li[normalize-space()='POST + JSON']",
    string: "//li[contains(text(),'String')]",
    int32: "//li[contains(text(),'Int32')]",
    decimal: "//li[contains(text(),'Decimal')]",
    boolean: "//li[contains(text(),'Boolean')]",
    null: "//li[contains(text(),'null')]",
    system: "//li[contains(text(),'System')]",
    remove: "(//button[@title='Remove'])[1]",
    sendingDataintoQueue: "(//a[normalize-space()='SendingDataintoQueue'])[1]",
    botForQueuePost: "(//a[normalize-space()='BotForQueue_Post+Json'])[1]",
    queue: "(//a[normalize-space()='Queue'])[1]",
    serviceBot: "(//a[normalize-space()='Service Bot'])[1]",
    dataTable: "(//a[normalize-space()='DataTable'])[1]",
    botForDataTableGetQuery: "(//a[normalize-space()='BotForDataTable_Get+Query'])[1]",
    table1: "(//a[normalize-space()='table1'])[1]",
    dataTableTab: "(//div[normalize-space()='Data table'])[1]",
    phoneNumberValidation: "//td[normalize-space()='714-555-1212']",
    botForDataTablePostJson: "(//a[normalize-space()='BotForDataTable_Execute_Post+Json_Discuss'])[1]",
    table2: "(//a[normalize-space()='table2'])[1]",
    id1: "//td[normalize-space()='1']",
    address: "//td[normalize-space()='Sitapura, Jaipur']",
    name: "//td[normalize-space()='Lalit']",
    bot13: "//a[@id='fde7eb7c-2a28-41bf-9e0a-b685dcab3743_anchor']",
    bot134: "//a[@id='7b7c5c80-9328-4003-9933-55c1e129ea7f_anchor']",
    bot14: "//a[@id='8c7e83f1-83ca-4d01-927b-3e68fb667e35_ed9cac56-dbfb-4789-abfa-cb553f1527e6_anchor']",
    bot144: "//a[@id='00f554fb-6e66-4fb8-a7e2-8465f00347de_07cd14d8-e411-4c55-8caf-043177aa5818_anchor']",
    myWorkspaceArrowButton: "(//i[@role='presentation'])[5]",
    menuValueSelectionPS7Proxy: "(//a[normalize-space()='MenuValueSelection_PS7_Proxy'])[1]",
    proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
    ps7: "(//li[contains(text(), 'PS7 Sub-process started')])[1]",
    clipboardCopyText: "//input[@id='clipboardCopyText']",
    showExecutionLog: "//span[normalize-space()='Show execution log']",

  };

  async extractSecretValue() {
    const secretValue = await this.page.textContent("//td[@class='secretVal']");
    console.log("Extracted Secret Value:", secretValue.trim());
    return secretValue.trim();
  }


  async clickOnBotParam() {
    await this.base.waitAndClick(this.Elements.botParam);
  }

  async clickOnMenuValueSelectionPS7Proxy() {
    await this.base.waitAndClick(this.Elements.menuValueSelectionPS7Proxy);
  }

  async clickOnBot14() {
    await this.base.waitAndClick(this.Elements.bot14);
  }

  async clickOnBot144() {
    await this.base.waitAndClick(this.Elements.bot144);
  }

  async getProxyConnectIdText(timeout = 300000) {
    const start = Date.now();
    const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
    const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
    while (Date.now() - start < timeout) {
      const found = await ProxyConnectLocator.isVisible({ timeout: 5000 }).catch(() => false);
      if (found) return ProxyConnectLocator.innerText();
      const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
      if (canReopen) {
        await showLogLocator.evaluate((el: HTMLElement) => el.click());
        await this.page.waitForTimeout(2000);
      } else {
        await this.page.waitForTimeout(3000);
      }
    }
    throw new Error(`Proxy ConnectID text not found within ${timeout}ms`);
  }

  async getPS7Text(timeout = 80000) {
    const start = Date.now();
    const PS7Locator = this.page.locator(this.Elements.ps7);
    const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
    while (Date.now() - start < timeout) {
      const found = await PS7Locator.isVisible({ timeout: 5000 }).catch(() => false);
      if (found) return PS7Locator.innerText();
      const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
      if (canReopen) {
        await showLogLocator.evaluate((el: HTMLElement) => el.click());
        await this.page.waitForTimeout(2000);
      } else {
        await this.page.waitForTimeout(3000);
      }
    }
    throw new Error(`PS7 text not found within ${timeout}ms`);
  }

  async clickOnMyWorkspaceArrowButton() {
    await this.base.waitAndClick(this.Elements.myWorkspaceArrowButton);
  }

  async clickOnMethodDropDown() {
    await this.base.waitAndClick(this.Elements.methodDropDown);
  }

  async clickOnSendingDataintoQueue() {
    await this.base.waitAndClick(this.Elements.sendingDataintoQueue);
  }

  async clickOnRemove() {
    await this.base.waitAndClick(this.Elements.remove);
  }

  async clickOnBotForQueuePost() {
    await this.base.waitAndClick(this.Elements.botForQueuePost);
  }

  async clickOnQueue() {
    await this.base.waitAndClick(this.Elements.queue);
  }

  async clickOnServiceBot() {
    await this.base.waitAndClick(this.Elements.serviceBot);
  }

  async clickShowExecutionLogIfVisible() {
    try {
      await this.page.waitForSelector(this.Elements.showExecutionLog, { state: 'visible', timeout: 5000 });
      await this.base.waitAndClick(this.Elements.showExecutionLog);
    } catch {
      // execution log already visible or button not present
    }
  }

  async clickOnOk() {
    await this.base.waitAndClick(this.Elements.ok);
  }

  async clickOnPostJson() {
    await this.base.waitAndClick(this.Elements.postJson);
  }

  async clickOnRestApiExecutePostQuery() {
    await this.base.waitAndClick(this.Elements.restApiExecutePostQuery);
  }

  async clickOnExecuteBotRestPermission() {
    await this.base.waitAndClick(this.Elements.ExecuteBotRestPermission);
  }

  async clickOnReadDataRestPermission() {
    await this.base.waitAndClick(this.Elements.ReadDataRestPermission);
  }

  async clickOnOkButton() {
    await this.base.waitAndClick(this.Elements.okButton);
  }

  async clickOnGenerateRandomToken() {
    await this.base.waitAndClick(this.Elements.generateRandomToken);
    await this.page.waitForTimeout(4000);
  }

  async clickOnPlusIcon() {
    await this.base.waitAndClick(this.Elements.plusIcon);
  }

  async clickOnCommandBuilder() {
    await this.base.waitAndClick(this.Elements.commandBuilder);
  }

  async clickOnRestApiExecuteGetQuery() {
    await this.base.waitAndClick(this.Elements.restApiExecuteGetQuery);
  }

  async clickOnDashboard() {
    await this.base.waitAndClick(this.Elements.dashboard);
  }

  async clickOnEyeIcon() {
    // Wait for any blocking modal (e.g. shareDocument dialog after generating a new key) to close first
    await this.page.waitForSelector('div[role="dialog"]', { state: 'hidden', timeout: 15000 }).catch(() => {});
    await this.page.waitForSelector('#alertify-cover', { state: 'hidden', timeout: 15000 }).catch(() => {});
    await this.base.waitAndClick(this.Elements.eyeIcon);
  }

  async clickonOkButton() {
    await this.base.waitAndClick(this.Elements.ok);
  }

  async clickonRestApiRetrievePowershell() {
    await this.base.waitAndClick(this.Elements.restApiRetrievePowershell);
  }

  async clickonRestApi() {
    await this.base.waitAndClick(this.Elements.restApi);
  }

  async clickonCopyButton() {
    await this.page.waitForTimeout(2000);
    await this.base.waitAndClick(this.Elements.copy);
    await this.page.waitForTimeout(2000);
  }

  async clickOnSecrets() {
    await this.base.waitAndClick(this.Elements.secrets);
  }

  async clickOnReadiBotsJobExecute() {
    await this.base.waitAndClick(this.Elements.readiBotsJobExecute);
  }

  async clickOnExecute() {
    await this.base.waitAndClick(this.Elements.execute);
  }

  async clickOnCopyButton() {
    await this.page.waitForTimeout(2000);
    await this.base.waitAndClick(this.Elements.copyButton);
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstRowSelection() {
    await this.base.waitAndClick(this.Elements.firstRowSelection);
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstRowSelection6() {
    await this.base.waitAndClick(this.Elements.firstRowSelection6);
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstRowSelection7() {
    await this.base.waitAndClick(this.Elements.firstRowSelection7);
  }

  async clickOnFirstRowSelection2() {
    await this.base.waitAndClick(this.Elements.firstRowSelection2);
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstRowSelection1() {
    await this.base.waitAndClick(this.Elements.firstRowSelection1);
  }

  async clickOnFirstRowSelection3() {
    await this.base.waitAndClick(this.Elements.firstRowSelection3);
  }

  async clickOnFirstRowSelection4() {
    await this.base.waitAndClick(this.Elements.firstRowSelection4);
    await this.page.waitForTimeout(2000);
  }

  async clickOnFirstRowSelection5() {
    await this.base.waitAndClick(this.Elements.firstRowSelection5);
  }

  async clickOnId() {
    await this.base.waitAndClick(this.Elements.id);
    await this.page.waitForTimeout(2000);
  }

  async clickOnColumn() {
    await this.page.waitForTimeout(2000);
    await this.base.waitAndClick(this.Elements.column);
    await this.page.waitForTimeout(1000);
  }

  async clickOnTxtScriptQueryBuilder() {
    await this.base.waitAndClick(this.Elements.txtScriptQueryBuilder);
    await this.page.waitForTimeout(2000);
  }

  async EnterCompleteScriptPath(scriptPath: string) {
    await this.page.locator(this.Elements.txtScriptQueryBuilder).fill(scriptPath);
    await this.page.waitForTimeout(2000);
  }

  async clickOnCommandBuilder1() {
    await this.base.waitAndClick(this.Elements.commandBuilder1);
  }

  async clickOnReadiBotsJobRetrieveData() {
    await this.base.waitAndClick(this.Elements.readiBotsJobRetrieveData);
  }

  async clickOnMenuValueSelection() {
    await this.base.waitAndClick(this.Elements.menuValueSelection);
  }

  async clickOnBot1() {
    await this.base.waitAndClick(this.Elements.bot1);
  }

  async clickOnBot12() {
    await this.base.waitAndClick(this.Elements.bot12);
  }

  async clickOnBot124() {
    await this.base.waitAndClick(this.Elements.bot124);
  }

  async clickOnBot7() {
    await this.base.waitAndClick(this.Elements.bot7);
  }

  async clickOnBot74() {
    await this.base.waitAndClick(this.Elements.bot74);
  }

  async clickOnBot13() {
    await this.base.waitAndClick(this.Elements.bot13);
    // Self-heal: jstree loses context after navigating to other bots — click may not change URL
    const botId = 'fde7eb7c-2a28-41bf-9e0a-b685dcab3743';
    await this.page.waitForTimeout(1500);
    if (!this.page.url().includes(botId)) {
      const origin = new URL(this.page.url()).origin;
      await this.page.goto(`${origin}/d/${botId}/v/scriptTab`);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async clickOnBot134() {
    await this.base.waitAndClick(this.Elements.bot134);
  }

  async getJobFinishedText(timeout = 1080000) {
    const start = Date.now();
    const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
    const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
    while (Date.now() - start < timeout) {
      const found = await jobFinishedLocator.isVisible({ timeout: 10000 }).catch(() => false);
      if (found) return jobFinishedLocator.innerText();
      // Check if log panel is open — covers overlay (initial loading) and log-entry phases
      const overlayVisible = await this.page.locator('div.overlayInner').first().isVisible({ timeout: 1000 }).catch(() => false);
      const logEntryVisible = await this.page.locator('li.cloudbridge').first().isVisible({ timeout: 1000 }).catch(() => false);
      const logWindowOpen = overlayVisible || logEntryVisible;
      if (!logWindowOpen) {
        // Panel is closed — click "Show execution log" to reopen it
        const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
        if (canReopen) {
          await showLogLocator.evaluate((el: HTMLElement) => el.click());
          await this.page.waitForTimeout(2000);
        } else {
          await this.page.waitForTimeout(5000);
        }
      } else {
        // Panel is open but job still running — just wait
        await this.page.waitForTimeout(5000);
      }
    }
    throw new Error(`Job finished text not found within ${timeout}ms`);
  }

  async getNoErrorText(timeout = 1080000) {
    const noErrorLocator = this.page.locator(this.Elements.noError);
    await noErrorLocator.waitFor({ state: 'attached', timeout });
    return noErrorLocator.innerText();
  }

  async clickOnRawData0() {
    await this.base.waitAndClick(this.Elements.rawData0);
  }

  async clickOnDataTable() {
    await this.base.waitAndClick(this.Elements.dataTable);
  }

  async clickOnTable1() {
    const anchorEl = this.page.locator(this.Elements.table1);
    const anchorId = await anchorEl.getAttribute('id').catch(() => null);
    const botId = anchorId ? anchorId.replace('_anchor', '') : null;
    await this.base.waitAndClick(this.Elements.table1);
    // Self-heal: jstree loses context after navigating to other bots
    await this.page.waitForTimeout(1500);
    if (botId && !this.page.url().includes(botId)) {
      const origin = new URL(this.page.url()).origin;
      await this.page.goto(`${origin}/d/${botId}/v/scriptTab`);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async clickOnDataTableTab() {
    try {
      await this.page.waitForSelector(this.Elements.dataTableTab, { state: 'visible', timeout: 30000 });
      await this.base.waitAndClick(this.Elements.dataTableTab);
    } catch (error) {
      console.log('[clickOnDataTableTab] First 30s timeout, retrying');
      // Same class of slow-render/drift seen elsewhere in this flow — give it more time on retry
      // rather than failing outright on the default 30s wait.
      await this.page.waitForTimeout(3000);
      await this.page.waitForSelector(this.Elements.dataTableTab, { state: 'visible', timeout: 60000 });
      await this.base.waitAndClick(this.Elements.dataTableTab);
    }
  }

  async clickOnBotForDataTablePostJson() {
    await this.base.waitAndClick(this.Elements.botForDataTablePostJson);
  }

  async clickOnTable2() {
    const anchorEl = this.page.locator(this.Elements.table2);
    const anchorId = await anchorEl.getAttribute('id').catch(() => null);
    const botId = anchorId ? anchorId.replace('_anchor', '') : null;
    await this.base.waitAndClick(this.Elements.table2);
    // Self-heal: jstree loses context after navigating to other bots
    await this.page.waitForTimeout(1500);
    if (botId && !this.page.url().includes(botId)) {
      const origin = new URL(this.page.url()).origin;
      await this.page.goto(`${origin}/d/${botId}/v/scriptTab`);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async clickOnBotForDataTableGetQuery() {
    await this.base.waitAndClick(this.Elements.botForDataTableGetQuery);
  }

  async clickOnBot1ReadNew() {
    await this.base.waitAndClick(this.Elements.bot1ReadNew);
  }


  async getRawDataRowCount(): Promise<number> {
    const rawDataLocator = this.page.locator(this.Elements.totalNumberOfRaws);
    await this.page.waitForTimeout(10000);
    const rawDataText = await rawDataLocator.innerText();
    const rawCountMatch = rawDataText.match(/\((\d+)\sitems\)/);

    if (rawCountMatch) {
      return parseInt(rawCountMatch[1], 10);
    } else {
      throw new Error('Unable to parse raw data count');
    }
  }

  async clickOnBot1ReadOld() {
    await this.base.waitAndClick(this.Elements.bot1ReadOld);
  }

  async getRawDataTimestamp(): Promise<string> {
    return await this.page.textContent(this.Elements.rawDataTimestamp);
  }

  async clickOnBot1ExecuteOld() {
    await this.base.waitAndClick(this.Elements.bot1ExecuteOld);
  }

  async extractRunId(): Promise<string> {
    const runIdText = await this.page.textContent(this.Elements.runId);
    const runIdMatch = runIdText.match(/Run id is:(\d+)/);

    if (runIdMatch) {
      return runIdMatch[1].trim();
    } else {
      throw new Error('Run ID not found in the log.');
    }
  }

  async extractWorkerCreatedId(expectedRunId?: string, timeout = 120000): Promise<string> {
    // Bot1/BotParam/Table nodes are revisited multiple times per scenario, and each REST-triggered
    // run's "Worker created" log line is posted asynchronously after the REST call already returned
    // its run id. A single unsynchronized read can catch a stale/leftover value from an earlier run
    // before the new one lands. Poll (like getProxyConnectIdText/getPS7Text below) until the latest
    // entry actually matches the run id we're expecting.
    const workerCreatedLocator = this.page.locator(this.Elements.workerCreatedId);
    const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
    const start = Date.now();
    let lastId = '';

    while (Date.now() - start < timeout) {
      const count = await workerCreatedLocator.count();
      if (count > 0) {
        const workerCreatedText = await workerCreatedLocator.last().innerText();
        const workerCreatedIdMatch = workerCreatedText.match(/RID: (\d+)/);
        if (workerCreatedIdMatch) {
          lastId = workerCreatedIdMatch[1].trim();
          if (!expectedRunId || lastId === expectedRunId) {
            return lastId;
          }
        }
      }
      const canReopen = await showLogLocator.isVisible({ timeout: 1000 }).catch(() => false);
      if (canReopen) {
        await showLogLocator.evaluate((el: HTMLElement) => el.click());
      }
      await this.page.waitForTimeout(2000);
    }

    if (lastId) return lastId; // return the latest value seen so the caller's expect(...).toBe(...) reports a clear diff
    throw new Error('Worker-created ID not found in the log.');
  }

  async clickOnBot1ExecuteGet() {
    await this.base.waitAndClick(this.Elements.bot1ExecuteGet);
  }

  async clickOnBot1ExecutePostForm() {
    await this.base.waitAndClick(this.Elements.bot1ExecutePostForm);
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


  async fillMonacoEditorPropertiesSection() {

    // const copiedCommand = await this.page.evaluate(() => navigator.clipboard.readText());

    const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    ${copiedCommand.trim()}
    $data
    \`);
    `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);


  }

  async fillMonacoEditorPropertiesSectionExe() {

    const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    $var= ${copiedCommand.trim()}
    write-debug $("Run id is:" + $var.JobRunInstanceId)
    \`);
    `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);
  }

  async fillMonacoEditorWithFinalScript(secretKey: string) {
    const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
    if (!copiedCommand.includes('<enter-secret-here>')) {
      console.error('Placeholder <enter-secret-here> not found in copiedCommand!');
    }

    const updatedCommand = copiedCommand.replace('<enter-secret-here>', secretKey);

    if (!updatedCommand.includes(secretKey)) {
      console.error('Secret Key replacement failed!');
    }

    const lines = updatedCommand.split('\n');

    const invokeRestMethodLine = lines.find(line => line.includes('Invoke-RestMethod'));
    if (!invokeRestMethodLine) {
      console.error('Invoke-RestMethod line not found!');
    }

    const invokeRestMethodWithVar = `
      $var = ${invokeRestMethodLine?.trim()}
      
      $var.response
      `;

    const finalScript = `${lines.slice(0, lines.length - 1).join('\n')}\n\n${invokeRestMethodWithVar.trim()}`;

    const scriptContent = `
        var editor = monaco.editor.getModels()[0];
        editor.setValue(\`
        ${finalScript.trim()}
        \`);
      `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);
  }




  async fillMonacoEditorWithFinalScriptExe(secretKey: string) {

    const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');

    if (!copiedCommand.includes('<enter-secret-here>')) {
      console.error("Placeholder <enter-secret-here> not found in copiedCommand!");
    }

    const updatedCommand = copiedCommand.replace('<enter-secret-here>', secretKey);

    if (!updatedCommand.includes(secretKey)) {
      console.error("Secret Key replacement failed!");
    }

    const invokeRestMethodLine = updatedCommand.split('\n').find(line => line.includes('Invoke-RestMethod'));
    if (!invokeRestMethodLine) {
      console.error("Invoke-RestMethod line not found!");
    }

    const finalScript = `
    $header = @{ "AuthToken"="${secretKey}" };

    $var = ${invokeRestMethodLine?.trim()};

    write-debug $("Run id is:" + $var.runid);
    `;

    const scriptContent = `
      var editor = monaco.editor.getModels()[0];
      editor.setValue(\`
      ${finalScript.trim()}
      \`);
    `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);
  }


  async EnterScriptRestEndPointName(ScriptRestEndPointName: string) {
    await this.page.locator(this.Elements.scriptRestEndPointName).fill(ScriptRestEndPointName);
  }

  async EnterDate(Date: string) {
    await this.page.locator(this.Elements.date).fill(Date);
  }

  async extractSecretValue1() {
    const secretValue2 = await this.page.textContent(this.Elements.secretValueSelector);
    console.log('Extracted Secret Value:', secretValue2);
    return secretValue2.trim();
  }


  async fillMonacoEditorWithFinalScript2(secretKey2: string) {
    const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');

    const jsonBody = `
  $body = @{
      "stringValue" = "Hello, World!"
      "intValue" = 123
      "floatValue" = 45.67
      "booleanValue" = $true
      "nullValue" = $null
      "arrayValue" = @(1, 2, 3, "four", $true)
  };
  $body = $body | ConvertTo-Json
  `;

    let updatedCommand = copiedCommand
      .replace('<enter-your-secret>', secretKey2)
      .replace('[{JSON}]', '$body');

    updatedCommand = updatedCommand.replace('Invoke-RestMethod', '$var = Invoke-RestMethod');

    const finalScript = `
  ${jsonBody.trim()}

  ${updatedCommand.trim()}

  write-debug $("Run id is:" + $var.runid);
  `;

    const scriptContent = `
    var editor = monaco.editor.getModels()[0];
    editor.setValue(\`
    ${finalScript.trim()}
    \`);
  `;

    await this.page.evaluate(scriptContent);
    await this.page.waitForTimeout(2000);
  }


  async validateDataTypes(): Promise<void> {
    const dataTypes = ['String', 'Int32', 'Decimal', 'Boolean', 'null', 'System'];

    for (const dataType of dataTypes) {
      const dataTypeElement = await this.page.waitForSelector(`//li[contains(text(),'${dataType}')]`, { timeout: 5000 });
      const isVisible = await dataTypeElement.isVisible();
      expect(isVisible).toBe(true);
      console.log(`${dataType} data type is present.`);
    }
  }

  async validateDataTypes1(): Promise<void> {
    const dataTypes = ['String', 'Int', 'Boolean', 'null', 'System'];

    for (const dataType of dataTypes) {
      const dataTypeElement = await this.page.waitForSelector(`//li[contains(text(),'${dataType}')]`, { timeout: 5000 });
      const isVisible = await dataTypeElement.isVisible();
      expect(isVisible).toBe(true);
      console.log(`${dataType} data type is present.`);
    }
  }

  async validateRawData0Types(): Promise<void> {
    const rawDataSelectors = [
      "//td[@role='gridcell'][normalize-space()='true']",
      "//td[normalize-space()='Hello, World!']",
      "//td[normalize-space()='45.67']",
      "//td[normalize-space()='[1,2,3,\"four\",true]']",
      "//td[normalize-space()='123']"
    ];

    for (const selector of rawDataSelectors) {
      const dataElement = await this.page.waitForSelector(selector, { timeout: 5000 });
      const isVisible = await dataElement.isVisible();
      expect(isVisible).toBe(true);
      console.log(`Data type with selector ${selector} is present.`);
    }
  }


  async validateRawDataTypes(): Promise<void> {
    const rawDataSelectors1 = [
      "//td[normalize-space()='123']",
      "//td[normalize-space()='[1,2,3,\"four\",true]']",
      "//td[normalize-space()='45.67']",
      "//td[normalize-space()='Hello, World!']",
      "(//td[@role='gridcell'][normalize-space()='true'])[1]"
    ];

    for (const selector of rawDataSelectors1) {
      await this.page.waitForTimeout(12000);
      // Bumped from 5000ms — every other PS7-context wait in this file (getProxyConnectIdText,
      // getPS7Text) uses 60000-300000ms; this grid can take longer than 5s to render under the
      // same proxy overhead.
      const dataElement = await this.page.waitForSelector(selector, { timeout: 60000 });
      const isVisible = await dataElement.isVisible();
      expect(isVisible).toBe(true);
      // console.log(`Data with selector ${selector} is present.`);
    }
  }

  async getphoneNumberValidationRaw1() {
    await this.page.waitForSelector(this.Elements.phoneNumberValidation, { timeout: 15000 });
    return this.page.locator(this.Elements.phoneNumberValidation);
  }

  async PhoneNumberValidationRaw1() {
    const lastRowCount = await this.getphoneNumberValidationRaw1();
    await expect(lastRowCount).toContainText('714-555-1212');
  }

  async getId1ValidationRaw1() {
    await this.page.waitForSelector(this.Elements.id1, { timeout: 15000 });
    return this.page.locator(this.Elements.id1);
  }

  async IdValidationRaw1() {
    const lastRowCount1 = await this.getId1ValidationRaw1();
    await expect(lastRowCount1).toContainText('1');
  }

  async getAddressValidationRaw1() {
    await this.page.waitForSelector(this.Elements.address, { timeout: 15000 });
    return this.page.locator(this.Elements.address);
  }

  async AddressValidationRaw1() {
    const lastRowCount2 = await this.getAddressValidationRaw1();
    await expect(lastRowCount2).toContainText('Sitapura, Jaipur');
  }


  async getNameValidationRaw1() {
    await this.page.waitForSelector(this.Elements.name, { timeout: 15000 });
    return this.page.locator(this.Elements.name);
  }

  async NameValidationRaw1() {
    const lastRowCount3 = await this.getNameValidationRaw1();
    await expect(lastRowCount3).toContainText('Lalit');
  }

}