import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";


export default class RunCommandletsPage {
    private base: PlaywrightWrapper;
    private loginPage: LoginPage;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
        this.loginPage = new LoginPage(page);
    }

    private Elements = {
        hamburgerMenu: "//div[@id='PortalIcon']",
        commandletsToRunEnv: "//span[normalize-space()='CommandletsToRun']",
        commandletsToRunEnP: "//span[normalize-space()='CommandletsToRunProxy']",
        callerBot: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='CallerBot']",
        newBot: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='New Bot']",
        addRbLog_Array: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='AddRbLog_Array']",
        get_Atlas: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='Get_Atlas']",
        newBotSH: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='New Bot(SimpleHTML)']",
        roi: "//li[contains(@role,'treeitem')]//a[contains(@href,'#')][normalize-space()='ROI']",
        commandletsToRunEnvMainPage: "//li[@role='treeitem']//a[@href='#'][normalize-space()='CommandletsToRun']",
        run: "//span[normalize-space()='Run']",
        runYes: "//button[@id='btnRunScriptWithoutParameters']",
        scriptDescriptionName: "//input[@id='txtScriptDescription']",
        closeButton: "//div[@id='rightOverlay']//div//a[@id='rightOverlayCloseButton']",
        properties: "//li[@role='tab']//div//div[contains(text(),'Properties')]",
        jobFinished: "(//li[contains(text(), 'Job finished')])[1]",
        proxyConnectId: "//li[contains(text(), 'Using Connect IDs: ConnectID_Lalit')]",
        noError: "(//li[contains(text(), 'no errors')])[1]",
        showExecutionLog: "//span[normalize-space()='Show execution log']",

    };

    async navigateToHomePageAndLoginWithMicrosoft() {
        await this.navigateToHomePage();
        const secretKey = process.env.SECRET_KEY || "";
        const { username, password } = getCredentials("MICROSOFT", secretKey);
        await this.loginPage.microsoftLogin(username, password);
        await this.loginPage.waitForSomeElement();
    }

    async navigateToHomePageAndLoginWithMicrosoftDynamic() {
        await this.navigateToHomePage();
        const secretKey = process.env.SECRET_KEY || "";
        const { username, password } = getCredentials("MICROSOFT_DYNAMIC", secretKey);
        await this.loginPage.microsoftLogin(username, password);
        await this.loginPage.waitForSomeElement();
    }

    async navigateToHomePage() {
        const loginUrl = process.env.BASEURL || "";
        await this.base.goto(loginUrl);
    }

    async clickOnHumburgerMenu() {
        // await this.page.waitForSelector(this.Elements.hamburgerMenu, { timeout: 45000 });
        await this.base.waitAndClick(this.Elements.hamburgerMenu);
    }

    async clickOnCommandletsToRunEnv() {
        // await this.page.waitForSelector(this.Elements.commandletsToRunEnv, { timeout: 45000 });
        await this.base.waitAndClick(this.Elements.commandletsToRunEnv);
        await this.page.waitForTimeout(10000);
    }

    async clickOnCommandletsToRunEnvMainPage() {
        await this.base.waitAndClick(this.Elements.commandletsToRunEnvMainPage);
    }

    async clickOnCommandletsToRunEnvP() {
        // await this.page.waitForSelector(this.Elements.commandletsToRunEnv, { timeout: 45000 });
        await this.base.waitAndClick(this.Elements.commandletsToRunEnP);
        await this.page.waitForTimeout(10000);
    }

    async clickOnCallerBot() {
        await this.base.waitAndClick(this.Elements.callerBot);
    }

    async clickOnProperties() {
        const url = this.page.url();
        // If already on scriptTab, Properties is active — skip to avoid clicking a portal sidebar Properties tab
        const isOnScriptTab = url.includes('/v/scriptTab');
        const propertiesTabActive = isOnScriptTab || await this.page.locator("//li[@role='tab' and @aria-selected='true']//div//div[contains(text(),'Properties')]").isVisible().catch(() => false);
        console.log('[clickOnProperties] URL:', url, '| Properties tab active:', propertiesTabActive);
        if (!propertiesTabActive) {
            await this.base.waitAndClick(this.Elements.properties);
            console.log('[clickOnProperties] Properties clicked, URL after:', this.page.url());
        }
    }

    async clickOnRunButton() {
        console.log('[clickOnRunButton] URL on entry:', this.page.url());
        const entryUrl = this.page.url();
        const botIdMatch = entryUrl.match(/\/d\/([^/]+)\/v\/scriptTab/);
        const botId = botIdMatch ? botIdMatch[1] : null;

        try {
            await this.page.waitForSelector(this.Elements.run, { state: 'visible', timeout: 60000 });
            console.log('[clickOnRunButton] Run found on first attempt, URL:', this.page.url());
            await this.base.waitAndClick(this.Elements.run);
        } catch (error) {
            console.log('[clickOnRunButton] First 60s timeout — URL now:', this.page.url());
            // Self-heal: the SPA can drift off the script tab (e.g. to dashboardTab) between the
            // Run button being found visible and the click actually landing, leaving no Run button
            // to find on retry. Navigate back to the bot's script tab before retrying.
            if (botId && !this.page.url().includes(`/d/${botId}/v/scriptTab`)) {
                const origin = new URL(this.page.url()).origin;
                await this.page.goto(`${origin}/d/${botId}/v/scriptTab`);
                await this.page.waitForLoadState('networkidle');
            }
            try {
                await this.base.waitAndClick(this.Elements.closeButton);
            } catch (closeError) {
                // closeButton not available in portal context, ignore
            }
            await this.page.waitForSelector(this.Elements.run, { state: 'visible', timeout: 45000 });
            await this.base.waitAndClick(this.Elements.run);
        }
    }


    async clickOnYesButton() {
        const entryUrl = this.page.url();
        const botIdMatch = entryUrl.match(/\/d\/([^/]+)\/v\/scriptTab/);
        const botId = botIdMatch ? botIdMatch[1] : null;

        try {
            await this.page.waitForSelector(this.Elements.runYes, { state: 'visible', timeout: 30000 });
            await this.base.waitAndClick(this.Elements.runYes);
        } catch (error) {
            console.log('[clickOnYesButton] First 30s timeout — URL now:', this.page.url());
            // Same class of drift as clickOnRunButton, but deeper: the SPA can navigate away from
            // the bot entirely (sometimes to a different bot's dashboard) while waiting for the
            // confirmation dialog, so the dialog itself is gone — re-waiting alone won't bring it
            // back. Navigate back to the bot's script tab and re-trigger Run if it's sitting there
            // unclicked, before retrying the confirmation wait.
            if (botId && !this.page.url().includes(`/d/${botId}/v/scriptTab`)) {
                const origin = new URL(this.page.url()).origin;
                await this.page.goto(`${origin}/d/${botId}/v/scriptTab`);
                await this.page.waitForLoadState('networkidle');
                const runVisibleAgain = await this.page.locator(this.Elements.run).isVisible({ timeout: 5000 }).catch(() => false);
                if (runVisibleAgain) {
                    await this.base.waitAndClick(this.Elements.run);
                }
            } else {
                try {
                    await this.base.waitAndClick(this.Elements.closeButton);
                } catch (closeError) {
                    // closeButton not available in portal context, ignore
                }
            }
            await this.page.waitForSelector(this.Elements.runYes, { state: 'visible', timeout: 45000 });
            await this.base.waitAndClick(this.Elements.runYes);
        }
    }

    async getJobFinishedText(timeout = 1080000) {
        const jobFinishedLocator = this.page.locator(this.Elements.jobFinished);
        await jobFinishedLocator.waitFor({ state: 'attached', timeout });
        return jobFinishedLocator.innerText();
    }

    async getProxyConnectIdText(timeout = 60000) {
        const ProxyConnectLocator = this.page.locator(this.Elements.proxyConnectId);
        await ProxyConnectLocator.waitFor({ state: 'attached', timeout });
        return ProxyConnectLocator.innerText();
    }

    async getNoErrorText(timeout = 1080000) {
        const noErrorLocator = this.page.locator(this.Elements.noError);
        await noErrorLocator.waitFor({ state: 'attached', timeout });
        return noErrorLocator.innerText();
    }

    async clickOnShowExecutionLogIfVisible() {
        try {
            await this.page.waitForSelector(this.Elements.showExecutionLog, { state: 'visible', timeout: 5000 });
            await this.base.waitAndClick(this.Elements.showExecutionLog);
        } catch (error) {
            await this.base.waitAndClick(this.Elements.closeButton);
            await this.page.waitForSelector(this.Elements.showExecutionLog, { state: 'visible', timeout: 5000 });
            await this.base.waitAndClick(this.Elements.showExecutionLog);
            console.log("Show execution log button is not visible.");
        }
    }

    async clickOnNewBot() {
        await this.base.waitAndClick(this.Elements.newBot);
    }

    async clickOnAddRbLog_Array() {
        await this.base.waitAndClick(this.Elements.addRbLog_Array);
    }

    async clickOnGet_Atlas() {
        await this.base.waitAndClick(this.Elements.get_Atlas);
    }

    async clickOnNewBotSH() {
        await this.base.waitAndClick(this.Elements.newBotSH);
    }

    async clickOnRoi() {
        await this.base.waitAndClick(this.Elements.roi);
    }


}