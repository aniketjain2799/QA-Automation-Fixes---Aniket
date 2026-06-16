## Getting Started

### Setup:

1. Clone the project to your local machine.
2. Open the project in VS Code.
3. Run `npm install` to install all dependencies.
4. Run `npx playwright install` to install the necessary browsers.
5. Use `npm run test` to execute the tests
6. To run a specific test, update the paths in your configuration:

```
  paths: [
            "src/test/features/featurename.feature"
         ]
```

7. Use tags to run a specific or collection of specs

```
npm run test --TAGS="@test or @add"
SECRET_KEY= npm run test:staging --TAGS="@Regression"
```

### Folder structure

1. `pages` -> Contains all page objects (UI screens).
2. `features` -> Write your feature files here.
3. `steps` -> Place your step definitions here.
4. `hooks.ts` -> Browser setup and teardown logic.
5. `pageFixture.ts` -> Simplifies sharing page objects across steps.
6. `env` -> Manages multiple environment configurations.
7. `types` -> Provides environment code suggestions.
8. `report` -> Generates test reports.
9. `cucumber.js` -> Centralized configuration for the test framework.
10. `package.json` -> Contains project dependencies and scripts.
11. `auth` -> Stores authentication state.
12. `util` -> Handles reading test data from JSON and logging.



### Other Things

Prerequisites for Running the E2E Automation Suite
Before running the E2E automation suite, complete the following setup steps:

1. Environments > DelegateAutomationTest
  Delete all bots in each of the five folders.

2. My Workspace > ROOT
  Delete all bots in:
  DataTableTest
  NewBotTest

3. Team Workspace > Achal Singh (Developer) > ROOT
  Delete all bots in:
  DataTableTest
  NewBotTest

4. Environments > GlobalEnvSecondAutomation
  Delete any Connect ID named "Achal" if it exists.

5. Environments > GlobalEnvAutomation > CommandBuilder > MenuValueSelection_PS7_Proxy
  Under Bot Param -> Secrets, delete the secret key named "Random."

6. Proxy Name should always be "VMAutomationProxy" and should always be assign in GlobalEnvSecondAutomation Folder for both Stg and Prod.