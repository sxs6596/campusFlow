import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Settings() {
    const [formType, setFormType] = useState(null);

    // Details of the user 
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");

    const handleButtonClick = (type) => {
        setFormType(type);
    };

    const handleBack = () => {
        setFormType(null);
    };

    const handleFormSubmit = async (data) => {
        switch (formType) {
            case 'changeName':
                console.log("Change name to:", data.newName);
                const responseName = await axios.post('https://rxk4239.uta.cloud/settingsupdate.php', {
                    id: id,
                    name: data.newName,
                    change: 'name',
                    password: ''
                });
                toast.success("Name changed successfully!");
                console.log(responseName);
                break;
            case 'changePassword':
                if(data.newPassword === data.confirmPassword){
                const responsePassword = await axios.post('https://rxk4239.uta.cloud/settingsupdate.php', {
                    id: id,
                    name:'',
                    change: 'password',
                    password: data.confirmPassword
                });
                toast.success("Password changed successfully!");
                console.log(responsePassword);
                }
                break;
            default:
                console.log("Unknown form type");
        }
    }

    return (
        <div style={{ margin: '3rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>Settings</h2>
            {formType ? (
                <>
                    <SettingsForm formType={formType} onSubmit={handleFormSubmit} />
                    <button style={styles.buttonSecondary} onClick={handleBack}>Back to Settings</button>
                </>
            ) : (
                <>
                    <button style={{ ...styles.button, marginBottom: '1rem' }} onClick={() => handleButtonClick('changeName')}>Change Name</button><br />
                    <button style={{ ...styles.button, marginBottom: '1rem' }} onClick={() => handleButtonClick('changePassword')}>Change Password</button><br />
                    <button style={styles.button} onClick={() => handleButtonClick('logout')}>Logout</button>
                </>
            )}
        </div>
    );
}

function SettingsForm({ formType, onSubmit }) {
    const [newName, setNewName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        switch (formType) {
            case 'changeName':
                onSubmit({ newName });
                break;
            case 'changePassword':
                if (newPassword !== confirmPassword) {
                    alert("New password and confirm password do not match!");
                    return; // Return early if passwords do not match
                }
                onSubmit({ currentPassword, newPassword, confirmPassword });
                break;
            // ... Handle other form types ...
        }
    }

    return (
        <form style={{ marginTop: '2rem' }} onSubmit={handleFormSubmit}>
            {formType === 'changeName' && (
                <div>
                    <h4>Change Name</h4>
                    <input type="text" style={styles.input} placeholder="Enter new name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
            )}

            {formType === 'changePassword' && (
                <div>
                    <h4>Change Password</h4>
                    <input type="password" style={{ ...styles.input, marginBottom: '1rem' }} placeholder="Enter current password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    <input type="password" style={{ ...styles.input, marginBottom: '1rem' }} placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" style={styles.input} placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            )}

            <button type="submit" style={{ ...styles.button, marginTop: '1rem' }}>Submit</button>
        </form>
    );
}

const styles = {
    button: {
        backgroundColor: '#2596be',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        textAlign: 'center',
        height: '50px',
        width: '250px'
    },
    buttonSecondary: {
        backgroundColor: '#6c757d',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        textAlign: 'center',
        height: '50px',
        width: '250px',
        margin: '5px'
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem'
    }
}

export default Settings;
