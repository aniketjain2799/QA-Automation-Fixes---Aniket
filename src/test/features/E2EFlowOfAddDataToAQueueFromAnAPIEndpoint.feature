Feature: End to End Flow Of Add Data To A Queue From An API End point

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: Complete End to End Flow of Adding Data to a Queue from an API Endpoint Successfully
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RestApis Folder
    And the User clicks On The Queue
    And the User user hit the api Endpoint two times and validate the responce with ResponceCode and QueueStatus
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    When the User clicks On The Queue
    And the User clicks on the Service bot
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User validates that the first raw value the second raw value and the total number of records are correct

  @Regression
  Scenario: Complete End to End Flow of Adding Data to a Queue from an API Endpoint Successfully from MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the RestApis Folder
    And the User clicks On The Queue
    And the User hit the new API Endpoint two times and validate the response with ResponseCode and QueueStatus
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    When the User clicks On The Queue
    And the User clicks on the Service bot
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User validates that the first raw value the second raw value and the total number of records are correct

  @Prod
  Scenario: Complete End to End Flow of Adding Data to a Queue from an API Endpoint Successfully from MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the RestApis Folder
    And the User clicks On The Queue
    And the User hit the New API Endpoint two times and validate the response with ResponseCode and QueueStatus
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    When the User clicks On The Queue
    And the User clicks on the Service bot
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User validates that the first raw value the second raw value and the total number of records are correct

  @Prod
  Scenario: Complete End to End Flow of Adding Data to a Queue from an API Endpoint Successfully
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RestApis Folder
    And the User clicks On The Queue
    And the User hit the api Endpoint two times and validate the responce with ResponceCode and QueueStatus
    When the User clicks on the Service bot
    And Click On Properties Section
    Then Service Bot script should be executed Successfully
    When the User clicks On The Queue
    And the User clicks on the Service bot
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User validates that the first raw value the second raw value and the total number of records are correct
