import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class BotStudioIntegrationCU {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        achalTestEnv: "(//a[normalize-space()='Achal Test Env'])[1]",
        Root: "//a[@id='6422a829-d8de-4795-844b-a97f6f1be587_00000000-0000-0000-0000-000000000000_anchor']",
        ODBCBot: "(//a[normalize-space()='ODBC Bot'])[1]",
        RawData1: "(//div[normalize-space()='Raw Data-1'])[1]",
        readiConnector: "(//td[@role='gridcell'][normalize-space()='ConnectID_Lalit'])[11]",
        firstName: "//td[normalize-space()='UsrAllanDeyoung']",
        readiConnector2: "(//td[@role='gridcell'][normalize-space()='ConnectID_Lalit'])[12]",
        readiConnector3: "(//td[@role='gridcell'][normalize-space()='ConnectID_Lalit'])[13]",
        view: "(//div[@class='json-editor-rw-txt-3'][normalize-space()='View'])[2]",
        view1: "(//div[@class='json-editor-rw-txt-3'][normalize-space()='View'])[1]",
        idVerify: "(//div[@class='view-line'])[3]",
        Close1: "(//button[@type='button'][normalize-space()='Close'])[5]",
        Close2: "(//button[@type='button'][normalize-space()='Close'])[2]",
        cancleButton: "//button[@id='btnAtlasJsonViewerCancel']",
        okButton: "//button[@id='btnAtlasJsonViewerOk']",
        user: "//td[@role='gridcell'][normalize-space()='User']",
        searchBox1: "(//input[@aria-label='Filter cell'])[5]",
        scrollableContainer: '//div[contains(@class, "monaco-scrollable-element")]',
        IsActive1: "(//div[contains(@class, 'view-line')][   .//span[contains(text(), '\"IsActive\"')] and    .//span[contains(text(), 'false')] ])[2]",
        IsActive2: "(//div[contains(@class, 'view-line')][   .//span[contains(text(), '\"IsActive\"')] and    .//span[contains(text(), 'true')] ])[2]",
        FirstNameDemo: "(//div[contains(@class, 'view-line')][.//span[contains(text(), '\"FirstName\"') and contains(text(), '\"demo\"')]])[2]",

    };
    async clickOnAchalTestEnv() {
        await this.base.waitAndClick(this.Elements.achalTestEnv);
    }

    async clickOnUser() {
        const ReadiConnector6 = this.page.locator(this.Elements.user);
        await ReadiConnector6.dblclick();
    }

    async clickOnCancleButton() {
        await this.base.waitAndClick(this.Elements.cancleButton);
    }

    async clickOnOkButton() {
        await this.base.waitAndClick(this.Elements.okButton);
    }

    async clickOnRoot() {
        await this.base.waitAndClick(this.Elements.Root);
    }

    async selectODBCBot() {
        await this.base.waitAndClick(this.Elements.ODBCBot);
    }

    async clickOnRawData1() {
        await this.base.waitAndClick(this.Elements.RawData1);
    }

    async doubleClickOnReadiConnector() {
        const ReadiConnector = this.page.locator(this.Elements.readiConnector);
        await ReadiConnector.dblclick();
    }

    async doubleClickOnFirstName() {
        const ReadiConnector = this.page.locator(this.Elements.firstName);
        await ReadiConnector.dblclick();
    }

    async doubleClickOnReadiConnector2() {
        const ReadiConnector = this.page.locator(this.Elements.readiConnector2);
        await ReadiConnector.dblclick();
    }

    async doubleClickOnReadiConnector3() {
        const ReadiConnector = this.page.locator(this.Elements.readiConnector3);
        await ReadiConnector.dblclick();
    }

    async clickOnViewText() {
        await this.base.waitAndClick(this.Elements.view);
    }

    async clickOnViewText1() {
        await this.base.waitAndClick(this.Elements.view1);
    }

    async verifyIdText(expectedId: string) {
        const idText = await this.base.getText(this.Elements.idVerify);
        expect(idText).toContain(expectedId);
    }

    async clickOnFirstCloseButton() {
        await this.base.waitAndClick(this.Elements.Close1);
    }

    async clickOnSecondCloseButton() {
        await this.base.waitAndClick(this.Elements.Close2);
    }

    async verifyIsActiveIsFalse() {
        const isActiveText = await this.base.getText(this.Elements.IsActive1);
        expect(isActiveText.replace(/\s+/g, '')).toContain(`"IsActive":false`);

    }

    async verifyIsActiveIsTrue() {
        const isActiveText = await this.base.getText(this.Elements.IsActive2);
        expect(isActiveText.replace(/\s+/g, '')).toContain(`"IsActive":true`);

    }

    async extractIdFromJson(): Promise<string> {
        const jsonLine = await this.base.getText(this.Elements.idVerify);
        const match = jsonLine.match(/"id":\s*"([^"]+)"/);
        if (match && match[1]) {
            return match[1];
        }
        throw new Error("ID not found in JSON text.");
    }

    async extractFirstAndLastName(): Promise<{ firstName: string, lastName: string }> {
        const editorLocator = this.page.locator("//div[contains(@class, 'view-line') and .//span[contains(text(), '\"FirstName\"')]]");
        await editorLocator.first().waitFor({ timeout: 10000 });

        const allLines = await this.page.locator("//div[contains(@class, 'view-line')]").allInnerTexts();

        let firstName = "";
        let lastName = "";

        for (const rawLine of allLines) {
            const line = rawLine.replace(/\u00A0/g, ' ').replace(/\s+/g, '');

            if (line.includes('"FirstName":')) {
                const match = line.match(/"FirstName":"([^"]+)"/);
                if (match) {
                    firstName = match[1];
                }
            }

            if (line.includes('"LastName":')) {
                const match = line.match(/"LastName":"([^"]+)"/);
                if (match) {
                    lastName = match[1];
                }
            }

            if (firstName && lastName) break;
        }

        if (!firstName || !lastName) {
            console.error("DEBUG - allLines from Monaco:");
            console.log(allLines.join('\n'));
            throw new Error("FirstName or LastName not found. Please check Monaco content above.");
        }

        return { firstName, lastName };
    }

    async extractFirstNameOnly(): Promise<{ firstName: string }> {
        const editorLocator = this.page.locator("//div[contains(@class, 'view-line') and .//span[contains(text(), '\"FirstName\"')]]");
        await editorLocator.first().waitFor({ timeout: 10000 });

        const allLines = await this.page.locator("//div[contains(@class, 'view-line')]").allInnerTexts();

        let firstName = "";

        for (const rawLine of allLines) {
            const line = rawLine.replace(/\u00A0/g, ' ').replace(/\s+/g, '');

            if (line.includes('"FirstName":')) {
                const match = line.match(/"FirstName":"([^"]+)"/);
                if (match) {
                    firstName = match[1];
                    break;
                }
            }
        }

        if (!firstName) {
            console.error("DEBUG - allLines from Monaco:");
            console.log(allLines.join('\n'));
            throw new Error("FirstName not found. Please check Monaco content above.");
        }

        return { firstName };
    }



    async searchAndPressEnter1(text: string) {
        const searchInput1 = this.page.locator(this.Elements.searchBox1);
        await searchInput1.click();
        await searchInput1.fill("");
        await searchInput1.fill(text);
        await searchInput1.press("Enter");
        await this.page.waitForTimeout(3000);
    }

    async validateUserByLinkId(expectedId: string) {
        const resultLocator = this.page.locator("//td[@role='gridcell'][normalize-space()='User']");
        const cancelButton = this.page.locator("//button[@id='btnAtlasJsonViewerCancel']");
        const totalResults = await resultLocator.count();

        for (let i = 0; i < totalResults; i++) {
            console.log(`Checking User result #${i + 1}`);
            await resultLocator.nth(i).dblclick();
            await this.page.waitForTimeout(5000);

            const monacoLines = await this.page.locator("//div[contains(@class,'view-line')]").allTextContents();
            const fullJson = monacoLines.join('\n');

            const linkIdMatch = fullJson.match(/"LinkId":\s*"([^"]+)"/);
            const isActiveMatch = fullJson.match(/"IsActive":\s*(false|true)/);

            if (!linkIdMatch) {
                console.log("LinkId not found in this result.");
                await cancelButton.click();
                continue;
            }

            const actualLinkId = linkIdMatch[1];
            console.log(`Found LinkId: ${actualLinkId}`);

            if (actualLinkId === expectedId) {
                console.log("LinkId matched!");

                if (isActiveMatch && isActiveMatch[1] === "false") {
                    console.log("IsActive is false. Test Passed.");
                    return;
                } else {
                    throw new Error("IsActive is not false!");
                }
            } else {
                console.log("LinkId not matched. Trying next.");
                await cancelButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        throw new Error("No matching LinkId found in any result.");
    }

    async validateUserByLinkIdIsActiveTrue(expectedId: string) {
        const resultLocator = this.page.locator("//td[@role='gridcell'][normalize-space()='User']");
        const cancelButton = this.page.locator("//button[@id='btnAtlasJsonViewerCancel']");
        const totalResults = await resultLocator.count();

        for (let i = 0; i < totalResults; i++) {
            console.log(`🔍 Checking User result #${i + 1}`);

            await resultLocator.nth(i).dblclick();
            await this.page.waitForTimeout(5000);

            const monacoLines = await this.page.locator("//div[contains(@class,'view-line')]").allTextContents();
            const fullJson = monacoLines.join('\n');

            const linkIdMatch = fullJson.match(/"LinkId":\s*"([^"]+)"/);
            const isActiveMatch = fullJson.match(/"IsActive":\s*(false|true)/);

            if (!linkIdMatch) {
                console.log("LinkId not found in this result.");
                await cancelButton.click();
                continue;
            }

            const actualLinkId = linkIdMatch[1];
            console.log(`Found LinkId: ${actualLinkId}`);

            if (actualLinkId === expectedId) {
                console.log("LinkId matched!");

                if (isActiveMatch && isActiveMatch[1] === "true") {
                    console.log("IsActive is true. Test Passed.");
                    return;
                } else {
                    throw new Error("IsActive is not true!");
                }
            } else {
                console.log("LinkId not matched. Trying next...");
                await cancelButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        throw new Error("No matching LinkId found in any result.");
    }

    async verifyFirstNameIsDemo() {
        const firstNameText = await this.base.getText(this.Elements.FirstNameDemo);
        expect(firstNameText.replace(/\s+/g, '')).toContain(`"FirstName":"demo"`);
    }

    async validateUserByLinkIdAndFirstName(expectedId: string, expectedFirstName: string) {
        const resultLocator = this.page.locator("//td[@role='gridcell'][normalize-space()='User']");
        const cancelButton = this.page.locator("//button[@id='btnAtlasJsonViewerCancel']");
        const totalResults = await resultLocator.count();

        for (let i = 0; i < totalResults; i++) {
            console.log(`Checking User result #${i + 1}`);
            await resultLocator.nth(i).dblclick();
            await this.page.waitForTimeout(3000);

            const monacoLines = await this.page.locator("//div[contains(@class,'view-line')]").allTextContents();
            const fullJson = monacoLines.join('\n');

            const linkIdMatch = fullJson.match(/"LinkId":\s*"([^"]+)"/);

            if (!linkIdMatch) {
                console.log("LinkId not found. Skipping.");
                await cancelButton.click();
                continue;
            }

            const actualLinkId = linkIdMatch[1];
            console.log(`Found LinkId: ${actualLinkId}`);

            if (actualLinkId === expectedId) {
                console.log("LinkId matched!");

                const scrollContainer = this.page
                    .locator("//div[@id='atlasJsonDocumentEditor']//div[contains(@class,'monaco-scrollable-element')]")
                    .first();

                const targetLocator = this.page.locator(`(//div[contains(@class, 'view-line')][.//span[contains(text(), '"FirstName"') and contains(text(), '"${expectedFirstName}"')]])[2]`);

                const scrollStep = 100;
                const maxScrolls = 30;
                let isVisible = false;

                for (let j = 0; j < maxScrolls; j++) {
                    if (await targetLocator.isVisible()) {
                        isVisible = true;
                        break;
                    }
                    await scrollContainer.evaluate((el, step) => el.scrollTop += step, scrollStep);
                    await this.page.waitForTimeout(200);
                }

                if (isVisible) {
                    console.log(`FirstName "${expectedFirstName}" is visible in Monaco. Test Passed.`);
                    return;
                } else {
                    throw new Error(`FirstName "${expectedFirstName}" not found even after scrolling.`);
                }
            } else {
                console.log("LinkId not matched. Trying next...");
                await cancelButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        throw new Error("No matching LinkId found with the expected FirstName.");
    }

    async clearLinkIdValueInMonaco() {
        await this.page.waitForTimeout(4000);
        const linkIdLine = this.page.locator("//div[contains(@class,'view-line')]//span[contains(text(), 'LinkId')]");

        await linkIdLine.first().waitFor({ timeout: 5000 });
        await linkIdLine.first().click();
        await this.page.keyboard.press("End");
        await this.page.keyboard.press("ArrowLeft");
        await this.page.keyboard.down("Shift");
        for (let i = 0; i < 37; i++) {
            await this.page.keyboard.press("ArrowLeft");
        }
        await this.page.keyboard.up("Shift");
        await this.page.waitForTimeout(200);
        await this.page.keyboard.press("Backspace");

        await this.page.keyboard.type('"');

        console.log("Correctly removed full UUID including the starting 'e'.");
    }

    async verifyLinkIdIsPresent(expectedLinkId: string) {

        await this.page.waitForTimeout(1000);

        const lineLocator = this.page.locator("//div[contains(@class,'view-line')]//span[contains(text(), 'LinkId')]/..//span");

        await lineLocator.first().waitFor({ timeout: 5000 });

        const count = await lineLocator.count();
        let fullText = "";

        for (let i = 0; i < count; i++) {
            const part = await lineLocator.nth(i).innerText();
            fullText += part;
        }

        const normalized = fullText.replace(/\s/g, "");
        const expected = `"LinkId":"${expectedLinkId}"`;

        expect(normalized).toContain(expected);
        console.log("LinkId is present and matches expected value.");
    }

    async validateCountryValueInMonaco(expectedCountry: string) {
    const scrollContainer = this.page
        .locator("//div[@id='atlasJsonDocumentEditor']//div[contains(@class,'monaco-scrollable-element')]")
        .first();

    const countryLocator = this.page.locator(
        `(//div[contains(@class, 'view-line')][.//span[contains(normalize-space(.), '"Country":') and normalize-space(.) != '"Country":""']])[2]`
    );

    const scrollStep = 100;
    const maxScrollAttempts = 30;

    for (let i = 0; i < maxScrollAttempts; i++) {
        if (await countryLocator.isVisible()) {
            const text = await countryLocator.textContent();
            console.log("Found country line:", text);

            expect(text?.replace(/\s+/g, '')).toContain(`"Country":"${expectedCountry}"`);
            return;
        }

        await scrollContainer.evaluate((el, step) => {
            el.scrollTop += step;
        }, scrollStep);

        await this.page.waitForTimeout(200);
    }

    throw new Error(`"Country": "${expectedCountry}" not visible in Monaco editor even after scrolling.`);
}



}
