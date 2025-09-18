import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import './App.css';

const USER_NAME = 'YOUR_NAME_HERE';
const BOT_PERSONALITY_PROMPT = "YOUR_BOT_PERSONALITY_PROMPT_HERE";
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "model",
      text: `Hello, ${USER_NAME}. I am ________. How may I assist you today?`//Enter your bot name
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const systemInstruction = `${BOT_PERSONALITY_PROMPT} You are currently chatting with ${USER_NAME}. Make sure to address them by their name when it feels natural to do so.`;
      
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: systemInstruction,
      });
      
      const chat = model.startChat({
        history: messages
          
          .filter(m => m.sender !== 'model' || m.text !== `Hello, ${USER_NAME}. I am _________. How may I assist you today?`)//Enter your bot name
          .map(m => ({
            role: m.sender === "user" ? "user" : "model",
            parts: [{ text: m.text }]
          })),
      });

      const result = await chat.sendMessage(input);
      const reply = result.response.text();

      setMessages(prev => [...prev, { sender: "model", text: reply }]);
    } catch (error) {
      console.error("API Call failed:", error);
      setMessages(prev => [...prev, { sender: "model", text: "Sorry, I ran into an error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="app-container">
      <h2 className="chatbot-title">Enter your bot name</h2>
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.sender === 'model' ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
        {isLoading && (
          <div className="message model">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
