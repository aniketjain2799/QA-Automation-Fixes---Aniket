Feature: End to End Functionality of Class Methods Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Class Methods Validation Functionality
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
    When the User clicks on the Methods tab
    And the User expands the selected method
    And the User clicks on the Add icon
    And the User turns off the script toggle
    Then the User sends the following script to the Monaco editor:
      """
      [CmdletBinding()]
      param (
        [Parameter()]
        [ReadiCommand]
        $Command
      
      
      """
    When the User clicks on the Publish icon
    And the User clicks on Json Icon2
    Then the User should not see the imported field from JSON Schema Schema4
    When the User click on close Icon
    And the user clicks on the check icon to save the class
    Then the user should See the message "updated"
    And the User clicks on Json Icon2
    Then the User should see the imported field from JSON Schema Schema5
    When the User click on close Icon
    Then the User can validate that the Framework Name and Display Name fields are visible
    When the User clicks on the Get Method tab
    And the User clicks on Json Icon2
    Then the User can validate that the Get method framework name is visible in the JSON schema
    When the User click on close Icon
    When the User clicks on the New Method tab
    And the User clicks on Json Icon2
    Then the User can validate that the New method framework name is visible in the JSON schema
    When the User click on close Icon
    When the User clicks on the Update Method tab
    And the User clicks on Json Icon2
    Then the User can validate that the Update method framework name is visible in the JSON schema
    When the User click on close Icon
    When the User clicks on the Remove Method tab
    And the User clicks on Json Icon2
    Then the User can validate that the Remove method framework name is visible in the JSON schema
    When the User click on close Icon
    When the User click on delete Icon1
    And click on continue
    Then connector should be Deleted