import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class DataFlowRulesValidation {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        rulesExpandIcon: "(//span[contains(text(),'chevron_right')])[4]",
        dataFlowOption: "//p[@aria-label='DataFlow']",
        atlasDropdown: "(//input[@id='app-config'])[1]",
        dropdownOption: (value: string) => `//li[contains(text(),'${value}')]`,
        actionDropdown: "(//input[@id='app-config'])[2]",
        actionXpath: (action: string) => `//span[normalize-space(text())='"In"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[.//span[normalize-space(text())='"Action"'] and .//span[normalize-space(text())='\"${action}\"']]`,
        refNameXpath: (refName: string) => `//span[normalize-space(text())='"RefName"']/following-sibling::span[2][normalize-space(text())='\"${refName}\"']`,
        extensionEnabledTrue: "//span[normalize-space(text())='\"Extensions\"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[position() <= 2][.//span[normalize-space(text())='\"Enabled\"'] and .//span[normalize-space(text())='true']]",
        extensionDynamicFalse: "//span[normalize-space(text())='\"Extensions\"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[position() <= 3][.//span[normalize-space(text())='\"Dynamic\"'] and .//span[normalize-space(text())='false']]",
        extensionEnabledFalse: "//span[normalize-space(text())='\"Extensions\"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[position() <= 2][.//span[normalize-space(text())='\"Enabled\"'] and .//span[normalize-space(text())='false']]",
        extensionDynamicTrue: "//span[normalize-space(text())='\"Extensions\"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[position() <= 3][.//span[normalize-space(text())='\"Dynamic\"'] and .//span[normalize-space(text())='true']]",
        checkbox1: "(//input[@type='checkbox'])[1]",
        checkbox2: "(//input[@type='checkbox'])[2]",
        plusIcon: "(//div[@title='Add a row'])[2]",
        automationNameInput: "(//input[@role='textbox'])[1]",
        automationRuleText: "(//span[contains(text(),'Automation')])[1]",
        clearNameBox: "(//input[@value='Automation'])[1]",
        saveIcon: "(//span[@aria-label='Save'])[3]",
        requiredMessage: "(//p[normalize-space()='Name is required'])[1]",
        nameField: "//input[@aria-invalid='true']",
        descriptionBox: "(//input[@id='Object-In-Matching-Rule-Description-Field-1-id'])[1]",
        propertiesDropdown: "(//input[@id='select-dropdown-with-chip-tags'])[1]",
        propertyOption: (index: number) => `(//li[@id='select-dropdown-with-chip-tags-option-${index}'])[1]`,
        enabledCheckbox: "(//input[@type='checkbox'])[9]",
        businessEmail: "(//li[normalize-space()='BusinessEmail'])[1]",
        saveInboundIcon: "(//span[contains(text(),'check')])[2]",
        scriptIcon: "(//span[contains(text(),'code')])[2]",
        draftToggle: "//input[@aria-label='ant design']",
        monacoEditorLine: "//div[@class='view-line']",
        publishIcon: "//span[contains(text(),'Publish')]",
        continueButton: "(//button[normalize-space()='Continue'])[1]",
        scriptSavedText: '//span[normalize-space()=\'"Automation suite"\']',
        objectMatchingCheckbox: "(//input[@type='checkbox'])[4]",
        deleteIcon: "(//a[@title='Delete'])[1]",
        automationValidationSpan: "//span[normalize-space(text())='\"Object\"']/ancestor::div[contains(@class, 'view-line')]/following-sibling::div[.//span[normalize-space(text())='\"Name\"'] and .//span[normalize-space(text())='\"Automation\"']]",
        scrollableContainer: '//div[contains(@class, "monaco-scrollable-element")]',
        checkIcon: "(//span[contains(text(),'check')])[1]",
    };

    async expandRules() {
        await this.base.waitAndClick(this.Elements.rulesExpandIcon);
    }

    async clickDataFlowOption() {
        await this.base.waitAndClick(this.Elements.dataFlowOption);
    }

    async clickAtlasDropdown() {
        await this.base.waitAndClick(this.Elements.atlasDropdown);
    }

    async selectOptionFromDropdown(option: string) {
        await this.base.waitAndClick(this.Elements.dropdownOption(option));
        await this.page.waitForTimeout(5000);
    }

    async clickActionDropdown() {
        await this.base.waitAndClick(this.Elements.actionDropdown);
    }

    async selectActionValue(value: string) {
        await this.base.waitAndClick(this.Elements.dropdownOption(value));
    }

    async validateActionAndRefName(action: string, refName: string) {
        await this.base.waitForSelector(this.Elements.actionXpath(action));
        await this.base.waitForSelector(this.Elements.refNameXpath(refName));
    }

    async validateExtensionCheckbox(enabled: boolean, dynamic: boolean) {
        if (enabled) {
            await this.base.waitForSelector(this.Elements.extensionEnabledTrue);
        } else {
            await this.base.waitForSelector(this.Elements.extensionEnabledFalse);
        }

        if (dynamic) {
            await this.base.waitForSelector(this.Elements.extensionDynamicTrue);
        } else {
            await this.base.waitForSelector(this.Elements.extensionDynamicFalse);
        }
    }

    async checkCheckbox2() {
        await this.base.waitAndClick(this.Elements.checkbox2);
    }

    async uncheckCheckbox1() {
        await this.base.waitAndClick(this.Elements.checkbox1);
    }

    async clickPlusIcon() {
        await this.base.waitAndClick(this.Elements.plusIcon);
    }

    async enterAutomationName(name: string) {
        await this.page.fill(this.Elements.automationNameInput, name);
    }

    async pressEnter() {
        await this.page.keyboard.press('Enter');
    }


    async validateAutomationName() {
        const scrollContainer = await this.page.locator(this.Elements.scrollableContainer).first();
        const targetLocator = this.page.locator(this.Elements.automationValidationSpan);

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

        throw new Error('"automation" name value not visible even after scrolling.');
    }


    async clickAutomationRule() {
        await this.base.waitAndClick(this.Elements.automationRuleText);
    }

    async clearNameBox() {
        await this.page.fill(this.Elements.clearNameBox, "");
    }

    async clickSaveIcon() {
        await this.base.waitAndClick(this.Elements.saveIcon);
    }

    async validateErrorMessage(msg: string) {
        await expect(this.page.locator(this.Elements.requiredMessage)).toHaveText(msg);
    }

    async enterName(name: string) {
        await this.page.fill(this.Elements.nameField, name);
    }

    async enterDescription(desc: string) {
        await this.page.fill(this.Elements.descriptionBox, desc);
    }

    async clickPropertiesDropdown() {
        await this.base.waitAndClick(this.Elements.propertiesDropdown);
    }

    async selectPropertyOption(index: number) {
        await this.base.waitAndClick(this.Elements.propertyOption(index));
    }

    async selectBusinessEmailOption() {
        await this.base.waitAndClick(this.Elements.businessEmail);
    }

    async checkEnabledCheckboxIfNot() {
        const checkbox = this.page.locator(this.Elements.enabledCheckbox);
        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
    }

    async saveInboundPage() {
        await this.base.waitAndClick(this.Elements.saveInboundIcon);
    }

    async clickScriptIcon() {
        await this.base.waitAndClick(this.Elements.scriptIcon);
    }

    async switchToDraftMode() {
        await this.base.waitAndClick(this.Elements.draftToggle);
    }

    async writeScript(script: string) {
        const editor = this.page.locator(this.Elements.monacoEditorLine);
        await editor.click();
        await this.page.keyboard.type(script);
    }

    async clickPublishIcon() {
        await this.base.waitAndClick(this.Elements.publishIcon);
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton);
    }

    async clickEnabledCheckbox() {
        await this.page.check(this.Elements.enabledCheckbox);
    }

    async saveScript() {
        await this.base.waitAndClick(this.Elements.saveInboundIcon);
    }

    async validateScriptSaved() {
        const scrollContainer = await this.page.locator(this.Elements.scrollableContainer).first();
        const targetLocator = this.page.locator(this.Elements.scriptSavedText);

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

        throw new Error('"Automation Suite" script text not visible even after scrolling.');
    }

    async clickObjectMatchingCheckbox() {
        await this.base.waitAndClick(this.Elements.objectMatchingCheckbox);
    }

    async clickDeleteIcon() {
        await this.base.waitAndClick(this.Elements.deleteIcon);
    }

    async validateRuleDeleted() {
        await expect(this.page.locator(this.Elements.automationValidationSpan)).toHaveCount(0);
    }

    async scrollToCanvas() {
        const canvas = this.page.locator("(//canvas[@aria-hidden='true'])[1]");
        await canvas.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
    }

    async clickCheckIcon() {
        await this.base.waitAndClick(this.Elements.checkIcon);
    }

}