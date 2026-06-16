Feature: End to End Functionality of RB File Upload

  Background:
    Given User Already Logged In.

  @Regression @DataTable
  Scenario: User should be able to Verify complete RB File Upload Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the RBFileUpload folder
    And the User clicks on the Data Table
    And click On Properties Section
    And click on Run Button and upload the file
    Then Data Table script Should Be executed Successfully
    When the User clicks on the Data Table
    And the User clicks on the Data Table Tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that the complete last row with three column values and the total row count

  @Prod
  Scenario: User should be able to Verify complete RB File Upload Functionality
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the RBFileUpload folder
    And the User clicks on the Data Table
    And click On Properties Section
    And click on Run Button and upload the file
    Then Data Table script Should Be executed Successfully
    When the User clicks on the Data Table
    And the User clicks on the Data Table Tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that the complete last row with three column values and the total row count
