import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class BotHeartBeatPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        botHeartBeat: "(//a[normalize-space()='BotHeartBeat'])[1]",
        newBot: "(//a[normalize-space()='Bot_PS5'])[1]",
        newBot19: "(//a[normalize-space()='Bot_PS5_Proxy'])[1]",
        newBot29: "(//a[normalize-space()='Bot_PS7'])[1]",
        newBot39: "(//a[normalize-space()='Bot_PS7_Proxy'])[1]",
        stopExecutionIcon: "//a[@id='stopExecution']//i",
        missingHeartBeatText: "(//li[contains(text(),' Job termination initiated due to missing heartbeat')])[1]",
        jobTerminatedText: "(//li[contains(text(),' No heartbeat received. Job terminated.')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
        ps7: "(//li[contains(text(), 'PS7 Sub-process started')])[1]",
    };


    async clickOnBotHeartBeat() {
        await this.base.waitAndClick(this.Elements.botHeartBeat);
    }

    async clickOnNewBot() {
        await this.base.waitAndClick(this.Elements.newBot);
    }

    async clickOnNewBot19() {
        await this.base.waitAndClick(this.Elements.newBot19);
    }

    async clickOnNewBot29() {
        await this.base.waitAndClick(this.Elements.newBot29);
    }

    async clickOnNewBot39() {
        await this.base.waitAndClick(this.Elements.newBot39);
    }

    async getJobFinishedText(timeout = 360000) {
        const jobFinishedLocator = this.page.locator(this.Elements.missingHeartBeatText);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getJobTerminatedText(timeout = 360000) {
        const jobTerminatedLocator = this.page.locator(this.Elements.jobTerminatedText);
        await jobTerminatedLocator.waitFor({ state: 'attached', timeout });
        return jobTerminatedLocator.innerText();
    }

    async isExecutionIconVisible() {
        return await this.base.isElementVisible(this.Elements.stopExecutionIcon);
    }

    async getProxyConnectIdText(timeout = 60000) {
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator.innerText();
    }

    async getPS7Text(timeout = 80000) {
        const PS7Locator = this.page.locator(this.Elements.ps7);
        await PS7Locator.waitFor({ state: 'attached', timeout });
        return PS7Locator.innerText();
    }


}