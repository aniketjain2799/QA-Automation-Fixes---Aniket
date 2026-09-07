import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class E2EFlowOfEnvironmentPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        root: "(//a[normalize-space()='Root'])[1]",
        newBot: "//a[normalize-space()='New Bot']",
        newBot1: "(//a[@href='#'][normalize-space()='New Bot'])[2]",
        serviceBot: "(//a[@href='#'][normalize-space()='Service Bot'])[1]",
        viewlinesCompleteBox: "//div[contains(@class,'view-lines')]",
        showExecutionLog: "//span[normalize-space()='Show execution log']",
        table: "//div[normalize-space()='table']",
        phoneNumberValidation: "//td[@role='gridcell'][normalize-space()='714-555-1213']",
        numberOfEntriesValidation: "//div[normalize-space()='Page 1 of 1 (11 items)']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        storeTable: "//div[normalize-space()='Data table']",
        phoneNumberAssertion: "//td[@role='gridcell'][normalize-space()='714-555-1213']",
        totalTableAssertion: "//div[normalize-space()='Page 1 of 1 (11 items)']",
        enableRubButton: "(//div[@data-toggle='toggle'])[1]",
        bor2BotCheckBox: "//label[@for='chkDoNotExecute-internal']",
        interactiveCheckBox: "//label[@for='chkDoNotExecute-interactive']",
        restTCheckBox: "//label[@for='chkDoNotExecute-rest']",
        newBotI1: "(//a[normalize-space()='New Bot'])[1]",
        queue: "(//a[normalize-space()='Queue'])[1]",

    };

    async rightClickOnRoot() {
        await new Promise(resolve => setTimeout(resolve, 8000));
        const rightElement = await this.page.locator(this.Elements.root);
        await rightElement.click({ button: "right" });
        await this.page.waitForTimeout(1000);
    }

    async clickOnNewBot() {
        await this.base.waitAndClick(this.Elements.newBot);
    }

    async clickOnNewBot1() {
        await this.base.waitAndClick(this.Elements.newBot1);
    }

    async clickOnStoreTable() {
        await this.page.waitForLoadState('networkidle', { timeout: 90000 }).catch(() => {});
        await this.page.locator(this.Elements.storeTable).waitFor({ state: 'visible', timeout: 90000 });
        await this.page.locator(this.Elements.storeTable).click();
    }

    async clickOnShowExecutionLog() {
        // The execution log panel can open on its own (e.g. triggered by the preceding action)
        // right as this click attempts to open it too, so a pre-click check for "already open"
        // is racy — the panel can be closed at check time and opening by click time. Instead,
        // try the click and only treat it as a real failure if the panel is still genuinely
        // closed afterward; if it's open (by us or on its own), the goal is already achieved.
        try {
            await this.base.waitAndClick(this.Elements.showExecutionLog);
        } catch (error) {
            const panelOpen = await this.page.locator("//div[@id='rightPanelWrapper']//li").first().isVisible({ timeout: 2000 }).catch(() => false)
                || await this.page.locator("//ul[@id='rightOverlayExecutionLogContainer']").isVisible({ timeout: 2000 }).catch(() => false);
            if (!panelOpen) {
                throw error;
            }
        }
    }

    async clickOnRestTCheckBox() {
        await this.base.waitAndClick(this.Elements.restTCheckBox);
        await this.page.waitForTimeout(6000);
    }

    async clickOnEnableRubButton() {
        await this.base.waitAndClick(this.Elements.enableRubButton);
    }


    async clickOnBot2BotCheckBox() {
        await this.base.waitAndClick(this.Elements.bor2BotCheckBox);
    }


    async clickOnInteractiveCheckBox() {
        await this.base.waitAndClick(this.Elements.interactiveCheckBox);
    }


    async clickOnServiceBot() {
        await this.base.waitAndClick(this.Elements.serviceBot);
    }

    async getPhoneNumberAssertionText() {
        await this.page.waitForSelector(this.Elements.phoneNumberAssertion, { timeout: 15000 });
        return this.page.locator(this.Elements.phoneNumberAssertion);
    }

    async getTotalTableAssertionText() {
        await this.page.waitForSelector(this.Elements.totalTableAssertion, { timeout: 15000 });
        return this.page.locator(this.Elements.totalTableAssertion);
    }

    async getJobFinishedText(timeout = 600000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getNoErrorText(timeout = 600000) {
        const noErrorLocator = this.page.locator(this.Elements.noError);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async validateTableEntriesAndPhoneNumber() {
        const phoneNumberElement = await this.getPhoneNumberAssertionText();
        const totalTableElement = await this.getTotalTableAssertionText();
        await expect(totalTableElement).toContainText('Page 1 of 1 (11 items)');
        await expect(phoneNumberElement).toBeVisible({ timeout: 80000 });
        await expect(phoneNumberElement).toContainText('714-555-1213');
    }



    async getElement(selector: string) {
        return await this.page.locator(selector);
    }

    async clearInput(selectorKey: string) {
        const selector = this.Elements[selectorKey];

        if (!selector) {
            console.error(`Selector for "${selectorKey}" not found.`);
            return;
        }

        const elementHandle = await this.page.$(selector);
        if (elementHandle) {
            await elementHandle.evaluate((element) => (element.innerText = ""));
            await this.page.waitForTimeout(5000);
        } else {
            console.error(`Element with selector "${selector}" not found.`);
        }
    }

    async sendPropertiesToSection(properties: string) {
        const viewLinesCompleteBox = await this.page.locator(
            this.Elements.viewlinesCompleteBox
        );
        await viewLinesCompleteBox.evaluate(
            (element, text) => (element.innerHTML = text.replace(/\n/g, "<br>")),
            properties
        );
    }


    async fillBotPropertiesSection(botPropertiesData: any) {
        const viewLinesElement = await this.page.locator(
            this.Elements.viewlinesCompleteBox
        );

        const scriptContent = `
        var editor = monaco.editor.getModels()[0];
        editor.setValue(\`
        $phoneNumber = '${botPropertiesData.phoneNumber}';
        $data = @();
        $index = ${botPropertiesData.index};
        #Get-something;
        for ($inner = 0; $inner -lt 10; $inner++) {
        $qdata = New-Object -TypeName psobject;
        $rm = [READIMessage]::New();
        $rm.Sender='${botPropertiesData.botProperties.sender}';
        $rm.Recipient='${botPropertiesData.botProperties.recipient}';
        $rm.Subject='${botPropertiesData.botProperties.subject}';
        $null = $qdata | Add-Member -NotePropertyName 'Id' -NotePropertyValue $index -Force;
        $null = $qdata | Add-Member -NotePropertyName 'name' -NotePropertyValue "name - $inner $num" -Force;
        $null = $qdata | Add-Member -NotePropertyName 'address' -NotePropertyValue "address - $inner $num" -Force;
        $null = $qdata | Add-Member -NotePropertyName 'phone_number' -NotePropertyValue $phoneNumber -Force;
        $rm.Body=$qdata;
        $rm|Add-RbQueueMessage './Queue';
        Write-Debug "Records sent to Queue...$index";
        $index++;
        }
        \`);
        `;

        await this.page.evaluate(scriptContent);
        await this.page.waitForTimeout(2000);
    }

    async fillServiceBotPropertiesSection(serviceBotPropertiesData: any) {
        const viewLinesElement = await this.page.locator(
            this.Elements.viewlinesCompleteBox
        );

        const scriptContent = `
        var editor = monaco.editor.getModels()[0];
        editor.setValue(\`
        $READIQItems| foreach-object {
        write-debug $_.name
        $_ | Add-RbDataTableRow "./../Data table"
        }
        \`);
        `;

        await this.page.evaluate(scriptContent);

        await this.page.waitForTimeout(2000);
    }


    async processQueueData() {
        const viewLinesElement = await this.page.locator(
            this.Elements.viewlinesCompleteBox
        );
        const scriptContent = `
        var editor = monaco.editor.getModels()[0];
        editor.setValue(\`
        $count = 0
        
        function ServiceBot ($qdata) {
            $qdata | Add-RbDataTableRow "./../Data table"
        }
        
         Do {
            $rm=Get-RbQueueMessage -QueueName $sessionvars["MyQueue"];
            if ($rm) {
                ServiceBot -qdata $($rm.Body)
                #write-debug ($rm.Body | convertto-json -depth 10)
                $count=$count+1
                write-debug "Records processed...$count"
            }
        } While ($rm)
        \`);
        `;

        await this.page.evaluate(scriptContent);
        await this.page.waitForTimeout(2000);
    }

    async clickOnNewBotI1() {
        await this.base.waitAndClick(this.Elements.newBotI1);
    }

    async clickOnQueue() {
        await this.base.waitAndClick(this.Elements.queue);
    }
}
