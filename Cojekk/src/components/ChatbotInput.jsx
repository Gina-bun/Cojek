import { useState } from "react";
import OpenAI from "openai"

export function ChatbotInput({messages, setMessages}){

    const [inputText, setInputText] = useState("")

    const client = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser:true,
    })

    function saveInputText(event){
        setInputText(event.target.value);
    }

    async function sendMessage(){
        const userMessage = inputText.trim();
        if (!userMessage) return

        const existingMessages = [
            ...messages,
            {
                message:  userMessage,
                sender: "user",
                id: crypto.randomUUID(),
            }
        ]

        setMessages(existingMessages)

        setInputText("")

        //calling llm api
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Suggest project ideas for computer science students in: ${userMessage}`
                },
            ],
        })

        const chatbotResponse = response.choices[0].message.content

        setMessages([
              ...existingMessages,
            {
                message:  chatbotResponse,
                sender: "chatbot",
                id: crypto.randomUUID(),
            }
        ])
    }

    //Enter key can send message if input area is not empty
    function keyInputs(event){
        let activeKey = event.key;
        if(activeKey === 'Enter'){
            //if inputbar is not empty as well
            if(inputText !== ""){
                sendMessage()
            }
        }
        else if(activeKey === 'Escape'){
            //reset or clear input bar
            setInputText("")
    }
}

    return (
        <>
        < div className="search-input m-auto flex justify-between  w-[60vw] bg-white rounded-[20px] mt-4 py-1 px-2">
              <input
                className="outline-none px-4 text-(--footer-input) w-full"
                type="text"
                placeholder="Enter a topic"
                value={inputText}
                onChange={saveInputText}
                onKeyDown={keyInputs}
              />
              <button className="bg-(--login-button) rounded-[20px] px-3 py-1"
              onClick={sendMessage}
              disabled={inputText === "" ? true : false}
              >
                Generate
              </button>
            </div>
        </>
    )
}