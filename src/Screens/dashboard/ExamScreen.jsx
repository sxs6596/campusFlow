import React, { useState, useEffect } from "react";
import ExamCard from "../../Components/dashboard/ExamCard";
import axios from "axios";
import "./styles/ExamScreen.css";

export default function ExamScreen() {
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API endpoint
    axios
      .get("https://rxk4239.uta.cloud/exam.php") // Adjust the endpoint path as needed
      .then((response) => {
        // Assuming the response data is an array of exam objects
        setExamData(response.data.data); // Update the state with the actual data field
      })
      .catch((error) => {
        console.error("Error fetching exam data:", error);
      });
  }, []);

  return (  
    <>
      <div className="exam-header row">
        <div className="exam-header-item">Exam ID</div>
        <div className="exam-header-item">Exam Name</div>
        <div className="exam-header-item">Exam Date</div>
      </div>
      {examData.map((exam) => (
        <ExamCard
          key={exam.ExamID} // Assuming your exam object has an 'ExamID' property
          examId={exam.ExamID}
          examName={exam.ExamName}
          examDate={exam.ExamDate}
        />
      ))}
    </>
  );
}
