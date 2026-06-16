const path = require("path");
const reporter = require("cucumber-html-reporter");

const currentDateTime = new Date().toLocaleString();

const testEnv = process.env.ENV || "STAGING";

const jsonFileName = process.argv[2] || "cucumber-report.json";
const htmlFileName = process.argv[3] || "cucumber-report.html";

const jsonFilePath = path.join(process.cwd(), "test-results", jsonFileName);
const htmlFilePath = path.join(process.cwd(), "test-results", htmlFileName);

const options = {
  theme: "bootstrap",
  jsonFile: jsonFilePath,
  output: htmlFilePath,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    Project: "Readibots",
    "App Version": "1.0.0",
    Cycle: "Regression",
    Browser: "Chrome",
    "Test Environment": testEnv,
    Parallel: "Scenarios",
    Platform: "Ubuntu 24LTS",
    Executed: "GitHub Cloud",
    "Report Generated": currentDateTime,
  },
  failedSummaryReport: false,
  brandTitle: "Readibots Test Automation Report",
  name: "Automation Results",
};

reporter.generate(options);
