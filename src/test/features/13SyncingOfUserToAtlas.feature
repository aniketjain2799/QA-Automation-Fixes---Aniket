Feature: End to End Functionality of Syncing Of User To Atlas Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Syncing Of User To Atlas Functionality
    When the User clicks on the Users tab
    And the User checks for checkbox and deletes user if visible
    And User logs in to Bot Studio with DEVCU credentials
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section2
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
    And the User click on View Text1
    Then the User can verify the LastName FirstName DisplayName
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    And click On Properties Section
    And Sent the data from JSON file to Properties Section3
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    And the user clicks on search box and sends the User word and presses enter
    And the User clicks on first user entry
    And clicks on arrow key to full screen the JSON part
    Then the User can verify LinkId, id, RefClass, RefName, BusinessEmail, FirstName, LastName have values
    Then the user clicks on OK button

  @ConnectorUI
  Scenario: User should be able to Validate Syncing Of User To Atlas Functionality
    When the User clicks on the Users tab
    And the User checks for checkbox and deletes user if visible
    And User logs in to Bot Studio with DEVCU credentials
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
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
    And the user clicks on search box and sends the User word and presses enter
    And the user clicks on Name search box and sends the UsrVIVEKTESTjain word and presses enter
    And the User clicks on first user entry1
    And clicks on arrow key to full screen the JSON part
    Then the User can verify LinkId, id, RefClass, RefName, BusinessEmail, FirstName, LastName have values1
    Then the user clicks on OK button