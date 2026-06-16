import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class CreateNewConnector {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {

        createNewBtn: "//p[normalize-space()='Create new']",
        generalTab: "//button[normalize-space()='General']",
        nameInput: "//input[@placeholder='Name...']",
        displayNameInput: "//input[@placeholder='Display Name...']",
        frameworkNameInput: "//input[@placeholder='Framework Name...']",
        shortNameInput: "//input[@placeholder='Short Name...']",
        versionInputDropdown: "(//input[@class='dx-texteditor-input'])[1]",
        SelectOptioncreatedBy: "//div[contains(text(),'AdeleVance')]",
        vendorNameInput: "//input[@placeholder='Vendor Name']",
        productNameInput: "//input[@placeholder='Product Name...']",
        productShortNameInput: "//input[@placeholder='Product Short Name...']",
        typeAndPressEnterInput: "//input[@placeholder='Type and press enter']",
        saveIcon: "//span[@aria-label='Save']",
        displayNameError: "(//div[contains(text(),\"The 'Display Name' field is mandatory\")])[1]",
        okButton: "//button[normalize-space()='Ok']",
        connectorHeader: "//h2[normalize-space()='Connector ODBC']",
        connectorHeader1: "//h2[normalize-space()='DConnector ODBC']",
        jsonIcon: "//span[@aria-label='Json']",
        conODBCField: "//span[@class='mtk5' and normalize-space(text()) = '\"DconODBC\"']",
        connectorODBCField: "//span[@class='mtk5' and normalize-space(text()) = '\"DConnector ODBC\"']",
        sqlField: "//span[@class='mtk5' and normalize-space(text()) = '\"SQL\"']",
        sodbcField: "//span[@class='mtk5' and normalize-space(text()) = '\"SODBC\"']",
        adeleVanceField: "//span[@class='mtk5' and normalize-space(text()) = '\"AdeleVance\"']",
        vodbcField: "//span[@class='mtk5' and normalize-space(text()) = '\"VODBC\"']",
        podbcField: "//span[@class='mtk5' and normalize-space(text()) = '\"PODBC\"']",
        psodbcField: "//span[@class='mtk5' and normalize-space(text()) = '\"PSODBC\"']",
        closeIcon2: "(//span[contains(text(),'close')])[2]",

    };


    async clickOnCreateNew() {
        await this.base.waitAndClick(this.Elements.createNewBtn);
    }

    async clickOnGeneralTab() {
        await this.base.waitAndClick(this.Elements.generalTab);
    }

    async enterName(name: string) {
        await this.page.fill(this.Elements.nameInput, name);
    }

    async enterDisplayNameInput(displayName: string) {
        await this.page.fill(this.Elements.displayNameInput, displayName);
    }

    async enterFrameworkName(frameworkName: string) {
        await this.page.fill(this.Elements.frameworkNameInput, frameworkName);
    }

    async enterShortName(shortName: string) {
        await this.page.fill(this.Elements.shortNameInput, shortName);
    }

    async clickOnContactDropdown() {
        await this.base.waitAndClick(this.Elements.versionInputDropdown);
    }

    // async clickOnSelectOptioncreatedBy() {
    //     await this.base.waitAndClick(this.Elements.SelectOptioncreatedBy);
    // }

    async clickOnSelectOptioncreatedBy() {
        const targetText = 'VivekJain';
        const scrollContainerSelector = '.dx-scrollable-container';
        const optionLocator = this.page.locator(`//div[contains(text(),'${targetText}')]`);
        const loadingSpinner = this.page.locator("//div[contains(@class, 'dx-loadindicator') or contains(@class, 'dx-overlay-content') and not(contains(@style, 'display: none'))]");

        for (let i = 0; i < 30; i++) {
            const isVisible = await optionLocator.isVisible().catch(() => false);
            if (isVisible) {
                await this.base.waitAndClick(`//div[contains(text(),'${targetText}')]`);
                return;
            }
            await this.page.evaluate((selector) => {
                const container = document.querySelector(selector);
                if (container) container.scrollBy(0, 40);
            }, scrollContainerSelector);

            try {
                await this.page.waitForSelector("//div[contains(@class, 'dx-loadindicator') or contains(@class, 'dx-overlay-content')]", {
                    state: 'detached',
                    timeout: 3000
                });
            } catch {
                console.log('Spinner still visible, retrying...');
            }

            await this.page.waitForTimeout(300);
        }

        throw new Error(`'${targetText}' not found after scrolling with lazy load.`);
    }




    async enterVendorName(vendorName: string) {
        await this.page.fill(this.Elements.vendorNameInput, vendorName);
    }

    async enterProductName(productName: string) {
        await this.page.fill(this.Elements.productNameInput, productName);
    }

    async enterProductShortName(productShortName: string) {
        await this.page.fill(this.Elements.productShortNameInput, productShortName);
    }

    async enterVersion(version: string) {
        await this.page.fill(this.Elements.typeAndPressEnterInput, version);
    }

    async clickOnSaveIcon() {
        await this.base.waitAndClick(this.Elements.saveIcon);
    }

    async clickOnJsonIcon() {
        await this.base.waitAndClick(this.Elements.jsonIcon);
        await this.page.waitForTimeout(4000);
    }

    async validateConODBCField() {
        const count = await this.page.locator(this.Elements.conODBCField).count();
        expect(count).toBeGreaterThan(0);
    }

    async validateConnectorODBCField() {
        const count = await this.page.locator(this.Elements.connectorODBCField).count();
        expect(count).toBeGreaterThan(0);
    }

    async validateSQLField() {
        const count = await this.page.locator(this.Elements.sqlField).count();
        expect(count).toBeGreaterThan(0);
    }

    async validateSODBCField() {
        const scrollContainer = await this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const targetLocator = this.page.locator(this.Elements.sodbcField);

        const scrollStep = 100;
        const maxScrollAttempts = 40;

        for (let i = 0; i < maxScrollAttempts; i++) {

            if (await targetLocator.isVisible()) {
                const count = await targetLocator.count();
                expect(count).toBeGreaterThan(0);
                return;
            }

            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);

            await this.page.waitForTimeout(200);
        }

        throw new Error('"SODBC" field not found in JSON schema after scrolling.');
    }



    async validateAdeleVanceField() {
        const scrollContainer = await this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const targetLocator = this.page.locator(this.Elements.adeleVanceField);

        const scrollStep = 100;
        const maxScrollAttempts = 30;

        for (let i = 0; i < maxScrollAttempts; i++) {
            if (await targetLocator.isVisible()) {
                const count = await targetLocator.count();
                expect(count).toBeGreaterThan(0);
                return;
            }
            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);
            await this.page.waitForTimeout(200);
        }

        throw new Error('"Adele Vance" field not found in JSON schema after scrolling.');
    }


    async validateVODBCField() {
        const scrollContainer = await this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const targetLocator = this.page.locator(this.Elements.vodbcField);

        const scrollStep = 100;
        const maxScrollAttempts = 30;

        for (let i = 0; i < maxScrollAttempts; i++) {
            if (await targetLocator.isVisible()) {
                const count = await targetLocator.count();
                expect(count).toBeGreaterThan(0);
                return;
            }
            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);
            await this.page.waitForTimeout(200);
        }

        throw new Error('"VODBC" field not found in JSON schema after scrolling.');
    }


    async validatePODBCField() {
        const scrollContainer = await this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const targetLocator = this.page.locator(this.Elements.podbcField);

        const scrollStep = 100;
        const maxScrollAttempts = 30;

        for (let i = 0; i < maxScrollAttempts; i++) {
            if (await targetLocator.isVisible()) {
                const count = await targetLocator.count();
                expect(count).toBeGreaterThan(0);
                return;
            }
            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);
            await this.page.waitForTimeout(200);
        }

        throw new Error('"PODBC" field not found in JSON schema after scrolling.');
    }


    async validatePSODBCField() {
        const scrollContainer = await this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const targetLocator = this.page.locator(this.Elements.psodbcField);

        const scrollStep = 100;
        const maxScrollAttempts = 30;

        for (let i = 0; i < maxScrollAttempts; i++) {
            if (await targetLocator.isVisible()) {
                const count = await targetLocator.count();
                expect(count).toBeGreaterThan(0);
                return;
            }
            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);
            await this.page.waitForTimeout(200);
        }

        throw new Error('"PSODBC" field not found in JSON schema after scrolling.');
    }

    async clickOnCloseIcon2() {
        await this.base.waitAndClick(this.Elements.closeIcon2);
    }

}
