Feature: Execute Table and Bot in All the Workspaces

  Background:
    Given User Already Logged In.

  @Regression @Prod @DataTable
  Scenario: User should be able to Execute The Table in the Environmemt
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
    When User click on the Data table
    And Sent the data from JSON file to Properties Section
    And click on Run button
    Then Datatable script should be executed Successfully
    When User Right click on the New Folder for Delete the New Folder
    And click on Delete and ok
    Then New Folder should be get Deleted

  @Regression @Prod @DataTable
  Scenario: User should be able to Initialize The Data Table in the MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And User Right click on the DataTableTest Folder for Data table creation
    And click on New and Data table
    Then New Data table should be created in the New folder
    When User click on the Data table
    And Sent the data from JSON file To Properties Section
    And click on Run button
    Then Datatable script should be executed Successfully
    When User click on the Data table For Verification
    Then User can validate that total Row count Should be 2 also that The First Names should be Adele and Nestor
    When User Right click on the DataTable for Delete the DataTable
    And click on Delete and Ok
    Then DataTable should be get Deleted

  @Regression @Prod
  Scenario: User should be able to Initialize The Bot in the MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And User Right click on the NewBotTest Folder for NewBot creation
    And click on New and Bot
    Then New Bot should be created in the New folder
    When User clicks On The New Bot MW
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User Right click On the NewBot For Delete the Bot
    And click on Delete and Ok
    Then Bot should be get Deleted

  @Regression @DataTable
  Scenario: User should be able to Initialize The Data Table in the Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace
    And User Right click on the DataTableTest Folder for Data table creation
    And click on New and Data Table
    Then New Data table should be created in the New folder
    When User click on the Data table
    And Sent the data from JSON file To Properties Section
    And click on Run button
    Then Datatable script should be executed Successfully
    When User click on the Data table For Verification
    Then User can validate that total Row count Should be 2 also that The First Names should be Adele and Nestor
    When User Right click on the DataTable for Delete the DataTable
    And click on Delete and Ok
    Then DataTable should be get Deleted

  @Regression
  Scenario: User should be able to Initialize The Bot in the Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the root folder of Achal Team Workspace
    And User Right click on the NewBotTest Folder for NewBot creation
    And click on New and Bot
    Then New Bot should be created in the New folder
    When User clicks On The New Bot
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And clicks On Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User Right Click On the NewBot For Delete The Bot
    And click on Delete and Ok
    Then Bot should be get Deleted

  @Prod
  Scenario: User should be able to Initialize The Data Table in the Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the Root folder of Achal Team Workspace
    And User Right click on the DataTableTest Folder for Data table creation
    And click on New and Data Table
    Then New Data table should be created in the New folder
    When User click on the Data table
    And Sent the data from JSON file To Properties Section
    And click on Run button
    Then Datatable script should be executed Successfully
    When User click on the Data table For Verification
    Then User can validate that total Row count Should be 2 also that The First Names should be Adele and Nestor
    When User Right click on the DataTable for Delete the DataTable
    And click on Delete and Ok
    Then DataTable should be get Deleted

  @Prod
  Scenario: User should be able to Initialize The Bot in the Team Workspaces
    Given User is on Home Page
    When the User clicks on the Team Workspaces
    And the User clicks on the Achal Team Workspace
    And the User clicks on the Root folder of Achal Team Workspace
    And User Right click on the NewBotTest Folder for NewBot creation
    And click on New and Bot
    Then New Bot should be created in the New folder
    When User clicks On The New Bot
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And clicks On Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User Right Click On the NewBot For Delete The Bot
    And click on Delete and Ok
    Then Bot should be get Deleted