Feature: End to End Flow Of ReadiMessage with Old and New Service bot Code with Proxy Flow

  Background:
    Given User Already Logged In.

  @Regression @Proxy
  Scenario: End to End Flow Of ReadiMessage with OldFirst Service bot Code with Proxy Flow should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageOldCode Folder
    Then the User can click on the RbQueueOld Bot
    And click On Run button
    Then User can validate that Bot_RbQueueMessage script executed Successfully
    When the User click on the Queue_RbQueueMessage
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Regression @Proxy
  Scenario: End to End Flow Of ReadiMessage with OldSecond Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageOldCodeSecond Folder
    Then the User can click on the RbQueueOld Bot Second
    And click On Run button
    Then User can validate that Bot_RbQueueMessage script executed Successfully
    When the User click on the Queue_RbQueueMessage Second
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage Second
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Regression @Proxy
  Scenario: End to End Flow Of ReadiMessage with NewFirst Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageNewFirstCode Folder
    Then the User can click on the NewFirst Bot
    And click On Run button
    Then User can validate that Bot script executed Successfully
    When the User click on the NewFirst Queue
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors12
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Regression @Proxy
  Scenario: End to End Flow Of ReadiMessage with NewSecond Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageNewSecondCode Folder
    Then the User can click on the NewSecond Bot
    And click On Run button
    Then User can validate that BotS script executed Successfully
    When the User click on the NewSecond QueueS
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors12
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Prod @PProxy
  Scenario: End to End Flow Of ReadiMessage with OldFirst Service bot Code with Proxy Flow should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageOldCode Folder
    Then the User can click on the RbQueueOld Bot
    And click On Run button
    Then User can validate that Bot_RbQueueMessage script executed Successfully
    When the User click on the Queue_RbQueueMessage
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Prod @PProxy
  Scenario: End to End Flow Of ReadiMessage with OldSecond Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageOldCodeSecond Folder
    Then the User can click on the RbQueueOld Bot Second
    And click On Run button
    Then User can validate that Bot_RbQueueMessage script executed Successfully
    When the User click on the Queue_RbQueueMessage Second
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage Second
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Prod @PProxy
  Scenario: End to End Flow Of ReadiMessage with NewFirst Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageNewFirstCode Folder
    Then the User can click on the NewFirst Bot
    And click On Run button
    Then User can validate that Bot script executed Successfully
    When the User click on the NewFirst Queue
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors12
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Prod @PProxy
  Scenario: End to End Flow Of ReadiMessage with NewSecond Service bot Code should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBQueueMessageProxy Folder
    And the User clicks on the RBQueueMessageNewSecondCode Folder
    Then the User can click on the NewSecond Bot
    And click On Run button
    Then User can validate that BotS script executed Successfully
    When the User click on the NewSecond QueueS
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script with No errors12
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5