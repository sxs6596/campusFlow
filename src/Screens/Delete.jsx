import "./styles/Deleted.css";
import { Link } from "react-router-dom";
export default function Delete(){
    return <>
        <div class="deleted col cent">
            <h1>Deleted SuccessFully</h1>
            <Link to="/">Return home</Link>
        </div>
    </>
}