import Course from "../../data/Course"
import "./styles/CourseDetails.css"
import { useParams,Link } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';
import { useContext } from "react";
import User from "../../data/User";
import CourseNotFound from "../../Components/dashboard/CourseNotFound"
export default function CourseDetails(){
    const {id, setID} = useContext(User);
    const [result, setResult] = useState(null);
    let {courseId} = useParams()
    // let fetcher =  ()=>{
    //     return response.data.data.find((item)=>{
    //         if(item.id==courseId){
    //             console.log(item);
    //             return item
    //         }else{
    //             return null
    //         }
    //     })
    // }
    const fetcher = async ()=>{
        const response = await axios.get("https://rxk4239.uta.cloud/courses.php");
        response.data.data.find((item)=>{
            if(item.id==courseId){
                setResult(item);
                localStorage.setItem("courseId",item.id);
                return item;
            }else{
                return null
            }
        })
    }
    let results = fetcher()
    console.log(`result is ${result}`);
    return <>
        <h3>Logged in user id is : {id}</h3>
        <div className="row">
            <div class="aside-course-nav col">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/grades">Grades</Link>
                <Link to="/dashboard/discussion">Discussion</Link>
                <Link to="/dashboard/StudentGrades">Student Grades</Link>

            </div>
           <div className="col">
                {
                    result == null ? <CourseNotFound /> : <>
                        <h1>Course Details</h1>
                        <div className="course-details-cont col">
                            <img className="course-details-img" src={result.image} alt="" />
                            <h2>{result.title}</h2>
                            <div className="course-timing row">
                                <span>Start Date: {result.start_date}</span>
                                <span>End Date: {result.end_date}</span>
                            </div>
                            <p>{result.description}</p>
                        </div>
                    </>
                }
           </div>
        </div>
    </>
}