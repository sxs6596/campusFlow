import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { useState } from "react";

export default function StudentEdit() {
  const [name, setName] = useState(""); // State for the student's name
  const [email, setEmail] = useState(""); // State for the student's email
  const [rollNo, setRollNo] = useState(""); // State for the student's roll number
  const studentId = localStorage.getItem('studentId'); // Retrieve student ID from localStorage

  function updateStudent(e) {
    e.preventDefault();

    // Create an object with updated student data
    const updatedStudentData = {
      id: studentId, // Use the retrieved student ID
      first_name: name,
      email: email,
      roll_no: rollNo,
    };  

    // Make an API request to update the student data in your backend
    fetch("https://rxk4239.uta.cloud/updatestudentdata.php", {
      method: "PUT", // Use the appropriate HTTP method (e.g., PUT)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudentData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Student Updated");
        } else {
          alert("Failed to update student");
        }
      })
      .catch((error) => {
        console.error("Error updating student: ", error);
      });
  }

  return (
    <>
      <div>
        <h1>Edit Student Details</h1>
      </div>
      <div>
        <form action="" onSubmit={(e) => updateStudent(e)}>
          <div className="input-core">
            <BsFillPersonFill className="input-img" />
            <input
              className="input"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-core">
            <IoMdMail className="input-img" />
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-core">
            <BsFillPersonFill className="input-img" />
            <input
              className="input"
              type="text"
              placeholder="Roll No."
              required
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <button className="button">Update Student Information</button>
        </form>
      </div>
    </>
  );
}