import { FaSwatchbook } from "react-icons/fa"
import Course from "../../../data/Course"
import Image1 from "../../../assets/images/course1.jpg"
import { useState } from "react"
export default function UpdateCourse() {
    const [course, setCourse] = useState({
        id: "",
        title: Image1,
        image: '',
        description: "",
        start_date: "",
        end_date: '',
        enrolled: false
    })
    const handleData = e => {
        let value = e.target.value;
        let name = e.target.name;
        setCourse(currentData => ({ ...currentData, [name]: value }))
    }
    const createCourse = (e) => {
        e.preventDefault()
        let DataFound = Course.find(data => data.id == course.id)
        if (DataFound != undefined) {
            DataFound.title = course.title
            DataFound.image = course.image
            DataFound.description = course.description
            DataFound.start_date = course.start_date
            DataFound.end_date = course.end_date
            DataFound.enrolled = course.enrolled
            alert("Course Updated")
        }
        else
            alert("Course not found in database")
    }
    return <>
        <div>
            <h1>Update Course</h1>
        </div>
        <div>
            <form action="" method="" onSubmit={(e) => { createCourse(e) }}>
                <div className="input-core row">
                    <FaSwatchbook className="input-img" />
                    <input type="text" name="title" className="input" placeholder="Course Title" required onChange={handleData} />
                </div>
                <div className="input-core row">
                    <FaSwatchbook className="input-img" />
                    <input type="text" name="id" className="input" placeholder="Course ID" required onChange={handleData} />
                </div>
                <br />
                <div>
                    <h4>Start Date & End Date</h4>
                </div>
                <div className="dbl">
                    <div className="input-core row">
                        <input type="date" name="start_date" className="input" placeholder="Course ID" required onChange={handleData} />
                    </div>
                    <div className="input-core row">
                        <input type="date" name="end_date" className="input" placeholder="Course ID" required onChange={handleData} />
                    </div>
                </div>
                <div className="txt-area">
                    <textarea name="description" id="" className="textarea" onChange={handleData}>
                        Course Description
                    </textarea>
                </div>
                <button className="button">
                    Create Course
                </button>
            </form>
        </div>
    </>
}