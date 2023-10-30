import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const StudentGrades = () => {
  const [data, setData] = useState([]);
  const [marks, setMarks] = useState(0);
  useEffect(()=>{
    async function sendDetails(){
        console.log(`faculty id is ${parseInt(localStorage.getItem("id"))}`);
        console.log(`course id is ${parseInt(localStorage.getItem("courseId"))}`);
        const response = await axios.post('https://rxk4239.uta.cloud/gradestudents.php', {faculty_user_id: parseInt(localStorage.getItem("id")), course_id: parseInt(localStorage.getItem("courseId"))});
         setData(response.data);
        console.log(`response data students is : ${data.students[0].first_name} `);
    }
    sendDetails();
  },[])
  const handleSubmit = async(id) => {
    
  };

  return (
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
          {data.students.map((row) => (
          <tr key={row.user_id}>
            <td>{row.email}</td>
            <td>{row.first_name}</td>
            <td>
                <input type="text" className="text" onChange={(e)=>setMarks(e.target.value)} />
            </td>
            <td>
              <button onClick={handleSubmit}>Submit</button>
            </td>
          </tr>
        ))}  
      </tbody>
    </table>
  );
};

export default StudentGrades;
