import { Page } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForLoadState(),
            this.page.click(link)
        ])
    }

    async waitAndClick1(selector: string, page: Page) {
        await page.click(selector);
    }

    async refreshPage() {
        await this.page.reload();
    }

    async waitAndDoubleClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({ state: "visible" });
        await element.dblclick();
    }

    async isElementVisible(locator: string): Promise<boolean> {
        const element = this.page.locator(locator);
        return await element.isVisible();
    }

    async getText(locator: string): Promise<string> {
        const element = this.page.locator(locator);
        await element.waitFor({ state: "visible" });
        return await element.innerText();
    }

    async clearAndType(selector: string, value: string) {
        const element = this.page.locator(selector);
        await element.fill("");
        await element.fill(value);
    }

    async waitForSelector(locator: string, timeout: number = 5000): Promise<void> {
        const element = this.page.locator(locator);
        await element.waitFor({ state: 'visible', timeout });
    }

}