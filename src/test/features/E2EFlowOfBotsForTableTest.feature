# Feature: End to End Flow Of Bots For Table Test

#   Background:
#     Given User Already Logged In.

#   @Regression @DataTable
#   Scenario: End to End Flow Of Bots For Table Test should be Completed
#     Given User is on Home Page
#     When User click on the Existing Environment folder
#     And Click on root folder
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Regression @Proxy
#   Scenario: End to End Flow Of Bots For Table Proxy Test should be Completed
#     Given User is on Home Page
#     When User click on the Environments button
#     And User click on Existing Golbal Proxy Environment
#     And Click on Proxy root folder
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then StartBot script should be executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Regression
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with Dynamic User
#     Given User is on Home Page
#     When User click on the Existing Environment folder
#     And Click on root folder
#     And click on Table Test Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     Given User Already Logged In From Microsoft Account
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Regression
#   Scenario: End to End Flow Of Bots For Table Test should be Completed from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Regression
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with Dynamic User from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     Given User Already Logged In From Microsoft Account
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Regression
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with RBAC User from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test1 Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp should be Open And user can add "<EmailId>" in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     And User logs in with BOTPRBAC credentials
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL1
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod
#   Scenario: End to End Flow Of Bots For Table Test should be Completed
#     Given User is on Home Page
#     When User click on the Existing Environment folder
#     And Click on root folder4
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     # And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod @PProxy
#   Scenario: End to End Flow Of Bots For Table Proxy Test should be Completed
#     Given User is on Home Page
#     When User click on the Environments button
#     And User click on Existing PGolbal Proxy Environment
#     And Click on Proxy Proot folder
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then StartBot script should be executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with Dynamic User
#     Given User is on Home Page
#     When User click on the Existing Environment folder
#     And Click on root folder4
#     And click on Table Test Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     Given User Already Logged In From Microsoft Account
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod
#   Scenario: End to End Flow Of Bots For Table Test should be Completed from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test Folder
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with Dynamic User from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp Should be open and user can add EmailId in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     Given User Already Logged In From Microsoft Account
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer

#   @Prod
#   Scenario: End to End Flow Of Bots For Table Test should be Completed with RBAC User from MyWorkspace
#     Given User is on Home Page
#     When the User clicks on the MyWorkspace
#     And the User clicks on the root folder of MyWorkspace
#     And click on Table Test1 Folder
#     And User click on Delegate Access
#     And click on Revoke Access Icon If Present
#     Then Delegate Access PopUp should be Open And user can add "<EmailId>" in Email Address Box
#     And User click on Search Icon
#     And click on Plus Icon
#     Then User can select Developer User Role
#     And User click on Signout Button
#     And User logs in with BOTPRBAC credentials
#     When the user clicks on hamburger menu
#     And click on Table Test FolderL1
#     And click on Bots For Table Test Folder
#     When User clicks on StartBot
#     And click on Properties section
#     And click On Run button
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsObject Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that StartJobsObject Bot script executed Successfully
#     When User click on StartJobsCsv Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that SStartJobsCsv Bot script executed Successfully
#     When User click on UpdateWithObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithObject Bot script executed Successfully
#     When User click on UpdateWithForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceObject Bot script executed Successfully
#     When User click on UpdateWithoutForceObject Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceObject Bot script executed Successfully
#     When User click on UpdateWithCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithCsv Bot script executed Successfully
#     When User click on UpdateWithForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithForceCsv Bot script executed Successfully
#     When User click on UpdateWithoutForceCsv Bot
#     And click on Properties section
#     Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully
#     When User click on RemoveFromObject Bot
#     And click on Properties section
#     Then User can validate that RemoveFromObject Bot script executed Successfully
#     When User click on RemoveFromCsv Bot
#     And click on Properties section
#     Then User can validate that RemoveFromCsv Bot script executed Successfully
#     When User click on Get Bot
#     And click on Properties section
#     And click on Show execution log
#     Then User can validate that Get Bot script executed Successfully
#     When User click on AddWithObject Bot
#     And click on Properties section
#     Then User can validate that AddWithObject Bot script executed Successfully
#     When User click on AddWithCsv Bot
#     And click on Properties section
#     Then User can validate that AddWithCsv Bot script executed Successfully
#     When User click on InitializedWithObjectData Table
#     And click on Properties section
#     Then User can validate that InitializedWithObjectData Table script executed Successfully
#     When User click on InitializedWithCsvData Table
#     And click on Properties section
#     Then User can validate that InitializedWithCsvData Table script executed Successfully
#     When User click on StartJobCsv Bot
#     And Go to RawData-1 Details
#     Then User can validate that 5k rows inserted Successfully also that Last row is having number 4999
#     And Go to RawData-3 Details
#     Then User can validate that 250 more rows are inserted to previous one Successfully so count should be 5250 also that Last row is having number 5249 and Title should be ScaryMovie
#     And Go to RawData-5 Details
#     Then User can validate that 10 rows are removed to previous one Successfully so count should be 5240 also that The UserPrincipalName column should be There
#     And Go to RawData-7 Details
#     Then User can validate that total Row count should be 5240 also that The Last row title should be ScaryMovie and UserPrincipalName should be NewName[5249]
#     And Go to RawData-9 Details
#     Then User can validate that total Row count should be 5490 also Validate the Last Entries on Five Different Pages where its Updated, UserPrincipalName, Title and Director
#     And Go to RawData-11 Details
#     Then User can validate that total Row count should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithCsvData Table
#     And click on InitializedWithCsvDataHeader section
#     Then User can validate that total Row count Should be 5490 also that The Last row title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and UserPrincipleName should be DemoName[5499]
#     When User click on InitializedWithObjectData Table
#     And click on InitializedWithObjectDataHeader section
#     Then User can validate that total Row count Should be 10490 also that The Last row Composer name should be HansZimmer
