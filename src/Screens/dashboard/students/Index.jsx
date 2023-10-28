import CourseCard from "../../../Components/dashboard/CourseCard";
import Course from "../../../data/Course";
import "./styles/Index.css";
export default function Index() {
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