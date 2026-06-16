Feature: End to End Flow of Environment

  Background:
    Given User Already Logged In.

  @Regression @Prod @DataTable
  Scenario: End to End Flow Of Environment should be Completed
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
    And User click on the Service Bot
    And Sent the data from JSON file to Service Bot Properties Section
    And click on Run button
    Then The data should store in the monaco editor
    When User click on the New Bot
    And Sent the data from JSON file to New Bot Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number

  @Regression @Prod @DataTable
  Scenario: End to End Flow Of Environment flow with AddRB And GetRB shouldbe Completed in MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And Check if folder already present or not
    And the User right clicks on the root folder of MyWorkspace
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
    And User click on the Service Bot
    And Sent the Data from JSON file to Service Bot Properties Section
    And click on Run button
    Then The data should store in the monaco editor
    When User click on the New Bot
    And Sent the data from JSON file to New Bot Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number
    When User Right click on the New Folder for Deletion
    Then the User clicks on the Delete Button so folder should be Deleted

  @Regression @DataTable
  Scenario: End to End Flow Of Environment flow with AddRB And GetRB from Dynamic User shouldbe Completed in MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And Check if folder already present or not
    And the User right clicks on the root folder of MyWorkspace
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
    And User click on the Service Bot
    And Sent the Data from JSON file to Service Bot Properties Section
    And click on Run button
    Then The data should store in the monaco editor
    When User click on the New Bot
    And Sent the data from JSON file to New Bot Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number
    When User click on the New Folder
    And User click on Delegate Access
    Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Developer User Role
    And User click on Signout Button
    Given User Already Logged In From Microsoft Account
    When the user clicks on hamburger menu
    And User click on the New FolderL
    When User click on the Data table
    And Sent the data from JSON file to Properties Section
    And click on Table Run Button
    Then Datatable script should be executed Successfully
    When User click on the Queue
    When User click on the New BotI2
    And Sent the data from JSON file to New Bot Properties Section
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number


  @Prod
  Scenario: End to End Flow Of Environment flow with AddRB And GetRB from Dynamic User shouldbe Completed in MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And Check if folder already present or not
    And the User right clicks on the root folder of MyWorkspace
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
    And User click on the Service Bot
    And Sent the Data from JSON file to Service Bot Properties Section
    And click on Run button
    Then The data should store in the monaco editor
    When User click on the New Bot
    And Sent the data from JSON file to New Bot Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number
    When User click on the New Folder
    And User click on Delegate Access
    Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Developer User Role
    And User click on Signout Button
    Given User Already Logged In From Microsoft Account
    When the user clicks on hamburger menu
    And User click on the New FolderP
    When User click on the Data table
    And Sent the data from JSON file to Properties Section
    And click on Table Run Button
    Then Datatable script should be executed Successfully
    When User click on the Queue
    When User click on the New BotI2
    And Sent the data from JSON file to New Bot Properties Section
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the Service Bot
    And click Show execution log
    Then success messeage of Service bot should be visible
    When User click on the Data table
    And click on Store Table
    Then User can validate the total 11 entries in the table as well as the Phone number
