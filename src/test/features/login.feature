Feature: User Authentication tests

  Background:
    Given User navigates to the application

  @login @Regression @Prod
  Scenario Outline: Login should be success or fail
    Given User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the login button
    Then Login should be "<result>"

    Examples:
      | username    | password    | result  |
      | validUser   | validPass   | success |
      | invalidUser | invalidPass | fail    |

  @mslogin @Regression @login @Prod
  Scenario Outline: Microsoft Login should be success or fail
    Given User logs in with Microsoft credentials as "<credentialType>"

    Examples:
      | credentialType | result  |
      | MICROSOFT      | success |


