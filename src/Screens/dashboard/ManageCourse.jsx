import CourseCard from "../../Components/dashboard/CourseCard";
import Course from "../../data/Course";
import "./styles/ManageCourse.css"
export default function ManageCourse(prop) {
    return <>
        <div>
            <h1>Manage Course</h1>
        </div>
        <div className="manage-course-container row">
            {
                Course.map((course) => {
                    return <CourseCard key={course.id} {...course} />})
            }
        </div>
    </>
}
