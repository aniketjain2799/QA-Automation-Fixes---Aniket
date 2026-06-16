Feature: Delegate Access Verification Test

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: User should be able to validate Owner Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User double clicks on MyWorkspace
    And User click on Existing Delegate Environment Folder
    And User click on Root Folder4
    # And User click on Delegate Root folder
    And open NewFolder2
    And check and delete existing OwnerNewBot if present
    And User Right click on the NewBotTest2 Folder for NewBot creation
    And click on New and Bot
    And rename the new Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Owner User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Owner user credentials
    When User clicks on hamburger menu
    Then NewBot should be visible and clickable to User
    And click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When the User clicks on the Dashboard
    Then the User should see that the Dashboard contains a Productivity Value entity
    When the User clicks on the Log View
    Then the User should see that the Show All button and a start date entity are visible
    When the User go to Properties Section
    Then the User can verify that all the Below tab should be Visible like General, credentials, schedule, Retention, Permissions, Parameters, Task and links, Metrics, Execution and Secrets
    When the User clicks on the properties section
    Then the Owner User can Verify the All the Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click On Delegate Root folder
    And User click On NewBotTest2 folder
    When User Right click on the NewBot for Delete The Bot
    And click on Delete And Ok

  @Regression
  Scenario: User should be able to validate Developer Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User double clicks on MyWorkspace
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder
    And User Right click on the NewBotTest3 Folder for NewBot creation
    And click on New and Bot
    And rename The new Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Dev
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Dev
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Developer User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot should be visible And Clickable to User
    And click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When the User clicks on the Dashboard
    Then the User should see that the Dashboard contains a Productivity Value entity
    When the User clicks on the Log View
    Then the User should see that the Show All button and a start date entity are visible
    When the User go to Properties Section
    Then the User can Verify that the Below tab fields should be disabled like credentials, Permissions
    When the User clicks on the properties section
    Then the Owner User can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder
    And User click On NewBotTest3 folder
    When User Right click On the NewBot for Delete The Bot
    And click on Delete And Ok

  @Regression
  Scenario: User should be able to validate Action User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder
    And User Right click on the NewBotTest4 Folder for NewBot creation
    And click on New and Bot
    And rename The New Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Action
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Action
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Action User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot should be Visible and clickable to User
    And Click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Owner User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click On Delegate Root folder
    And User click On NewBotTest4 folder
    When User Right click On the NewBot For delete The Bot
    And click on Delete And Ok

  @Regression
  Scenario: User should be able to validate Power User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder
    And User Right click on the NewBotTest5 Folder for NewBot creation
    And click on New and Bot
    And rename the New bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Power
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Power
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Power User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot4 should be Visible and clickable to User
    And Click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Owner User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click On Delegate Root folder
    And User click On NewBotTest5 folder
    When User Right Click On the NewBot For Delete the Bot
    And click on Delete And Ok

  @Regression
  Scenario: User should be able to validate Reviewer User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder
    And User Right click on the NewBotTest6 Folder for NewBot creation
    And click on New and Bot
    And Rename the New Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Reviewer
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Reviewer
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Reviewer User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot5 should be Visible and clickable to User
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Reviewer User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click On Delegate Root folder
    And User click On NewBotTest6 folder
    When User Right Click On The NewBot For Delete The Bot
    And click on Delete And Ok

  @Prod
  Scenario: User should be able to validate Owner Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And open NewFolder24
    # And check and delete existing OwnerNewBot if present
    And User Right click on the NewBotTest2 Folder for NewBot creation4
    And click on New and Bot
    And rename the new Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Owner User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Owner user credentials
    When User clicks on hamburger menu
    Then NewBot should be visible and clickable to User
    And click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When the User clicks on the Dashboard
    Then the User should see that the Dashboard contains a Productivity Value entity
    When the User clicks on the Log View
    Then the User should see that the Show All button and a start date entity are visible
    When the User go to Properties Section
    Then the User can verify that all the Below tab should be Visible like General, credentials, schedule, Retention, Permissions, Parameters, Task and links, Metrics, Execution and Secrets
    When the User clicks on the properties section
    Then the Owner User can Verify the All the Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User click On NewBotTest2 folder
    When User Right click on the NewBot for Delete The Bot
    And click on Delete And Ok
    Then Bot should Be get Deleted

  @Prod
  Scenario: User should be able to validate Developer Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User double clicks on MyWorkspace
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User Right click on the NewBotTest3 Folder for NewBot creation
    And click on New and Bot
    And rename The new Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Dev
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Dev
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Developer User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot should be visible And Clickable to User
    And click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When the User clicks on the Dashboard
    Then the User should see that the Dashboard contains a Productivity Value entity
    When the User clicks on the Log View
    Then the User should see that the Show All button and a start date entity are visible
    When the User go to Properties Section
    Then the User can Verify that the Below tab fields should be disabled like credentials, Permissions
    When the User clicks on the properties section
    Then the Owner User can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User click On NewBotTest3 folder
    When User Right click On the NewBot for Delete The Bot
    And click on Delete And Ok
    Then Bot should Be get Deleted

  @Prod
  Scenario: User should be able to validate Action User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User Right click on the NewBotTest4 Folder for NewBot creation
    And click on New and Bot
    And rename The New Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Action
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Action
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Action User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot should be Visible and clickable to User
    And Click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Owner User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User click On NewBotTest4 folder
    When User Right click On the NewBot For delete The Bot
    And click on Delete And Ok
    Then Bot should Be get Deleted

  @Prod
  Scenario: User should be able to validate Power User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User Right click on the NewBotTest5 Folder for NewBot creation
    And click on New and Bot
    And rename the New bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Power
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Power
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Power User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot4 should be Visible and clickable to User
    And Click ON Run Button
    Then NewBot script should be Executed Successfully
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Owner User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User click On NewBotTest5 folder
    When User Right Click On the NewBot For Delete the Bot
    And click on Delete And Ok
    Then Bot should Be get Deleted

  @Prod
  Scenario: User should be able to validate Reviewer User Delegate Access Verification
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User Right click on the NewBotTest6 Folder for NewBot creation
    And click on New and Bot
    And Rename the New Bot
    Then New Bot should be created in the New folder
    When User click on The New Bot Rename Reviewer
    And Sent the data from JSON file TO Properties Section
    And Enable the Run Button by on the toggle  button the check the three Checkboxes
    And click on Run button
    Then NewBot script should be executed Successfully
    When User click on the RawData0 For Verification
    Then User can validate that total Row count Should be 5 also that The First Name and id
    When User click on The New Bot Rename Reviewer
    And User click on Delegate Access
    Then Delegate Access PopUp should be open and user can add "<EmailId>" in Email Address Box
    And User click on Search Icon
    And click on Plus Icon
    Then User can select Reviewer User Role
    And User click on Signout Button
    Then User opens a new tab and logs in with Developer user credentials
    When User clicks on hamburger menu
    Then NewBot5 should be Visible and clickable to User
    When User click on The RawData0 For Verification
    Then User can validate that Total Row count Should be 5 also that The First Name and id
    When User click on The RawData0 For Verification
    Then the Reviewer User Can Verify the All The Tasks present in Properties Section
    When User click On Signout Button
    Then the Admin User login Again form the First Tab
    When User click on the Environments Button
    And User Click on Existing Delegate Environment Folder
    And User click on Delegate Root folder4
    And User click On NewBotTest6 folder
    When User Right Click On The NewBot For Delete The Bot
    And click on Delete And Ok
    Then Bot should Be get Deleted
