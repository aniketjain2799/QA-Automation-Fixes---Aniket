Feature: Manage RBAC for Data Table or Bot with Run Actions Configured with SSO Login

  Background:
    Given User Already Logged In From Microsoft Account

  @Regression @DataTable
  Scenario: Run Data Table and Bot on RBAC Environment from second method
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot8080 Environment should be visible and clickable to the User
    When User clicks on the Raw Data0 tab
    And clicks on the first name row of the Bot
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080

  @Prod
  Scenario: Run Data Table and Bot on RBAC Environment from second method
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot8080 Environment should be visible and clickable to the User4
    When User clicks on the Raw Data0 tab
    And clicks on the first name row of the Bot4
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080
