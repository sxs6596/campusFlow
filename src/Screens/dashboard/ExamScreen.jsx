import ExamCard from "../../Components/dashboard/ExamCard"
import ExamData from "../../data/ExamData"
import "./styles/ExamScreen.css"
export default function ExamScreen(){
    
    return <>
        <div className="exam-header row">
            <div className="exam-header-item">Exam ID</div>
            <div className="exam-header-item">Exam Name</div>
            <div className="exam-header-item">Exam Date</div>
        </div>
        {
            ExamData.map((item) => {
                return <ExamCard key={item.id} examId={item.examId} examName={item.examName} examDate={item.examDate} />
            })
        }
    </>
}