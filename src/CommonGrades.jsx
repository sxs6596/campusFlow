import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export default function CommonGradesBar() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://rxk4239.uta.cloud/totalgrades.php');

                // Check if the response data is an array
                if (Array.isArray(response.data)) {
                    const labels = response.data.map(item => item.course_title);
                    const grades = response.data.map(item => item.average_grade);
                    
                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Grades',
                                data: grades,
                                backgroundColor: 'rgba(255, 99, 132, 0.5)'
                            }
                        ]
                    });
                } else {
                    console.error('Unexpected data format:', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        chartData && (
            <Bar
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Result',
                        },
                    }
                }}
                data={chartData}
            />
        )
    );
}