import "./styles/DashboardUpperNav.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
export default function DashboardUpperNav(prop) {
    function AsideOpener() {
        let aside = document.querySelector(".dashboard-aside")
        aside.classList.toggle("dashboard-aside-open")
    }
    return <>
        <nav className="dashboard-upper row cent" aria-label="upper menu">
            <div className="upper-mobile-nav row">
                <div> <FiMenu className="upper-hamburger-menu" onClick={() => {
                    AsideOpener()
                }} /></div>
                <div><h2>URM</h2></div>
            </div>
            <div className="upper-link-item row">
                <Link className="upper-link" to="grades">Grades</Link>
                <Link className="upper-link nav-btn" to="/dashboard/account">Account</Link>
            </div>
        </nav>
    </>
}