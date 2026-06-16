import * as dotenv from 'dotenv'

export const getEnv = () => {
    if (process.env.ENV) {
        const headOverride = process.env.HEAD;
        dotenv.config({
            override: true,
            path: `src/helper/env/.env.${process.env.ENV}`
        })
        if (headOverride !== undefined) {
            process.env.HEAD = headOverride;
        }
    } else {
        console.error("NO ENV PASSED!")
    }

}