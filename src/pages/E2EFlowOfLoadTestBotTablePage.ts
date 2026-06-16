import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoadTestBotTablePage {
    private base: PlaywrightWrapper;
    private previousRawCount: number = 0;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        loadTestBotTable: "//a[normalize-space()='LoadTest_Bot_Table']",
        mainTable: "(//a[contains(@href,'#')][normalize-space()='table'])[1]",
        table: "//div[normalize-space()='table']",
        totalRaws: "//div[contains(@class,'dx-info')]",
        newBot: "(//a[contains(@href,'#')][normalize-space()='New Bot'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
    };

    async clickOnLoadTestBotTable() {
        await this.base.waitAndClick(this.Elements.loadTestBotTable);
    }

    async clickOnMainTable() {
        await this.base.waitAndClick(this.Elements.mainTable);
    }

    async clickOnTable() {
        await this.base.waitAndClick(this.Elements.table);
    }

    async clickOnNewBot() {
        await this.base.waitAndClick(this.Elements.newBot);
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

    async getRawCount(): Promise<number> {
        await this.page.waitForTimeout(6000);
        const rawCountText = await this.base.getText(this.Elements.totalRaws);
        const match = rawCountText.match(/\((\d+)\s+items\)/);
        if (match) {
            return parseInt(match[1], 10);
        } else {
            throw new Error("Could not parse raw count from: " + rawCountText);
        }
    }

    async storeCurrentRawCount() {
        this.previousRawCount = await this.getRawCount();
        console.log("Stored raw count:", this.previousRawCount);
    }

    async validateRawCountIncreasedBy10() {
        const currentCount = await this.getRawCount();
        console.log(`Previous Raw Count: ${this.previousRawCount}, Current Raw Count: ${currentCount}`);
        expect(currentCount).toBe(this.previousRawCount + 10);
    }
}
