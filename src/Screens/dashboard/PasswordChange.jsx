import { useState } from "react";
import "./styles/PasswordChange.css";
import AdminData from "../../data/AdminData"
import UserData from "../../data/UserData";
import FacultyData from "../../data/FacultyData"
import CordData from "../../data/CordData"
import QAData from "../../data/QAData"
export default function PasswordChange() {
    const [data, setData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [errorMessage, setErrorMessage] = useState('')
    let getLocalData = JSON.parse(localStorage.getItem("userData"));
    const handleInput = e => {
        const { name, value } = e.target;
        setData(currentData => ({ ...currentData, [name]: value }))
    }
    let handleFormSubmit = e => {
        e.preventDefault()
        let userType = localStorage.getItem("user")
        if(data.confirmPassword !== data.newPassword){
            alert("New Password and Confirm Password are not same")
        }else{
            if (userType === "student") {
                let DataFound = UserData.find(item => {
                    if (item.password === data.currentPassword )
                        return item
                    else
                        return undefined
                })
                if (DataFound != undefined) {
                    localStorage.setItem('user', 'student')
                    DataFound.password = data.newPassword
                    localStorage.setItem("userData", JSON.stringify(DataFound))
                    window.location.href = "/dashboard"
                } else {
                    setErrorMessage('Credentials are not correct')
                }
            }
            else if (userType === 'faculty') {
                let DataFound = FacultyData.find(item => item.password === data.currentPassword )
                if (DataFound != undefined) {
                    localStorage.setItem('user', 'faculty')
                    DataFound.password = data.newPassword
                    localStorage.setItem("userData", JSON.stringify(DataFound))
                    window.location.href = "/dashboard"
                } else
                    setErrorMessage('Credentials are not correct')
            }
            else if (userType === 'admin') {
                let DataFound = AdminData.find(item => item.password === data.currentPassword )
                if (DataFound != undefined) {
                    localStorage.setItem('user', 'admin')
                    DataFound.password = data.newPassword
                    localStorage.setItem("userData", JSON.stringify(DataFound))
                    window.location.href = "/dashboard"
                } else
                    setErrorMessage('Credentials are not correct')
            }
            else if (userType === 'quality-admin') {
                let DataFound = QAData.find(item => item.password === data.currentPassword )
                if (DataFound != undefined) {
                    localStorage.setItem('user', 'quality-admin')
                    DataFound.password = data.newPassword
                    localStorage.setItem("userData", JSON.stringify(DataFound))
                    window.location.href = "/dashboard"
                } else
                    setErrorMessage('Credentials are not correct')
            }
            else if (userType === 'cord') {
                let DataFound = CordData.find(item => item.password === data.currentPassword )
                if (DataFound != undefined) {
                    localStorage.setItem('user', 'cord')
                    DataFound.password = data.newPassword
                    localStorage.setItem("userData", JSON.stringify(DataFound))
                    window.location.href = "/dashboard"
                } else
                    setErrorMessage('Credentials are not correct')
            }
            else {
                setErrorMessage('Data is not registered')
            }
        }
    }
    return <>
        <form className="form" id="password-change" onSubmit={handleFormSubmit}>
            <h1 className="h1">Change Password</h1>
            <div>
                <p className="error">{errorMessage}</p>
            </div>
            <label className="label" htmlFor="current-password">Current Password:</label>
            <div className="input-core">
                <input className="input" name="currentPassword" type="password"
                    onChange={handleInput}
                    id="current-password" required />
            </div>
            <label htmlFor="new-password">New Password:</label>
            <div className="input-core">
                <input className="input" name="newPassword"
                    onChange={handleInput}
                    type="password" required />
            </div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="input-core">
                <input className="input" type="password"
                    onChange={handleInput}
                    name="confirmPassword" required />
            </div>
            <button className="button">Change Current Password</button>
        </form>
    </>
}