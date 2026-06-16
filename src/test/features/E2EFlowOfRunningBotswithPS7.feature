Feature: End to End Flow Of Running Bot with PS7

  Background:
    Given User Already Logged In.

  @Regression @Proxy @Ps7 @DataTable
  Scenario: End to End Flow Of Running Bot with PS7 should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on Root Folder
    And click on Table Test Folder
    And click on Bots For Table Test Folder
    When User clicks on StartBot
    And click on Properties section
    And click On Run button
    Then User can validate that Start Bot script executed Successfully with PS7 Log
    When User click on StartJobsObject Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that StartJobsObject Bot script executed Successfully with PS7 Log
    When User click on StartJobsCsv Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that SStartJobsCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithObject Bot
    And click on Properties section
    Then User can validate that UpdateWithObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithForceObject Bot
    And click on Properties section
    Then User can validate that UpdateWithForceObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithoutForceObject Bot
    And click on Properties section
    Then User can validate that UpdateWithoutForceObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithForceCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithForceCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithoutForceCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully with PS7 Log
    When User click on RemoveFromObject Bot
    And click on Properties section
    Then User can validate that RemoveFromObject Bot script executed Successfully with PS7 Log
    When User click on RemoveFromCsv Bot
    And click on Properties section
    Then User can validate that RemoveFromCsv Bot script executed Successfully with PS7 Log
    When User click on Get Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that Get Bot script executed Successfully with PS7 Log
    When User click on AddWithObject Bot
    And click on Properties section
    Then User can validate that AddWithObject Bot script executed Successfully with PS7 Log
    When User click on AddWithCsv Bot
    And click on Properties section
    Then User can validate that AddWithCsv Bot script executed Successfully with PS7 Log
    When User click on InitializedWithObjectData Table
    And click on Properties section
    Then User can validate that InitializedWithObjectData Table script executed Successfully with PS7 Log
    When User click on InitializedWithCsvData Table
    And click on Properties section
    Then User can validate that InitializedWithCsvData Table script executed Successfully with PS7 Log

  @Prod
  Scenario: End to End Flow Of Running Bot with PS7 should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And User click on PRoot Folder
    And click on Table Test Folder
    And click on Bots For Table Test Folder
    When User clicks on StartBot
    And click on Properties section
    And click On Run button
    Then User can validate that Start Bot script executed Successfully with PS7 Log
    When User click on StartJobsObject Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that StartJobsObject Bot script executed Successfully with PS7 Log
    When User click on StartJobsCsv Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that SStartJobsCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithObject Bot
    And click on Properties section
    Then User can validate that UpdateWithObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithForceObject Bot
    And click on Properties section
    Then User can validate that UpdateWithForceObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithoutForceObject Bot
    And click on Properties section
    Then User can validate that UpdateWithoutForceObject Bot script executed Successfully with PS7 Log
    When User click on UpdateWithCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithForceCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithForceCsv Bot script executed Successfully with PS7 Log
    When User click on UpdateWithoutForceCsv Bot
    And click on Properties section
    Then User can validate that UpdateWithoutForceCsv Bot script executed Successfully with PS7 Log
    When User click on RemoveFromObject Bot
    And click on Properties section
    Then User can validate that RemoveFromObject Bot script executed Successfully with PS7 Log
    When User click on RemoveFromCsv Bot
    And click on Properties section
    Then User can validate that RemoveFromCsv Bot script executed Successfully with PS7 Log
    When User click on Get Bot
    And click on Properties section
    And click on Show execution log
    Then User can validate that Get Bot script executed Successfully with PS7 Log
    When User click on AddWithObject Bot
    And click on Properties section
    Then User can validate that AddWithObject Bot script executed Successfully with PS7 Log
    When User click on AddWithCsv Bot
    And click on Properties section
    Then User can validate that AddWithCsv Bot script executed Successfully with PS7 Log
    When User click on InitializedWithObjectData Table
    And click on Properties section
    Then User can validate that InitializedWithObjectData Table script executed Successfully with PS7 Log
    When User click on InitializedWithCsvData Table
    And click on Properties section
    Then User can validate that InitializedWithCsvData Table script executed Successfully with PS7 Log
