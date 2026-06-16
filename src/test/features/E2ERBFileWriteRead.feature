Feature: End to End Functionality of RBFile Write Read

  Background:
    Given User Already Logged In.

  @Regression @Proxy
  Scenario: End-to-End Process of Writing and Transferring svchost Content Using Proxy From Local File to Blob Storage and Back to Local File via Write-RbFile
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBFileReadWrite folder
    And the User clicks on the Step1 Bot
    And click On Properties Section
    And click on Run Button
    Then Step1 Bot Script Should Be executed Successfully with ConnectId
    When the User clicks on the Step2 Bot
    And click On Properties Section
    And click on Run Button
    Then Step2 Bot Script Should Be executed Successfully with ConnectId
    When the User clicks on the Step3 Bot
    And click On Properties Section
    And click on Run Button
    Then Step3 Bot Script Should Be executed Successfully with ConnectId and PS7

  @PProxy @Prod
  Scenario: End-to-End Process of Writing and Transferring svchost Content Using Proxy From Local File to Blob Storage and Back to Local File via Write-RbFile
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBFileReadWrite folder
    And the User clicks on the Step1 Bot
    And click On Properties Section
    And click on Run Button
    Then Step1 Bot Script Should Be executed Successfully with ConnectId
    When the User clicks on the Step2 Bot
    And click On Properties Section
    And click on Run Button
    Then Step2 Bot Script Should Be executed Successfully with ConnectId
    When the User clicks on the Step3 Bot
    And click On Properties Section
    And click on Run Button
    Then Step3 Bot Script Should Be executed Successfully with ConnectId and PS7