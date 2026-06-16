import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class CreateNewClassInConnector {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        schemaTab: "//button[normalize-space()='Schema']",
        classesLabel: "//p[@aria-label='Classes']",
        addIcon: "//span[contains(text(),'add')]",
        nameInput: "(//input[@id='key-1-id'])[2]",
        displayNameInput: "(//input[@id='key-2-id'])[2]",
        dropdown: "(//input[@id='app-config'])[1]",
        personOption: "//li[normalize-space()='person']",
        saveIcon: "//span[contains(text(),'check')]",
        discardChangesMessage: "//div[contains(text(),'Your unsaved changes will be discarded.')]",
        cancelButton: "//button[normalize-space()='Cancel']",
        checkboxInput: "//input[@type='checkbox']",
        mainSave: "(//span[@aria-label='Save'])[1]",
        successToast: "//div[contains(text(),'Connector Updated Successfully')]",
        successToast1: "//div[contains(text(),'updated')]",
        copyIcon: "//span[contains(text(),'content_copy')]",
        jsonSchema2: "(//span[@aria-label='Json'])[2]",
        automationUserField: "//span[@class='mtk5' and normalize-space(text()) = '\"AutomationUser\"']",
        automationUserDisplayField: "(//span[@class='mtk5' and contains(normalize-space(), 'Automation') and contains(normalize-space(), 'User')])[1]",
        delete: "(//span[contains(text(),'delete')])[2]",
        continue: "//button[normalize-space()='Continue']",
        arrowIcomSelf: "(//span[contains(text(),'chevron_right')])[1]",
        automationTwo: "//span[normalize-space()='PAutomationTwo']",
        userProfile: "//button[@aria-label='open profile']",
        logout: "//h5[normalize-space()='Logout']",
    };

    async clickOnSchemaTab() {
        await this.base.waitAndClick(this.Elements.schemaTab);
    }

    async clickAutomationTwoConnector() {
    await this.base.waitAndClick(this.Elements.automationTwo);

    }


    async clickOnClasses() {
        await this.base.waitAndClick(this.Elements.classesLabel);
    }

    async clickOnProfile() {
        await this.base.waitAndClick(this.Elements.userProfile);
    }

    async clickOnLogout() {
        await this.base.waitAndClick(this.Elements.logout);
    }

    async clickOnAddIcon() {
        await this.base.waitAndClick(this.Elements.addIcon);
    }

    async verifyCheckboxIsClickable() {
        const checkbox = this.page.locator(this.Elements.checkboxInput);
        await expect(checkbox).toBeVisible();
        await expect(checkbox).toBeEnabled();
    }

    async enterNameInput(name: string) {
        await this.base.clearAndType(this.Elements.nameInput, name);
    }

    async enterDisplayNameInput(displayName: string) {
        await this.base.clearAndType(this.Elements.displayNameInput, displayName);
    }

    async clickOnDropdown() {
        await this.base.waitAndClick(this.Elements.dropdown);
    }

    async selectPerson() {
        await this.base.waitAndClick(this.Elements.personOption);
    }

    async validateDiscardMessageAndClickCancel(expectedMessage: string) {
        const message = await this.page.locator(this.Elements.discardChangesMessage).textContent();
        expect(message).toContain(expectedMessage);
        await this.base.waitAndClick(this.Elements.cancelButton);
    }

    async clickOnSaveIcon() {
        await this.base.waitAndClick(this.Elements.saveIcon);
    }

    async clickOnMainSaveIcon() {
        await this.base.waitAndClick(this.Elements.mainSave);
    }

    async validateSuccessMessage(expectedText: string) {
        const successToast = this.page.locator(this.Elements.successToast);
        await expect(successToast).toBeVisible({ timeout: 7000 });
        const actualText = await successToast.textContent();
        expect(actualText?.trim()).toContain(expectedText);
        await expect(successToast).toBeHidden({ timeout: 7000 });
    }

    async validateSuccessMessage1(expectedText1: string) {
        const successToast1 = this.page.locator(this.Elements.successToast1);
        await expect(successToast1).toBeVisible({ timeout: 7000 });
        const actualText1 = await successToast1.textContent();
        expect(actualText1?.trim()).toContain(expectedText1);
        await expect(successToast1).toBeHidden({ timeout: 7000 });
    }

    async validateCopyIconIsClickable() {
        const locator = this.page.locator(this.Elements.copyIcon);
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
    }

    async clickOnArrowIcon() {
        await this.base.waitAndClick(this.Elements.arrowIcomSelf);
    }

    async clickOnJsonSchema2() {
        await this.page.waitForTimeout(2000);
        await this.base.waitAndClick(this.Elements.jsonSchema2);
        await this.page.waitForTimeout(4000);
    }

    async validateAutomationUserField() {
        const count = await this.page.locator(this.Elements.automationUserField).count();
        expect(count).toBeGreaterThan(0);
    }

    async validateAutomationUserDisplayField() {
        const count = await this.page.locator(this.Elements.automationUserDisplayField).count();
        expect(count).toBeGreaterThan(0);
    }

    async clickOnDelete() {
        await this.base.waitAndClick(this.Elements.delete);
    }

    async clickOnContinue() {
        await this.base.waitAndClick(this.Elements.continue);
    }

}
