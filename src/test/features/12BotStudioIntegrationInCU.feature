Feature: Bot Studio Integration with Connector UI

  Background:
    Given User navigates to the application
    And User logs in to Bot Studio with DEVCU credentials

  @ConnectorUI
  Scenario: User should be able to Validate Bot Studio Integration with Connector UI Functionality
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section1
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User Double click on first Readi modules
    And the User click on View Text
    Then the User can verify the Id
    When the User click on close button
    Then the User close the second Pop up window by click on close button