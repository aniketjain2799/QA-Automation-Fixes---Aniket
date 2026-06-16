import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import BotStudioIntegrationCU from "../../pages/12BotStudioIntegrationInCUPage";
import { expect } from '@playwright/test';


let botStudioIntegrationCU: BotStudioIntegrationCU;
let extractedId: string;
let extractedFirstName: string;
let extractedLastName: string;

When("User click on Existing AchalTestEnv Environment", async function () {
    botStudioIntegrationCU = new BotStudioIntegrationCU(fixture.page);
    await botStudioIntegrationCU.clickOnAchalTestEnv();
});

When("the User click on Root Folder", async function () {
    await botStudioIntegrationCU.clickOnRoot();
});

When("the User click on ODBC Bot", async function () {
    await botStudioIntegrationCU.selectODBCBot();
});

When("the User clicks on Raw Data 1", async function () {
    await botStudioIntegrationCU.clickOnRawData1();
});

When("the User Double click on first Readi modules", async function () {
    await botStudioIntegrationCU.doubleClickOnReadiConnector();
});

When("the User Double click on first Name", async function () {
    botStudioIntegrationCU = new BotStudioIntegrationCU(fixture.page);
    await botStudioIntegrationCU.doubleClickOnFirstName();
});

When("the User Double click on Second Readi modules", async function () {
    await botStudioIntegrationCU.doubleClickOnReadiConnector2();
});

When("the User Double click on Third Readi modules", async function () {
    await botStudioIntegrationCU.doubleClickOnReadiConnector3();
});

When("the User click on View Text", async function () {
    await botStudioIntegrationCU.clickOnViewText();
});

When("the User click on View Text1", async function () {
    await botStudioIntegrationCU.clickOnViewText1();
});

Then("the User can verify the Id", async function () {
    const expectedId = "00b24d26-2824-48c5-9a8c-7d1b53fd50a7";
    await botStudioIntegrationCU.verifyIdText(expectedId);
});


When("the User click on close button", async function () {
    await botStudioIntegrationCU.clickOnFirstCloseButton();
});

Then("the User close the second Pop up window by click on close button", async function () {
    await botStudioIntegrationCU.clickOnSecondCloseButton();
});

Then("the User can verify the IsActive should be False", async function () {
    await botStudioIntegrationCU.verifyIsActiveIsFalse();
});

Then("the User can verify the IsActive should be True", async function () {
    await botStudioIntegrationCU.verifyIsActiveIsTrue();
});

Then("the User extracts and stores the ID from View Text", async function () {
    extractedId = await botStudioIntegrationCU.extractIdFromJson();
    console.log("Extracted ID:", extractedId);
});

Then("the User extracts and stores FirstName and LastName from View Text1", async function () {
    const names = await botStudioIntegrationCU.extractFirstAndLastName();
    extractedFirstName = names.firstName;
    extractedLastName = names.lastName;

    console.log("FirstName:", extractedFirstName);
    console.log("LastName:", extractedLastName);
});

Then("the User extracts and stores FirstName from View Text1", async function () {
    const nameObj = await botStudioIntegrationCU.extractFirstNameOnly();
    extractedFirstName = nameObj.firstName;

    console.log("FirstName:", extractedFirstName);
});



When("the user clicks on Name search box and sends the full dynamic name and presses enter", async function () {
    const sanitizedLastName = extractedLastName.replace(/[^a-zA-Z0-9()]/g, '');
    const fullName = `Usr${extractedFirstName}${sanitizedLastName}`;

    console.log("Sending to search box:", fullName);
    await botStudioIntegrationCU.searchAndPressEnter1(fullName);
});

When("the user clicks on Name search box and sends the first name and presses enter", async function () {
    const sanitizedLastName = extractedLastName.replace(/[^a-zA-Z0-9()]/g, '');
    const fullName1 = `Usr${extractedFirstName}`;

    console.log("Sending to search box:", fullName1);
    await botStudioIntegrationCU.searchAndPressEnter1(fullName1);
});

When("the user clicks on the 'User' row", async function () {
    await botStudioIntegrationCU.clickOnUser();
});


Then("the user should find the matching LinkId and validate IsActive is false", async function () {
    const expectedLinkId = extractedId;
    await botStudioIntegrationCU.validateUserByLinkId(expectedLinkId);
});

Then("the user should find the matching LinkId and validate IsActive is True", async function () {
    const expectedLinkId = extractedId;
    await botStudioIntegrationCU.validateUserByLinkIdIsActiveTrue(expectedLinkId);
});

Then("the User click on Cancle Button", async function () {
    await botStudioIntegrationCU.clickOnCancleButton();
});

Then("the User click on Ok Button", async function () {
    await botStudioIntegrationCU.clickOnOkButton();
});

Then("the User can verify the FirstName should be Demo", async function () {
    await botStudioIntegrationCU.verifyFirstNameIsDemo();
});

Then("the user should find the matching LinkId and validate FirstName should be Demo", async function () {
    const expectedLinkId = extractedId;
    await botStudioIntegrationCU.validateUserByLinkIdAndFirstName(expectedLinkId, "demo");
});

Then("the User remove the LinkId Value", async function () {
    await botStudioIntegrationCU.clearLinkIdValueInMonaco();
});

Then("the User can verify that LinkId is Present", async function () {
    await botStudioIntegrationCU.verifyLinkIdIsPresent("e91bbafd-dc8e-49fc-a524-7c583f7ad9a0");
});

When("the user clicks on Name search box and sends the full dynamic name and presses enter1", async function () {
    const extractedFirstName = this.dynamicFirstName;
    const extractedLastName = "Sharma";

    const sanitizedLastName = extractedLastName.replace(/[^a-zA-Z0-9()]/g, '');
    const fullName = `Usr${extractedFirstName}${sanitizedLastName}`;

    console.log("Sending to search box:", fullName);
    await botStudioIntegrationCU.searchAndPressEnter1(fullName);
});

Then("the user should validate linkID should be same as we sent previously", async function () {
    const expectedLinkId = this.dynamicLinkId;

    if (!expectedLinkId) {
        throw new Error("dynamicLinkId is not available in the test context.");
    }

    const linkIdLocator = fixture.page.locator(
        `(//div[contains(@class, 'view-line')][.//span[contains(text(), '"LinkId"') and contains(text(), '${expectedLinkId}')]])[2]`
    );

    await linkIdLocator.waitFor({ timeout: 5000 });
    const textContent = await linkIdLocator.textContent();

    console.log("Validating LinkId:", textContent);

    expect(textContent?.replace(/\s+/g, '')).toContain(`"LinkId":"${expectedLinkId}"`);
});

Then("the user should verify that the Country is updated correctly in monaco", async function () {
    const expectedCountry = this.dynamicCountry;
    await botStudioIntegrationCU.validateCountryValueInMonaco(expectedCountry);
});
