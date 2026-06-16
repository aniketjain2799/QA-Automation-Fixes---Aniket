import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CUPage from "../../pages/2ConnectorUIAddConnectorFromLibraryWithAllThreeMethodsPage";


let cUPage: CUPage;

setDefaultTimeout(1200 * 1000 * 2);

Given("User Already Logged In to Connector UI.", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.navigateToHomePageAndLogin();
});

Given("User Already Logged In to Connector UI.6", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.navigateToHomePageAndLogin6();
});

Given("User Already Logged In to Connector UI.4", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.navigateToHomePageAndLogin4();
});

Given("User Already Logged In to Connector UI.5", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.navigateToHomePageAndLogin5();
});

Given("User Already Logged In to Connector UI.1", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.navigateToHomePageAndLogin1();
});

When("the User click on Plus Icon", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.clickOnAdd();
});

When("click on Add from Library", async function () {
    await cUPage.clickOnaAdFromLibrary();
});

When("click on Install from library", async function () {
    await cUPage.clickOnInstallFromLibrary();
});


When("select the value from creator dropdown", async function () {
    await cUPage.clickOnCreator();
    await cUPage.clickOnDropdownOption();
});


When("select the value from Product vendor dropdown", async function () {
    await cUPage.clickOnProductVeendors();
    await cUPage.clickOnDropdownOption();
});


When("select the value from Product dropdown", async function () {
    await cUPage.clickOnProduct();
    await cUPage.clickOnDropDownodbc();
});


When("the User click on Retrieve and configure", async function () {
    await cUPage.clickOnRetrieveAndConfigure();
});


Then("the new connector should be created", async function () {
    await cUPage.clickOnOdbc();
});


When("the User click on delete Icon", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.clickOnDelete();
});


When("click on continue", async function () {
    cUPage = new CUPage(fixture.page);
    await cUPage.clickOnContinue();
});


Then("connector should be Deleted", async function () {
    await cUPage.clickOnConnectors();
});

When("click on Clone Existing", async function () {
    await cUPage.clickOnCloneExisting();
});


When("select the value from connector object dropdown", async function () {
    await cUPage.clickOnConnectorObject();
});

When("select the value", async function () {
    await cUPage.clickOnTestOption();
});

When("the User click on clone and configure", async function () {
    await cUPage.clickOnCloneAndConfigure();
});


Then("the new connector should be created and user can verify this", async function () {
    await cUPage.clickOnTestConnectorVerify();
    await cUPage.clickOnPropertiesFieldVerify();
});

When("click on Form file", async function () {
    await cUPage.clickOnFromFile();
});

When("Upload the exising connector file", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await cUPage.uploadFile('fileConnectorTemplate_v0.91.json');
});

When("the User click on Import and configure", async function () {
    await cUPage.clickOnImportAndConfigure();
});

Then("the new connector should be created and user can Verify this", async function () {
    await cUPage.clickOnFileMaster();
    await cUPage.clickOnPropertiesFieldVerify();
});

When("the User click on Cross Icon", async function () {
    await cUPage.clickOnCloseIcon();
});


When("the User select the checkbox", async function () {
    await cUPage.clickOnCheckBox();
});