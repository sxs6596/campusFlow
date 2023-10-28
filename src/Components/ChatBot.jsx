import "./ChatBot.css"
import { useState } from "react"
import OpenAI from "openai";
import BotIcon from "../assets/images/bot.png"
function MessageShow(prop) {
    if (prop.data.transfer === "send")
        return <SendMessage message={prop.data.message} />
    else
        return <ReceiveMessage message={prop.data.message} />
}
function SendMessage(prop) {
    return <>
        <div className="chatbot-send-message row">
            <p className="chatbot-message">
                {prop.message}
            </p>
        </div>
    </>
}
function ReceiveMessage(prop) {
    return <>
        <div className="chatbot-receive-message row">
            <p className="chatbot-message">
                {prop.message}
            </p>
        </div>
    </>
}

export default function ChatBot() {
    const botToggler = e => {
        e.preventDefault()
        document.querySelector(".chatbot").classList.toggle("chatbot-active")
    }
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true
    });
    const [message, setMessage] = useState([])

    const responseHandler = async(e) => {
        e.preventDefault()
        setMessage( currentMessage => ([...currentMessage, { message: prompt, transfer: 'send' }]))
        const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: "Your task is to act like a professor at UTA university and answer the student queries in one simple line"+prompt }],
        model: 'gpt-3.5-turbo',
        });
        const data = chatCompletion.choices[0].message.content;
        console.log(data);
        setResponse(data);
        setMessage(currentMessage => ([...currentMessage, { message:data, transfer: 'receive' }]));
        setPrompt('')
    }
    return <>
        <div className="ChatBotContainer col">
            <div className="chatbot col">
                <div className="chatbot-header row">
                    <h3>Campus Flow Bot</h3>
                </div>
                <div className="chatbot-message-container">
                    {
                        message.map((item, index) => {
                            return <MessageShow key={index} data={item}/>
                        })
                    }

                </div>
                <div className="bot-input-form">
                    <form onSubmit={responseHandler}>
                        <input className="bot-input" type="text" value={prompt} onChange={e => setPrompt(e.target.value)}
                            placeholder="Enter your message" required />
                    </form>
                </div>
            </div>
            <div className="row chatbot-opener-icon">
                <img className="botIcon" onClick={botToggler} src={BotIcon} alt="" />
            </div>

        </div>
    </>
}


