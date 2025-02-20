import { useState } from "react";
import axios from "axios";
import './index.css'

const NewUser = ({ setUserId, setUsername }) => {
  const [name, setName] = useState("");

  const handleCreateUser = () => {
    axios.post("http://localhost:5000/users", { username: name })
      .then((res) => {
        setUserId(res.data._id);
        setUsername(res.data.username);
      })
      .catch(error => console.error("Error creating user:", error));
  };

  return (
    <div>
      <input type="text" id='username' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Username" autoComplete="off" />
      <button onClick={handleCreateUser}>Start Game</button>
    </div>
  );
};
export default NewUser;