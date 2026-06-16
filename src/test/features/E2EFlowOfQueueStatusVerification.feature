Feature: End to End Functionality of Queue Status Verification

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: User should be able to verify Queue Status Verification Disabled Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then Bot script Should Be executed Successfully
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab

  @Prod
  Scenario: User should be able to verify Queue Status Verification Disabled Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then Bot script Should Be executed Successfully
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab

  @Regression
  Scenario: User should be able to verify Queue Status Verification Deny Sending Items into Queue Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder2
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then Bot script Should Be executed Successfully2
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab

  @Prod
  Scenario: User should be able to verify Queue Status Verification Deny Sending Items into Queue Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder2
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then Bot script Should Be executed Successfully2
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab

  @Regression
  Scenario: User should be able to verify Queue Status Verification Deny Dequeing Items From Queue Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder3
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab1
    When the user click on Overview Tab
    And click on Queue status dropdown
    And select Active queue status
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    And the user click on table
    Then the User can validate the total raws in Table Items Tab
    When User click on Queue
    When the user click on Overview Tab
    And click on Queue status dropdown
    Then select queue status DenyDequeingItemsFromQueue

  @Prod
  Scenario: User should be able to verify Queue Status Verification Deny Dequeing Items From Queue Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the QueueStatusVerification Folder
    And the User clicks on the LoadTestBotQueueTable Folder3
    And User Click On Bot
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    When User click on Queue
    And clicks on the Items Tab
    Then the User can validate the total raws in Items Tab1
    When the user click on Overview Tab
    And click on Queue status dropdown
    And select Active queue status
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    And the user click on table
    Then the User can validate the total raws in Table Items Tab
    When User click on Queue
    When the user click on Overview Tab
    And click on Queue status dropdown
    Then select queue status DenyDequeingItemsFromQueue