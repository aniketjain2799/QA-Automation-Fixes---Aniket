Feature: End to End Functionality of Queue Array Object Verification

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: User should be able to verify Queue Single Array Object Verification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the QueueArrayObjectVerification Folder
    And the User clicks on the QueueSingle Folder
    And the User user hit the api Endpoint one times and validate the responce with ResponceCode and QueueName
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully and it can validate READIQItemSingle

  @Regression
  Scenario: User should be able to verify Queue Multiple Array Object Verification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the QueueArrayObjectVerification Folder
    And the User clicks on the QueueMultiple Folder
    And the User user hit the api Endpoint one times and validate the responce with ResponceCode and QueueName1
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully and it can validate READIQItemMultiple

  @Prod
  Scenario: User should be able to verify Queue Single Array Object Verification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the QueueArrayObjectVerification Folder
    And the User clicks on the QueueSingle Folder
    And the User hits the CloudBridge API endpoint and validates the response
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully and it can validate READIQItemSingle

  @Prod
  Scenario: User should be able to verify Queue Multiple Array Object Verification Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the QueueArrayObjectVerification Folder
    And the User clicks on the QueueMultiple Folder
    And the User hits the CloudBridge API endpoint and validates the multiple queue response
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully and it can validate READIQItemMultiple