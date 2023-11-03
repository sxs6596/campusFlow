import React, { useState, useEffect } from "react";
import "./Discussion.css";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

function Discussion() {
  const [formData, setFormData] = useState({
    role: "student",
    customOption: "",
  });

  const [users, setUsers] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserRole, setSelectedUserRole] = useState(null);
  const [previousMessages, setPreviousMessages] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "customOption") {
      const selectedUser = users.find((user) => user.name === value);
      setSelectedUserId(selectedUser ? selectedUser.id : null);
    }
  };
  useEffect(() => {
    // Fetching previous chat messages
    const fetchPreviousMessages = async () => {
      if (!selectedUserId) return; // Exit if there's no selected user

      const headers = {
        "Content-Type": "application/json",
      };

      const prevSubmitData = {
        chat_to_user_id: localStorage.getItem("id"),
        chat_from_user_id: selectedUserId,
      };

      try {
        const response = await axios.post(
          "https://sxs6596.uta.cloud/test_chatto.php",
          prevSubmitData,
          {
            headers: headers,
            withCredentials: true,
          }
        );

        if (
          response.data &&
          response.data.status === "success" &&
          Array.isArray(response.data.messages) // Check if messages array exists
        ) {
          console.log(
            `Previous messages for user ${selectedUserId}:`,
            response.data.messages
          );
          setPreviousMessages(response.data.messages);
        }
      } catch (error) {
        console.error("Error during the Axios request:", error);
      }
    };

    fetchPreviousMessages();
  }, [selectedUserId]);

  useEffect(() => {
    const fetchData = async () => {
      const role = formData.role;
      setSelectedUserRole(role);
      const headers = {
        "Content-Type": "application/json",
      };

      try {
        const response = await axios.post(
          "https://sxs6596.uta.cloud/test_getformdata.php",
          { role },
          {
            headers: headers,
            withCredentials: true,
          }
        );

        if (
          response.data &&
          response.data.status === "success" &&
          Array.isArray(response.data.users)
        ) {
          setUsers(response.data.users);
        }
      } catch (error) {
        console.error("Error during the Axios request:", error);
      }
    };

    fetchData();
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatVisible(true);
  };

  const handleSendMessage = async () => {
    if (selectedUserId && currentMessage) {
      const newMessage = {
        userId: selectedUserId,
        message: currentMessage,
      };
      setChatMessages([...chatMessages, newMessage]);

      try {
        // Making the axios.post request as per the requirement
        const postData = {
          chat_from_user_id: localStorage.getItem("id"),
          chat_to_user_id: selectedUserId,
          chat_from_user_role: localStorage.getItem("user"),
          chat_to_user_role: selectedUserRole,
          chat_message: currentMessage,
        };
        const headers = {
          "Content-Type": "application/json",
        };

        try {
          const response = await axios.post(
            "https://sxs6596.uta.cloud/test_chatfrom.php",
            postData,
            {
              headers: headers,
              withCredentials: true,
            }
          );

          if (
            response.data &&
            response.data.status === "success" &&
            Array.isArray(response.data.users)
          ) {
            setUsers(response.data.users);
          }
        } catch (error) {
          console.error("Error during the Axios request:", error);
        }

        // You can handle the response or errors as needed
        // if (response.data.success) {
        //   console.log("Message sent successfully");
        // } else {
        //   console.error("Error sending message:", response.data.error);
        // }
      } catch (error) {
        console.error("Error during the Axios request:", error);
      }

      setCurrentMessage("");
    } else {
      console.log("No user selected or no message entered");
    }
  };

  return (
    <div>
        <h1>Discussion</h1>
        <div className="Discussion">
          <form onSubmit={handleSubmit}>
            <div className="select-container">
              <label>Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="quality-admin">QA Officer</option>
                <option value="cord">Co-ordinator</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
            <div className="select-container">
              <label>Custom:</label>
              <select
                name="customOption"
                value={formData.customOption}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                {users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-container">
              <button type="submit">Start Chat</button>
            </div>
          </form>
          {chatVisible && (
            <div
              className="chatbot-container"
              style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                width: "300px",
                background: "#f9f9f9",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                className="chat-header"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Chatbot
                <button
                  onClick={() => setChatVisible(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
              <div
                className="chat-container"
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {previousMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="previous-message"
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #eee",
                      textAlign: "left",
                    }}
                  >
                    <strong>Receive: {msg.userId}</strong>: {msg}
                  </div>
                ))}
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <strong>Sender: {msg.userId}</strong>: {msg.message}
                  </div>
                ))}
              </div>
              <div
                className="chat-input-container"
                style={{
                  padding: "10px",
                  borderTop: "1px solid #ddd",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Enter your message..."
                  style={{
                    padding: "10px",
                    flexGrow: "1",
                    marginRight: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
export default Discussion;