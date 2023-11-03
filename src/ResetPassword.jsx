// ResetPassword.js

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const styles = {
    container: {
        background: '#f7f7f7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
    },
    resetBox: {
        background: 'white',
        padding: '20px 30px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        width: '600px',
        height: '400px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '15px'
    },
    input: {
        width: '100%',
        margin:'10px',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    submitButton: {
        marginTop:'50px',
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    }
};

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        if(newPassword === confirmPassword){
            const responsePassword = await axios.post('https://rxk4239.uta.cloud/resetPassword.php', {
                email:email,
                password:confirmPassword
            });
            console.log(responsePassword);

        // Handle the reset password logic here.
        // For example: resetUserPassword(email, newPassword);
        // alert('Password reset request submitted!');
        toast.success('Password reset request submitted!');
        toast.info('Redirecting to login page...');
        setTimeout(() => {
            navigate('/');
        }, 4000);
        }
    };

    return (
        <div style={styles.container}>
            <ToastContainer />
            <div style={styles.resetBox}>
                <h2 style={styles.header}>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.submitButton} 
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "#0056b3"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "#007BFF"}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ResetPassword;
