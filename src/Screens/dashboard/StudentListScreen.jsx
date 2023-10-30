import React, { useState, useEffect } from "react";
import StudentCard from "../../Components/dashboard/StudentCard";
export default function StudentListScreen() {
  const facultyUserId = parseInt(localStorage.getItem('id'));
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Prepare the data to be sent in the POST request
    const postData = { faculty_user_id: facultyUserId };
    console.log("**",postData)
    console.log("*",students)

    // Make a POST request to the PHP endpoint to send the students state
    fetch("https://rxk4239.uta.cloud/getStudents.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData), // Send the postData as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching student data: ", error);
      });
  }, [facultyUserId]); // Include 'facultyUserId' in the dependency array

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