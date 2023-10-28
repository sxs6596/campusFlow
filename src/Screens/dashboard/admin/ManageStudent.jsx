import StudentCard from "../../../Components/dashboard/StudentCard";
import UserData from "../../../data/UserData";

export default function ManageStudent(prop) {
    return <>
        <h1>Manage Student</h1>
        <div>
        {
            UserData.map((item) => {
                return <StudentCard key={item.id} userType={prop.userType} {...item} />
            })
        }
        </div>
    </>
}