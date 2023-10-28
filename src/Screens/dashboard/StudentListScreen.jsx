import UserData from "../../data/UserData";
import StudentCard from "../../Components/dashboard/StudentCard";
export default function StudentListScreen(){
    return <>
        <h1>Student List</h1>
        <div className="student-card-container">
            {
                UserData.map((item)=>{
                    return <StudentCard key={item.id} {...item} />
                })
            }
        </div>
    </>
}