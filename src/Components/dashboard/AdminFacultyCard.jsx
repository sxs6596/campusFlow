import "./styles/AdminFacultyCard.css";
import { Link } from "react-router-dom";
import { generateAvatar } from "robohash-avatars";

export default function AdminFacultyCard(prop){
      // Generate an even smaller avatar for each student based on their email
  const avatarUrl = generateAvatar({
    seed: prop.email,
    size: 1, // Set the size to make it smaller (e.g., 30 pixels)
  });
    return <>
        <div className="admin-faculty-card row" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="sc-img-item cent">
            <img className="faculty-banner" src={avatarUrl} alt="faculty" />
            </div>
            <div className="s   c-text-item row">
                <div className="col">
                    <h3>{prop.first_name}</h3>
                    <span>{prop.email}</span>
                </div>
                <div className="faculty-external-link row">
                    {
                        prop.userType === "admin" && <>
                            <Link to="edit" className="faculty-tag"> Edit </Link>
                            {/* <Link to="#" className="faculty-tag"> Delete </Link> */}
                        </>
                    }
                    <Link to={"/dashboard/message/faculty/" + prop.id} className="faculty-tag"> Message </Link>
                    <Link to={"/dashboard/faculty/" + prop.id} className="faculty-tag"> About </Link>
                </div>
            </div>
        </div>
    </>
}