import AdminFacultyCard from "../../../Components/dashboard/AdminFacultyCard";
import FacultyData from "../../../data/FacultyData";

export default function ManageFaculty(prop){
    return <>
    <h1>Manage Faculty</h1>
    <div>
        {
            FacultyData.map((item) => {
                return <AdminFacultyCard key={item.id} userType={prop.userType} {...item} />
            })
        }
    </div>
    </>
}