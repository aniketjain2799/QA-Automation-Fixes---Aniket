Feature: End to End Flow Of Command Builder Script

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ReadPart should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User click on Bot1
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When the User click on Bot1
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User will be able to store the knowledge of the total number of rows present
    When the User clicks on Bot1ReadNew
    And click On Properties Section
    And click on Run Button
    Then Bot1ReadNew script Should Be executed Successfully
    When the User clicks on Bot1ReadNew
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that Bot1ReadNew total number of rows present with Bot1 total number of rows present
    When the User clicks on Bot1ReadOld
    And click On Properties Section
    And click on Run Button
    Then Bot1ReadOld script Should Be executed Successfully
    When the User clicks on Bot1ReadOld
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that Bot1ReadOld total number of rows present with Bot1 total number of rows present

  @Regression
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ExecutePart should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on Bot1ExecuteOld
    And click On Properties Section
    And click on Run Button
    Then the Bot1ExecuteOld script should be executed successfully, and the Run ID should be stored
    When the User click on Bot1
    And the User clicks on properties section
    Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteOld Run ID
    When the User clicks on Bot1ExecuteGet
    And click On Properties Section
    And click on Run Button
    Then the Bot1ExecuteGet script should be executed successfully, and the Run ID should be stored
    When the User click on Bot1
    And the User clicks on properties section
    Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteGet Run ID
    When the User clicks on Bot1ExecutePostForm
    And click On Properties Section
    And click on Run Button
    Then the Bot1ExecutePostForm script should be executed successfully, and the Run ID should be stored
    When the User click on Bot1
    And the User clicks on properties section
    Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecutePostForm Run ID

  @Regression
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ReadibotsJobRetrieveData MenuValueSelection Post+Json should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
    And the User click on BotParam under the MenuValue Selection Folder
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
    And the User Fill The command builder form with respective values for RESTAPI_Retrieve_Powershell
    And click on copy command button
    Then the User should be able to Paste the script in the Monaco editor, Run the script, and Validate that it executes successfully with no errors
    When click on Run Button
    Then the RestApiExecutPostQuery script should be executed successfully, and the Run ID should be stored
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on properties section
    Then the Menu BotParam script should be executed successfully, and the Worker-created ID should be captured and matched with the MenuExecuteOld Run ID  Also validate the all the data types are coming or not
    And the User refresh the Page
    When the User click on BotParam under the MenuValue Selection Folder
    And the User clicks on Raw data 0 tab
    Then the User can validate that all the data types are coming or not in Raw Data0 Tab
    When click On DashBoard Section
    And click On Properties Section
    And the User clicks on the Secrets tab
    And click on Delete icon
    Then the Secret key should be Deleted

  @Regression
  Scenario: End to End Flow Of Command Builder Sending data into Queue should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
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

  @Regression @DataTable
  Scenario: End to End Flow Of Command Builder DataTable GetQuery Part should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
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

  @Regression @DataTable
  Scenario: End to End Flow Of Command Builder DataTable PostJson Part should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
    And the User clicks on the DataTable Folder
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
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ReadPart should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    And the User click on Bot1
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When the User click on Bot1
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User will be able to store the knowledge of the total number of rows present
    When the User clicks on Bot1ReadNew
    And click On Properties Section
    And click on Run Button
    Then Bot1ReadNew script Should Be executed Successfully
    When the User clicks on Bot1ReadNew
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate that Bot1ReadNew total number of rows present with Bot1 total number of rows present
    # When the User clicks on Bot1ReadOld
    # And click On Properties Section
    # And click on Run Button
    # Then Bot1ReadOld script Should Be executed Successfully
    # When the User clicks on Bot1ReadOld
    # And the User clicks on Raw data 0 tab
    # Then the User can validate that the Raw Data 0 timestamp is New
    # Then the User can validate that Bot1ReadOld total number of rows present with Bot1 total number of rows present

  @Prod
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ExecutePart should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    # And the User clicks on Bot1ExecuteOld
    # And click On Properties Section
    # And click on Run Button
    # Then the Bot1ExecuteOld script should be executed successfully, and the Run ID should be stored
    # When the User click on Bot1
    # And the User clicks on properties section
    # Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteOld Run ID
    When the User clicks on Bot1ExecuteGet
    And click On Properties Section
    And click on Run Button
    Then the Bot1ExecuteGet script should be executed successfully, and the Run ID should be stored
    When the User click on Bot1
    And the User clicks on properties section
    Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecuteGet Run ID
    When the User clicks on Bot1ExecutePostForm
    And click On Properties Section
    And click on Run Button
    Then the Bot1ExecutePostForm script should be executed successfully, and the Run ID should be stored
    When the User click on Bot1
    And the User clicks on properties section
    Then the Bot1 script should be executed successfully, and the Worker-created ID should be captured and matched with the Bot1ExecutePostForm Run ID

  @Prod
  Scenario: End to End Flow Of Command Builder Script Retrieving Data From RESTAPI ReadibotsJobRetrieveData MenuValueSelection Post+Json should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
    And the User click on BotParam under the MenuValue Selection Folder
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
    And the User Fill The command builder form with respective values for RESTAPI_Retrieve_Powershell
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

  @Prod
  Scenario: End to End Flow Of Command Builder Sending data into Queue should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
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

  @Prod
  Scenario: End to End Flow Of Command Builder DataTable GetQuery Part should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
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

  @Prod
  Scenario: End to End Flow Of Command Builder DataTable PostJson Part should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And the User clicks on the Command Builder Folder
    And the User clicks on the MenuValue Selection Folder
    And the User clicks on the DataTable Folder
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
