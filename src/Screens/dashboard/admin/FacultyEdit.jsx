import React, { useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function FacultyEdit() {
    const [name, setName] = useState(""); // State for the faculty's name
    const [email, setEmail] = useState(""); // State for the faculty's email
    const facultyId = localStorage.getItem('facultyId'); // Retrieve faculty ID from localStorage

    function updateFaculty(e) {
        e.preventDefault();

        // Create an object with updated faculty data
        const updatedFacultyData = {
            id: facultyId, // Use the retrieved faculty ID
            first_name: name,
            email: email,
            roll_no: facultyId,

        };

        // Make an API request to update the faculty data in your backend
        fetch("https://rxk4239.uta.cloud/updatestudentdata.php", {
            method: "PUT", // Use the appropriate HTTP method (e.g., PUT)
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFacultyData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Faculty Updated");
            } else {
                alert("Failed to update faculty");
            }
        })
        .catch(error => {
            console.error("Error updating faculty: ", error);
        });
    }

    return (
        <>
            <div>
                <h1>Edit Faculty Details</h1>
            </div>
            <div>
                <form onSubmit={e => updateFaculty(e)}>
                    <div className="input-core">
                        <BsFillPersonFill className="input-img" />
                        <input
                            className="input"
                            type="text"
                            placeholder="Faculty Name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-core">
                        <IoMdMail className="input-img" />
                        <input
                            className="input"
                            type="email"
                            placeholder="Faculty Email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="button">
                        Update Faculty Information
                    </button>
                </form>
            </div>
        </>
    );
}