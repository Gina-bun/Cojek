import ReactMarkdown from "react-markdown"
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div className="flex">
      <div
        className={sender === "chatbot" ? "chatbot-message" : "user-message"}
      >
        {sender === "chatbot" && (
          <img
            className="chatbot-pfp size-10"
            src="/images/beans.png"
            alt="chatbot-pfp"
          />
        )}
        <div className="message-bubble">
<ReactMarkdown  >{message}</ReactMarkdown>
        </div>
        
        {sender === "user" && (
          <img
            className="user-pfp size-10"
            src="/images/beans.png"
            alt="user-pfp"
          />
        )}
      </div>
    </div>
  );
}
