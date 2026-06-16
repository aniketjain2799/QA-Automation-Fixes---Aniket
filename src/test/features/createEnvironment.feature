Feature: Create New Environment

  Background: 
    Given User Already Logged In.

  @Regression @Prod
  Scenario: New Environment should be Created
    Given User is on Home Page
    When User right click on the Environments button
    And click on New button
    And click on succesor Environment botton
    And Enter the "<new Environment>" Name
    Then User click on Create button and New Environment got created