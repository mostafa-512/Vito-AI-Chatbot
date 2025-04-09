import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_Open_AI_API_KEY,
    dangerouslyAllowBrowser:true
})

export class Assistant {

    #model; // to save the Var from any call outside the class
    constructor(model="gpt-4o-mini"){
        this.#model = model;
    }
    async chat(content,history){
        try {
            const result = await openai.chat.completions.create({
                model: this.#model,
                messages: [
                    ...history,{role:'user',content}]

            })
            return result.choices[0].message.content;
        } catch (error) {
            throw error;
        }
    }
}



