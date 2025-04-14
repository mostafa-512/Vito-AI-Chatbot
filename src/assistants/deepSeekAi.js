import OpenAI from "openai";

import {Assistant  as OpenAiAssistant} from "../assistants/openAi";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com/v1',
    apiKey: import.meta.env.VITE_DEEPSEEK_AI_API_KEY,
    dangerouslyAllowBrowser:true
})

export class Assistant extends OpenAiAssistant {

    constructor(model="deepseek-chat", client=openai){

        super(model,client);
    }


}
