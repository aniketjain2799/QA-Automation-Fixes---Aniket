Feature: End to End Functionality of Create Connector and validate the General tab and Json Schema and Save Functionality

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Create Connector and validate the General tab and Json Schema and Save Functionality
    When the User click on Plus Icon
    And click on Create New
    And the User click on general tab
    And the User fill all the necessary deatils of general tab Except Display Name
    And the User click on Save Icon
    Then the User should verify that the display name is mandatory and click ok
    When the User fill the require display field
    And the User click on Save Icon
    Then the User should be able to create a new Connector
    When the User clicks on Json Icon
    Then the User can validate the import fields from Json Schema
    When the User click on close Icon
    And the User click on delete Icon
    And click on continue
    Then connector should be Deleted