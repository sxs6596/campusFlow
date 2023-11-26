import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CourseInfo.css';

const CourseReview = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    useEffect(() => {
        axios.get('https://rxk4239.uta.cloud/coursereview.php')
            .then(response => {
                setCourses(response.data);
                setSelectedCourseId(response.data[0]?.id || null);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
                toast.error("Error fetching courses");
            });
    }, []);

    const handleSelectionChange = (e) => {
        setSelectedCourseId(Number(e.target.value));
    }

    const processCourse = async (action) => {
        if (!selectedCourseId) return;

        try {
            const response = await axios.post('https://rxk4239.uta.cloud/acceptcourse.php', {
                courseId: selectedCourseId,
                action: action
            });

            if (action === "delete") {
                setCourses(courses.filter(course => course.id !== selectedCourseId));
            }
            toast.success(response.data.message);
        } catch (error) {
            console.error(`Error ${action === "accept" ? 'accepting' : 'deleting'} course:`, error);
            toast.error(`Error ${action === "accept" ? 'accepting' : 'deleting'} course. Please try again.`);
        }
    }

    return (
        <div className="course-info">
            <h1 className="title">Course Review</h1>
            <div className="select-container">
                <select value={selectedCourseId || ''} onChange={handleSelectionChange} className="select">
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                </select>
            </div>
            <div className="course">
                <h2 className="course-name">{courses.find(course => course.id === selectedCourseId)?.title}</h2>
                <p className="description">{courses.find(course => course.id === selectedCourseId)?.description}</p>
                <div className="actions">
                    <button onClick={() => processCourse("accept")} className="btn approve">Approve Course</button>
                    <button onClick={() => processCourse("delete")} className="btn reject">Reject Course</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CourseReview;