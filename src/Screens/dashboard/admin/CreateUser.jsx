import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { useState } from "react";
import {Flex, Button} from "@radix-ui/themes";
export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [userType, setUserType] = useState("");

  function createUser(e) {
    e.preventDefault();

    const newUserData = {
      first_name: name,
      email: email,
      roll_no: rollNo,
      type: userType
    };

    fetch("https://rxk4239.uta.cloud/updateuserdata.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("User Created");
      } else {
        alert("Failed to create user");
      }
    })
    .catch((error) => {
      console.error("Error creating user: ", error);
    });
  }

  return (
    <>
      <div>
        <h1>Create New User</h1>
      </div>
      <div>
        <form action="" onSubmit={(e) => createUser(e)}>
          <div className="input-core">
            <BsFillPersonFill className="input-img" />
            <input
              className="input"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-core">
            <IoMdMail className="input-img" />
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-core">
            <BsFillPersonFill className="input-img" />
            <input
              className="input"
              type="text"
              placeholder="Roll No."
              required
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="input-core">
            <BsFillPersonFill className="input-img" />
            <select
              className="input"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="faculty">Teacher</option>
              <option value="admin">Admin</option>
              {/* Add more user types if necessary */}
            </select>
          </div>
          <Flex direction="column" align="center" size="7" gap="3">
            <Button type="submit" gap="3" size="3" mt="4">
              Create User
            </Button>
          </Flex>
        </form>
      </div>
    </>
  );
}