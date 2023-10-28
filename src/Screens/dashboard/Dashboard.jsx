import "./Dashboard.css"
import { Outlet } from "react-router-dom"
import DashboardAsideNav from "../../Components/dashboard/DashboardAsideNav"
import DashboardUpperNav from "../../Components/dashboard/DashboardUpperNav"
export default function Dashboard(prop) {
    return <>
        <DashboardAsideNav {...prop} />
        <div className="dashboard-main">
            <DashboardUpperNav {...prop} />
            <div className="main-content-container">
                <Outlet />
            </div>
        </div>
    </>
}