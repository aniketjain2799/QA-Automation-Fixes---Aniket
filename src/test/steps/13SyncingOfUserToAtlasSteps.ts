import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import SyncingOfUserToAtlasPage from "../../pages/13SyncingOfUserToAtlasPage";
import { expect } from '@playwright/test';


let syncingOfUserToAtlasPage: SyncingOfUserToAtlasPage;

When("the User clicks on the Users tab", async function () {
    syncingOfUserToAtlasPage = new SyncingOfUserToAtlasPage(fixture.page);
    await syncingOfUserToAtlasPage.clickOnUsersTab();
});

When("the User checks for checkbox and deletes user if visible", async function () {
    await syncingOfUserToAtlasPage.deleteUserIfCheckboxVisible();
});

Then("the User can verify the LastName FirstName DisplayName", async function () {
    syncingOfUserToAtlasPage = new SyncingOfUserToAtlasPage(fixture.page);
    const expectedValues = {
        LastName: '"LastName":"jain"',
        FirstName: '"FirstName":"VIVEKTEST"',
        DisplayName: '"DisplayName":"VIVEKTESTjain"',
    };
    await syncingOfUserToAtlasPage.verifyMultipleFields(expectedValues);
});

When("the User clicks in Services section", async function () {
    syncingOfUserToAtlasPage = new SyncingOfUserToAtlasPage(fixture.page);
    await syncingOfUserToAtlasPage.clickOnServices();
});

When("the user on Atlas", async function () {
    await syncingOfUserToAtlasPage.clickOnAtlas();
});

When("the user clicks on search box and sends the User word and presses enter", async function () {
    await syncingOfUserToAtlasPage.searchAndPressEnter("User");
});

When("the user clicks on search box and sends the UsrAllanDeyoung word and presses enter", async function () {
    await syncingOfUserToAtlasPage.searchAndPressEnter1("UsrAllanDeyoung");
});

When("the user clicks on Name search box and sends the UsrVIVEKTESTjain word and presses enter", async function () {
    await syncingOfUserToAtlasPage.searchAndPressEnter1("UsrVIVEKTESTjain");
});

When("the User clicks on first user entry", async function () {
    await syncingOfUserToAtlasPage.clickOnFirstUserEntry();
});

When("the User clicks on first user entry1", async function () {
    await syncingOfUserToAtlasPage.clickOnFirstUserEntry1();
});

When("clicks on arrow key to full screen the JSON part", async function () {
    await syncingOfUserToAtlasPage.clickFullscreenIcon();
});

Then("the User can verify LinkId, id, RefClass, RefName, BusinessEmail, FirstName, LastName have values", async function () {
    await syncingOfUserToAtlasPage.verifyJsonFieldsNotEmpty();
});

Then("the User can verify LinkId, id, RefClass, RefName, BusinessEmail, FirstName, LastName have values1", async function () {
    await syncingOfUserToAtlasPage.verifyJsonFieldsNotEmpty1();
});

Then("the user clicks on OK button", async function () {
    await syncingOfUserToAtlasPage.clickOkButton();
});
