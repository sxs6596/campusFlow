import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
const Feedback = () => {
    const [course, setCourse] = useState('');
    const [recipient, setRecipient] = useState('');
    const [recipientList, setRecipientList] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedUserEmail, setSelectedUserEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [data, setData] = useState([]);
    const handleCourseChange = (e) => {
        console.log(`selected course is ${e.target.value}`);
        setCourse(e.target.value);
    };
    const handleRecipientChange = (e) => {
         setRecipient(e.target.value);
    };
    const handleSelectedUser = (e) => {
        const id = parseInt(e.target.value, 10);  // Convert to number, assuming ID is a number
        
        const selectedUser = recipientList.find(user => user.id === id);
    
        if (selectedUser) {
            console.log(`selected user email is ${selectedUser.email}`);
            setSelectedUserEmail(selectedUser.email);
        } else {
            console.log('User not found.');
        }
    }
    const handleFeedbackChange = (e) => setFeedback(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            userEmail: selectedUserEmail,
            message: feedback,
          };
        emailjs
      .send(
        'service_up1xs7j',   // Your service ID here
        'template_dp3wnj8',  // Your template ID here
        templateParams,
        'ifaU79LsaGrnt6bZ3'       // Your user ID here
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
    };

    useEffect(() => {
        const fetchData = async () => {
          const role = recipient;
          
          const headers = {
            "Content-Type": "application/json",
          };
    
          try {
            const response = await axios.post(
              "https://sxs6596.uta.cloud/test_getformdata.php",
              {role},
              {
                headers: headers,
                withCredentials: true,
              }
            );
    
            if (
              response.data &&
              response.data.status === "success" &&
              Array.isArray(response.data.users)
            ) {
              console.log(`received users are : ${response.data.users}`);
              setRecipientList(response.data.users);
            }
          } catch (error) {
            console.error("Error during the Axios request:", error);
          }
        };
    
        fetchData();
      }, [recipient]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              "https://rxk4239.uta.cloud/courses.php"
            );
            console.log(`received courses are : ${response.data.data[0]}`);
            setData(response.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8f8f8',
            paddingTop: '100px',
        },
        form: {
            backgroundColor: '#fff',
            padding: isMobile ? '20px' : '60px',
            borderRadius: '8px',
            width: isMobile ? '90%' : '600px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '50px',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            fontSize: '14px',
            color: '#555',
            marginBottom: '5px',
        },
        select: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            outline: 'none',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            outline: 'none',
            height: '100px',
            resize: 'vertical',
        },
        button: {
            backgroundColor: '#4A90E2',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        feedbackSent: {
            marginTop: '20px',
            color: '#4CAF50',
        },
    };
    

    return (
        <div style={styles.container}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="course" style={styles.label}>Course: </label>
                    <select id="course" value={course} onChange={handleCourseChange} style={styles.select}>
                        {data.map((course)=><option value={course.id}>{course.title}</option>)}
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="recipient" style={styles.label}>Recipient: </label>
                    <select id="recipient" value={recipient} onChange={handleRecipientChange} style={styles.select}>
                        <option value="" disabled>Select a recipient</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="recipient" style={styles.label}>Select From List: </label>
                    <select id="recipient" value={recipient} onChange={handleSelectedUser} style={styles.select}>
                        {recipientList.map((recipient)=><option value={recipient.id}>{recipient.name}</option>)}
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="feedback" style={styles.label}>Feedback: </label>
                    <textarea 
                        id="feedback" 
                        value={feedback} 
                        onChange={handleFeedbackChange}
                        placeholder="Write your feedback here..."
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
                {isSubmitted && <p style={styles.feedbackSent}>Feedback sent!</p>}
            </form>
        </div>
    );
};

export default Feedback;
