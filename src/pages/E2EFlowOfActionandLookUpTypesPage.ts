import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";



export default class ActionLookupTypesPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        actionLookupTypes: "//a[normalize-space()='Action&LookupTypes']",
        getRbData: "//li[@role='treeitem']//a[@href='#'][normalize-space()='Get-RbData']",
        rawData0: "//div[normalize-space()='Raw Data-0']",
        lisbethAnyRowclick: "//td[normalize-space()='lisbeth']",
        actionBot: "//div[contains(text(),'Action Bot')]",
        domain: "//th[normalize-space()='Domain']",
        minus: "//span[@class='glyphicon glyphicon-minus']",
        actionBotA: "//input[@title='Action Bot']",
        rawData0A: "//li[@title='Raw Data-0']",
        tasksAndLinks: "//div[contains(text(),'Tasks and Links')]",
        checkbox: "//label[@for='abvGrid-0']",
        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        dropdown: "//span[@id='select2-domain-container']",
        dropdownOption: "ul.select2-results__options li.select2-results__option",
        dropdownOption2: "//li[normalize-space()='Metacube']",
        filter: "//input[@id='filter']",
        manager: "//form//input[@class='select2-search__field' and @placeholder='Search lookup']",
        managerOptions: "//ul[@id='select2-manager-results']//li[@role='treeitem']",
        managerOptions1: "//li[normalize-space()='hannah, Metacube']",
        managerOptions2: "//li[normalize-space()='sarah, Metacube']",
        aSelect: "//span[@id='select2-aSelect-container']",
        aSelectOptions: "//ul[@id='select2-aSelect-results']//li[@role='treeitem']",
        aSelectOptions2: "//li[normalize-space()='Test2']",
        aMultiSelect: "//tbody/tr[10]/td[1]/form[1]/span[1]/span[1]/span[1]/ul[1]",
        aMultiSelectOption1: "//li[normalize-space()='Dis1']",
        aMultiSelectOption2: "//li[normalize-space()='Dis2']",
        aString: "//input[@id='aString']",
        aStringArray: "//input[@id='aStringArray']",
        anInt: "//input[@id='anInt']",
        aMemo: "//textarea[@id='aMemo']",
        aPropList1: "//input[@id='aPropList_Sel1']",
        aPropList2: "//input[@id='aPropList_Sel2']",
        anOptPropListCheckbox: "//label[@for='anOptPropList_Hello2_check']",
        anOptPropListInputBox: "//input[@id='anOptPropList_Hello2']",
        radioButtonYes: "//label[@id='lblYesaYesNo']",
        cancleButton: "//button[@id='btnCancelScriptRunWithParameters']",
        mainActionBot: "(//a[normalize-space()='Action Bot'])[1]",
        parameters: "//div[contains(text(),'Parameters')]",
        rBLookupTypePrompt: "(//input[@type='text'])[20]",
        rBLookupTypeSettingIcon: "(//td[contains(@title,'Configure')])[1]",
        rBLookupTypeScriptVerification: "//input[@id='txtLookupScriptReference']",
        rBLookupTypeViewVerification: "#select2-lookup-views-content-container",
        rBLookupTypeBrowseColumnVerification: "//li[@title='tenant']",
        rBLookupTypeReturnColumnVerification: "#select2-lookup-columns-content-container",
        rBLookupTypeCancleButton: "//button[@id='btnCloseLookup']",
        filterPrompt: "(//input[@type='text'])[21]",
        rBMultiLookupTypePrompt: "(//input[@type='text'])[22]",
        rBMultiLookupTypeSettingIcon: "(//td[contains(@title,'Configure')])[2]",
        rBMultiLookupTypeBrowseColumnVerification: "//li[@title='Manager']",
        rBMultiLookupTypeBrowseColumnVerification2: "(//li[@title='tenant'])[1]",
        rBMultiLookupTypeReturnColumnVerification: "//span[@id='select2-lookup-columns-content-container']",
        rBMultiLookupTypeFilterVerificationTenant: "//tr[@class='filter-row']//li[@title='tenant']",
        rBMultiLookupTypeFilterVerificationContains: "//li[@title='Contains']",
        rBMultiLookupTypeFilterVerificationFilter: "//li[@title='$filter']",
        aSelecctPrompt: "(//input[@type='text'])[23]",
        aSelecctSettingIcon: "(//td[contains(@title,'Configure')])[3]",
        displayValue1: "(//input[@class='variableName form-control'])[1]",
        selectedValue1: "(//input[@class='variableValue form-control'])[1]",
        displayValue2: "(//input[@class='variableName form-control'])[2]",
        selectedValue2: "(//input[@class='variableValue form-control'])[2]",
        cancleIconDS: "//button[@id='btnCloseCBListDialog']",
        aMultiSelecctPrompt: "(//input[@type='text'])[24]",
        aMultiSelecctSettingIcon: "(//td[contains(@title,'Configure')])[4]",
        aMemoPrompt: "(//input[@type='text'])[28]",
        aMemoSettingIcon: "(//td[contains(@title,'Configure')])[5]",
        aMemoRowCount: "//input[@id='txtCBMemoRowCount']",
        aMemoCancleButton: "//div[@id='setCBMemoPropertiesModal']//button[@type='button'][normalize-space()='Cancel']",
        aPropListPrompt: "(//input[@type='text'])[29]",
        aPropListSettingIcon: "(//td[contains(@title,'Configure')])[6]",
        aOptPropListPrompt: "(//input[@type='text'])[30]",
        aOptPropListSettingIcon: "(//td[contains(@title,'Configure')])[7]",

    };


    async clickOnActionLookupTypes() {
        await this.base.waitAndClick(this.Elements.actionLookupTypes);
    }

    async clickOnGetRbData() {
        await this.base.waitAndClick(this.Elements.getRbData);
    }

    async clickOnRawData0() {
        await this.base.waitAndClick(this.Elements.rawData0);
    }

    async clickOnLisbethAnyRowclick() {
        await this.base.waitAndClick(this.Elements.lisbethAnyRowclick);
    }

    async clickOnActionBot() {
        await this.base.waitAndClick(this.Elements.actionBot);
    }

    async getDomain() {
        await this.page.waitForSelector(this.Elements.domain, { timeout: 30000 });
        return this.page.locator(this.Elements.domain);
    }

    async DomainTextValidation() {
        const domainElement = await this.getDomain();
        const domainText = await domainElement.textContent();
        await expect(domainText.trim()).toMatch(/^Domain$/);
    }


    // async DomainTextValidation() {
    //     const domainElement = await this.getDomain();
    //     const domainText = await domainElement.textContent();
    //     expect(domainText.trim()).toBe('Domain');
    // }


    async clickOnMinus() {
        await this.base.waitAndClick(this.Elements.minus);
    }

    async clickOnTasksAndLinksTable() {
        await this.base.waitAndClick(this.Elements.tasksAndLinks);
    }

    async isCheckboxSelected() {
        const checkbox = await this.page.locator(this.Elements.checkbox);
        return checkbox.isChecked();
    }

    async clickOnProperties() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async getActionBotAssertionText() {
        await this.page.waitForSelector(this.Elements.actionBotA, { timeout: 15000 });
        return this.page.locator(this.Elements.actionBotA);
    }

    async getRawData0Text() {
        await this.page.waitForSelector(this.Elements.rawData0A, { timeout: 15000 });
        return this.page.locator(this.Elements.rawData0A);
    }

    async validateActionBotAndRawData0Element() {
        const actionBotElement = await this.getActionBotAssertionText();
        const rawData0Element = await this.getRawData0Text();

        const actionBotText = await actionBotElement.inputValue();

        expect(actionBotText.trim()).toBe('Action Bot');
        expect(rawData0Element).toContainText('Raw Data-0');
    }

    async clickOnDropdown() {
        await this.base.waitAndClick(this.Elements.dropdown);
    }

    async getDropdownOptionsCount() {
        await this.page.waitForSelector(this.Elements.dropdownOption, { timeout: 30000 });
        await this.page.waitForTimeout(3000);
        const options = await this.page.$$(this.Elements.dropdownOption);
        return options.length;
    }

    async clickOnDropdownOption2() {
        await this.base.waitAndClick(this.Elements.dropdownOption2);
    }

    async enterFilterText(filterText: string) {
        await this.page.locator(this.Elements.filter).fill(filterText);
    }

    async clickOnManager() {
        const xpath1 = 'body > div:nth-child(4) > div:nth-child(30) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > form:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > ul:nth-child(1)';
        const xpath2 = 'body > div:nth-child(4) > div:nth-child(29) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > form:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > ul:nth-child(1)';

        const locator1 = this.page.locator(xpath1);
        const locator2 = this.page.locator(xpath2);

        if (await locator1.isVisible({ timeout: 2000 })) {
            await locator1.click();
        } else if (await locator2.isVisible({ timeout: 2000 })) {
            await locator2.click();
        } else {
            throw new Error('Manager field not found using either XPath');
        }
    }


    async getManagerOptionsCount() {
        await this.page.waitForSelector(this.Elements.managerOptions, { timeout: 30000 });
        await this.page.waitForTimeout(3000);
        const options = await this.page.$$(this.Elements.managerOptions);
        return options.length;
    }

    async clickOnManagerOption1() {
        await this.base.waitAndClick(this.Elements.managerOptions1);
    }

    async clickOnManagerOption2() {
        await this.base.waitAndClick(this.Elements.managerOptions2);
    }

    async clickOnASelect() {
        await this.base.waitAndClick(this.Elements.aSelect);
    }

    async getASelectOptionsCount() {
        await this.page.waitForSelector(this.Elements.aSelectOptions, { timeout: 30000 });
        await this.page.waitForTimeout(3000);
        const options = await this.page.$$(this.Elements.aSelectOptions);
        return options.length;
    }

    async clickOnASelectOptions2() {
        await this.base.waitAndClick(this.Elements.aSelectOptions2);
    }

    async clickOnAMultiSelect() {
        await this.base.waitAndClick(this.Elements.aMultiSelect);
    }

    async clickOnAMultiSelectOption1() {
        await this.base.waitAndClick(this.Elements.aMultiSelectOption1);
    }

    async clickOnAMultiSelectOption2() {
        await this.base.waitAndClick(this.Elements.aMultiSelectOption2);
    }

    async enterAStringText(AStringText: string) {
        await this.page.locator(this.Elements.aString).fill(AStringText);
    }


    async enterAStringArrayText(AStringArrayText: string) {
        await this.page.locator(this.Elements.aStringArray).fill(AStringArrayText);
    }


    async enterAnIntText(AnInt: string) {
        await this.page.locator(this.Elements.anInt).fill(AnInt);
    }

    async getTextareaElement() {
        await this.page.waitForSelector(this.Elements.aMemo);
        return this.page.locator(this.Elements.aMemo);
    }

    async fillTextareaWithJsonData(jsonData: any) {
        const textFromJSON = `
            ${jsonData.filterName}
            ${jsonData.AStringText}
            ${jsonData.AStringArray}
            ${jsonData.AnInt}
        `;
        const lines = textFromJSON.split('\n');
        const textarea = await this.getTextareaElement();
        await textarea.fill(lines.join('\n'));
    }

    async enterAPropList1(PropList1: string) {
        await this.page.locator(this.Elements.aPropList1).fill(PropList1);
    }

    async enterAPropList2(PropList2: string) {
        await this.page.locator(this.Elements.aPropList2).fill(PropList2);
    }

    async clickOnAnOptPropListCheckbox() {
        await this.base.waitAndClick(this.Elements.anOptPropListCheckbox);
    }

    async enterAnOptPropListInputBox(OptPropListInputBox: string) {
        await this.page.locator(this.Elements.anOptPropListInputBox).fill(OptPropListInputBox);
    }

    async clickOnRadioButtonYes() {
        await this.base.waitAndClick(this.Elements.radioButtonYes);
    }

    async clickOnCancleButton() {
        await this.base.waitAndClick(this.Elements.cancleButton);
    }

    async clickOnMainActionBot() {
        await this.base.waitAndClick(this.Elements.mainActionBot);
    }

    async clickOnParameters() {
        await this.base.waitAndClick(this.Elements.parameters);
    }

    async clickOnRBLookupTypeSettingIcon() {
        await this.base.waitAndClick(this.Elements.rBLookupTypeSettingIcon);
    }

    async getRBLookupTypePromptAssertionText() {
        await this.page.waitForSelector(this.Elements.rBLookupTypePrompt, { timeout: 15000 });
        return this.page.locator(this.Elements.rBLookupTypePrompt);
    }

    async validateRBLookupTypePromptAssertionText() {
        const RBLookupTypePromptAssertionTextElement = await this.getRBLookupTypePromptAssertionText();
        const RBLookupTypePromptAssertionText = await RBLookupTypePromptAssertionTextElement.inputValue();
        expect(RBLookupTypePromptAssertionText.trim()).toBe('Domain');
    }

    async getRrBLookupTypeScriptAssertionText() {
        await this.page.waitForSelector(this.Elements.rBLookupTypeScriptVerification, { timeout: 15000 });
        return this.page.locator(this.Elements.rBLookupTypeScriptVerification);
    }

    async validategetRrBLookupTypeScriptAssertionText() {
        const getRrBLookupTypeScriptAssertionTextElement = await this.getRrBLookupTypeScriptAssertionText();
        const getRrBLookupTypeScriptTextElement = await getRrBLookupTypeScriptAssertionTextElement.inputValue();
        expect(getRrBLookupTypeScriptTextElement.trim()).toBe('../Data table');
    }

    async getRBLookupTypeViewVerification() {
        await this.page.waitForSelector(this.Elements.rBLookupTypeViewVerification, { timeout: 30000 });
        return this.page.locator(this.Elements.rBLookupTypeViewVerification);
    }

    async RBLookupTypeViewVerificationText() {
        const RBLookupTypeViewVerificationElement = await this.getRBLookupTypeViewVerification();
        await expect(RBLookupTypeViewVerificationElement).toContainText('Data table', { timeout: 10000 });
    }

    async getRBLookupTypeBrowseColumnVerification() {
        await this.page.waitForSelector(this.Elements.rBLookupTypeBrowseColumnVerification, { timeout: 30000 });
        return this.page.locator(this.Elements.rBLookupTypeBrowseColumnVerification);
    }

    async getRBLookupTypeBrowseColumnVerificationText() {
        const getRBLookupTypeBrowseColumnVerificationElement = await this.getRBLookupTypeBrowseColumnVerification();
        const getRBLookupTypeBrowseColumnVerificationText = await getRBLookupTypeBrowseColumnVerificationElement.textContent();
        await expect(getRBLookupTypeBrowseColumnVerificationText.trim()).toBe('×tenant');
    }

    async getRBLookupTypeReturnColumnVerification() {
        await this.page.waitForSelector(this.Elements.rBLookupTypeReturnColumnVerification, { timeout: 30000 });
        return this.page.locator(this.Elements.rBLookupTypeReturnColumnVerification);
    }

    async getRBLookupTypeReturnColumnVerificationText() {
        const getRBLookupTypeReturnColumnVerificationElement = await this.getRBLookupTypeReturnColumnVerification();
        const RBLookupTypeReturnColumnVerificationText = await getRBLookupTypeReturnColumnVerificationElement.textContent();
        await expect(RBLookupTypeReturnColumnVerificationText.trim()).toBe('tenant');
    }

    async clickOnRBLookupTypeCancleButton() {
        await this.base.waitAndClick(this.Elements.rBLookupTypeCancleButton);
    }

    async getfilterPromptAssertionText() {
        await this.page.waitForSelector(this.Elements.filterPrompt, { timeout: 15000 });
        return this.page.locator(this.Elements.filterPrompt);
    }

    async validateFilterPromptAssertionText() {
        const filterPromptAssertionTextElement = await this.getfilterPromptAssertionText();
        const filterPromptAssertionText = await filterPromptAssertionTextElement.inputValue();
        expect(filterPromptAssertionText.trim()).toBe('Filter');
    }

    async getrBMultiLookupTypePromptAssertionText() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypePrompt, { timeout: 15000 });
        return this.page.locator(this.Elements.rBMultiLookupTypePrompt);
    }

    async validaterBMultiLookupTypePromptAssertionText() {
        const rBMultiLookupTypePromptAssertionTextElement = await this.getrBMultiLookupTypePromptAssertionText();
        const rBMultiLookupTypePromptAssertionText = await rBMultiLookupTypePromptAssertionTextElement.inputValue();
        expect(rBMultiLookupTypePromptAssertionText.trim()).toBe('Manager');
    }

    async clickOnRBMultiLookupTypeSettingIcon() {
        await this.base.waitAndClick(this.Elements.rBMultiLookupTypeSettingIcon);
    }

    async getRBMultiLookupTypeBrowseColumnVerification() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeBrowseColumnVerification, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeBrowseColumnVerification);
    }

    async ValidateRBMultiLookupTypeBrowseColumnVerificationText() {
        const getRBMultiLookupTypeBrowseColumnVerificationElement = await this.getRBMultiLookupTypeBrowseColumnVerification();
        const getRBMultiLookupTypeBrowseColumnVerificationText = await getRBMultiLookupTypeBrowseColumnVerificationElement.textContent();
        await expect(getRBMultiLookupTypeBrowseColumnVerificationText.trim()).toBe('×Manager');
    }

    async getRBMultiLookupTypeBrowseColumnVerification2() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeBrowseColumnVerification2, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeBrowseColumnVerification2);
    }

    async ValidateRBMultiLookupTypeBrowseColumnVerificationText2() {
        const getRBMultiLookupTypeBrowseColumnVerificationElement2 = await this.getRBMultiLookupTypeBrowseColumnVerification2();
        const getRBMultiLookupTypeBrowseColumnVerificationText2 = await getRBMultiLookupTypeBrowseColumnVerificationElement2.textContent();
        await expect(getRBMultiLookupTypeBrowseColumnVerificationText2.trim()).toBe('×tenant');
    }

    async getrRBMultiLookupTypeReturnColumnVerification() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeReturnColumnVerification, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeReturnColumnVerification);
    }

    async ValidateRBMultiLookupTypeReturnColumnVerificationText() {
        const getrRBMultiLookupTypeReturnColumnVerificationElement = await this.getrRBMultiLookupTypeReturnColumnVerification();
        const RBMultiLookupTypeReturnColumnVerificationText = await getrRBMultiLookupTypeReturnColumnVerificationElement.textContent();
        await expect(RBMultiLookupTypeReturnColumnVerificationText.trim()).toBe('Id');
    }

    async getRBMultiLookupTypeFilterVerificationTenant() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeFilterVerificationTenant, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeFilterVerificationTenant);
    }

    async ValidateRBMultiLookupTypeFilterVerificationTenantText() {
        const getRBMultiLookupTypeFilterVerificationTenantElement = await this.getRBMultiLookupTypeFilterVerificationTenant();
        const RBMultiLookupTypeFilterVerificationTenantText = await getRBMultiLookupTypeFilterVerificationTenantElement.textContent();
        await expect(RBMultiLookupTypeFilterVerificationTenantText.trim()).toBe('×tenant');
    }


    async getRBMultiLookupTypeFilterVerificationContains() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeFilterVerificationContains, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeFilterVerificationContains);
    }

    async ValidateRBMultiLookupTypeFilterVerificationContainsText() {
        const getRBMultiLookupTypeFilterVerificationContainsElement = await this.getRBMultiLookupTypeFilterVerificationContains();
        const RBMultiLookupTypeFilterVerificationContainsText = await getRBMultiLookupTypeFilterVerificationContainsElement.textContent();
        await expect(RBMultiLookupTypeFilterVerificationContainsText.trim()).toBe('×Contains');
    }

    async getRBMultiLookupTypeFilterVerificationFilter() {
        await this.page.waitForSelector(this.Elements.rBMultiLookupTypeFilterVerificationFilter, { timeout: 30000 });
        return this.page.locator(this.Elements.rBMultiLookupTypeFilterVerificationFilter);
    }

    async ValidateRBMultiLookupTypeFilterVerificationFilterText() {
        const getRBMultiLookupTypeFilterVerificationFilterElement = await this.getRBMultiLookupTypeFilterVerificationFilter();
        const RBMultiLookupTypeFilterVerificationFilterext = await getRBMultiLookupTypeFilterVerificationFilterElement.textContent();
        await expect(RBMultiLookupTypeFilterVerificationFilterext.trim()).toBe('×$filter');
    }

    async getASelecctPromptPromptAssertionText() {
        await this.page.waitForSelector(this.Elements.aSelecctPrompt, { timeout: 15000 });
        return this.page.locator(this.Elements.aSelecctPrompt);
    }

    async validateASelecctPromptPromptAssertionText() {
        const ASelecctPromptPromptAssertionTextElement = await this.getASelecctPromptPromptAssertionText();
        const ASelecctPromptPromptAssertionText = await ASelecctPromptPromptAssertionTextElement.inputValue();
        expect(ASelecctPromptPromptAssertionText.trim()).toBe('A Select');
    }

    async clickOnASelecctSettingIcon() {
        await this.base.waitAndClick(this.Elements.aSelecctSettingIcon);
    }

    async getDisplayValue1AssertionText() {
        await this.page.waitForSelector(this.Elements.displayValue1, { timeout: 15000 });
        return this.page.locator(this.Elements.displayValue1);
    }

    async validateASelectDisplayValue1AssertionText() {
        const DisplayValue1AssertionTextElement = await this.getDisplayValue1AssertionText();
        const DisplayValue1AssertionText = await DisplayValue1AssertionTextElement.inputValue();
        expect(DisplayValue1AssertionText.trim()).toBe('Test1');
    }

    async getSelectedValue1AssertionText() {
        await this.page.waitForSelector(this.Elements.selectedValue1, { timeout: 15000 });
        return this.page.locator(this.Elements.selectedValue1);
    }

    async validateAselectSelectedValue1AssertionText() {
        const SelectedValue1AssertionTextElement = await this.getSelectedValue1AssertionText();
        const SelectedValue1AssertionText = await SelectedValue1AssertionTextElement.inputValue();
        expect(SelectedValue1AssertionText.trim()).toBe('Sel1');
    }

    async getDisplayValue2AssertionText() {
        await this.page.waitForSelector(this.Elements.displayValue2, { timeout: 15000 });
        return this.page.locator(this.Elements.displayValue2);
    }

    async validateASelectDisplayValue2AssertionText() {
        const DisplayValue2AssertionTextElement = await this.getDisplayValue2AssertionText();
        const DisplayValue2AssertionText = await DisplayValue2AssertionTextElement.inputValue();
        expect(DisplayValue2AssertionText.trim()).toBe('Test2');
    }


    async getSelectedValue2AssertionText() {
        await this.page.waitForSelector(this.Elements.selectedValue2, { timeout: 15000 });
        return this.page.locator(this.Elements.selectedValue2);
    }

    async validateAselectSelectedValue2AssertionText() {
        const SelectedValue2AssertionTextElement = await this.getSelectedValue2AssertionText();
        const SelectedValue2AssertionText = await SelectedValue2AssertionTextElement.inputValue();
        expect(SelectedValue2AssertionText.trim()).toBe('Sel2');
    }

    async clickOnCancleIconDS() {
        await this.base.waitAndClick(this.Elements.cancleIconDS);
    }

    async clickOnAMultiSelecctPrompt() {
        await this.base.waitAndClick(this.Elements.aMultiSelecctPrompt);
    }

    async clickOnAMultiSelecctSettingIcon() {
        await this.base.waitAndClick(this.Elements.aMultiSelecctSettingIcon);
    }

    async validateAMultiSelectDisplayValue1AssertionText() {
        const DisplayValue1AssertionTextElement = await this.getDisplayValue1AssertionText();
        const DisplayValue1AssertionText = await DisplayValue1AssertionTextElement.inputValue();
        expect(DisplayValue1AssertionText.trim()).toBe('Dis1');
    }

    async validateAMultiselectSelectedValue1AssertionText() {
        const SelectedValue1AssertionTextElement = await this.getSelectedValue1AssertionText();
        const SelectedValue1AssertionText = await SelectedValue1AssertionTextElement.inputValue();
        expect(SelectedValue1AssertionText.trim()).toBe('Sel1');
    }

    async validateAMultiSelectDisplayValue2AssertionText() {
        const DisplayValue2AssertionTextElement = await this.getDisplayValue2AssertionText();
        const DisplayValue2AssertionText = await DisplayValue2AssertionTextElement.inputValue();
        expect(DisplayValue2AssertionText.trim()).toBe('Dis2');
    }

    async validateAMultiselectSelectedValue2AssertionText() {
        const SelectedValue2AssertionTextElement = await this.getSelectedValue2AssertionText();
        const SelectedValue2AssertionText = await SelectedValue2AssertionTextElement.inputValue();
        expect(SelectedValue2AssertionText.trim()).toBe('Sel2');
    }

    async clickOnAMemoPrompt() {
        await this.base.waitAndClick(this.Elements.aMemoPrompt);
    }

    async clickOnAMemoSettingIcon() {
        await this.base.waitAndClick(this.Elements.aMemoSettingIcon);
    }

    async getAMemoRowCountAssertionText() {
        await this.page.waitForSelector(this.Elements.aMemoRowCount, { timeout: 15000 });
        return this.page.locator(this.Elements.aMemoRowCount);
    }

    async validateAMemoRowCountAssertionText() {
        const AMemoRowCountAssertionTextElement = await this.getAMemoRowCountAssertionText();
        const AMemoRowCountAssertionText = await AMemoRowCountAssertionTextElement.inputValue();
        expect(AMemoRowCountAssertionText.trim()).toBe('5');
    }

    async clickOnAMemoCancleButton() {
        await this.base.waitAndClick(this.Elements.aMemoCancleButton);
    }

    async clickOnAPropListPrompt() {
        await this.base.waitAndClick(this.Elements.aPropListPrompt);
    }


    async clickOnAPropListSettingIcon() {
        await this.base.waitAndClick(this.Elements.aPropListSettingIcon);
    }


    async clickOnAOptPropListPrompt() {
        await this.base.waitAndClick(this.Elements.aOptPropListPrompt);
    }


    async clickOnAOptPropListSettingIcon() {
        await this.base.waitAndClick(this.Elements.aOptPropListSettingIcon);
    }


    async validateAPropListDisplayValue1AssertionText() {
        const DisplayValue1AssertionTextElement = await this.getDisplayValue1AssertionText();
        const DisplayValue1AssertionText = await DisplayValue1AssertionTextElement.inputValue();
        expect(DisplayValue1AssertionText.trim()).toBe('TestDis1');
    }

    async validateAPropListSelectedValue1AssertionText() {
        const SelectedValue1AssertionTextElement = await this.getSelectedValue1AssertionText();
        const SelectedValue1AssertionText = await SelectedValue1AssertionTextElement.inputValue();
        expect(SelectedValue1AssertionText.trim()).toBe('Sel1');
    }

    async validateAPropListDisplayValue2AssertionText() {
        const DisplayValue2AssertionTextElement = await this.getDisplayValue2AssertionText();
        const DisplayValue2AssertionText = await DisplayValue2AssertionTextElement.inputValue();
        expect(DisplayValue2AssertionText.trim()).toBe('TestDis2');
    }

    async validateAPropListSelectedValue2AssertionText() {
        const SelectedValue2AssertionTextElement = await this.getSelectedValue2AssertionText();
        const SelectedValue2AssertionText = await SelectedValue2AssertionTextElement.inputValue();
        expect(SelectedValue2AssertionText.trim()).toBe('Sel2');
    }

    async validateAnOptPropListDisplayValue1AssertionText() {
        const DisplayValue1AssertionTextElement = await this.getDisplayValue1AssertionText();
        const DisplayValue1AssertionText = await DisplayValue1AssertionTextElement.inputValue();
        expect(DisplayValue1AssertionText.trim()).toBe('Test1');
    }

    async validateAnOptPropListSelectedValue1AssertionText() {
        const SelectedValue1AssertionTextElement = await this.getSelectedValue1AssertionText();
        const SelectedValue1AssertionText = await SelectedValue1AssertionTextElement.inputValue();
        expect(SelectedValue1AssertionText.trim()).toBe('Hello1');
    }

    async validateAnOptPropListDisplayValue2AssertionText() {
        const DisplayValue2AssertionTextElement = await this.getDisplayValue2AssertionText();
        const DisplayValue2AssertionText = await DisplayValue2AssertionTextElement.inputValue();
        expect(DisplayValue2AssertionText.trim()).toBe('Test2');
    }

    async validateAnOptPropListSelectedValue2AssertionText() {
        const SelectedValue2AssertionTextElement = await this.getSelectedValue2AssertionText();
        const SelectedValue2AssertionText = await SelectedValue2AssertionTextElement.inputValue();
        expect(SelectedValue2AssertionText.trim()).toBe('Hello2');
    }


}