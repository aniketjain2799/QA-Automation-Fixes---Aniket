Feature: Create New Root Folder and Bot, DataTable & Queue

  Background: 
    Given User Already Logged In.

  @Regression @Prod
  Scenario: User should be able to create new folder, Bot, Queue & DataTable
    Given User is on Home Page
    When User right click on the Environments button
    And click on New button
    And click on succesor Environment botton
    And Enter the "<new Environment>" Name
    Then User click on Create button and New Environment got created
    And Right click on the newly created Environment's root folder
    And click on New and Folder
    Then New Folder should be created in the Root folder
    When User Right click on the New Folder for Bot creation
    And click on New and Bot
    Then New Bot should be created in the New folder
    When User Right click on the New Folder for Queue creation
    And click on New and Queue
    Then New Queue should be created in the New folder
    When User Right click on the New Folder for Data table creation
    And click on New and Data table
    Then New Data table should be created in the New folder
    When User Right click on the New Folder for Delete the New Folder
    And click on Delete and ok
    Then New Folder should be get Deleted