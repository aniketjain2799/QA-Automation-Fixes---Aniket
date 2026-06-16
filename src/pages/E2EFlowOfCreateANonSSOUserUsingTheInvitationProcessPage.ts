import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class CreateANonSSOUserUsingTheInvitationProcessPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        invitations: "//a[normalize-space()='Invitations']",
        email: "(//input[@id='txtEmail0'])[1]",
        firstName: "(//input[@id='txtFName0'])[1]",
        lastName: "(//input[@id='txtLName0'])[1]",
        selectRole: "//span[contains(text(),'Select Role')]",
        administrator: "//li[normalize-space()='Administrator']",
        sendInvites: "(//input[@id='sendInvites'])[1]",
        ok: "//button[@id='alertify-ok']",
        newPassword: "//input[@id='Password']",
        confirmPassword: "//input[@id='ConfirmPassword']",
        register: "//input[@value='Register']",
        fetchAndVerifyEmail: "//input[@id='changeProfileModalEmail']",
        phoneNumber: "//input[@id='PhoneNumber']",
        submit: "form[id='frmChangeProfile'] button[type='submit']",
        userCreationVerify: "//span[contains(text(),'RandomAutomationLastName, RandomAutomationFirstName')]",
        plusButton: "//button[@id='addInvites']",


    };


    async clickOnInvitations() {
        await this.base.waitAndClick(this.Elements.invitations);
    }

    async clickOnPlusButton() {
        await this.base.waitAndClick(this.Elements.plusButton);
    }

    async clickOnSelectRole() {
        await this.base.waitAndClick(this.Elements.selectRole);
    }

    async clickOnAdministrator() {
        await this.base.waitAndClick(this.Elements.administrator);
    }

    async clickOnSendInvites() {
        await this.base.waitAndClick(this.Elements.sendInvites);
    }

    async clickOnOk() {
        await this.base.waitAndClick(this.Elements.ok);
    }

    async enterFirstNameText(firstNameText: string) {
        await this.page.locator(this.Elements.firstName).fill(firstNameText);
    }

    async enterLastNameText(lastNameText: string) {
        await this.page.locator(this.Elements.lastName).fill(lastNameText);
    }

    async enterEmailText(emailText: string) {
        await this.page.locator(this.Elements.email).fill(emailText);
    }

    async enterNewPasswordText(newPasswordText: string) {
        await this.page.locator(this.Elements.newPassword).fill(newPasswordText);
    }

    async enterConfirmPasswordText(confirmPasswordText: string) {
        await this.page.locator(this.Elements.confirmPassword).fill(confirmPasswordText);
    }

    async clickOnRegister() {
        await this.base.waitAndClick(this.Elements.register);
        await this.page.waitForTimeout(8000);
    }

    async enterPhoneNumberText(phoneNumberText: string) {
        await this.page.locator(this.Elements.phoneNumber).fill(phoneNumberText);
    }

    async clickOnSubmit() {
        await this.base.waitAndClick(this.Elements.submit);
    }

    async getUserCreationVerify() {
        await this.page.waitForSelector(this.Elements.userCreationVerify, { timeout: 15000 });
        return this.page.locator(this.Elements.userCreationVerify);
    }

    async validateUserCreationVerify() {
        const UserName = await this.getUserCreationVerify();
        await expect(UserName).toContainText('RandomAutomationLastName, RandomAutomationFirstName');
    }

}