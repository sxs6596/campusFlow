import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CourseInfo.css';

const CourseReview = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('https://rxk4239.uta.cloud/coursereview.php')
      .then(response => {
        const validCourses = response.data.filter(course => course.title && course.description);
        setCourses(validCourses);
        const initialCourseId = validCourses[0]?.id || null;
        setSelectedCourseId(initialCourseId);
        console.log("Initial Course ID:", initialCourseId); // Debugging
      })
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  const handleSelectionChange = (e) => {
    const courseId = Number(e.target.value);
    setSelectedCourseId(courseId);
    console.log("Updated Course ID:", courseId); // Debugging
  }

  const approveCourse = () => {
    toast('Course Approved!');
  }

  const rejectCourse = async () => {
    if (!selectedCourseId) return;
  
    try {
      const response = await axios.delete(`https://rxk4239.uta.cloud/coursereview.php?id=${selectedCourseId}`);
      
      if (response.data && response.data.message) {
        if (response.data.message.includes('successfully')) {
          const updatedCourses = courses.filter(course => course.id !== selectedCourseId);
          setCourses(updatedCourses);
          setSelectedCourseId(updatedCourses[0]?.id || null);
          toast("Course Deleted Successfully!");
        } else {
          toast(response.data.message);
        }
      } else {
        toast("Unexpected server response. No message found.");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      if (error.response && error.response.data) {
        // Log server's response in case of an error
        console.error("Server responded with:", error.response.data);
      }
      toast("Error deleting course. Please try again.");
    }
  }
  

  return (
    <div className="course-info">
      <h1 className="title">Course Information</h1>
      <div className="select-container">
          <select value={selectedCourseId} onChange={handleSelectionChange} className="select">
              {courses.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
          </select>
      </div>
      <div className="course">
          <h2 className="course-name">{courses.find(course => course.id === selectedCourseId)?.title}</h2>
          <p className="description">{courses.find(course => course.id === selectedCourseId)?.description}</p>
          <ul className="topics">
              {/* Since topics are empty */}
          </ul>
          <div className="actions">
              <button onClick={approveCourse} className="btn approve">Approve Course</button>
              <button onClick={rejectCourse} className="btn reject">Reject Course</button>
          </div>
      </div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default CourseReview;