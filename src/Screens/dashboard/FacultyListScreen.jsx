import React, { useState, useEffect } from 'react';
import FacultyCard from "../../Components/dashboard/FacultyCard";
import "./styles/FacultyListScreen.css";

export default function FacultyListScreen() {
    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        // Fetch the student_user_id from local storage
        const studentUserId = localStorage.getItem('id');

        // Replace with your actual PHP script URL
        const url = 'https://rxk4239.uta.cloud/getfaculty.php'; 

        // Configure the request options
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ student_user_id: studentUserId })
        };

        // Fetch data from the PHP script
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setFacultyData(data))
            .catch(error => console.error('Error fetching faculty data:', error));
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <div className="faculty-header">
                <h1>Faculty List</h1>
            </div>
            <div className="faculty-list-container row">
                {
                    facultyData.map((faculty) => (
                        <FacultyCard key={faculty.id} {...faculty} />
                    ))
                }
            </div>
        </>
    );
}