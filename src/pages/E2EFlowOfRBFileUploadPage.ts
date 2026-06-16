import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import * as path from 'path';


export default class RBFileUploadPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        rbFIleUpload: "(//a[normalize-space()='RBFIleUpload'])[1]",
        dataTable: "(//a[@href='#'][normalize-space()='Data table'])[1]",
        run: "//span[normalize-space()='Run']",
        clickYes: "//label[normalize-space()='Yes']",
        closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
        resetDataTable: "//button[@id='btnResetDataTable']",
        fileUpload: "//label[@for='tblparamone']",
        clickOk: "//button[@id='alertify-ok']",
        RunButton: "//button[@id='btnRunScriptWithParameters']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        dataTableTab: "//div[normalize-space()='Data table']",
        rowCount: "//div[normalize-space()='Page 1 of 1 (7 items)']",
        lastRowFirstCol: "//td[normalize-space()='7']",
        lastRowSecondCol: "//td[normalize-space()='asteria']",
        lastRowThirdCol: "(//td[@role='gridcell'][normalize-space()='Cloudbridge'])[2]"

    };


    async clickOnRBFIleUpload() {
        await this.base.waitAndClick(this.Elements.rbFIleUpload);
    }

    async clickOnDataTable() {
        await this.base.waitAndClick(this.Elements.dataTable);
    }

    async clickOnRunButton() {
        try {
            await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
            await this.base.waitAndClick(this.Elements.run);
        } catch (error) {
            await this.base.waitAndClick(this.Elements.closeButton);
            await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
            await this.base.waitAndClick(this.Elements.run);
        }
    }


    async clickOnYes() {
        await this.base.waitAndClick(this.Elements.clickYes);
    }

    async clickOnResetDataTable() {
        await this.base.waitAndClick(this.Elements.resetDataTable);
    }

    async clickOnFileUpload() {
        await this.base.waitAndClick(this.Elements.fileUpload);
    }

    async uploadFile(fileName: string) {
        const filePath = path.resolve('src', 'UploadFiles', fileName);
        await this.page.waitForSelector(this.Elements.fileUpload, { state: 'visible' });
        await this.page.locator(this.Elements.fileUpload).setInputFiles(filePath);
    }

    async clickOnClickOk() {
        await this.base.waitAndClick(this.Elements.clickOk);
    }

    async clickOnRun() {
        await this.base.waitAndClick(this.Elements.RunButton);
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

    async clickOnDataTableTab() {
        await this.base.waitAndClick(this.Elements.dataTableTab);
    }

    async validateRowCount() {
        const rowCountText = await this.page.textContent(this.Elements.rowCount);
        expect(rowCountText).toContain('7 items');
    }

    async validateLastRowColumns() {
        const col1 = await this.page.textContent(this.Elements.lastRowFirstCol);
        const col2 = await this.page.textContent(this.Elements.lastRowSecondCol);
        const col3 = await this.page.textContent(this.Elements.lastRowThirdCol);

        expect(col1).toBe('7');
        expect(col2).toBe('asteria');
        expect(col3).toBe('Cloudbridge');
    }

}