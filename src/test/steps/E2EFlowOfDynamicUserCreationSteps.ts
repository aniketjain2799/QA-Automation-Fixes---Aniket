import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import DynamicUserCreationPage from "../../pages/E2EFlowOfDynamicUserCreationPage";
import * as fs from "fs";
import * as path from "path";
import * as data from "../../helper/util/test-data/TestData.json";

let dynamicUserCreationPage: DynamicUserCreationPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Dynamic User creation folder", async function () {
    dynamicUserCreationPage = new DynamicUserCreationPage(fixture.page);
    await dynamicUserCreationPage.clickOnDynamicUserCreation();

});

When("the User clicks on the dynamicuser Bot", async function () {
    await dynamicUserCreationPage.clickOnDynamicuser();

});

Then("dynamicuser bot script Should Be executed Successfully", async function () {

    const jobFinishedText = await dynamicUserCreationPage.getJobFinishedText(120000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await dynamicUserCreationPage.getNoErrorText(120000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});


When("the User clicks on the logView5", async function () {
    await dynamicUserCreationPage.clickOnLogview5();

});

Then('the User can validate that the logView5 timestamp is New', async function () {

    const rawDataTimeText = await fixture.page.textContent("//span[@class='dataRetrievalDate']");
    const rawDataTime = new Date(rawDataTimeText.trim());
    const currentTime = new Date();
    const rawDataTimeUTC = new Date(rawDataTime.getTime() + rawDataTime.getTimezoneOffset() * 60000);
    const currentTimeUTC = new Date(currentTime.getTime() + currentTime.getTimezoneOffset() * 60000);

    console.log(`Raw Data Time from page (UTC): ${rawDataTimeUTC}`);
    console.log(`Current System Time (UTC): ${currentTimeUTC}`);

    const differenceInMilliseconds = currentTimeUTC.getTime() - rawDataTimeUTC.getTime();
    const oneMinuteInMilliseconds = 1 * 60 * 1000;
    const isNew = differenceInMilliseconds >= -oneMinuteInMilliseconds && differenceInMilliseconds <= oneMinuteInMilliseconds;

    if (isNew) {
        console.log('Raw Data timestamp is considered new within ±1 minute (UTC).');
    } else {
        console.log('Raw Data timestamp is considered old or outside the ±1 minute range (UTC).');
    }

    expect(isNew).toBeTruthy();
});

Then("the User can verify the dyanmic User Email", async function () {
    await dynamicUserCreationPage.validateDynamicuseremailText();
});

When("the User clicks on Global Settings", async function () {
    dynamicUserCreationPage = new DynamicUserCreationPage(fixture.page);
    await dynamicUserCreationPage.clickOnGlobalSettings();

});

When("the User clicks on Teams Options", async function () {
    await dynamicUserCreationPage.clickOnTeam();

});

When("the User clicks on Manage Roles", async function () {
    await dynamicUserCreationPage.clickOnManageRoles();

});


When("the User clicks in Plus Icon", async function () {
    await dynamicUserCreationPage.clickOnPlusIcon();

});

When("the User select the dynamic Role", async function () {
    await dynamicUserCreationPage.clickOnDynamicUser();

});

When("the User give the Role name", async function () {
    await dynamicUserCreationPage.EnterRollName(data[9].rollName);

});

When("the User give the Role name1", async function () {
    await dynamicUserCreationPage.EnterRollName(data[9].rollName1);

});

Then("the User Clicks on OK Button", async function () {
    await dynamicUserCreationPage.clickOnOkButton();
    await dynamicUserCreationPage.clickOnOkButton1();

});


When("clicks on the setting icon", async function () {
    await dynamicUserCreationPage.clickOnSettingIcon();

});

When("fill the complete form", async function () {
    await dynamicUserCreationPage.EnterScript(data[9].Script1);
    await dynamicUserCreationPage.clickOnScriptSelect();
    await dynamicUserCreationPage.ValidateLogview5Text();
    await dynamicUserCreationPage.clickOnColumn();
    await dynamicUserCreationPage.clickOnUpn();
    await dynamicUserCreationPage.clickOnRefresh();
    await dynamicUserCreationPage.ValidateEmailText();

});


When("fill the complete Form", async function () {
    await dynamicUserCreationPage.clickOnPersonal();
    await dynamicUserCreationPage.clickOnEnvironment();
    await dynamicUserCreationPage.clickOnTestEnv11();
    await dynamicUserCreationPage.clickOnGlobal_Env_Automation();
    await dynamicUserCreationPage.EnterScript(data[9].Script0);
    await dynamicUserCreationPage.clickOnScriptSelect1();
    await dynamicUserCreationPage.ValidateLogview5Text();
    await dynamicUserCreationPage.clickOnColumn();
    await dynamicUserCreationPage.clickOnUpn();
    await dynamicUserCreationPage.clickOnRefresh();
    await dynamicUserCreationPage.ValidateEmailText();

});


When("clicks on the OK button three times", async function () {
    dynamicUserCreationPage = new DynamicUserCreationPage(fixture.page);
    await dynamicUserCreationPage.clickOnOk2();
    await dynamicUserCreationPage.clickOnOkButton();
    await dynamicUserCreationPage.clickOnOkButton1();

});

When("the User refresh the Page", async function () {
    if (dynamicUserCreationPage) {
        await dynamicUserCreationPage.refreshPage();
    } else {
        await fixture.page.waitForTimeout(60000);
        await fixture.page.reload();
        await fixture.page.waitForTimeout(10000);
    }

});

Then("the Dynamic User should be created and user can verify the Role and email", async function () {
    await dynamicUserCreationPage.filterByEmail3('achal.dynamic@outlook.com');
    await dynamicUserCreationPage.ValidateMainEmailText();
    await dynamicUserCreationPage.ValidateRoleValidationText();
});

Then("the Dynamic User should be created and user can verify the Role and email3", async function () {
    await dynamicUserCreationPage.filterByEmail3('achal.dynamic2025@outlook.com');
    await dynamicUserCreationPage.ValidateMainEmailText3();
    await dynamicUserCreationPage.ValidateRoleValidationText3();
});

When("the User clicks on Remove Icon", async function () {
    await dynamicUserCreationPage.clickOnRemoveButton();

});

Then("the User newly created user should be removed", async function () {
    await dynamicUserCreationPage.clickOnOkButton1();
    await dynamicUserCreationPage.clickOnOkButton();

});


When("the User Right click on the Environment GlobalDynamicUserAutomation1", async function () {
    await dynamicUserCreationPage.rightClickOnGlobalDynamicUserAutomation1();

});

When("the user clicks on permission section", async function () {
    await dynamicUserCreationPage.clickOnPermision();

});

When("the User sent the dynamic user email in UserEmail Section", async function () {
    await dynamicUserCreationPage.EnterDyanmicUserEmail(data[9].DyanmicUserEmail);
    await dynamicUserCreationPage.clickDyanmicUserEmail();

});

When("the User clicks on main Environment", async function () {
    await dynamicUserCreationPage.clickOnEnvironments();

});

When("the user clicks on the Search Icon", async function () {
    await dynamicUserCreationPage.clickOnAutoSuggestiveEmailList();
    await dynamicUserCreationPage.clickOnSearchBar();

});

When("the user click on the Plus icon", async function () {
    await dynamicUserCreationPage.clickOnAddIcon();

});

Then("the Environment should be shared with Dynmaic User", async function () {
    await dynamicUserCreationPage.clickOnOkButtonPermission();

});

When("the User click on the Environment GlobalDynamicUserAutomation2", async function () {
    await dynamicUserCreationPage.ClickOnGlobalDynamicUserAutomation2();

});

When("the click on the root Folder", async function () {
    await dynamicUserCreationPage.clickOnRoot();

});

When("the click on the root Folder4", async function () {
    await dynamicUserCreationPage.clickOnRoot4();

});

When("the click on the root Folder3", async function () {
    await dynamicUserCreationPage.clickOnRoot3();

});

When("the user click on the BotRun for giving permission", async function () {
    await dynamicUserCreationPage.clickOnBotRun();

});

When("the User clicks on Environment of dynamic user", async function () {
    await dynamicUserCreationPage.clickOnEnvironmentsDU();

});

When("the User click on the Environment GlobalDynamicUserAutomation1 of dynamic user", async function () {
    await dynamicUserCreationPage.clickOnGlobalDynamicUserAutomation1DU();

});

When("the user click on the root Folder of GlobalDynamicUserAutomation1", async function () {
    await dynamicUserCreationPage.clickOnRootDU();

});

When("the user clicks on the BotRun", async function () {
    await dynamicUserCreationPage.clickOnBotRunDU();

});

When("the User clicks on Raw data 0 Tab", async function () {
    await dynamicUserCreationPage.clickOnRawData0();

});


When("the user clicks right on NameTest", async function () {
    await dynamicUserCreationPage.rightClickOnNameTest();

});


When("the user clicks on the Export as Excel", async function () {
    await dynamicUserCreationPage.clickOnExportAsExcel();

});

Then("the user can validate the data row and Total data rows and Excel download", async function () {
    await dynamicUserCreationPage.validateNameToday1110TextRaw1();
    await dynamicUserCreationPage.validateNameToday1119TextRaw9();
    await dynamicUserCreationPage.TotalPageCountText();

});

When("the user clicks on hamburger menu", async function () {
    dynamicUserCreationPage = new DynamicUserCreationPage(fixture.page);
    await dynamicUserCreationPage.clickOnHumburgerMenu();

});

When("the user clicks on Bot studio", async function () {
    await dynamicUserCreationPage.clickOnBotStudio();

});

When("the user clicks on Bot Run", async function () {
    await dynamicUserCreationPage.clickOnBotRunDu();

});

When("the User checks for existing dynamic role and deletes it if present", async function () {
    const expectedRoleName = "0dynamic";

    console.log(`Checking for role: '${expectedRoleName}'`);
    const isRolePresent = await dynamicUserCreationPage.isRolePresent(expectedRoleName);

    if (isRolePresent) {
        console.log(`Role '${expectedRoleName}' exists. Deleting...`);
        await dynamicUserCreationPage.deleteRole();
    } else {
        await dynamicUserCreationPage.clickOnOkButton();
        console.log(`Role '${expectedRoleName}' does not exist. Proceeding...`);
    }
});


When("the User checks for existing Dynamic role and deletes it if present", async function () {
    const expectedRoleName1 = "01dynamic000";

    console.log(`Checking for role: '${expectedRoleName1}'`);
    const isRolePresent = await dynamicUserCreationPage.isRolePresent(expectedRoleName1);

    if (isRolePresent) {
        console.log(`Role '${expectedRoleName1}' exists. Deleting...`);
        await dynamicUserCreationPage.deleteRole();
    } else {
        await dynamicUserCreationPage.clickOnOkButton();
        console.log(`Role '${expectedRoleName1}' does not exist. Proceeding...`);
    }
});