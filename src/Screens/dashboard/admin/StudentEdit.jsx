import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail, IoMdPin } from "react-icons/io";
export default function StudentEdit(){
    function updateStudent(e){
        e.preventDefault();
        alert("Student Updated")
    }
    return <>
        <div>
            <h1>Edit Student Details</h1>
        </div>
        <div>
            <form action="" onSubmit={e=> updateStudent(e)}>
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input className="input" type="text" placeholder="Name" required/>
                </div>
                <div className="input-core">
                    <IoMdMail className="input-img" />
                    <input className="input" type="email" placeholder="Email" required/>
                </div>
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input className="input" type="text" placeholder="Roll No." required/>
                </div>
                <div className="input-core">
                    <IoMdPin className="input-img" />
                    <input className="input" type="text" placeholder="Address" required/>
                </div>
                <button className="button">
                    Update Student Information
                </button>
            </form>
        </div>
    </>
}