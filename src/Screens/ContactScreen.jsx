import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./styles/Contact.css";
import emailjs from "emailjs-com";
import { Button, Flex, Heading } from "@radix-ui/themes";
export default function ContactScreen() {
  const [mesasge, setMessage] = useState("");
  const [email, setEmail] = useState("");
  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      console.log("responsive");
    } else {
      x.className = "topnav";
      console.log("not responsive");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      userEmail: email,
      message: mesasge,
    };

    emailjs
      .send(
        "service_kgjr1x7", // Your service ID here
        "template_cngt71m", // Your template ID here
        templateParams,
        "EQvttVRz2bMq04l5a" // Your user ID here
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Thanks for signing up! Please check your email.");
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send the email. Error: ", error.text);
        }
      );
  };
  return (
    <>
      <header>
        <div class="topnav" id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
          <Link to="/services">Services</Link>
          <Link to="https://johngreesh12.wordpress.com/">Blog </Link>

          <Link to="/contact " class="active">
            Contact
          </Link>
          <Link
            to="#"
            class="icon"
            onClick={() => {
              myFunction();
            }}
          >
            <GiHamburgerMenu />
          </Link>
        </div>
      </header>
      <main className="cent contact-main">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h2>Contact Us</h2>
          </div>
          <div className="contact-internal row">
            <div className="contact-internal1 column">
              <Heading highContrast color="indigo" size="5" align="center" my="7"> 
                You can reach us at sxs6596@mavs.uta.edu
              </Heading>
            </div>
            <div className="contact-internal2 column">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  className="input2"
                  id="fname"
                  name="firstname"
                  placeholder="Your Email.."
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="lname">Last Name</label>
                <input
                  className="input2"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  type="text"
                />
                <label htmlFor="subject">Subject</label>
                <textarea
                  className="textarea"
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "80px" }}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Flex direction="column" align="center">
                  <Button type="submit" gap="3">
                    Submit
                  </Button>
                </Flex>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div div className="footer">
        <footer>
          <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
