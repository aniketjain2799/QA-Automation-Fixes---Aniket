import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class SelfClassAndProperties {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        selfClass: "//p[@aria-label='_SELF']",
        dropDown: "(//input[@id='app-config'])[3]",
        option1: "(//li[@role='option'])[1]",
        checkIcon: "//span[contains(text(),'check')]",
        continue: "//button[normalize-space()='Continue']",
        jsonIcon: "//button[@aria-label='json']//span",
        jsonFieldValidation: "//span[@class='mtk5' and normalize-space(text()) = '\"AutomationUser\"']",
        closeIcon: "button[aria-label='close'] span",
        copyIcon: "//span[contains(text(),'content_copy')]",
        arrowIcomSelf: "(//span[contains(text(),'chevron_right')])[1]",
        propertiesSection: "(//p[contains(@aria-label,'Properties')])[1]",
        PlusIcon: "//span[contains(text(),'add')]",
        discardIcon: "//span[contains(text(),'undo')]",
        discardedText: "//div[contains(text(),'Unsaved changes have been discarded')]",
        nameMustBeUnique: "//div[contains(text(),'Name must be unique')]",
        JsonIcon2: "(//span[contains(text(),'data_object')])[2]",
        jsonjsonFieldValidation2: "//span[@class='mtk5' and normalize-space(text()) = '\"NewProperty1\"']",
    };

    async clickOnSelfClass() {
        await this.base.waitAndClick(this.Elements.selfClass);
    }

    async clickInheritsFromDropdown() {
        await this.base.waitAndClick(this.Elements.dropDown);
    }

    async selectFirstOption() {
        await this.base.waitAndClick(this.Elements.option1);
    }

    async clickCheckAndContinue() {
        await this.base.waitAndClick(this.Elements.checkIcon);
        await this.base.waitAndClick(this.Elements.continue);
    }

    async validateJsonSchemaFields() {
        const isVisible = await this.page.locator(this.Elements.jsonFieldValidation).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async clickOnArrowIcon() {
        await this.base.waitAndClick(this.Elements.arrowIcomSelf);
    }

    async clickOnPropertiesSection() {
        await this.base.waitAndClick(this.Elements.propertiesSection);
    }

    async clickPlusIcon() {
        await this.base.waitAndClick(this.Elements.PlusIcon);
    }

    async clickDiscardIcon() {
        await this.base.waitAndClick(this.Elements.discardIcon);
    }

    async validateDiscardedText() {
        const isVisible = await this.page.locator(this.Elements.discardedText).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async clickCheckIcon() {
        await this.base.waitAndClick(this.Elements.checkIcon);
    }

    async validateUniqueNameError() {
        const isVisible = await this.page.locator(this.Elements.nameMustBeUnique).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async clickJsonIcon() {
        await this.base.waitAndClick(this.Elements.JsonIcon2);
    }

    async validateJsonSchemaProperty() {
        await this.page.waitForTimeout(10000);
        const isVisible = await this.page.locator(this.Elements.jsonjsonFieldValidation2).isVisible({ timeout: 5000 });
        expect(isVisible).toBeTruthy();
    }

    async clickCheckIcon1() {
        await this.page.waitForTimeout(8000);
        await this.base.waitAndClick(this.Elements.checkIcon);
    }

}
