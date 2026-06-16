Feature: End to End Functionality of Self Class And Properties Part Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Self Class And Properties Part
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
    And the user clicks on the Classes section
    And the user clicks on the plus icon
    And the user clears the Name input and enters the username
    And the user clears the Display Name input and enters the display name
    And the user clicks on the icon dropdown
    And selects the person option
    When the user clicks on the save icon
    Then the user should See the message "updated"
    And clicks on the main connector save icon
    Then the user should see the message "Connector Updated Successfully"
    When the user clicks on the Schema tab
    And the user clicks on the Classes section
    And the user clicks on the Self Class section
    And the User click on InheritsFrom Dropdown
    And select the first value
    And click on check icon and continue button to save this
    Then the user should See the message "updated"
    Then the user can validate the copy icon is clickable
    When the User clicks on Json Icon2
    Then the User can validate the import fields From Json Schema2
    When the User click on close Icon
    And the User clicks on the arrow icon of Self Class
    And the User clicks on the properties Section
    And click on the plus icon
    And the User click on discard Icon
    Then the User can validate discarded Text
    When click on the plus icon
    And the User clicks on check Icon
    When click on the plus icon
    And click on the plus icon
    Then the User can validate the properties name cannot be same
    When the User click on discard Icon
    And clicks onn the Json Icon
    Then the User can validate the json schema fields
    When the User click on close Icon
    And the User click on delete Icon
    And click on continue
    Then connector should be Deleted