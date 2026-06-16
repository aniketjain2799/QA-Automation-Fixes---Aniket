import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";



export default class CreateUpdateConnectIdPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {

        settings: "(//a[normalize-space()='Settings'])[1]",
        keyVault: "//a[normalize-space()='Key Vault']",
        addCredentials: "//button[@title='Add credentials']",
        txtNewConnectionName: "//input[@id='txtNewConnectionName']",
        txtNewConnectionUserId: "//input[@id='txtNewConnectionUserId']",
        txtNewConnectionPassword: "//input[@id='txtNewConnectionPassword']",
        btnAddNewConnection: "//button[@id='btnAddNewConnection']",
        achalCloud: "//td[normalize-space()='Achal-Cloud']",
        delete: "//button[@title='Delete']",
        Bot: "//a[@id='d7c1a886-9ef9-4b5d-bd18-80d5711bb318_c6adffb3-2599-4cc9-b349-e89dad9d4a8f_anchor']",
        Bot4: "//a[@id='726e03ad-12fb-479d-a619-fa3ee1d0d7ff_57ca3949-4d67-4a42-9b6d-56477acbabee_anchor']",
        credentials: "//div[contains(text(),'Credentials')]",
        use_connectID: "//label[@for='use_connectID']",
        dropDown: "(//span[@role='combobox'])[5]",
        dropDownAchalCloud: "//label[normalize-space()='Achal-Cloud']",
        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        deleteOk: "//button[@id='alertify-ok']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: Achal-Cloud\')]",
        edit: "//button[@title='Edit']",
        cloudLalit: "//td[normalize-space()='Cloud-Lalit']",
        cloudLalit1: "//td[normalize-space()='Cloud-Lalit1']",
        windowLalit1: "//td[normalize-space()='Window-Lalit1']",
        executeOn: "//span[@title='Cloud']",
        executeOn1: "//div[@id='divOnPremProxies']//span[@role='presentation']",
        qaTest2: "//li[normalize-space()='VMAutomationProxy']",
        connectIdRow: "//td[normalize-space()='{connectIdName}']",
        deleteButton: "//button[@title='Delete']",
        confirmDeleteButton: "//button[@id='alertify-ok']",
        ConnectIDCasesFolder: "(//a[normalize-space()='ConnectID_Cases'])[1]",
        bot1: "(//a[normalize-space()='Bot1'])[1]",
        bot2: "(//a[normalize-space()='Bot2'])[1]",
        bot3: "(//a[normalize-space()='Bot3'])[1]",
        dropDownTestautomation_Cloud: "//label[normalize-space()='Testautomation_Cloud']",
        proxyConnectId1: "//li[contains(text(), 'Using Connect IDs: Testautomation_Cloud\')]",
        dropDownTestautomation_Windows: "//label[normalize-space()='Testautomation_windows']",
        proxyConnectId2: "//li[contains(text(), 'Using Connect IDs: Testautomation_windows\')]",
        microsoftCloud: "//span[@title='Microsoft cloud']",
        windowsSystem: "//span[normalize-space()='Windows system']",
        testautomation_CloudUpdate: "//td[normalize-space()='Testautomation_UpdateCloud']",
        testautomation_WindowUpdate: "//td[normalize-space()='Testautomation_UpdateWindow']",
        ConnectIDNew1: "//li[normalize-space()='ConnectID_New1']",
        ConnectIDNew2: "//li[normalize-space()='ConnectID_New3']",
        ConnectIDNew3: "//li[span[contains(text(), 'ConnectID_New3')]]",
        combobox: "//tbody//span[@role='combobox']",
        run: "//span[normalize-space()='Run']",
        runYes: "//button[@id='btnRunScriptWithParameters']",
        scriptDescriptionName: "//input[@id='txtScriptDescription']",
        closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
        verificationMultiConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_New1,ConnectID_New3\')]",

    };



    async clickOnSettings() {
        await this.page.waitForTimeout(10000);
        await this.base.waitAndClick(this.Elements.settings);
    }

    async clickOnCloudLalit() {
        await this.base.waitAndClick(this.Elements.cloudLalit);
    }

    async clickOnCloudLalit1() {
        await this.base.waitAndClick(this.Elements.cloudLalit1);
    }

    async clickOnWindowLalit1() {
        await this.base.waitAndClick(this.Elements.windowLalit1);
    }


    async clickOnKeyVault() {
        await this.base.waitAndClick(this.Elements.keyVault);
        await this.page.waitForTimeout(5000)
    }

    async clickOnDelete() {
        await this.base.waitAndClick(this.Elements.delete);
    }

    async clickOnEdit() {
        await this.page.waitForTimeout(1000);
        await this.base.waitAndClick(this.Elements.edit);
        await this.page.waitForTimeout(2000);
    }

    async clickOnDeleteOk() {
        await this.base.waitAndClick(this.Elements.deleteOk);
    }

    async clickOnAddCredentials() {
        await this.base.waitAndClick(this.Elements.addCredentials);

    }

    async enterNewConnectionNameText(newConnectionNameText: string) {
        await this.page.locator(this.Elements.txtNewConnectionName).fill(newConnectionNameText);
        await this.page.waitForTimeout(1000);
    }

    async enterNewConnectionPasswordText(newConnectionPasswordText: string) {
        await this.page.locator(this.Elements.txtNewConnectionPassword).fill(newConnectionPasswordText);
    }

    async enterNewConnectionUserIdText(newConnectionUserIdText: string) {
        await this.page.locator(this.Elements.txtNewConnectionUserId).fill(newConnectionUserIdText);
        await this.page.waitForTimeout(1000);
    }

    async clickOnOkButton() {
        await this.page.waitForTimeout(3000);
        await this.base.waitAndClick(this.Elements.btnAddNewConnection);
        await this.page.waitForTimeout(3000);

    }

    async enterUpdateConnectionNameText(newConnectionNameText: string) {
        await this.page.fill(this.Elements.txtNewConnectionName, "");
        await this.page.locator(this.Elements.txtNewConnectionName).fill(newConnectionNameText);
        await this.page.waitForTimeout(1000);
    }

    async clickOnAchalCloud() {
        await this.base.waitAndClick(this.Elements.achalCloud);

    }

    async clickOnTestautomation_CloudUpdate() {
        await this.base.waitAndClick(this.Elements.testautomation_CloudUpdate);

    }

    async clickOnTestautomation_WindowUpdate() {
        await this.base.waitAndClick(this.Elements.testautomation_WindowUpdate);

    }

    async getNewConnectIdText() {
        await this.page.waitForSelector(this.Elements.achalCloud, { timeout: 30000 });
        return this.page.locator(this.Elements.achalCloud);
    }

    async NewConnectIdTextValidation() {
        const NewConnectElement = await this.getNewConnectIdText();
        const NewConnectText = await NewConnectElement.textContent();
        await expect(NewConnectText.trim()).toMatch(/^Achal-Cloud$/);
    }

    async clickOnBot() {
        await this.base.waitAndClick(this.Elements.Bot);

    }

    async clickOnBot4() {
        await this.base.waitAndClick(this.Elements.Bot4);

    }

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
        await this.page.waitForTimeout(3000);
    }

    async clickOnCredentialsTab() {
        await this.base.waitAndClick(this.Elements.credentials);

    }

    async clickOnUseConnectID() {
        await this.base.waitAndClick(this.Elements.use_connectID);

    }

    async clickOnDropDown() {
        await this.base.waitAndClick(this.Elements.dropDown);

    }

    async clickOnDropDownAchalCloud() {
        await this.base.waitAndClick(this.Elements.dropDownAchalCloud);

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

    async getProxyConnectIdText(timeout = 60000) {
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator.innerText();
    }

    async getMultiConnectIdText(timeout = 60000) {
        const ProxyConnectLocator1 = this.page.locator(this.Elements.verificationMultiConnectId);
        await ProxyConnectLocator1.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator1.innerText();
    }

    async getUpdateConnectIdText() {
        await this.page.waitForSelector(this.Elements.cloudLalit, { timeout: 30000 });
        return this.page.locator(this.Elements.cloudLalit);
    }

    async UpdateConnectIdTextValidation() {
        const UpdateConnectElement = await this.getUpdateConnectIdText();
        const UpdateConnectText = await UpdateConnectElement.textContent();
        await expect(UpdateConnectText.trim()).toMatch(/^Cloud-Lalit$/);
    }

    async getUpdateConnectIdText1() {
        await this.page.waitForSelector(this.Elements.cloudLalit1, { timeout: 30000 });
        return this.page.locator(this.Elements.cloudLalit1);
    }

    async UpdateConnectIdTextValidation1() {
        const UpdateConnectElement1 = await this.getUpdateConnectIdText1();
        const UpdateConnectText1 = await UpdateConnectElement1.textContent();
        await expect(UpdateConnectText1.trim()).toMatch(/^Cloud-Lalit1$/);
    }

    async getUpdateConnectIdText2() {
        await this.page.waitForSelector(this.Elements.windowLalit1, { timeout: 30000 });
        return this.page.locator(this.Elements.windowLalit1);
    }

    async UpdateConnectIdTextValidation2() {
        const UpdateConnectElement2 = await this.getUpdateConnectIdText2();
        const UpdateConnectText2 = await UpdateConnectElement2.textContent();
        await expect(UpdateConnectText2.trim()).toMatch(/^Window-Lalit1$/);
    }

    async clickOnExecuteOn() {
        await this.base.waitAndClick(this.Elements.executeOn);
    }

    async clickOnExecuteOn1() {
        await this.base.waitAndClick(this.Elements.executeOn1);
    }

    async clickOnQaTest2() {
        await this.base.waitAndClick(this.Elements.qaTest2);
    }

    async isConnectIdPresent(connectIdName: string): Promise<boolean> {
        const connectIdLocator = this.Elements.connectIdRow.replace("{connectIdName}", connectIdName);
        return await this.page.locator(connectIdLocator).isVisible();
    }

    async deleteConnectId(connectIdName: string): Promise<void> {
        const connectIdLocator = this.Elements.connectIdRow.replace("{connectIdName}", connectIdName);
        await this.page.locator(connectIdLocator).click();
        await this.page.locator(this.Elements.deleteButton).click();
        await this.page.locator(this.Elements.confirmDeleteButton).click();
    }

    async clickOnConnectIDCasesFolder() {
        await this.base.waitAndClick(this.Elements.ConnectIDCasesFolder);
    }

    async clickOnBot1() {
        await this.base.waitAndClick(this.Elements.bot1);
    }

    async clickOnBot2() {
        await this.base.waitAndClick(this.Elements.bot2);
    }

    async clickOnBot3() {
        await this.base.waitAndClick(this.Elements.bot3);
    }

    async clickOnDropDownTestautomation_Cloud() {
        await this.base.waitAndClick(this.Elements.dropDownTestautomation_Cloud);

    }

    async clickOnDropDownTestautomation_Windows() {
        await this.base.waitAndClick(this.Elements.dropDownTestautomation_Windows);

    }

    async getProxyConnectIdText1(timeout = 60000) {
        const ProxyConnectLocator1 = this.page.locator(this.Elements.proxyConnectId1);
        await ProxyConnectLocator1.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator1.innerText();
    }

    async getProxyConnectIdText2(timeout = 60000) {
        const ProxyConnectLocator1 = this.page.locator(this.Elements.proxyConnectId2);
        await ProxyConnectLocator1.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator1.innerText();
    }

    async clickOnMicrosoftCloud() {
        await this.base.waitAndClick(this.Elements.microsoftCloud);
    }

    async clickOnWindowsSystem() {
        await this.base.waitAndClick(this.Elements.windowsSystem);
    }

    async clickOnConnectIDNew1() {
        await this.base.waitAndClick(this.Elements.ConnectIDNew1);
    }

    async clickOnConnectIDNew2() {
        await this.base.waitAndClick(this.Elements.ConnectIDNew2);
    }

    async clickOnConnectIDNew3() {
        await this.base.waitAndClick(this.Elements.ConnectIDNew3);
    }

    async clickOnCombobox() {
        await this.base.waitAndClick(this.Elements.combobox);
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


}
