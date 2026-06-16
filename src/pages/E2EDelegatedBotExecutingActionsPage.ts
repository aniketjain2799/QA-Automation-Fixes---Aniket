import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class DelegatedBotExecutingActionBotPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        dataTable08: "//span[normalize-space()='Data table0808']",
        vance: "//td[normalize-space()='Vance']",
        dataTable: "//div[normalize-space()='Data table']",
        dt: "//div[contains(text(),'DT')]",
        newRunButton: "//button[@id='btnRunScriptWithParametersFromGrid']",
        recentEntry: "tr.jsgrid-row:first-child",
        runningStatus: "//tr[@class='jsgrid-row'][1]//div[normalize-space()='Running']",
        successStatus: "//tr[@class='jsgrid-row'][1]//a[normalize-space()='Success']",
        noErrorLog: "//tr[@class='jsgrid-row'][1]//div[contains(text(), 'no errors')]",
        newBot8080: "(//span[normalize-space()='New Bot0808'])[2]",
        newBot80804: "(//span[normalize-space()='New Bot0808'])[1]",
        newBot0809: "(//span[normalize-space()='New Bot0809'])[1]",
        newBot20809: "(//span[normalize-space()='New Bot0809'])[2]",
        rawData0: "//div[normalize-space()='Raw Data-0']",
        name1924: "//td[normalize-space()='1924']",
        name2280: "(//td[@role='gridcell'][normalize-space()='2280'])[1]",
        name98: "(//td[normalize-space()='968'])[1]",
        name980: "(//td[@role='gridcell'][normalize-space()='ConnectID_Lalit'])[10]",
        name1164: "(//td[@role='gridcell'][normalize-space()='1164'])[1]",
        nb: "//div[contains(text(),'NB')]",
        okButton: "//button[@id='alertify-ok']",
        name981: "(//td[normalize-space()='18232'])[1]",
    };

    async clickOnDataTable08() {
        await this.base.waitAndClick(this.Elements.dataTable08);
    }

    async clickOnDataTable() {
        await this.base.waitAndClick(this.Elements.dataTable);
    }

    async clickOnVance() {
        await this.base.waitAndClick(this.Elements.vance);
    }

    async clickOnDT() {
        await this.base.waitAndClick(this.Elements.dt);
    }

    async clickOnNewRunButton() {
        await this.base.waitAndClick(this.Elements.newRunButton);
    }

    async getRecentEntryLocator() {
        await this.page.waitForSelector(this.Elements.recentEntry, { timeout: 15000 });
        return this.page.locator(this.Elements.recentEntry);
    }

    async printRecentEntryHTML() {
        const recentEntryLocator = await this.getRecentEntryLocator();
        const html = await recentEntryLocator.innerHTML();
        console.log("Recent Entry HTML:", html);
    }

    async getRunningStatus() {
        await this.page.waitForSelector(this.Elements.runningStatus, { timeout: 45000 });
        return this.page.locator(this.Elements.runningStatus);
    }

    async validateRunningStatus() {
        const runningStatusLocator = await this.getRunningStatus();
        await expect(runningStatusLocator).toContainText('Running');
    }

    async getSuccessStatus() {
        await this.page.waitForSelector(this.Elements.successStatus, { timeout: 300000 });
        return this.page.locator(this.Elements.successStatus);
    }

    async validateSuccessStatus() {
        const successStatusLocator = await this.getSuccessStatus();
        await expect(successStatusLocator).toContainText('Success');
    }

    async getScriptSuccessText() {
        await this.page.waitForSelector(this.Elements.noErrorLog, { timeout: 300000 });
        return this.page.locator(this.Elements.noErrorLog);
    }

    async validateScriptSuccess() {
        const scriptSuccessTextLocator = await this.getScriptSuccessText();
        await expect(scriptSuccessTextLocator).toContainText('no errors');
    }

    async clickOnNewBot8080() {
        await this.base.waitAndClick(this.Elements.newBot8080);
    }

    async clickOnNewBot80804() {
        await this.base.waitAndClick(this.Elements.newBot80804);
    }

    async clickOnNewBot0809() {
        await this.base.waitAndClick(this.Elements.newBot0809);
    }

    async clickOnNewBot20809() {
        await this.base.waitAndClick(this.Elements.newBot20809);
    }

    async clickOnRawData0() {
        await this.base.waitAndClick(this.Elements.rawData0);
    }

    async clickOnName1924() {
        await this.base.waitAndClick(this.Elements.name1924);
    }

    async clickOnName2280() {
        await this.base.waitAndClick(this.Elements.name2280);
    }

    async clickOnName256() {
        await this.page.waitForTimeout(12000);
        await this.base.waitAndClick(this.Elements.name98);
        await this.page.waitForTimeout(5000);
    }

    async clickOnName2560() {
        await this.page.waitForTimeout(12000);
        await this.base.waitAndClick(this.Elements.name980);
        await this.page.waitForTimeout(5000);
    }

    async clickOnName2561() {
        await this.page.waitForTimeout(12000);
        await this.base.waitAndClick(this.Elements.name981);
        await this.page.waitForTimeout(5000);
    }

    async clickOnName1164() {
        await this.page.waitForTimeout(12000);
        await this.base.waitAndClick(this.Elements.name1164);
        await this.page.waitForTimeout(5000);
    }

    async clickOnNB() {
        await this.base.waitAndClick(this.Elements.nb);
    }

    async clickOnOkButton() {
        await this.base.waitAndClick(this.Elements.okButton);
    }
}
