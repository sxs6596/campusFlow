import React from 'react';
import "./styles/AdminFacultyCard.css"; // Import the same CSS file used in AdminFacultyCard
import { useNavigate } from "react-router-dom";
import { generateAvatar } from "robohash-avatars"; // Import the generateAvatar function

export default function FacultyCard(prop) {
    const navigate = useNavigate();

    const handleFacultyChat = () => {
        navigate("/chatComponent");
    };

    // Generate an avatar URL using the faculty's email
    const avatarUrl = generateAvatar({
        seed: prop.email,
        size: 1, // Adjust size as needed
    });

    return (
        <>
            <div className="admin-faculty-card row" data-aos="fade-up" data-aos-duration="2000">
                <div className="sc-img-item cent">
                    <img className="faculty-banner" src={avatarUrl} alt={prop.name} />
                </div>
                <div className="sc-text-item row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col" style={{ textAlign: 'center' }}>
                        <p><strong>Email:</strong> {prop.email}</p>
                    </div>
                </div>
                <div className="faculty-external-link row">
                    <button className="faculty-tag" onClick={handleFacultyChat}>
                        Connect
                    </button>
                </div>
            </div>
        </>
    );
}