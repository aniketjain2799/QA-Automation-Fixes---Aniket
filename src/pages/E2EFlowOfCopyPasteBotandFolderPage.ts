import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class CopyPasteBotAndFolderPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        copyFolderAndBot: "(//a[normalize-space()='CopyFolderAndBot'])[1]",
        root: "(//a[normalize-space()='Root'])[1]",
        botforCopy: "(//a[normalize-space()='BotforCopy'])[1]",
        copyPaste: "//a[normalize-space()='CopyPaste']",
        pasteBotAndFolder: "(//a[normalize-space()='PasteBotAndFolder'])[1]",
        copyOption: "a[href='#'][rel='1']",
        copy: "a[href='#'][rel='8']",
        delete: "a[href='#'][rel='2']",
        delete2: "a[href='#'][rel='10']",
        copyBtton: "//button[@id='btnCopyTreeJson']",
        paste: "a[href='#'][rel='9']",
        paste3: "a[href='#'][rel='8']",
        botforCopy2: "(//a[normalize-space()='BotforCopy'])[2]",
        rawData0: "(//div[normalize-space()='Raw Data-0'])[1]",
        totalRawCount: "//div[@class='dx-info']",
        copyPaste2: "(//a[normalize-space()='CopyPaste'])[2]",
        botforCopy3: "(//a[normalize-space()='BotforCopy'])[3]",
        clickOk: "//button[@id='alertify-ok']",
        botforCopy4: "(//a[normalize-space()='BotforCopy'])[4]",
        botforCopy5: "(//a[normalize-space()='BotforCopy'])[5]",
        PastefolderAndbot: "(//a[normalize-space()='PastefolderAndbot'])[1]",
        rightRoot: "(//a[normalize-space()='Root'])[2]",

    };


    async clickOnCopyFolderAndBot() {
        await this.base.waitAndClick(this.Elements.copyFolderAndBot);
    }

    async clickOnCopyPaste4() {
        await this.base.waitAndClick(this.Elements.botforCopy4);
    }

    async clickOnCopyPaste5() {
        await this.base.waitAndClick(this.Elements.botforCopy5);
    }

    async clickOnBotforCopy21() {
        await this.page.waitForTimeout(5000);
        await this.base.waitAndClick(this.Elements.botforCopy3);
        await this.page.waitForTimeout(5000);
    }

    async clickOnBotforCopy211() {
        await this.page.waitForTimeout(5000);
        await this.base.waitAndClick(this.Elements.botforCopy2);
        await this.page.waitForTimeout(5000);
    }

    async rightClickOnBotforCopy2() {
        const rightElement = await this.page.waitForSelector(this.Elements.botforCopy2, { timeout: 8000 });
        await rightElement.click({ button: "right" });

    }

    async rightClickOnBotforCopy3() {
        const rightElement = await this.page.waitForSelector(this.Elements.botforCopy3, { timeout: 8000 });
        await rightElement.click({ button: "right" });

    }

    async rightClickOnBotforCopy4() {
        const rightElement = await this.page.waitForSelector(this.Elements.botforCopy4, { timeout: 8000 });
        await rightElement.click({ button: "right" });

    }

    async clickOnCopyButton() {
        await this.base.waitAndClick(this.Elements.copyOption);
    }

    async clickOnPaste3() {
        await this.base.waitAndClick(this.Elements.paste3);
    }

    async clickOnClickOk() {
        await this.base.waitAndClick(this.Elements.clickOk);
    }

    async clickOnRoot() {
        await this.page.waitForTimeout(5000);
        await this.base.waitAndClick(this.Elements.root);
    }

    async rightClickOnBotforCopy() {
        const rightElement = await this.page.waitForSelector(this.Elements.botforCopy, { timeout: 8000 });
        await rightElement.click({ button: "right" });

    }

    async clickOnCopyButtonOk() {
        await this.base.waitAndClick(this.Elements.copyBtton);
    }

    async clickOnCopyPaste2() {
        await this.base.waitAndClick(this.Elements.copyPaste2);
    }

    async clickOnCopyButton1() {
        await this.base.waitAndClick(this.Elements.copy);
    }

    async clickOnDeleteButton() {
        await this.base.waitAndClick(this.Elements.delete);
    }

    async clickOnPasteBotAndFolder() {
        await this.base.waitAndClick(this.Elements.pasteBotAndFolder);
    }

    async clickOnPastefolderAndbot() {
        await this.base.waitAndClick(this.Elements.PastefolderAndbot);
    }

    async rightClickOnPasteBotAndFolder() {
        const rightElement = await this.page.waitForSelector(this.Elements.pasteBotAndFolder, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnRootFolder() {
        await this.page.waitForTimeout(6000);
        const rightElement = await this.page.waitForSelector(this.Elements.rightRoot, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnCopyPaste2() {
        const rightElement = await this.page.waitForSelector(this.Elements.copyPaste2, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnPaste() {
        await this.base.waitAndClick(this.Elements.paste);
    }

    async clickOnDelete2() {
        await this.base.waitAndClick(this.Elements.delete2);
    }

    async rightClickOnCopyPaste() {
        const rightElement = await this.page.waitForSelector(this.Elements.copyPaste, { timeout: 8000 });
        await rightElement.click({ button: "right" });

    }

    async validateTotalItems() {
        await this.page.waitForTimeout(6000);
        const totalItemsText = await this.page.textContent(this.Elements.totalRawCount);
        expect(totalItemsText).toContain('Page 1 of 1 (10 items)');
    }

}