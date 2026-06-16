import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect } from '@playwright/test';

export default class MethodClassValidation {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        expandClassesSection: "(//span[contains(text(),'chevron_right')])[1]",
        userClass: "//p[@aria-label='User']",
        displayNameInput: "(//input[@id='key-2-id'])[2]",
        checkIcon: "//span[contains(text(),'check')]",
        invalidDisplayNameText: "//div[contains(text(),'Display Name field is invalid')]",
        okButton: "//button[normalize-space()='Ok']",
        requiredFieldText: "//p[normalize-space()='Display Name field is required']",
        jsonFieldValidation: "(//span[@class='mtk5' and normalize-space(text()) = '\"User\"'])[2]",
        expandUserClass: "(//span[contains(text(),'chevron_right')])[2]",
        methodsTab: "(//p[@aria-label='Methods'][normalize-space()='Methods'])[1]",
        expandMethod: "(//span[contains(text(),'chevron_right')])[2]",
        addIcon: "//span[contains(text(),'add')]",
        scriptToggle: "//span[contains(@class, 'MuiSwitch-root')]//input[@type='checkbox' and @aria-label='ant design']",
        monacoEditor: "//div[contains(@class,'view-lines monaco-mouse-cursor-text')]",
        publishIcon: "//span[contains(text(),'Publish')]",
        continueButton: "//button[normalize-space()='Continue']",
        jsonFieldValidation1: "(//span[normalize-space()='\"-----BEGIN POWERSHELL SCRIPTBLOCK-----\"'])[1]",
        frameworkInput: "//input[@value='NewMethod1']",
        displayNameInput1: "//input[@value='New Method 1']",
        getMethodTab: "//p[@aria-label='Get']",
        newMethodTab: "//p[@aria-label='New']",
        updateMethodTab: "//p[@aria-label='Update']",
        removeMethodTab: "//p[@aria-label='Remove']",
        getMethodInSchema: "(//span[contains(@class,'mtk5')][normalize-space()='\"Get\"'])[1]",
        newMethodInSchema: "(//span[contains(@class,'mtk5')][normalize-space()='\"New\"'])[1]",
        updateMethodInSchema: "(//span[contains(@class,'mtk5')][normalize-space()='\"Update\"'])[1]",
        removeMethodInSchema: "(//span[contains(@class,'mtk5')][normalize-space()='\"Remove\"'])[1]",
        delete: "(//span[@aria-label='Delete'])[1]",
    };

    async expandClassesSection() {
        await this.base.waitAndClick(this.Elements.expandClassesSection);
    }

    async clickUserClass() {
        await this.base.waitAndClick(this.Elements.userClass);
    }

    async clearDisplayName() {
        await this.base.clearAndType(this.Elements.displayNameInput, "");
    }

    async clickCheckIcon() {
        await this.base.waitAndClick(this.Elements.checkIcon);
    }

    async validateInvalidDisplayNameText() {
        const isVisible = await this.page.locator(this.Elements.invalidDisplayNameText).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async clickOkButton() {
        await this.base.waitAndClick(this.Elements.okButton);
    }

    async validateRequiredDisplayNameText() {
        const isVisible = await this.page.locator(this.Elements.requiredFieldText).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async enterDisplayNameAgain(name: string) {
        await this.base.clearAndType(this.Elements.displayNameInput, name);
    }

    async validateJsonSchemaFields() {
        const isVisible = await this.page.locator(this.Elements.jsonFieldValidation).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async expandUserClass() {
        await this.base.waitAndClick(this.Elements.expandUserClass);
    }

    async clickMethodsTab() {
        await this.base.waitAndClick(this.Elements.methodsTab);
    }

    async expandMethod() {
        await this.base.waitAndClick(this.Elements.expandMethod);
    }

    async clickAddIcon() {
        await this.base.waitAndClick(this.Elements.addIcon);
    }

    async toggleOffScript() {
        const toggle = this.page.locator(this.Elements.scriptToggle);
        if (await toggle.isChecked()) {
            await toggle.uncheck();
        }
    }

    async enterScript(script: string) {
        const editor = this.page.locator(this.Elements.monacoEditor);
        await editor.click();
        await this.page.keyboard.type(script, { delay: 10 });
    }

    async clickPublishAndContinue() {
        await this.page.locator(this.Elements.publishIcon).click();
        await this.page.locator(this.Elements.continueButton).click();
    }

    async validateJsonSchemaFieldIsNotVisible() {
        const isVisible = await this.page.locator(this.Elements.jsonFieldValidation1).isVisible({ timeout: 5000 });
        expect(isVisible).toBeFalsy();
    }

    async validateJsonSchemaFieldIsVisible() {
        const isVisible = await this.page.locator(this.Elements.jsonFieldValidation1).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async validateFrameworkAndDisplayNameVisible() {
        const isFrameworkVisible = await this.base.isElementVisible(this.Elements.frameworkInput);
        const isDisplayVisible = await this.base.isElementVisible(this.Elements.displayNameInput1);
        if (!isFrameworkVisible || !isDisplayVisible) {
            throw new Error("Framework name or Display name is not visible");
        }
    }

    async clickOnMethodTab(method: 'Get' | 'New' | 'Update' | 'Remove') {
        const locator = {
            Get: this.Elements.getMethodTab,
            New: this.Elements.newMethodTab,
            Update: this.Elements.updateMethodTab,
            Remove: this.Elements.removeMethodTab
        }[method];

        await this.base.waitAndClick(locator);
    }

    async validateMethodInSchema(method: 'Get' | 'New' | 'Update' | 'Remove') {
        const locator = {
            Get: this.Elements.getMethodInSchema,
            New: this.Elements.newMethodInSchema,
            Update: this.Elements.updateMethodInSchema,
            Remove: this.Elements.removeMethodInSchema
        }[method];

        const isVisible = await this.base.isElementVisible(locator);
        if (!isVisible) {
            throw new Error(`${method} method is not visible in the JSON schema`);
        }
    }

    async clickOnDelete() {
    await this.base.waitAndClick(this.Elements.delete);
  }

}
