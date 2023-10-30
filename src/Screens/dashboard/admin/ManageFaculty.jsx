import React, { useState, useEffect } from 'react';
import AdminFacultyCard from '../../../Components/dashboard/AdminFacultyCard';

export default function ManageFaculty(prop) {
    const [facultyMembers, setFacultyMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an HTTP GET request to fetch the list of faculty members
        fetch('https://rxk4239.uta.cloud/adminfacultylist.php')
            .then((response) => response.json())
            .then((data) => {
                setFacultyMembers(data); // Update the state with the fetched faculty members
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching faculty members: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Manage Faculty</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {facultyMembers.map((facultyMember) => (
                        <AdminFacultyCard
                            key={facultyMember.id}
                            userType={prop.userType}
                            {...facultyMember}
                        />
                    ))}
                </div>
            )}
        </>
    );
}