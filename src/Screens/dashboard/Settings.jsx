import { Link } from "react-router-dom";
import "./styles/Settings.css";
export default function Settings() {
    return (
        <div>
            <div className="setting-container col cent">
                <div className="setting-header">
                    <h1>Settings</h1>
                </div>
                <div className="delete cent">
                    <Link to="name-change">Change Name</Link>
                </div>
                <div className="delete cent">
                    <Link to="password-change">Change Password</Link>
                </div>
                <div className="delete cent">
                    <Link to="/delete">Delete your Account</Link>
                </div>
                <div className="delete cent">
                    <Link to="/dashboard/logout">Logout</Link>
                </div>

            </div>
        </div>
    );
}