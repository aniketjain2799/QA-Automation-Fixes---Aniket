import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class RBFileWriteReadPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        rbfileWriteRead: "(//a[normalize-space()='Rbfile_Write_Read'])[1]",
        step1: "(//a[contains(@href,'#')][normalize-space()='step1'])[1]",
        step2: "(//a[contains(@href,'#')][normalize-space()='step2'])[1]",
        step3: "(//a[contains(@href,'#')][normalize-space()='step3'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        ps7: "(//li[contains(text(), 'PS7 Sub-process started')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",

    };


    async clickOnRBfileWriteRead() {
        await this.base.waitAndClick(this.Elements.rbfileWriteRead);
    }

    async clickOnStep1() {
        await this.base.waitAndClick(this.Elements.step1);
    }

    async clickOnStep2() {
        await this.base.waitAndClick(this.Elements.step2);
    }

    async clickOnStep3() {
        await this.base.waitAndClick(this.Elements.step3);
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

}