import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const StudentGrades = () => {
  const [data, setData] = useState([]);
  const [marks, setMarks] = useState(0);
  const [userIds, setUserIds] = useState([]); // Add state for user_ids
  const [courseId, setCourseId] = useState(''); // Add state for course_id

  useEffect(() => {
    async function sendDetails() {
      console.log(`faculty id is ${parseInt(localStorage.getItem("id"))}`);
      console.log(`course id is ${parseInt(localStorage.getItem("courseId"))}`);
      const response = await axios.post('https://rxk4239.uta.cloud/gradestudents.php', {
        faculty_user_id: parseInt(localStorage.getItem("id")),
        course_id: parseInt(localStorage.getItem("courseId"))
      });
      setData(response.data);
      setUserIds(response.data.students.map((row) => row.user_id)); // Get user_ids
      console.log(`response data students is : ${data} `);
    }
    sendDetails();
  }, []);

  const handleSubmit = async (user_id, index) => {
    const email = data.students[0].email;


     // Log the data before sending it to the backend
    console.log('Sending data to backend:', {
    email: email,
    course_id: parseInt(localStorage.getItem("courseId")),
    marks: marks
  });
    // Send user_id, course_id, and marks to the backend
    try {
      const response = await axios.post('https://rxk4239.uta.cloud/grades.php', {
        email: email,
        course_id: parseInt(localStorage.getItem("courseId")),
        marks: marks
      });

      if (response.data.status === 'success') {
        // Handle success, e.g., show a success message to the user
        console.log('Marks updated successfully');
      } else {
        // Handle error, e.g., show an error message to the user
        console.error('Failed to update marks');
      }
    } catch (error) {
      // Handle any network or server errors
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <table className="customTable">
        <thead>
          <tr>
            <th>Email</th>
            <th>Marks</th>
            <th>Update Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.students ? (
            data.students.map((row, index) => (
              <tr key={row.user_id}>
                <td>{row.email}</td>
                <td>{row.first_name}</td>
                <td>
                  <input
                    type="text"
                    className="text"
                    onChange={(e) => setMarks(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleSubmit(row.user_id, index)}>Submit</button>
                </td>
              </tr>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGrades;