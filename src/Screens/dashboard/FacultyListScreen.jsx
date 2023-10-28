import FacultyCard from "../../Components/dashboard/FacultyCard"
import FacultyData from "../../data/FacultyData"
import "./styles/FacultyListScreen.css"
export default function FacultyListScreen() {
    return <>
        <div className="faculty-header">
            <h1>Faculty List</h1>
        </div>
        <div className="faculty-list-container row">
            {
                FacultyData.map((faculty) => {
                    return <FacultyCard key={faculty.id} {...faculty} />
                })
            }
        </div>
       
    </>
}