import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import StudentCard from "../../Components/dashboard/StudentCard";

export default function StudentListScreen() {
  const userType = localStorage.getItem('user'); // Retrieve user type from localStorage
  const facultyUserId = parseInt(localStorage.getItem('id'));
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Create an async function to make the POST request
    async function fetchData() {
      try {
        // Determine the endpoint based on userType
        const endpoint = (userType === 'cord') 
            ? "https://rxk4239.uta.cloud/adminstudentlist.php"
            : "https://rxk4239.uta.cloud/getStudents.php";

        // Prepare the data to be sent in the POST request
        const postData = (userType !== 'cord' && facultyUserId) ? { faculty_user_id: facultyUserId } : {};

        // Make a POST request to the determined endpoint using Axios with async/await
        const response = await axios.post(endpoint, postData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Set the students state with the response data
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching student data: ", error);
      }
    }

    // Call the async fetchData function
    fetchData();
  }, [facultyUserId, userType]); // Include 'facultyUserId' and 'userType' in the dependency array

  return (
    <>
      <h1>Student List</h1>
      <div className="student-card-container">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </>
  );
}