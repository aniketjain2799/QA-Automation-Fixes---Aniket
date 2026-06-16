import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ReadiMessageServiceBotPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        rBQueueMessageFolder: "//a[normalize-space()='RBQueueMessage']",
        rBQueueMessageProxyFolder: "//a[normalize-space()='RBQueueMessageProxy']",
        rbQueueMessage_OldCodeFirst: "//a[normalize-space()='RbQueueMessage_OldCodeFirst']",
        rbQueueMessage_NewCodeFirst: "//a[normalize-space()='RbQueueMessage_NewCodeFirst']",
        rbQueueMessage_NewCodeSecond: "//a[normalize-space()='RbQueueMessage_NewCodeSecond']",
        rbQueueMessage_OldCodeSecond: "//a[normalize-space()='RbQueueMessage_OldCodeSecond']",
        bot_RbQueueMessage: "(//a[normalize-space()='Bot_RbQueueMessage'])[1]",
        bot: "(//a[normalize-space()='Bot'])[1]",
        Secondbot: "(//a[normalize-space()='BotS'])[1]",
        SecondQueue: "(//a[normalize-space()='QueueS'])[1]",
        queue: "(//a[normalize-space()='Queue'])[1]",
        queue_RbQueueMessage: "//a[normalize-space()='Queue_RbQueueMessage']",
        bot_RbQueueMessageS: "(//a[normalize-space()='Bot_RbQueueMessageS'])[1]",
        queue_RbQueueMessageS: "//a[normalize-space()='Queue_RbQueueMessageS']",
        items: "//div[normalize-space()='Items']",
        totalRaw: "//div[normalize-space()='Page 1 of 1 (5 items)']",
        totalRaw1: "//div[@class='dx-info']",
        serviceBot: "(//a[normalize-space()='Service Bot'])[1]",
        rawData0: "//div[normalize-space()='Raw Data-0']",
        dashboard: "//div[contains(text(),'Dashboard')]",
        properties: "//li[@id='scriptTab']//div//div[contains(text(),'Properties')]",

    };

    async clickOnRBQueueMessageFolder() {
        await this.base.waitAndClick(this.Elements.rBQueueMessageFolder);
    }

    async clickOnRBQueueMessageProxyFolder() {
        await this.base.waitAndClick(this.Elements.rBQueueMessageProxyFolder);
    }

    async clickOnRbQueueMessage_NewCodeSecond() {
        await this.base.waitAndClick(this.Elements.rbQueueMessage_NewCodeSecond);
    }

    async clickOnRbQueueMessage_OldCodeFirst() {
        await this.base.waitAndClick(this.Elements.rbQueueMessage_OldCodeFirst);
    }

    async clickOnNewSecondBot() {
        await this.base.waitAndClick(this.Elements.Secondbot);
    }

    async clickOnNewSecondQueue() {
        await this.base.waitAndClick(this.Elements.SecondQueue);
    }

    async clickOnRbQueueMessage_NewCodeFirst() {
        await this.base.waitAndClick(this.Elements.rbQueueMessage_NewCodeFirst);
    }

    async clickOnRbQueueMessage_OldCodeSecond() {
        await this.base.waitAndClick(this.Elements.rbQueueMessage_OldCodeSecond);
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }

    async clickOnBot_RbQueueMessage() {
        await this.base.waitAndClick(this.Elements.bot_RbQueueMessage);
    }

    async clickOnBot() {
        await this.base.waitAndClick(this.Elements.bot);
    }

    async clickOnQueue_RbQueueMessage() {
        await this.base.waitAndClick(this.Elements.queue_RbQueueMessage);
    }

    async clickOnBot_RbQueueMessageS() {
        await this.base.waitAndClick(this.Elements.bot_RbQueueMessageS);
    }

    async clickOnQueue_RbQueueMessageS() {
        await this.base.waitAndClick(this.Elements.queue_RbQueueMessageS);
    }

    async clickOnItems() {
        await this.base.waitAndClick(this.Elements.items);
    }

    async getTotalRowsItems() {
        await this.page.waitForSelector(this.Elements.totalRaw, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRaw);
    }

    async ValidateTotalRowsCountItems() {
        const TotalRowsCount = await this.getTotalRowsItems();
        await expect(TotalRowsCount).toContainText('Page 1 of 1 (5 items)');
    }

    async clickOnServiceBot() {
        await this.base.waitAndClick(this.Elements.serviceBot);
    }

    async clickOnRawData0() {
        await this.base.waitAndClick(this.Elements.rawData0);
    }

    async clickOnDashboard() {
        await this.base.waitAndClick(this.Elements.dashboard);
        await this.page.waitForTimeout(2000);
    }

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async getTotalRowsItems2() {
        await this.page.waitForSelector(this.Elements.totalRaw1, { timeout: 15000 });
        return this.page.locator(this.Elements.totalRaw1);
    }

    async ValidateTotalRowsCountItems2() {
        const TotalRowsCount2 = await this.getTotalRowsItems2();
        await expect(TotalRowsCount2).toContainText('Page 1 of 1 (0 items)');
    }

}