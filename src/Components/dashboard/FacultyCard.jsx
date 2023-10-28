import "./styles/FacultyCard.css"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import ChatComponent from "./ChatComponent";
export default function FacultyCard(prop) {
    const navigate = useNavigate();
    const handleFacultyChat = ()=>{
        // navigate("/chatComponent");
        navigate("/chatComponent");
    }
    return (
        <>
            <div className="faculty-card">
                <div className="faculty-img-cont">
                    <img src={prop.image} alt="" className="faculty-img" />
                </div>
                <div className="faculty-txt-cont">
                    <div>
                        <h3>{prop.name}</h3>
                        <p>{prop.department}</p>
                        <p>{prop.email}</p>
                    </div>
                    <div>
                        {/* <Link to={"/dashboard/message/faculty/" + prop.id}> */}
                            <button className="button" onClick={handleFacultyChat}>
                                Connect
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}