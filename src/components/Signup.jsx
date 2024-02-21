import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await fetch("https://83wp9k-3000.csb.app/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      navigate("/login");
      alert("Signup Successful");
    } catch (error) {
      alert("something went wrong");
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
