import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSignup = async () => {
    try {
      await axios({
        url:"https://014398b2-1e27-4446-863c-1a39efaa1465-00-1keb4tassksfq.worf.replit.dev/login",
        method:"POST" , 
        data:{ username, password }
      })
     
      navigate("/signup");
      localStorage.setItem("loggedin" , "true")
      alert("Signup Successful");
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <p>Loginfor a new account</p>
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
