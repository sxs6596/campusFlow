import { BsFillJournalBookmarkFill } from "react-icons/bs";
import CourseData from "../../../data/Course"
import { useState } from "react";
import "./styles/ModifyCourse.css";
export default function ModifyCourse() {
    const [course, setCourse] = useState(CourseData);
    function courseModified(e){
        e.preventDefault();
        alert("Course Modified")
    }
    function deleteCourse(e, id){
        setCourse(course.filter(item=>item.id!==id))
        alert("Course Deleted")
    }
    return <>
        <div className="qa-course-header row">
            <h2>Update Courses</h2>
        </div>
        <form onSubmit={e => courseModified(e)}>
            <div className="input-core row">
                <BsFillJournalBookmarkFill className="input-img" />
                <input className="input" type="text" placeholder="Course Name"  value="CSE 258 001" />
            </div>
            <div className="dbl">
                <div className="input-core row">
                    <input className="input" type="date" placeholder="Course Name" value="2022-06-01" />
                </div>
                <div className="input-core row">
                    <input className="input" type="date" placeholder="Course Name" value="2023-12-31" />
                </div>
            </div>
            <div className="input-core row">
                <BsFillJournalBookmarkFill className="input-img" />
                <input className="input" type="text" placeholder="Course Description" value="Software Engineering. This course covers the principles and practices of software engineering, including
                        requirements analysis, design, testing, and maintenance. Students will learn how to work in teams to develop software
                        projects using modern software engineering tools and techniques." />
            </div>
            <button className="button">
                Update Courses
            </button>
        </form>
        <div>
           {
            course.map(item=>{
                return <>
                    <div className="course-box row">
                        <div className="course-box-left">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="course-box-right">
                            <button className="deleteBtn" onClick={e => deleteCourse(e,item.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </>
            })
           }
        </div>
    </>
}