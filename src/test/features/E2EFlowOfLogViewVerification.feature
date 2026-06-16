Feature: End to End Functionality of LogViewVerification

  Background:
    Given User Already Logged In.

  @Regression @DataTable
  Scenario: User should be able to verify LogViewVerification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Log View Verification folder
    And User click on BotSuccess
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    And User click on BotSuccess
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks on the logView
    Then the User can validate the Execution mode and Status
    When User click on BotFailure
    And click On Properties Section
    And click on Run Button
    Then BotFailure script Should Be Failed
    And User click on BotFailure
    When the User clicks on the logView
    Then the User can validate the Execution Mode and Status
    When User click on Table Success
    And click On Properties Section
    And click on Table Run Button
    Then Table Success script Should Be executed Successfully
    And User click on Table Success
    And the User clicks on Table Success Tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks on the logView
    Then the User can validate the Execution mode and Status
    When User click on Table Failure
    And click On Properties Section
    And click on Run Button
    Then Table Failure script Should Be Failed
    And User click on Table Failure
    When the User clicks on the logView
    Then the User can validate the Execution Mode and Status

  @Prod
  Scenario: User should be able to verify LogViewVerification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Log View Verification folder
    And User click on BotSuccess
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    And User click on BotSuccess
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks on the logView
    Then the User can validate the Execution mode and Status
    When User click on BotFailure
    And click On Properties Section
    And click on Run Button
    Then BotFailure script Should Be Failed
    And User click on BotFailure
    When the User clicks on the logView
    Then the User can validate the Execution Mode and Status
    When User click on Table Success
    And click On Properties Section
    And click on Table Run Button
    Then Table Success script Should Be executed Successfully
    And User click on Table Success
    And the User clicks on Table Success Tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    When the User clicks on the logView
    Then the User can validate the Execution mode and Status
    When User click on Table Failure
    And click On Properties Section
    And click on Run Button
    Then Table Failure script Should Be Failed
    And User click on Table Failure
    When the User clicks on the logView
    Then the User can validate the Execution Mode and Status
