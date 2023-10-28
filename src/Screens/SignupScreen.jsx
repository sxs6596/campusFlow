import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles/Auth.css";
import "./styles/HomeScreen.css";
import { FaLock, FaUser } from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function SignupScreen() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [serverMessage, setServerMessage] = useState('');

    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

        if (data.firstName.length <= 3) {
            setErrorMessage('First Name must be greater than the length of 3');
        } else if (data.lastName.length <= 3) {
            setErrorMessage('Last Name must be greater than the length of 3');
        } else if (emailRegex.test(data.email) !== true) {
            setErrorMessage('Email should be a valid email address');
        } else if (passwordRegex.test(data.password) !== true) {
            setErrorMessage('Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number');
        } else {
            setErrorMessage('');
            const userData = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                password: data.password,
            };

            try {
                const response = await axios.post('https://rxk4239.uta.cloud/db_test.php', userData
                );
                console.log(response);
                if (response.data.status === 'success') {
                    setServerMessage('Sign Up successful!');
    
                } else {
                    setServerMessage('Sign up failed: ' + response.data.message);
                }
            } catch (error) {
                setServerMessage('An error occurred during sign up. Please try again.');
            }
        }
    };

    const signHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData(currentData => ({ ...currentData, [name]: value }));
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
                <div className="auth-form-container">
                    <div className="auth-form-header col cent">
                        <h1>Create an account</h1>
                        <p>Already have an account? <Link to="/login" style={{ color: "blue" }}>Log In</Link></p>
                        <p className="error-message">{errorMessage}</p>
                        <p className="server-message">{serverMessage}</p>
                    </div>
                    <form action="" onSubmit={formSubmitHandler}>
                        <div className="dbl row">
                            <div className="input-core">
                                <FaUser className="input-img" />
                                <input className="input" name="firstName" placeholder="First Name" required type="text" onChange={signHandler} />
                            </div>
                            <div className="input-core">
                                <FaUser className="input-img" />
                                <input className="input" name="lastName" placeholder="Last Name" required type="text" onChange={signHandler} />
                            </div>
                        </div>
                        <div className="input-core">
                            <ImMail className="input-img" />
                            <input className="input" name="email" placeholder="Email" required type="text" onChange={signHandler} />
                        </div>
                        <div className="input-core">
                            <FaLock className="input-img" />
                            <input className="input" name="password" placeholder="Password" required type="password" onChange={signHandler} />
                        </div>
                        <button className="button signup-btn">Sign Up</button>
                        <div className="tos-details">
                            <input id="tos" name="" type="checkbox" />
                            <label htmlFor="tos" id="tos-label">I have read and agree to the <Link to="" style={{ color: "blue" }}>Terms of Services</Link></label>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-times"></i></a>
                </div>
            </footer>
        </>
    );
}
