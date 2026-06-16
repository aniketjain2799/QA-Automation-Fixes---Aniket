Feature: Object Matching Rule Validation in the Connector UI

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Object Matching Rule in the Connector UI
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
    And Sent the data from JSON file to Properties Section12
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
    Then the User remove the LinkId Value
    Then the User click on Ok Button
    And User click on Signout Button
    Given User Already Logged In to Connector UI.4
    When the User clicks AutomationTwo connector
    When the user clicks on the Schema tab
    And the user clicks on the Classes section
    When Expand the classes section
    And the User expands the User class
    And the User expands the Rules Option
    And the User clicks on the DataFlow Option
    And the User clicks on Plus Icon
    And the User enters the Automation name
    And clicks the keyboard enter button to save it
    And the user clicks on the check icon to save the class
    And the user clicks the Automation Rule
    And the user clicks properties dropdown
    And the User selects the Bussiness email value
    Then save the Inbound page
    And the user clicks on the check icon to save the Class
    And clicks on the main connector save icon
    And User logs in to Bot Studio with DEVCU credentials
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section14
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
    Then the User can verify that LinkId is Present
    Then the User click on Ok Button
    And User click on Signout Button
    Given User Already Logged In to Connector UI.5
    When the User clicks AutomationTwo connector
    When the user clicks on the Schema tab
    And the user clicks on the Classes section
    When Expand the classes section
    And the User expands the User class
    And the User expands the Rules Option
    And the User clicks on the DataFlow Option
    When the User clicks on delete icon of Rule
    And the user clicks on the check icon to save the Class
    And clicks on the main connector save icon