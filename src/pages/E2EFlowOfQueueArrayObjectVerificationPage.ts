import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class QueueArrayObjectVerificationPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        queueArrayObjectsFolder: "(//a[normalize-space()='Queue_ArrayofObjects'])[1]",
        queueSingleFolder: "(//a[normalize-space()='Queue_Single'])[1]",
        queueMultipleFolder: "(//a[normalize-space()='Queue_Multiple'])[1]",
        debug: "//li[contains(@class,'debug')]",
        debug1: "(//li[contains(@class,'debug')])[1]",
        debug2: "(//li[contains(@class,'debug')])[2]",
        debug3: "(//li[contains(@class,'debug')])[3]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",

    };


    async clickOnQueueArrayObjectsFolder() {
        await this.base.waitAndClick(this.Elements.queueArrayObjectsFolder);
    }

    async clickOnQueueSingleFolder() {
        await this.base.waitAndClick(this.Elements.queueSingleFolder);
    }

    async clickOnQueueMultipleFolder() {
        await this.base.waitAndClick(this.Elements.queueMultipleFolder);
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

    async getDebugText(timeout = 1200000) {
        const debugLocator = this.page.locator(this.Elements.debug);
        await debugLocator.waitFor({ state: 'attached', timeout });
        return debugLocator.innerText();
    }

    async getDebugText1(timeout = 1200000) {
        const debugLocator1 = this.page.locator(this.Elements.debug1);
        await debugLocator1.waitFor({ state: 'attached', timeout });
        return debugLocator1.innerText();
    }

    async getDebugText2(timeout = 1200000) {
        const debugLocator2 = this.page.locator(this.Elements.debug2);
        await debugLocator2.waitFor({ state: 'attached', timeout });
        return debugLocator2.innerText();
    }

    async getDebugText3(timeout = 1200000) {
        const debugLocator3 = this.page.locator(this.Elements.debug3);
        await debugLocator3.waitFor({ state: 'attached', timeout });
        return debugLocator3.innerText();
    }


}