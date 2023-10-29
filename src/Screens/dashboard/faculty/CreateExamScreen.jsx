import { FaSwatchbook } from "react-icons/fa"
import { useState } from "react"
import axios from 'axios';
export default function CreateExamScreen(){
    const [exam, setExam] = useState({
        examId: "",
        examName: "",
        examDescription:"",
        examDate:""
    })
    const handleExamData = e =>{
        let name = e.target.name
        let value = e.target.value
        setExam(currentData => ({...currentData, [name]: value}))
    }
    const createCourse = async(e) => {
        e.preventDefault()
        const response  = await axios.post("https://rxk4239.uta.cloud/exam.php", exam);
        console.log(response);
        alert("Exam Created")
    }
    return <>
        <div>
            <h1>Create Exam</h1>
        </div>
        <div>
            <form action="" method="" onSubmit={(e) => { createCourse(e) }}>
                <div className="input-core row">
                    <FaSwatchbook className="input-img" />
                    <input type="text" name="examName" className="input" placeholder="Exam Title" onChange={handleExamData} required />
                </div>
                <div className="input-core row">
                    <FaSwatchbook className="input-img" />
                    <input type="text" name="examId" className="input" placeholder="Exam ID" onChange={handleExamData} required />
                </div>
                <div className="txt-area">
                    <textarea name="examDescription" onChange={handleExamData} id="" className="textarea">
                        Exam Description
                    </textarea>
                </div>
                <div className="input-core row">
                    <input type="date" name="examDate" className="input" placeholder="Exam ID" onChange={handleExamData} required />
                </div>
                <button className="button">
                    Create Exam
                </button>
            </form>
        </div>
    </>
}