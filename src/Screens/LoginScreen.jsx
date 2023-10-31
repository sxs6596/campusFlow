import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImLock, ImMail } from "react-icons/im";
import axios from "axios";
import "./styles/Auth.css";
import "./styles/HomeScreen.css";
import {useContext} from 'react';
import User from '../data/User';

// Define LoginComponent outside of LoginScreen
const LoginComponent = () => {
  const {loggedInUser, setLoggedInUser} = useContext(User);
  const [emailData, setEmail] = useState("");
  const [passwordData, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://rxk4239.uta.cloud/db_test.php"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://rxk4239.uta.cloud/db_test.php");

    let user = response.data.data.find(
      (u) => u.email === emailData && u.password === passwordData
    );
    console.log(`logged in user is ${user}`);
    setLoggedInUser(user);  
    localStorage.setItem("id", user.id);
    localStorage.setItem("first_name", user.first_name);
    localStorage.setItem("email", user.email);
    if (user.user === "student") {
      localStorage.setItem("user", "student");
      window.location.href = "/dashboard";
    } else if (user.user === "faculty") {
      localStorage.setItem("user", "faculty");
      window.location.href = "/dashboard";
    } else if (user.user === "admin") {
      localStorage.setItem("user", "admin");
      window.location.href = "/dashboard";
    } else if (user.user === "quality-admin") {
      localStorage.setItem("user", "quality-admin");
      window.location.href = "/dashboard";
    } else if (user.user === "cord") {
      localStorage.setItem("user", "cord");
      window.location.href = "/dashboard";
    } else {
      alert("User not found");
    }
  };

  return (
    <>
      <header>
        <div className="topnav" id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link className="active" to="/signup">
            SignUp
          </Link>
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
        <div className="social-icons">{/* Social icons */}</div>
      </footer>
    </>
  );
};

export default LoginComponent; // Export the LoginComponent
