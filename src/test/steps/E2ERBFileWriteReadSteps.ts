import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import RBFileWriteReadPage from "../../pages/E2ERBFileWriteReadPage";


let rbFileWriteReadPage: RBFileWriteReadPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the RBFileReadWrite folder", async function () {
    rbFileWriteReadPage = new RBFileWriteReadPage(fixture.page);
    await rbFileWriteReadPage.clickOnRBfileWriteRead();

});

When("the User clicks on the Step1 Bot", async function () {
    await rbFileWriteReadPage.clickOnStep1();

});

Then("Step1 Bot Script Should Be executed Successfully with ConnectId", async function () {

    const ProxyConnectText1 = await rbFileWriteReadPage.getProxyConnectIdText(60000);
    const expectedValue12 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText1).toContain(expectedValue12);

    const jobFinishedText = await rbFileWriteReadPage.getJobFinishedText(180000);
    const expectedValue = "Job finished";
    expect(jobFinishedText).toContain(expectedValue);

    const noErrorText = await rbFileWriteReadPage.getNoErrorText(180000);
    console.log(noErrorText);
    const expectedValue1 = "no errors";
    expect(noErrorText).toContain(expectedValue1);
});

When("the User clicks on the Step2 Bot", async function () {
    await rbFileWriteReadPage.clickOnStep2();

});

Then("Step2 Bot Script Should Be executed Successfully with ConnectId", async function () {

    const ProxyConnectText13 = await rbFileWriteReadPage.getProxyConnectIdText(60000);
    const expectedValue123 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText13).toContain(expectedValue123);

    const jobFinishedText13 = await rbFileWriteReadPage.getJobFinishedText(180000);
    const expectedValue13 = "Job finished";
    expect(jobFinishedText13).toContain(expectedValue13);

    const noErrorText131 = await rbFileWriteReadPage.getNoErrorText(180000);
    console.log(noErrorText131);
    const expectedValue131 = "no errors";
    expect(noErrorText131).toContain(expectedValue131);
});

When("the User clicks on the Step3 Bot", async function () {
    await rbFileWriteReadPage.clickOnStep3();

});

Then("Step3 Bot Script Should Be executed Successfully with ConnectId and PS7", async function () {

    const ProxyConnectText21 = await rbFileWriteReadPage.getProxyConnectIdText(60000);
    const expectedValue21 = "Using Connect IDs: ConnectID_Lalit";
    expect(ProxyConnectText21).toContain(expectedValue21);

    const PS7Text22 = await rbFileWriteReadPage.getPS7Text(80000);
    const expectedValue22 = "PS7 Sub-process started";
    expect(PS7Text22).toContain(expectedValue22);

    const jobFinishedText23 = await rbFileWriteReadPage.getJobFinishedText(180000);
    const expectedValue23 = "Job finished";
    expect(jobFinishedText23).toContain(expectedValue23);

    const noErrorText24 = await rbFileWriteReadPage.getNoErrorText(180000);
    console.log(noErrorText24);
    const expectedValue24 = "no errors";
    expect(noErrorText24).toContain(expectedValue24);
});