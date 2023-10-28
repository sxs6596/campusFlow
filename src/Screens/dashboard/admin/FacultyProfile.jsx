import { useParams } from "react-router-dom"
import FacultyData from "../../../data/FacultyData"

export default function StudentProfile() {
    const { facultyId } = useParams()
    let result = FacultyData.find((faculty) => faculty.id == facultyId)
    return <>
        {
            result && <>
                <img src={result.image} width={300} alt="" srcset="" />
                <h2>{result.name}</h2>
                <a href={"mailto:" + result.email}><p>{result.email}</p></a>
                <p>{result.phone}</p>
                <p>{result.department}</p>
            </>
        }
    </>
}