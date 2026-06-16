Feature: End to End Flow Of ReadiMessage with Old and New Service bot Code with RBAC Flow

  Background:
    Given User navigates to the application
    And User logs in with BOTPRBAC credentials

  @Regression
  Scenario: End to End Flow Of ReadiMessage with OldFirst Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User
    And the User clicks on the RBQueueMessageOldCode Folder
    Then the User can click on the RbQueueOld Bot
    And click On Run button
    Then User can validate that Bot_RbQueueMessage1 script executed Successfully
    When the User click on the Queue_RbQueueMessage
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script1 with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Regression
  Scenario: End to End Flow Of ReadiMessage with OldSecond Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User
    And the User clicks on the RBQueueMessageOldCodeSecond Folder
    Then the User can click on the RbQueueOld Bot Second
    And click On Run button
    Then User can validate that Bot_RbQueueMessage1 script executed Successfully
    When the User click on the Queue_RbQueueMessage Second
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script1 with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage Second
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Regression
  Scenario: End to End Flow Of ReadiMessage with NewFirst Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User
    And the User clicks on the RBQueueMessageNewFirstCode Folder
    Then the User can click on the NewFirst Bot
    And click On Run button
    Then User can validate that Bot script1 executed Successfully
    When the User click on the NewFirst Queue
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script11 with No errors
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Regression
  Scenario: End to End Flow Of ReadiMessage with NewSecond Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User
    And the User clicks on the RBQueueMessageNewSecondCode Folder
    Then the User can click on the NewSecond Bot
    And click On Run button
    Then User can validate that BotS script1 executed Successfully
    When the User click on the NewSecond QueueS
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script11 with No errors
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Prod
  Scenario: End to End Flow Of ReadiMessage with OldFirst Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User4
    And the User clicks on the RBQueueMessageOldCode Folder
    Then the User can click on the RbQueueOld Bot
    And click On Run button
    Then User can validate that Bot_RbQueueMessage1 script executed Successfully
    When the User click on the Queue_RbQueueMessage
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script1 with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Prod
  Scenario: End to End Flow Of ReadiMessage with OldSecond Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User4
    And the User clicks on the RBQueueMessageOldCodeSecond Folder
    Then the User can click on the RbQueueOld Bot Second
    And click On Run button
    Then User can validate that Bot_RbQueueMessage1 script executed Successfully
    When the User click on the Queue_RbQueueMessage Second
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script1 with No errors
    When the User click on the Service Bot
    When the User click on the Queue_RbQueueMessage Second
    And the User click on the Items tab
    Then the User can validate the total raw count should be 0

  @Prod
  Scenario: End to End Flow Of ReadiMessage with NewFirst Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User4
    And the User clicks on the RBQueueMessageNewFirstCode Folder
    Then the User can click on the NewFirst Bot
    And click On Run button
    Then User can validate that Bot script1 executed Successfully
    When the User click on the NewFirst Queue
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script11 with No errors
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5

  @Prod
  Scenario: End to End Flow Of ReadiMessage with NewSecond Service bot Code with RBAC Flow should be Completed
    When User clicks on Hamburger Menu
    Then RBQueueMessage Environment should be visible and clickable to User4
    And the User clicks on the RBQueueMessageNewSecondCode Folder
    Then the User can click on the NewSecond Bot
    And click On Run button
    Then User can validate that BotS script1 executed Successfully
    When the User click on the NewSecond QueueS
    When the User click on the Service Bot
    And the User click on DashBoard Section
    And the User click on Properties Section
    Then the User can validate the Service Bot script11 with No errors
    When the User click on the Service Bot
    And the User click on the Raw Data0
    Then the User can validate the total raw count should be 5
