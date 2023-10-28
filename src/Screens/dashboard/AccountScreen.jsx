import FacultyData from "../../data/FacultyData"

export default function AccountScreen(prop){
    let fetcher = ()=>{
        if(prop.userType==="student"){
            return "student"
        }else if(prop.userType==="faculty"){
           return "faculty"
        }
    }
    let result = fetcher()
    return <>
        <h1>Account Screen</h1>
        <h2>{result}</h2>

    </>
}