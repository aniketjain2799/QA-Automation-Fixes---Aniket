Feature: End to End Functionality of Add Connector From Library With All Three Methods

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Add connnector from Install from Library Functionality
    When the User click on Plus Icon
    And click on Add from Library
    And click on Install from library
    And select the value from creator dropdown
    And select the value from Product vendor dropdown
    And select the value from Product dropdown
    And the User click on Retrieve and configure
    Then the new connector should be created
    When the User click on delete Icon
    And click on continue
    Then connector should be Deleted

  @ConnectorUI
  Scenario: User should be able to Add connnector from Install from Clone Existing Functionality
    When the User click on Plus Icon
    And click on Add from Library
    And click on Clone Existing
    And select the value from connector object dropdown
    And select the value
    And the User click on clone and configure
    Then the new connector should be created and user can verify this
    When the User click on delete Icon
    And click on continue
    Then connector should be Deleted

  @ConnectorUI
  Scenario: User should be able to Add connnector from the Existing Connector file Functionality
    When the User click on Plus Icon
    And click on Add from Library
    And click on Form file
    And Upload the exising connector file
    And the User click on Import and configure
    Then the new connector should be created and user can Verify this
    When the User click on Cross Icon
    And the User select the checkbox
    # And the User click on delete Icon
    # And click on continue
    # Then connector should be Deleted
