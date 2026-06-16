import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class GlobalMethodsPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        methodsTabButton: "(//button[normalize-space()='Methods'])[1]",
        methodsLabel: "//p[@aria-label='Methods']",
        expandMethodsChevron: "(//span[contains(text(),'chevron_right')])[2]",
        connectMethod: "//p[@aria-label='Connect']",
        frameworkNameInput: "(//input[@id='method-framework-1-id'])[1]",
        displayNameInput: "(//input[@id='method-displayName-1-id'])[1]",
        scriptBlock: "//span[contains(text(),'BEGIN POWERSHELL SCRIPTBLOCK')]",
        disconnectMethod: "//p[@aria-label='Disconnect']",
        onboardMethod: "//p[@aria-label='OnBoard']",
        offboardMethod: "//p[@aria-label='OffBoard']",
        plusIcon: "(//span[contains(text(),'add')])[1]"
    };

    async clickMethodsTabButton() {
        await this.base.waitAndClick(this.Elements.methodsTabButton);
    }

    async clickMethods() {
        await this.base.waitAndClick(this.Elements.methodsLabel);
    }

    async expandMethods() {
        await this.base.waitAndClick(this.Elements.expandMethodsChevron);
    }

    async clickConnectMethod() {
        await this.base.waitAndClick(this.Elements.connectMethod);
    }

    async validateConnectNames() {
        const framework = await this.page.locator(this.Elements.frameworkNameInput).inputValue();
        const displayName = await this.page.locator(this.Elements.displayNameInput).inputValue();
        expect(framework).toBe("Connect");
        expect(displayName).toBe("Connect");
    }

    async validateScriptBlockPresence() {
        const scriptBlock = this.page.locator(this.Elements.scriptBlock);
        await expect(scriptBlock).toBeVisible({ timeout: 5000 });
    }

    async verifyOtherMethods() {
        await expect(this.page.locator(this.Elements.disconnectMethod)).toBeVisible();
        await expect(this.page.locator(this.Elements.onboardMethod)).toBeVisible();
        await expect(this.page.locator(this.Elements.offboardMethod)).toBeVisible();
    }

    async clickPlusIcon() {
        await this.base.waitAndClick(this.Elements.plusIcon);
    }

    async validateFrameworkAndDisplayNameInEditor(frameworkName: string, displayName: string) {
        const frameworkLocator = this.page.locator(`//span[normalize-space()='"${frameworkName}"']`);
        const displayNameEscaped = `"New\u00A0Method\u00A01"`;
        const displayNameLocator = this.page.locator(`//span[normalize-space()='${displayNameEscaped}']`);

        const scrollContainer = this.page.locator('//div[contains(@class, "monaco-scrollable-element")]').first();
        const scrollStep = 100;
        const maxScrolls = 30;

        for (let i = 0; i < maxScrolls; i++) {
            if (await frameworkLocator.isVisible() && await displayNameLocator.isVisible()) break;
            await scrollContainer.evaluate((el, step) => el.scrollTop += step, scrollStep);
            await this.page.waitForTimeout(200);
        }

        await expect(frameworkLocator).toBeVisible();
        await expect(displayNameLocator).toBeVisible();
    }


}
