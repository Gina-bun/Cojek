import { useState } from "react";
import OpenAI from "openai";

export function ChatbotInput({ messages, setMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLOading] = useState(true);

  const client = new OpenAI({
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const userMessage = inputText.trim();
    if (!userMessage) return;

    const existingMessages = [
      ...messages,
      {
        message: userMessage,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setMessages(existingMessages);

    setInputText("");

        const loadingMessage = [
        ...existingMessages,
        {
            message: "loading...",
            sender: "chatbot",
            id: crypto.randomUUID(),
        }
    ]

    setMessages(loadingMessage)
    setIsLOading(true)

    //calling llm api
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
          You are a friendly coding assistant.
When a user gives a topic, provide:
1. 2 beginner-friendly project ideas related to that topic
2. For each project, give a short description (1-2 sentences)
3. Give a step-by-step guide to implement each project, in numbered steps
4. Keep instructions concise and clear`,
        },
        {
            role: "user",
            content: `User input: ${userMessage}
Suggest 2 beginner-friendly projects with step-by-step instructions.
Format:
## Project 1
- Description:
- Steps:

## Project 2
- Description:
- Steps:
`
        }
      ],
    });

    const chatbotResponse = response.choices[0].message.content;


    setIsLOading(false)

    setMessages([
      ...existingMessages,
      {
        message: chatbotResponse,
        sender: "chatbot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  //Enter key can send message if input area is not empty
  function keyInputs(event) {
    let activeKey = event.key;
    if (activeKey === "Enter") {
      //if inputbar is not empty as well
      if (inputText !== "") {
        sendMessage();
      }
    } else if (activeKey === "Escape") {
      //reset or clear input bar
      setInputText("");
    }
  }

  return (
    <>
      <div className="search-input m-auto flex justify-between  w-[60vw] bg-white rounded-[20px] mt-4 py-1 px-2">
        <input
          className="outline-none px-4 text-(--footer-input) w-full"
          type="text"
          placeholder="Enter a topic"
          value={inputText}
          onChange={saveInputText}
          onKeyDown={keyInputs}
        />
        <button
          className="bg-(--login-button) rounded-[20px] px-3 py-1"
          onClick={sendMessage}
          disabled={inputText === "" ? true : false}
        >
          Generate
        </button>
      </div>
    </>
  );
}
