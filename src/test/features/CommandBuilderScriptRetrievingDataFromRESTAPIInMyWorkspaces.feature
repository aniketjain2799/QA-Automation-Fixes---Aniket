Feature: End to End Flow Of Command Builder Script in MyWorkspace

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: End to End Flow Of Command Builder Script flow should be Completed in MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the MenuValue Selection Folder
    And the User click on Bot1 under the MenuValue Selection Folder MW
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When the User click on Bot1 under the MenuValue Selection Folder MW
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User Will be able to store the knowledge of the total number of rows present
    When the User clicks on the readiBotsJobRetrieveData Folder
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command build form with respective values MW
    And click on copy command button
    Then the User should be able to paste the script in the Monaco editor, run the script, and validate that it executes successfully with no errors
    When click on Run Button
    Then readiBotsJobRetrieveData Bot script Should Be executed Successfully
    When the User clicks on readiBotsJobRetrieveDataBot
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that readiBotsJobRetrieveData Bot total number of rows present with bot1 total number of rows present
    When the User clicks on readiBotsJobExecute
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User Fill the command Builder form with respective values
    And click on copy command button
    Then the User should be able to paste the Execute script in the Monaco editor, run the script, and validate that it executes successfully with no errors
    When click on Run Button
    Then readiBotsJobExecute Bot script Should Be executed Successfully, and the Run ID should be stored
    When the User click on Bot1 under the MenuValue Selection Folder MW
    And the User clicks on properties section
    Then the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID
    When the User click on Bot1 under the MenuValue Selection Folder MW
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And the User clicks on the Eye icon for SecretValue
    Then the secret key should be Extracted successfully
    When the User clicks on the RESTAPI_Retrieve_Powershell
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell MW
    And click on copy command button
    Then the User should be able to paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then RESTAPI_Retrieve_Powershell Bot script Should Be executed Successfully
    When the User clicks on the RESTAPI_Retrieve_Powershell
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User Will be able to store the knowledge of the total number of rows present in RESTAPIRetrievePowershell
    When the User click on Bot1 under the MenuValue Selection Folder MW
    And the User clicks on Raw data 0 tab
    Then the User can validate that RESTAPI_Retrieve_Powershell Bot total number of rows present with bot1 total number of rows present
    When the User clicks on RestApiExecuteGetQuery
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command Builder Form with respective values for RestApiExecuteGetQuery
    And click on copy command button
    Then the User should be able to paste the Script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then RestApiExecuteGetQuery Bot script Should Be executed Successfully, and the Run ID should be stored
    When the User click on Bot1 under the MenuValue Selection Folder MW
    And the User clicks on properties section
    Then the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID 23
    When the User click on BotParam under the MenuValue Selection Folder
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And the User clicks on Plus icon for generating new Secret key
    Then the User can be able to generate new Secret Key by filling the form
    When the User clicks on the Eye icon for SecretValue
    Then the secret key should be Extracted Successfully
    When the User clicks on the RestApiExecutPostQuery
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User Fill The Command Builder form with respective values for RESTAPI_Retrieve_Powershell
    And click on copy command button
    Then the User should be able to Paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then the RestApiExecutPostQuery script should be executed successfully, and the Run ID should be stored
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on properties section
    Then the Menu BotParam script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID  Also validate the all the data types are coming or not
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on Raw data 0 tab
    Then the User can validate that all the data types are coming or not in Raw Data0 Tab
    When click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And click on Delete icon
    Then the Secret key should be Deleted
    And the User clicks on the SendingDataIntoQueue Folder
    And the User clicks on the BotForQueuePostJson Bot
    And click On Properties Section
    And click on Run Button
    Then BotForQueuePostJson Bot script Should Be executed Successfully
    When the User clicks on the Queue
    And click on the Service Bot
    And the User clicks on properties section
    Then the Service Bot script Should Be executed Successfully
    And the User refresh the Page
    When click on the Service Bot
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that all the data Types are coming or not in Raw Data0 Tab
    And the User clicks on the DataTable Folder
    And the User clicks on the BotForDataTableGetQuery Bot
    And click On Properties Section
    And click on Run Button
    Then the BotForDataTableGetQuery script should be executed successfully, and the Run ID should be stored
    When the User click on Table1
    And the User clicks on properties section
    Then the Table1 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableGetQuery Run ID
    When the User click on Table1
    And the User clicks on Data table tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate the phone number
    When the User clicks on the DataTable Folder
    And the User clicks on the BotForDataTableExecutePostJson Bot
    And click On Properties Section
    And click on Run Button
    Then the BotForDataTableExecutePostJson script should be executed successfully, and the Run ID should be stored
    When the User click on Table2
    And the User clicks on properties section
    Then the Table2 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableExecutePostJson Run ID
    When the User click on Table2
    And the User clicks on Data table tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate the ID Address and Name

  @Prod
  Scenario: End to End Flow Of Command Builder Script flow should be Completed in MyWorkspace
    Given User is on Home Page
    When the User clicks on the MyWorkspace
    And the User clicks on the root folder of MyWorkspace
    And the User clicks on the MenuValue Selection Folder
    And the User click on Bot1 under the MenuValue Selection Folder MW4
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When the User click on Bot1 under the MenuValue Selection Folder MW4
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User Will be able to store the knowledge of the total number of rows present
    When the User clicks on the readiBotsJobRetrieveData Folder
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command build form with respective values MW
    And click on copy command button
    Then the User should be able to paste the script in the Monaco editor, run the script, and validate that it executes successfully with no errors
    When click on Run Button
    Then readiBotsJobRetrieveData Bot script Should Be executed Successfully
    When the User clicks on readiBotsJobRetrieveDataBot
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that readiBotsJobRetrieveData Bot total number of rows present with bot1 total number of rows present
    When the User clicks on readiBotsJobExecute
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User Fill the command Builder form with respective values
    # And Click Ok
    And click on copy command button
    Then the User should be able to paste the Execute script in the Monaco editor, run the script, and validate that it executes successfully with no errors
    When click on Run Button
    Then readiBotsJobExecute Bot script Should Be executed Successfully, and the Run ID should be stored
    When the User click on Bot1 under the MenuValue Selection Folder MW4
    And the User clicks on properties section
    Then the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID
    When the User click on Bot1 under the MenuValue Selection Folder MW4
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And the User clicks on the Eye icon for SecretValue
    Then the secret key should be Extracted successfully
    When the User clicks on the RESTAPI_Retrieve_Powershell
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command builder form with respective values for RESTAPI_Retrieve_Powershell MW
    And click on copy command button
    Then the User should be able to paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then RESTAPI_Retrieve_Powershell Bot script Should Be executed Successfully
    When the User clicks on the RESTAPI_Retrieve_Powershell
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User Will be able to store the knowledge of the total number of rows present in RESTAPIRetrievePowershell
    When the User click on Bot1 under the MenuValue Selection Folder MW4
    And the User clicks on Raw data 0 tab
    Then the User can validate that RESTAPI_Retrieve_Powershell Bot total number of rows present with bot1 total number of rows present
    When the User clicks on RestApiExecuteGetQuery
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User fill the command Builder Form with respective values for RestApiExecuteGetQuery
    And click on copy command button
    Then the User should be able to paste the Script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then RestApiExecuteGetQuery Bot script Should Be executed Successfully, and the Run ID should be stored
    When the User click on Bot1 under the MenuValue Selection Folder MW4
    And the User clicks on properties section
    Then the Menu Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID 23
    When the User click on BotParam under the MenuValue Selection Folder
    And click On Properties Section
    And click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And the User clicks on Plus icon for generating new Secret key
    Then the User can be able to generate new Secret Key by filling the form
    When the User clicks on the Eye icon for SecretValue
    Then the secret key should be Extracted Successfully
    When the User clicks on the RestApiExecutPostQuery
    And click On DashBoard Section
    And click On Properties Section
    And click On Command Builder option Tasks
    And the User Fill The Command Builder form with respective values for RESTAPI_Retrieve_Powershell
    And click on copy command button
    Then the User should be able to Paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then the RestApiExecutPostQuery script should be executed successfully, and the Run ID should be stored
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on properties section
    Then the Menu BotParam script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID  Also validate the all the data types are coming or not
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on Raw data 0 tab
    Then the User can validate that all the data types are coming or not in Raw Data0 Tab
    When click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And click on Delete icon
    Then the Secret key should be Deleted
    And the User clicks on the SendingDataIntoQueue Folder
    And the User clicks on the BotForQueuePostJson Bot
    And click On Properties Section
    And click on Run Button
    Then BotForQueuePostJson Bot script Should Be executed Successfully
    When the User clicks on the Queue
    And click on the Service Bot
    And the User clicks on properties section
    Then the Service Bot script Should Be executed Successfully
    When click on the Service Bot
    And the User clicks on Raw data 0 tab
    And the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that all the data Types are coming or not in Raw Data0 Tab
    And the User clicks on the DataTable Folder
    And the User clicks on the BotForDataTableGetQuery Bot
    And click On Properties Section
    And click on Run Button
    Then the BotForDataTableGetQuery script should be executed successfully, and the Run ID should be stored
    When the User click on Table1
    And the User clicks on properties section
    Then the Table1 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableGetQuery Run ID
    When the User click on Table1
    And the User clicks on Data table tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate the phone number
    When the User clicks on the DataTable Folder
    And the User clicks on the BotForDataTableExecutePostJson Bot
    And click On Properties Section
    And click on Run Button
    Then the BotForDataTableExecutePostJson script should be executed successfully, and the Run ID should be stored
    When the User click on Table2
    And the User clicks on properties section
    Then the Table2 script should be executed successfully, and the Worker-created ID should be captured and matched with the BotForDataTableExecutePostJson Run ID
    When the User click on Table2
    And the User clicks on Data table tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate the ID Address and Name
