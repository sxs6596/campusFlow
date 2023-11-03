import CourseCard from "../../../Components/dashboard/CourseCard";
import Course from "../../../data/Course";
import {useState, useEffect} from "react";
import "./styles/Index.css";
import axios from 'axios';
export default function Index() {
    // enrolled courses
    const [data, setData] = useState({courses:[]});

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.post(
              "https://rxk4239.uta.cloud/enrolledget.php",
              { user_id: parseInt(localStorage.getItem("id")) }
            );
            const receivedCourses = response.data.courses;
            // console.log(`Received enrolled courses: ${response.data.courses}`);
    
            // Assuming response.data.courses is an array of primitive values (e.g., strings, numbers)
            // we can use a Set to remove any duplicates, as Sets only store unique values.
            const uniqueCourses = Array.from(new Set(receivedCourses));

            
    
            // Now we set the state with the array of unique courses.
            setData({ courses: uniqueCourses });
    
            // Note: The following log will not reflect the immediate change in `data` because `setData` is asynchronous.
            // It will display the old data if you try to log it right after calling setData.
            // console.log(`Unique enrolled courses are: ${data.courses}`);
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        fetchData();
      }, [data]);
      useEffect(() => {
        async function getCourses(){
          const response = await axios.get("https://rxk4239.uta.cloud/courses.php");
          const allCourses = response.data.data; 
          console.log(`all courses are ${allCourses}`);
          const filteredcourses = allCourses.filter(course => data.courses.includes(course.id));
          
          setFilteredData(filteredcourses);
        //   console.log(`filtered data is ${filteredData[0].enrolled}`);
          

        }
        getCourses();
      }, [filteredData])
    return <>
        <div className="enrolled-header row">
            <div>
                <h2>Enrolled Courses</h2>
            </div>
        </div>
        <div className="course-container row">
            {
                filteredData.filter((course) => {
                    return course.enrolled === '1';
                }).map((course) => {
                    return <CourseCard key={course.id} {...course} />
                })

            }
        </div>

    </>
}