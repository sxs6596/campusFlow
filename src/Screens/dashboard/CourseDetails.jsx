import Course from "../../data/Course"
import "./styles/CourseDetails.css"
import { useParams,Link } from "react-router-dom"
import CourseNotFound from "../../Components/dashboard/CourseNotFound"
export default function CourseDetails(){
    let {courseId} = useParams()
    let fetcher = ()=>{
        return Course.find((item)=>{
            if(item.id==courseId){
                return item
            }else{
                return null
            }
        })
    }
    let result = fetcher()
    return <>
        <div className="row">
            <div class="aside-course-nav col">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/grades">Grades</Link>
                <Link to="/dashboard/discussion">Discussion</Link>
                <Link to="/dashboard/courses">All Courses</Link>

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