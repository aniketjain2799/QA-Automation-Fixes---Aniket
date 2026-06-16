Feature: End to End Functionality of Creation of Class in Connector

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Create Class in a Connector
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
    And the user verifies that the checkbox is clickable
    And the user clears the Name input and enters the username
    And the user clears the Display Name input and enters the display name
    And the user clicks on the icon dropdown
    And selects the person option
    And clicks again on the Classes section
    Then the user should see the message "Your unsaved changes will be discarded." and clicks on the "Cancel" button
    When the user clicks on the save icon
    Then the user should See the message "updated"
    And clicks on the main connector save icon
    Then the user should see the message "Connector Updated Successfully"
    Then the user can validate the copy icon is clickable
    When the User clicks on Json Icon2
    Then the User can validate the import fields from Json Schema2
    When the User click on close Icon
    And the User clicks on delete icon
    And the User clicks on continue
    Then the connnector class should be Deleted with this message "updated"
    And the User click on delete Icon
    And click on continue
    Then connector should be Deleted