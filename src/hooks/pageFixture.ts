import { Page } from "@playwright/test";
import { Logger } from "winston";
import { BrowserContext } from "@playwright/test";

export const fixture = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as Logger,
    context: undefined as BrowserContext,
}