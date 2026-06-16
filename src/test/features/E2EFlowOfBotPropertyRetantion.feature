Feature: BotProperty Retantion End to End Flow

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on cross icon of the properties section
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on cross icon of the properties section
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section of Data Table
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions tab section of Queue
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    When the User clicks on cross icon of the properties section
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    # When the User click on the Schedule tab of Service Bot
    # Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Regression
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow in My Workspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    When the User clicks on cross icon of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder of MyWorkspace
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on cross icon of the properties section
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section of Data Table MW
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions tab section of Queue MW
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    When the User clicks on cross icon of the properties section
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    # When the User click on the Schedule tab of Service Bot
    # Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Regression
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow in Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on cross icon of the properties section
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder of Team Workspaces
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on cross icon of the properties section
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section of Data Table TW
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions tab section of Queue TW
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    When the User clicks on cross icon of the properties section
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    # When the User click on the Schedule tab of Service Bot
    # Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Prod
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    When the User clicks on the Schedule tab of the properties section
    Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder4
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all The Important fields in the Permissions tab section of Data Table
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions Tab section of Queue
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    When the User click on the Schedule tab of Service Bot
    Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Prod
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow in My Workspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    When the User clicks on the Schedule tab of the properties section
    Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder of MyWorkspace4
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields In the Permissions tab section of Data Table MW
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important fields in the Permissions Tab section of Queue MW
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    When the User click on the Schedule tab of Service Bot
    Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section

  @Prod
  Scenario: Admin User should be able to verifies BotProperty Retantion Flow in Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace4
    And the User clicks on the BotProperties Folder
    And selects the Bot
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the important fields in the Credentials tab section
    When the User clicks on the Schedule tab of the properties section
    Then the User verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Data Table of the BotProperties folder of Team Workspaces4
    Then the User is able to click on the properties section of the Data Table
    When the User clicks on the General tab of the properties section
    Then the User verifies all the important fields in the General tab section of Data Table
    When the User clicks on the Permissions tab of the properties section
    Then the User verifies all the Important fields in the Permissions tab section of Data Table TW
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section
    When user click on Queue of the BotProperties folder
    Then the User verifies all the important fields in the General tab section of Queue "Active"
    When the User clicks on the Permissions tab of the Queue section
    Then the User verifies all the important Fields in the Permissions tab section of Queue TW
    #When the User clicks on the Execution tab of the properties section
    #Then the User verifies all the important fields in the Execution tab section
    When the User click on Service Bot
    And the user click on properties
    And click on the general tab of Service Bot
    Then the User verifies all the important fields in the general tab section of Service Bot
    When the User click on the Credentials tab of Service Bot
    Then the User verifies all the important fields in the Credentials tab section of Service Bot
    When the User click on the Schedule tab of Service Bot
    Then the User verifies all the important fields in the Schedule tab section of Service Bot
    When the User click on the Retention tab of Service Bot
    Then the User verifies all the important fields in the Retention tab section of Service Bot "Months"
    When the User click on the Permissions tab of Service Bot
    Then the User verifies all the important fields in the Permissions tab section of Service Bot
    When the User clicks on the Execution tab of the properties section
    Then the User verifies all the important fields in the Execution tab section