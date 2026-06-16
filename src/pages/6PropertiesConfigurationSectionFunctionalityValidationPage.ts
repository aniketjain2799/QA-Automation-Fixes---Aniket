import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class PropertiesCongigurationSection {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        propertiesName: "(//input[@role='textbox'])[3]",
        DisplayName: "//div[normalize-space()='Display Name']",
        SQLQueries1: "//span[@title='SQLQueries']",
        properties: "//p[@aria-label='Properties']",
        SQLQueries2: "//p[@aria-label='SQL Queries']",
        clearDisplayNameClick: "(//td[@role='gridcell'])[4]",
        visibleInputSQLQueries: "//input[@value='SQLQueries']",
        visibleInputSQLQueries2: "//input[@value='SQL Queries']",
        visibleInputSingle: "//input[@value='Single']",
        openDropdownDataType: "(//button[@title='Open'])[3]",
        openDropdownCollectionType: "(//button[@title='Open'])[2]",
        dropdownOptionString: "//li[normalize-space()='string']",
        dropdownOptionNumeric: "//li[normalize-space()='numeric']",
        dropdownOptionBoolean: "//li[normalize-space()='boolean']",
        dropdownOptionGUID: "//li[normalize-space()='GUID']",
        dropdownOptionDatetime: "//li[normalize-space()='datetime']",
        dropdownOptionObject: "//li[normalize-space()='object']",
        dropdownOptionAny: "//li[normalize-space()='any']",
        dropdownOptionMultipleArray: "//li[normalize-space()='Multiple (array)']",
        descriptionInput: "(//input[@id='description-1-id'])[1]",
        Configuration: "//button[normalize-space()='Configuration']",
        boxSQLQueries: "//input[@placeholder='SQL Queries...']",
        boxNewProperty1: "//input[@placeholder='New Property 1...']",
        openGeneralInfoDropdown: "(//button[@title='Open'])[2]",
        openGeneralInfoDropdown1: "(//button[@title='Open'])[3]",
        optionMultipleDataSet: "//li[normalize-space()='Multiple (array)']",
        multipleDataSetBox: "//input[@placeholder='Type value and press enter...']",
        multipleDataSetBox2: "//input[@placeholder='Add more values...']",  
        delete: "//span[@aria-label='Delete']//button[@aria-label='open localization']"
    };

    async clickOnConfiguration() {
        await this.base.waitAndClick(this.Elements.Configuration);
    }

    async clickOnDelete() {
        await this.base.waitAndClick(this.Elements.delete);
    }

    async enterNameInput(name: string) {
        await this.base.clearAndType(this.Elements.propertiesName, name);
    }

    async enterDisplayNameInput(displayName: string) {
        await this.base.clearAndType(this.Elements.propertiesName, displayName);
    }

    async clickOnSQLQueries1() {
        await this.base.waitAndClick(this.Elements.SQLQueries1);
    }

    async clickOnDisplayName() {
        await this.base.waitAndClick(this.Elements.DisplayName);
    }

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async clickOnSQLQueries2() {
        await this.base.waitAndClick(this.Elements.SQLQueries2);
    }

    async clickOnClearDisplayNameClick() {
        await this.base.waitAndClick(this.Elements.clearDisplayNameClick);
    }

    async verifyGeneralInfoVisibleInputs() {
        await expect(this.page.locator(this.Elements.visibleInputSQLQueries)).toBeVisible();
        await expect(this.page.locator(this.Elements.visibleInputSQLQueries2)).toBeVisible();
        await expect(this.page.locator(this.Elements.visibleInputSingle)).toBeVisible();
    }

    async validateSingleDropdownOptions() {
        await this.page.click(this.Elements.openDropdownDataType);
        const singleOptions = [
            this.Elements.dropdownOptionString,
            this.Elements.dropdownOptionNumeric,
            this.Elements.dropdownOptionBoolean,
            this.Elements.dropdownOptionGUID,
            this.Elements.dropdownOptionDatetime,
            this.Elements.dropdownOptionObject
        ];
        for (const option of singleOptions) {
            await expect(this.page.locator(option)).toBeVisible();
        }
    }

    async validateMultipleArrayDropdownOptions() {
        await this.page.click(this.Elements.openDropdownCollectionType);
        await this.page.locator(this.Elements.dropdownOptionMultipleArray).click();
        await this.page.click(this.Elements.openDropdownDataType);

        const multipleOptions = [
            this.Elements.dropdownOptionString,
            this.Elements.dropdownOptionNumeric,
            this.Elements.dropdownOptionGUID,
            this.Elements.dropdownOptionObject,
            this.Elements.dropdownOptionAny
        ];
        for (const option of multipleOptions) {
            await expect(this.page.locator(option)).toBeVisible();
        }
    }

    async fillDescription(text: string) {
        const descriptionLocator = this.page.locator(this.Elements.descriptionInput);
        await descriptionLocator.fill(text);
        await expect(descriptionLocator).toHaveValue(text);
    }

    async verifySQLQueriesAndNewProperty1Visible() {
        await this.page.evaluate(() => window.scrollTo(0, 0));
        await expect(this.page.locator(this.Elements.multipleDataSetBox)).toBeVisible();
        await expect(this.page.locator(this.Elements.boxNewProperty1)).toBeVisible();
    }

    async typeSingleValueInSQLQueriesBox(value: string) {
        await this.page.locator(this.Elements.multipleDataSetBox).fill('');
        await this.page.locator(this.Elements.multipleDataSetBox).fill(value);
    }

    async changeGeneralInfoToMultipleDataset() {
        await this.base.waitAndClick(this.Elements.openGeneralInfoDropdown);
        await this.base.waitAndClick(this.Elements.optionMultipleDataSet);
    }

    async changeGeneralInfoToMultipleDataset1() {
        await this.base.waitAndClick(this.Elements.openGeneralInfoDropdown1);
        await this.base.waitAndClick(this.Elements.optionMultipleDataSet);
    }

    async typeMultipleValuesInSQLQueriesBox(values: string[]) {
        for (let i = 0; i < values.length; i++) {
            const inputSelector = i === 0
                ? this.Elements.multipleDataSetBox
                : this.Elements.multipleDataSetBox2;

            const inputBox = this.page.locator(inputSelector);

            await inputBox.waitFor({ state: 'visible' });
            await inputBox.fill(values[i]);
            await inputBox.press('Enter');
        }
    }


}