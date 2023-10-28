import React, { useState } from 'react';

const cardStyles = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '1rem'
};

const cardBodyStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
};

const textStyles = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
};

const editButtonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    display:'inline-block'
};

const deleteButtonStyles = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem'
};
const addButtonStyles = {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    marginRight: '1rem'
  };
export default function Policies() {
    const [isEditing, setIsEditing] = useState(false);
    const [policyText, setPolicyText] = useState('Plagiarism is strictly prohibited. Any work submitted by a student must be their own original work. Copying another person\'s work or ideas without proper citation will result in disciplinary action.');

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setPolicyText(event.target.value);
    };
    const renderCard = () => {
        return (
            <div>
                <button styles={{addButtonStyles}}>Add New Policy</button>
                <div style={cardStyles}>
                    <div style={cardBodyStyles}>
                        <h5>Plagiarism Policy</h5>
                        <p style={textStyles}>{policyText}</p>
                        <button style={editButtonStyles} onClick={handleEdit}>Edit</button>
                        <button style={deleteButtonStyles}>Delete</button>
                    </div>
                </div>
                <div style={cardStyles}>
                <div style={cardBodyStyles}>
                    <h5>Assignment Policy</h5>
                    <p style={textStyles}>{policyText}</p>
                    <button style={editButtonStyles} onClick={handleEdit}>Edit</button>
                    <button style={deleteButtonStyles}>Delete</button>
                </div>
                </div>
                <div style={cardStyles}>
                <div style={cardBodyStyles}>
                    <h5>Grading Policy</h5>
                    <p style={textStyles}>{policyText}</p>
                    <button style={editButtonStyles} onClick={handleEdit}>Edit</button>
                    <button style={deleteButtonStyles}>Delete</button>
                </div>
                </div>
            </div>
        );
    };

    const renderEditor = () => {
        return (
            <div style={cardStyles}>
                <div style={cardBodyStyles}>
                    <h5>Plagiarism Policy</h5>
                    <form onSubmit={handleSave}>
                        <textarea value={policyText} onChange={handleInputChange} />
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <section className="section">
                {isEditing ? renderEditor() : renderCard()}
            </section>
        </div>
    );
}