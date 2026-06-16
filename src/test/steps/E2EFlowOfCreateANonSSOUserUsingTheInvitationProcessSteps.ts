import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CreateANonSSOUserUsingTheInvitationProcessPage from "../../pages/E2EFlowOfCreateANonSSOUserUsingTheInvitationProcessPage";
import testData from '../../helper/util/test-data/TestData.json';
import { MailinatorPage } from "../../pages/MailinatorPage";
import * as data from "../../helper/util/test-data/TestData.json";





let createANonSSOUserUsingTheInvitationProcessPage: CreateANonSSOUserUsingTheInvitationProcessPage;
let randomEmail: string;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the Invitations", async function () {
    createANonSSOUserUsingTheInvitationProcessPage = new CreateANonSSOUserUsingTheInvitationProcessPage(fixture.page);
    await createANonSSOUserUsingTheInvitationProcessPage.clickOnInvitations();

});

When("the User fill all the details and click on sent Invitation", async function () {
    const randomPrefix = testData.find((data: any) => data.RandomEmailName)?.RandomEmailName || "RandomAutomationEmail";
    randomEmail = `${randomPrefix}${Date.now()}@mailinator.com`;

    const randomFirstName = testData.find((data: any) => data.RandomFirstName)?.RandomFirstName || "FirstName";
    const randomLastName = testData.find((data: any) => data.RandomLastName)?.RandomLastName || "LastName";

    await createANonSSOUserUsingTheInvitationProcessPage.clickOnPlusButton();
    await createANonSSOUserUsingTheInvitationProcessPage.enterEmailText(randomEmail);
    await createANonSSOUserUsingTheInvitationProcessPage.enterFirstNameText(randomFirstName);
    await createANonSSOUserUsingTheInvitationProcessPage.enterLastNameText(randomLastName);

    await createANonSSOUserUsingTheInvitationProcessPage.clickOnSelectRole();
    await createANonSSOUserUsingTheInvitationProcessPage.clickOnAdministrator();

    await createANonSSOUserUsingTheInvitationProcessPage.clickOnSendInvites();
    await createANonSSOUserUsingTheInvitationProcessPage.clickOnOk();

    console.log(`Invitation sent to: ${randomEmail}`);
});

When("the User opens Mailinator searches the mail and clicks on the link", async function () {
    const mailinatorUrl = testData[11].mailinatorUrl;
    const mailinatorPage = new MailinatorPage(fixture.page);
    await mailinatorPage.navigateToMailinator(mailinatorUrl);
    await mailinatorPage.searchEmail(randomEmail);
    await mailinatorPage.openEmail("READI Platform Alert");

    const [newTab] = await Promise.all([
        fixture.page.context().waitForEvent('page'),
        mailinatorPage.clickLinkInIframe()
    ]);

    await newTab.waitForLoadState();
    fixture.page = newTab;
});

Then("the User enter new and confirm password to create a New User and Verify the Same", async function () {
    const createUserPage = new CreateANonSSOUserUsingTheInvitationProcessPage(fixture.page);
    await createUserPage.enterNewPasswordText(data[11].NewPassword);
    await createUserPage.enterConfirmPasswordText(data[11].ConfirmPassword);
    await createUserPage.clickOnRegister();
    await createUserPage.enterPhoneNumberText(data[11].phoneNumber);
    await createUserPage.clickOnSubmit();
    await createUserPage.validateUserCreationVerify();
});


