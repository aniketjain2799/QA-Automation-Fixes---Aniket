Feature: Copy Paste Folder and Bot in same and different Environment and validate data Generation.

  Background:
    Given User Already Logged In.

  @Regression @Prod
  Scenario: Copy Paste Folder and Bot in Same Environment and validate data Generation
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Environment CopyFolderAndBot
    And User Click On Root Folder
    And User Right click on BotForCopy bot
    Then User Successfully Copy that Bot
    When User Rightclick on PasteFolderAndBot Folder
    Then Previous copy Bot should be Paste into the PasteFolderAndBot folder
    And User Right click on CopyPaste Folder
    Then User Successfully Copy That Folder
    When User Rightclick on PasteFolderAndBot Folder
    Then Previous copy Folder should be Paste into the PasteFolderAndBot folder
    When User click on BotForCopy bot
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When User click on PasteFolderAndBot Folder
    When User click on BotForCopy bot
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate Total Raw Count
    When User click on PasteFolderAndBot Folder
    When User click on BotForCopy bot4
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When User click on PasteFolderAndBot Folder
    When User click on BotForCopy bot4
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate Total Raw Count
    When User click on PasteFolderAndBot Folder
    When the User right click on the BotForCopy bot3
    And Click on delete button
    Then the BotForCopy bot should be Deleted
    When the User right click on the CopyPaste folder
    And Click on delete button1
    Then the CopyPaste folder should be Deleted

  @Regression @Prod
  Scenario: Copy Paste Folder and Bot in Different Environment and validate data Generation
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Environment CopyFolderAndBot
    And User Click On Root Folder
    And User Right click on BotForCopy bot
    Then User Successfully Copy that Bot
    When User click on PastefolderAndbot Folder
    And User rightClick On Root Folder
    Then Previous copy Bot should be Paste into the PasteFolderAndBot folder1
    And User Right click on CopyPaste Folder
    Then User Successfully Copy That Folder
    When User click on PastefolderAndbot Folder
    And User rightClick On Root Folder
    Then Previous copy Folder should be Paste into the PasteFolderAndBot folder1
    When User click on BotForCopy bot
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When User click on PastefolderAndbot Folder
    When User click on BotForCopy bot4
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate Total Raw Count
    When the User click on the CopyPaste folder
    And User click on BotForCopy bot4
    And click On Properties Section
    And click on Run Button
    Then Bot1 script Should Be executed Successfully
    When User click on PastefolderAndbot Folder
    And User click on BotForCopy bot5
    And the User clicks on Raw data 0 tab
    Then the User can validate that the Raw Data 0 timestamp is New
    Then the User can validate Total Raw Count
    When User click on PastefolderAndbot Folder
    When the User right click on the BotForCopy bot4
    And Click on delete button
    Then the BotForCopy bot should be Deleted
    When the User right click on the CopyPaste folder
    And Click on delete button1
    Then the CopyPaste folder should be Deleted