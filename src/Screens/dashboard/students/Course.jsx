import "./styles/Course.css"
import CourseList from "../../../data/Course"
import CourseCard from "../../../Components/dashboard/CourseCard"
export default function Course() {
    return <>
        <div className="course-header">
            <h2>All Courses</h2>
        </div>
        <div className="course-container row">
        {
            CourseList.map((course) => {
                return <CourseCard key={course.id} {...course} />
            })
        }
        </div>
    </>
}
