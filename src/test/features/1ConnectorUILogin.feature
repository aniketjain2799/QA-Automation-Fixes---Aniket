Feature: User Authentication Tests

  Background:
    Given User navigates to the CU application

  @ConnectorUI
  Scenario Outline: Validate login functionality with valid and invalid credentials
    Given User enters CU username as "<username>"
    And User clicks on the CU Continue button
    And User enters CU password as "<password>"
    When User clicks on the CU Login button
    Then CU login result should be "<result>"

    Examples:
      | username    | password    | result  |
      | validUser   | validPass   | success |
      | invalidUser | invalidPass | fail    |
