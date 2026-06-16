import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class NewFunctionalityPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        methodsTabButton: "(//button[normalize-space()='Methods'])[1]",

    };

    async getTotalApplicationCount(): Promise<number> {
        const locator = this.page.locator("//p[text()='Total Applications']/preceding-sibling::p[1]");
        await locator.waitFor({ state: "visible" });
        const text = await locator.textContent();
        const count = Number(text?.trim());
        console.log("Total Application Count:", count);
        return count;
    }
}