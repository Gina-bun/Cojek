
import {  useRef , useEffect} from "react";
import { ChatMessage }  from "./ChatMessage";
import './ChatMessages.css'


export function ChatMessages({messages}){
   const scrollingRef = useRef(null)
   useEffect(() => {
    const chatContainer = scrollingRef.current
    if(chatContainer ){
        chatContainer.scrollTop = chatContainer.scrollHeight
    }
   }, [messages])

    //render chat messages
    return (
        <div className="chatContainer h-[400px] overflow-scroll " ref={scrollingRef}>
        {messages.map((msg) => {
        
           return (
             <ChatMessage 
            message={msg.message}
            sender={msg.sender}
            key={msg.id}
            />
           )
                  
    })}
        </div>
    )
}