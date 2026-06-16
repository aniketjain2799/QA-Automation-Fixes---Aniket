import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import QueueArrayObjectVerificationPage from "../../pages/E2EFlowOfQueueArrayObjectVerificationPage";


let queueArrayObjectVerificationPage: QueueArrayObjectVerificationPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the QueueArrayObjectVerification Folder", async function () {
    queueArrayObjectVerificationPage = new QueueArrayObjectVerificationPage(fixture.page);
    await queueArrayObjectVerificationPage.clickOnQueueArrayObjectsFolder();

});

When("the User clicks on the QueueSingle Folder", async function () {
    await queueArrayObjectVerificationPage.clickOnQueueSingleFolder();

});

When("the User clicks on the QueueMultiple Folder", async function () {
    await queueArrayObjectVerificationPage.clickOnQueueMultipleFolder();

});

When("the User user hit the api Endpoint one times and validate the responce with ResponceCode and QueueName", async function () {
    const apiUrl = 'https://staging.readibots.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/e7c7025e-5404-43b8-81b1-7cf2fc792ed9';
    const headers = {
        'AuthToken': 'bbvbQNejZGhWqx1xzbFfUv42QQ91FDRT',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=66.88503181124837; x-ms-routing-name=self',
    };
    const payload = [
        { "Prop1": "value1", "Prop2": "value2" },
        { "Prop3": "value3", "Prop4": "value4" },
        { "Prop5": "value5", "Prop6": "value6" }
    ];

    console.log("Hitting API...");
    const response = await fixture.page.request.post(apiUrl, {
        headers,
        data: payload,
    });

    const statusCode = response.status();
    expect(statusCode).toBe(200);
    console.log(`Response Status Code: ${statusCode}`);

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);

    expect(responseBody.QueueName).toBe("Queue_Single");
    expect(responseBody.QueueStatus).toBe("Active");
    expect(responseBody.ItemQueued).toBe(true);
    expect(responseBody.ItemsQueued).toBe(1);
    expect(responseBody.StatusCode).toBe(200);
    expect(responseBody.Success).toBe(true);

    console.log("All validations passed successfully.");
});

Then("Service Bot script should be executed Successfully and it can validate READIQItemSingle", async function () {

    const jobFinishedText = await queueArrayObjectVerificationPage.getJobFinishedText(1200000);
    expect(jobFinishedText).toContain("Job finished");

    const noErrorText = await queueArrayObjectVerificationPage.getNoErrorText(1200000);
    console.log(noErrorText);
    expect(noErrorText).toContain("no errors");

    const readiQItemText = await queueArrayObjectVerificationPage.getDebugText(1200000);
    console.log("DEBUG TEXT:", readiQItemText);

    const expectedREADIQItem = `DEBUG: READIQItem[
{
"Prop1": "value1",
"Prop2": "value2"
},
{
"Prop3": "value3",
"Prop4": "value4"
},
{
"Prop5": "value5",
"Prop6": "value6"
}
]`;

    expect(readiQItemText).toContain(expectedREADIQItem);
});


When("the User user hit the api Endpoint one times and validate the responce with ResponceCode and QueueName1", async function () {
    const apiUrl = 'https://staging.readibots.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/b15b92e5-00ad-487b-b5d6-952ebbe7322d';
    const headers = {
        'AuthToken': 'chqNj3Il0EsjNitGDLpbjW2ARTMBJbvB',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=66.88503181124837; x-ms-routing-name=self',
    };
    const payload = [
        { "Prop1": "value1", "Prop2": "value2" },
        { "Prop3": "value3", "Prop4": "value4" },
        { "Prop5": "value5", "Prop6": "value6" }
    ];

    console.log("Hitting API...");
    const response = await fixture.page.request.post(apiUrl, {
        headers,
        data: payload,
    });

    const statusCode = response.status();
    expect(statusCode).toBe(200);
    console.log(`Response Status Code: ${statusCode}`);

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);

    expect(responseBody.QueueName).toBe("Queue_Multiple");
    expect(responseBody.QueueStatus).toBe("Active");
    expect(responseBody.ItemQueued).toBe(true);
    expect(responseBody.ItemsQueued).toBe(3);
    expect(responseBody.StatusCode).toBe(200);
    expect(responseBody.Success).toBe(true);

    console.log("All validations passed successfully.");
});

Then("Service Bot script should be executed Successfully and it can validate READIQItemMultiple", async function () {

    const jobFinishedText = await queueArrayObjectVerificationPage.getJobFinishedText(1200000);
    expect(jobFinishedText).toContain("Job finished");

    const noErrorText = await queueArrayObjectVerificationPage.getNoErrorText(1200000);
    console.log(noErrorText);
    expect(noErrorText).toContain("no errors");

    const debugText1 = await queueArrayObjectVerificationPage.getDebugText1(1200000);
    console.log("DEBUG 1 TEXT:", debugText1);
    expect(debugText1).toContain(`DEBUG: READIQItem{
"Prop1": "value1",
"Prop2": "value2"
}`);

    const debugText2 = await queueArrayObjectVerificationPage.getDebugText2(1200000);
    console.log("DEBUG 2 TEXT:", debugText2);
    expect(debugText2).toContain(`DEBUG: READIQItem{
"Prop3": "value3",
"Prop4": "value4"
}`);

    const debugText3 = await queueArrayObjectVerificationPage.getDebugText3(1200000);
    console.log("DEBUG 3 TEXT:", debugText3);
    expect(debugText3).toContain(`DEBUG: READIQItem{
"Prop5": "value5",
"Prop6": "value6"
}`);

    console.log("All READIQItem debug validations passed successfully.");
});

When("the User hits the CloudBridge API endpoint and validates the response", async function () {
    const apiUrl = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/131d2b0c-4fdd-4b26-ac9f-8b6b753e6dd9';
    const headers = {
        'AuthToken': '90WNqe0Kf13nMYdiLK93zClfmxGApXg5',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=66.88503181124837; x-ms-routing-name=self',
    };
    const payload = [
        { "Prop1": "value1", "Prop2": "value2" },
        { "Prop3": "value3", "Prop4": "value4" },
        { "Prop5": "value5", "Prop6": "value6" }
    ];

    console.log("Hitting API...");
    const response = await fixture.page.request.post(apiUrl, {
        headers,
        data: payload,
    });

    const statusCode = response.status();
    expect(statusCode).toBe(200);
    console.log(`Response Status Code: ${statusCode}`);

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);

    expect(responseBody.QueueName).toBe("Queue_Single");
    expect(responseBody.QueueStatus).toBe("Active");
    expect(responseBody.ItemQueued).toBe(true);
    expect(responseBody.ItemsQueued).toBe(1);
    expect(responseBody.StatusCode).toBe(200);
    expect(responseBody.Success).toBe(true);

    console.log("All validations passed successfully.");
});

When("the User hits the CloudBridge API endpoint and validates the multiple queue response", async function () {
    const apiUrl = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/78ad1f17-03df-4bec-a39e-09ab277e3300';
    const headers = {
        'AuthToken': '2Hzb2JNJos7GvAKxvYByvnLtkpYiAo4K',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=66.88503181124837; x-ms-routing-name=self',
    };
    const payload = [
        { "Prop1": "value1", "Prop2": "value2" },
        { "Prop3": "value3", "Prop4": "value4" },
        { "Prop5": "value5", "Prop6": "value6" }
    ];

    console.log("Hitting API...");
    const response = await fixture.page.request.post(apiUrl, {
        headers,
        data: payload,
    });

    const statusCode = response.status();
    expect(statusCode).toBe(200);
    console.log(`Response Status Code: ${statusCode}`);

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);

    expect(responseBody.QueueName).toBe("Queue_Multiple");
    expect(responseBody.QueueStatus).toBe("Active");
    expect(responseBody.ItemQueued).toBe(true);
    expect(responseBody.ItemsQueued).toBe(3);
    expect(responseBody.StatusCode).toBe(200);
    expect(responseBody.Success).toBe(true);

    console.log("All validations passed successfully.");
});
