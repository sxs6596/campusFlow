import CourseCard from "../../../Components/dashboard/CourseCard";
import Course from "../../../data/Course";
import {useState, useEffect} from "react";
import "./styles/Index.css";
import axios from 'axios';
export default function Index() {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.post(
              "https://rxk4239.uta.cloud/enrolledget.php", {user_id: parseInt(localStorage.getItem("id"))});
            console.log(response);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, [data]);
    return <>
        <div className="enrolled-header row">
            <div>
                <h2>Enrolled Courses</h2>
            </div>
            <div className="seamster-option">
                <select className="select" name="" id="">
                    <option value="">Semester Fall 2022</option>
                    <option value="">Semester Fall 2023</option>
                    <option value="">Semester Fall 2024</option>
                </select>
            </div>
        </div>
        <div className="course-container row">
            {
                Course.filter((course) => {
                    return course.enrolled === true;
                }).map((course) => {
                    return <CourseCard key={course.id} {...course} />
                })

            }
        </div>

    </>
}