Feature: End to End Functionality of Global Methods Validation

  Background:
    Given User Already Logged In to Connector UI.

  @ConnectorUI
  Scenario: User should be able to Validate Global Methods Validation Functionality
    When the User click on Plus Icon
    And click on Add from Library
    And click on Install from library
    And select the value from creator dropdown
    And select the value from Product vendor dropdown
    And select the value from Product dropdown
    And the User click on Retrieve and configure
    Then the new connector should be created
    When the user clicks on the Methods tab
    And the User clicks on the Methods
    And Expand the Methods
    When the User click on connect method
    Then the user can verify that framework name and display name should be Connect
    When the User clicks on Json Icon2
    Then the user validates the Script Block should be have script inside it
    When the User click on close Icon
    Then the User can check that Disconnect, OnBoard, OffBoard methods sholud be visible
    And the User clicks on the Methods
    And the User click on Plus icon to create a new method
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
    And the User clicks on Json Icon2
    Then the User should see the imported field from JSON Schema Schema5
    Then the user can verify that framework name and display name should be "NewMethod1", "New Method 1"
    When the User click on close Icon