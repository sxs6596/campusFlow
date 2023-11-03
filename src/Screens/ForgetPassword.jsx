import { ImMail } from "react-icons/im";
import "./styles/ForgetPassword.css"
import {useState} from "react"
import emailjs from 'emailjs-com';

export default function ForgetPassword(){
    const [email,setEmail] = useState("")
    let resetPassword = e =>{
        
        const templateParams = {
            userEmail: email,
          };
      
          emailjs
            .send(
              'service_65c27z5',   // Your service ID here
              'template_0y8uffd',  // Your template ID here
              templateParams,
              '0KW1LHyx8R-HuT_SP'       // Your user ID here
            )
            .then(
              (result) => {
                console.log(result.text);
                // setMessage('Thanks for signing up! Please check your email.');
              },
              (error) => {
                console.log(error.text);
                // setMessage('Failed to send the email. Error: ', error.text);
              }
            );
            alert("Password Reset Link Sent to your Email")
    }
    return <>
        <div className="forget-container cent">
            <div className="forget-item">
                <h1>Forget Password</h1>
                <div>
                    <div className="input-core">
                        <ImMail className="input-img"/>
                        <input type="email" className="input" placeholder="Email " required onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <button className="button" onClick={resetPassword}>Reset Your Password</button>
                </div>
            </div>
        </div>
    </>
}