Feature: End to End Functionality of AddRBQueueBatch

  Background:
    Given User Already Logged In.

  @Regression @Prod
  Scenario: End to End Flow Of AddRBQueueBatch from Environments should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User double clicks on MyWorkspace
    And User click on Existing Golbal Environment
    And User click on Root Folder4
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Regression @Prod
  Scenario: End to End Flow Of AddRBQueueBatch from My Workspace should be Completed
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Prod
  Scenario: End to End Flow Of AddRBQueueBatch from Team Workspaces should be Completed
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And User double clicks on MyWorkspace
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace4
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Regression @Proxy
  Scenario: End to End Flow Of AddRBQueueBatch from Environments should be Completed with Connect ID and PS7 Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Proxy Environment
    And Click on Proxy root folder
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully with PS7 And ConnectID
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully with PS7 And ConnectID, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Regression @Prod
  Scenario: End to End Flow Of AddRBQueueBatch with Dynamic User from My Workspace should be Completed
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the AddRBQueueBatch folder
    And User click on Delegate Access
    Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Developer User Role
    And User click on Signout Button
    Given User Already Logged In From Microsoft Account
    When the user clicks on hamburger menu
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Prod @PProxy
  Scenario: End to End Flow Of AddRBQueueBatch from Environments should be Completed with Connect ID and PS7 Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing PGolbal Proxy Environment
    And Click on Proxy Proot folder
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully with PS7 And ConnectID
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully with PS7 And ConnectID, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue

  @Regression
  Scenario: End to End Flow Of AddRBQueueBatch from Team Workspaces should be Completed
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And User double clicks on MyWorkspace
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace
    And the User clicks on the AddRBQueueBatch folder
    And the User clicks on the Batch Bot
    And click On Properties Section
    And click on Run Button
    Then Batch Bot Script Should Be executed Successfully
    And the User clicks on the Batch Bot
    And the User clicks On the Queue
    And the User clicks on the Service Bot
    And the User clicks on properties section
    Then The Service Bot script should execute successfully, and it should also be verified that a total of 10 items are displayed
    When the User clicks On the Queue
    And the User clicks on Items
    Then the User validates the total number of items present in the Items section of the Queue
