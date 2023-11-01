import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ModifyCourse.css";

export default function ModifyCourse() {
    const [course, setCourse] = useState([]);
    const [newData, setnewData] = useState({
            id : 0,
            title : "",
            description : "",
            start_date : "",
            end_date : "",
    });
    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch("https://rxk4239.uta.cloud/courses.php");
            const data = await response.json();
            // console.log(data.data);
            setCourse(data.data);
        };
        getCourses();
    }, [course]);

    async function courseModified(e) {
        e.preventDefault();
        alert("Course Modified");
        const response = await axios.post('https://rxk4239.uta.cloud/updatecourses.php',newData);
        // console.log(`updated data is :${newData.id}`);
    }
    
    function deleteCourse(e, id) {
        setCourse(course.filter((item) => item.id !== id));
        alert("Course Deleted");
    }
    const uniqueCourses = course.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.title === item.title
  ))
)
    
    return (
        <>
            <div className="qa-course-header row">
                <h2>Update Courses</h2>
            </div>
            <form onSubmit={(e) => courseModified(e)}>
                <div className="input-core row">
                    <BsFillJournalBookmarkFill className="input-img" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Course ID"
                        onChange = {e=>setnewData({...newData,id:e.target.value})}
                    />
                </div>
                <div className="input-core row">
                    <BsFillJournalBookmarkFill className="input-img" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Course Name"
                        onChange = {e=>setnewData({...newData,title:e.target.value})}
                    />
                </div>
                <div className="dbl">
                    <div className="input-core row">
                        <input
                            className="input"
                            type="date"
                            placeholder="start date"
                            onChange = {e=>setnewData({...newData,start_date:e.target.value})}
                        />
                    </div>
                    <div className="input-core row">
                        <input
                            className="input"
                            type="date"
                            placeholder="end date"
                            onChange = {e=>setnewData({...newData,end_date:e.target.value})}
                        />
                    </div>
                </div>
                <div className="input-core row">
                    <BsFillJournalBookmarkFill className="input-img" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Course Description"
                        onChange = {e=>setnewData({...newData,description:e.target.value})}
                    />
                </div>
                <button className="button">Update Courses</button>
            </form>
            <div>
                {
                    uniqueCourses.map(item=>{
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
    );
}