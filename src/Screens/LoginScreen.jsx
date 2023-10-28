import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImLock, ImMail } from "react-icons/im";
import axios from "axios";
import "./styles/Auth.css";
import "./styles/HomeScreen.css";

// Define LoginComponent outside of LoginScreen
const LoginComponent = () => {
  const [emailData, setEmail] = useState("");
  const [passwordData, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost/db_test.php');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

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
    console.log(`email is ${emailData} and password is ${passwordData}`);

    if (Array.isArray(data)) {
      const result = data.find((u) => u.email === emailData && u.password === passwordData);
      if (result) {
        const user_type = result.user;
        switch (user_type) {
          case "admin":
            navigate("/admin");
            break;
          case "student":
            navigate("/students");
            break;
          case "faculty":
            navigate("/faculty");
            break;
          case "cord":
            navigate("/cord");
            break;
          case "qa":
            navigate("/qa");
            break;
          default:
            navigate("/student");
            break;
        }
      } else {
        alert("Invalid email or password");
      }
    } else {
      console.error("API response is not an array:", data);
    }
  };

  return (
    <>
      <header>
        <div className="topnav" id="myTopnav">
          {/* Navigation links */}
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
            </div>
            <button className="button">Log In</button>
            <Link to="/forgot_password" style={{ color: "blue" }}>
              Forgot Password
            </Link>
            <div className="tos-details"></div>
          </form>
        </div>
      </div>
      <footer>
        <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
        <div className="social-icons">
          {/* Social icons */}
        </div>
      </footer>
    </>
  );
};

export default LoginComponent; // Export the LoginComponent
