import { ImMail } from "react-icons/im";
import "./styles/ForgetPassword.css"
export default function ForgetPassword(){
    let resetPassword = e =>{
        alert("Password Reset Link Sent to your Email")
    }
    return <>
        <div className="forget-container cent">
            <div className="forget-item">
                <h1>Forget Password</h1>
                <div>
                    <div className="input-core">
                        <ImMail className="input-img"/>
                        <input type="email" className="input" placeholder="Email " required/>
                    </div>
                    <button className="button" onClick={resetPassword}>Reset Your Password</button>
                </div>
            </div>
        </div>
    </>
}