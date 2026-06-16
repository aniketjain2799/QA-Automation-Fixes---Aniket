Feature: Run Commandlets with Dynamic Proxy User End to End Flow

  Background:
    Given User Already Logged In From Microsoft Account

  @Regression @Proxy @PProxy @Prod
  Scenario: Run Commandlets with Dynamic Proxy User should be Working as Expected
    When User clicks on Hamburger menu
    Then Commandlets to run Environment should be Visible and clickable to User
    When User clicks on the Caller Bot
    And click On Properties Section
    And click on Run Button
    Then Caller Bot script Should Be executed Successfully
    When User clicks on the New Bot
    And click On Properties Section
    And click On Show execution log
    Then User can verify that New Bot Script Should Be executed Successfully
    When the User clicks on the AddRbLogArray Bot
    And click On Properties Section
    And click on Run Button
    Then the AddRbLogArray Bot Script Should Be executed Successfully
    When the User clicks on the GetAtlas Bot
    And click On Properties Section
    And click on Run Button
    Then the GetAtlas Bot Script Should Be executed Successfully
    When the User clicks on the NewBotSimpleHTML Bot
    And click On Properties Section
    And click on Run Button
    Then the NewBotSimpleHTML Bot Script Should Be executed Successfully
    When the User clicks on the ROI Bot
    And click On Properties Section
    And click on Run Button
    Then the ROI Bot script Should Be Executed Successfully
    