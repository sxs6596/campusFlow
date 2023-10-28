import "../styles/MessageScreen.css"
export default function Discussion(){
    return <>
        <div className="message-container">
            <div className="message-header row">
                <h3>Discussion Form</h3>
            </div>
            <div className="message-item-container">
                <div className="send-message row">
                    <div className="send-item">
                        sir i have a question about the assignment
                    </div>
                </div>
                <div className="receive-message row">
                    <div className="receive-item">
                        in the assignment you have to do this and that
                    </div>
                </div>
                <div className="send-message row">
                    <div className="send-item">
                        sir i have a question about the assignment
                    </div>
                </div>
                <div className="receive-message row">
                    <div className="receive-item">
                        in the assignment you have to do this and that
                    </div>
                </div>
                <div className="message-form">
                    <input className="input" type="text" placeholder="Enter Your Message Here" required />
                </div>
            </div>
        </div>
    </>
}