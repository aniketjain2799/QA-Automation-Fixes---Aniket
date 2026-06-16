import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import AddDataToAQueueFromAnAPIEndpointPage from "../../pages/E2EFlowOfAddDataToAQueueFromAnAPIEndpointPage";



let addDataToAQueueFromAnAPIEndpointPage: AddDataToAQueueFromAnAPIEndpointPage;

setDefaultTimeout(1200 * 1000 * 2);

When("the User clicks on the RestApis Folder", async function () {
    addDataToAQueueFromAnAPIEndpointPage = new AddDataToAQueueFromAnAPIEndpointPage(fixture.page);
    await addDataToAQueueFromAnAPIEndpointPage.clickOnRestApis();

});

When("the User clicks On The Queue", async function () {
    await addDataToAQueueFromAnAPIEndpointPage.clickOnQueue();

});

When("the User clicks on the Service bot", async function () {
    addDataToAQueueFromAnAPIEndpointPage = new AddDataToAQueueFromAnAPIEndpointPage(fixture.page);
    await addDataToAQueueFromAnAPIEndpointPage.clickOnServiceBot();

});

When("the User Clicks On the Service bot", async function () {
    await addDataToAQueueFromAnAPIEndpointPage.clickOnServiceBot();
    await new Promise(resolve => setTimeout(resolve, 50000));

});

When("the User user hit the api Endpoint two times and validate the responce with ResponceCode and QueueStatus", async function () {
    const apiUrl = 'https://staging.readibots.com/storageapi/api/v1/execute/2cef16a0-ed17-401c-90aa-f9014a4e5d72/a9d3d440-ba5e-4ada-80e6-22d547fffbe2';
    const headers = {
        'AuthToken': 'Zia3mdzOd2jlPru0pg4PcEE1Zdy75P0v',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=59.69772686895129; x-ms-routing-name=self',
    };
    const payload = {
        Field1: "Value1",
        Field2: "Value2",
    };

    for (let i = 0; i < 2; i++) {
        console.log(`Hitting API - Attempt ${i + 1}`);
        const response = await fixture.page.request.post(apiUrl, {
            headers,
            data: payload,
        });

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`Response Status Code (Attempt ${i + 1}): ${statusCode}`);

        const responseBody = await response.json();
        console.log(`Response Body (Attempt ${i + 1}):`, responseBody);

        const queueStatus = responseBody.QueueStatus;
        expect(queueStatus).toBe("Active");
        console.log(`QueueStatus (Attempt ${i + 1}): ${queueStatus}`);
    }
});

When("Click On Properties Section", async function () {
    await addDataToAQueueFromAnAPIEndpointPage.clickOnProperties();
    await addDataToAQueueFromAnAPIEndpointPage.clickOnProperties();
});


Then("Service Bot script should be executed Successfully", async function () {
    addDataToAQueueFromAnAPIEndpointPage = new AddDataToAQueueFromAnAPIEndpointPage(fixture.page);
    const jobFinishedTextE22 = await addDataToAQueueFromAnAPIEndpointPage.getJobFinishedText(1200000);
    const expectedValue22 = "Job finished";
    expect(jobFinishedTextE22).toContain(expectedValue22);

    const noErrorTextE212 = await addDataToAQueueFromAnAPIEndpointPage.getNoErrorText(1200000);
    console.log(noErrorTextE212);
    const expectedValue312 = "no errors";
    expect(noErrorTextE212).toContain(expectedValue312);
});

Then("the User validates that the first raw value the second raw value and the total number of records are correct", async function () {
    await addDataToAQueueFromAnAPIEndpointPage.validatFirsRawtValue1Text();
    await addDataToAQueueFromAnAPIEndpointPage.validatSecondRawValue2Text();
    await addDataToAQueueFromAnAPIEndpointPage.validatTotalRecordValueText();
});

When("the User hit the new API Endpoint two times and validate the response with ResponseCode and QueueStatus", async function () {
    const apiUrl = 'https://staging.readibots.com/storageapi/api/v1/execute/6cdda0b9-817f-481a-9a64-516385cd61a9/606f642e-4a39-4f2b-9c2b-7d727edd7796';
    const headers = {
        'AuthToken': '20vVRWvnqSGzqdf76uqlgyKnaGZrZx4i',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=27.17591900678473; x-ms-routing-name=self',
    };
    const payload = {
        Field1: "Value1",
        Field2: "Value2",
    };

    for (let i = 0; i < 2; i++) {
        console.log(`Hitting API - Attempt ${i + 1}`);
        const response = await fixture.page.request.post(apiUrl, {
            headers,
            data: payload,
        });

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`Response Status Code (Attempt ${i + 1}): ${statusCode}`);

        const responseBody = await response.json();
        console.log(`Response Body (Attempt ${i + 1}):`, responseBody);

        const queueStatus = responseBody.QueueStatus;
        expect(queueStatus).toBe("Active");
        console.log(`QueueStatus (Attempt ${i + 1}): ${queueStatus}`);
    }
});


When("the User hit the New API Endpoint two times and validate the response with ResponseCode and QueueStatus", async function () {
    const apiUrl = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/a5378c58-cb2d-47cc-90c6-cb9afe53854b/118acaeb-28cb-4c8d-ba59-5e55aa30e1e9';
    const headers = {
        'AuthToken': 'opAjTLmYQM0IDTwEnehQ6lbdkxXp8Vck',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=59.69772686895129; x-ms-routing-name=self',
    };
    const payload = {
        Field1: "Value1",
        Field2: "Value2",
    };


    for (let i = 0; i < 2; i++) {
        console.log(`Hitting API - Attempt ${i + 1}`);
        const response = await fixture.page.request.post(apiUrl, {
            headers,
            data: payload,
        });

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`Response Status Code (Attempt ${i + 1}): ${statusCode}`);

        const responseBody = await response.json();
        console.log(`Response Body (Attempt ${i + 1}):`, responseBody);

        const queueStatus = responseBody.QueueStatus;
        expect(queueStatus).toBe("Active");
        console.log(`QueueStatus (Attempt ${i + 1}): ${queueStatus}`);
    }

});

When("the User hit the api Endpoint two times and validate the responce with ResponceCode and QueueStatus", async function () {
    const apiUrl = 'https://cloudbridge.ucclearly.com/storageapi/api/v1/execute/82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9/8a91d675-f830-46fd-b521-0168be1c6eb3';
    const headers = {
        'AuthToken': 'K179vZGEQ6fOh2IIQ2mWphAc13BHUM23',
        'Content-Type': 'application/json',
        'Cookie': 'TiPMix=59.69772686895129; x-ms-routing-name=self',
    };
    const payload = {
        Field1: "Value1",
        Field2: "Value2",
    };


    for (let i = 0; i < 2; i++) {
        console.log(`Hitting API - Attempt ${i + 1}`);
        const response = await fixture.page.request.post(apiUrl, {
            headers,
            data: payload,
        });

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`Response Status Code (Attempt ${i + 1}): ${statusCode}`);

        const responseBody = await response.json();
        console.log(`Response Body (Attempt ${i + 1}):`, responseBody);

        const queueStatus = responseBody.QueueStatus;
        expect(queueStatus).toBe("Active");
        console.log(`QueueStatus (Attempt ${i + 1}): ${queueStatus}`);
    }

});