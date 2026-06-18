import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class AddRBQueueBatchPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        addRbQueueBatch: "(//a[normalize-space()='Add-RbQueueBatch'])[1]",
        batch: "(//a[normalize-space()='Batch'])[1]",
        queue: "(//a[normalize-space()='Queue'])[1]",
        serviceBot: "(//a[normalize-space()='Service Bot'])[1]",
        Message0: "(//li[contains(text(), 'Message0')])[1]",
        Message9: "(//li[contains(text(), 'Message9')])[1]",
        items: "(//div[normalize-space()='Items'])[1]",
        totalItems: "(//div[normalize-space()='Page 1 of 1 (0 items)'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        ps7: "(//li[contains(text(), 'PS7 Sub-process started')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
        showExecutionLog: "//span[normalize-space()='Show execution log']",
    };


    async clickOnAddRbQueueBatch() {
        await this.base.waitAndClick(this.Elements.addRbQueueBatch);
    }

    async clickOnBatchBot() {
        await this.base.waitAndClick(this.Elements.batch);
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }

    async clickOnServiceBot() {
        await this.base.waitAndClick(this.Elements.serviceBot);
    }

    async clickShowExecutionLogIfVisible() {
        try {
            await this.page.waitForSelector(this.Elements.showExecutionLog, { state: 'visible', timeout: 5000 });
            await this.base.waitAndClick(this.Elements.showExecutionLog);
        } catch {
            // execution log already visible or button not present
        }
    }

    async clickOnItems() {
        await this.base.waitAndClick(this.Elements.items);
    }

    async getJobFinishedText(timeout = 1080000) {
        const start = Date.now();
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await jobFinishedLocator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return jobFinishedLocator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`Job finished text not found within ${timeout}ms`);
    }

    async getNoErrorText(timeout = 1080000) {
        const start = Date.now();
        const noErrorLocator = this.page.locator(this.Elements.noError);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await noErrorLocator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return noErrorLocator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`No error text not found within ${timeout}ms`);
    }

    async getFirstRecord() {
        await this.page.waitForSelector(this.Elements.Message0, { timeout: 15000 });
        return this.page.locator(this.Elements.Message0);
    }

    async FirstRecordValidation() {
        const firstRecord = await this.getFirstRecord();
        await expect(firstRecord).toContainText('Message0');
    }

    async getLastRecord() {
        await this.page.waitForSelector(this.Elements.Message9, { timeout: 15000 });
        return this.page.locator(this.Elements.Message9);
    }

    async getLastRecordValidation() {
        const lastRecord = await this.getLastRecord();
        await expect(lastRecord).toContainText('Message9');
    }

    async getTotalRecords() {
        await this.page.waitForSelector(this.Elements.totalItems, { timeout: 15000 });
        return this.page.locator(this.Elements.totalItems);
    }

    async getTotalRecordsValidation() {
        const TotalRecord = await this.getTotalRecords();
        await expect(TotalRecord).toContainText('Page 1 of 1 (0 items)');
    }


    async getPS7Text(timeout = 80000) {
        const start = Date.now();
        const PS7Locator = this.page.locator(this.Elements.ps7);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await PS7Locator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return PS7Locator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`PS7 text not found within ${timeout}ms`);
    }

    async getProxyConnectIdText(timeout = 180000) {
        const start = Date.now();
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await ProxyConnectLocator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return ProxyConnectLocator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`Proxy ConnectID text not found within ${timeout}ms`);
    }

}