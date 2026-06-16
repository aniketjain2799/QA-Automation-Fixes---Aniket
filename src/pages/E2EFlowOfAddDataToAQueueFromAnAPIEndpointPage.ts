import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class AddDataToAQueueFromAnAPIEndpointPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        restApis: "(//a[normalize-space()='REST_APIs'])[1]",
        queue: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Queue']",
        serviceBot: "(//a[normalize-space()='Service Bot'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        Value1: "(//td[@role='gridcell'][normalize-space()='Value1'])[1]",
        Value2: "(//td[@role='gridcell'][normalize-space()='Value2'])[2]",
        totalItam: "//div[normalize-space()='Page 1 of 1 (2 items)']",

    };


    async clickOnRestApis() {
        await this.base.waitAndClick(this.Elements.restApis);
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }

    async clickOnServiceBot() {
        await this.page.waitForTimeout(5000);
        await this.base.waitAndClick(this.Elements.serviceBot);
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

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async getFirstRawValue1Text() {
        await this.page.waitForSelector(this.Elements.Value1, { timeout: 15000 });
        return this.page.locator(this.Elements.Value1);
    }

    async validatFirsRawtValue1Text() {
        const FirstRawValue1Text = await this.getFirstRawValue1Text();
        await expect(FirstRawValue1Text).toContainText('Value1');
    }

    async getSecondRawValue2Text() {
        await this.page.waitForSelector(this.Elements.Value2, { timeout: 15000 });
        return this.page.locator(this.Elements.Value2);
    }

    async validatSecondRawValue2Text() {
        const SecondRawValue2Text = await this.getSecondRawValue2Text();
        await expect(SecondRawValue2Text).toContainText('Value2');
    }

    async getTotalRecordValueText() {
        await this.page.waitForSelector(this.Elements.totalItam, { timeout: 15000 });
        return this.page.locator(this.Elements.totalItam);
    }

    async validatTotalRecordValueText() {
        const TotalRecordValueText = await this.getTotalRecordValueText();
        await expect(TotalRecordValueText).toContainText('Page 1 of 1 (2 items)');
    }

}