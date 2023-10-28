import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
export default function ManageCord() {
    return <>
        <div>
            <h1>Add Manage Cord</h1>
        </div>
        <div>
            <form action="">
                <div className="input-core">
                    <BsFillPersonFill className="input-img" />
                    <input type="text" className="input" placeholder="Cordinator Name" required/>
                </div>
                <div className="input-core">
                    <BiLogoGmail className="input-img" />
                    <input type="text" className="input" placeholder="Cordinator Email" required />
                </div>
                <div className="input-core">
                    <BsFillTelephoneFill className="input-img" />
                    <input type="text" className="input" placeholder="Cordinator Phone No" required />
                </div>
                <div className="input-core">
                    <MdLocationPin className="input-img" />
                    <input type="text" className="input" placeholder="Cordinator Address" required />
                </div>
                <button className="button">Create Cord</button>
            </form>
        </div>

    </>
    }