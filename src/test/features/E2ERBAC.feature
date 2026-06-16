Feature: RBAC Delegate Access End to End Flow

  Background:
    Given User Already Logged In.

  @Regression @DataTable
  Scenario: Admin User should be able to provide RBAC Delegate Access
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And click on RBAC Folder
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email address box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Assignee User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with RBAC user credentials
    When User clicks on hamburger menu
    Then RBAC Environment should be visible and clickable to User
    When User clicks on the RBAC Data table
    And click on Properties Section
    And click On Run Button
    Then RBAC Data table script should be executed Successfully
    When User clicks on the RBAC Data table In Properties Section
    Then User can validate Two table rows are added and the one UserPrincipalName
    When User clicks on RBAC data table Bot
    And click on Properties Section
    And click On run Button
    Then RBAC data table Bot script should be executed Successfully
    When User clicks on Raw Data-0
    Then User can validate that total Row count Should be 3 and One of the UserPrincipalName should be NewName
    When User clicks on Raw Data-1
    Then User can validate that total Row count Should be 2 and One row should be removed which UserPrincipalName is NewName
    When User clicks on Raw Data-2
    Then User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and firstName should be Adele
    When User clicks on the RBAC Data table
    And User clicks on the RBAC Data table In Properties Section
    Then User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and also validate that First and second row UserPrincipalName

  @Prod
  Scenario: Admin User should be able to provide RBAC Delegate Access
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And click on RBAC Folder
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email address box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Assignee User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with RBAC user credentials
    When User clicks on hamburger menu
    Then RBAC Environment should be visible and clickable to User
    When User clicks on the RBAC Data table
    And click on Properties Section
    And click On Run Button
    Then RBAC Data table script should be executed Successfully
    When User clicks on the RBAC Data table In Properties Section
    Then User can validate Two table rows are added and the one UserPrincipalName
    When User clicks on RBAC data table Bot
    And click on Properties Section
    And click On run Button
    Then RBAC data table Bot script should be executed Successfully
    When User clicks on Raw Data-0
    Then User can validate that total Row count Should be 3 and One of the UserPrincipalName should be NewName
    When User clicks on Raw Data-1
    Then User can validate that total Row count Should be 2 and One row should be removed which UserPrincipalName is NewName
    When User clicks on Raw Data-2
    Then User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and firstName should be Adele
    When User clicks on the RBAC Data table
    And User clicks on the RBAC Data table In Properties Section
    Then User can validate that total Row count Should be 2 also that The title should be Interstellar and Director name should be CristopherNolan and Composser name should be HansZimmer and also validate that First and second row UserPrincipalName