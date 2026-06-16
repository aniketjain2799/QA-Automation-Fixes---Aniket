Feature: Bot Studio Commandlets with parameter For Connector UI

  Background:
    Given User navigates to the application
    And User logs in to Bot Studio with DEVCU credentials

  @ConnectorUI
  Scenario: User should be able to Validate Bot Studio Commandlets with parameter For Connector UI
    When User click on the Environments button
    And User click on Existing AchalTestEnv Environment
    And the User click on Root Folder
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section5
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User Double click on Second Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be False
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    When the User Double click on Third Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be False
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    When the User Double click on first Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be False
    Then the User extracts and stores the ID from View Text
    When the User click on close button
    And the User click on View Text1
    Then the User extracts and stores FirstName and LastName from View Text1
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    And click On Properties Section
    And Sent the data from JSON file to Properties Section7
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    When the user clicks on Name search box and sends the full dynamic name and presses enter
    Then the user should find the matching LinkId and validate IsActive is false
    Then the User click on Cancle Button
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section6
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User Double click on Second Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be True
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    When the User Double click on Third Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be True
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    When the User Double click on first Readi modules
    And the User click on View Text
    Then the User can verify the IsActive should be True
    Then the User extracts and stores the ID from View Text
    When the User click on close button
    And the User click on View Text1
    Then the User extracts and stores FirstName and LastName from View Text1
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    And click On Properties Section
    And Sent the data from JSON file to Properties Section8
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    When the user clicks on Name search box and sends the full dynamic name and presses enter
    Then the user should find the matching LinkId and validate IsActive is True
    Then the User click on Cancle Button
    And the User click on ODBC Bot
    And click On Properties Section
    And Sent the data from JSON file to Properties Section9
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    And the User Double click on Second Readi modules
    And the User click on View Text
    Then the User extracts and stores the ID from View Text
    When the User click on close button
    And the User click on View Text1
    Then the User can verify the FirstName should be Demo
    Then the User extracts and stores FirstName from View Text1
    When the User click on close button
    Then the User close the second Pop up window by click on close button
    And click On Properties Section
    And Sent the data from JSON file to Properties Section10
    And click on Run Button
    And Truncating script Should Be executed Successfully
    And the User click on ODBC Bot
    Then BotSuccess script Should Be executed Successfully11
    When the User clicks on Raw Data 1
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks in Services section
    And the user on Atlas
    When the user clicks on Name search box and sends the first name and presses enter
    Then the user should find the matching LinkId and validate FirstName should be Demo
    Then the User click on Cancle Button