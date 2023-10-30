import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Users',
        },
    },
};

export default function AdminBar() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch user counts from the backend API
        fetch('https://rxk4239.uta.cloud/usermonitor.php') // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((userData) => {
                // Extract user counts from the response
                const userCounts = {
                    Faculty: userData.facultyCount,
                    Students: userData.studentCount,
                    'QA Officer': userData.qaOfficerCount,
                    Coordinator: userData.coordinatorCount,
                    Admin: userData.adminCount,
                };

                // Create the data object
                const labels = Object.keys(userCounts);
                const counts = Object.values(userCounts);

                const updatedData = {
                    labels,
                    datasets: [
                        {
                            label: 'Total Users',
                            data: counts,
                            backgroundColor: 'rgba(99, 102, 255, 0.5)',
                        },
                    ],
                };

                setData(updatedData);
            })
            .catch((error) => {
                console.error('Error fetching user data: ', error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return <Bar options={options} data={data} />;
}