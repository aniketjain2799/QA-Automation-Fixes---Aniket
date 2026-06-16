import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";


export default class DynamicUserCreationPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        dynamicUserCreation: "//a[normalize-space()='DynamicUserCreation']",
        dynamicuser: "(//a[normalize-space()='dynamicuser'])[1]",
        logview5: "//div[normalize-space()='logview5']",
        dynamicuseremail: "//td[normalize-space()='achal.dynamic@outlook.com']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        globalSettings: "//a[normalize-space()='Global Settings']",
        team: "(//a[normalize-space()='Team'])[1]",
        manageRoles: "//span[@title='Manage roles']",
        plusIcon: "div[id='customRoleModal'] i[class='fas fa-plus-circle add-icon action-icon']",
        dynamicUser: "//a[@id='btnAddNewExternalCustomRole']",
        roleName1: "(//input[@placeholder='Role name1'])[1]",
        okButton: "//button[@id='btnSaveCustomRole']",
        okButton1: "//button[@id='alertify-ok']",
        settingIcon: "//span[@id='settings_8']",
        script: "(//input[@id='txtScriptQueryBuilder'])[1]",
        scriptSelect: "(//div[contains(text(),'/My Workspace/DynamicUserCreation/dynamicuser')])[1]",
        scriptSelect1: "(//div[contains(text(),'/Environments/Global_Env_Automation/Root/DynamicUserCreation/dynamicuser')])[1]",
        logview5Verification: "//span[@title='logview5']",
        column: "//div[@id='dvRetrieveDataControls']//div//span//ul",
        upn: "//li[normalize-space()='UPN']",
        refresh: "//button[@id='btnGetExternalUsers']//i",
        emailVerification: "//li[normalize-space()='achal.dynamic@outlook.com']",
        ok2: "//button[@id='btnSaveExternalRoleConfiguration']",
        MainemailVerification: "(//td[@role='gridcell'][normalize-space()='achal.dynamic@outlook.com'])[1]",
        emailFilterBox: "(//input[@aria-label='Filter cell'])[4]",
        MainemailVerification3: "(//td[@role='gridcell'][normalize-space()='achal.dynamic2025@outlook.com'])[3]",
        role: "//a[normalize-space()='0dynamic']",
        role3: "//a[normalize-space()='01dynamic000']",
        removeButton: "(//span[@class='fas fa-minus-circle remove-icon'])[1]",
        globalDynamicUserAutomation1: "//a[normalize-space()='GlobalDynamicUserAutomation1']",
        permision: "a[href='#'][rel='2']",
        emailInput: "//input[@id='txtUserEmailEnvSharing']",
        searchBar: "//i[@id='btnSearchUserEnvSharing']",
        addIcon: "//i[@id='btnAddUserEnvSharing']",
        okButtonPermission: "//button[@id='btnSavePermissionChangesEnvSharing']",
        revokeAccess: "//button[contains(@title,'Revoke Access')]",
        GlobalDynamicUserAutomation2: "//a[normalize-space()='GlobalDynamicUserAutomation2']",
        root: "//a[@id='31bcd20d-4c09-4f92-a50d-8157359d629c_00000000-0000-0000-0000-000000000000_anchor']",
        root4: "//a[@id='b77da3d7-9e62-4cab-8757-cd50067d4996_00000000-0000-0000-0000-000000000000_anchor']",
        root3: "//a[@id='b77da3d7-9e62-4cab-8757-cd50067d4996_00000000-0000-0000-0000-000000000000_anchor']",
        botRun: "(//a[normalize-space()='BotRun'])[1]",
        environments: "a[id='93cdc022-c275-4951-a7d1-86d485adfbc5_anchor']",
        autoSuggestiveEmailList: "//ul[@class='userAutoSuggestionListEnvSharing']",
        environmentsDU: "(//a[normalize-space()='Environments'])[1]",
        GlobalDynamicUserAutomation1DU: "(//a[normalize-space()='GlobalDynamicUserAutomation1'])[1]",
        rootDU: "(//a[normalize-space()='Root'])[1]",
        BotRunDU: "(//a[contains(@href,'#')][normalize-space()='BotRun'])[1]",
        nameToday1110: "//td[normalize-space()='Name_Today111 - 0']",
        nameToday1119: "//td[normalize-space()='Name_Today111 - 9']",
        totalPageCount: "(//div[normalize-space()='Page 1 of 1 (10 items)'])[1]",
        exportAsExcel: "//div[contains(text(),'Export as Excel')]",
        rawData0: "(//div[normalize-space()='Raw Data-0'])[1]",
        humburgerMenu: "//div[@id='PortalIcon']",
        botStudio: "(//span[normalize-space()='Bot studio'])[1]",
        BotRun: "(//span[normalize-space()='BotRun'])[1]",
        roleName: "(//input[@id='roleName_7'])[1]",
        removeIcon: "(//span[@class='fas fa-minus-circle remove-icon'])[1]",
        alertOkButton: "//button[@id='alertify-ok']",
        personal: "//span[@title='Personal']",
        environment: "//li[contains(text(),'Environment')]",
        workspace: "(//span[@id='select2-ddlWorkspaceList-container'])[1]",
        global_Env_Automation: "//li[normalize-space()='Global_Env_Automation']",

    };


    async clickOnDynamicUserCreation() {
        await this.base.waitAndClick(this.Elements.dynamicUserCreation);
    }

    async clickOnDynamicuser() {
        await this.base.waitAndClick(this.Elements.dynamicuser);
    }

    async clickOnLogview5() {
        await this.base.waitAndClick(this.Elements.logview5);
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

    async getDynamicuseremailValidation() {
        await this.page.waitForSelector(this.Elements.dynamicuseremail, { timeout: 45000 });
        return this.page.locator(this.Elements.dynamicuseremail);
    }

    async validateDynamicuseremailText() {
        const emailVerification1 = await this.getDynamicuseremailValidation();
        await expect(emailVerification1).toContainText('achal.dynamic@outlook.com');
    }

    async clickOnGlobalSettings() {
        await this.base.waitAndClick(this.Elements.globalSettings);
    }

    async clickOnTeam() {
        await this.base.waitAndClick(this.Elements.team);
    }

    async clickOnManageRoles() {
        // Wait for any spinner from previous step (modal close) to appear then fully complete
        try {
            await this.page.waitForSelector("//div[@class='custom_spinner']", { state: 'visible', timeout: 10000 });
            await this.page.waitForSelector("//div[@class='custom_spinner']", { state: 'hidden', timeout: 60000 });
        } catch { /* no spinner or already cleared */ }
        const modal = this.page.locator("//div[@id='customRoleModal']");
        const isModalOpen = await modal.isVisible().catch(() => false);
        if (isModalOpen) {
            // Modal still open (post-creation state) — role already visible, no need to reopen
            return;
        }
        await this.base.waitAndClick(this.Elements.manageRoles);
        // Wait for modal loading spinner to fully complete before returning
        try {
            await this.page.waitForSelector("//div[@class='custom_spinner']", { state: 'visible', timeout: 10000 });
            await this.page.waitForSelector("//div[@class='custom_spinner']", { state: 'hidden', timeout: 60000 });
        } catch { /* spinner may not appear */ }
    }

    async clickOnPlusIcon() {
        // Dismiss alertify error alert if present (e.g., server error after role deletion)
        const alertOk = this.page.locator(this.Elements.alertOkButton);
        const isAlertVisible = await alertOk.isVisible({ timeout: 3000 }).catch(() => false);
        if (isAlertVisible) {
            await alertOk.click();
            await this.page.waitForTimeout(1000);
            console.log('Dismissed alertify alert before clicking Plus Icon');
        }
        await this.base.waitAndClick(this.Elements.plusIcon);
    }

    async clickOnDynamicUser() {
        await this.base.waitAndClick(this.Elements.dynamicUser);
    }

    async EnterRollName(rollName: string) {
        await this.page.locator(this.Elements.roleName1).fill(rollName);
    }

    async clickOnOkButton() {
        await this.base.waitAndClick(this.Elements.okButton);
    }

    async clickOnSettingIcon() {
        await this.base.waitAndClick(this.Elements.settingIcon);
    }

    async clickOnOkButton1() {
        await this.base.waitAndClick(this.Elements.okButton1);
    }

    async EnterScript(Script1: string) {
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.Elements.script).fill(Script1);
    }

    async clickOnScriptSelect() {
        await this.page.waitForTimeout(1000);
        await this.base.waitAndClick(this.Elements.scriptSelect);
    }

    async clickOnScriptSelect1() {
        await this.page.waitForTimeout(1000);
        await this.base.waitAndClick(this.Elements.scriptSelect1);
    }

    async getLogview5Validation() {
        await this.page.waitForSelector(this.Elements.logview5Verification, { timeout: 45000 });
        return this.page.locator(this.Elements.logview5Verification);
    }

    async ValidateLogview5Text() {
        const logviewVerification = await this.getLogview5Validation();
        await expect(logviewVerification).toContainText('logview5');
    }

    async clickOnColumn() {
        await this.base.waitAndClick(this.Elements.column);
    }

    async clickOnUpn() {
        await this.page.waitForTimeout(1000);
        await this.base.waitAndClick(this.Elements.upn);
        await this.page.waitForTimeout(3000);
    }

    async clickOnRefresh() {
        await this.base.waitAndClick(this.Elements.refresh);
        await this.page.waitForTimeout(3000);
    }

    async getEmailValidation() {
        await this.page.waitForSelector(this.Elements.emailVerification, { timeout: 45000 });
        return this.page.locator(this.Elements.emailVerification);
    }

    async ValidateEmailText() {
        const emailVerification2 = await this.getEmailValidation();
        await expect(emailVerification2).toContainText('achal.dynamic@outlook.com');
    }

    async clickOnOk2() {
        await this.base.waitAndClick(this.Elements.ok2);
    }

    async getMainEmailValidation() {
        await this.page.waitForSelector(this.Elements.MainemailVerification, { state: 'attached', timeout: 45000 });
        return this.page.locator(this.Elements.MainemailVerification).first();
    }

    async ValidateMainEmailText() {
        const emailLocator = await this.getMainEmailValidation();
        const text = await emailLocator.textContent();
        expect(text?.trim()).toContain('achal.dynamic@outlook.com');
        console.log('✓ Email validation successful: achal.dynamic@outlook.com is displayed');
    }

    async filterByEmail3(email: string) {
        await this.page.locator(this.Elements.emailFilterBox).clear();
        await this.page.locator(this.Elements.emailFilterBox).fill(email);
        await this.page.waitForTimeout(2000);
        console.log(`Filtered by email: ${email}`);
    }

    async getMainEmailValidation3() {
        await this.page.waitForSelector(this.Elements.MainemailVerification3, { timeout: 45000 });
        return this.page.locator(this.Elements.MainemailVerification3);
    }

    async ValidateMainEmailText3() {
        const emailVerification31 = await this.getMainEmailValidation3();
        await expect(emailVerification31).toContainText('achal.dynamic2025@outlook.com');
        console.log('✓ Email validation successful: achal.dynamic2025@outlook.com is displayed');
    }

    async getRoleValidation() {
        await this.page.waitForSelector(this.Elements.role, { timeout: 45000 });
        return this.page.locator(this.Elements.role);
    }

    async getRoleValidation3() {
        await this.page.waitForSelector(this.Elements.role3, { timeout: 45000 });
        return this.page.locator(this.Elements.role3);
    }

    async ValidateRoleValidationText() {
        const emailVerification4 = await this.getRoleValidation();
        await expect(emailVerification4).toContainText('0dynamic');
    }

    async ValidateRoleValidationText3() {
        const emailVerification43 = await this.getRoleValidation3();
        await expect(emailVerification43).toContainText('01dynamic000');
        console.log('✓ Role validation successful: 01dynamic000 is displayed');
    }

    async refreshPage() {
        await this.page.waitForTimeout(60000);
        await this.base.refreshPage();
        await this.page.waitForTimeout(10000);
    }

    async clickOnRemoveButton() {
        await this.base.waitAndClick(this.Elements.removeButton);
    }

    async rightClickOnGlobalDynamicUserAutomation1() {
        await new Promise(resolve => setTimeout(resolve, 8000));
        const rightElement = await this.page.locator(this.Elements.globalDynamicUserAutomation1);
        await rightElement.click({ button: "right" });
        await this.page.waitForTimeout(1000);
    }

    async clickOnPermision() {
        await this.base.waitAndClick(this.Elements.permision);
    }

    async clickDyanmicUserEmail() {
        await this.page.keyboard.down('Control');
        await this.base.waitAndClick(this.Elements.emailInput);
        await this.page.keyboard.up('Control');
    }

    async EnterDyanmicUserEmail(DyanmicUserEmail: string) {
        await this.page.locator(this.Elements.emailInput).fill(DyanmicUserEmail);
        await this.page.waitForTimeout(4000);
    }

    async clickOnEnvironments() {
        await this.base.waitAndClick(this.Elements.environments);
    }

    async clickOnSearchBar() {
        await this.base.waitAndClick(this.Elements.searchBar);
    }

    async clickOnAddIcon() {
        await this.base.waitAndClick(this.Elements.addIcon);
    }

    async clickOnOkButtonPermission() {
        await this.base.waitAndClick(this.Elements.okButtonPermission);
    }

    async ClickOnGlobalDynamicUserAutomation2() {
        await this.base.waitAndClick(this.Elements.GlobalDynamicUserAutomation2);
    }

    async clickOnRoot() {
        await this.base.waitAndClick(this.Elements.root);
    }

    async clickOnRoot4() {
        await this.base.waitAndClick(this.Elements.root4);
    }

    async clickOnRoot3() {
        await this.base.waitAndClick(this.Elements.root3);
    }

    async clickOnBotRun() {
        await this.base.waitAndClick(this.Elements.botRun);
    }

    async clickOnAutoSuggestiveEmailList() {
        await this.base.waitAndClick(this.Elements.autoSuggestiveEmailList);
    }

    async clickOnEnvironmentsDU() {
        await this.base.waitAndClick(this.Elements.environmentsDU);
    }

    async clickOnGlobalDynamicUserAutomation1DU() {
        await this.base.waitAndClick(this.Elements.GlobalDynamicUserAutomation1DU);
    }

    async clickOnRootDU() {
        await this.base.waitAndClick(this.Elements.rootDU);
    }

    async clickOnBotRunDU() {
        await this.base.waitAndClick(this.Elements.BotRunDU);
    }

    async getNameToday1110ValidationRaw1() {
        await this.page.waitForSelector(this.Elements.nameToday1110, { timeout: 45000 });
        return this.page.locator(this.Elements.nameToday1110);
    }

    async validateNameToday1110TextRaw1() {
        const lastRowCount = await this.getNameToday1110ValidationRaw1();
        await expect(lastRowCount).toContainText('Name_Today111 - 0');
    }

    async getNameToday1119ValidationRaw9() {
        await this.page.waitForSelector(this.Elements.nameToday1119, { timeout: 45000 });
        return this.page.locator(this.Elements.nameToday1119);
    }

    async validateNameToday1119TextRaw9() {
        const lastRowCount = await this.getNameToday1119ValidationRaw9();
        await expect(lastRowCount).toContainText('Name_Today111 - 9');
    }

    async getTotalPageCountValidation() {
        await this.page.waitForSelector(this.Elements.totalPageCount, { timeout: 45000 });
        return this.page.locator(this.Elements.totalPageCount);
    }

    async TotalPageCountText() {
        const lastRowCount = await this.getTotalPageCountValidation();
        await expect(lastRowCount).toContainText('Page 1 of 1 (10 items)');
    }

    async clickOnExportAsExcel() {
        await this.base.waitAndClick(this.Elements.exportAsExcel);
    }

    async clickOnRawData0() {
        await this.base.waitAndClick(this.Elements.rawData0);
    }

    async rightClickOnNameTest() {
        await new Promise(resolve => setTimeout(resolve, 8000));
        const rightElement = await this.page.locator(this.Elements.nameToday1119);
        await rightElement.click({ button: "right" });
        await this.page.waitForTimeout(1000);
    }

    async clickOnHumburgerMenu() {
        await this.page.waitForTimeout(30000);
        await this.page.waitForSelector(this.Elements.humburgerMenu, { timeout: 30000 });
        await this.base.waitAndClick(this.Elements.humburgerMenu);
        await this.page.waitForTimeout(3000);
    }

    async clickOnBotStudio() {
        await this.page.goto(process.env.BASEURL || '');
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);

        const envLocator = this.page.locator(this.Elements.environmentsDU);
        if (!await envLocator.isVisible({ timeout: 3000 }).catch(() => false)) {
            console.log('[clickOnBotStudio] jstree panel collapsed — finding splitter and expanding');
            const expandResult = await this.page.evaluate(() => {
                const $ = (window as any).jQuery || (window as any).$;
                if (!$) return 'no jQuery';
                const allPanels = Array.from(document.querySelectorAll('.jqx-widget-content'));
                const collapsedPanel = allPanels.find(el => el.getBoundingClientRect().width === 0 && el.getBoundingClientRect().height > 0);
                if (!collapsedPanel) return 'no collapsed panel found';
                const splitterEl = collapsedPanel.parentElement;
                if (!splitterEl) return 'no parent element';
                const splitterClass = splitterEl.className;
                for (let i = 0; i <= 1; i++) {
                    try {
                        $(splitterEl).jqxSplitter('expand', i);
                        return `expanded panel ${i} on ${splitterClass}`;
                    } catch (e) {}
                }
                const jqxReset = $('.jqx-reset').first();
                for (let i = 0; i <= 1; i++) {
                    try {
                        jqxReset.jqxSplitter('expand', i);
                        return `expanded panel ${i} on jqx-reset`;
                    } catch (e) {}
                }
                (collapsedPanel as HTMLElement).style.cssText += ';width:250px!important;visibility:visible!important;';
                const jstreeDiv = collapsedPanel.querySelector('div.jstree') as HTMLElement | null;
                if (jstreeDiv) { jstreeDiv.style.display = 'block'; }
                return `forced CSS on ${splitterClass}`;
            });
            console.log('[clickOnBotStudio] expand result:', expandResult);
            await this.page.waitForTimeout(2000);
        }

        await this.page.waitForSelector(this.Elements.environmentsDU, { timeout: 30000 });
    }

    async clickOnBotRunDu() {
        console.log('[clickOnBotRunDu] URL before:', this.page.url());
        // Wait 5s for page to settle after the portal sidebar opens (clicking hamburger causes a brief refresh)
        await this.page.waitForTimeout(5000);
        console.log('[clickOnBotRunDu] URL after 5s delay:', this.page.url());
        // Now click Properties to navigate to scriptTab
        const propertiesLocator = this.page.locator("//li[@role='tab']//div//div[contains(text(),'Properties')]");
        await propertiesLocator.waitFor({ state: 'visible', timeout: 30000 });
        const propertiesAlreadyActive = await this.page.locator("//li[@role='tab' and @aria-selected='true']//div//div[contains(text(),'Properties')]").isVisible().catch(() => false);
        console.log('[clickOnBotRunDu] Properties already active:', propertiesAlreadyActive);
        if (!propertiesAlreadyActive) {
            await propertiesLocator.click();
            console.log('[clickOnBotRunDu] URL after Properties click:', this.page.url());
        }
    }

    async isRolePresent(expectedRoleName: string): Promise<boolean> {
        await this.page.waitForTimeout(3000);
        const allRoleInputs = this.page.locator("//input[starts-with(@id, 'roleName')]");
        await this.page.waitForTimeout(30000);

        const elementCount = await allRoleInputs.count();
        console.log(`Role locator count: ${elementCount}`);

        for (let i = 0; i < elementCount; i++) {
            const roleNameText = (await allRoleInputs.nth(i).inputValue()).trim();
            console.log(`Extracted role name [${i}]: '${roleNameText}'`);
            if (roleNameText.toLowerCase() === expectedRoleName.toLowerCase()) {
                return true;
            }
        }
        if (elementCount === 0) {
            console.log("Role name element not found.");
        }
        return false;
    }

    async deleteRole(): Promise<void> {
        const deleteIconLocator = this.page.locator(this.Elements.removeIcon);
        const confirmButtonLocator = this.page.locator(this.Elements.alertOkButton);
        const confirmAgainButtonLocator = this.page.locator(this.Elements.okButton);
        await deleteIconLocator.click();
        console.log("Clicked the delete icon.");
        await confirmButtonLocator.click();
        console.log("Confirmed deletion.");
        await confirmAgainButtonLocator.click();
    }

    async clickOnPersonal() {
        await this.base.waitAndClick(this.Elements.personal);
    }

    async clickOnEnvironment() {
        await this.base.waitAndClick(this.Elements.environment);
    }

    async clickOnTestEnv11() {
        await this.base.waitAndClick(this.Elements.workspace);
    }

    async clickOnGlobal_Env_Automation() {
        await this.base.waitAndClick(this.Elements.global_Env_Automation);
    }

}