import OpenAI from "openai";

// "sk-01010101"  for just make project preview, you need to add your own key in the .env file
// and import it by using      import.meta.env.VITE_Open_AI_API_KEY  as a value to  apiKey : >>
//  import.meta.env.VITE_OPENAI_API_KEY
// and make sure to add the .env file in the root directory of your project

const openai = new OpenAI({
    apiKey:  "sk-01010101" , // 
    dangerouslyAllowBrowser:true
})

export class Assistant {

    #model; // to save the Var from any call outside the class
    #client; // to save the Var from any call outside the class
    constructor(model="gpt-4o-mini", client= openai){
        this.#model = model;
        this.#client = client;
    }
    async chat(content,history){
        try {
            const result = await this.#client.chat.completions.create({
                model: this.#model,
                messages: [
                    ...history,{role:'user',content}]

            })
            return result.choices[0].message.content;
        } catch (error) {
            throw error;
        }
    }

    async *chatStream(content,history){
        try {
            const result = await this.#client.chat.completions.create({
                model: this.#model,
                messages: [
                    ...history,{role:'user',content}]
            ,stream:true
            })
            for await(const chunk of result){
                yield chunk.choices[0]?.delta?.content || '';
            }
        } catch (error) {
            throw error;
        }
    };
}



