Feature: End to End Flow Of Change Monitoring

  Background:
    Given User Already Logged In.

  @Regression @DataTable
  Scenario: End to End Flow Of Change Monitoring should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Change Monitoring Folder
    And the User clicks on the table
    And click On Properties Section
    And Sent the data from JSON file to properties Section
    And click on Table Run Button
    Then the Table script Should Be executed Successfully
    When the User on table tab
    Then the User can validate First name value with the value which we generate dynamically in the monaco editor
    When the User clicks on New Bot
    And click On Properties Section
    And click on Run Button
    Then New Bot Script should be executed Successfully
    When the User clicks on New Bot
    And the User clicks on View24
    And the User clicks on Arrow Icon
    Then the User can validate First name Bot value with the value which we generate dynamically in the monaco editor
    When the User clicks on ENG677 Bot
    And click On Properties Section
    And click on Run Button
    Then the ENG677 Bot script Should Be executed Successfully
    When the User clicks on ENG677 Bot
    And the User clicks on Raw Data0 tab
    Then the User can validate First name ENG777 Bot value with the value which we generate dynamically in the monaco editor

  @Prod
  Scenario: End to End Flow Of Change Monitoring should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Change Monitoring Folder
    And the User clicks on the table
    And click On Properties Section
    And Sent the data from JSON file to properties Section
    And click on Table Run Button
    Then the Table script Should Be executed Successfully
    When the User on table tab
    Then the User can validate First name value with the value which we generate dynamically in the monaco editor
    When the User clicks on New Bot
    And click On Properties Section
    And click on Run Button
    Then New Bot Script should be executed Successfully
    When the User clicks on New Bot
    And the User clicks on View24
    And the User clicks on Arrow Icon
    Then the User can validate First name Bot value with the value which we generate dynamically in the monaco editor
    When the User clicks on ENG677 Bot
    And click On Properties Section
    And click on Run Button
    Then the ENG677 Bot script Should Be executed Successfully
    When the User clicks on ENG677 Bot
    And the User clicks on Raw Data0 tab
    Then the User can validate First name ENG777 Bot value with the value which we generate dynamically in the monaco editor
