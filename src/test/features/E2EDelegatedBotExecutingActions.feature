Feature: Manage RBAC for Data Table or Bot with Run Actions Configured

  Background:
    Given User navigates to the application
    And User logs in with BOTPRBAC credentials

  @Regression @DataTable
  Scenario: Run Data Table and Bot on RBAC Environment from second method
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot8080 Environment should be visible and clickable to the User
    When User clicks on the Raw Data0 tab
    And clicks on the first name row of the Bot
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080

  @Regression @Proxy @DataTable
  Scenario: Run Data Table and Bot on RBAC Environment from second method and verify the NB Bot from Proxy
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot0809 Environment should be visible and clickable to the User2
    When User clicks on the Raw Data0 tab
    And clicks on the first id row of the Bot9
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080
    And User click on Signout Button
    Then User Logged In using Admin Credentials.
    When User click on the Existing Environment Folder
    And Click on Proxy root folder
    And Click on ActionBotStep2 Folder
    And Clicks on the NB Bot
    And click On Properties section Proxy
    Then NB Bot script Should Be executed Successfully

  @Prod
  Scenario: Run Data Table and Bot on RBAC Environment from second method
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot8080 Environment should be visible and clickable to the User4
    When User clicks on the Raw Data0 tab
    And clicks on the first name row of the Bot4
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080

  @Prod @PProxy
  Scenario: Run Data Table and Bot on RBAC Environment from second method and verify the NB Bot from Proxy
    When User clicks on Hamburger menu
    Then the DataTable8080 Environment should be visible and clickable to the User
    When User clicks on the Data Table tab
    And clicks on the first name row
    And clicks on the DT icon
    And clicks on the Run button
    Then the User can validate that the script executed successfully by verifying the log and success message
    When User clicks on Hamburger menu
    Then the New Bot0809 Environment should be visible and clickable to the User
    When User clicks on the Raw Data0 tab
    And clicks on the first id row of the Bot4
    And clicks on the NB icon
    And clicks on the Run ok Button
    Then the User can validate that the script executed successfully by verifying the log and success message of the New Bot8080
    And User click on Signout Button
    Then User Logged In using Admin Credentials.
    When User click on the Existing Environment Folder4
    And Click on Proxy Proot folder
    And Click on ActionBotStep2 Folder4
    And Clicks on the NB Bot4
    And click On Properties section Proxy
    Then NB Bot script Should Be executed Successfully
