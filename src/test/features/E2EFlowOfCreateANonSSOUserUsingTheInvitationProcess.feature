Feature: End to End Functionality of Create A Non SSO User Using The Invitation Process

  Background:
    Given User Already Logged In.

  @Regression @Prod
  Scenario: User should be able to create A Non SSO User Using The Invitation Process
    Given User is on Home Page
    When the User clicks on Global Settings
    And the User clicks on Teams Options
    And the User clicks on the Invitations
    And the User fill all the details and click on sent Invitation
    And the User opens Mailinator searches the mail and clicks on the link
    Then the User enter new and confirm password to create a New User and Verify the Same