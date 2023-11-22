import "./styles/Course.css"
import { useEffect, useState } from "react"
import CourseList from "../../../data/Course"
import CourseCard from "../../../Components/dashboard/CourseCard"
import {Container, Grid} from '@radix-ui/themes';
import axios from 'axios'; 
export default function Course() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              "https://rxk4239.uta.cloud/courses.php"
            );
            setData(response.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, [data]);
      
    return <>
        <div className="course-header">
            <h2>All Courses</h2>
        </div>
        {/* <div className="course-container row">
        {
            data.map((course) => {
                return <CourseCard key={course.id} {...course} />
            })
        }
        </div> */}
        <Container>
        <Grid columns="2" gap="5" width="auto">
        {
            data.map((course) => {
                return <CourseCard key={course.id} {...course} />
            })
        }
        </Grid>
        </Container>
    </>
}
