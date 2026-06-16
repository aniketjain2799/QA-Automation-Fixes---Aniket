Feature: End to End Functionality of RBAC Role Based Access Permission Verification

  Background:
    Given User navigates to the application
    And User logs in with BOTPRBAC credentials

  @Regression @Prod
  Scenario: The user should be able to successfully verify the functionality of RBAC role-based Owner access permissions.
    When User clicks on Hamburger Menu
    Then RBACRolesOwner Environment should be visible and clickable to User
    When the User clicks on Bot
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User Verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User Verifies all the important fields in the Credentials tab section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User Verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User Verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User Verifies all the important fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User Verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User Verifies all the important fields in the Execution tab section
    And the User clicks on Raw data 0 tab
    Then User can validate that Total Row count Should be 20 also that The First Name and id
    When the User Clicks on the Dashboard
    Then the User should see that the Dashboard Contains a Productivity Value entity
    When the User clicks On the Log View
    Then the User should see that the Show All button and a start date entity Are visible
    Then the User can validate the Execution mode and Status
    When the User Clicks on the Dashboard
    And click On Properties Section
    And click On Command Builder option Tasks
    Then the User Fill The Command Builder Form with respective values for RESTAPI_Retrieve_Powershell

  @Regression @Prod
  Scenario: The user should be able to successfully verify the functionality of RBAC role-based Developer access permissions.
    When User clicks on Hamburger Menu
    Then RBACRolesDeveloper Environment should be visible and clickable to User
    When the User clicks on Bot
    And click On Properties Section
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    Then the User is able to click on the properties section of the Bot
    When the User clicks on the General tab of the properties section
    Then the User Verifies all the important fields in the General tab section
    When the User clicks on the Credentials tab of the properties section
    Then the User verifies all the Important fields in the Credentials tab section
    # When the User clicks on the Schedule tab of the properties section
    # Then the User Verifies all the important fields in the Schedule tab section
    When the User clicks on the Retention tab of the properties section
    Then the User Verifies all the important fields in the Retention tab section "Months"
    When the User clicks on the Permissions tab of the properties section
    Then the User Verifies all the important Fields in the Permissions tab section
    When the User clicks on the Metrics tab of the properties section
    Then the User Verifies all the important fields in the Metrics tab section "Test123"
    When the User clicks on the Execution tab of the properties section
    Then the User Verifies all the important fields in the Execution tab section
    And the User clicks on Raw data 0 tab
    Then User can validate that Total Row count Should be 20 also that The First Name and id
    When the User Clicks on the Dashboard
    Then the User should see that the Dashboard Contains a Productivity Value entity
    When the User clicks On the Log View
    Then the User should see that the Show All button and a start date entity Are visible
    Then the User can validate the Execution mode and Status
    When the User Clicks on the Dashboard
    And click On Properties Section
    And click On Command Builder option Tasks
    Then the User Fill The Command Builder Form with respective values for RESTAPI_Retrieve_Powershell

  @Regression @Prod
  Scenario: The user should be able to successfully verify the functionality of RBAC role-based Action User access permissions.
    When User clicks on Hamburger Menu
    Then RBACRolesActionUser Environment should be visible and clickable to User
    When the User clicks on Bot
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    When the User clicks on Raw data 0 tab
    Then User verifies that Dashboard is NOT visible
    Then User verifies that Properties Section is NOT visible
    Then User verifies that Credentials tab is NOT visible
    Then User verifies that Permissions tab is NOT visible

  @Regression @Prod
  Scenario: The user should be able to successfully verify the functionality of RBAC role-based Power User access permissions.
    When User clicks on Hamburger Menu
    Then RBACRolesActionUser Environment should be visible and clickable to User
    When the User clicks on Bot
    And click on Run Button
    Then BotSuccess script Should Be executed Successfully
    When the User clicks on Raw data 0 tab
    Then User verifies that Dashboard is NOT visible
    Then User verifies that Properties Section is NOT visible
    Then User verifies that Credentials tab is NOT visible
    Then User verifies that Permissions tab is NOT visible

  @Regression @Prod
  Scenario: The user should be able to successfully verify the functionality of RBAC role-based Reviewer User access permissions.
    When User clicks on Hamburger Menu
    Then RBACRolesReviewerUser Environment should be visible and clickable to User
    When the User clicks on Bot
    When the User clicks On the Log View
    Then User verifies that Dashboard is NOT visible
    Then User verifies that Properties Section is NOT visible
    Then User verifies that Credentials tab is NOT visible
    Then User verifies that Permissions tab is NOT visible
    When the User click on Run Button
    Then the User can validate that text which tells that user does not have any permission to run Bot
