import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class DynamicUserCreationUsingAtlasUIPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        usersTab: "(//h6[normalize-space()='Users'])[1]",
        checkbox: "(//div[@class='dx-checkbox-container'])[1]",
        deleteButton: "//span[@aria-label='Delete']//button[@type='button']",
        continueButton: "//button[normalize-space()='Continue']",
        createUserButton: "//span[@aria-label='New']//button[@type='button']",
        displayNameInput: "//input[@name='DisplayName']",
        firstNameInput: "//input[@name='FirstName']",
        lastNameInput: "//input[@name='LastName']",
        businessEmailInput: "//input[@name='BusinessEmail']",
        saveButton: "//span[@aria-label='Save']//button[@type='button' and not(@disabled)]",
        cancelButton: "//span[@aria-label='Cancel']//button[@type='button']",
        newlyCreatedUserCell: "(//td[@role='gridcell'])[16]",
        userProfile: "//button[@aria-label='open profile']",
        logout: "//h5[normalize-space()='Logout']",
        rolesTab: "//h6[normalize-space()='Roles']",
        createRoleButton: "//span[@aria-label='New']//button[@type='button']",
        saveRoleButton: "//span[@aria-label='Save']//button[@aria-haspopup='true']",
        roleDisplayNameInput: "//div[contains(@class,'MuiInputBase-root')][.//span[normalize-space()='Display Name']]/input",
        roleIncludeInput: "//input[@placeholder='Add Include value...']",
        roleFirstOption: "(//li[@role='option'])[1]",
        roleDisplayCell: "//td[normalize-space()='AchalDynamicAtlas']",
        atlasRoleRadioButton: "//div[@id='AtlasTab']//i",
        environmentDropdown: "//span[@aria-labelledby='select2-environmentListForAtlasRole-container']",
        achalTestEnvOption: "//li[@role='treeitem' and normalize-space()='Achal Test Env']",
        atlasRoleDropdown: "//span[@aria-labelledby='select2-AtlasRoleListforParticularEnv-container']",
        newAtlasRoleOption: "//li[@role='treeitem' and normalize-space()='Test Role']",
        refreshButton: "//button[@title='Refresh List']",
        emailValidation: "//li[normalize-space()='achal.dynamic2025@outlook.com']",
    };

    async clickOnUsersTab() {
        await this.base.waitAndClick(this.Elements.usersTab);
    }

    async deleteUserIfCheckboxVisible() {
        try {
            const checkbox = this.page.locator(this.Elements.checkbox);
            const isVisible = await checkbox.isVisible({ timeout: 5000 });

            if (isVisible) {
                await checkbox.click();
                await this.page.waitForTimeout(1000);
                await this.base.waitAndClick(this.Elements.deleteButton);
                await this.base.waitAndClick(this.Elements.continueButton);
                await this.page.waitForTimeout(2000);
                console.log('Existing user deleted successfully.');
            } else {
                console.log('No existing user found to delete.');
            }
        } catch (error) {
            console.log('No checkbox visible, proceeding without deletion.');
        }
    }

    async clickOnCreateUserButton() {
        await this.base.waitAndClick(this.Elements.createUserButton);
    }

    async enterDisplayName(displayName: string) {
        await this.page.locator(this.Elements.displayNameInput).clear();
        await this.page.locator(this.Elements.displayNameInput).fill(displayName);
    }

    async enterFirstName(firstName: string) {
        await this.page.locator(this.Elements.firstNameInput).clear();
        await this.page.locator(this.Elements.firstNameInput).fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator(this.Elements.lastNameInput).clear();
        await this.page.locator(this.Elements.lastNameInput).fill(lastName);
    }

    async enterBusinessEmail(businessEmail: string) {
        await this.page.locator(this.Elements.businessEmailInput).clear();
        await this.page.locator(this.Elements.businessEmailInput).fill(businessEmail);
    }

    async fillRequiredFields(displayName: string, firstName: string, lastName: string, businessEmail: string) {
        await this.enterDisplayName(displayName);
        await this.page.waitForTimeout(500);
        await this.enterFirstName(firstName);
        await this.page.waitForTimeout(500);
        await this.enterLastName(lastName);
        await this.page.waitForTimeout(500);
        await this.enterBusinessEmail(businessEmail);
        await this.page.waitForTimeout(1000);
        console.log(`Filled user details - Display: ${displayName}, Email: ${businessEmail}`);
    }

    async clickOnSaveButton() {
        await this.base.waitAndClick(this.Elements.saveButton);
        await this.page.waitForTimeout(3000);
        console.log('Clicked Save button');
    }

    async clickOnCrossIcon() {
        await this.base.waitAndClick(this.Elements.cancelButton);
        await this.page.waitForTimeout(2000);
        // After save, app navigates to user detail page — click Users tab to return to list
        await this.base.waitAndClick(this.Elements.usersTab);
        await this.page.waitForTimeout(5000);
        console.log('Clicked Cancel/Cross icon');
    }

    async getNewlyCreatedUserCell(expectedEmail: string) {
        const selector = `//td[@role='gridcell' and normalize-space()='${expectedEmail}']`;
        await this.page.waitForSelector(selector, { timeout: 15000 });
        return this.page.locator(selector);
    }

    async validateNewlyCreatedUserIsDisplayed(expectedEmail: string) {
        const userCell = await this.getNewlyCreatedUserCell(expectedEmail);
        await expect(userCell).toBeVisible();
        console.log(`✓ Newly created user with email '${expectedEmail}' is displayed in the Users list.`);
    }

    async clickOnUserProfile() {
        await this.base.waitAndClick(this.Elements.userProfile);
    }

    async clickOnLogout() {
        await this.base.waitAndClick(this.Elements.logout);
    }

    async clickOnRolesTab() {
        await this.base.waitAndClick(this.Elements.rolesTab);
        console.log('Clicked on Roles tab');
        await this.page.waitForTimeout(7000);
    }

    async deleteRoleIfCheckboxVisible() {
        try {
            const checkbox = this.page.locator(this.Elements.checkbox);
            const isVisible = await checkbox.isVisible({ timeout: 5000 });

            if (isVisible) {
                await checkbox.click();
                await this.page.waitForTimeout(1000);
                await this.base.waitAndClick(this.Elements.deleteButton);
                await this.base.waitAndClick(this.Elements.continueButton);
                await this.page.waitForTimeout(2000);
                console.log('Existing role deleted successfully.');
            } else {
                console.log('No existing role found to delete.');
            }
        } catch (error) {
            console.log('No checkbox visible, proceeding without deletion.');
        }
    }

    async clickOnCreateRoleButton() {
        await this.base.waitAndClick(this.Elements.createRoleButton);
        console.log('Clicked on Create Role button');
    }

    async fillRequiredFieldsForRole(includeValue: string) {
        await this.page.locator(this.Elements.roleDisplayNameInput).click();
        await this.page.locator(this.Elements.roleDisplayNameInput).fill('Test Role');
        console.log('Filled Display Name: Test Role');

        await this.page.waitForTimeout(500);

        await this.page.locator(this.Elements.roleIncludeInput).click();
        console.log('Clicked on Include value input');

        await this.page.locator(this.Elements.roleIncludeInput).fill(includeValue);
        console.log(`Entered Include value: ${includeValue}`);

        await this.page.waitForTimeout(8000);
        console.log('Waited 8 seconds for options to load');

        await this.page.locator(this.Elements.roleFirstOption).click();
        console.log('Selected first option from dropdown');

        await this.page.waitForTimeout(1000);
    }

    async clickOnSaveButtonForRole() {
        await this.base.waitAndClick(this.Elements.saveRoleButton);
        await this.page.waitForTimeout(3000);
        console.log('Clicked Save button for Role');
    }

    async validateNewlyCreatedRoleIsDisplayed(expectedRoleName: string) {

        await this.page.waitForTimeout(7000);
        console.log('Waited 7 seconds before validating role display');

        await this.page.waitForSelector(this.Elements.roleDisplayCell, { timeout: 10000 });
        const roleCell = this.page.locator(this.Elements.roleDisplayCell);
        const cellText = await roleCell.textContent();
        console.log(`Role cell text: ${cellText}`);

        await expect(roleCell).toBeVisible();
        await expect(roleCell).toContainText(expectedRoleName);
        console.log(`✓ Newly created role '${expectedRoleName}' is displayed in the Roles list.`);
    }

    async clickOnAtlasRole() {
        await this.base.waitAndClick(this.Elements.atlasRoleRadioButton);
        await this.page.waitForTimeout(1000);
    }

    async clickOnEnvironmentDropdown() {
        await this.base.waitAndClick(this.Elements.environmentDropdown);
        await this.page.waitForTimeout(1000);
    }

    async selectAchalTestEnv() {
        await this.base.waitAndClick(this.Elements.achalTestEnvOption);
        await this.page.waitForTimeout(1000);
    }

    async clickOnAtlasRoleDropdown() {
        await this.base.waitAndClick(this.Elements.atlasRoleDropdown);
        await this.page.waitForTimeout(1000);
    }

    async selectNewlyCreatedRole() {
        await this.base.waitAndClick(this.Elements.newAtlasRoleOption);
        await this.page.waitForTimeout(1000);
    }

    async clickOnRefreshIcon() {
        await this.base.waitAndClick(this.Elements.refreshButton);
        await this.page.waitForTimeout(10000);
    }

    async getEmailValidationText() {
        await this.page.waitForSelector(this.Elements.emailValidation, { timeout: 15000 });
        return this.page.locator(this.Elements.emailValidation);
    }

    async validateEmailIsDisplayed() {
        const emailElement = await this.getEmailValidationText();
        await expect(emailElement).toBeVisible();
        await expect(emailElement).toContainText('achal.dynamic2025@outlook.com');
        console.log('Email validation successful: achal.dynamic2025@outlook.com is displayed');
    }
}