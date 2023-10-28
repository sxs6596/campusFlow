import "../styles/MessageScreen.css";
export default function Complain(){
    return <>
        <div className="message-container">
            <div className="message-header row">
                <h3>Complain</h3>
            </div>
            <div className="message-item-container">
                <div className="message-form">
                    <input className="input" type="text" placeholder="Enter Your Message Here" required />
                </div>
            </div>
        </div>
    </>
}