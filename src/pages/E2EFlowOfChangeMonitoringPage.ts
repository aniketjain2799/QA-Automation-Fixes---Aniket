import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";



export default class ChangeMonitoringPage {
    private base: PlaywrightWrapper;

    static generatedFirstName: string;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        changeMonitoring: "(//a[normalize-space()='ChangeMonitoring'])[1]",
        table: "(//a[normalize-space()='table'])[1]",
        viewlinesCompleteBox: "//div[contains(@class,'view-lines')]",
        run: "//span[normalize-space()='Run']",
        runYes: "//button[@id='btnRunScriptWithoutParameters']",
        closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
        yesTable: "//label[normalize-space()='Yes']",
        okResetDataTable: "//button[@id='btnResetDataTable']",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        tableTab: "(//div[normalize-space()='table'])[1]",
        tableTabFirstNameVerification: "//td[normalize-space()='AdeleVance@example.com']/following-sibling::td[2]",
        newBot: "(//a[normalize-space()='New Bot'])[1]",
        changeMonitoringStarted: "(//li[contains(text(), 'Change monitoring started')])[1]",
        changeMonitoringcompleted: "(//li[contains(text(), 'Change monitoring completed')])[1]",
        view24: "(//div[normalize-space()='View24'])[1]",
        arrowIcon: "//img[@src='/Content/Images/monitoring_change.png']",
        firstNameVerificationView24: "//td[normalize-space()='AdeleVance@example.com']/following-sibling::td[3]",
        eng677Bot: "(//a[normalize-space()='ENG-677'])[1]",
        rawData0: "(//div[normalize-space()='Raw Data-0'])[1]",
        firstNameVerificationRawaData0: "//td[normalize-space()='AdeleVance@example.com']/following-sibling::td[2]",
        showExecutionLog: "//span[normalize-space()='Show execution log']"

    };


    async clickOnChangeMonitoring() {
        await this.base.waitAndClick(this.Elements.changeMonitoring);
    }

    async clickOnTable() {
        await this.base.waitAndClick(this.Elements.table);
    }

    async clickOnYesTable() {
        await this.base.waitAndClick(this.Elements.yesTable);
    }

    async clickOnOkResetDataTable() {
        await this.base.waitAndClick(this.Elements.okResetDataTable);
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



    async fillTablePropertiesSection() {
        const viewLinesElement = await this.page.locator(this.Elements.viewlinesCompleteBox);

        const botPropertiesData = {
            firstName: `Hell${Math.floor(Math.random() * 1000)}`
        };

        ChangeMonitoringPage.generatedFirstName = botPropertiesData.firstName;

        const scriptContent = `
var editor = monaco.editor.getModels()[0];
editor.setValue(\`
$csvData = @'
 UserPrincipalName,FirstName,LastName,LastReview
AdeleVance@example.com,${botPropertiesData.firstName},Vance,2020-08-20
NestorWilke@example.com,Nestor,Wilke,2020-05-18
'@
$csvData | ConvertFrom-Csv | Initialize-RbDataTable -PrimaryKey UserPrincipalName
\`);
`;

        await this.page.evaluate(scriptContent);
        await this.page.waitForTimeout(2000);
    }

    async clickOnRunButton() {
        try {
            await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
            await this.base.waitAndClick(this.Elements.run);
        } catch (error) {
            await this.base.waitAndClick(this.Elements.closeButton);
            await this.page.waitForSelector(this.Elements.run, { state: 'visible' });
            await this.base.waitAndClick(this.Elements.run);
        }
    }


    async clickOnYesButton() {
        await this.base.waitAndClick(this.Elements.runYes);
    }

    async getJobFinishedText(timeout = 1080000) {
        const start = Date.now();
        const locator = this.page.locator(this.Elements.jobFinished);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await locator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return locator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`Job finished text not found within ${timeout}ms`);
    }

    async getNoErrorText(timeout = 1080000) {
        const start = Date.now();
        const locator = this.page.locator(this.Elements.noError);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await locator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return locator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`No error text not found within ${timeout}ms`);
    }

    async getChangeMonitoringStartedText(timeout = 1080000) {
        const start = Date.now();
        const locator = this.page.locator(this.Elements.changeMonitoringStarted);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await locator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return locator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`Change monitoring started text not found within ${timeout}ms`);
    }

    async getChangeMonitoringcompletedText(timeout = 1080000) {
        const start = Date.now();
        const locator = this.page.locator(this.Elements.changeMonitoringcompleted);
        const showLogLocator = this.page.locator(this.Elements.showExecutionLog);
        while (Date.now() - start < timeout) {
            const found = await locator.isVisible({ timeout: 5000 }).catch(() => false);
            if (found) return locator.innerText();
            const canReopen = await showLogLocator.isVisible({ timeout: 3000 }).catch(() => false);
            if (canReopen) {
                await showLogLocator.evaluate((el: HTMLElement) => el.click());
                await this.page.waitForTimeout(2000);
            } else {
                await this.page.waitForTimeout(3000);
            }
        }
        throw new Error(`Change monitoring completed text not found within ${timeout}ms`);
    }



    async clickOnTableTab() {
        await this.base.waitAndClick(this.Elements.tableTab);
    }


    async getFirstNameFromTable(): Promise<string> {
        const firstName = ChangeMonitoringPage.generatedFirstName;
        const locator = this.page.locator(`//td[normalize-space()='${firstName}']`).first();
        await locator.waitFor({ state: 'visible', timeout: 30000 });
        return (await locator.innerText()).trim();
    }

    async clickOnNewBot() {
        await this.base.waitAndClick(this.Elements.newBot);
    }

    async clickOnView24() {
        await this.base.waitAndClick(this.Elements.view24);
    }

    async clickOnArrowIcon() {
        await this.base.waitAndClick(this.Elements.arrowIcon);
    }

    async getFirstNameFromBot(): Promise<string> {
        const firstName = ChangeMonitoringPage.generatedFirstName;
        const locator = this.page.locator(`//td[normalize-space()='${firstName}']`).first();
        await locator.waitFor({ state: 'visible', timeout: 30000 });
        return (await locator.innerText()).trim();
    }

    async clickOnEng677Bot() {
        await this.base.waitAndClick(this.Elements.eng677Bot);
    }

    async clickOnRawData0() {
        await this.base.waitAndClick(this.Elements.rawData0);
    }

    async getFirstNameFromENG777Bot(): Promise<string> {
        const firstName = ChangeMonitoringPage.generatedFirstName;
        const locator = this.page.locator(`//td[normalize-space()='${firstName}']`).first();
        await locator.waitFor({ state: 'visible', timeout: 30000 });
        return (await locator.innerText()).trim();
    }

}