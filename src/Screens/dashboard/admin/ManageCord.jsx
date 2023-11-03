import React, { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function ManageCord() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const cordData = {
            id:146,
            first_name: name,
            email: email,
            roll_no: 146,

        };

        fetch("https://rxk4239.uta.cloud/updatestudentdata.php", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cordData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Coordinator Updated");
            } else {
                alert("Failed to update coordinator");
            }
        })
        .catch(error => {
            console.error("Error updating coordinator: ", error);
        });
    };

    return (
        <>
            <div>
                <h1>Add Manage Cord</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-core">
                        <BsFillPersonFill className="input-img" />
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Coordinator Name" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-core">
                        <BiLogoGmail className="input-img" />
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Coordinator Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <button className="button">Create Cord</button>
                </form>
            </div>
        </>
    );
}