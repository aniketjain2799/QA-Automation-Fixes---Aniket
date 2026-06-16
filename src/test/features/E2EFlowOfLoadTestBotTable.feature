Feature: End to End Flow Of Load Test Bot Table

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: End to End Flow Of Load Test Bot Table should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the LoadTestBotTable Folder
    And the User click on MainTable
    And click On the table
    Then the User can store the current Raw Count
    When the user click on the New Bot
    And click On Properties Section
    And click on Run Button
    Then New Bot Script Should Be executed Successfully
    When the User click on MainTable
    And click On the table
    Then the User can validate that previous raw count should be incresed by 10 items

  @Prod
  Scenario: End to End Flow Of Load Test Bot Table should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the LoadTestBotTable Folder
    And the User click on MainTable
    And click On the table
    Then the User can store the current Raw Count
    When the user click on the New Bot
    And click On Properties Section
    And click on Run Button
    Then New Bot Script Should Be executed Successfully
    When the User click on MainTable
    And click On the table
    Then the User can validate that previous raw count should be incresed by 10 items