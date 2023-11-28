import React, { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import {Flex, Button} from "@radix-ui/themes";
export default function ManageQA() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const qaData = {
            id:148,
            first_name: name,
            email: email,
            roll_no: 148,
        };

        fetch("https://rxk4239.uta.cloud/updatestudentdata.php", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(qaData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Quality Admin Updated");
            } else {
                alert("Failed to update Quality Admin");
            }
        })
        .catch(error => {
            console.error("Error updating Quality Admin: ", error);
        });
    };

    return (
        <>
            <div>
                <h1>Add Manage QA</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-core">
                        <BsFillPersonFill className="input-img" />
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Quality Admin Name" 
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
                            placeholder="Quality Admin Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <Flex direction="column" align="center" gap="5">
                      <Button gap="4" mt="4">Add Manage QA</Button>
                   </Flex>
                </form>
            </div>
        </>
    );
}