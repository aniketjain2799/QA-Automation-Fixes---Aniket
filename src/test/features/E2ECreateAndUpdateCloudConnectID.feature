Feature: Create And Update Cloud ConnectID

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: End to End Flow Of Create And Update Cloud ConnectID Test should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Proxy Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the user should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When Click on Proxy root folder
    And click on ConnectId Test Folder
    And User click on Bot
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then user can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot script should be executed Successfully
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    And the user click on newly created ConnectId
    Then the user can update the Newly created connectID
    And the user click on Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Regression @Proxy
  Scenario: End to End Flow Of Cloud connectId proxy execution should be working Fine
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When User click on Root Folder
    And click on ConnectID_Cases Folder
    And User click on Bot1
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then User can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot1 script should be executed Successfully

  @Regression @Proxy
  Scenario: End to End Flow Of Window connectId proxy execution should be working Fine
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User Should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When User click on Root Folder
    And click on ConnectID_Cases Folder
    And User click on Bot2
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then User Can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot2 script should be executed Successfully

  @Regression
  Scenario: Verify End-to-End Flow of Updating and Validating an Existing Cloud Connect ID
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should Be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    And the user click on newly Created ConnectId
    Then the User can update the Newly created connectID
    And the User click on Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Regression
  Scenario: Verify End-to-End Flow of Updating and Validating an Existing Windows Connect ID
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should Be Able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    And the user Click on newly Created ConnectId
    Then the User can update the Newly Created connectID
    And the User click On Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Regression
  Scenario: End-to-End Flow Assign Multiple Connect IDs to a Bot and Validate Runtime Selection
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    When User click on Root Folder
    And click on ConnectID_Cases Folder
    And User click on Bot3
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And Click On Run Button1
    Then Bot3 script should be executed Successfully

  @Prod
  Scenario: End to End Flow Of Create And Update Cloud ConnectID Test should be Completed
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing PGolbal Proxy Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the user should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When Click on Proxy Proot folder
    And click on ConnectId Test Folder
    And User click on Bot4
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then user can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot script should be executed Successfully
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    And the user click on newly created ConnectId
    Then the user can update the Newly created connectID
    And the user click on Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Prod @PProxy
  Scenario: End to End Flow Of Cloud connectId proxy execution should be working Fine
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When User click on PRoot Folder
    And click on ConnectID_Cases Folder
    And User click on Bot1
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then User can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot1 script should be executed Successfully

  @Prod @PProxy
  Scenario: End to End Flow Of Window connectId proxy execution should be working Fine
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User Should be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    When User click on PRoot Folder
    And click on ConnectID_Cases Folder
    And User click on Bot2
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And click on Use this ConnectIds
    Then User Can able to assign the connect ID to that Bot
    And click On Run button
    Then Bot2 script should be executed Successfully

  @Prod
  Scenario: Verify End-to-End Flow of Updating and Validating an Existing Cloud Connect ID
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should Be able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    And the user click on newly Created ConnectId
    Then the User can update the Newly created connectID
    And the User click on Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Prod
  Scenario: Verify End-to-End Flow of Updating and Validating an Existing Windows Connect ID
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    And the user clicks on the Setting menu
    And the user clicks on Key Vault
    Then the User should Be Able to create a new Connect ID by filling out all the required details And the user should validate the successful creation of the Connect ID
    And the user Click on newly Created ConnectId
    Then the User can update the Newly Created connectID
    And the User click On Updated ConnectId
    Then the user can delete the the newly created ConnectID

  @Prod
  Scenario: End-to-End Flow Assign Multiple Connect IDs to a Bot and Validate Runtime Selection
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Golbal Environment
    When User click on PRoot Folder
    And click on ConnectID_Cases Folder
    And User click on Bot3
    And click on Properties section
    And the User clicks on the Credentials tab of the properties section
    And Click On Run Button1
    Then Bot3 script should be executed Successfully
