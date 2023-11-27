import React, { useState, useEffect } from "react";
import axios from "axios";

import StudentCard from "../../Components/dashboard/StudentCard";

export default function StudentListScreen() {
  const userType = localStorage.getItem('user'); 
  const facultyUserId = parseInt(localStorage.getItem('id'));
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Determine the endpoint based on userType
      const endpoint = (userType === 'cord' || userType === 'quality-admin') 
          ? "https://rxk4239.uta.cloud/adminstudentlist.php"
          : "https://rxk4239.uta.cloud/getStudents.php";

      // Prepare the data to be sent in the POST request
      const postData = (userType !== 'cord' && userType !== 'quality-admin' && facultyUserId) 
          ? { faculty_user_id: facultyUserId } 
          : {};
      console.log("post data is : ", postData);

      try {
        const response = await axios.post(endpoint, postData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("student list in faculty page is : ", response.data)
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data: ", error);
      }
    }

    fetchData();
  }, [facultyUserId, userType]);

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