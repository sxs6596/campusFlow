import React from 'react';
import "./styles/MessageScreen.css";
import { useParams } from 'react-router-dom';
import FacultyData from '../../data/FacultyData';
import UserData from '../../data/UserData';

export default function MessageScreen(){
    let {id,userType} = useParams();
    let data = ()=>{
        if (userType ==="faculty"){
            return FacultyData.find((item)=>item.id==id);
        }else if(userType==="student"){
            return UserData.find((item)=>item.roll == id);
        }
    }
    let result = data()
    return <>
        <div className="message-container">
            <div className="message-header row">
                <h3>{result &&
                 result.name}</h3>
            </div>
            <div className="message-item-container">
                
                
                <div className="message-form">
                    <input className="input" type="text" placeholder="Enter Your Message Here" required />
                </div>
            </div>
        </div>
    </>
}