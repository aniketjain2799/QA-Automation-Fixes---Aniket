import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import DataFlowRulesValidation from "../../pages/10DataFlowRulesValidationPage";

let dataFlow: DataFlowRulesValidation;

When("the User expands the Rules Option", async function () {
    dataFlow = new DataFlowRulesValidation(fixture.page);
    await dataFlow.expandRules();
});

When("the User clicks on the DataFlow Option", async function () {
    await dataFlow.clickDataFlowOption();
});

When("clicks on the Atlas class dropdown", async function () {
    await dataFlow.clickAtlasDropdown();
});

When("selects the Option {string} from the dropdown", async function (option: string) {
    await dataFlow.selectOptionFromDropdown(option);
});

Then("the user should see that Action should be {string} and RefName Action should be {string}", async function (action: string, refName: string) {
    await dataFlow.validateActionAndRefName(action, refName);
});

When("the User clicks on the Action Dropdown", async function () {
    await dataFlow.clickActionDropdown();
});

When("selects the value1 {string}", async function (value: string) {
    await dataFlow.selectActionValue(value);
});

Then(/^the user validates the Extension checkbox values Enabled should be "(true|false)" and Dynamic should be "(true|false)"$/, async function (enabled: string, dynamic: string) {
    await dataFlow.validateExtensionCheckbox(enabled === "true", dynamic === "true");
});

When("the User clicks on checkbox2 to check it", async function () {
    await dataFlow.checkCheckbox2();
});

When("the User clicks on checkbox1 to uncheck it", async function () {
    await dataFlow.uncheckCheckbox1();
});

When("the User clicks on Plus Icon", async function () {
    await dataFlow.clickPlusIcon();
});

When("the User enters the Automation name", async function () {
    await dataFlow.enterAutomationName("Automation");
});

When("clicks the keyboard enter button to save it", async function () {
    await dataFlow.pressEnter();
});

Then("the user validates the name value should be Automation", async function () {
    await dataFlow.validateAutomationName();
});

When("the user clicks the Automation Rule", async function () {
    await dataFlow.clickAutomationRule();
});

When("the user clears the name box", async function () {
    await dataFlow.clearNameBox();
});

When("the user clicks on save icon", async function () {
    await dataFlow.clickSaveIcon();
});

Then("the user can validate the message {string}", async function (msg: string) {
    await dataFlow.validateErrorMessage(msg);
});

When("the user enters the name {string} in the Name field", async function (name: string) {
    await dataFlow.enterName(name);
});

When("the user sends the value {string} in description box", async function (desc: string) {
    await dataFlow.enterDescription(desc);
});

When("the user clicks properties dropdown", async function () {
    await dataFlow.clickPropertiesDropdown();
});

When("the User selects the first value", async function () {
    await dataFlow.selectPropertyOption(0);
});

When("the User selects the Bussiness email value", async function () {
    await dataFlow.selectBusinessEmailOption();
});

When("the User selects the second value", async function () {
    await dataFlow.selectPropertyOption(1);
});

When("the User selects the third value", async function () {
    await dataFlow.selectPropertyOption(3);
});

When("the User selects the fourth value", async function () {
    await dataFlow.selectPropertyOption(4);
});

When("the User checks that checkbox should be enabled if not, check it", async function () {
    await dataFlow.checkEnabledCheckboxIfNot();
});

Then("save the Inbound page", async function () {
    await dataFlow.saveInboundPage();
});

When("the User clicks on script icon", async function () {
    await dataFlow.clickScriptIcon();
});

When("switches the toggle to Draft mode", async function () {
    await dataFlow.switchToDraftMode();
});

When("writes the script in Monaco editor like {string}", async function (script: string) {
    await dataFlow.writeScript(script);
});

When("clicks on publish icon", async function () {
    await dataFlow.clickPublishIcon();
});

When("clicks on continue button", async function () {
    await dataFlow.clickContinueButton();
});

When("clicks on the enabled checkbox", async function () {
    await dataFlow.clickEnabledCheckbox();
});

When("clicks on the right icon to save the script", async function () {
    await dataFlow.saveScript();
});

Then("the user validates the Script should be saved", async function () {
    await dataFlow.validateScriptSaved();
});

When("the user clicks on object matching checkbox", async function () {
    await dataFlow.clickObjectMatchingCheckbox();
});

When("the User clicks on delete icon of Rule", async function () {
    await dataFlow.clickDeleteIcon();
});

Then("the user validates that rule name should not be visible", async function () {
    await dataFlow.validateRuleDeleted();
});

When("the user clicks on the check icon to save the Class", async function () {
    await dataFlow.clickCheckIcon();
});