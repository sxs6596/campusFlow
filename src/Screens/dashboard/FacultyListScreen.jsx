import React, { useState, useEffect } from 'react';
import FacultyCard from "../../Components/dashboard/FacultyCard";
import "./styles/FacultyListScreen.css";
import {Heading, Text, Badge} from '@radix-ui/themes'
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
               <Heading gap="3" mb="3">Faculty List</Heading> 
            </div>
            <div className="faculty-list-container row">

                {(facultyData.length === 0) ? <Badge highContrast color = "red" style={{maxWidth:"200px"}}>No faculty found</Badge> : facultyData.map((faculty) => (
                        <FacultyCard key={faculty.id} {...faculty} />
                    ))}
               
            </div>
        </>
    );
}