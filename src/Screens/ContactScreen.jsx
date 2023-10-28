import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import "./styles/Contact.css"
export default function ContactScreen() {
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
            console.log("responsive")
        } else {
            x.className = "topnav";
            console.log("not responsive")
        }
    }
    return <>
        <header>
            <div class="topnav" id="myTopnav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
                <Link to="/services" >Services</Link>
                <Link to="https://johngreesh12.wordpress.com/">Blog </Link>

                <Link to="/contact " class="active">Contact</Link>
                <Link to="#" class="icon" onClick={() => {
                    myFunction()
                }}>
                    <GiHamburgerMenu />
                </Link>
            </div>
        </header>
        <main className="cent contact-main">
            <div className="container">
                <div style={{ textAlign:"center"}}>
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-internal row">
                    <div className="contact-internal1 column">
                        <h3>
                            You can reach us at team13@mavs.uta.edu
                        </h3>
                    </div>
                    <div className="contact-internal2 column">
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input className="input2" id="fname" name="firstname" placeholder="Your Email.." type="text" />
                            <label htmlFor="lname">Last Name</label>
                            <input className="input2" id="lname" name="lastname" placeholder="Your last name.." type="text" />
                            <label htmlFor="subject">Subject</label>
                            <textarea className="textarea" id="subject" name="subject" placeholder="Write something.."
                                style={{ height: "80px" }}></textarea>
                            <input className="button" type="submit" value="Submit"  />
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <div div className="footer" >
            <footer>
                <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-times"></i></a>
                </div>
            </footer>
        </div>
    </>
}