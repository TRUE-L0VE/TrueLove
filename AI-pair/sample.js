OPENAI_API_KEY = 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;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-dqjTq1XwGm2xi9EzTaPyEWmM",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.listEngines();