import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import * as path from 'path';


export default class VariableConnectIdPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        connectIDVariable: "//a[normalize-space()='ConnectID-Variable']",
        bot1: "(//a[@href='#'][normalize-space()='Bot1'])[1]",
        bot2: "(//a[@href='#'][normalize-space()='Bot2'])[1]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_New1\')]",
        microsoftCloud: "//td[@role='gridcell'][normalize-space()='MicrosoftCloud']",
        jsonEditorText: "//div[@class='json-editor-rw-txt-1']",
        connectIdNew1First: "(//td[@title='ConnectID_New1'][normalize-space()='ConnectID_New1'])[1]",
        uniqueId: "//td[@title='d1df88b0-8fc6-4824-93cc-da86171fed6a']",
        uniqueIdP: "//td[@title='0e56fefc-94b8-43e3-889e-6c71a417d550']",
        connectIdNew1Second: "(//td[@title='ConnectID_New1'][normalize-space()='ConnectID_New1'])[2]",
        microsoftCloud1: "//td[@title='MicrosoftCloud']",
        userName: "//td[@title='lalit']",
        certificateValue: "//td[@title='certificate_value']",
        rawData1: "//div[normalize-space()='Raw Data-1']",
        doubleClickOnConnectId1: "//tr[@class='dx-row dx-data-row dx-column-lines']//td[@role='gridcell'][normalize-space()='ConnectID_New1']",
        View1: "(//div[contains(text(),'View')])[3]",
        cancleButton: "//button[@id='btnJsonViewerCancel']",
        View2: "(//div[contains(text(),'View')])[4]",
        View3: "(//div[contains(text(),'View')])[5]",
        jsonEditorText1: "(//div[@class='json-editor-rw-txt-1'])[1]",
        jsonEditorText2: "(//div[@class='json-editor-rw-txt-1'])[2]",
        jsonEditorText3: "(//div[@class='json-editor-rw-txt-1'])[3]",
        closeButton: "//div[@id='rowDetailsModal']//button[@type='button'][normalize-space()='Close']",

    };


    async clickOnConnectIDVariable() {
        await this.base.waitAndClick(this.Elements.connectIDVariable);
    }

    async clickOnBot1() {
        await this.base.waitAndClick(this.Elements.bot1);
    }

    async clickOnBot2() {
        await this.base.waitAndClick(this.Elements.bot2);
    }

    async clickOnRawData1() {
        await this.base.waitAndClick(this.Elements.rawData1);
    }

    async getJobFinishedText(timeout = 1080000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getNoErrorText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.noError);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async getProxyConnectIdText(timeout = 60000) {
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator.innerText();
    }

    async doubleClickOnMicrosoftCloud() {
        const microsoftCloudLocator = this.page.locator(this.Elements.microsoftCloud);
        await microsoftCloudLocator.dblclick();
    }

    async validateJsonEditorText() {
        const jsonEditorText = await this.page.textContent(this.Elements.jsonEditorText);
        const expectedText = '{"Password":{"Length":6},"UserName":"lalit"}';

        if (jsonEditorText?.trim() === expectedText) {
            console.log('Validation Passed: Text matches the expected value.');
        } else {
            console.error('Validation Failed: Text does not match the expected value.');
            console.error(`Actual: ${jsonEditorText}`);
            throw new Error(`Validation Failed: Expected "${expectedText}" but got "${jsonEditorText?.trim()}"`);
        }
    }


    async getConnectIdNew1First() {
        await this.page.waitForSelector(this.Elements.connectIdNew1First, { timeout: 45000 });
        return this.page.locator(this.Elements.connectIdNew1First);
    }

    async validateConnectIdNew1FirstText() {
        const ConnectIdNew1FirstText = await this.getConnectIdNew1First();
        await expect(ConnectIdNew1FirstText).toContainText('ConnectID_New1');
    }

    async getUniqueId() {
        await this.page.waitForSelector(this.Elements.uniqueId, { timeout: 45000 });
        return this.page.locator(this.Elements.uniqueId);
    }

    async getUniqueIdP() {
        await this.page.waitForSelector(this.Elements.uniqueIdP, { timeout: 45000 });
        return this.page.locator(this.Elements.uniqueIdP);
    }

    async validatUniqueIdText() {
        const UniqueId = await this.getUniqueId();
        await expect(UniqueId).toContainText('d1df88b0-8fc6-4824-93cc-da86171fed6a');
    }

    async validatUniqueIdTextP() {
        const UniqueId = await this.getUniqueIdP();
        await expect(UniqueId).toContainText('0e56fefc-94b8-43e3-889e-6c71a417d550');
    }

    async getConnectIdNew1Second() {
        await this.page.waitForSelector(this.Elements.connectIdNew1Second, { timeout: 45000 });
        return this.page.locator(this.Elements.connectIdNew1Second);
    }

    async validateConnectIdNew1SecondText() {
        const ConnectIdNew1SecondText = await this.getConnectIdNew1Second();
        await expect(ConnectIdNew1SecondText).toContainText('ConnectID_New1');
    }

    async getMicrosoftCloud() {
        await this.page.waitForSelector(this.Elements.microsoftCloud, { timeout: 45000 });
        return this.page.locator(this.Elements.microsoftCloud);
    }

    async validateMicrosoftCloudText() {
        const MicrosoftCloudText = await this.getMicrosoftCloud();
        await expect(MicrosoftCloudText).toContainText('MicrosoftCloud');
    }

    async getUserName() {
        await this.page.waitForSelector(this.Elements.userName, { timeout: 45000 });
        return this.page.locator(this.Elements.userName);
    }

    async validateUserNameText() {
        const UserNameText = await this.getUserName();
        await expect(UserNameText).toContainText('lalit');
    }

    async getCertificateValue() {
        await this.page.waitForSelector(this.Elements.certificateValue, { timeout: 45000 });
        return this.page.locator(this.Elements.certificateValue);
    }

    async validateCertificateValueText() {
        const CertificateValueText = await this.getCertificateValue();
        await expect(CertificateValueText).toContainText('certificate_value');
    }

    async doubleClickOnConnectId1() {
        const microsoftCloudLocator1 = this.page.locator(this.Elements.doubleClickOnConnectId1);
        await microsoftCloudLocator1.dblclick();
    }

    async clickOnView1() {
        await this.base.waitAndClick(this.Elements.View1);
    }

    async clickOnView2() {
        await this.base.waitAndClick(this.Elements.View2);
    }

    async clickOnView3() {
        await this.base.waitAndClick(this.Elements.View3);
    }

    async clickOnCancleButton() {
        await this.base.waitAndClick(this.Elements.cancleButton);
    }

    async clickOnCloseButton() {
        await this.base.waitAndClick(this.Elements.closeButton);
    }

    async validateJsonStructure1() {
        const jsonEditorText1 = await this.page.textContent(this.Elements.jsonEditorText1);
        const expectedJson1 = {
            CbId: "d1df88b0-8fc6-4824-93cc-da86171fed6a",
            Name: "ConnectID_New1",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 6
                },
                UserName: "lalit"
            },
            certificate: "certificate_value"
        };

        try {
            const actualJson = JSON.parse(jsonEditorText1?.trim() || "");
            expect(actualJson).toEqual(expectedJson1);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson1, null, 2)}`);
            console.error(`Actual: ${jsonEditorText1}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }

    async validateJsonStructure2() {
        const jsonEditorText2 = await this.page.textContent(this.Elements.jsonEditorText2);
        const expectedJson2 = {
            CbId: "b8d82ed7-fff2-4e82-9824-4d9a47628ca4",
            Name: "ConnectID_New2",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 6
                },
                UserName: "lalit"
            }
        };

        try {
            const actualJson = JSON.parse(jsonEditorText2?.trim() || "");
            expect(actualJson).toEqual(expectedJson2);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson2, null, 2)}`);
            console.error(`Actual: ${jsonEditorText2}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }


    async validateJsonStructure3() {
        const jsonEditorText3 = await this.page.textContent(this.Elements.jsonEditorText3);
        const expectedJson3 = {
            CbId: "9728d16a-f8a3-4141-bb60-a18b98e53d84",
            Name: "ConnectID_New3",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 6
                },
                UserName: "lalit"
            }
        };

        try {
            const actualJson = JSON.parse(jsonEditorText3?.trim() || "");
            expect(actualJson).toEqual(expectedJson3);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson3, null, 2)}`);
            console.error(`Actual: ${jsonEditorText3}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }

    async validateJsonStructure4() {
        const jsonEditorText4 = await this.page.textContent(this.Elements.jsonEditorText1);
        const expectedJson4 = {
            CbId: "0e56fefc-94b8-43e3-889e-6c71a417d550",
            Name: "ConnectID_New1",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 6
                },
                UserName: "lalit"
            },
            certificate: "certificate_value"
        };

        try {
            const actualJson = JSON.parse(jsonEditorText4?.trim() || "");
            expect(actualJson).toEqual(expectedJson4);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson4, null, 2)}`);
            console.error(`Actual: ${jsonEditorText4}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }

    async validateJsonStructure5() {
        const jsonEditorText5 = await this.page.textContent(this.Elements.jsonEditorText3);
        const expectedJson5 = {
            CbId: "71e3c48b-95fd-4456-9385-46d3af30f010",
            Name: "ConnectID_New3",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 4
                },
                UserName: "lalit"
            },
        };

        try {
            const actualJson = JSON.parse(jsonEditorText5?.trim() || "");
            expect(actualJson).toEqual(expectedJson5);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson5, null, 2)}`);
            console.error(`Actual: ${jsonEditorText5}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }

    async validateJsonStructure6() {
        const jsonEditorText6 = await this.page.textContent(this.Elements.jsonEditorText2);
        const expectedJson6 = {
            CbId: "f440fa49-853b-4fc0-bd12-a0348ae2f16f",
            Name: "ConnectID_New2",
            Type: "MicrosoftCloud",
            UserName: "lalit",
            Credentials: {
                Password: {
                    Length: 4
                },
                UserName: "lalit"
            }
        };

        try {
            const actualJson = JSON.parse(jsonEditorText6?.trim() || "");
            expect(actualJson).toEqual(expectedJson6);
            console.log("Validation Passed: JSON matches the expected structure and values.");
        } catch (error) {
            console.error("Validation Failed: JSON does not match the expected structure and values.");
            console.error(`Expected: ${JSON.stringify(expectedJson6, null, 2)}`);
            console.error(`Actual: ${jsonEditorText6}`);
            throw new Error(`Validation Failed: JSON mismatch.`);
        }
    }
}