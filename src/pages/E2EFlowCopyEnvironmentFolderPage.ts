import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class CopyEnvPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        globalCopyAutomation: "//a[normalize-space()='Global_CopyAutomation']",
        globalCopyAutomationrRoot: "//a[@id='8e5ac7bc-9cf9-4f40-9192-7d6a3158564a_00000000-0000-0000-0000-000000000000_anchor']",
        globalCopyAutomationrRoot4: "//a[@id='4b312f64-6217-45b7-ae56-5c8963092134_00000000-0000-0000-0000-000000000000_anchor']",
        loadTestBotQueueTableParentCopy: "//a[@id='8e5ac7bc-9cf9-4f40-9192-7d6a3158564a_fe4dad35-3f06-4290-ac01-08e11312bf13_anchor']",
        loadTestBotQueueTableParentCopy4: "//a[@id='4b312f64-6217-45b7-ae56-5c8963092134_2965bc3f-6094-4618-996d-218a3d14afe7_anchor']",
        copy: "a[href='#'][rel='8']",
        copyBtton: "//button[@id='btnCopyTreeJson']",
        paste: "a[href='#'][rel='8']",
        delete: "a[href='#'][rel='10']",
        ok: "button[id='alertify-ok']",
        globalPasteAutomation: "//a[normalize-space()='Global_Paste_Environment']",
        loadTestBotQueueTableParentPaste: "(//a[normalize-space()='LoadTest_Bot_Queue_Table_Parent'])[2]",
        globalPasteAutomationRoot: "//a[@id='84ec244c-df2a-40c5-a1fd-6f0141a00e28_00000000-0000-0000-0000-000000000000_anchor']",
        globalPasteAutomationRoot4: "//a[@id='7ce8e1fc-8b98-4b2c-b919-a39a6d65af3b_00000000-0000-0000-0000-000000000000_anchor']",
        copyBotPaste1: "(//a[contains(@href,'#')][normalize-space()='Copy_Bot'])[2]",
        copyBotPaste1ScriptVerificationTop: "//span[normalize-space()='$phoneNumber']",
        copyBotPaste1ScriptVerificationBottom: "//span[normalize-space()='$index']",
        copyQueuePaste1: "(//a[contains(@href,'#')][normalize-space()='Copy_Queue'])[2]",
        copyServiceBotPaste1: "(//a[contains(@href,'#')][normalize-space()='Service Bot'])[1]",
        copyServiceBotPaste1ScriptVerificationTop: "(//span[contains(text(),'$count')])[1]",
        copyServiceBotPaste1ScriptVerificationBottom: "(//span[contains(text(),'$qdata')])[1]",
        copyTablePaste1: "(//a[contains(@href,'#')][normalize-space()='Copy_table'])[2]",
        copyTablePaste1ScriptVerificationTop: "(//span[contains(text(),'$phoneNumber')])[1]",
        copyTablePaste1ScriptVerificationBottom: "(//span[contains(text(),'$description')])[1]",
        loadTestBotQueueTableChildPasteFolder: "(//a[contains(@href,'#')][normalize-space()='LoadTest_Bot_Queue_Table_Child'])[2]",
        copyChildBotPaste1: "//a[normalize-space()='Copy_Child_Bot']",
        copyChildQueuePaste1: "//a[normalize-space()='Copy_Child_Queue']",
        copyChildTablePaste1: "//a[normalize-space()='Copy_Child_table']",
        properties: "//li[@id='scriptTab']//div//div[contains(text(),'Properties')]",
        myWorkspace: "//a[normalize-space()='My Workspace']",
        myWorkspaceRoot: "(//a[@id='00000000-0000-0000-0000-000000000000_anchor'])[2]",
        myWorkspaceRoot4: "(//a[@id='00000000-0000-0000-0000-000000000000_anchor'])[2]",
        teamWorkspaces: "//a[normalize-space()='Team Workspaces']",
        developer: "//a[@id='5bb78d79-3c1f-4ac1-9644-85b8469e3ae7_anchor']",
        developer4: "(//a[normalize-space()='Lalit Mangal(Developer)'])[1]",
        teamWorkspacesRoot: "//a[@id='5bb78d79-3c1f-4ac1-9644-85b8469e3ae7_00000000-0000-0000-0000-000000000000_anchor']",
        teamWorkspacesRoot4: "//a[@id='98c8a5cd-ef80-4e6c-ae0c-04a4773e5606_00000000-0000-0000-0000-000000000000_anchor']",
        teamWorkspacesPaste: "a[href='#'][rel='6']",
        parentFolderTW: "//a[normalize-space()='LoadTest_Bot_Queue_Table_Parent']",
        copyBotPasteTW: "//a[normalize-space()='Copy_Bot']",
        copyQueueTW: "//a[normalize-space()='Copy_Queue']",
        serviceBotTW: "//a[normalize-space()='Service Bot']",
        copyTableTW: "//a[normalize-space()='Copy_table']",
        childFolderTW: "//a[normalize-space()='LoadTest_Bot_Queue_Table_Child']",
        copyChildBotTW: "//a[normalize-space()='Copy_Child_Bot']",
        copyChildQueueTW: "//a[normalize-space()='Copy_Child_Queue']",
        copyChildtableTW: "//a[normalize-space()='Copy_Child_table']",
        deleteTW: "a[href='#'][rel='9']",
        clipboardCopyText: "//input[@id='clipboardCopyText']",

    };


    async clickOnglobalCopyAutomation() {
        await this.base.waitAndClick(this.Elements.globalCopyAutomation);
    }

    async clickOnglobalCopyAutomationrRoot() {
        await this.base.waitAndClick(this.Elements.globalCopyAutomationrRoot);
    }

    async clickOnglobalCopyAutomationrRoot4() {
        await this.base.waitAndClick(this.Elements.globalCopyAutomationrRoot4);
    }

    async rightClickOnLoadTestBotQueueTableParentCopy() {
        const rightElement = await this.page.waitForSelector(this.Elements.loadTestBotQueueTableParentCopy, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnLoadTestBotQueueTableParentCopy4() {
        const rightElement = await this.page.waitForSelector(this.Elements.loadTestBotQueueTableParentCopy4, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnCopy() {
        await this.base.waitAndClick(this.Elements.copy);
    }

    async clickOnCopyBtton() {
        await this.page.waitForTimeout(3000);
        await this.base.waitAndClick(this.Elements.copyBtton);
        await this.page.waitForTimeout(1000);
        const copiedCommand = await this.page.locator(this.Elements.clipboardCopyText).getAttribute('value');
    
        if (copiedCommand) {
            await this.page.evaluate((text) => navigator.clipboard.writeText(text), copiedCommand);
        }
    
        return copiedCommand;
    }

    async clickOnGlobalPasteAutomation() {
        await this.base.waitAndClick(this.Elements.globalPasteAutomation);
    }

    async clickOnPaste() {
        await this.base.waitAndClick(this.Elements.paste);
        await this.page.waitForTimeout(10000);
    }

    async rightClickOnGlobalPasteAutomationRoot() {
        const rightElement = await this.page.waitForSelector(this.Elements.globalPasteAutomationRoot, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnGlobalPasteAutomationRoot4() {
        const rightElement = await this.page.waitForSelector(this.Elements.globalPasteAutomationRoot4, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnGlobalPasteAutomationRoot() {
        await this.base.waitAndClick(this.Elements.globalPasteAutomationRoot);
        await this.page.waitForTimeout(10000);
    }

    async clickOnGlobalPasteAutomationRoot4() {
        await this.base.waitAndClick(this.Elements.globalPasteAutomationRoot4);
        await this.page.waitForTimeout(10000);
    }

    async handleClipboardPermission() {
        const page = this.page;
        page.on('dialog', async (dialog) => {
            if (dialog.type() === 'prompt') {
                await dialog.accept('allow');
            }
        });
    }

    async clickOnCopyBotPaste1() {
        await this.base.waitAndClick(this.Elements.copyBotPaste1);
    }

    async clickOnPropertiesSection() {
        await this.base.waitAndClick(this.Elements.properties);
    }

    async getPhoneNumberAssertionText() {
        await this.page.waitForSelector(this.Elements.copyBotPaste1ScriptVerificationTop, { timeout: 15000 });
        return this.page.locator(this.Elements.copyBotPaste1ScriptVerificationTop);
    }

    async getIndexVerificationText() {
        await this.page.waitForSelector(this.Elements.copyBotPaste1ScriptVerificationBottom, { timeout: 15000 });
        return this.page.locator(this.Elements.copyBotPaste1ScriptVerificationBottom);
    }

    async validateBotScriptPhoneNumberAndIndex() {
        const phoneNumberElement = await this.getPhoneNumberAssertionText();
        const indexElement = await this.getIndexVerificationText();
        await expect(indexElement).toContainText('$index');
        await expect(phoneNumberElement).toContainText('$phoneNumber');
    }


    async clickOnCopyQueuePaste1() {
        await this.base.waitAndClick(this.Elements.copyQueuePaste1);
    }

    async clickOnCopyServiceBotPaste1() {
        await this.base.waitAndClick(this.Elements.copyServiceBotPaste1);
    }

    async getCountText() {
        await this.page.waitForSelector(this.Elements.copyServiceBotPaste1ScriptVerificationTop, { timeout: 15000 });
        return this.page.locator(this.Elements.copyServiceBotPaste1ScriptVerificationTop);
    }

    async getQdataText() {
        await this.page.waitForSelector(this.Elements.copyServiceBotPaste1ScriptVerificationBottom, { timeout: 15000 });
        return this.page.locator(this.Elements.copyServiceBotPaste1ScriptVerificationBottom);
    }

    async validateServiceScriptCountAndQdata() {
        const countElement = await this.getCountText();
        const QdataElement = await this.getQdataText();
        await expect(countElement).toContainText('$count');
        await expect(QdataElement).toContainText('$qdata');
    }

    async clickOnCopyTablePaste1() {
        await this.base.waitAndClick(this.Elements.copyTablePaste1);
    }

    async getTablePhoneText() {
        await this.page.waitForSelector(this.Elements.copyTablePaste1ScriptVerificationTop, { timeout: 15000 });
        return this.page.locator(this.Elements.copyTablePaste1ScriptVerificationTop);
    }

    async getTableDescriptionText() {
        await this.page.waitForSelector(this.Elements.copyTablePaste1ScriptVerificationBottom, { timeout: 15000 });
        return this.page.locator(this.Elements.copyTablePaste1ScriptVerificationBottom);
    }

    async ValidateTableScriptPhoneAndDescription() {
        const tablePhoneElement = await this.getTablePhoneText();
        const tableDescriptionElement = await this.getTableDescriptionText();
        await expect(tablePhoneElement).toContainText('$phoneNumber');
        await expect(tableDescriptionElement).toContainText('$description');
    }


    async clickOnLoadTestBotQueueTableChildPasteFolder() {
        await this.base.waitAndClick(this.Elements.loadTestBotQueueTableChildPasteFolder);
    }

    async clickOnCopyChildBotPaste1() {
        await this.base.waitAndClick(this.Elements.copyChildBotPaste1);
    }

    async clickOnCopyChildQueuePaste1() {
        await this.base.waitAndClick(this.Elements.copyChildQueuePaste1);
    }

    async clickOnCopyChildTablePaste1() {
        await this.base.waitAndClick(this.Elements.copyChildTablePaste1);
    }

    async rightClickOnLoadTestBotQueueTableParentPaste() {
        const rightElement = await this.page.waitForSelector(this.Elements.loadTestBotQueueTableParentPaste, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnDelete() {
        await this.base.waitAndClick(this.Elements.delete);
    }

    async clickOnOk() {
        await this.base.waitAndClick(this.Elements.ok);
    }

    async clickOnMyWorkspace() {
        await this.base.waitAndClick(this.Elements.myWorkspace);
    }

    async rightClickOnMyWorkspaceRoot() {
        const rightElement = await this.page.waitForSelector(this.Elements.myWorkspaceRoot, { timeout: 15000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnMyWorkspaceRoot4() {
        const rightElement = await this.page.waitForSelector(this.Elements.myWorkspaceRoot4, { timeout: 15000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnPaste2() {
        await this.base.waitAndClick(this.Elements.paste);
        await this.page.waitForTimeout(5000);
    }


    async clickOnTeamWorkspaces() {
        await this.base.waitAndClick(this.Elements.teamWorkspaces);
    }

    async clickOnDeveloper() {
        await this.base.waitAndClick(this.Elements.developer);
    }

    async clickOnDeveloper4() {
        await this.base.waitAndClick(this.Elements.developer4);
    }

    async rightClickOnTeamWorkspacesRoot() {
        const rightElement = await this.page.waitForSelector(this.Elements.teamWorkspacesRoot, { timeout: 15000 });
        await rightElement.click({ button: "right" });
    }

    async rightClickOnTeamWorkspacesRoot4() {
        const rightElement = await this.page.waitForSelector(this.Elements.teamWorkspacesRoot4, { timeout: 15000 });
        await rightElement.click({ button: "right" });
    }

    async clickOnTeamWorkspacesPaste() {
        await this.page.waitForTimeout(1000);
        await this.base.waitAndClick(this.Elements.teamWorkspacesPaste);
        await this.page.waitForTimeout(1000);
    }

    async refreshPage() {
        await this.base.refreshPage();
        await this.page.waitForTimeout(10000);
    }

    async clickOnTeamWorkspaceroot() {
        await this.base.waitAndClick(this.Elements.teamWorkspacesRoot);
    }

    async clickOnTeamWorkspaceroot4() {
        await this.base.waitAndClick(this.Elements.teamWorkspacesRoot4);
    }

    async clickOnParentFolderTW() {
        await this.base.waitAndClick(this.Elements.parentFolderTW);
    }

    async clickOnCopyBotPasteTW() {
        await this.base.waitAndClick(this.Elements.copyBotPasteTW);
    }

    async clickOnCopyQueueTW() {
        await this.base.waitAndClick(this.Elements.copyQueueTW);
    }


    async clickOnServiceBotTW() {
        await this.base.waitAndClick(this.Elements.serviceBotTW);
         await this.page.waitForTimeout(90000);
    }

    async clickOnCopyTableTW() {
        await this.base.waitAndClick(this.Elements.copyTableTW);
        
    }

    async clickOnChildFolderTW() {
        await this.base.waitAndClick(this.Elements.childFolderTW);
    }

    async clickOnCopyChildBotTW() {
        await this.base.waitAndClick(this.Elements.copyChildBotTW);
    }


    async clickOnCopyChildQueueTW() {
        await this.base.waitAndClick(this.Elements.copyChildQueueTW);
    }

    async clickOnCopyChildtableTW() {
        await this.base.waitAndClick(this.Elements.copyChildtableTW);
    }

    async clickOnDeleteTW() {
        await this.base.waitAndClick(this.Elements.deleteTW);
    }

    async rightClickOnParentFolderTW() {
        const rightElement = await this.page.waitForSelector(this.Elements.parentFolderTW, { timeout: 8000 });
        await rightElement.click({ button: "right" });
    }

}

