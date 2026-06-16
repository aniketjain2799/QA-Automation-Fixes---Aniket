import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LogViewVerificationPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        logViewVerification: "//a[normalize-space()='LogViewVerification']",
        botSuccess: "(//a[normalize-space()='Bot_Success'])[1]",
        logViewVerification1: "//a[normalize-space()='LogViewVerification']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        truncating: "(//li[contains(text(), 'Truncating old data completed.')])[1]",
        logView: "//div[normalize-space()='Log View']",
        manually: "(//td[@role='gridcell'][normalize-space()='Manually'])[1]",
        success: "(//a[@href='#'][normalize-space()='Success'])[1]",
        botFailure: "(//a[normalize-space()='Bot_Failure'])[1]",
        failure: "(//a[@href='#'][normalize-space()='Failed'])[1]",
        tableSuccess: "(//a[normalize-space()='table_success'])[1]",
        tablefailure: "(//a[normalize-space()='table_failure'])[1]",
        tableSuccessTab: "//div[normalize-space()='table_success']",
        scriptFailed: "(//li[contains(text(), 'Script failed')])[1]",


    };


    async clickOnLogViewVerification() {
        await this.base.waitAndClick(this.Elements.logViewVerification);
    }

    async clickOnBotSuccess() {
        await this.base.waitAndClick(this.Elements.botSuccess);
    }

    async clickOnBotFailure() {
        await this.base.waitAndClick(this.Elements.botFailure);
    }

    async getJobFinishedText(timeout = 1080000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getTruncatingText(timeout = 1080000) {
        const truncatingLocator = this.page.locator(this.Elements.truncating);
        await truncatingLocator.waitFor({ state: 'attached', timeout });
        return truncatingLocator.innerText();
    }

    async getNoErrorText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.noError);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async getScriptFailedText(timeout = 1080000) {
        const scriptFailedLocator = this.page.locator(this.Elements.scriptFailed);
        await scriptFailedLocator.waitFor({ state: 'attached', timeout });
        return scriptFailedLocator.innerText();
    }

    async clickOnLogView() {
        await this.base.waitAndClick(this.Elements.logView);
    }

    async getExecutionModeValidationRaw1() {
        await this.page.waitForSelector(this.Elements.manually, { timeout: 45000 });
        return this.page.locator(this.Elements.manually);
    }

    async validateExecutionModeTextRaw1() {
        const ExecutionModeText = await this.getExecutionModeValidationRaw1();
        await expect(ExecutionModeText).toContainText('Manually');
    }

    async getStatusValidationRaw1() {
        await this.page.waitForSelector(this.Elements.success, { timeout: 45000 });
        return this.page.locator(this.Elements.success);
    }

    async validateStatusTextRaw1() {
        const StatusText = await this.getStatusValidationRaw1();
        await expect(StatusText).toContainText('Success');
    }

    async getStatusValidationFailRaw1() {
        await this.page.waitForSelector(this.Elements.failure, { timeout: 45000 });
        return this.page.locator(this.Elements.failure);
    }

    async validateStatusFailTextRaw1() {
        const StatusText1 = await this.getStatusValidationFailRaw1();
        await expect(StatusText1).toContainText('Failed');
    }

    async clickOnTableSuccess() {
        await this.base.waitAndClick(this.Elements.tableSuccess);
    }

    async clickOnTablefailure() {
        await this.base.waitAndClick(this.Elements.tablefailure);
    }

    async clickOnTableSuccessTab() {
        await this.base.waitAndClick(this.Elements.tableSuccessTab);
    }

}