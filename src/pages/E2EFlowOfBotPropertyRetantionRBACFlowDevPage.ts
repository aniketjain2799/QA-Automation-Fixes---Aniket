import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import LoginPage from "./loginPage";
import { getCredentials } from "../helper/credentialsManager";


export default class BotPropertyRBACPage {
    private base: PlaywrightWrapper;
    private loginPage: LoginPage;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
        this.loginPage = new LoginPage(page);
    }

    private Elements = {
        hamburgerMenu: "//div[@id='PortalIcon']",
        botProperties: "//span[normalize-space()='BotProperties']",
        rBQueueMessage: "//span[normalize-space()='RBQueueMessage']",
        botPropertiesMain: "//a[@id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_95188033-4f3d-47a1-a298-62aedc8c8b8e_anchor']",
        botPropertiesMain4: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_afc4d0e7-04ae-424e-8aa9-a14b68a6fed8_anchor']",
        rBQueueMessageMain: "a[id='2cef16a0-ed17-401c-90aa-f9014a4e5d72_520d0cc4-aa08-421b-87d1-44294dab0ee3_anchor']",
        rBQueueMessageMain4: "//a[@id='82cbbd16-dcb7-4f80-8b36-e0ce1070b5a9_383b10b5-88ac-4408-9c8f-60e8a61d953e_anchor']",


    };

    async clickOnHumburgerMenu() {
        await this.base.waitAndClick(this.Elements.hamburgerMenu);
    }

    async clickOnBotPropertiesEnv() {
        await this.base.waitAndClick(this.Elements.botProperties);
        await this.page.waitForTimeout(10000);
    }

    async clickOnRBQueueMessage() {
        await this.base.waitAndClick(this.Elements.rBQueueMessage);
        await this.page.waitForTimeout(10000);
    }

    async clickOnBotPropertiesMainPage() {
        await this.base.waitAndClick(this.Elements.botPropertiesMain);
    }

    async clickOnBotPropertiesMainPage4() {
        await this.base.waitAndClick(this.Elements.botPropertiesMain4);
    }

    async clickOnRBQueueMessageMain() {
        await this.base.waitAndClick(this.Elements.rBQueueMessageMain);
    }

    async clickOnRBQueueMessageMain4() {
        await this.base.waitAndClick(this.Elements.rBQueueMessageMain4);
    }

}