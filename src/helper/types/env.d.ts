export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "staging" | "prod" | "test" | "devCU",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}
