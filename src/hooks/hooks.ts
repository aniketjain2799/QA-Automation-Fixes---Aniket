import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;
let scenarioStartTime: number;

setDefaultTimeout(1200 * 1000);

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before({ tags: "not @auth" }, async function ({ pickle }) {
    scenarioStartTime = performance.now();
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        permissions: ["clipboard-read", "clipboard-write"],
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    fixture.context = context;
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await context.newPage();
    await page.setViewportSize({ width: 1355, height: 629 });
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});


Before({ tags: '@auth' }, async function ({ pickle }) {
    scenarioStartTime = performance.now();
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        permissions: ["clipboard-read"],
        storageState: getStorageState(pickle.name),
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await context.newPage();
    // await page.setViewportSize({ width: 1355, height: 629 });
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});

After(async function ({ pickle, result }) {
    let videoPath: string;
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;

    const scenarioEndTime = performance.now();
    const scenarioExecutionTime = scenarioEndTime - scenarioStartTime;
    console.log(`Scenario '${pickle.name}' execution time : ${scenarioExecutionTime} ms`);

    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
        videoPath = await fixture.page.video().path();
    }
    await context.tracing.stop({ path: path });
    await fixture.page.close();
    await context.close();
    if (result?.status == Status.FAILED) {
        await this.attach(
            img, "image/png"
        );
        await this.attach(
            fs.readFileSync(videoPath),
            'video/webm'
        );
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');

    }

});

AfterAll(async function () {
    await browser.close();
})

function getStorageState(user: string): string | { cookies: { name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }[]; origins: { origin: string; localStorage: { name: string; value: string; }[]; }[]; } {
    if (user.endsWith("admin"))
        return "src/helper/auth/admin.json";
    else if (user.endsWith("lead"))
        return "src/helper/auth/lead.json";
}