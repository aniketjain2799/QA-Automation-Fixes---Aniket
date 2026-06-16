import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class QueueStatusVerificationPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        queueStatusVerificationFolder: "(//a[normalize-space()='Queue_StatusVerification'])[1]",
        loadTestBotQueueTableFolder: "(//a[normalize-space()='LoadTest_Bot_Queue_Table'])[1]",
        loadTestBotQueueTableFolder2: "(//a[normalize-space()='LoadTest_Bot_Queue_Table2'])[1]",
        loadTestBotQueueTableFolder3: "(//a[normalize-space()='LoadTest_Bot_Queue_Table3'])[1]",
        bot: "(//a[normalize-space()='Bot'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        scriptFailed: "(//li[contains(text(), 'Script failed')])[1]",
        queueDisabled: "(//li[contains(text(), 'is currently disabled.')])[1]",
        queueDisabled2: "(//li[contains(text(), 'is currently disabled for Send')])[1]",
        queue: "(//a[normalize-space()='Queue'])[1]",
        items: "(//div[normalize-space()='Items'])[1]",
        totalItems: "(//div[contains(@class,'dx-info')])[1]",
        overview: "(//div[contains(text(),'Overview')])[1]",
        queueStatusDropdown: "(//select[@class='spacer-right-inner'])[1]",
        denyDequeingItemsFromQueue: "//select[@id='ddlQueueStatus']/option[text()='Deny dequeing items from queue']",
        active: "//select[@id='ddlQueueStatus']/option[text()='Active']",
        table: "(//a[normalize-space()='table'])[1]",

    };


    async clickOnQueueStatusVerificationFolder() {
        await this.base.waitAndClick(this.Elements.queueStatusVerificationFolder);
    }

    async clickOnLoadTestBotQueueTableFolder() {
        await this.base.waitAndClick(this.Elements.loadTestBotQueueTableFolder);
    }

    async clickOnLoadTestBotQueueTableFolder2() {
        await this.base.waitAndClick(this.Elements.loadTestBotQueueTableFolder2);
    }

    async clickOnLoadTestBotQueueTableFolder3() {
        await this.base.waitAndClick(this.Elements.loadTestBotQueueTableFolder3);
    }

    async clickOnBot() {
        await this.base.waitAndClick(this.Elements.bot);
    }


    async getJobFinishedText(timeout = 1080000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getScriptFailedText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.scriptFailed);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async getQueueDisabledText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.queueDisabled);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async getQueueDisabledText2(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.queueDisabled2);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }

    async clickOnItems() {
        await this.base.waitAndClick(this.Elements.items);
    }

    async validateTotalItems() {
        const totalItemsText = await this.page.textContent(this.Elements.totalItems);
        expect(totalItemsText).toContain('Page 1 of 1 (0 items)');
    }

    async validateTotalItems1() {
        const totalItemsText = await this.page.textContent(this.Elements.totalItems);
        const match = totalItemsText?.match(/\((\d+) items?\)/);
        const count = match ? parseInt(match[1]) : 0;
        expect(count).toBeGreaterThanOrEqual(2);
    }

    async clickOnOverview() {
        await this.base.waitAndClick(this.Elements.overview);
    }

    async clickOnQueueStatusDropdown() {
        await this.page.locator(this.Elements.queueStatusDropdown).waitFor({ state: "visible" });
    }


    async clickOnDenyDequeingItemsFromQueue() {
        await this.page.locator(this.Elements.queueStatusDropdown).selectOption({ label: 'Deny dequeing items from queue' });
    }

    async clickOnActive() {
        await this.page.locator(this.Elements.queueStatusDropdown).selectOption({ label: 'Active' });
    }


    async clickOnTable() {
        await this.base.waitAndClick(this.Elements.table);
    }

    async validateTotalItems2() {
        const totalItemsText = await this.page.textContent(this.Elements.totalItems);
        const match = totalItemsText?.match(/\((\d+) items?\)/);
        const count = match ? parseInt(match[1]) : 0;
        expect(count).toBeGreaterThanOrEqual(3);
    }

}