import { Link } from "react-router-dom";
import "./styles/CourseCard.css";

export default function CourseCard(prop) {
    return <>
        <div className="course-card" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="cc-img-item cent">
                <img className="course-banner" src={prop.image} alt="course" />
            </div>
            <div className="cc-text-item col">
                <h3>{prop.title}</h3>
                <div className="course-external-link row">
                    {
                        prop.enrolled === true ?
                            <Link to="/dashboard/grades" className="course-tag"> Report </Link>
                            :
                            <Link to="#" className="course-tag"> Enroll </Link>
                    }
                    {
                        prop.userType === "admin" && <>
                            <Link to="#" className="course-tag"> Edit </Link>
                            <Link to="#" className="course-tag"> Delete </Link>
                        </>
                    }
                    <Link to={"/dashboard/course/" + prop.id} className="course-tag"> About </Link>
                </div>
            </div>
        </div>
    </>
}