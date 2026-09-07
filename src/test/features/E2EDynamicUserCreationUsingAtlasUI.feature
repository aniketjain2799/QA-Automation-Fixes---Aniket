Feature: End to End Functionality of Dynamic User Creation Using Atlas UI

# Disabled: the "Dynamic User Creation Using Atlas UI" functionality this feature tests has
# been removed from the product and no longer exists. Commented out so it doesn't run in
# CI/CD. See FIXES_LOG.md (2026-08-13 entry) for context.
#
#  Background:
#    Given User Already Logged In to Connector UI.6
#
#  @Regression
#  Scenario: User should be able to Create Dynamic User Using Atlas UI
#    When the User clicks on the Users tab
#    And the User checks for checkbox and deletes user if visible
#    When the User clicks on the Create User button
#    And the User fills in the required fields
#    And the User clicks on the Save button
#    And the User clicks on cross icon
#    Then the User verify the newly created user is displayed in the Users list
#    When the User clicks on Roles
#    And the User checks for checkbox and deletes Roles if visible
#    When the User clicks on the Create Role button
#    And the User fills in the required fields for Role
#    And the User clicks on the Save button for Role
#    Then the User verify the newly created Role is displayed in the Roles list
#    When the User click on User profile
#    Then the User click on Logout Button
#    And User logs in to Bot Studio with DEVCU credentials
#    When the User clicks on Global Settings
#    And the User clicks on Teams Options
#    And the User clicks on Manage Roles
#    And the User checks for existing Dynamic role and deletes it if present
#    And the User clicks on Manage Roles
#    And the User clicks in Plus Icon
#    And the User select the dynamic Role
#    And the User give the Role name1
#    Then the User Clicks on OK Button
#    And the User clicks on Manage Roles
#    And clicks on the setting icon
#    And clicks on Atlas role
#    And Clicks on Environment Dropdown
#    And Select the Option Achal Test Env
#    And Click on Atlas role dropdown
#    And Select the newly created Role
#    And click on referesh icon
#    Then the user can validate the email
#    And clicks on the OK button three times
#    And the User refresh the Page
#    And the User clicks on Global Settings
#    And the User clicks on Teams Options
#    Then the Dynamic User should be created and user can verify the Role and email3
#    And User click on Signout Button
