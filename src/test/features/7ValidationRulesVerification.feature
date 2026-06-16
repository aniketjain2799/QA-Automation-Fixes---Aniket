Feature: End to End Functionality of Validation Rules Verification

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Rules Verification Functionality
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
    And the User clicks on Configuration Tab
    And the User clicks on Allowed Validation Rules
    And the User sends three values to the Allowed box one by one, pressing Enter after each
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User enables the Allowed Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    And the User clicks on the dropdown
    Then the User selects a single value from the dropdown
    And the User change the genaral info setting to Multiple data set1
    And the User clicks on Allowed Validation Rules
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User clicks on the Save checkbox of the Schema
    Then the User selects multiple values from the dropdown
    When the User clicks on Disallowed Validation Rules
    And the User sends one value to the Disallowed box by pressing Enter
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User enables the Disallowed Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    Then the User sends two values to the Disallowed box one by one by pressing Enter, where the second value is disallowed
    Then an error icon should be visible to the User
    And the User enables the Disallowed Validation Rule checkbox
    And the User enables the Allowed Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    When the User clicks on Format Validation Rules
    And the User sends one value to the Regex box by pressing Enter
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User enables the Allowed Validation Rule checkbox
    And the User enables the Format Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    Then the User sends two values to the Format box one by one by pressing Enter, where the second value is of mix of letters and numbers
    Then an error icon should be visible to the User
    And the User click on Delete Icon
    And click on continue
    Then connector should be Deleted

  @ConnectorUI
  Scenario: User should be able to Validate Rules Verification Functionality Part Two
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
    And the User clicks on Configuration Tab
    When the User clicks on String Validation Rules
    And the User sends three values one by one to the Minimum, Maximum, and Restricted input boxes
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User enables the String Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    Then the User sends three values to the input box one by one by pressing Enter: "acha", "A", and "achal", and validates when the error icon should appear
    Then an error icon should be visible to the User
    Then the "Numeric" Validation Rule tab should not be clickable
    And the User click on Delete Icon
    And click on continue
    Then connector should be Deleted

  @ConnectorUI
  Scenario: User should be able to Validate Rules Verification Functionality Part Three
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
    And the User clicks on Configuration Tab
    When the User clicks on the dropdown1
    And the User selects the "numeric" option
    When the User clicks on Numeric Validation Rules and clears the Maximum value field and enters 5554
    And the User clicks on the Save checkbox under Allowed Validation Rules
    And the User enables the Numeric Validation Rule checkbox
    And the User clicks on the Save checkbox of the Schema
    Then the User sends two values to the input box one by one by pressing Enter: "455" and "5555", and validates when the error icon should appear
    Then the "String" Validation Rule tab should not be clickable
    And the User click on Delete Icon
    And click on continue
    Then connector should be Deleted