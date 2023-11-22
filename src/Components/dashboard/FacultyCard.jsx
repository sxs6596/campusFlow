import { Avatar } from '@radix-ui/react-avatar';
import { useNavigate } from "react-router-dom";

export default function FacultyCard(prop) {
    const navigate = useNavigate();
    
    const handleFacultyChat = () => {
        navigate("/chatComponent");
    }

    const facultyCardRowStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px', // Adjust as needed
    };

    const facultyAvatarStyle = {
        marginRight: '20px', // Adjust as needed
    };

    const facultyDetailsStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const buttonStyle = {
        marginTop: '10px', // Adjust as needed
    };

    return (
        <div style={facultyCardRowStyle}>
            <div style={facultyAvatarStyle}>
                <Avatar>
                    <img src={prop.image} alt={prop.name} />
                </Avatar>
            </div>
            <div style={facultyDetailsStyle}>
                <p><strong>Name:</strong> {prop.name}</p>
                <p><strong>Email:</strong> {prop.email}</p>
                <p><strong>ID:</strong> {prop.id}</p>
                <button style={buttonStyle} onClick={handleFacultyChat}>
                    Connect
                </button>
            </div>
        </div>
    );
}