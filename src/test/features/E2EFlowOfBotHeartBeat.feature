Feature: End to End Flow Of Bot Heart Beat

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: End to End Flow Of Bot Heart Beat should be Completed with PS5
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the BotHeartBeat Folder
    And the User click on New Bot
    And click On Properties Section
    And click on Run Button
    And the User can check the Execution icon is visible
    Then New Bot script Should Be executed Successfully
    Then the User can also verify that Execution should not be Visible

  @Prod
  Scenario: End to End Flow Of Bot Heart Beat should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the BotHeartBeat Folder
    And the User click on New Bot
    And click On Properties Section
    And click on Run Button
    And the User can check the Execution icon is visible
    Then New Bot script Should Be executed Successfully
    Then the User can also verify that Execution should not be Visible

  @Regression
  Scenario: End to End Flow Of Bot Heart Beat should be Completed with PS5 Proxy
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the BotHeartBeat Folder
    And the User click on New Bot19
    And click On Properties Section
    And click on Run Button
    And the User can check the Execution icon is visible
    Then New Bot script Should Be executed SuccessfullyP5
    Then the User can also verify that Execution should not be Visible

  @Regression
  Scenario: End to End Flow Of Bot Heart Beat should be Completed with PS7
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the BotHeartBeat Folder
    And the User click on New Bot29
    And click On Properties Section
    And click on Run Button
    And the User can check the Execution icon is visible
    Then New Bot script Should Be executed SuccessfullyP7
    Then the User can also verify that Execution should not be Visible

  @Regression
  Scenario: End to End Flow Of Bot Heart Beat should be Completed with PS7 Proxy
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the BotHeartBeat Folder
    And the User click on New Bot39
    And click On Properties Section
    And click on Run Button
    And the User can check the Execution icon is visible
    Then New Bot script Should Be executed SuccessfullyP7Proxy
    Then the User can also verify that Execution should not be Visible