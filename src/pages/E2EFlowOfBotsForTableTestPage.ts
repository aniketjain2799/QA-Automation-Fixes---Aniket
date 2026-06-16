import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class BotForTableTestPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
        existingEnvironment: "//a[normalize-space()='TestAutomation_BotForTableTest']",
        root: "//a[@id='8aa65fca-9afa-40a1-a0ce-07ce08f4bf29_00000000-0000-0000-0000-000000000000_anchor']",
        root4: "//a[@id='32562fa8-0327-4e52-8c24-ab935040ebca_00000000-0000-0000-0000-000000000000_anchor']",
        tableTests: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Table Tests']",
        tableTests1: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Table Tests1']",
        connectIDFolder: "(//a[normalize-space()='ConnectID'])[1]",
        BFTTFolder: "//a[normalize-space()='Bot For Table Tests']",
        startBot: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='Start']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        totalItemsDequeued: "(//li[contains(text(), 'Total Items Dequeued : 5')])[1]",
        ps7: "(//li[contains(text(), 'PS7 Sub-process started')])[1]",
        startJobsObject: "//li[@role='treeitem']//a[@href='#'][normalize-space()='start jobs object']",
        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        showExecutionLog: "//span[normalize-space()='Show execution log']",
        startJobsCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='start jobs csv']",
        updateWithObject: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Update with object']",
        updateWithForceObject: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Update with force object']",
        updateWithoutForceObject: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='Update Without force object']",
        updateWithCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Update with csv']",
        updateWithForceCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Update with force csv']",
        updateWithoutForceCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Update Without force csv']",
        removeFromObject: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Remove from object']",
        removeFromCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Remove from csv']",
        get: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Get']",
        run: "//span[normalize-space()='Run']",
        runYes: "//button[@id='btnRunScriptWithoutParameters']",
        scriptDescriptionName: "//input[@id='txtScriptDescription']",
        closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
        addithObject: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Add with object']",
        addithCsv: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Add with csv']",
        initializedWithObjectData: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Initialized with object data']",
        initializedWithCsvData: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Initialized with csv data']",
        rawData1: "//div[normalize-space()='Raw Data-1']",
        display100ItemsR1: "(//div[@aria-label='Display 100 items on page'][normalize-space()='100'])[1]",
        display100ItemsR3: "(//div[@aria-label='Display 100 items on page'][normalize-space()='100'])[2]",
        totalRecordsR1: "//div[normalize-space()='Page 1 of 50 (5000 items)']",
        totalRecordsR3: "//div[normalize-space()='Page 1 of 53 (5250 items)']",
        pageno50: "//div[@aria-label='Page 50']",
        lastRecordText: "(//td[contains(text(), '4999')])[1]",
        rawData3: "//div[normalize-space()='Raw Data-3']",
        pageno53: "//div[@aria-label='Page 53']",
        pageno53R7: "(//div[@aria-label='Page 53'][normalize-space()='53'])[2]",
        lastRecordRowNoRaw3: "(//td[normalize-space()='NewNameFirst[5249]'])[1]",
        ScaryMovieTitle: "(//td[@role='gridcell'][normalize-space()='ScaryMovie'])[50]",
        rawData5: "//div[normalize-space()='Raw Data-5']",
        pageno105: "//div[@aria-label='Page 105']",
        totalRowsRaw5: "//div[normalize-space()='Page 1 of 105 (5240 items)']",
        userPrincipleNameColumnRaw5: "(//div[@role='presentation'][normalize-space()='User Principal Name'])[3]",
        rawData7: "//div[normalize-space()='Raw Data-7']",
        ScaryMovieTitleRaw7: "(//td[@role='gridcell'][normalize-space()='ScaryMovie'])[130]",
        userPrincipleNameRaw7: "(//td[@role='gridcell'][normalize-space()='NewName[5249]'])[3]",
        totalRowsRaw7: "//div[normalize-space()='Page 1 of 53 (5240 items)']",
        display100ItemsR7: "(//div[@aria-label='Display 100 items on page'][normalize-space()='100'])[4]",
        rawData9: "//div[normalize-space()='Raw Data-9']",
        totalRowsRaw9: "//div[normalize-space()='Page 1 of 110 (5490 items)']",
        pageno110: "//div[@aria-label='Page 110']",
        lastPageTitleR9: "(//td[@role='gridcell'][normalize-space()='TheMatrix'])[40]",
        lastPageDirectorR9: "(//td[@role='gridcell'][normalize-space()='JamesCamarron'])[40]",
        lastPageUserPrincipalNameR9: "(//td[normalize-space()='DemoName[5499]'])[1]",
        pageno106: "//div[@aria-label='Page 106']",
        PageTitleR9: "(//td[@role='gridcell'][normalize-space()='TheMatrix'])[50]",
        PageDirectorR9: "(//td[@role='gridcell'][normalize-space()='JamesCamarron'])[50]",
        Page106UserPrincipalNameR9: "(//td[normalize-space()='DemoName[5309]'])[1]",
        Page106TitleR9: "(//td[@role='gridcell'][normalize-space()='TheMatrix'])[50]",
        pageno107: "//div[@aria-label='Page 107']",
        Page107UserPrincipalNameR9: "(//td[normalize-space()='DemoName[5359]'])[1]",
        pageno108: "//div[@aria-label='Page 108']",
        Page108UserPrincipalNameR9: "(//td[normalize-space()='DemoName[5409]'])[1]",
        pageno109: "//div[@aria-label='Page 109']",
        Page109UserPrincipalNameR9: "(//td[normalize-space()='DemoName[5459]'])[1]",
        rawData11: "//div[normalize-space()='Raw Data-11']",
        totalRowsRaw11: "//div[normalize-space()='Page 1 of 110 (5490 items)']",
        pageno110R11: "(//div[@aria-label='Page 110'][normalize-space()='110'])[1]",
        lastPageTitleR11: "(//td[@role='gridcell'][normalize-space()='Interstellar'])[40]",
        lastPageDirectorR11: "(//td[@role='gridcell'][normalize-space()='CristopherNolan'])[40]",
        lastPageComposserR11: "(//td[@role='gridcell'][normalize-space()='HansZimmer'])[40]",
        lastPageUserPrincipalNameR11: "(//td[normalize-space()='DemoName[5499]'])[1]",
        initializedWithCsvDataTable: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Initialized with csv data']",
        initializedWithCsvDataHeader: "//div[normalize-space()='Initialized with csv data']",
        totalRowsTable1: "//div[normalize-space()='Page 1 of 110 (5490 items)']",
        pageno110Table1: "//div[@aria-label='Page 110']",
        PageTitleTable1: "(//td[@role='gridcell'][normalize-space()='Interstellar'])[40]",
        PageDirectorTable1: "(//td[@role='gridcell'][normalize-space()='CristopherNolan'])[40]",
        PageComposserTable1: "(//td[@role='gridcell'][normalize-space()='HansZimmer'])[40]",
        PageUserPrincipalNameTable1: "(//td[normalize-space()='DemoName[5499]'])[1]",
        initializedWithObjectDataTable2: "//a[normalize-space()='Initialized with object data']",
        initializedWithObjectDataHeader: "//div[normalize-space()='Initailized with object data']",
        Pageno100Table2: "//div[@aria-label='Display 100 items on page']",
        totalRowsRawTable2: "//div[normalize-space()='Page 1 of 105 (10490 items)']",
        page105Table2: "//div[@aria-label='Page 105']",
        PageComposerTable2: "(//td[@role='gridcell'][normalize-space()='HansZimmer'])[90]",
        existingProxyEnvironment: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_anchor']",
        existingProxyEnvironment4: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_anchor']",
        proxyRoot: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_00000000-0000-0000-0000-000000000000_anchor']",
        PproxyRoot: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_00000000-0000-0000-0000-000000000000_anchor']",
        actionBotStep2: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_a84750f8-3dd0-456b-bc91-30f5d3147cfe_anchor']",
        actionBotStep24: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_7dc424ab-b6ab-4703-b9ae-989e2cc0b6c6_anchor']",
        NBBot: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_7c87c9c6-7e54-420a-b497-344242f27a6d_anchor']",
        NBBot4: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_44bb971c-4535-40cb-898b-05a77298822f_anchor']",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
        tableTestL: "(//span[normalize-space()='Table Tests'])[1]",
        revokeAccess: "//button[@title='Revoke Access']//span",
        tableTestL1: "(//span[normalize-space()='Table Tests1'])[1]",

    };

    async clickExistingEnvironment() {
        await this.base.waitAndClick(this.Elements.existingEnvironment);
    }

    async clickExistingProxyEnvironment() {
        await this.base.waitAndClick(this.Elements.existingProxyEnvironment);
    }

    async clickExistingProxyEnvironment4() {
        await this.base.waitAndClick(this.Elements.existingProxyEnvironment4);
    }

    async clickOnRootFolder() {
        await this.base.waitAndClick(this.Elements.root);
    }

    async clickOnRootFolder4() {
        await this.base.waitAndClick(this.Elements.root4);
    }

    async clickOnProxyRootFolder() {
        await this.base.waitAndClick(this.Elements.proxyRoot);
    }

    async clickOnPProxyRootFolder() {
        await this.base.waitAndClick(this.Elements.PproxyRoot);
    }

    async clickOnActionBotStep2() {
        await this.base.waitAndClick(this.Elements.actionBotStep2);
    }

    async clickOnActionBotStep24() {
        await this.base.waitAndClick(this.Elements.actionBotStep24);
    }

    async clickOnNBBot() {
        await this.base.waitAndClick(this.Elements.NBBot);
    }

    async clickOnNBBot4() {
        await this.base.waitAndClick(this.Elements.NBBot4);
    }

    async clickOnCloseButton() {
        await this.base.waitAndClick(this.Elements.closeButton);
    }

    async clickOnTableTestFolder() {
        await this.base.waitAndClick(this.Elements.tableTests);
    }

    async clickOnTableTest1Folder() {
        await this.base.waitAndClick(this.Elements.tableTests1);
    }

    async clickOnConnectIdTestFolder() {
        await this.base.waitAndClick(this.Elements.connectIDFolder);
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
    }

    async clickScriptDescriptionName() {
        await this.page.waitForSelector(this.Elements.scriptDescriptionName, { state: 'visible', timeout: 100000 });
        await this.base.waitAndClick(this.Elements.scriptDescriptionName);
    }


    async clickOnBotsForTableTestFolder() {
        await this.base.waitAndClick(this.Elements.BFTTFolder);
    }

    async clickOnStartBot() {
        await this.base.waitAndClick(this.Elements.startBot);
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


    async getJobFinishedText(timeout = 1080000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getNoErrorText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.noError);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async getTotalItemsDequeuedText(timeout = 1080000) {
        const totalItemsDequeuedLocator = this.page.locator(this.Elements.totalItemsDequeued);
        await totalItemsDequeuedLocator.waitFor({ state: 'attached', timeout });
        return totalItemsDequeuedLocator.innerText();
    }

    async getPS7Text(timeout = 80000) {
        const PS7Locator = this.page.locator(this.Elements.ps7);
        await PS7Locator.waitFor({ state: 'attached', timeout });
        return PS7Locator.innerText();
    }

    async getProxyConnectIdText(timeout = 180000) {
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator.innerText();
    }

    async clickOnStartJobsObject() {
        await this.base.waitAndClick(this.Elements.startJobsObject);
    }

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async clickOnShowExecutionLogIfVisible() {
        try {
            await this.page.waitForSelector(this.Elements.showExecutionLog, { state: 'visible', timeout: 5000 });
            await this.base.waitAndClick(this.Elements.showExecutionLog);
        } catch (error) {
            console.log("Show execution log button is not visible.");
        }
    }

    async clickOnStartJobsCsv() {
        await this.base.waitAndClick(this.Elements.startJobsCsv);
    }

    async clickOnUpdateWithObject() {
        await this.base.waitAndClick(this.Elements.updateWithObject);
    }

    async clickOnUpdateWithForceObject() {
        await this.base.waitAndClick(this.Elements.updateWithForceObject);
    }

    async clickOnUpdateWithoutForceObject() {
        await this.base.waitAndClick(this.Elements.updateWithoutForceObject);
    }

    async clickOnUpdateWithCsv() {
        await this.base.waitAndClick(this.Elements.updateWithCsv);
    }

    async clickOnUpdateWithForceCsv() {
        await this.base.waitAndClick(this.Elements.updateWithForceCsv);
    }

    async clickOnUpdateWithoutForceCsv() {
        await this.base.waitAndClick(this.Elements.updateWithoutForceCsv);
    }

    async clickOnRemoveFromObject() {
        await this.base.waitAndClick(this.Elements.removeFromObject);
    }

    async clickOnRemoveFromCsv() {
        await this.base.waitAndClick(this.Elements.removeFromCsv);
    }

    async clickOnGet() {
        await this.base.waitAndClick(this.Elements.get);
    }

    async clickOnAddWithObject() {
        await this.base.waitAndClick(this.Elements.addithObject);
    }

    async clickOnAddWithCsv() {
        await this.base.waitAndClick(this.Elements.addithCsv);
    }

    async clickOnInitializedWithObjectData() {
        await this.base.waitAndClick(this.Elements.initializedWithObjectData);
    }

    async clickOnInitializedWithCsvData() {
        await this.base.waitAndClick(this.Elements.initializedWithCsvData);
    }

    async clickOnRawData1() {
        await this.base.waitAndClick(this.Elements.rawData1);
    }

    async clickOnDisplay100ItemsR1() {
        await this.base.waitAndClick(this.Elements.display100ItemsR1);
    }

    async clickOnDisplay100ItemsR3() {
        await this.base.waitAndClick(this.Elements.display100ItemsR3);
    }

    async clickOnPageno50() {
        await this.page.waitForSelector(this.Elements.pageno50, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno50);
    }

    async getTotalRowCountAssertionTextR1() {
        await this.page.waitForSelector(this.Elements.totalRecordsR1, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRecordsR1);
    }

    async getTotalRowCountAssertionTextR3() {
        await this.page.waitForSelector(this.Elements.totalRecordsR3, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRecordsR3);
    }

    async getLastRowEntryCountAssertionText() {
        await this.page.waitForSelector(this.Elements.lastRecordText, { timeout: 15000 });
        return this.page.locator(this.Elements.lastRecordText);
    }

    async validateTotalRowCountR1() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR1();
        await expect(totalRowCount).toContainText('Page 1 of 50 (5000 items)');
    }

    async validateTotalRowCountR3() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR3();
        await expect(totalRowCount).toContainText('Page 1 of 53 (5250 items)');
    }

    async validateLastRowEntryCount() {
        const lastRowCount = await this.getLastRowEntryCountAssertionText();
        await expect(lastRowCount).toContainText('4999');
    }

    async clickOnRawData3() {
        await this.base.waitAndClick(this.Elements.rawData3);
    }

    async clickOnPageno53() {
        await this.page.waitForSelector(this.Elements.pageno53, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno53);
    }

    async clickOnPageno53R7() {
        await this.page.waitForSelector(this.Elements.pageno53R7, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno53R7);
    }

    async getLastRowCountNoRaw3() {
        await this.page.waitForSelector(this.Elements.lastRecordRowNoRaw3, { timeout: 15000 });
        return this.page.locator(this.Elements.lastRecordRowNoRaw3);
    }

    async getTitleValidationRaw3() {
        await this.page.waitForSelector(this.Elements.ScaryMovieTitle, { timeout: 15000 });
        return this.page.locator(this.Elements.ScaryMovieTitle);
    }

    async validateLastRowEntryCountRaw3() {
        const lastRowCount = await this.getLastRowCountNoRaw3();
        await expect(lastRowCount).toContainText('5249');
    }

    async validateLastRowTitleTextRaw3() {
        const lastRowCount = await this.getTitleValidationRaw3();
        await expect(lastRowCount).toContainText('ScaryMovie ');
    }

    async clickOnRawData5() {
        await this.base.waitAndClick(this.Elements.rawData5);
    }

    async clickOnPageno105() {
        await this.page.waitForSelector(this.Elements.pageno105, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno105);
    }

    async getTotalRowCountAssertionTextR5() {
        await this.page.waitForSelector(this.Elements.totalRowsRaw5, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsRaw5);
    }

    async validateTotalRowCountR5() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR5();
        await expect(totalRowCount).toContainText('Page 1 of 105 (5240 items)');
    }

    async getColumnValidationRaw5() {
        await this.page.waitForSelector(this.Elements.userPrincipleNameColumnRaw5, { timeout: 15000 });
        return this.page.locator(this.Elements.userPrincipleNameColumnRaw5);
    }

    async validateRaw5Column() {
        const lastRowCount = await this.getColumnValidationRaw5();
        await expect(lastRowCount).toContainText('User Principal Name');
    }

    async clickOnRawData7() {
        await this.base.waitAndClick(this.Elements.rawData7);
    }

    async getTitleValidationRaw7() {
        await this.page.waitForSelector(this.Elements.ScaryMovieTitleRaw7, { timeout: 45000 });
        return this.page.locator(this.Elements.ScaryMovieTitleRaw7);
    }

    async validateLastRowTitleTextRaw7() {
        const lastRowCount = await this.getTitleValidationRaw7();
        await expect(lastRowCount).toContainText('ScaryMovie');
    }

    async getUserPrincipleNameValidationR7() {
        await this.page.waitForSelector(this.Elements.userPrincipleNameRaw7, { timeout: 45000 });
        return this.page.locator(this.Elements.userPrincipleNameRaw7);
    }

    async getUserPrincipleNameValidationRaw7() {
        const totalRowCount = await this.getUserPrincipleNameValidationR7();
        await expect(totalRowCount).toContainText('NewName[5249]');
    }

    async getTotalRowCountAssertionTextR7() {
        await this.page.waitForSelector(this.Elements.totalRowsRaw7, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsRaw7);
    }

    async validateTotalRowCountR7() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR7();
        await expect(totalRowCount).toContainText('Page 1 of 53 (5240 items)');
    }

    async clickOnDisplay100ItemsR7() {
        await this.base.waitAndClick(this.Elements.display100ItemsR7);
    }


    async clickOnRawData9() {
        await this.base.waitAndClick(this.Elements.rawData9);
    }

    async getTotalRowCountAssertionTextR9() {
        await this.page.waitForSelector(this.Elements.totalRowsRaw9, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsRaw9);
    }

    async validateTotalRowCountR9() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR9();
        await expect(totalRowCount).toContainText('Page 1 of 110 (5490 items)');
    }

    async clickOnPageno110() {
        await this.page.waitForSelector(this.Elements.pageno110, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno110);
    }

    async getlastPageTitleValidationRaw9() {
        await this.page.waitForSelector(this.Elements.lastPageTitleR9, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageTitleR9);
    }

    async validateLastRowTitleTextRaw9() {
        const lastRowCount = await this.getlastPageTitleValidationRaw9();
        await expect(lastRowCount).toContainText('TheMatrix');
    }


    async getlastPageDirectorValidationRaw9() {
        await this.page.waitForSelector(this.Elements.lastPageDirectorR9, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageDirectorR9);
    }

    async validateLastRowDirectorTextRaw9() {
        const lastRowCount = await this.getlastPageDirectorValidationRaw9();
        await expect(lastRowCount).toContainText('JamesCamarron');
    }


    async getlastPageUserPrincipalNameValidationRaw9() {
        await this.page.waitForSelector(this.Elements.lastPageUserPrincipalNameR9, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageUserPrincipalNameR9);
    }

    async validateLastRowUserPrincipalNameTextRaw9() {
        const lastRowCount = await this.getlastPageUserPrincipalNameValidationRaw9();
        await expect(lastRowCount).toContainText('DemoName[5499]');
    }

    async clickOnPageno106() {
        await this.page.waitForSelector(this.Elements.pageno106, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno106);
    }


    async getPageTitleValidationRaw9() {
        await this.page.waitForSelector(this.Elements.PageTitleR9, { timeout: 45000 });
        return this.page.locator(this.Elements.PageTitleR9);
    }

    async validateRowTitleTextRaw9() {
        const lastRowCount = await this.getPageTitleValidationRaw9();
        await expect(lastRowCount).toContainText('TheMatrix');
    }


    async getPageDirectorValidationRaw9() {
        await this.page.waitForSelector(this.Elements.PageDirectorR9, { timeout: 45000 });
        return this.page.locator(this.Elements.PageDirectorR9);
    }

    async validateRowDirectorTextRaw9() {
        const lastRowCount = await this.getPageDirectorValidationRaw9();
        await expect(lastRowCount).toContainText('JamesCamarron');
    }

    async getlastPage106UserPrincipalNameValidationRaw9() {
        await this.page.waitForSelector(this.Elements.Page106UserPrincipalNameR9, { timeout: 45000 });
        return this.page.locator(this.Elements.Page106UserPrincipalNameR9);
    }

    async validateRow106UserPrincipalNameTextRaw9() {
        const lastRowCount = await this.getlastPage106UserPrincipalNameValidationRaw9();
        await expect(lastRowCount).toContainText('DemoName[5309]');
    }

    async clickOnPageno107() {
        await this.page.waitForSelector(this.Elements.pageno107, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno107);
    }

    async getlastPage107UserPrincipalNameValidationRaw9() {
        await this.page.waitForSelector(this.Elements.Page107UserPrincipalNameR9, { timeout: 45000 });
        return this.page.locator(this.Elements.Page107UserPrincipalNameR9);
    }

    async validateRow107UserPrincipalNameTextRaw9() {
        const lastRowCount = await this.getlastPage107UserPrincipalNameValidationRaw9();
        await expect(lastRowCount).toContainText('DemoName[5359]');
    }


    async clickOnPageno108() {
        await this.page.waitForSelector(this.Elements.pageno108, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno108);
    }

    async getlastPage108UserPrincipalNameValidationRaw9() {
        await this.page.waitForSelector(this.Elements.Page108UserPrincipalNameR9, { timeout: 45000 });
        return this.page.locator(this.Elements.Page108UserPrincipalNameR9);
    }

    async validateRow108UserPrincipalNameTextRaw9() {
        const lastRowCount = await this.getlastPage108UserPrincipalNameValidationRaw9();
        await expect(lastRowCount).toContainText('DemoName[5409]');
    }


    async clickOnPageno109() {
        await this.page.waitForSelector(this.Elements.pageno109, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno109);
    }

    async getlastPage109UserPrincipalNameValidationRaw9() {
        await this.page.waitForSelector(this.Elements.Page109UserPrincipalNameR9, { timeout: 45000 });
        return this.page.locator(this.Elements.Page109UserPrincipalNameR9);
    }

    async validateRow109UserPrincipalNameTextRaw9() {
        const lastRowCount = await this.getlastPage109UserPrincipalNameValidationRaw9();
        await expect(lastRowCount).toContainText('DemoName[5459]');
    }

    async clickOnRawData11() {
        await this.page.waitForTimeout(5000);
        await this.base.waitAndClick(this.Elements.rawData11);
        await this.page.waitForTimeout(5000);
        await this.page.evaluate(() => {
            const element = document.evaluate("//div[normalize-space()='Raw Data-11']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;
            if (element) {
                element.click();
            }
        });
        await this.page.waitForTimeout(2000);
    }

    async getTotalRowCountAssertionTextR11() {
        await this.page.waitForSelector(this.Elements.totalRowsRaw11, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsRaw11);
    }

    async validateTotalRowCountR11() {
        const totalRowCount = await this.getTotalRowCountAssertionTextR11();
        await expect(totalRowCount).toContainText('Page 1 of 110 (5490 items)');
    }

    async clickOnPageno110R11() {
        await this.page.waitForSelector(this.Elements.pageno110R11, { timeout: 15000 });
        await this.base.waitAndClick(this.Elements.pageno110R11);
    }

    async getlastPageTitleValidationRaw11() {
        await this.page.waitForSelector(this.Elements.lastPageTitleR11, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageTitleR11);
    }

    async validateRowTitleTextRaw11() {
        const lastRowCount = await this.getlastPageTitleValidationRaw11();
        await expect(lastRowCount).toContainText('Interstellar');
    }


    async getlastPageDirectorValidationRaw11() {
        await this.page.waitForSelector(this.Elements.lastPageDirectorR11, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageDirectorR11);
    }

    async validateRowDirectorTextRaw11() {
        const lastRowCount = await this.getlastPageDirectorValidationRaw11();
        await expect(lastRowCount).toContainText('CristopherNolan');
    }

    async getlastPageComposserValidationRaw11() {
        await this.page.waitForSelector(this.Elements.lastPageComposserR11, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageComposserR11);
    }

    async validateRowComposserTextRaw11() {
        const lastRowCount = await this.getlastPageComposserValidationRaw11();
        await expect(lastRowCount).toContainText('HansZimmer');
    }

    async getlastPageUserPrincipalNameValidationRaw11() {
        await this.page.waitForSelector(this.Elements.lastPageUserPrincipalNameR11, { timeout: 45000 });
        return this.page.locator(this.Elements.lastPageUserPrincipalNameR11);
    }

    async validateRowUserPrincipalNameTextRaw11() {
        const lastRowCount = await this.getlastPageUserPrincipalNameValidationRaw11();
        await expect(lastRowCount).toContainText('DemoName[5499]');
    }

    async clickOIinitializedWithCsvDataTable() {
        await this.base.waitAndClick(this.Elements.initializedWithCsvDataTable);
    }

    async clickOInitializedWithCsvDataHeader() {
        await this.base.waitAndClick(this.Elements.initializedWithCsvDataHeader);
    }

    async getTotalRowsTable1() {
        await this.page.waitForSelector(this.Elements.totalRowsTable1, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsTable1);
    }

    async validateTotalRowsCountTable1() {
        const totalRowCount = await this.getTotalRowsTable1();
        await expect(totalRowCount).toContainText('Page 1 of 110 (5490 items)');
    }

    async clickOnPageNo110Table1() {
        await this.base.waitAndClick(this.Elements.pageno110Table1);
    }

    async getlastPageTitleValidationTable1() {
        await this.page.waitForSelector(this.Elements.PageTitleTable1, { timeout: 45000 });
        return this.page.locator(this.Elements.PageTitleTable1);
    }

    async validateRowTitleTextTable1() {
        const lastRowCount = await this.getlastPageTitleValidationTable1();
        await expect(lastRowCount).toContainText('Interstellar');
    }


    async getlastPageDirectorValidationTable1() {
        await this.page.waitForSelector(this.Elements.PageDirectorTable1, { timeout: 45000 });
        return this.page.locator(this.Elements.PageDirectorTable1);
    }

    async validateRowDirectorTextTable1() {
        const lastRowCount = await this.getlastPageDirectorValidationTable1();
        await expect(lastRowCount).toContainText('CristopherNolan');
    }


    async getlastPageComposserValidationTable1() {
        await this.page.waitForSelector(this.Elements.PageComposserTable1, { timeout: 45000 });
        return this.page.locator(this.Elements.PageComposserTable1);
    }

    async validateRowComposserTextTable1() {
        const lastRowCount = await this.getlastPageComposserValidationTable1();
        await expect(lastRowCount).toContainText('HansZimmer');
    }


    async getlastPageUserPrincipalNameValidationTable1() {
        await this.page.waitForSelector(this.Elements.PageUserPrincipalNameTable1, { timeout: 45000 });
        return this.page.locator(this.Elements.PageUserPrincipalNameTable1);
    }

    async validateRowUserPrincipalNameTextTable1() {
        const lastRowCount = await this.getlastPageUserPrincipalNameValidationTable1();
        await expect(lastRowCount).toContainText('DemoName[5499]');
    }


    async clickOnInitializedWithObjectDataTable2() {
        await this.base.waitAndClick(this.Elements.initializedWithObjectDataTable2);
    }

    async clickOnInitializedWithObjectDataHeader() {
        await this.base.waitAndClick(this.Elements.initializedWithObjectDataHeader);
    }

    async clickOnPageno100Table2() {
        await this.base.waitAndClick(this.Elements.Pageno100Table2);
    }

    async getTotalRowsTable2() {
        await this.page.waitForSelector(this.Elements.totalRowsRawTable2, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRowsRawTable2);
    }

    async validateTotalRowsCountTable2() {
        const totalRowCount = await this.getTotalRowsTable2();
        await expect(totalRowCount).toContainText('Page 1 of 105 (10490 items)');
    }


    async clickOnPageno105Table2() {
        await this.base.waitAndClick(this.Elements.page105Table2);
    }

    async getlastPageComposerValidationTable2() {
        await this.page.waitForSelector(this.Elements.PageComposerTable2, { timeout: 15000 });
        return this.page.locator(this.Elements.PageComposerTable2);
    }

    async validateRowComposerTextTable2() {
        const totalRowCount = await this.getlastPageComposerValidationTable2();
        await expect(totalRowCount).toContainText('HansZimmer');
    }

    async clickOnTableTestFolderL() {
        await this.base.waitAndClick(this.Elements.tableTestL);
    }

    async clickOnTableTestFolderL1() {
        await this.base.waitAndClick(this.Elements.tableTestL1);
    }

    async clickOnRevokeAccessIfPresent(): Promise<void> {
        const revokeAccessLocator = this.page.locator(this.Elements.revokeAccess);
    
        if (await revokeAccessLocator.isVisible()) {
            console.log("Revoke Access icon is present. Clicking on it.");
            await revokeAccessLocator.click();
        } else {
            console.log("Revoke Access icon is not present. Moving forward.");
        }
    }
    

}