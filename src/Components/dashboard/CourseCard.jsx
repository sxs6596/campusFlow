import { Link } from "react-router-dom";
import "./styles/CourseCard.css";
import User from "../../data/User";
import axios from 'axios';
import { useContext, useState } from "react";
export default function CourseCard(prop) {
    const { id, setID } = useContext(User);
    const [data, setData] = useState({});
    const handleEnroll = async ()=>{
        const course_id = parseInt(prop.id);
        const user_id = parseInt(id);
        setData({user_id, course_id});
        console.log(`data is ${data.user_id} and ${data.course_id}`);
        const response = await axios.post("https://rxk4239.uta.cloud/enrolledcourses.php",data);
    }
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
                            <Link to="#" className="course-tag" onClick={handleEnroll}> Enroll </Link>
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