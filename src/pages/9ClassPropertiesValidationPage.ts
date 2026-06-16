import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect } from '@playwright/test';

export default class PropertiesClassValidation {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        propertiesTab: "//p[@aria-label='Properties']",
        addButton: "//span[contains(text(),'add')]",
        NewProperty1Field: "//td[normalize-space()='New Property 1']",
        nameInput: "(//input[@role='textbox'])[3]",
        displayNameCell: "//td[normalize-space()='New Property 1']",
        searchIcon: "(//div[@aria-label='Search box'])[1]",
        containsButton: "//span[normalize-space()='Contains']",
        searchInputBox: "(//input[@aria-label='Filter cell'])[1]",
        resultValue: "//span[normalize-space()='Democheck']",
        checkIcon: "(//span[contains(text(),'check')])[1]",
        searchBoxClearArea: "(//div[@aria-label='Search box'])[1]",
        doesNotContainButton: "//span[normalize-space()='Does not contain']",
        startsWithButton: "//span[normalize-space()='Starts with']",
        endsWithButton: "//span[normalize-space()='Ends with']",
        equalsButton: "//span[normalize-space()='Equals']",
        doesNotEqualButton: "//span[normalize-space()='Does not equal']",
        idcheckbox: "(//span[@class='dx-checkbox-icon'])[3]",
        mappingDropdown: "(//div[@class='dx-dropdowneditor-icon'])[3]",
        inboundDropdown: "(//div[@class='dx-dropdowneditor-icon'])[4]",
        outboundDropdown: "(//div[@class='dx-dropdowneditor-icon'])[5]",
        mergeOption: "(//div[contains(text(),'Merge')])[1]",
        extendOption: "(//div[contains(text(),'Extend')])[1]",
        inboundMergeCell: "(//td[@role='gridcell'][normalize-space()='Merge'])[1]",
        inboundExtendCell: "(//td[@role='gridcell'][normalize-space()='Extend'])[1]",
        outboundMergeCell: "(//td[@role='gridcell'][normalize-space()='Merge'])[2]",
        outboundMergeDropdown: "(//div[@aria-label='Select'])[7]",
        downArrow: "(//span[contains(text(),'chevron_right')])[3]",
        blockOption: "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)",
        outboundBlockCell: "(//td[normalize-space()='Block'])[1]",
        all: "(//div[@class='dx-item-content dx-list-item-content'][normalize-space()='(All)'])[2]",
        all1: "(//div[@class='dx-item dx-list-item']//div[@class='dx-item-content dx-list-item-content'][normalize-space()='(All)'])[1]",
        clickAtlasClassDropdown: "(//button[@title='Open'])[6]",


    };

    async clickOnPropertiesTab() {
        await this.base.waitAndClick(this.Elements.propertiesTab);
    }

    async clickOnDownArrow() {
        await this.base.waitAndClick(this.Elements.downArrow);
    }

    async clickOnaAll() {
        await this.page.waitForTimeout(4000);
        await this.base.waitAndClick(this.Elements.all);
    }

    async clickOnaAll1() {
        await this.page.waitForTimeout(4000);
        await this.base.waitAndClick(this.Elements.all1);
    }

    async clickOnIdcheckbox() {
        await this.base.waitAndClick(this.Elements.idcheckbox);
    }

    async clickOnCheckIcon() {
        await this.base.waitAndClick(this.Elements.checkIcon);
    }

    async clickOnNewProperty1Field() {
        await this.base.waitAndClick(this.Elements.NewProperty1Field);
    }

    async clickOnAddButton() {
        await this.base.waitAndClick(this.Elements.addButton);
    }

    async enterPropertyName(name: string) {
        await this.base.clearAndType(this.Elements.nameInput, name);
    }

    async enterDisplayName(name: string) {
        await this.base.clearAndType(this.Elements.nameInput, name);
    }


    async clickSearchIcon() {
        await this.base.waitAndClick(this.Elements.searchIcon);
    }

    async clickContainsButton() {
        await this.base.waitAndClick(this.Elements.containsButton);
    }

    async enterSearchValue(value: string) {
        await this.base.clearAndType(this.Elements.searchInputBox, value);
        await this.page.keyboard.press("Enter");
    }

    async validateResultIsVisible(expectedValue: string) {
        await this.page.waitForTimeout(8000);
        const locator = this.page.locator(`//span[@title='${expectedValue}']`);



        const isVisible = await locator.isVisible();
        if (!isVisible) {
            throw new Error(`Expected result value "${expectedValue}" is not visible`);
        }
    }


    async clearSearchBox() {
        const searchBox = this.page.locator(this.Elements.searchBoxClearArea);
        await searchBox.click();
        await this.page.keyboard.press("Control+A");
        await this.page.keyboard.press("Backspace");
    }


    async validateValueIsNotVisible(value: string) {
        await this.page.waitForTimeout(3000);
        const locator = this.page.locator(`//span[@title='${value}']`);
        const isVisible = await locator.isVisible().catch(() => false);

        if (isVisible) {
            throw new Error(`The value "${value}" is unexpectedly visible in the table`);
        } else {
            console.log(`The value "${value}" is not present in the table, as expected.`);
        }
    }


    async clickDoesNotContainButton() {
        await this.base.waitAndClick(this.Elements.doesNotContainButton);
    }

    async clickStartsWithButton() {
        await this.base.waitAndClick(this.Elements.startsWithButton);
    }

    async clickEndsWithButton() {
        await this.base.waitAndClick(this.Elements.endsWithButton);
    }

    async clickEqualsButton() {
        await this.base.waitAndClick(this.Elements.equalsButton);
    }

    async clickDoesNotEqualButton() {
        await this.base.waitAndClick(this.Elements.doesNotEqualButton);
    }

    async clickOnBooleanDropdown() {
        const dropdown = this.page.locator("(//div[@aria-label='Select'])[2]");
        await dropdown.click();
    }

    async selectBooleanOption(value: string) {
        const option = this.page.locator(`//div[contains(text(),'${value}')]`);
        await option.waitFor({ state: "visible", timeout: 5000 });
        await option.click();
    }

    async clickOnMappingDropdown() {
        const dropdown = this.page.locator(this.Elements.mappingDropdown);
        await dropdown.waitFor({ state: "visible" });
        await dropdown.click();
    }

    async selectDropdownOption(optionText: string) {
        const option = this.page.locator(`//div[contains(text(),'${optionText}')]`);
        await option.waitFor({ state: "visible" });
        await option.click();
    }

    async validateMappedValueVisible(expectedValue: string) {
        let locator;
        if (expectedValue === "DisplayName") {
            locator = this.page.locator("(//td[@role='gridcell'][normalize-space()='DisplayName'])[3]");
        } else if (expectedValue === "IsLocked") {
            locator = this.page.locator("(//td[normalize-space()='IsLocked'])[1]");
        } else {
            throw new Error(`Unsupported value for validation: ${expectedValue}`);
        }

        await locator.waitFor({ state: "visible", timeout: 5000 });
        const isVisible = await locator.isVisible();
        expect(isVisible).toBeTruthy();
    }

    async clickInboundDropdown() {
        await this.base.waitAndClick(this.Elements.inboundDropdown);
    }

    async selectInboundOption(option: string) {
        const locator =
            option === "Merge" ? this.Elements.mergeOption : this.Elements.extendOption;
        await this.base.waitAndClick(locator);
    }

    async validateInboundCellVisible(value: string) {
        const locator =
            value === "Merge" ? this.Elements.inboundMergeCell : this.Elements.inboundExtendCell;
        await this.page.locator(locator).waitFor({ state: "visible", timeout: 5000 });
        expect(await this.page.locator(locator).isVisible()).toBeTruthy();
    }

    async clickOutboundDropdown() {
        await this.page.waitForTimeout(4000);
        await this.base.waitAndClick(this.Elements.outboundDropdown);
    }

    async clickMergeCellOutbound() {
        await this.base.waitAndClick(this.Elements.outboundMergeCell);
    }

    async clickMergeDropdownOutbound() {
        await this.base.waitAndClick(this.Elements.outboundMergeDropdown);
    }

    async selectOutboundOption() {
        await this.base.waitAndClick(this.Elements.blockOption);
    }


    async validateBlockCellVisible() {
        const locator = this.page.locator(this.Elements.outboundBlockCell);
        await locator.waitFor({ state: "visible", timeout: 5000 });
        expect(await locator.isVisible()).toBeTruthy();
    }

    async rightClickOnProperty(displayName: string) {
        await this.page.waitForTimeout(7000);
        const locator = this.page.locator(`//p[@aria-label='${displayName}']`);
        await locator.waitFor({ state: "visible" });
        await locator.click({ button: "right" });
    }

    async clickOnRemoveProperty() {
        const locator = this.page.locator("//li[normalize-space()='Remove Property']");
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickOnContinueButton() {
        const locator = this.page.locator("//button[normalize-space()='Continue']");
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickOnPropertyTitle(propertyTitle: string) {
        const locator = this.page.locator(`//span[@title='${propertyTitle}']`);
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickOnDisable() {
        const locator = this.page.locator("//li[normalize-space()='Disable']");
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickSecondCheckbox() {
        const checkbox = this.page.locator("(//input[@type='checkbox'])[2]");
        await checkbox.waitFor({ state: "visible" });
        await checkbox.check();
    }

    async verifyRequiredFieldIsTrue() {
        const locator = this.page.locator(`//span[normalize-space(text())='"Required"']/following-sibling::span[2][text()='true']`);
        await locator.waitFor({ state: "visible", timeout: 5000 });
        expect(await locator.isVisible()).toBeTruthy();
    }

    async verifyNameAndDisplayContain(value: string) {
        const nameInput = this.page.locator("(//input[@value='FirstName'])[1]");
        const displayNameInput = this.page.locator("(//input[@value='FirstName'])[2]");
        await nameInput.waitFor({ state: "visible" });
        await displayNameInput.waitFor({ state: "visible" });
        expect(await nameInput.getAttribute("value")).toContain(value);
        expect(await displayNameInput.getAttribute("value")).toContain(value);
    }

    async verifyDatasetAndType(datasetValue: string, typeValue: string) {
        const datasetLocator = this.page.locator(`//span[normalize-space(text())='"DataSet"']/following-sibling::span[2][text()='"${datasetValue}"']`);
        const typeLocator = this.page.locator(`//span[normalize-space(text())='"Type"']/following-sibling::span[2][text()='"${typeValue}"']`);

        await datasetLocator.waitFor({ state: "visible", timeout: 5000 });
        await typeLocator.waitFor({ state: "visible", timeout: 5000 });

        expect(await datasetLocator.isVisible()).toBeTruthy();
        expect(await typeLocator.isVisible()).toBeTruthy();
    }

    async clickDropdown(dropdownName: string) {
        let dropdownLocator: string;

        switch (dropdownName) {
            case "DataSet":
                dropdownLocator = "(//button[contains(@title,'Open')])[2]";
                break;
            case "DataType":
                dropdownLocator = "(//input[@id='app-config'])[2]";
                break;
            default:
                throw new Error(`Dropdown "${dropdownName}" not handled`);
        }

        const dropdown = this.page.locator(dropdownLocator);
        await dropdown.waitFor({ state: "visible" });
        await dropdown.click();
    }

    async selectDropdownValue(value: string) {
        const option = this.page.locator(`(//li[normalize-space()='${value}'])[1]`);
        await option.waitFor({ state: "visible" });
        await option.click();
    }

    async verifyAction(type: 'In' | 'Out', expectedAction: string) {
        const locator = this.page.locator(
            `//span[normalize-space(text())='"${type}"']
      /ancestor::div[contains(@class, 'view-line')]
      /following-sibling::div[1]
      [.//span[normalize-space(text())='"Action"']
      and .//span[normalize-space(text())='"${expectedAction}"']]`
        );
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        expect(await locator.isVisible()).toBeTruthy();
    }

    async verifyValueInDropdown(value: string) {
        const locator = this.page.locator(`//div[@title='${value}']//div//input[@value='${value}']`);
        await locator.waitFor({ state: "visible" });
        expect(await locator.isVisible()).toBeTruthy();
    }

    async clickInboundDropdown1() {
        const locator = this.page.locator("(//input[@id='app-config'])[3]");
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickOutboundDropdown1() {
        const locator = this.page.locator("(//input[@id='app-config'])[4]");
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickClassProperty(propertyTitle: string) {
        const locator = this.page.locator(`//button[@title='Open'][contains(@aria-label, '${propertyTitle}')]`);
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async clickAtlasClassDropdown() {
        await this.base.waitAndClick(this.Elements.clickAtlasClassDropdown);
    }


}