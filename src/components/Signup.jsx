import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios({
        url:"https://014398b2-1e27-4446-863c-1a39efaa1465-00-1keb4tassksfq.worf.replit.dev/signup",
        method:"POST" , 
        data:{ username, password }
      })
      navigate("/login");
      
    } catch (error) {
      alert("something went wrong" + error);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <p>Sign up for a new account</p>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Enter username : "
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Enter password : "
      />

      <button onClick={handleSignup}> Submit </button>
    </>
  );
}
