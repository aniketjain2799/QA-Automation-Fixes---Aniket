Feature: Copy Paste Environment Folder End to End Flow

  Background:
    Given User Already Logged In.

  @Regression
  Scenario: Admin User should be able to Copy Paste Environment Folder
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Copy Golbal Environment
    And User click On Root Folder
    And User Right click on LoadTestBotQueueTableParent Folder and click on Copy Button
    Then User Successfully Copy that Folder
    When User click on Existing Paste Golbal Environment
    And User Right click On Root Folder of Above Environment
    And Click on Paste Button
    Then Previous copy folder should be Paste into the Root folder of Paste Global Environment
    When The User clicks on the CopyBot within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder
    And Then navigates to the Service Bot
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder
    When User Right click On LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully
    When The User clicks on the MyWorkspace
    And Performs a right-click on the MyWorkspace Root Folder
    Then Selects the Paste option, ensuring the folder is successfully pasted
    When The User clicks on the CopyBot within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder
    And Then navigates to the Service Bot
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder
    When User Right click On LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully
    When The User clicks on Team Workspaces
    And Selects the already existing Developer Space
    And Performs a right-click on the root folder of Team Workspaces
    Then Selects the Paste option to ensure successful folder Pasting
    When The User clicks on the Main Parent folder of Team Workspaces
    When The User clicks on the CopyBot within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Service Bot of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder of Team Workspaces
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder of Team Workspaces
    When User Right click on LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button on Team Workspaces
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully

  @Prod
  Scenario: Admin User should be able to Copy Paste Environment Folder
    Given User is on Home Page
    When User click on the Environments button
    And User click on Existing Copy Golbal Environment
    And User click On Root Folder4
    And User Right click on LoadTestBotQueueTableParent Folder and click on Copy Button4
    Then User Successfully Copy that Folder
    When User click on Existing Paste Golbal Environment
    And User Right click On Root Folder of Above Environment4
    And Click on Paste Button
    Then Previous copy folder should be Paste into the Root folder of Paste Global Environment4
    When The User clicks on the CopyBot within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder
    And Then navigates to the Service Bot
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder
    When User Right click On LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully
    When The User clicks on the MyWorkspace
    And Performs a right-click on the MyWorkspace Root Folder4
    Then Selects the Paste option, ensuring the folder is successfully pasted
    When The User clicks on the CopyBot within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder
    And Then navigates to the Service Bot
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder
    When User Right click On LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully
    When The User clicks on Team Workspaces
    And Selects the already existing Developer Space4
    And Performs a right-click on the root folder of Team Workspaces4
    Then Selects the Paste option to ensure successful folder Pasting4
    When The User clicks on the Main Parent folder of Team Workspaces
    When The User clicks on the CopyBot within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyBot Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the CopyQueue within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Service Bot of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyQueue Name and confirms that the Script has been Successfully Pasted in the Service Bot
    When The User clicks on the CopyTable within the Parent Paste Folder of Team Workspaces
    And Then navigates to the Properties Section
    Then The User successfully verifies the CopyTable Name and confirms that the Script has been Successfully Pasted
    When The User clicks on the LoadTestBotQueueTableChild Folder of Team Workspaces
    Then The User can verify that CopyChildBot, CopyChildQueue, and CopyChildTable are present in this folder of Team Workspaces
    When User Right click on LoadTestBotQueueTableParentPaste Folder
    And Click on Delete and OK Button on Team Workspaces
    Then LoadTestBotQueueTableParentPaste Folder Should be Deleted Successfully
