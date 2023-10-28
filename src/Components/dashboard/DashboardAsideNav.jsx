import "./styles/DashboardAsideNav.css";
import { Link } from "react-router-dom";
import StudentNav from "../../data/StudentAsideNav";
import FacultyAsideNav from "../../data/FacultyAsideNav";
import QualityAdminAsideNav from "../../data/QualityAdminAsideNav";
import CordAsideNav from "../../data/CordAsideNav";
import AdminAsideNav from "../../data/AdminAsideNav";
import { RxCross1 } from "react-icons/rx";
export default function DashboardAsideNav(prop) {
    function AsideOpener() {
        let aside = document.querySelector(".dashboard-aside")
        aside.classList.toggle("dashboard-aside-open")
    }
    return <>
        <nav className="dashboard-aside col" aria-label="side menu">
            <div className="aside-logo cent">
                <h1>Campus Flow</h1>
                <div className="mobile-cross" onClick={()=>{AsideOpener()}}>
                    <RxCross1 />
                </div>
            </div>
            <ul className="aside-ul">
                {
                    prop.userType === "student" && StudentNav.map((item) => {
                        return <li key={item.id} className="aside-ul-li">
                            <Link to={item.path}>
                                <item.icon className="aside-svg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })
                }
                {
                    prop.userType === "faculty" && FacultyAsideNav.map((item) => {
                        return <li key={item.id} className="aside-ul-li">
                            <Link to={item.path}>
                                <item.icon className="aside-svg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })
                }
                {
                    prop.userType === "quality-admin" && QualityAdminAsideNav.map((item) => {
                        return <li key={item.id} className="aside-ul-li">
                            <Link to={item.path}>
                                <item.icon className="aside-svg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })
                }
                {
                    prop.userType === "cord" && CordAsideNav.map((item) => {
                        return <li key={item.id} className="aside-ul-li">
                            <Link to={item.path}>
                                <item.icon className="aside-svg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })
                }
                {
                    prop.userType === "admin" && AdminAsideNav.map((item) => {
                        return <li key={item.id} className="aside-ul-li">
                            <Link to={item.path}>
                                <item.icon className="aside-svg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    </>
}