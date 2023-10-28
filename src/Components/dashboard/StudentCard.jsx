import "./styles/StudentCard.css"
import { Link } from "react-router-dom"
export default function StudentCard(prop) {
    return <>
        <div className="student-card row" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="sc-img-item cent">
                <img className="student-banner" src={prop.image} alt="student" />
            </div>
            <div className="sc-text-item row">
                <div className="col">
                    <h3>{prop.name}</h3>
                    <span>{prop.email}</span>
                </div>
                <div className="student-external-link row">
                    {
                        prop.userType === "admin" && <>
                            <Link to="edit" className="student-tag"> Edit </Link>
                        </>
                    }
                    <Link to="/chatComponent" className="student-tag"> Message </Link>
                    <Link to="/chatComponent" className="student-tag"> About </Link>
    
                </div>
            </div>
        </div>
    </>
}