import { Link } from "react-router-dom";
import "./styles/CourseCard.css";
import User from "../../data/User";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";

export default function CourseCard(prop) {
    const { id } = useContext(User);
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: { query: prop.title, client_id: 'n46_teH327Mkqmzfdi36pDt9Oogaoco14S4uB6hl--Y' }
                });
                const imageUrl = response.data.results[0]?.urls?.small;
                setImgSrc(imageUrl || 'https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png');
            } catch (error) {
                setImgSrc('https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png');
            }
        };

        fetchImage();
    }, [prop.title]);

    const handleEnroll = async () => {
        const course_id = parseInt(prop.id);
        const user_id = parseInt(id);
        const enrollData = { user_id, course_id };
        await axios.post("https://rxk4239.uta.cloud/enrolledcourses.php", enrollData);
    }

    const handleDelete = async () => {
        const course_id = parseInt(prop.id);
        const user_id = parseInt(id);
        await axios.post("https://rxk4239.uta.cloud/deletecourse.php", { user_id, course_id });
    }

    return (
        <div className="course-card" data-aos="fade-up" data-aos-duration="2000">
            <div className="cc-img-item cent">
                <img className="course-banner" src={imgSrc} alt={prop.title} />
            </div>
            <div className="cc-text-item col">
                <h3>{prop.title}</h3>
                <div className="course-external-link row">
                    {prop.enrolled === true ?
                        <Link to="/dashboard/grades" className="course-tag">Report</Link> :
                        <Link to="#" className="course-tag" onClick={handleEnroll}>Enroll</Link>
                    }
                    {prop.userType !== "admin" && (
                        <Link to="#" className="course-tag" onClick={handleDelete}>Delete</Link>
                    )}
                    <Link to={"/dashboard/course/" + prop.id} className="course-tag">About</Link>
                </div>
            </div>
        </div>
    );
}