Feature: End to End Functionality of Class Properties Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Class Properties Search Filters Validation Functionality
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
    When the User clicks on the Properties tab
    And the User clicks on the Add button
    And the User clears the Name input field and enters "Democheck" into it
    And the User clears the Display Name input field and enters "Demo check" into it
    Then the user clicks on the check Icon to save the class
    When the User clicks on the Search Name icon
    And the User clicks on the Contains button
    And the User enters "demo" into the Search box
    Then the User can verify that the value "Democheck" is present in the table
    When the User clears the Search box
    And the User clicks on the Search Name icon
    And the User clicks on the "Does not contain" button
    And the User enters "id" into the Search box
    Then the User can verify that the value "id" is not present in the table
    When the User clears the Search box
    And the User clicks on the Search Name icon
    And the User clicks on the "Starts with" button
    And the User enters "i" into the Search box
    Then the User can verify that the value "FirstName" is not present in the table
    When the User clears the Search box
    And the User clicks on the Search Name icon
    And the User clicks on the "Ends with" button
    And the User enters "d" into the Search box
    Then the User can verify that the value "LastName" is not present in the table
    When the User clears the Search box
    And the User clicks on the Search Name icon
    And the User clicks on the "Equals" button
    And the User enters "FirstName" into the Search box
    Then the User can verify that the value "LastName" is not present in the table
    When the User clears the Search box
    And the User clicks on the Search Name icon
    And the User clicks on the "Does not equal" button
    And the User enters "FirstName" into the Search box
    Then the User can verify that the value "FirstName" is not present in the table
    When the User click on dropdown
    And select the true option
    Then the user can validate that checkbox should be checked
    When the User click on second checkbox
    Then the user clicks on the check Icon to save the class
    When the User click on dropdown
    And selects the value false
    Then the user can validate the checkbox should not be checked
    When the User click on dropdown
    And the User click on All
    When the User clicks on the mapping dropdown
    And the User selects the "DisplayName" option from the dropdown
    Then the User can see that "DisplayName" is visible in the table
    When the User clicks on the mapping dropdown
    And the User selects the "IsLocked" option from the dropdown
    Then the User can see that "IsLocked" is visible in the table
    When the User clicks on the mapping dropdown
    And the User selects the All option from the dropdown
    When the user click on inbound dropdown
    And click on Merge option
    Then the User can validate Merge cell should be visible
    When the user click on inbound dropdown
    And click on Extend option
    Then the User can validate Extendcell should be visible
    When the user click on inbound dropdown
    And the User selects the All option from the dropdown1
    When the user click on outrbound dropdown
    And select the option Block
    Then the Block cell should be visible to user
    When the User click on delete Icon1
    And click on continue
    Then connector should be Deleted

  @ConnectorUI
  Scenario: User should be able to Validate Class Properties Main Validation Functionality
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
    When the User clicks on the Properties tab
    And the User clicks on the Add button
    And the User clears the Name input field and enters "Democheck" into it
    And the User clears the Display Name input field and enters "Demo check" into it
    Then the user clicks on the check Icon to save the class
    When the user clicks on the Down Arrow of Properties
    And the user right clicks on the property with display name "Demo check"
    And the user clicks on Remove Property
    And the user clicks on Continue
    Then the user should See the message "updated"
    When the user clicks on the property title "FirstName"
    And the user right clicks on the property label "FirstName"
    And the user clicks on Disable
    Then the first checkbox should be in an unchecked state
    When the user clicks on the second checkbox
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    When the User clicks on Json Icon2
    Then the user should see that the "Required" field is true
    When the User click on close Icon
    Then the user should see that both "Name" and "Display Name" fields contain "FirstName"
    When the User clicks on Json Icon2
    Then the user should see that "DataSet" is "Single" and "Type" is "string"
    When the User click on close Icon
    When the user clicks on the "DataSet" dropdown
    And the user selects "Multiple (array)" from the dropdown
    When the user clicks on the "DataType" dropdown
    And the user selects "object" from the dropdown
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    When the User clicks on Json Icon2
    Then the user should see that "DataSet" is "Multi" and "Type" is "object"
    When the User click on close Icon
    When the User clicks on Json Icon2
    Then the user should see that IN Action should be "Merge" and OUT Action should be "Merge"
    When the User click on close Icon
    Then the user should see that "FirstName" is visible in the dropdown
    When the user clicks on the inbound dropdown
    And selects the value "Block"
    When the user clicks on the outbound dropdown
    And selects the value "Block"
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    When the User clicks on Json Icon2
    Then the user should see that IN Action should be "Block" and OUT Action should be "Block"
    When the User click on close Icon
    When the user clicks on the inbound dropdown
    And selects the value "Extend"
    When the user clicks on the outbound dropdown
    And selects the value "Extend"
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    When the User clicks on Json Icon2
    Then the user should see that IN Action should be "Extend" and OUT Action should be "Extend"
    When the User click on close Icon
    When the user clicks on the inbound dropdown
    And selects the value "Merge"
    When the user clicks on the outbound dropdown
    And selects the value "Merge"
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    When the user clicks on the Atlas class property Dropdown
    And selects the value "Manager"
    When the User click on delete Icon1
    And click on continue
    Then connector should be Deleted