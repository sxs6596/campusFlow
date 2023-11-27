import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ModifyCourse.css";
import {Flex, Button, Card, Heading, Text, Box} from '@radix-ui/themes';
export default function ModifyCourse() {
    const [course, setCourse] = useState([]);
    const [newData, setnewData] = useState({
        id: 0,
        title: "",
        description: "",
        start_date: "",
        end_date: "",
    });

    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch("https://rxk4239.uta.cloud/courses.php");
            const data = await response.json();
            setCourse(data.data);
        };
        getCourses();
    }, [course]);

    async function courseModified(e) {
        e.preventDefault();
        alert("Course Modified");
        const response = await axios.post('https://rxk4239.uta.cloud/updatecourses.php', newData);
    }

    async function deleteCourse(e, id) {
        e.preventDefault();

        try {
            const response = await axios.delete(`https://rxk4239.uta.cloud/coursereview.php?id=${id}`);
            if (response.data.message.includes('successfully')) {
                setCourse(course.filter((item) => item.id !== id));
                alert("Course Deleted Successfully!");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error deleting course:", error);
            alert("Error deleting course. Please try again.");
        }
    }

    const uniqueCourses = course.filter((item, index, self) =>
        index === self.findIndex((t) => t.title === item.title)
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
                        onChange={e => setnewData({ ...newData, id: e.target.value })}
                    />
                </div>
                <div className="input-core row">
                    <BsFillJournalBookmarkFill className="input-img" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Course Name"
                        onChange={e => setnewData({ ...newData, title: e.target.value })}
                    />
                </div>
                <div className="dbl">
                    <div className="input-core row">
                        <input
                            className="input"
                            type="date"
                            placeholder="start date"
                            onChange={e => setnewData({ ...newData, start_date: e.target.value })}
                        />
                    </div>
                    <div className="input-core row">
                        <input
                            className="input"
                            type="date"
                            placeholder="end date"
                            onChange={e => setnewData({ ...newData, end_date: e.target.value })}
                        />
                    </div>
                </div>
                <div className="input-core row">
                    <BsFillJournalBookmarkFill className="input-img" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Course Description"
                        onChange={e => setnewData({ ...newData, description: e.target.value })}
                    />
                </div>
                <Flex direction = "column" align="center" gap="3"> 
                <Button size="3">Update Courses</Button>
                </Flex>
            </form>
            
                <Box gap="3" mt="4">
                    <Heading>Available Courses List</Heading>
                <Flex direction="column" px="5" gap="3">
                {uniqueCourses.map((item,id)=>{
                    return(
                        <Card key={id} className="course-card" style={{ padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', maxWidth:'500px' }}>
                            <Flex direction="row" justify="space-between" align="center">
                                <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</Text>
                                <Button size="4" onClick={e => deleteCourse(e, item.id)} style={{ backgroundColor: '#ff0000', color: '#ffffff' }}>
                                    Delete
                                </Button>
                            </Flex> 
                        </Card>
                    )
                })}
                </Flex>
                </Box>
            
        </>
    );
}