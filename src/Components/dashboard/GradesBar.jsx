import React, { useState } from 'react';
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
            text: 'Grades Visualization',
        },
    },
};

const gradesData = {
    labels: ['ML', 'Web Dev', 'SE2', 'UI/UX', 'DataMining'],
    datasets: [
        {
            label: 'Grades',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

const studentData = {
    labels: ['Student1', 'Student2', 'Student3', 'Student4', 'Student5'],
    datasets: [
        {
            label: 'Subject1',
            data: [90, 92, 87, 95, 88],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Subject2',
            data: [85, 78, 90, 89, 76],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
            label: 'Subject3',
            data: [88, 84, 91, 92, 79],
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
        }
    ],
};

const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    transitionDuration: "0.4s",
};

const buttonHoverStyle = {
    backgroundColor: "white",
    color: "black",
    border: "2px solid #4CAF50"
};

export default function GradesBar() {
    const [displayData, setDisplayData] = useState(gradesData);

    const handleToggleClick = () => {
        setDisplayData((prevData) => 
            prevData === gradesData ? studentData : gradesData
        );
    };

    return (
        <>
            <button 
                style={buttonStyle}
                onMouseOver={(e) => {
                    Object.assign(e.currentTarget.style, buttonHoverStyle);
                }}
                onMouseOut={(e) => {
                    Object.assign(e.currentTarget.style, buttonStyle);
                }}
                onClick={handleToggleClick}
            >
                (Grades/Students)
            </button>
            <Bar options={options} data={displayData} />
        </>
    );
}
