import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail, IoMdPin } from "react-icons/io";
export default function StudentEdit() {
    function updateFaculty(e) {
        e.preventDefault();
        alert("Faculty Updated")
    }
    return <>
        <div>
            <h1>Edit Faculty Details</h1>
        </div>
        <div>
            <form action="" onSubmit={e => updateFaculty(e)}>
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input className="input" type="text" placeholder="Faculty Name" required />
                </div>
                <div className="input-core">
                    <IoMdMail className="input-img" />
                    <input className="input" type="email" placeholder="Faculty Email" required />
                </div>
                <div className="input-core">
                    <BsFillTelephoneFill className="input-img" />
                    <input className="input" type="email" placeholder="Faculty Phone" required />
                </div>
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input className="input" type="text" placeholder="Faculty Department." required />
                </div>
                <div className="input-core">
                    <IoMdPin className="input-img" />
                    <input className="input" type="text" placeholder="Faculty Address" required />
                </div>
                <button className="button">
                    Update Student Information
                </button>
            </form>
        </div>
    </>
}