import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import BotRetentionPage from "../../pages/E2EFlowOfBotPropertyRetantionPage";
import * as data from "../../helper/util/test-data/TestData.json";



let botRetentionPage: BotRetentionPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the BotProperties Folder", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnBotPropertiesFolder();

});

When("selects the Bot", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnBaot();

});

Then("the User is able to click on the properties section of the Bot", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnProperties();

});

When("the User clicks on cross icon of the properties section", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnCrossIcon();

});

When("the User clicks on the General tab of the properties section", async function () {
    await botRetentionPage.clickOnGeneral();

});

Then("the User verifies all the important fields in the General tab section", async function () {
    const expectedState: 'on' | 'off' = 'on';
    await botRetentionPage.verifyToggleState(expectedState);
    await botRetentionPage.NameDescriptionTextValidation();
    await botRetentionPage.PrimaryKayTextValidation();
    await botRetentionPage.DepthElementTextValidation();
    await botRetentionPage.MaxDuplicateTextValidation();
    await botRetentionPage.SentAlertToTextValidation();
    const IschkAlertIfNoDataCB1Selected = await botRetentionPage.ischkAlertIfNoDataCB1Selected();
    expect(IschkAlertIfNoDataCB1Selected).toBe(true);
    const IschkAlertIfBotFailsCB2Selected = await botRetentionPage.ischkAlertIfBotFailsCB2Selected();
    expect(IschkAlertIfBotFailsCB2Selected).toBe(true);
    const IschkMasterSwitchChangeMonitoringCB3Selected = await botRetentionPage.ischkMasterSwitchChangeMonitoringCB3Selected();
    expect(IschkMasterSwitchChangeMonitoringCB3Selected).toBe(true);
    const IschkRunOnlyAsExplicitScriptcb4Selected = await botRetentionPage.ischkRunOnlyAsExplicitScriptcb4Selected();
    expect(IschkRunOnlyAsExplicitScriptcb4Selected).toBe(true);
    const IsToggleCB1Selected = await botRetentionPage.isToggleCB1Selected();
    expect(IsToggleCB1Selected).toBe(true);
    const IsToggleCB2Selected = await botRetentionPage.isToggleCB2Selected();
    expect(IsToggleCB2Selected).toBe(true);
    const IsToggleCB3Selected = await botRetentionPage.isToggleCB3Selected();
    expect(IsToggleCB3Selected).toBe(true);
});

Then("the User Verifies all the important fields in the General tab section", async function () {
    const expectedState: 'on' | 'off' = 'on';
    await botRetentionPage.verifyToggleState(expectedState);
    await botRetentionPage.NameDescriptionTextValidation();
    await botRetentionPage.DepthElementTextValidation();
    await botRetentionPage.MaxDuplicateTextValidation();
    await botRetentionPage.SentAlertToTextValidation();
    const IschkAlertIfBotFailsCB2Selected = await botRetentionPage.ischkAlertIfBotFailsCB2Selected();
    expect(IschkAlertIfBotFailsCB2Selected).toBe(true);
});

When("the User clicks on the Credentials tab of the properties section", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnCredentials();

});

Then("the User verifies all the important fields in the Credentials tab section", async function () {
    await botRetentionPage.ConnectID_1TextValidation();
    const IschkRunCCB1Selected = await botRetentionPage.ischkRunCCB1Selected();
    expect(IschkRunCCB1Selected).toBe(true);
    const isRadioSelected = await botRetentionPage.isRadioRunScriptWithSelectiveConnectIdsSelected();
    expect(isRadioSelected).toBe(true);

});

Then("the User Verifies all the important fields in the Credentials tab section", async function () {
    await botRetentionPage.ConnectID_1TextValidation();
    const isRadioSelected = await botRetentionPage.isRadioRunScriptWithSelectiveConnectIdsSelected();
    expect(isRadioSelected).toBe(true);

});

When("the User clicks on the Schedule tab of the properties section", async function () {
    await botRetentionPage.clickOnSchedule();

});

Then("the User verifies all the important fields in the Schedule tab section", async function () {
    const isRadioSelected2 = await botRetentionPage.isRadioRunScriptWithSelectiveCustomScheduleOptionSelected();
    expect(isRadioSelected2).toBe(true);
    await botRetentionPage.Twelve12TextValidation();
    const isSundaySelected = await botRetentionPage.isDaySelected(botRetentionPage.Elements.sun);
    expect(isSundaySelected).toBe(true);

});

Then("the User Verifies all the important fields in the Schedule tab section", async function () {
    const isRadioSelected2 = await botRetentionPage.isRadioRunScriptWithSelectiveCustomScheduleOptionSelected();
    expect(isRadioSelected2).toBe(true);
    await botRetentionPage.Twelve12TextValidation();
    const isSundaySelected = await botRetentionPage.isDaySelected(botRetentionPage.Elements.sun);
    expect(isSundaySelected).toBe(true);

});

When("the User clicks on the Retention tab of the properties section", async function () {
    await botRetentionPage.clickOnRetention();

});

Then('the User verifies all the important fields in the Retention tab section {string}', async function (expectedText2: string) {
    const isRadioSelected3 = await botRetentionPage.isRadioforSelected();
    expect(isRadioSelected3).toBe(true);
    const IschkIgnoreNoDataResultSelected = await botRetentionPage.ischkIgnoreNoDataResultSelected();
    expect(IschkIgnoreNoDataResultSelected).toBe(true);
    const IschkDeleteChangeLogsSelected = await botRetentionPage.ischkDeleteChangeLogsSelected();
    expect(IschkDeleteChangeLogsSelected).toBe(true);
    await botRetentionPage.TxtRetentionNumberTextValidation();
    const selectedText = await botRetentionPage.getSelectedRetentionUnitText();
    expect(selectedText).toBe(expectedText2);

});

Then('the User Verifies all the important fields in the Retention tab section {string}', async function (expectedText2: string) {
    const isRadioSelected3 = await botRetentionPage.isRadioforSelected();
    expect(isRadioSelected3).toBe(true);
    const IschkDeleteChangeLogsSelected = await botRetentionPage.ischkDeleteChangeLogsSelected();
    expect(IschkDeleteChangeLogsSelected).toBe(true);
    await botRetentionPage.TxtRetentionNumberTextValidation();
    const selectedText = await botRetentionPage.getSelectedRetentionUnitText();
    expect(selectedText).toBe(expectedText2);

});


When("the User clicks on the Permissions tab of the properties section", async function () {
    await botRetentionPage.clickOnPermissions();

});

Then("the User verifies all the important fields in the Permissions tab section", async function () {
    const isRadioSelected4 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected4).toBe(true);
    const ischkViewSelfGeneratedRunInstancesNotSelected = await botRetentionPage.IschkViewSelfGeneratedRunInstancesNotSelected();
    expect(ischkViewSelfGeneratedRunInstancesNotSelected).toBe(false);
    const ischkViewScriptExecutionLogSelected = await botRetentionPage.IschkViewScriptExecutionLogSelected();
    expect(ischkViewScriptExecutionLogSelected).toBe(true);
    const ischkViewScriptRunInstancesTimelineSelected = await botRetentionPage.IschkViewScriptRunInstancesTimelineSelected();
    expect(ischkViewScriptRunInstancesTimelineSelected).toBe(true);
    const ischkViewScriptLogViewsSelected = await botRetentionPage.IschkViewScriptLogViewsSelected();
    expect(ischkViewScriptLogViewsSelected).toBe(true);
    const ischkAllowQueryingSelected = await botRetentionPage.IschkAllowQueryingSelected();
    expect(ischkAllowQueryingSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellSelected();
    expect(ischkAllowScriptExecutionThroughPowershellSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiSelected();
    expect(ischkAllowScriptExecutionThroughRestApiSelected).toBe(true);


});

Then("the User Verifies all the important fields in the Permissions tab section", async function () {
    const isRadioSelected4 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected4).toBe(true);
    const ischkViewSelfGeneratedRunInstancesNotSelected = await botRetentionPage.IschkViewSelfGeneratedRunInstancesNotSelected();
    expect(ischkViewSelfGeneratedRunInstancesNotSelected).toBe(false);
    const ischkViewScriptExecutionLogSelected = await botRetentionPage.IschkViewScriptExecutionLogSelected();
    expect(ischkViewScriptExecutionLogSelected).toBe(true);
    const ischkViewScriptRunInstancesTimelineSelected = await botRetentionPage.IschkViewScriptRunInstancesTimelineSelected();
    expect(ischkViewScriptRunInstancesTimelineSelected).toBe(true);
    const ischkViewScriptLogViewsSelected = await botRetentionPage.IschkViewScriptLogViewsSelected();
    expect(ischkViewScriptLogViewsSelected).toBe(true);
    const ischkAllowQueryingSelected = await botRetentionPage.IschkAllowQueryingSelected();
    expect(ischkAllowQueryingSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellSelected();
    expect(ischkAllowScriptExecutionThroughPowershellSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiSelected();
    expect(ischkAllowScriptExecutionThroughRestApiSelected).toBe(true);


});


When("the User clicks on the Metrics tab of the properties section", async function () {
    await botRetentionPage.clickOnMetrics();
    await new Promise(resolve => setTimeout(resolve, 5000));

});

Then('the User verifies all the important fields in the Metrics tab section {string}', async function (expectedText3: string) {
    const selectedText1 = await botRetentionPage.getCategoryText();
    expect(selectedText1).toBe(expectedText3);
    await botRetentionPage.getTagsTextValidation();
    await botRetentionPage.TimeSavedPerDeployTextValidation();
    await botRetentionPage.TypicalWorkerCostTextValidation();
    await botRetentionPage.PerDeployCostTextValidation();

});

Then('the User Verifies all the important fields in the Metrics tab section {string}', async function (expectedText3: string) {
    const selectedText1 = await botRetentionPage.getCategoryText();
    expect(selectedText1).toBe(expectedText3);
    await botRetentionPage.getTagsTextValidation();
    await botRetentionPage.TimeSavedPerDeployTextValidation();
    await botRetentionPage.TypicalWorkerCostTextValidation();
    await botRetentionPage.PerDeployCostTextValidation();

});


When("the User clicks on the Execution tab of the properties section", async function () {
    await botRetentionPage.clickOnExecution();
    await new Promise(resolve => setTimeout(resolve, 5000));

});

Then("the User verifies all the important fields in the Execution tab section", async function () {
    const isRadioSelected5 = await botRetentionPage.isRadioUseExecutionOptionSelected();
    expect(isRadioSelected5).toBe(true);
    await botRetentionPage.getPowerShellText();

});

Then("the User Verifies all the important fields in the Execution tab section", async function () {
    const isRadioSelected5 = await botRetentionPage.isRadioUseExecutionOptionSelected();
    expect(isRadioSelected5).toBe(true);
    await botRetentionPage.getPowerShellText();

});

When("user click on Data Table of the BotProperties folder", async function () {
    await botRetentionPage.clickOnDataTable();

});

When("user click on Data Table of the BotProperties folder41", async function () {
    await botRetentionPage.clickOnDataTable41();

});

When("user click on Data Table of the BotProperties folder4", async function () {
    await botRetentionPage.clickOnDataTable4();

});

Then("the User is able to click on the properties section of the Data Table", async function () {
    await botRetentionPage.clickOnProperties();

});

Then("the User verifies all the important fields in the General tab section of Data Table", async function () {
    await botRetentionPage.getNameDataTableTextValidation();
    await botRetentionPage.PrimaryKeyDataTableTextValidation();
    await botRetentionPage.getAliasDataTableTextValidation();
    await botRetentionPage.getJsonDepthDataTableTextValidation();
    await botRetentionPage.MaxDuplicateInsDataTableTextValidation();

});

Then("the User verifies all the important fields in the Permissions tab section of Data Table", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidation();
    await botRetentionPage.validateCopyButtonFunctionality();


});

Then("the User verifies all The Important fields in the Permissions tab section of Data Table", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidation4();
    await botRetentionPage.validateCopyButtonFunctionality4();


});

When("user click on Queue of the BotProperties folder", async function () {
    await botRetentionPage.clickOnQueue();
    await botRetentionPage.clickOnGeneral();

});

Then('the User verifies all the important fields in the General tab section of Queue {string}', async function (expectedText1: string) {
    await botRetentionPage.getDescriptionQueueTextValidation();
    const selectedText2 = await botRetentionPage.getQueueStatusText();
    expect(selectedText2).toBe(expectedText1);
    const isRadioSelected6 = await botRetentionPage.isRadioMultipleObjectsSelected();
    expect(isRadioSelected6).toBe(true);

});


When("the User clicks on the Permissions tab of the Queue section", async function () {
    await botRetentionPage.clickOnPermissions();

});

Then("the User verifies all the important fields in the Permissions tab section of Queue", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueue();

});

Then("the User verifies all the important fields in the Permissions Tab section of Queue", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueue4();

});

When("the User click on Service Bot", async function () {
    await botRetentionPage.clickOnServiceBot();

});


When("the user click on properties", async function () {
    await botRetentionPage.clickOnProperties();

});


When("click on the general tab of Service Bot", async function () {
    await botRetentionPage.clickOnGeneral();

});


Then("the User verifies all the important fields in the general tab section of Service Bot", async function () {
    await botRetentionPage.getDescriptionServiceBotTextValidation();
    await botRetentionPage.getJsonDepthServiceBotTextValidation();
    await botRetentionPage.getTxtScriptMailAddressesTextValidation();
    await botRetentionPage.getTxtMaxItemsToDequeueTextValidation();
    const ischkAlertIfNoDataSelected = await botRetentionPage.IschkAlertIfNoDataelected();
    expect(ischkAlertIfNoDataSelected).toBe(true);
    const ischkAlertIfBotFailsSelected = await botRetentionPage.IschkAlertIfBotFailsSelected();
    expect(ischkAlertIfBotFailsSelected).toBe(true);
    const ischkMasterSwitchChangeMonitoringSelected = await botRetentionPage.IschkMasterSwitchChangeMonitoringSelected();
    expect(ischkMasterSwitchChangeMonitoringSelected).toBe(true);
    const ischkRunOnlyAsExplicitScriptSelected = await botRetentionPage.IschkRunOnlyAsExplicitScriptSelected();
    expect(ischkRunOnlyAsExplicitScriptSelected).toBe(true);
    const ischkProvideFullReadiMessageSelected = await botRetentionPage.IschkProvideFullReadiMessageSelected();
    expect(ischkProvideFullReadiMessageSelected).toBe(true);

});


When("the User click on the Credentials tab of Service Bot", async function () {
    await botRetentionPage.clickOnCredentials();

});

Then("the User verifies all the important fields in the Credentials tab section of Service Bot", async function () {
    await botRetentionPage.clickOnProperties();
    const isRadioSelected11 = await botRetentionPage.isRadioRunScriptWithSelectiveConnectIdsSelected();
    expect(isRadioSelected11).toBe(true);
    await botRetentionPage.ConnectID_1TextValidation();
    const IschkRunCCB1Selected11 = await botRetentionPage.ischkRunCCB1Selected();
    expect(IschkRunCCB1Selected11).toBe(true);

});

When("the User click on the Schedule tab of Service Bot", async function () {
    await botRetentionPage.clickOnSchedule();

});

Then("the User verifies all the important fields in the Schedule tab section of Service Bot", async function () {
    const isRadioSelected21 = await botRetentionPage.isRadioRunScriptWithSelectiveCustomScheduleOptionSelected();
    expect(isRadioSelected21).toBe(true);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const isSundaySelected21 = await botRetentionPage.isDaySelected(botRetentionPage.Elements.sun);
    expect(isSundaySelected21).toBe(true);
    await botRetentionPage.Every5MinsTextValidation();

});


When("the User click on the Retention tab of Service Bot", async function () {
    await botRetentionPage.clickOnRetention();

});

Then('the User verifies all the important fields in the Retention tab section of Service Bot {string}', async function (expectedText21: string) {
    const isRadioSelected31 = await botRetentionPage.isRadioforSelected();
    expect(isRadioSelected31).toBe(true);
    await botRetentionPage.TxtRetentionNumberTextValidation1();
    const selectedText11 = await botRetentionPage.getSelectedRetentionUnitText();
    expect(selectedText11).toBe(expectedText21);
    const IschkIgnoreNoDataResultSelected21 = await botRetentionPage.ischkIgnoreNoDataResultSelected();
    expect(IschkIgnoreNoDataResultSelected21).toBe(true);


});

When("the User click on the Permissions tab of Service Bot", async function () {
    await botRetentionPage.clickOnPermissions();

});

Then("the User verifies all the important fields in the Permissions tab section of Service Bot", async function () {
    const isRadioSelected41 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected41).toBe(true);
    const ischkViewScriptExecutionLogSelected11 = await botRetentionPage.IschkViewScriptExecutionLogSelected();
    expect(ischkViewScriptExecutionLogSelected11).toBe(true);
    const ischkViewScriptRunInstancesTimelineSelected11 = await botRetentionPage.IschkViewScriptRunInstancesTimelineSelected();
    expect(ischkViewScriptRunInstancesTimelineSelected11).toBe(true);
    const ischkViewScriptLogViewsSelected11 = await botRetentionPage.IschkViewScriptLogViewsSelected();
    expect(ischkViewScriptLogViewsSelected11).toBe(true);

});

When("the User clicks on the MyWorkspace", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnMyWorkspace();

});


When("the User clicks on the root folder of MyWorkspace", async function () {
    await botRetentionPage.clickOnRootMyWorkspace();

});

When("user click on Data Table of the BotProperties folder of MyWorkspace", async function () {
    await botRetentionPage.clickOnDataTableMyWorkspace();

});

When("user click on Data Table of the BotProperties folder of MyWorkspace4", async function () {
    await botRetentionPage.clickOnDataTableMyWorkspace4();

});

Then("the User verifies all the important fields in the Permissions tab section of Data Table MW", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationMW();
    await botRetentionPage.validateCopyButtonFunctionality1();


});

Then("the User verifies all the important fields In the Permissions tab section of Data Table MW", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationMW4();
    await botRetentionPage.validateCopyButtonFunctionality14();


});


Then("the User verifies all the important fields in the Permissions tab section of Queue MW", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueueMW();

});

Then("the User verifies all the important fields in the Permissions Tab section of Queue MW", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueueMW4();

});

When("the User clicks on the Team Workspaces", async function () {
    botRetentionPage = new BotRetentionPage(fixture.page);
    await botRetentionPage.clickOnTeamWorkspaces();

});

When("the User clicks on the Achal Team Workspace", async function () {
    await botRetentionPage.clickOnAchalTeamWorkspace();

});

When("the User clicks on the root folder of Achal Team Workspace", async function () {
    await botRetentionPage.clickOnRootTeamWorkspaces();

});

When("the User clicks on the root folder of Achal Team Workspace4", async function () {
    await botRetentionPage.clickOnRootTeamWorkspaces4();

});

When("the User clicks on the Root folder of Achal Team Workspace", async function () {
    await botRetentionPage.clickOnRootTeamWorkspaces1();

});


When("user click on Data Table of the BotProperties folder of Team Workspaces", async function () {
    await botRetentionPage.clickOnDataTableTeamWorkspaces();

});

When("user click on Data Table of the BotProperties folder of Team Workspaces4", async function () {
    await botRetentionPage.clickOnDataTableTeamWorkspaces4();

});

Then("the User verifies all the important fields in the Permissions tab section of Data Table TW", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationTW();
    await botRetentionPage.validateCopyButtonFunctionality2();


});

Then("the User verifies all the Important fields in the Permissions tab section of Data Table TW", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationTW4();
    await botRetentionPage.validateCopyButtonFunctionality24();


});


Then("the User verifies all the important fields in the Permissions tab section of Queue TW", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueueTW();

});

Then("the User verifies all the important Fields in the Permissions tab section of Queue TW", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueueTW4();

});


Then("the User verifies all the important fields in the Permissions Tab section of Data Table", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidation();
    await botRetentionPage.verifyCopyButtonDisabled();
    await botRetentionPage.verifyPermisssionCheckboxIsDisabledDT();


});

Then("the User verifies all the important fields In The Permissions Tab section of Data Table", async function () {
    const isRadioSelected5 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected5).toBe(true);
    const ischkAllowAddDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowAddDatatableRecordThroughUISelected();
    expect(ischkAllowAddDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowEditDatatableRecordThroughUISelected = await botRetentionPage.IschkAllowEditDatatableRecordThroughUISelected();
    expect(ischkAllowEditDatatableRecordThroughUISelected).toBe(true);
    const ischkAllowDeleteDatatableRecordsThroughUISelected = await botRetentionPage.IschkAllowDeleteDatatableRecordsThroughUISelected();
    expect(ischkAllowDeleteDatatableRecordsThroughUISelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellDataTableSelected();
    expect(ischkAllowScriptExecutionThroughPowershellDataTableSelected).toBe(true);
    const ischkAllowQueryingDataTablSelected = await botRetentionPage.IschkAllowQueryingDataTablSelected();
    expect(ischkAllowQueryingDataTablSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiDataTablSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiDataTablSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiDataTablSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiDataTableSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiDataTableSelected();
    expect(ischkAllowScriptExecutionThroughRestApiDataTableSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidation4();
    await botRetentionPage.verifyCopyButtonDisabled();
    await botRetentionPage.verifyPermisssionCheckboxIsDisabledDT();


});

Then("the User verifies all the important fields in the Credentials tab Section", async function () {
    await botRetentionPage.ConnectID_1TextValidation();
    const IschkRunCCB1Selected = await botRetentionPage.ischkRunCCB1Selected();
    expect(IschkRunCCB1Selected).toBe(true);
    const isRadioSelected = await botRetentionPage.isRadioRunScriptWithSelectiveConnectIdsSelected();
    expect(isRadioSelected).toBe(true);
    await botRetentionPage.verifyCredentialDropDownIsDisabled();
    await botRetentionPage.verifyCredentialCheckboxIsDisabled();

});

Then("the User verifies all the important fields in the Permissions tab Section", async function () {
    const isRadioSelected4 = await botRetentionPage.IsSharingInheritedRadioButtonSelected();
    expect(isRadioSelected4).toBe(true);
    const ischkViewSelfGeneratedRunInstancesNotSelected = await botRetentionPage.IschkViewSelfGeneratedRunInstancesNotSelected();
    expect(ischkViewSelfGeneratedRunInstancesNotSelected).toBe(false);
    const ischkViewScriptExecutionLogSelected = await botRetentionPage.IschkViewScriptExecutionLogSelected();
    expect(ischkViewScriptExecutionLogSelected).toBe(true);
    const ischkViewScriptRunInstancesTimelineSelected = await botRetentionPage.IschkViewScriptRunInstancesTimelineSelected();
    expect(ischkViewScriptRunInstancesTimelineSelected).toBe(true);
    const ischkViewScriptLogViewsSelected = await botRetentionPage.IschkViewScriptLogViewsSelected();
    expect(ischkViewScriptLogViewsSelected).toBe(true);
    const ischkAllowQueryingSelected = await botRetentionPage.IschkAllowQueryingSelected();
    expect(ischkAllowQueryingSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellSelected();
    expect(ischkAllowScriptExecutionThroughPowershellSelected).toBe(true);
    const ischkAllowScriptDataAccessThroughRestApiSelected = await botRetentionPage.IschkAllowScriptDataAccessThroughRestApiSelected();
    expect(ischkAllowScriptDataAccessThroughRestApiSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiSelected();
    expect(ischkAllowScriptExecutionThroughRestApiSelected).toBe(true);
    await botRetentionPage.verifyPermisssionCheckboxIsDisabled();


});


Then("the User verifies all the important fields in the Permissions tab Section of Queue", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueue();
    await botRetentionPage.verifyPermisssionCheckboxIsDisabledQueue();

});

Then("the User verifies all the important fields in the Permissions tab Section Of Queue", async function () {
    const isRadioSelected7 = await botRetentionPage.isRadioSharingInheritedSelected();
    expect(isRadioSelected7).toBe(true);
    const ischkChkAllowQueryingQueueSelected = await botRetentionPage.IschkChkAllowQueryingQueueSelected();
    expect(ischkChkAllowQueryingQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughPowershellQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughPowershellQueueSelected();
    expect(ischkAllowScriptExecutionThroughPowershellQueueSelected).toBe(true);
    const ischkAllowScriptExecutionThroughRestApiQueueSelected = await botRetentionPage.IschkAllowScriptExecutionThroughRestApiQueueSelected();
    expect(ischkAllowScriptExecutionThroughRestApiQueueSelected).toBe(true);
    await botRetentionPage.ApiEndPointTextValidationQueue41();
    await botRetentionPage.verifyPermisssionCheckboxIsDisabledQueue();

});


Then("the User verifies all the important fields in the Credentials tab Section of Service Bot", async function () {
    await botRetentionPage.clickOnProperties();
    const isRadioSelected11 = await botRetentionPage.isRadioRunScriptWithSelectiveConnectIdsSelected();
    expect(isRadioSelected11).toBe(true);
    await botRetentionPage.ConnectID_1TextValidation();
    const IschkRunCCB1Selected11 = await botRetentionPage.ischkRunCCB1Selected();
    expect(IschkRunCCB1Selected11).toBe(true);
    await botRetentionPage.verifyCredentialDropDownIsDisabledSB();
    await botRetentionPage.verifyCredentialCheckboxIsDisabled();

});




