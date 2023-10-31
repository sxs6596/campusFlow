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
import axios from 'axios';

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
  labels: [],
  datasets: [
    {
      label: 'Grades',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
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
    },
  ],
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  transitionDuration: '0.4s',
};

const buttonHoverStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '2px solid #4CAF50',
};

const GradesBar = () => {
    const [displayData, setDisplayData] = useState(gradesData);
    const [averageMarks, setAverageMarks] = useState([]);
    const facultyUserId = parseInt(localStorage.getItem('id'));
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://rxk4239.uta.cloud/getcourses.php', {
            faculty_user_id: facultyUserId,
          });
          const  response_data = response.data.courses;
          console.log(response_data);
          const courses = response.data.courses;
          const courseIds = courses.map((courseId) => parseInt(courseId));
  
          const titlesResponse = await axios.post('https://rxk4239.uta.cloud/getCourseTitles.php', {
            course_ids: courseIds,
          });
          const courseTitles = titlesResponse.data.titles;
  
          const averageMarksPromises = courseIds.map(async (courseId) => {
            console.log('Sending request for course_id:', courseId);  // Log the course_id
            
            const response = await axios.post('https://rxk4239.uta.cloud/grades.php', {
              faculty_user_id: facultyUserId,
              course_id: courseId,
            });
    
            console.log('Response for course_id:', courseId, response.data);  // Log the response data
    
            return response.data.average_percent;
          });
          const averageMarks = await Promise.all(averageMarksPromises);
          setAverageMarks(averageMarks);
          const colors = [
            'rgba(255, 99, 132, 0.5)',   // Light Red
            'rgba(75, 192, 192, 0.5)',   // Cyan
            'rgba(255, 205, 86, 0.5)',   // Yellow
            'rgba(54, 162, 235, 0.5)',   // Blue
            'rgba(153, 102, 255, 0.5)',  // Purple
            'rgba(255, 159, 64, 0.5)',   // Orange
            'rgba(255, 99, 204, 0.5)',   // Pink
            'rgba(139, 195, 74, 0.5)',   // Lime
            'rgba(240, 98, 146, 0.5)',   // Deep Pink
            'rgba(121, 85, 72, 0.5)'     // Brown
          ];
          
          // Inside fetchData function:
          const finalUpdatedGradesData = {
            labels: courseIds.map((courseId) => courseTitles[courseId]),
            datasets: [
              {
                label: 'Grades',
                data: averageMarks,
                backgroundColor: averageMarks.map((_, index) => colors[index % colors.length]),
              },
            ],
          };
          setDisplayData(finalUpdatedGradesData);
          
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [displayData]);

  const handleToggleClick = () => {
    setDisplayData((prevData) =>
      prevData === gradesData ? studentData : gradesData
    );
  };

  return (
    <>
      {/* <button
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
      </button> */}
      <Bar options={options} data={displayData} />
    </>
  );
};

export default GradesBar;