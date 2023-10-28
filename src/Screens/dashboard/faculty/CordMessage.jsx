import { useState, useEffect } from "react";
import "../styles/MessageScreen.css";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});

const OpenAIMessage = async (prompt)=>{
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: "Your task is to act like a Co-ordinator at UTA university and answer the faculty queries in strictly one simple line"+prompt }],
        model: 'gpt-3.5-turbo',
    });
    const data = chatCompletion.choices[0].message.content;
    return data;
}

export default function CordMessage() {
    const [messages, setMessages] = useState([]);
    const [replyMessages, setReplyMessages] = useState([]);
    const handleSendMessage = async (e) => {
        e.preventDefault();
        const messageInput = e.target.elements.message;
        const message = messageInput.value.trim();
        if (message) {
            setMessages([...messages, { text: message, sender: "admin" }]);
            messageInput.value = "";
        }
        console.log(`message we are sending is ${message}`)
        const reply = await OpenAIMessage(message);
        console.log(`reply we got is ${reply}`)
        setReplyMessages([...replyMessages, { text: reply }]);
    };

    return (
        <>
            <div className="message-container">
                <div className="message-header row">
                    <h3>Cordinator</h3>
                </div>
                <div className="message-item-container">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message-item ${
                                message.sender === "admin" ? "admin-message" : "user-message"
                            }`}
                            style={{
                                alignSelf: message.sender === "admin" ? "flex-end" : "flex-start"
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                    {replyMessages.map((message, index)=>(
                        <div key={index} className="message-item" style={{textAlign:'right'}}>
                         {console.log(`message we got is at : ${message.text}`)}
                         <p>{message.text}</p>
                        </div>
                    ))}
                </div>
                <div className="message-form">
                    <form onSubmit={handleSendMessage}>
                        <input
                            className="input"
                            type="text"
                            name="message"
                            placeholder="Enter Your Message Here"
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "lightblue",
                                color: "#333",
                                border: "1px solid #333",
                                borderRadius: "4px",
                                padding: "8px 16px",
                                fontSize: "16px",
                                cursor: "pointer",
                                height: "30px",
                                transition: "all 0.3s ease-in-out",
                                align:"right"
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}