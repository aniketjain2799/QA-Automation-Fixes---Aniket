import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class RBACRoleAccessPermissionPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        rBACRolesOwner: "(//span[normalize-space()='RBAC_Roles_Owner'])[1]",
        bot: "(//a[normalize-space()='Bot'])[1]",
        totalRows: "//div[contains(text(),'Page 1 of 1')]",
        dashboard: "//div[contains(text(),'Dashboard')]",
        productivityValue: "//div[normalize-space()='Productivity Value']",
        logView: "//div[normalize-space()='Log View']",
        showall: "//button[normalize-space()='Show all']",
        startDate: "//div[normalize-space()='Start Date']",
        restApi: "//label[normalize-space()='REST API']",
        execute: "//label[normalize-space()='Execute']",
        methodDropDown: "//span[@title='GET + QueryString']",
        postJson: "//li[normalize-space()='POST + JSON']",
        rBACRolesDeveloper: "//span[normalize-space()='RBAC_Roles_Developer']",
        rBACRolesActionUser: "//span[normalize-space()='RBAC_Roles_ActionUser']",
        rBACRolesPowerUser: "//span[normalize-space()='RBAC_Roles_PowerUser']",
        rBACRolesReviewerUser: "//span[normalize-space()='RBAC_Roles_Reviewer']",
        chkRunCCB1: "//label[@for='chkRunScriptWithSelectiveConnectIds']",
        use_connectID: "//label[@for='use_connectID']",
        sharingInherited: "//label[@for='sharingInherited']",
        chkAllreadibotsBots: "//label[@for='chkAllowScriptExecutionThroughPowershell']",
        chkAllowRead: "//label[@for='chkAllowScriptDataAccessThroughRestApi']",
        propertiesSection: "(//div[contains(text(),'Properties')])[1]",
        credentialsTab: "//div[contains(text(),'Credentials')]",
        permissionsTab: "(//div[contains(text(),'Permissions')])[1]",
        run: "//span[normalize-space()='Run']",
        notRunPermissionPopUp: "section[id='alertify'] p:nth-child(1)",
    };


    async clickOnRBACRolesOwner() {
        await this.base.waitAndClick(this.Elements.rBACRolesOwner);
    }

    async clickOnBot() {
        await this.base.waitAndClick(this.Elements.bot);
    }

    async clickOnRun() {
        await this.base.waitAndClick(this.Elements.run);
    }

    async getTotalRowsTable1() {
        await this.page.waitForSelector(this.Elements.totalRows, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRows);
    }

    async validateTotalRowsCountTable1() {
        const totalRowCount = await this.getTotalRowsTable1();
        await expect(totalRowCount).toContainText('Page 1 of 1');
    }

    async clickOnDashboard() {
        await this.base.waitAndClick(this.Elements.dashboard);
    }

    async getProductivityValueValidation() {
        await this.page.waitForSelector(this.Elements.productivityValue, { timeout: 15000 });
        return this.page.locator(this.Elements.productivityValue);
    }


    async ProductivityValueValidation() {
        const productivityValueLocator = await this.getProductivityValueValidation();
        await expect(productivityValueLocator).toContainText('Productivity Value');

    }

    async clickOnLogView() {
        await this.base.waitAndClick(this.Elements.logView);
    }

    async getShowallValidation() {
        await this.page.waitForSelector(this.Elements.showall, { timeout: 45000 });
        return this.page.locator(this.Elements.showall);
    }


    async ShowallValidationValidation() {
        const ShowallValidationLocator = await this.getShowallValidation();
        await expect(ShowallValidationLocator).toContainText('Show all');
    }


    async getStartDateValidation() {
        await this.page.waitForSelector(this.Elements.startDate, { timeout: 45000 });
        return this.page.locator(this.Elements.startDate);
    }


    async StartDateValidationValidation() {
        const StartDateValidationLocator = await this.getStartDateValidation();
        await expect(StartDateValidationLocator).toContainText('Start Date');
    }

    async clickonRestApi() {
        await this.base.waitAndClick(this.Elements.restApi);
    }

    async clickOnExecute() {
        await this.base.waitAndClick(this.Elements.execute);
    }
    async clickOnMethodDropDown() {
        await this.base.waitAndClick(this.Elements.methodDropDown);
    }

    async clickOnPostJson() {
        await this.base.waitAndClick(this.Elements.postJson);
    }

    async clickOnRBACRolesDeveloper() {
        await this.base.waitAndClick(this.Elements.rBACRolesDeveloper);
    }

    async clickOnRBACRolesActionUser() {
        await this.base.waitAndClick(this.Elements.rBACRolesActionUser);
    }

    async clickOnRBACRolesReviewerUser() {
        await this.base.waitAndClick(this.Elements.rBACRolesReviewerUser);
    }

    async clickOnRBACRolesPowerUser() {
        await this.base.waitAndClick(this.Elements.rBACRolesPowerUser);
    }

    async isChkRunCCB1Disabled() {
        const checkbox = await this.page.locator(this.Elements.chkRunCCB1);
        return checkbox.isDisabled();
    }

    async isRadioRunScriptWithSelectiveConnectIdsDisabled() {
        const radioButton = await this.page.locator(this.Elements.use_connectID);
        return radioButton.isDisabled();
    }

    async isChkSharingInheritedDisabled() {
        const checkbox = await this.page.locator(this.Elements.sharingInherited);
        return checkbox.isDisabled();
    }

    async ischkAllreadibotsBotsDisabled() {
        const radioButton = await this.page.locator(this.Elements.chkAllreadibotsBots);
        return radioButton.isDisabled();
    }

    async isChk1AllowReadDisabled() {
        const checkbox = await this.page.locator(this.Elements.chkAllowRead);
        return checkbox.isDisabled();
    }

    getDashboard() {
        return this.page.locator(this.Elements.dashboard);
    }

    getPropertiesSection() {
        return this.page.locator(this.Elements.propertiesSection);
    }

    getCredentialsTab() {
        return this.page.locator(this.Elements.credentialsTab);
    }

    getPermissionsTab() {
        return this.page.locator(this.Elements.permissionsTab);
    }

    async getNotRunPermissionPopUpValidation() {
        await this.page.waitForSelector(this.Elements.notRunPermissionPopUp, { timeout: 15000 });
        return this.page.locator(this.Elements.notRunPermissionPopUp);
    }


    async NotRunPermissionPopUpValidationValidation() {
        const NotRunPermissionPopUpValidationLocator = await this.getNotRunPermissionPopUpValidation();
        await expect(NotRunPermissionPopUpValidationLocator).toContainText("You don't have required permission to do this operation");

    }

}