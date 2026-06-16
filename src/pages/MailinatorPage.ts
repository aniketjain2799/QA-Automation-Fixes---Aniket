import { Page } from "@playwright/test";

export class MailinatorPage {
    constructor(private page: Page) {}

    async navigateToMailinator(url: string) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async searchEmail(email: string) {
        const searchInputLocator = "//input[@id='search']";
        const goButtonLocator = "//button[normalize-space()='GO']";
        await this.page.locator(searchInputLocator).fill(email);
        await this.page.locator(goButtonLocator).click();
    }

    async openEmail(subject: string) {
        const emailLocator = `(//td[normalize-space()='${subject}'])[1]`;
        await this.page.locator(emailLocator).click();
    }

    async clickLinkInIframe() {
        const iframeLocator = "//iframe[@id='html_msg_body']";
        const linkLocator = "//a[normalize-space()='Click here']";
        const iframe = this.page.frameLocator(iframeLocator);
        await iframe.locator(linkLocator).click();
    }
}
