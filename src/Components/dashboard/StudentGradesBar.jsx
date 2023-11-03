import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Result',
        },
    },
};

export default function StudentGradesBar() {
    const [chartData, setChartData] = useState(null);
    const user_id = parseInt(localStorage.getItem('id')) ; // Replace with the appropriate user ID, perhaps from context or props

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("https://rxk4239.uta.cloud/studentgradesgraph.php", { user_id });
                console.log("Received response:", response.data);
                
                const labels = response.data.map(item => item.title);
                const data = response.data.map(item => item.marks);

                const backgroundColors = [
                    'rgba(255, 99, 132, 0.5)',   // Red
                    'rgba(75, 192, 192, 0.5)',   // Teal
                    'rgba(255, 206, 86, 0.5)',   // Yellow
                    'rgba(153, 102, 255, 0.5)',  // Purple
                    'rgba(54, 162, 235, 0.5)',   // Blue
                    'rgba(255, 159, 64, 0.5)',   // Orange
                    'rgba(99, 255, 132, 0.5)',   // Light Green
                    'rgba(255, 99, 255, 0.5)',   // Pink
                    'rgba(128, 128, 128, 0.5)',  // Gray
                    'rgba(170, 86, 40, 0.5)'     // Brown
                ];
                
                setChartData({
                    labels,
                    datasets: [{
                        label: 'Grades',
                        data,
                        backgroundColor: backgroundColors.slice(0, data.length)
                    }]
                });
            } catch (error) {
                console.error('Error fetching grades: ', error);
            }
        }

        fetchData();
    }, [user_id]);

    return (
        chartData && <Bar options={options} data={chartData} />
    );
}