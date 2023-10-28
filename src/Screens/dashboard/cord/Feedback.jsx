import React, { useState, useEffect } from 'react';

const Feedback = () => {
    const [course, setCourse] = useState('');
    const [recipient, setRecipient] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const handleCourseChange = (e) => setCourse(e.target.value);
    const handleRecipientChange = (e) => setRecipient(e.target.value);
    const handleFeedbackChange = (e) => setFeedback(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

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
                        <option value="" disabled>Select a course</option>
                        <option value="ml">ML</option>
                        <option value="dm">Data Mining</option>
                        <option value="wdm">WDM</option>
                        <option value="se2">SE2</option>
                        <option value="ai">AI</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="recipient" style={styles.label}>Recipient: </label>
                    <select id="recipient" value={recipient} onChange={handleRecipientChange} style={styles.select}>
                        <option value="" disabled>Select a recipient</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
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
