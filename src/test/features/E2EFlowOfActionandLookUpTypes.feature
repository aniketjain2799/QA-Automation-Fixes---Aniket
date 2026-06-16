Feature: ActionandLookUpTypes End to End Flow

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: Admin User should be able to verifies ActionandLookUpTypes
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And click on ActionandLookUpTypes Folder
    And User click on GetRbData Bot
    And User Selects Rawdata0
    And Clicks on a row to reveal the Action Button
    Then The user confirms the successful opening of the form
    When click On Properties section
    And The user clicks on the Tasks and Links Table
    Then The user verifies the Label AboveGrid and Associated Views
    When User Selects Rawdata0
    And Clicks on a row to reveal the Action Button
    Then User can Verify the Complete Action Bot Form
    When The User clicks on the Action Bot
    And Selects the Parameters
    And Clicks on the settings icon of RBLookupType
    Then The User validates all the configured lookup parameters of RBLookupType
    When User click on settings icon of RBMultiLookupType
    Then The User validates all the configured lookup parameters of RBMultiLookupType and Also validate Prompt Filter
    When User click on settings icon of RBSingleSelect
    Then The User validates all the Display values and Selected of RBSingleSelect
    When User click on settings icon of RBMultiSelect
    Then The User validates all the Display values and Selected Values of RBMultiSelect
    When User click on settings icon of RBMemo
    Then The User validates the number of Rows of RBMemo
    When User click on settings icon of RBPropertyList
    Then The User validates all the Display values and Selected Values of RBPropertyList
    When User click on settings icon of RBOptionPropertyList
    Then The User validates all the Display values and Selected Values of RBOptionPropertyList

  @Prod
  Scenario: Admin User should be able to verifies ActionandLookUpTypes
    Given User is on Home Page
    When User click on the Environments button
    And User double clicks on MyWorkspace
    And User click on Existing Golbal Environment
    And User click on Root Folder4
    And click on ActionandLookUpTypes Folder
    And User click on GetRbData Bot
    And User Selects Rawdata0
    And Clicks on a row to reveal the Action Button
    Then The user confirms the successful opening of the form
    When click On Properties section
    And The user clicks on the Tasks and Links Table
    Then The user verifies the Label AboveGrid and Associated Views
    When User Selects Rawdata0
    And Clicks on a row to reveal the Action Button
    Then User can Verify the Complete Action Bot Form
    When The User clicks on the Action Bot
    And Selects the Parameters
    And Clicks on the settings icon of RBLookupType
    Then The User validates all the configured lookup parameters of RBLookupType
    When User click on settings icon of RBMultiLookupType
    Then The User validates all the configured lookup parameters of RBMultiLookupType and Also validate Prompt Filter
    When User click on settings icon of RBSingleSelect
    Then The User validates all the Display values and Selected of RBSingleSelect
    When User click on settings icon of RBMultiSelect
    Then The User validates all the Display values and Selected Values of RBMultiSelect
    When User click on settings icon of RBMemo
    Then The User validates the number of Rows of RBMemo
    When User click on settings icon of RBPropertyList
    Then The User validates all the Display values and Selected Values of RBPropertyList
    When User click on settings icon of RBOptionPropertyList
    Then The User validates all the Display values and Selected Values of RBOptionPropertyList
