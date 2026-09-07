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
        try {
            await element.click();
        } catch (error) {
            console.log('[waitAndClick] Click blocked, attempting to dismiss overlay and retry:', locator);
            // A leftover modal/overlay (e.g. alertify's cover backdrop, or an app overlay panel left
            // open by an earlier action) can linger and intercept pointer events on later clicks,
            // regardless of which locator is being clicked. Try the common dismiss paths, then retry
            // the click once with a fresh wait rather than failing outright.
            const alertifyOk = this.page.locator("#alertify-ok");
            if (await alertifyOk.isVisible({ timeout: 1000 }).catch(() => false)) {
                await alertifyOk.click().catch(() => {});
            } else {
                await this.page.keyboard.press('Escape').catch(() => {});
            }
            await this.page.waitForTimeout(1000);
            await element.waitFor({ state: "visible", timeout: 15000 });
            await element.click();
        }
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