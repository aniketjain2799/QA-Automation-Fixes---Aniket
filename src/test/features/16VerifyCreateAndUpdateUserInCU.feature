Feature: Create and Update User in the Connector UI

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Create User in the Connector UI
    When the User clicks on the Users tab
    And the User checks for checkbox and deletes user if visible
    When the User click on User profile
    Then the User click on Logout Button
    And User logs in to Bot Studio with DEVCU credentials
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section31
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section4
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    When the user clicks on Name search box and sends the full dynamic name and presses enter1
    When the user clicks on the 'User' row
    Then the user should validate linkID should be same as we sent previously
    Then the User click on Cancle Button

  @ConnectorUI
  Scenario: User should be able to Update User in the Connector UI
    When the User clicks on the Users tab
    And the User checks for checkbox and deletes user if visible
    When the User click on User profile
    Then the User click on Logout Button
    And User logs in to Bot Studio with DEVCU credentials
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    When the user updates the country field with a random country name
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section4
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    And the user clicks on search box and sends the UsrAllanDeyoung word and presses enter
    When the User Double click on first Name
    Then the user should verify that the Country is updated correctly in monaco
    Then the User click on Cancle Button