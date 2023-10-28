import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
export default function ManageQA() {

    return <>
        <div>
            <h1>Add Manage QA</h1>
        </div>
        <div>
            <form action="">
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input type="text" className="input" placeholder="Quality Admin Name" required />
                </div>
                <div className="input-core">
                    <BiLogoGmail className="input-img" />
                    <input type="text" className="input" placeholder="Quality Admin Email" required />
                </div>
                <div className="input-core">
                    <BsFillTelephoneFill className="input-img" />
                    <input type="text" className="input" placeholder="Quality Admin Phone No" required />
                </div>
                <div className="input-core">
                    <MdLocationPin className="input-img" />
                    <input type="text" className="input" placeholder="Quality Admin Address" required />
                </div>
                <button className="button">Create Quality Admin</button>
            </form>
        </div>

    </>
}