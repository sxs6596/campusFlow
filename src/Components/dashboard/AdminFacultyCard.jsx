import "./styles/AdminFacultyCard.css";
import { Link } from "react-router-dom";
export default function AdminFacultyCard(prop){
    return <>
        <div className="admin-faculty-card row" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="sc-img-item cent">
                <img className="faculty-banner" src={prop.image} alt="faculty" />
            </div>
            <div className="sc-text-item row">
                <div className="col">
                    <h3>{prop.name}</h3>
                    <span>{prop.email}</span>
                </div>
                <div className="faculty-external-link row">
                    {
                        prop.userType === "admin" && <>
                            <Link to="edit" className="faculty-tag"> Edit </Link>
                            {/* <Link to="#" className="faculty-tag"> Delete </Link> */}
                        </>
                    }
                    <Link to={"/dashboard/message/faculty/" + prop.id} className="faculty-tag"> Message </Link>
                    <Link to={"/dashboard/faculty/" + prop.id} className="faculty-tag"> About </Link>
                </div>
            </div>
        </div>
    </>
}