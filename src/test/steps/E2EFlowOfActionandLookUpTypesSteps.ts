import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ActionLookupTypesPage from "../../pages/E2EFlowOfActionandLookUpTypesPage";
import * as data from "../../helper/util/test-data/TestData.json";



let actionLookupTypesPage: ActionLookupTypesPage;

setDefaultTimeout(1200 * 1000 * 2);

When("click on ActionandLookUpTypes Folder", async function () {
    actionLookupTypesPage = new ActionLookupTypesPage(fixture.page);
    await actionLookupTypesPage.clickOnActionLookupTypes();

});

When("User click on GetRbData Bot", async function () {
    await actionLookupTypesPage.clickOnGetRbData();

});

When("User Selects Rawdata0", async function () {
    await actionLookupTypesPage.clickOnRawData0();

});

When("Clicks on a row to reveal the Action Button", async function () {
    await actionLookupTypesPage.clickOnLisbethAnyRowclick();

});

Then("The user confirms the successful opening of the form", async function () {
    await actionLookupTypesPage.clickOnActionBot();
    await actionLookupTypesPage.DomainTextValidation();
    await actionLookupTypesPage.clickOnMinus();

});

When("click On Properties section", async function () {
    await actionLookupTypesPage.clickOnProperties();
});

When("click On Properties section Proxy", async function () {
    actionLookupTypesPage = new ActionLookupTypesPage(fixture.page);
    await actionLookupTypesPage.clickOnProperties();
    await actionLookupTypesPage.clickOnProperties();
});

When("The user clicks on the Tasks and Links Table", async function () {
    await actionLookupTypesPage.clickOnTasksAndLinksTable();
});

Then("The user verifies the Label AboveGrid and Associated Views", async function () {

    const isCheckboxSelected = await actionLookupTypesPage.isCheckboxSelected();
    expect(isCheckboxSelected).toBe(true);
    await actionLookupTypesPage.validateActionBotAndRawData0Element();

});

Then("User can Verify the Complete Action Bot Form", async function () {

    await actionLookupTypesPage.clickOnActionBot();
    await actionLookupTypesPage.clickOnDropdown();
    const optionsCount = await actionLookupTypesPage.getDropdownOptionsCount();
    expect(optionsCount).toBe(3);
    await actionLookupTypesPage.clickOnDropdownOption2();
    await actionLookupTypesPage.enterFilterText(data[5].filterName);
    await actionLookupTypesPage.clickOnManager();
    const optionsCount1 = await actionLookupTypesPage.getManagerOptionsCount();
    expect(optionsCount1).toBe(3);
    await actionLookupTypesPage.clickOnManagerOption1();
    await actionLookupTypesPage.clickOnManager();
    await actionLookupTypesPage.clickOnManagerOption2();
    await actionLookupTypesPage.clickOnASelect();
    const optionsCount2 = await actionLookupTypesPage.getASelectOptionsCount();
    expect(optionsCount2).toBe(2);
    await actionLookupTypesPage.clickOnASelectOptions2();
    await actionLookupTypesPage.clickOnAMultiSelect();
    await actionLookupTypesPage.clickOnAMultiSelectOption1();
    await actionLookupTypesPage.clickOnAMultiSelect();
    await actionLookupTypesPage.clickOnAMultiSelectOption2();
    await actionLookupTypesPage.enterAStringText(data[5].AStringText);
    await actionLookupTypesPage.enterAStringArrayText(data[5].AStringArray);
    await actionLookupTypesPage.enterAnIntText(data[5].AnInt);
    await actionLookupTypesPage.fillTextareaWithJsonData(data[5]);
    await actionLookupTypesPage.enterAPropList1(data[5].PropList1);
    await actionLookupTypesPage.enterAPropList2(data[5].PropList2);
    await actionLookupTypesPage.clickOnAnOptPropListCheckbox();
    await actionLookupTypesPage.enterAnOptPropListInputBox(data[5].OptPropListInputBox);
    await actionLookupTypesPage.clickOnRadioButtonYes();
    await actionLookupTypesPage.clickOnCancleButton();
});


When("The User clicks on the Action Bot", async function () {
    await actionLookupTypesPage.clickOnMainActionBot();
});

When("Selects the Parameters", async function () {
    await actionLookupTypesPage.clickOnParameters();
});

When("Clicks on the settings icon of RBLookupType", async function () {
    await actionLookupTypesPage.validateRBLookupTypePromptAssertionText();
    await actionLookupTypesPage.clickOnRBLookupTypeSettingIcon();
});

Then("The User validates all the configured lookup parameters of RBLookupType", async function () {

    await actionLookupTypesPage.validategetRrBLookupTypeScriptAssertionText();
    await actionLookupTypesPage.RBLookupTypeViewVerificationText();
    await actionLookupTypesPage.getRBLookupTypeBrowseColumnVerificationText();
    await actionLookupTypesPage.getRBLookupTypeReturnColumnVerificationText();
    await actionLookupTypesPage.clickOnRBLookupTypeCancleButton();

});

When("User click on settings icon of RBMultiLookupType", async function () {
    await actionLookupTypesPage.validateFilterPromptAssertionText();
    await actionLookupTypesPage.validaterBMultiLookupTypePromptAssertionText();
    await actionLookupTypesPage.clickOnRBMultiLookupTypeSettingIcon();
});

Then("The User validates all the configured lookup parameters of RBMultiLookupType and Also validate Prompt Filter", async function () {
    await actionLookupTypesPage.validategetRrBLookupTypeScriptAssertionText();
    await actionLookupTypesPage.RBLookupTypeViewVerificationText();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeBrowseColumnVerificationText();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeBrowseColumnVerificationText2();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeReturnColumnVerificationText();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeFilterVerificationTenantText();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeFilterVerificationContainsText();
    await actionLookupTypesPage.ValidateRBMultiLookupTypeFilterVerificationFilterText();
    await actionLookupTypesPage.clickOnRBLookupTypeCancleButton();


});


When("User click on settings icon of RBSingleSelect", async function () {
    await actionLookupTypesPage.validateASelecctPromptPromptAssertionText();
    await actionLookupTypesPage.clickOnASelecctSettingIcon();
});

Then("The User validates all the Display values and Selected of RBSingleSelect", async function () {

    await actionLookupTypesPage.validateASelectDisplayValue1AssertionText();
    await actionLookupTypesPage.validateAselectSelectedValue1AssertionText();
    await actionLookupTypesPage.validateASelectDisplayValue2AssertionText();
    await actionLookupTypesPage.validateAselectSelectedValue2AssertionText();
    await actionLookupTypesPage.clickOnCancleIconDS();

});

When("User click on settings icon of RBMultiSelect", async function () {
    await actionLookupTypesPage.clickOnAMultiSelecctPrompt();
    await actionLookupTypesPage.clickOnAMultiSelecctSettingIcon();
});

Then("The User validates all the Display values and Selected Values of RBMultiSelect", async function () {

    await actionLookupTypesPage.validateAMultiSelectDisplayValue1AssertionText();
    await actionLookupTypesPage.validateAMultiselectSelectedValue1AssertionText();
    await actionLookupTypesPage.validateAMultiSelectDisplayValue2AssertionText();
    await actionLookupTypesPage.validateAMultiselectSelectedValue2AssertionText();
    await actionLookupTypesPage.clickOnCancleIconDS();

});

When("User click on settings icon of RBMemo", async function () {
    await actionLookupTypesPage.clickOnAMemoPrompt();
    await actionLookupTypesPage.clickOnAMemoSettingIcon();
});

Then("The User validates the number of Rows of RBMemo", async function () {

    await actionLookupTypesPage.validateAMemoRowCountAssertionText();
    await actionLookupTypesPage.clickOnAMemoCancleButton();

});

When("User click on settings icon of RBPropertyList", async function () {
    await actionLookupTypesPage.clickOnAPropListPrompt();
    await actionLookupTypesPage.clickOnAPropListSettingIcon();
});

Then("The User validates all the Display values and Selected Values of RBPropertyList", async function () {

    await actionLookupTypesPage.validateAPropListDisplayValue1AssertionText();
    await actionLookupTypesPage.validateAPropListSelectedValue1AssertionText();
    await actionLookupTypesPage.validateAPropListDisplayValue2AssertionText();
    await actionLookupTypesPage.validateAPropListSelectedValue2AssertionText();
    await actionLookupTypesPage.clickOnCancleIconDS();

});


When("User click on settings icon of RBOptionPropertyList", async function () {
    await actionLookupTypesPage.clickOnAOptPropListPrompt();
    await actionLookupTypesPage.clickOnAOptPropListSettingIcon();
});

Then("The User validates all the Display values and Selected Values of RBOptionPropertyList", async function () {

    await actionLookupTypesPage.validateAnOptPropListDisplayValue1AssertionText();
    await actionLookupTypesPage.validateAnOptPropListSelectedValue1AssertionText();
    await actionLookupTypesPage.validateAnOptPropListDisplayValue2AssertionText();
    await actionLookupTypesPage.validateAnOptPropListSelectedValue2AssertionText();
    await actionLookupTypesPage.clickOnCancleIconDS();

});

