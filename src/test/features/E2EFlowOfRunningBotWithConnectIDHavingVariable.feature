Feature: End to End Functionality of Running Bot with Connect ID(having Variable) and verify its values in raw data tab

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: Running of Bot with Connect ID (having Variable) and verifying its values in the Raw Data tab
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the ConnectId Variable folder
    And the User clicks on the Bot1
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be Executed Successfully
    And the User clicks on the Bot1
    When the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate all the value present in Raw Data 0 Tab
    When the User clicks on the Bot2
    And click On Properties Section
    And click on Run Button
    Then Bot2 Script Should Be Executed Successfully
    When the User clicks on the Bot2
    And the User clicks on Raw data 1 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate all the value present in Raw Data 1 Tab

  @Prod
  Scenario: Running of Bot with Connect ID (having Variable) and verifying its values in the Raw Data tab
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the ConnectId Variable folder
    And the User clicks on the Bot1
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be Executed Successfully
    And the User clicks on the Bot1
    When the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate All the value present in Raw Data 0 Tab
    When the User clicks on the Bot2
    And click On Properties Section
    And click on Run Button
    Then Bot2 Script Should Be Executed Successfully
    When the User clicks on the Bot2
    And the User clicks on Raw data 1 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate All the value present in Raw Data 1 Tab
