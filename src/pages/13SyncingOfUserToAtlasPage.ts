import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class SyncingOfUserToAtlasPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        usersTab: "(//h6[normalize-space()='Users'])[1]",
        checkbox: "(//div[@class='dx-checkbox-container'])[1]",
        deleteButton: "//span[@aria-label='Delete']//button[@type='button']",
        continueButton: "//button[normalize-space()='Continue']",
        idLine: "(//div[@class='view-line'])[3]",
        lastNameLine: "(//div[contains(@class, 'view-line')][.//span[contains(text(), '\"LastName\"') and contains(text(), '\"jain\"')]])[2]",
        firstNameLine: "(//div[contains(@class, 'view-line')][.//span[contains(text(), '\"FirstName\"') and contains(text(), '\"VIVEKTEST\"')]])[2]",
        displayNameLine: "(//div[contains(@class, 'view-line')][.//span[contains(text(), '\"DisplayName\"') and contains(text(), '\"VIVEKTESTjain\"')]])[2]",
        servicesTab: "(//a[contains(text(),'Services')])[1]",
        atlasTab: "(//a[normalize-space()='Atlas'])[1]",
        searchBox: "(//div[contains(@class,'dx-texteditor-input-container')])[3]//input",
        searchBox1: "(//input[@aria-label='Filter cell'])[5]",
        firstUserCell: "(//td[contains(@role,'gridcell')][normalize-space()='User'])[1]",
        firstUserCell1: "(//td[normalize-space()='UsrVIVEKTESTjain'])[1]",
        fullscreenIcon: "//div[contains(@class,'modal fade scriptActionModal in')]//button[contains(@title,'Toggle fullscreen')]",
        okButton: "//button[@id='btnAtlasJsonViewerOk']",
        jsonCanvas: "(//canvas[@class='decorationsOverviewRuler' and @aria-hidden='true'])[2]",

    };

    async clickOnUsersTab() {
        await this.base.waitAndClick(this.Elements.usersTab);
        await this.page.waitForTimeout(7000);
    }

    async deleteUserIfCheckboxVisible() {
        while (true) {
            const checkboxVisible = await this.page.locator(this.Elements.checkbox).isVisible({ timeout: 5000 });

            if (checkboxVisible) {
                await this.base.waitAndClick(this.Elements.checkbox);
                await this.page.waitForTimeout(1000);
                await this.base.waitAndClick(this.Elements.deleteButton);
                await this.base.waitAndClick(this.Elements.continueButton);
                await this.page.waitForTimeout(10000);
            } else {
                console.log("Checkbox not visible. All deletions completed.");
                break;
            }
        }
    }

    async verifyMultipleFields(expectedFields: { [key: string]: string }) {
        const { LastName, FirstName, DisplayName } = expectedFields;

        const lastNameText = await this.base.getText(this.Elements.lastNameLine);
        const firstNameText = await this.base.getText(this.Elements.firstNameLine);
        const displayNameText = await this.base.getText(this.Elements.displayNameLine);

        expect(lastNameText.replace(/\s/g, '')).toContain(LastName.replace(/\s/g, ''));
        expect(firstNameText.replace(/\s/g, '')).toContain(FirstName.replace(/\s/g, ''));
        expect(displayNameText.replace(/\s/g, '')).toContain(DisplayName.replace(/\s/g, ''));
    }

    private jsonFieldKeys = [
        "LinkId",
        "id",
        "RefClass",
        "RefName",
        "BusinessEmail",
        "FirstName",
    ];


    async clickOnServices() {
        await this.base.waitAndClick(this.Elements.servicesTab);
    }

    async clickOnAtlas() {
        await this.base.waitAndClick(this.Elements.atlasTab);
    }

    async searchAndPressEnter(text: string) {
        const searchInput = this.page.locator(this.Elements.searchBox);
        await searchInput.click();
        await searchInput.fill(text);
        await searchInput.press("Enter");
        await this.page.waitForTimeout(3000);
    }

    async searchAndPressEnter1(text: string) {
        const searchInput1 = this.page.locator(this.Elements.searchBox1);
        await searchInput1.click();
        await searchInput1.fill(text);
        await searchInput1.press("Enter");
        await this.page.waitForTimeout(3000);
    }

    async clickOnFirstUserEntry() {
        await this.page.locator(this.Elements.firstUserCell).dblclick();
    }

    async clickOnFirstUserEntry1() {
        await this.page.locator(this.Elements.firstUserCell1).dblclick();
    }

    async clickFullscreenIcon() {
        await this.base.waitAndClick(this.Elements.fullscreenIcon);
        await this.page.waitForTimeout(2000);
    }

    // async verifyJsonFieldsNotEmpty() {
    //     const scrollCanvas = await this.page.locator(this.Elements.jsonCanvas);
    //     const scrollContainer = await scrollCanvas.locator('..');

    //     const scrollStep = 90;
    //     const maxScrollAttempts = 30;

    //     for (const key of this.jsonFieldKeys) {
    //         const keyPattern = `"${key}"`;
    //         let fieldValidated = false;

    //         for (let attempt = 0; attempt < maxScrollAttempts; attempt++) {
    //             const lines = await this.page.locator("//div[contains(@class,'view-line')]").all();

    //             for (const line of lines) {
    //                 const text = await line.textContent();
    //                 if (!text) continue;

    //                 if (text.includes(keyPattern)) {
    //                     //Important -  Match pattern like: "LastName": "something"
    //                     const match = text.match(new RegExp(`"${key}"\\s*:\\s*("?[^",\\s}]*"?)`));

    //                     if (match) {
    //                         const raw = match[1].replace(/["]/g, "").trim();

    //                         if (raw === "" || raw.toLowerCase() === "null" || raw === "undefined") {
    //                             throw new Error(`Field "${key}" is empty, null, or undefined`);
    //                         }

    //                         console.log(` Field "${key}" has valid value: ${raw}`);
    //                         fieldValidated = true;
    //                         break;
    //                     } else {
    //                         throw new Error(`Field "${key}" found but value could not be parsed`);
    //                     }
    //                 }
    //             }

    //             if (fieldValidated) break;

    //             await scrollContainer.evaluate((el, step) => {
    //                 el.scrollTop += step;
    //             }, scrollStep);

    //             await this.page.waitForTimeout(200);
    //         }

    //         if (!fieldValidated) {
    //             throw new Error(` Field "${key}" not found in JSON`);
    //         }
    //     }
    // }


    async verifyJsonFieldsNotEmpty() {
        const scrollCanvas = await this.page.locator(this.Elements.jsonCanvas);
        const scrollContainer = await scrollCanvas.locator('..');

        const scrollStep = 50;
        const maxScrollAttempts = 30;

        for (const key of this.jsonFieldKeys) {
            const xpath = `(//div[contains(@class, 'view-line')][.//span[contains(text(), '"${key}"')]])[2]`;
            const targetLocator = this.page.locator(xpath);

            let fieldFound = false;
            let text = "";

            for (let i = 0; i < maxScrollAttempts; i++) {
                if (await targetLocator.isVisible()) {
                    text = await targetLocator.textContent() || "";
                    fieldFound = true;
                    break;
                }

                await scrollContainer.evaluate((el, step) => {
                    el.scrollTop += step;
                }, scrollStep);
                await this.page.waitForTimeout(200);
            }

            if (!fieldFound) {
                throw new Error(`Field "${key}" not visible even after scrolling`);
            }

            const match = text.match(new RegExp(`"${key}"\\s*:\\s*("?[^",\\s}]*"?)`));
            if (!match) {
                throw new Error(`Could not parse value for key: "${key}"`);
            }

            const raw = match[1].replace(/["]/g, "").trim();

            if (key === "RefName") {
                expect(raw).toBe("QAutomationOne");
                console.log(`Field "${key}" is exactly "QAutomationOne"`);
            } else {
                if (raw === "" || raw.toLowerCase() === "null" || raw === "undefined") {
                    throw new Error(`Field "${key}" is empty, null, or undefined`);
                }
                console.log(`Field "${key}" has valid value: ${raw}`);
            }
        }
    }

    async clickOkButton() {
        await this.base.waitAndClick(this.Elements.okButton);
    }


    async verifyJsonFieldsNotEmpty1() {
    const scrollCanvas = await this.page.locator(this.Elements.jsonCanvas);
    const scrollContainer = await scrollCanvas.locator('..');

    const scrollStep = 50;
    const maxScrollAttempts = 30;

    const jsonFieldKeys = [
        "LinkId",
        "id",
        "RefClass",
        "RefName",
        "BusinessEmail",
        "FirstName",
        "LastName",
        "DisplayName"
    ];

    for (const key of jsonFieldKeys) {
        const xpath = `(//div[contains(@class, 'view-line')][.//span[contains(text(), '"${key}"')]])[2]`;
        const targetLocator = this.page.locator(xpath);

        let fieldFound = false;
        let text = "";

        for (let i = 0; i < maxScrollAttempts; i++) {
            if (await targetLocator.isVisible()) {
                text = await targetLocator.textContent() || "";
                fieldFound = true;
                break;
            }

            await scrollContainer.evaluate((el, step) => {
                el.scrollTop += step;
            }, scrollStep);
            await this.page.waitForTimeout(200);
        }

        if (!fieldFound) {
            throw new Error(`Field "${key}" not visible even after scrolling`);
        }

        const rawLine = text.replace(/\s/g, '');

        if (key === "RefName") {
            expect(rawLine).toContain(`"RefName":"QAutomationOne"`);
            console.log(`Field "RefName" is exactly "QAutomationOne"`);
        } else if (key === "DisplayName") {
            expect(rawLine).toContain(`"DisplayName":"VIVEKTESTjain"`);
            console.log(`Field "DisplayName" is exactly "VIVEKTESTjain"`);
        } else {
            const match = rawLine.match(new RegExp(`"${key}":"?([^",}]*)"?`));
            const value = match?.[1]?.trim();

            if (!value || value.toLowerCase() === "null" || value === "undefined") {
                throw new Error(`Field "${key}" is empty, null, or undefined`);
            }

            console.log(`Field "${key}" has valid value: ${value}`);
        }
    }
}



}