import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect } from '@playwright/test';

export default class ValidationRules {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        allowedValidationTab: "//span[normalize-space()='Allowed']",
        allowedInputBox: "(//input[contains(@placeholder,'Type and press enter')])[2]",
        saveAllowedButton: "(//button[@aria-label='save'])[2]",
        enabledCheckbox: "(//span[contains(@class,'dx-checkbox-icon')])[1]",
        saveSchemaCheckbox: "(//span[contains(text(),'check')])[1]",
        dropdownButton: "(//button[contains(@title,'Open')])[2]",
        dropdownOption: (name: string) => `//li[normalize-space()='${name}']`,
        disallowedValidationTab: "//span[normalize-space()='Disallowed']",
        disallowedInputBoxFirst: "//input[@placeholder='Type value and press enter...']",
        disallowedInputBoxSecond: "//input[contains(@placeholder,'Add more values...')]",
        disallowedValidationCheckbox: "(//span[@class='dx-checkbox-icon'])[7]",
        errorIcon: "//span[contains(text(),'error')]",
        formatValidationTab: "//span[normalize-space()='Format']",
        regexInputBox: "(//input[@id='properties-format-1-id'])[1]",
        formatCheckbox: "(//span[@class='dx-checkbox-icon'])[9]",
        formatInputBoxFirst: "//input[@placeholder='Type value and press enter...']",
        formatInputBoxSecond: "//input[contains(@placeholder,'Add more values...')]",
        stringValidationTab: "//span[normalize-space()='String']",
        minLengthInput: "//input[@id='properties-minimum-length-id']",
        maxLengthInput: "//input[@id='properties-maximum-length-id']",
        restrictedCharInput: "//input[@id='restricted-characters-length-id']",
        stringCheckbox: "(//span[@class='dx-checkbox-icon'])[13]",
        stringInputBox: "//input[@placeholder='Type value and press enter...']",
        additionalStringInputBox: "//input[contains(@placeholder,'Add more values...')]",
        numericDropdown: "(//input[@id='app-config'])[2]",
        dropdownOption1: (text: string) => `//li[normalize-space()='${text}']`,

        numericTab: "//span[normalize-space()='Numeric']",
        maximumInput: "//input[@id='properties-maximum-id']",
        numericCheckbox: "(//span[@class='dx-checkbox-icon'])[11]",

        numericInputFirst: "//input[@placeholder='Type value and press enter...']",
        numericInputSecond: "//input[contains(@placeholder,'Add more values...')]",
    };

    async clickAllowedValidationTab() {
        await this.base.waitAndClick(this.Elements.allowedValidationTab);
    }

    async enterAllowedValues(values: string[]) {
        const box = this.page.locator(this.Elements.allowedInputBox);
        for (const value of values) {
            await box.fill(value);
            await box.press("Enter");
        }
    }

    async clickSaveAllowedCheckbox() {
        await this.base.waitAndClick(this.Elements.saveAllowedButton);
    }

    async clickEnabledCheckbox() {
        await this.base.waitAndClick(this.Elements.enabledCheckbox);
    }

    async clickSaveSchemaCheckbox() {
        await this.base.waitAndClick(this.Elements.saveSchemaCheckbox);
    }

    async clickDropdown() {
        await this.base.waitAndClick(this.Elements.dropdownButton);
    }

    async selectSingleDropdownValue(value: string) {
        await this.base.waitAndClick(this.Elements.dropdownOption(value));
    }

    async selectMultipleDropdownValues(values: string[]) {
        for (const value of values) {
            await this.page.locator("(//button[contains(@title,'Open')])[2]").click();
            await this.page.locator(`//li[normalize-space()='${value}']`).click();
        }
    }

    async clickDisallowedValidationTab() {
        await this.base.waitAndClick(this.Elements.disallowedValidationTab);
    }

    async sendSingleValueToDisallowed(value: string) {
        const box = this.page.locator(this.Elements.allowedInputBox);
        await box.fill(value);
        await box.press("Enter");
    }

    async enableDisallowedCheckbox() {
        await this.base.waitAndClick(this.Elements.disallowedValidationCheckbox);
    }

    async sendTwoValuesToDisallowed(values: string[]) {
        const firstBox = this.page.locator(this.Elements.disallowedInputBoxFirst);
        await firstBox.fill(values[0]);
        await firstBox.press("Enter");

        const secondBox = this.page.locator(this.Elements.disallowedInputBoxSecond);
        await secondBox.fill(values[1]);
        await secondBox.press("Enter");
    }

    async verifyErrorIconVisible() {
        const isVisible = await this.base.isElementVisible(this.Elements.errorIcon);
        expect(isVisible).toBeTruthy();
    }

    async clickFormatValidationTab() {
        await this.base.waitAndClick(this.Elements.formatValidationTab);
    }

    async enterRegexValue(regex: string) {
        await this.page.locator(this.Elements.regexInputBox).fill('');
        await this.page.locator(this.Elements.regexInputBox).fill(regex);
        await this.page.locator(this.Elements.regexInputBox).press('Enter');
    }

    async enableFormatValidationCheckbox() {
        await this.base.waitAndClick(this.Elements.formatCheckbox);
    }

    async sendFormatValues(values: string[]) {
        const firstInput = this.page.locator(this.Elements.formatInputBoxFirst);
        await firstInput.fill('');
        await firstInput.fill(values[0]);
        await firstInput.press('Enter');

        const secondInput = this.page.locator(this.Elements.formatInputBoxSecond);
        await secondInput.fill('');
        await secondInput.fill(values[1]);
        await secondInput.press('Enter');

    }

    async clickStringValidationTab() {
        await this.base.waitAndClick(this.Elements.stringValidationTab);
    }

    async setStringValidationInputs(min: string, max: string, restricted: string) {
        await this.page.locator(this.Elements.minLengthInput).fill(min);
        await this.page.locator(this.Elements.maxLengthInput).fill(max);
        await this.page.locator(this.Elements.restrictedCharInput).fill(restricted);
    }

    async enableStringValidationCheckbox() {
        await this.base.waitAndClick(this.Elements.stringCheckbox);
    }

    async sendAndValidateStringInputs(data: { value: string, shouldError: boolean }[]) {
        for (let i = 0; i < data.length; i++) {
            const { value, shouldError } = data[i];

            const inputSelector = i === 0 ? this.Elements.formatInputBoxFirst : this.Elements.formatInputBoxSecond;

            const input = this.page.locator(inputSelector);
            await input.fill("");
            await input.fill(value);
            await this.page.keyboard.press("Enter");

            await this.page.waitForTimeout(1000)

            const errorIcon = this.page.locator(this.Elements.errorIcon);
            const isVisible = await errorIcon.isVisible();

            console.log(`Value "${value}" → Error visible: ${isVisible}`);

            if (shouldError) {
                expect(isVisible).toBeTruthy();
            } else {
                expect(isVisible).toBeFalsy();
            }
        }
    }


    async clickNumericDropdown() {
        await this.base.waitAndClick(this.Elements.numericDropdown);
    }

    async selectDropdownOption(option: string) {
        const selector = this.Elements.dropdownOption1(option);
        await this.base.waitAndClick(selector);
    }

    async clickNumericTabAndSetMaxValue(value: number) {
        await this.base.waitAndClick(this.Elements.numericTab);
        const maxInput = this.page.locator(this.Elements.maximumInput);
        await maxInput.fill("");
        await maxInput.fill(String(value));
    }

    async enableNumericCheckbox() {
        await this.base.waitAndClick(this.Elements.numericCheckbox);
    }

    async sendAndValidateNumericInputs(data: { value: string, shouldError: boolean }[]) {
        for (let i = 0; i < data.length; i++) {
            const { value, shouldError } = data[i];
            const inputSelector = i === 0 ? this.Elements.numericInputFirst : this.Elements.numericInputSecond;
            const input = this.page.locator(inputSelector);
            await input.fill("");
            await input.fill(value);
            await this.page.keyboard.press("Enter");

            await this.page.waitForTimeout(500);

            const errorIcon = this.page.locator(this.Elements.errorIcon);
            const isVisible = await errorIcon.isVisible();

            if (shouldError) {
                expect(isVisible).toBeTruthy();
            } else {
                expect(isVisible).toBeFalsy();
            }
        }
    }


    async isTabClickable(tabName: string): Promise<boolean> {
        const tabLocator = this.page.locator(`//span[normalize-space()='${tabName}']/parent::a`);

        const styles = await tabLocator.evaluate((el) => {
            const computed = window.getComputedStyle(el);
            return {
                cursor: computed.getPropertyValue('cursor'),
                opacity: computed.getPropertyValue('opacity')
            };
        });

        return styles.cursor === 'pointer' && parseFloat(styles.opacity) === 1;
    }

}