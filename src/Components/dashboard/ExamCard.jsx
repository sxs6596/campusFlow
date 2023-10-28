import "./styles/ExamCard.css";
export default function ExamCard(prop) {
    return <>
        <div className="exam-card row">
            <div className="exam-card-item">{prop.examId}</div>
            <div className="exam-card-item">{prop.examName}</div>
            <div className="exam-card-item">{prop.examDate}</div>
        </div>
    </>
}