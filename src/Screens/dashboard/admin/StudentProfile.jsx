import { useParams } from "react-router-dom"
import UserData from "../../../data/UserData"

export default function StudentProfile() {
    const { studentId } = useParams()
    let result = UserData.find((student) => student.id == studentId)
    return <>
        {
            result && <>
                <img src={result.image} width={300} alt="" srcset="" />
                <h2>{result.name}</h2>
                <a href={"mailto:" + result.email}><p>{result.email}</p></a>
                <p>{result.roll}</p>
                <p>{result.address}</p>
            </>
        }
    </>
}