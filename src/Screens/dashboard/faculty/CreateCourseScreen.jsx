import { FaSwatchbook } from "react-icons/fa"
import Course from "../../../data/Course"
import Image1 from "../../../assets/images/course1.jpg"
import axios from "axios"
import { useState } from "react"
export default function CreateCourseScreen() {
    const [course, setCourse] = useState({
        id: '',
        title: '',
        image: 'course-1',
        credit: '3',
        description: '',
        start_date:'',
        end_date: '',
        enrolled: '',
        user_id: parseInt(localStorage.getItem('id'))
    })
    const handleData = e => {
        let value = e.target.value;
        let name = e.target.name;
        setCourse(currentData => ({ ...currentData, [name]: value }))   
    }
    const createCourse = async (e) => {
        e.preventDefault();
        alert("Course Created");
        console.log(`course that we are sending is : ${JSON.stringify(course)}`);
        const response = await axios.post("https://rxk4239.uta.cloud/addcourse.php",course);
        console.log(response);
    }
    return <>
        <div>
            <h1>Create Course</h1>
        </div>
        <div>
            <form action="" method="" onSubmit={(e) =>{createCourse(e)}}>
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
                        <input type="date" name="start_date" className="input" placeholder="Course ID" required onChange={handleData}/>
                    </div>
                    <div className="input-core row">
                        <input type="date" name="end_date" className="input" placeholder="Course ID" required onChange={handleData}/>
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