import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";



export default class BotRetentionPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {

        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        botProperties: "//a[normalize-space()='BotProperties']",
        bot: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Bot']",
        general: "//div[contains(text(),'General')]",
        nameDescription: "//input[@id='txtScriptDescription']",
        primaryKay: "//li[@title='Id']",
        jsonDepth: "//span[@title='5']",
        maxDuplicate: "//span[@title='4']",
        sentAlertTo: "//input[@id='txtScriptMailAddresses']",
        chkAlertIfNoDataCB1: "//label[@for='chkAlertIfNoData']",
        chkAlertIfBotFailsCB2: "//label[contains(@for,'chkAlertIfBotFails')]",
        chkMasterSwitchChangeMonitoringCB3: "//label[@for='chkMasterSwitchChangeMonitoring']",
        chkRunOnlyAsExplicitScriptcb4: "//label[@for='chkRunOnlyAsExplicitScript']",
        toggleOn: "//div[@class='toggle btn scriptEnableToggle btn-primary']//label[@class='btn btn-primary toggle-on']",
        toggleOff: "//div[@class='toggle btn scriptEnableToggle btn-default off']//label[@class='btn btn-default active toggle-off']",
        toggleCB1: "//label[contains(@for,'chkDoNotExecute-internal')]",
        toggleCB2: "//label[@for='chkDoNotExecute-interactive']",
        toggleCB3: "//label[@for='chkDoNotExecute-rest']",
        credentials: "//div[contains(text(),'Credentials')]",
        connectID_1: "//li[@title='ConnectID_1']",
        chkRunCCB1: "//label[@for='chkRunScriptWithSelectiveConnectIds']",
        use_connectID: "//label[@for='use_connectID']",
        schedule: "//div[contains(text(),'Schedule')]",
        customScheduleOption: "//label[@for='customScheduleOption']",
        sun: "//a[normalize-space()='Sun']",
        twelve12: "//li[@title='12:00 AM']",
        forRadioButton: "//label[@for='retentionCustom']",
        chkIgnoreNoDataResults: "//label[@for='chkIgnoreNoDataResults']",
        txtRetentionNumber: "//input[@id='txtRetentionNumber']",
        retentionUnitDropdown: "//select[@id='ddlRetentionUnit']",
        chkDeleteChangeLogs: "//label[@for='chkDeleteChangeLogs']",
        retention: "//div[contains(text(),'Retention')]",
        permissions: "(//div[contains(text(),'Permissions')])[1]",
        sharingInheritedRadioButton: "//label[@for='sharingInherited']",
        chkViewSelfGeneratedRunInstances: "//label[@for='chkViewSelfGeneratedRunInstances']",
        chkViewScriptExecutionLog: "//label[@for='chkViewScriptExecutionLog']",
        chkViewScriptRunInstancesTimeline: "//label[@for='chkViewScriptRunInstancesTimeline']",
        chkViewScriptLogViews: "//label[@for='chkViewScriptLogViews']",
        chkAllowQuerying: "//label[@for='chkAllowQuerying']",
        chkAllowScriptExecutionThroughPowershell: "//label[@for='chkAllowScriptExecutionThroughPowershell']",
        chkAllowScriptDataAccessThroughRestApi: "//label[@for='chkAllowScriptDataAccessThroughRestApi']",
        chkAllowScriptExecutionThroughRestApi: "//label[@for='chkAllowScriptExecutionThroughRestApi']",
        metrics: "//div[contains(text(),'Metrics')]",
        category: "//select[@id='roicategory']",
        tags: "//li[@title='tag1']",
        timeSavedPerDeploy: "//input[@id='timeSavedPerDeploy']",
        typicalWorkerCost: "//input[@id='typicalWorkerCost']",
        perDeployCost: "//span[@id='perDeployCost']",
        execution: "//div[contains(text(),'Execution')]",
        useExecutionOption: "//label[@for='inherited_execution_option']",
        powerShell: "//span[@title='Windows PowerShell (PS5)']",
        dataTable: "//a[@id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_f78921a5-2cf3-4cef-9e00-5973142d0410_anchor']",
        dataTable41: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_0d45c7a9-c201-4a19-abc2-1f4dedc5fc2d_anchor']",
        dataTable4: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_0d45c7a9-c201-4a19-abc2-1f4dedc5fc2d_anchor']",
        dataTableMyWorkspace: "//a[@id='96ad0ad6-f459-4bd2-ba2c-6770d66db98b_anchor']",
        dataTableMyWorkspace4: "//a[@id='6f0cba00-701f-4218-a4bb-83f890718058_anchor']",
        dataTableTeamWorkspaces: "//a[@id='8c7e83f1-83ca-4d01-927b-3e68fb667e35_8a440532-fa73-4fc3-a5ea-3b2643ee203a_anchor']",
        dataTableTeamWorkspaces4: "//a[@id='00f554fb-6e66-4fb8-a7e2-8465f00347de_94f0358f-deeb-4882-b368-df95ed9493ce_anchor']",
        nameDataTable: "//input[@id='txtScriptDescription']",
        primaryKeyDataTable: "//li[@title='Id']",
        aliasDataTable: "//input[@id='txtDTScriptAlias']",
        jsonDepthDataTable: "//span[@title='5']",
        maxDuplicateInsDataTable: "//span[@title='6']",
        sharingInheritedDataTable: "//label[@for='sharingInherited']",
        chkAllowAddDatatableRecordThroughUI: "//label[@for='chkAllowAddDatatableRecordThroughUI']",
        chkAllowEditDatatableRecordThroughUI: "//label[@for='chkAllowEditDatatableRecordThroughUI']",
        chkAllowDeleteDatatableRecordsThroughUI: "//label[@for='chkAllowDeleteDatatableRecordsThroughUI']",
        chkAllowQueryingDataTabl: "//label[@for='chkAllowQuerying']",
        chkAllowScriptExecutionThroughPowershellDataTable: "//label[@for='chkAllowScriptExecutionThroughPowershell']",
        chkAllowScriptDataAccessThroughRestApiDataTabl: "//label[@for='chkAllowScriptDataAccessThroughRestApi']",
        chkAllowScriptExecutionThroughRestApiDataTable: "//label[@for='chkAllowScriptExecutionThroughRestApi']",
        apiEndPoint: "//input[@title='https://stage.readiplatform.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/f78921a5-2cf3-4cef-9e00-5973142d0410']",
        apiEndPoint4: "//input[@title='https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/0d45c7a9-c201-4a19-abc2-1f4dedc5fc2d']",
        apiEndPointCopyButton: "//button[@id='btnCopyScriptUrl']",
        queue: "//a[normalize-space()='Queue']",
        description: "//input[@placeholder='description']",
        ddlQueueStatus: "//select[@id='ddlQueueStatus']",
        arrayAsMultipleObjects: "//label[@for='arrayAsMultipleObjects']",
        sharingInherited: "//label[@for='sharingInherited']",
        chkAllowQueryingQueue: "//label[@for='chkAllowQuerying']",
        chkAllowScriptExecutionThroughPowershellQueue: "//label[@for='chkAllowScriptExecutionThroughPowershell']",
        chkAllowScriptExecutionThroughRestApiQueue: "//label[@for='chkAllowScriptExecutionThroughRestApi']",
        txtScriptUrl: "//input[@id='txtScriptUrl']",
        serviceBot: "//a[normalize-space()='Service Bot']",
        jsonDepthServiceBot: "//span[@title='3']",
        txtScriptMailAddresses: "//input[@id='txtScriptMailAddresses']",
        txtMaxItemsToDequeue: "//input[@id='txtMaxItemsToDequeue']",
        chkAlertIfNoData: "//label[@for='chkAlertIfNoData']",
        chkAlertIfBotFails: "//label[@for='chkAlertIfBotFails']",
        chkMasterSwitchChangeMonitoring: "//label[@for='chkMasterSwitchChangeMonitoring']",
        chkRunOnlyAsExplicitScript: "//label[@for='chkRunOnlyAsExplicitScript']",
        chkProvideFullReadiMessage: "//label[@for='chkProvideFullReadiMessage']",
        every5Mins: "//li[@title='Every 5 mins']",
        myWorkspace: "//a[normalize-space()='My Workspace']",
        rootMyWorkspace: "(//a[normalize-space()='Root'])[1]",
        TeamWorkspaces: "//a[normalize-space()='Team Workspaces']",
        achalTeamWorkspace: "//a[normalize-space()='Achal Singh(Developer)']",
        rootTeamWorkspaces: "//a[@id='8c7e83f1-83ca-4d01-927b-3e68fb667e35_00000000-0000-0000-0000-000000000000_anchor']",
        rootTeamWorkspaces4: "//a[@id='00f554fb-6e66-4fb8-a7e2-8465f00347de_00000000-0000-0000-0000-000000000000_anchor']",
        rootTeamWorkspaces1: "//a[@id='00f554fb-6e66-4fb8-a7e2-8465f00347de_00000000-0000-0000-0000-000000000000_anchor']",
        apiEndPointCopyButtonParent: "//button[@title='Copy Script Url']",
        connectIdsDisable: "#connectIds",
        checkboxsDisable: "#chkRunScriptWithSelectiveConnectIds",
        permisssionCheckboxsDisable: "#chkAllowScriptExecutionThroughPowershell",
        permisssionCheckboxsDTDisable: "#chkAllowScriptDataAccessThroughRestApi",
        permisssionCheckboxsQueueDisable: "#chkAllowScriptExecutionThroughRestApi",
        useconnectIDsDisableSB: "#use_connectID",
        oKbutton: "//button[@id='alertify-ok']",
        clipboardCopyText: "//input[@id='clipboardCopyText']",
        crossIcon: "//div[@id='rightOverlay']//a[@id='rightOverlayCloseButton']",


    };


    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
        await this.page.waitForTimeout(3000);
    }

    async clickOnBotPropertiesFolder() {
        await this.base.waitAndClick(this.Elements.botProperties);
    }

    async clickOnOkbutton() {
        await this.base.waitAndClick(this.Elements.oKbutton);
    }

    async clickOnBaot() {
        await this.base.waitAndClick(this.Elements.bot);
    }

    async clickOnGeneral() {
        await this.base.waitAndClick(this.Elements.general);
        await this.page.waitForTimeout(3000);

    }

    async verifyToggleState(expectedState: 'on' | 'off') {
        if (expectedState === 'on') {
            const isToggleOn = await this.page.isVisible(this.Elements.toggleOn);
            if (!isToggleOn) {
                throw new Error('Toggle is expected to be ON but it is not.');
            }
        } else {
            const isToggleOff = await this.page.isVisible(this.Elements.toggleOff);
            if (!isToggleOff) {
                throw new Error('Toggle is expected to be OFF but it is not.');
            }
        }
    }


    async getNameDescription() {
        await this.page.waitForSelector(this.Elements.nameDescription, { timeout: 7000 });
        return this.page.locator(this.Elements.nameDescription);
    }

    async NameDescriptionTextValidation() {
        const NameDescriptionElement = await this.getNameDescription();
        const NameDescriptionText = await NameDescriptionElement.inputValue();
        await expect(NameDescriptionText.trim()).toMatch(/^Bot$/);
    }

    async getPrimaryKay() {
        await this.page.waitForSelector(this.Elements.primaryKay, { timeout: 7000 });
        return this.page.locator(this.Elements.primaryKay);
    }

    async PrimaryKayTextValidation() {
        const PrimaryKayElement = await this.getPrimaryKay();
        const PrimaryKayText = await PrimaryKayElement.textContent();
        await expect(PrimaryKayText.trim()).toMatch(/^×Id$/);
    }

    async getJsonDepth() {
        await this.page.waitForSelector(this.Elements.jsonDepth, { timeout: 7000 });
        return this.page.locator(this.Elements.jsonDepth);
    }

    async DepthElementTextValidation() {
        const JsonDepthElement = await this.getJsonDepth();
        const DepthElementText = await JsonDepthElement.textContent();
        await expect(DepthElementText.trim()).toMatch(/^5$/);
    }

    async getMaxDuplicate() {
        await this.page.waitForSelector(this.Elements.maxDuplicate, { timeout: 7000 });
        return this.page.locator(this.Elements.maxDuplicate);
    }

    async MaxDuplicateTextValidation() {
        const MaxDuplicateElement = await this.getMaxDuplicate();
        const MaxDuplicateText = await MaxDuplicateElement.textContent();
        await expect(MaxDuplicateText.trim()).toMatch(/^4$/);
    }

    async getSentAlertTo() {
        await this.page.waitForSelector(this.Elements.sentAlertTo, { timeout: 7000 });
        return this.page.locator(this.Elements.sentAlertTo);
    }

    async SentAlertToTextValidation() {
        const SentAlertToElement = await this.getSentAlertTo();
        const SentAlertToText = await SentAlertToElement.inputValue();
        await expect(SentAlertToText.trim()).toMatch(/^lalit.mangal@outlook.com$/);
    }

    async ischkAlertIfNoDataCB1Selected() {
        const checkbox = await this.page.locator(this.Elements.chkAlertIfNoDataCB1);
        return checkbox.isChecked();
    }

    async ischkAlertIfBotFailsCB2Selected() {
        const checkbox2 = await this.page.locator(this.Elements.chkAlertIfBotFailsCB2);
        return checkbox2.isChecked();
    }


    async ischkMasterSwitchChangeMonitoringCB3Selected() {
        const checkbox3 = await this.page.locator(this.Elements.chkMasterSwitchChangeMonitoringCB3);
        return checkbox3.isChecked();
    }


    async ischkRunOnlyAsExplicitScriptcb4Selected() {
        const checkbox4 = await this.page.locator(this.Elements.chkRunOnlyAsExplicitScriptcb4);
        return checkbox4.isChecked();
    }

    async isToggleCB1Selected() {
        const checkbox5 = await this.page.locator(this.Elements.toggleCB1);
        return checkbox5.isChecked();
    }

    async isToggleCB2Selected() {
        const checkbox6 = await this.page.locator(this.Elements.toggleCB2);
        return checkbox6.isChecked();
    }

    async isToggleCB3Selected() {
        const checkbox7 = await this.page.locator(this.Elements.toggleCB3);
        return checkbox7.isChecked();
    }

    async clickOnCredentials() {
        await this.base.waitAndClick(this.Elements.credentials);
    }

    async clickOnSchedule() {
        await this.base.waitAndClick(this.Elements.schedule);
    }

    async getConnectID_1() {
        await this.page.waitForSelector(this.Elements.connectID_1, { timeout: 7000 });
        return this.page.locator(this.Elements.connectID_1);
    }

    async ConnectID_1TextValidation() {
        const ConnectID_1Element = await this.getConnectID_1();
        const ConnectID_1Text = await ConnectID_1Element.textContent();
        await expect(ConnectID_1Text.trim()).toMatch(/^×ConnectID_1$/);
    }

    async ischkRunCCB1Selected() {
        const checkbox8 = await this.page.locator(this.Elements.chkRunCCB1);
        return checkbox8.isChecked();
    }

    async isRadioRunScriptWithSelectiveConnectIdsSelected() {
        const radioButton = await this.page.locator(this.Elements.use_connectID);
        return radioButton.isChecked();
    }

    async isRadioRunScriptWithSelectiveCustomScheduleOptionSelected() {
        const radioButton2 = await this.page.locator(this.Elements.customScheduleOption);
        return radioButton2.isChecked();
    }

    async getTwelve12() {
        await this.page.waitForSelector(this.Elements.twelve12, { timeout: 30000 });
        return this.page.locator(this.Elements.twelve12);
    }

    async Twelve12TextValidation() {
        const Twelve12Element = await this.getTwelve12();
        const Twelve12Text = await Twelve12Element.textContent();
        await expect(Twelve12Text.trim()).toMatch(/^×12:00 AM$/);
    }

    async isDaySelected(dayLocator: string): Promise<boolean> {
        const dayElement = this.page.locator(dayLocator);
        const classAttribute = await dayElement.getAttribute('class');
        return classAttribute?.includes('active') ?? false;
    }

    async isRadioforSelected() {
        const radioButton3 = await this.page.locator(this.Elements.forRadioButton);
        return radioButton3.isChecked();
    }

    async ischkIgnoreNoDataResultSelected() {
        const checkbox9 = await this.page.locator(this.Elements.chkIgnoreNoDataResults);
        return checkbox9.isChecked();
    }


    async ischkDeleteChangeLogsSelected() {
        const checkbox10 = await this.page.locator(this.Elements.chkDeleteChangeLogs);
        return checkbox10.isChecked();
    }

    async clickOnRetention() {
        await this.base.waitAndClick(this.Elements.retention);
    }

    async getTxtRetentionNumber() {
        await this.page.waitForSelector(this.Elements.txtRetentionNumber, { timeout: 7000 });
        return this.page.locator(this.Elements.txtRetentionNumber);
    }

    async TxtRetentionNumberTextValidation() {
        const TxtRetentionNumberElement = await this.getTxtRetentionNumber();
        const TxtRetentionNumberText = await TxtRetentionNumberElement.inputValue();
        await expect(TxtRetentionNumberText.trim()).toMatch(/^12$/);
    }

    async getSelectedRetentionUnitText(): Promise<string> {
        const dropdown = this.page.locator(this.Elements.retentionUnitDropdown);
        const selectedOption = await dropdown.locator('option:checked').textContent();
        return selectedOption?.trim() ?? '';
    }

    async clickOnPermissions() {
        await this.base.waitAndClick(this.Elements.permissions);
    }

    async IschkViewSelfGeneratedRunInstancesNotSelected() {
        const checkbox11 = await this.page.locator(this.Elements.chkViewSelfGeneratedRunInstances);
        return checkbox11.isChecked();
    }


    async IschkViewScriptExecutionLogSelected() {
        const checkbox12 = await this.page.locator(this.Elements.chkViewScriptExecutionLog);
        return checkbox12.isChecked();
    }

    async IsSharingInheritedRadioButtonSelected() {
        const radioButton4 = await this.page.locator(this.Elements.sharingInheritedRadioButton);
        return radioButton4.isChecked();
    }

    async IschkViewScriptRunInstancesTimelineSelected() {
        const checkbox13 = await this.page.locator(this.Elements.chkViewScriptRunInstancesTimeline);
        return checkbox13.isChecked();
    }

    async IschkViewScriptLogViewsSelected() {
        const checkbox14 = await this.page.locator(this.Elements.chkViewScriptLogViews);
        return checkbox14.isChecked();
    }

    async IschkAllowQueryingSelected() {
        const checkbox15 = await this.page.locator(this.Elements.chkAllowQuerying);
        return checkbox15.isChecked();
    }

    async IschkAllowScriptExecutionThroughPowershellSelected() {
        const checkbox16 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughPowershell);
        return checkbox16.isChecked();
    }


    async IschkAllowScriptDataAccessThroughRestApiSelected() {
        const checkbox17 = await this.page.locator(this.Elements.chkAllowScriptDataAccessThroughRestApi);
        return checkbox17.isChecked();
    }


    async IschkAllowScriptExecutionThroughRestApiSelected() {
        const checkbox18 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughRestApi);
        return checkbox18.isChecked();
    }

    async clickOnMetrics() {
        await this.base.waitAndClick(this.Elements.metrics);
    }

    async clickOnExecution() {
        await this.base.waitAndClick(this.Elements.execution);
    }

    async getCategoryText(): Promise<string> {
        const dropdown1 = this.page.locator(this.Elements.category);
        const selectedOption1 = await dropdown1.locator('option:checked').textContent();
        return selectedOption1?.trim() ?? '';
    }

    async getTags() {
        await this.page.waitForSelector(this.Elements.tags, { timeout: 7000 });
        return this.page.locator(this.Elements.tags);
    }

    async getTagsTextValidation() {
        const getTagsElement = await this.getTags();
        const getTagsText = await getTagsElement.textContent();
        await expect(getTagsText.trim()).toMatch(/^×tag1$/);
    }

    async getTimeSavedPerDeploy() {
        await this.page.waitForSelector(this.Elements.timeSavedPerDeploy, { timeout: 7000 });
        return this.page.locator(this.Elements.timeSavedPerDeploy);
    }

    async TimeSavedPerDeployTextValidation() {
        const TimeSavedPerDeployElement = await this.getTimeSavedPerDeploy();
        const TimeSavedPerDeployText = await TimeSavedPerDeployElement.inputValue();
        await expect(TimeSavedPerDeployText.trim()).toMatch(/^50m$/);
    }

    async getTypicalWorkerCost() {
        await this.page.waitForSelector(this.Elements.typicalWorkerCost, { timeout: 7000 });
        return this.page.locator(this.Elements.typicalWorkerCost);
    }

    async TypicalWorkerCostTextValidation() {
        const TypicalWorkerCostElement = await this.getTypicalWorkerCost();
        const TypicalWorkerCostText = await TypicalWorkerCostElement.inputValue();
        await expect(TypicalWorkerCostText.trim()).toMatch(/^50.00$/);
    }

    async getPerDeployCost() {
        await this.page.waitForSelector(this.Elements.perDeployCost, { timeout: 7000 });
        return this.page.locator(this.Elements.perDeployCost);
    }

    async PerDeployCostTextValidation() {
        const PerDeployCostElement = await this.getPerDeployCost();
        const PerDeployCostText = await PerDeployCostElement.textContent();
        expect(PerDeployCostText.trim()).toBe('$41.67');
    }

    async isRadioUseExecutionOptionSelected() {
        const radioButton5 = await this.page.locator(this.Elements.useExecutionOption);
        return radioButton5.isChecked();
    }


    async getPowerShell() {
        await this.page.waitForSelector(this.Elements.powerShell, { timeout: 7000 });
        return this.page.locator(this.Elements.powerShell);
    }

    async getPowerShellText() {
        const PowerShellElement = await this.getPowerShell();
        const PowerShellText = await PowerShellElement.textContent();
        expect(PowerShellText.trim()).toBe('Windows PowerShell (PS5)');
    }

    async clickOnDataTable() {
        await this.base.waitAndClick(this.Elements.dataTable);
    }

    async clickOnDataTable41() {
        await this.base.waitAndClick(this.Elements.dataTable41);
    }

    async clickOnDataTable4() {
        await this.base.waitAndClick(this.Elements.dataTable4);
    }

    async geNameDataTable() {
        await this.page.waitForSelector(this.Elements.nameDataTable, { timeout: 7000 });
        return this.page.locator(this.Elements.nameDataTable);
    }

    async getNameDataTableTextValidation() {
        const NameDataTableElement = await this.geNameDataTable();
        const NameDataTableText = await NameDataTableElement.inputValue();
        await expect(NameDataTableText.trim()).toMatch(/^Data table$/);
    }

    async getPrimaryKeyDataTable() {
        await this.page.waitForSelector(this.Elements.primaryKeyDataTable, { timeout: 7000 });
        return this.page.locator(this.Elements.primaryKeyDataTable);
    }

    async PrimaryKeyDataTableTextValidation() {
        const PrimaryKeyDataTableElement = await this.getPrimaryKeyDataTable();
        const PrimaryKeyDataTableText = await PrimaryKeyDataTableElement.textContent();
        await expect(PrimaryKeyDataTableText.trim()).toMatch(/^×Id$/);
    }

    async getAliasDataTable() {
        await this.page.waitForSelector(this.Elements.aliasDataTable, { timeout: 7000 });
        return this.page.locator(this.Elements.aliasDataTable);
    }

    async getAliasDataTableTextValidation() {
        const AliasDataTableElement = await this.getAliasDataTable();
        const AliasDataTableText = await AliasDataTableElement.inputValue();
        await expect(AliasDataTableText.trim()).toMatch(/^table$/);
    }

    async getJsonDepthDataTable() {
        await this.page.waitForSelector(this.Elements.jsonDepthDataTable, { timeout: 7000 });
        return this.page.locator(this.Elements.jsonDepthDataTable);
    }

    async getJsonDepthDataTableTextValidation() {
        const JsonDepthDataTableElement = await this.getJsonDepthDataTable();
        const JsonDepthDataTableText = await JsonDepthDataTableElement.textContent();
        await expect(JsonDepthDataTableText.trim()).toMatch(/^5$/);
    }

    async getMaxDuplicateInsDataTable() {
        await this.page.waitForSelector(this.Elements.maxDuplicateInsDataTable, { timeout: 7000 });
        return this.page.locator(this.Elements.maxDuplicateInsDataTable);
    }

    async MaxDuplicateInsDataTableTextValidation() {
        const MaxDuplicateInsDataTableElement = await this.getMaxDuplicateInsDataTable();
        const MaxDuplicateInsDataTableText = await MaxDuplicateInsDataTableElement.textContent();
        await expect(MaxDuplicateInsDataTableText.trim()).toMatch(/^6$/);
    }

    async IschkAllowAddDatatableRecordThroughUISelected() {
        const checkbox19 = await this.page.locator(this.Elements.chkAllowAddDatatableRecordThroughUI);
        return checkbox19.isChecked();
    }

    async IschkAllowEditDatatableRecordThroughUISelected() {
        const checkbox20 = await this.page.locator(this.Elements.chkAllowEditDatatableRecordThroughUI);
        return checkbox20.isChecked();
    }

    async IschkAllowDeleteDatatableRecordsThroughUISelected() {
        const checkbox21 = await this.page.locator(this.Elements.chkAllowDeleteDatatableRecordsThroughUI);
        return checkbox21.isChecked();
    }

    async IschkAllowQueryingDataTablSelected() {
        const checkbox22 = await this.page.locator(this.Elements.chkAllowQueryingDataTabl);
        return checkbox22.isChecked();
    }

    async IschkAllowScriptExecutionThroughPowershellDataTableSelected() {
        const checkbox23 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughPowershellDataTable);
        return checkbox23.isChecked();
    }

    async IschkAllowScriptDataAccessThroughRestApiDataTablSelected() {
        const checkbox24 = await this.page.locator(this.Elements.chkAllowScriptDataAccessThroughRestApiDataTabl);
        return checkbox24.isChecked();
    }


    async IschkAllowScriptExecutionThroughRestApiDataTableSelected() {
        const checkbox25 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughRestApiDataTable);
        return checkbox25.isChecked();
    }

    async getApiEndPoint() {
        await this.page.waitForSelector(this.Elements.apiEndPoint, { timeout: 7000 });
        return this.page.locator(this.Elements.apiEndPoint);
    }

    async ApiEndPointTextValidation() {
        const ApiEndPointElement = await this.getApiEndPoint();
        const ApiEndPointText = await ApiEndPointElement.inputValue();
        expect(ApiEndPointText.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/f78921a5-2cf3-4cef-9e00-5973142d0410');
    }

    async getApiEndPoint4() {
        await this.page.waitForSelector(this.Elements.apiEndPoint4, { timeout: 7000 });
        return this.page.locator(this.Elements.apiEndPoint4);
    }

    async ApiEndPointTextValidation4() {
        const ApiEndPointElement1 = await this.getApiEndPoint4();
        const ApiEndPointText1 = await ApiEndPointElement1.inputValue();
        expect(ApiEndPointText1.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/0d45c7a9-c201-4a19-abc2-1f4dedc5fc2d');
    }

    async clickApiEndPointCopyButton() {
        await this.base.waitAndClick(this.Elements.apiEndPointCopyButton);
    }


    async validateCopyButtonFunctionality() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl = 'https://stage.readiplatform.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/f78921a5-2cf3-4cef-9e00-5973142d0410';
        expect(clipboardText.trim()).toBe(expectedUrl);
    }

    async validateCopyButtonFunctionality4() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/0d45c7a9-c201-4a19-abc2-1f4dedc5fc2d';
        expect(clipboardText.trim()).toBe(expectedUrl);
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }

    async getDescriptionQueue() {
        await this.page.waitForSelector(this.Elements.description, { timeout: 7000 });
        return this.page.locator(this.Elements.description);
    }

    async getDescriptionQueueTextValidation() {
        const DescriptionQueueElement = await this.getDescriptionQueue();
        const DescriptionQueueText = await DescriptionQueueElement.inputValue();
        await expect(DescriptionQueueText.trim()).toMatch(/^Queue$/);
    }

    async getQueueStatusText(): Promise<string> {
        const dropdown2 = this.page.locator(this.Elements.ddlQueueStatus);
        const selectedOption2 = await dropdown2.locator('option:checked').textContent();
        return selectedOption2?.trim() ?? '';
    }

    async isRadioMultipleObjectsSelected() {
        const radioButton6 = await this.page.locator(this.Elements.arrayAsMultipleObjects);
        return radioButton6.isChecked();
    }

    async isRadioSharingInheritedSelected() {
        const radioButton7 = await this.page.locator(this.Elements.sharingInherited);
        return radioButton7.isChecked();
    }

    async IschkChkAllowQueryingQueueSelected() {
        const checkbox26 = await this.page.locator(this.Elements.chkAllowQueryingQueue);
        return checkbox26.isChecked();
    }


    async IschkAllowScriptExecutionThroughPowershellQueueSelected() {
        const checkbox27 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughPowershellQueue);
        return checkbox27.isChecked();
    }


    async IschkAllowScriptExecutionThroughRestApiQueueSelected() {
        const checkbox28 = await this.page.locator(this.Elements.chkAllowScriptExecutionThroughRestApiQueue);
        return checkbox28.isChecked();
    }


    async getApiEndPointQueue() {
        await this.page.waitForSelector(this.Elements.txtScriptUrl, { timeout: 7000 });
        return this.page.locator(this.Elements.txtScriptUrl);
    }

    async ApiEndPointTextValidationQueue() {
        const ApiEndPointElement1 = await this.getApiEndPointQueue();
        const ApiEndPointText1 = await ApiEndPointElement1.inputValue();
        expect(ApiEndPointText1.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/27d4843d-82b1-4774-a14b-7a6485e63b80');
    }

    async ApiEndPointTextValidationQueue41() {
        const ApiEndPointElement1 = await this.getApiEndPointQueue();
        const ApiEndPointText1 = await ApiEndPointElement1.inputValue();
        expect(ApiEndPointText1.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/72782bb0-7633-4b62-9705-a9903ea1b8c0');
    }

    async ApiEndPointTextValidationQueue4() {
        const ApiEndPointElement1 = await this.getApiEndPointQueue();
        const ApiEndPointText1 = await ApiEndPointElement1.inputValue();
        expect(ApiEndPointText1.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/72782bb0-7633-4b62-9705-a9903ea1b8c0');
    }

    async clickOnServiceBot() {
        await this.base.waitAndClick(this.Elements.serviceBot);
    }

    async getDescriptionServiceBot() {
        await this.page.waitForSelector(this.Elements.description, { timeout: 7000 });
        return this.page.locator(this.Elements.description);
    }

    async getDescriptionServiceBotTextValidation() {
        const DescriptionServiceBotElement = await this.getDescriptionServiceBot();
        const DescriptionServiceBotText = await DescriptionServiceBotElement.inputValue();
        await expect(DescriptionServiceBotText.trim()).toMatch(/^Service Bot$/);
    }

    async getJsonDepthServiceBot() {
        await this.page.waitForSelector(this.Elements.jsonDepthServiceBot, { timeout: 7000 });
        return this.page.locator(this.Elements.jsonDepthServiceBot);
    }

    async getJsonDepthServiceBotTextValidation() {
        const JsonDepthServiceBotElement = await this.getJsonDepthServiceBot();
        const JsonDepthServiceBotText = await JsonDepthServiceBotElement.textContent();
        await expect(JsonDepthServiceBotText.trim()).toMatch(/^3$/);
    }

    async getTxtScriptMailAddresses() {
        await this.page.waitForSelector(this.Elements.txtScriptMailAddresses, { timeout: 7000 });
        return this.page.locator(this.Elements.txtScriptMailAddresses);
    }

    async getTxtScriptMailAddressesTextValidation() {
        const TxtScriptMailAddressesElement = await this.getTxtScriptMailAddresses();
        const TxtScriptMailAddressesText = await TxtScriptMailAddressesElement.inputValue();
        await expect(TxtScriptMailAddressesText.trim()).toMatch(/^achal.singh@outlook.com$/);
    }

    async getTxtMaxItemsToDequeue() {
        await this.page.waitForSelector(this.Elements.txtMaxItemsToDequeue, { timeout: 7000 });
        return this.page.locator(this.Elements.txtMaxItemsToDequeue);
    }

    async getTxtMaxItemsToDequeueTextValidation() {
        const TxtMaxItemsToDequeueElement = await this.getTxtMaxItemsToDequeue();
        const TxtMaxItemsToDequeueText = await TxtMaxItemsToDequeueElement.inputValue();
        await expect(TxtMaxItemsToDequeueText.trim()).toMatch(/^2$/);
    }

    async IschkAlertIfNoDataelected() {
        const checkbox29 = await this.page.locator(this.Elements.chkAlertIfNoData);
        return checkbox29.isChecked();
    }

    async IschkAlertIfBotFailsSelected() {
        const checkbox30 = await this.page.locator(this.Elements.chkAlertIfBotFails);
        return checkbox30.isChecked();
    }


    async IschkMasterSwitchChangeMonitoringSelected() {
        const checkbox31 = await this.page.locator(this.Elements.chkMasterSwitchChangeMonitoring);
        return checkbox31.isChecked();
    }


    async IschkRunOnlyAsExplicitScriptSelected() {
        const checkbox32 = await this.page.locator(this.Elements.chkRunOnlyAsExplicitScript);
        return checkbox32.isChecked();
    }


    async IschkProvideFullReadiMessageSelected() {
        const checkbox33 = await this.page.locator(this.Elements.chkProvideFullReadiMessage);
        return checkbox33.isChecked();
    }

    async getEvery5Mins() {
        await this.page.waitForSelector(this.Elements.every5Mins, { timeout: 7000 });
        return this.page.locator(this.Elements.every5Mins);
    }

    async Every5MinsTextValidation() {
        const Every5MinsElement = await this.getEvery5Mins();
        const Every5MinsText = await Every5MinsElement.textContent();
        await expect(Every5MinsText.trim()).toMatch(/^×Every 5 mins$/);
    }

    async TxtRetentionNumberTextValidation1() {
        const TxtRetentionNumberElement1 = await this.getTxtRetentionNumber();
        const TxtRetentionNumberText1 = await TxtRetentionNumberElement1.inputValue();
        await expect(TxtRetentionNumberText1.trim()).toMatch(/^1$/);
    }

    async clickOnMyWorkspace() {
        await this.base.waitAndClick(this.Elements.myWorkspace);
    }

    async clickOnRootMyWorkspace() {
        await this.base.waitAndClick(this.Elements.rootMyWorkspace);
    }

    async clickOnDataTableMyWorkspace() {
        await this.base.waitAndClick(this.Elements.dataTableMyWorkspace);
    }

    async clickOnDataTableMyWorkspace4() {
        await this.base.waitAndClick(this.Elements.dataTableMyWorkspace4);
    }


    async getApiEndPointMW() {
        await this.page.waitForSelector(this.Elements.txtScriptUrl, { timeout: 7000 });
        return this.page.locator(this.Elements.txtScriptUrl);
    }

    async ApiEndPointTextValidationMW() {
        const ApiEndPointElementMW = await this.getApiEndPointMW();
        const ApiEndPointTextMW = await ApiEndPointElementMW.inputValue();
        expect(ApiEndPointTextMW.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/6cdda0b9-817f-481a-9a64-516385cd61a9/96ad0ad6-f459-4bd2-ba2c-6770d66db98b');
    }

    async ApiEndPointTextValidationMW4() {
        const ApiEndPointElementMW = await this.getApiEndPointMW();
        const ApiEndPointTextMW = await ApiEndPointElementMW.inputValue();
        expect(ApiEndPointTextMW.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/a5378c58-cb2d-47cc-90c6-cb9afe53854b/6f0cba00-701f-4218-a4bb-83f890718058');
    }

    async validateCopyButtonFunctionality1() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText1 = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText1 = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl1 = 'https://stage.readiplatform.com/storageapi/api/v1/execute/6cdda0b9-817f-481a-9a64-516385cd61a9/96ad0ad6-f459-4bd2-ba2c-6770d66db98b';
        expect(clipboardText1.trim()).toBe(expectedUrl1);
    }

    async validateCopyButtonFunctionality14() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText1 = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText1 = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl1 = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/a5378c58-cb2d-47cc-90c6-cb9afe53854b/6f0cba00-701f-4218-a4bb-83f890718058';
        expect(clipboardText1.trim()).toBe(expectedUrl1);
    }

    async ApiEndPointTextValidationQueueMW() {
        const ApiEndPointElement1MW = await this.getApiEndPointQueue();
        const ApiEndPointText1MW = await ApiEndPointElement1MW.inputValue();
        expect(ApiEndPointText1MW.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/6cdda0b9-817f-481a-9a64-516385cd61a9/e25a94f7-1180-42ea-9363-9f6501be557d');
    }

    async ApiEndPointTextValidationQueueMW4() {
        const ApiEndPointElement1MW = await this.getApiEndPointQueue();
        const ApiEndPointText1MW = await ApiEndPointElement1MW.inputValue();
        expect(ApiEndPointText1MW.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/a5378c58-cb2d-47cc-90c6-cb9afe53854b/e3b844e1-0846-425b-aedd-cae6892b27ea');
    }

    async clickOnTeamWorkspaces() {
        await this.base.waitAndClick(this.Elements.TeamWorkspaces);
    }

    async clickOnAchalTeamWorkspace() {
        await this.base.waitAndClick(this.Elements.achalTeamWorkspace);
    }

    async clickOnRootTeamWorkspaces() {
        await this.base.waitAndClick(this.Elements.rootTeamWorkspaces);
    }

    async clickOnRootTeamWorkspaces4() {
        await this.base.waitAndClick(this.Elements.rootTeamWorkspaces4);
    }

    async clickOnRootTeamWorkspaces1() {
        await this.base.waitAndClick(this.Elements.rootTeamWorkspaces1);
    }

    async clickOnDataTableTeamWorkspaces() {
        await this.base.waitAndClick(this.Elements.dataTableTeamWorkspaces);
    }

    async clickOnDataTableTeamWorkspaces4() {
        await this.base.waitAndClick(this.Elements.dataTableTeamWorkspaces4);
    }

    async getApiEndPointTW() {
        await this.page.waitForSelector(this.Elements.txtScriptUrl, { timeout: 7000 });
        return this.page.locator(this.Elements.txtScriptUrl);
    }

    async ApiEndPointTextValidationTW() {
        const ApiEndPointElementTW = await this.getApiEndPointTW();
        const ApiEndPointTextTW = await ApiEndPointElementTW.inputValue();
        expect(ApiEndPointTextTW.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/8c7e83f1-83ca-4d01-927b-3e68fb667e35/8a440532-fa73-4fc3-a5ea-3b2643ee203a');
    }

    async ApiEndPointTextValidationTW4() {
        const ApiEndPointElementTW = await this.getApiEndPointTW();
        const ApiEndPointTextTW = await ApiEndPointElementTW.inputValue();
        expect(ApiEndPointTextTW.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/00f554fb-6e66-4fb8-a7e2-8465f00347de/94f0358f-deeb-4882-b368-df95ed9493ce');
    }

    async validateCopyButtonFunctionality2() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText12 = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText12 = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl12 = 'https://stage.readiplatform.com/storageapi/api/v1/execute/8c7e83f1-83ca-4d01-927b-3e68fb667e35/8a440532-fa73-4fc3-a5ea-3b2643ee203a';
        expect(clipboardText12.trim()).toBe(expectedUrl12);
    }

    async validateCopyButtonFunctionality24() {
        await this.clickApiEndPointCopyButton();
        await this.clickOnOkbutton();
        const clipboardText12 = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
        // const clipboardText12 = await this.page.evaluate(() => navigator.clipboard.readText());
        const expectedUrl12 = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/00f554fb-6e66-4fb8-a7e2-8465f00347de/94f0358f-deeb-4882-b368-df95ed9493ce';
        expect(clipboardText12.trim()).toBe(expectedUrl12);
    }

    async ApiEndPointTextValidationQueueTW() {
        const ApiEndPointElement1TW = await this.getApiEndPointQueue();
        const ApiEndPointText1TW = await ApiEndPointElement1TW.inputValue();
        expect(ApiEndPointText1TW.trim()).toBe('https://stage.readiplatform.com/storageapi/api/v1/execute/8c7e83f1-83ca-4d01-927b-3e68fb667e35/26d6e155-5cd0-4257-9ec7-b7e0923fcd34');
    }

    async ApiEndPointTextValidationQueueTW4() {
        const ApiEndPointElement1TW = await this.getApiEndPointQueue();
        const ApiEndPointText1TW = await ApiEndPointElement1TW.inputValue();
        expect(ApiEndPointText1TW.trim()).toBe('https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/00f554fb-6e66-4fb8-a7e2-8465f00347de/6628cc89-580d-4d91-a9e9-7a6cb1e63974');
    }

    async verifyCopyButtonDisabled() {
        const isDisabled = await this.page.isDisabled(this.Elements.apiEndPointCopyButtonParent);
        expect(isDisabled).toBe(true);
    }

    async verifyCredentialDropDownIsDisabled() {
        const isDisabled1 = await this.page.isDisabled(this.Elements.connectIdsDisable);
        expect(isDisabled1).toBe(true);
    }

    async verifyCredentialCheckboxIsDisabled() {
        const isDisabled2 = await this.page.isDisabled(this.Elements.checkboxsDisable);
        expect(isDisabled2).toBe(true);
    }

    async verifyPermisssionCheckboxIsDisabled() {
        const isDisabled3 = await this.page.isDisabled(this.Elements.permisssionCheckboxsDisable);
        expect(isDisabled3).toBe(true);
    }

    async verifyPermisssionCheckboxIsDisabledDT() {
        const isDisabled4 = await this.page.isDisabled(this.Elements.permisssionCheckboxsDTDisable);
        expect(isDisabled4).toBe(true);
    }

    async verifyPermisssionCheckboxIsDisabledQueue() {
        const isDisabled5 = await this.page.isDisabled(this.Elements.permisssionCheckboxsQueueDisable);
        expect(isDisabled5).toBe(true);
    }

    async verifyCredentialDropDownIsDisabledSB() {
        const isDisabled6 = await this.page.isDisabled(this.Elements.useconnectIDsDisableSB);
        expect(isDisabled6).toBe(true);
    }

    async clickOnCrossIcon() {
        try {
            const crossButton = this.page.locator(this.Elements.crossIcon);
            await crossButton.waitFor({ state: 'visible', timeout: 10000 });
            await crossButton.click();
            await this.page.waitForTimeout(2000);
            console.log('Cross icon clicked successfully.');
        } catch (error) {
            console.log('Cross icon not visible within 10 seconds, moving forward.');
        }
    }

}