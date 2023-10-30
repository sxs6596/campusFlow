import React, { useState, useEffect } from 'react';
import StudentCard from "../../../Components/dashboard/StudentCard";

export default function ManageStudent(prop) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an HTTP GET request to your PHP endpoint to fetch the list of students
        fetch('https://rxk4239.uta.cloud/adminstudentlist.php')
            .then((response) => response.json())
            .then((data) => {
                setStudents(data); // Update the state with the fetched students
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching students: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Manage Student</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {students.map((student) => (
                        <StudentCard
                            key={student.id}
                            userType={prop.userType}
                            {...student}
                        />
                    ))}
                </div>
            )}
        </>
    );
}