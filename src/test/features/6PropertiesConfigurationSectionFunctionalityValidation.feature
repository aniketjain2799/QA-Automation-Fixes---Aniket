Feature: End to End Functionality of Properties Configuration Section Functionality Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Properties Configuration Section Functionality
    When the User click on Plus Icon
    And click on Create New
    And the User click on general tab
    And the User fill all the necessary deatils of general tab Except Display Name
    And the User click on Save Icon
    Then the User should verify that the display name is mandatory and click ok
    When the User fill the require display field
    And the User click on Save Icon
    Then the User should be able to create a new Connector
    When the user clicks on the Schema tab
    And And the User clicks on the arrow icon of Classes
    And the user clicks on the Self Class section
    And the User clicks on the arrow icon of Self Class
    And the User clicks on the properties Section
    And click on the plus icon
    And clear the Properties Name and sent a new Name in it
    And clear the Properties DisplayName and sent a new DisplayName in it
    And the User clicks on check Icon
    And the User clicks on the arrow icon of Properties
    And the User clicks on SQLQuries1
    And the User clicks on Properties
    And the User clicks on SQLQuries2
    Then the User can validate the all Details Related to General Info
    When the User clicks on check Icon
    And the User clicks on Properties
    And click on the plus icon
    And the User clicks on check Icon
    And the User clicks on Configuration Tab
    Then the User can verify that two box are visible to user first one SQLQuries and second one New Properties 1
    Then the User can sent one string into SQLQuries Box
    When the User clicks on SQLQuries2
    And the User change the genaral info setting to Multiple data set
    And the User clicks on Check icon
    Then the user can verify that Multiple data set can be sent to SQLQuries box by presing the enter butto before sending the second value
    And the User click on Delete Icon
    And click on continue
    Then connector should be Deleted