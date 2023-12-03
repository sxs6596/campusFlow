import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImLock, ImMail } from "react-icons/im";
import axios from "axios";
import "./styles/Auth.css";
import "./styles/HomeScreen.css";
import User from "../data/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonCompo from "../Components/ButtonCompo";

const LoginComponent = () => {
  const { setLoggedInUser } = useContext(User);
  const [emailData, setEmail] = useState("");
  const [passwordData, setPassword] = useState("");
  const navigate = useNavigate();

  // State for validation errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const Errornotify = () => toast("Error fetching the data!");
  const Successnotify = () => toast("Login successful!");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://rxk4239.uta.cloud/db_test.php");
        console.log(response.data.data);
        // handle successful fetch if needed
      } catch (error) {
        console.error("Error fetching data:", error);
        Errornotify();
      }
    }
    fetchData();
  }, []);

  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Email validation function
  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Password validation function
  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(emailData);
    const isPasswordValid = validatePassword(passwordData);
    if (!isEmailValid || !isPasswordValid) return;

    try {
      const userSubmitData = { email: emailData, password: passwordData };
      const submitresponse = await axios.post(
        "https://rxk4239.uta.cloud/login_db_test.php",
        userSubmitData
      );
      
      if (submitresponse.data.success) {
        Successnotify();
        const user = submitresponse.data.data;
        setLoggedInUser(user);
        localStorage.setItem("user", user);
        navigate("/dashboard");
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      Errornotify();
    }
  };

  return (
    <>
      <header>
        <div className="topnav" id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link className="active" to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
          <Link to="/services">Services</Link>
          <Link to="https://johngreesh12.wordpress.com/">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="#" className="icon" onClick={myFunction}>
            <GiHamburgerMenu />
          </Link>
        </div>
      </header>
      <div className="auth-container col">
        <nav className="auth-nav row">
          <div className="logo"></div>
        </nav>
        <div className="auth-form-container">
          <div className="auth-form-header col cent">
            <h1>Student Log In</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-core row">
              <ImMail className="input-img" />
              <input
                name="email"
                className="input"
                placeholder="Email"
                autoComplete="off"
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <div className="input-core row">
              <ImLock className="input-img" />
              <input
                className="input"
                name="password"
                autoComplete="off"
                placeholder="Password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error-message">{passwordError}</div>}
            </div>
            <ButtonCompo type="submit" title="Login" size="3" direction="column" />
            <ToastContainer />
            <Link to="/forgot_password" style={{ color: "blue" }}>
              Forgot Password
            </Link>
            <div className="tos-details"></div>
          </form>
        </div>
      </div>
      <footer>
        <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
        <div className="social-icons">{/* Social icons */}</div>
      </footer>
    </>
  );
};

export default LoginComponent;
