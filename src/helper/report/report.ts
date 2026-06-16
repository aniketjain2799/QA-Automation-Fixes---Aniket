const report = require("multiple-cucumber-html-reporter");

function convertUTCToIST(utcTime) {
    return new Date(utcTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

const currentTimeUTC = new Date();
const currentTimeIST = convertUTCToIST(currentTimeUTC);

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Readibots Automation Report",
    pageTitle: "Automation Report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "121",
        },
        device: "Achal's - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
        dateGenerated: currentTimeIST
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Readibots" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke" },
            { label: "Report Generated (IST)", value: currentTimeIST }
        ],
    },
});
