Feature: End to End Functionality of Data Flow Rules Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Data Flow Rules Validation Functionality
    When the User click on Plus Icon
    And click on Add from Library
    And click on Install from library
    And select the value from creator dropdown
    And select the value from Product vendor dropdown
    And select the value from Product dropdown
    And the User click on Retrieve and configure
    Then the new connector should be created
    When the user clicks on the Schema tab
    And the user clicks on the Classes section
    When Expand the classes section
    And the User clicks on the User class
    And User first clears the value of Display Name
    And the user clicks on the check icon to save the class
    Then User can validate this text "Display Name field is invalid"
    When the User clicks on the OK button
    Then the user can validate this text "Display Name field is required"
    When the User sends the value "User" again in the Display Name box
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    Then the user can validate the copy icon is clickable
    When the User clicks on Json Icon2
    Then the User can validate the import fields From Json Schema3
    When the User click on close Icon
    And the User expands the User class
    And the User expands the Rules Option
    And the User clicks on the DataFlow Option
    And clicks on the Atlas class dropdown
    And selects the Option "User" from the dropdown
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user should see that Action should be "Merge" and RefName Action should be "User"
    When the User click on close Icon
    And the User clicks on the Action Dropdown
    And selects the value1 "Block"
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user should see that Action should be "Block" and RefName Action should be "User"
    When the User click on close Icon
    And the User clicks on the Action Dropdown
    And selects the value1 "Pass Through"
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user should see that Action should be "Pass" and RefName Action should be "User"
    Then the user validates the Extension checkbox values Enabled should be "true" and Dynamic should be "false"
    When the User click on close Icon
    And the User clicks on checkbox2 to check it
    And the User clicks on checkbox1 to uncheck it
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user validates the Extension checkbox values Enabled should be "false" and Dynamic should be "true"
    When the User click on close Icon
    And the User clicks on Plus Icon
    And the User enters the Automation name
    And clicks the keyboard enter button to save it
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user validates the name value should be Automation
    When the User click on close Icon
    And the user clicks the Automation Rule
    And the user clears the name box
    And the user clicks on save icon
    Then the user can validate the message "Name is required"
    When the user enters the name "Automation" in the Name field
    And the user sends the value "AutomationSuite" in description box
    And the user clicks properties dropdown
    And the User selects the first value
    And the user clicks properties dropdown
    And the User selects the second value
    And the user clicks properties dropdown
    And the User selects the third value
    And the user clicks properties dropdown
    And the User selects the fourth value
    And the User checks that checkbox should be enabled if not, check it
    Then save the Inbound page
    When the User clicks on script icon
    And switches the toggle to Draft mode
    And writes the script in Monaco editor like "Automation suite"
    And clicks on publish icon
    And clicks on continue button
    And clicks on the enabled checkbox
    And clicks on the right icon to save the script
    And the user clicks on the check icon to save the Class
    When the User clicks on Json Icon2
    Then the user validates the Script should be saved
    When the User click on close Icon
    And the user clicks on object matching checkbox
    When the User clicks on delete icon of Rule
    And the user clicks on the check icon to save the class
    When the User clicks on Json Icon2
    Then the user validates that rule name should not be visible
    When the User click on close Icon
    When the User click on delete Icon1
    And click on continue
    Then connector should be Deleted