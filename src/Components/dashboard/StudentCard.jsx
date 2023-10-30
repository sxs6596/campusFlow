import "./styles/StudentCard.css";
import { Link } from "react-router-dom";
import { generateAvatar } from "robohash-avatars";

export default function StudentCard(prop) {
  const handleEditClick = () => {
    // Store the student's ID in localStorage
    localStorage.setItem('studentId', prop.id);
  };

  // Generate an even smaller avatar for each student based on their email
  const avatarUrl = generateAvatar({
    seed: prop.email,
    size: 1, // Set the size to make it smaller (e.g., 30 pixels)
  });

  return (
    <>
      <div
        className="student-card row"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sc-img-item cent">
          <img className="student-banner" src={avatarUrl} alt="student" />
        </div>
        <div className="sc-text-item row">
          <div className="col">
            <h3>{prop.first_name}</h3>
            <span>{prop.email}</span>
          </div>
          <div className="student-external-link row">
            {prop.userType === "admin" && (
              <>
                <Link to="edit" className="student-tag" onClick={handleEditClick}>
                  Edit
                </Link>
                <span className="link-space"></span> {/* Add space */}
              </>
            )}
            <Link to="/chatComponent" className="student-tag">
              Message
            </Link>
            <span className="link-space"></span> {/* Add space */}
            <Link to="/chatComponent" className="student-tag">
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}