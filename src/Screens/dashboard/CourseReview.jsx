import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CourseInfo.css';
const courses = {
  'Data Structures': {
    description: 'This course covers fundamental data structures like arrays, linked lists, stacks, queues, trees, graphs etc',
    topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs']
  },
  'Operating Systems': {
    description: 'This course teaches concepts of operating systems including processes, threads, concurrency, deadlocks, memory management, scheduling algorithms etc', 
    topics: ['Processes', 'Threads', 'Concurrency', 'Deadlocks', 'Memory', 'Scheduling']
  },
  'Computer Networks': {
    description: 'This course covers computer network architectures, protocols, routing, network security, and more',
    topics: ['OSI Model', 'Routing', 'TCP/IP', 'HTTP', 'DNS', 'Network Security']
  }
}

const CourseReview = () => {

  const [selectedCourse, setSelectedCourse] = useState('Data Structures');

  const handleChange = (e) => {
    setSelectedCourse(e.target.value);
  }

  const course = courses[selectedCourse];

  const approveCourse = () => {
    toast('Course Approved!');
  }

  const rejectCourse = () => {
    toast('Course Rejected');
  }

  return (
    <div className="course-info">
      <h1 className="title">Course Information</h1>

      <div className="select-container">
          <select value={selectedCourse} onChange={handleChange} className="select">
            <option value="Data Structures">Data Structures</option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="Computer Networks">Computer Networks</option>
          </select>
      </div>

      <div className="course">
          <h2 className="course-name">{selectedCourse}</h2>
          <p className="description">{course.description}</p>
          <ul className="topics">
            {course.topics.map(topic => <li key={topic}>{topic}</li>)}
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