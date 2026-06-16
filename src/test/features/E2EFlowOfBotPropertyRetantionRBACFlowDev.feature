Feature: Bot Properties Retation RBAC End to End Flow

  Background:
    Given User navigates to the application
    And User logs in with BOTPRBAC credentials

  @Regression
  Scenario: Dev User can be able to Verify Bot Properties Retation RBAC Flow
    When User clicks on Hamburger Menu
    Then Bot Properties Environment should be visible and clickable to User
    When selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab Section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab Section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions Tab section of Data Table
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions tab Section of Queue
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab Section of Service Bot
    # When the User click on the Schedule tab of Service Bot
    # Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Prod
  Scenario: Dev User can be able to Verify Bot Properties Retation RBAC Flow
    When User clicks on Hamburger Menu
    Then Bot Properties Environment should be visible and clickable to User4
    When selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab Section
    When the User clicks on the Schedule tab of the properties section
    Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab Section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder41
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields In The Permissions Tab section of Data Table
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions tab Section Of Queue
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab Section of Service Bot
    When the User click on the Schedule tab of Service Bot
    Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
