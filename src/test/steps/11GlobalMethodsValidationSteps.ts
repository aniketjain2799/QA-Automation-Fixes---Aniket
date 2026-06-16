import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import GlobalMethodsPage from "../../pages/11GlobalMethodsValidationPage";

let globalMethodsPage: GlobalMethodsPage;

When("the user clicks on the Methods tab", async function () {
    globalMethodsPage = new GlobalMethodsPage(fixture.page);
    await globalMethodsPage.clickMethodsTabButton();
});

When("the User clicks on the Methods", async function () {
    await globalMethodsPage.clickMethods();
});

When("Expand the Methods", async function () {
    await globalMethodsPage.expandMethods();
});

When("the User click on connect method", async function () {
    await globalMethodsPage.clickConnectMethod();
});

Then("the user can verify that framework name and display name should be Connect", async function () {
    await globalMethodsPage.validateConnectNames();
});

Then("the user validates the Script Block should be have script inside it", async function () {
    await globalMethodsPage.validateScriptBlockPresence();
});

Then("the User can check that Disconnect, OnBoard, OffBoard methods sholud be visible", async function () {
    await globalMethodsPage.verifyOtherMethods();
});

Then("the User click on Plus icon to create a new method", async function () {
    await globalMethodsPage.clickPlusIcon();
});

Then(
  "the user can verify that framework name and display name should be {string}, {string}",
  async function (frameworkName: string, displayName: string) {
    await globalMethodsPage.validateFrameworkAndDisplayNameInEditor(frameworkName, displayName);
  }
);

