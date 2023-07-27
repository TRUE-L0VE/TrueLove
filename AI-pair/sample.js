OPENAI_API_KEY = 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;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-dqjTq1XwGm2xi9EzTaPyEWmM",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listModels();
