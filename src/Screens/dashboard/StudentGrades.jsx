import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const StudentGrades = () => {
  const [data, setData] = useState([]);
  const [marksData, setMarksData] = useState([]);
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    async function sendDetails() {
      const response = await axios.post('https://rxk4239.uta.cloud/gradestudents.php', {
        faculty_user_id: parseInt(localStorage.getItem("id")),
        course_id: parseInt(localStorage.getItem("courseId"))
      });
      setData(response.data);
      fetchMarks(response.data.students.map(student => student.email));
    }

    async function fetchMarks(emails) {
      const courseId = parseInt(localStorage.getItem("courseId"));
      const marksResponses = await Promise.all(emails.map(email => axios.post('https://rxk4239.uta.cloud/displaymarks.php', { email, course_id: courseId })));
      setMarksData(marksResponses.map(res => res.data.marks));
    }

    sendDetails();
  }, []);

  const handleSubmit = async (user_id, index) => {
    const email = data.students[index].email;
    const courseId = parseInt(localStorage.getItem("courseId"));

    // Data to be sent to the backend
    const updateData = {
        email: email,
        course_id: courseId,
        marks: marks
    };

    // Log the data being sent to the backend
    console.log('Sending to updategrades.php:', updateData);

    try {
        const response = await axios.post('https://rxk4239.uta.cloud/updategrades.php', updateData);

        if (response.data.status === 'success') {
            console.log('Marks updated successfully');
            
            // Fetch the updated mark for the student
            const markResponse = await axios.post('https://rxk4239.uta.cloud/displaymarks.php', { email, course_id: courseId });
            const updatedMarks = [...marksData];
            updatedMarks[index] = markResponse.data.marks;
            setMarksData(updatedMarks);

        } else {
            console.error('Failed to update marks');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};



  return (
    <div>
      <table className="customTable">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
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
                <td>{marksData[index]}</td>
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