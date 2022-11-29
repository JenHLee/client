import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    //console.log("handlesubmit function in before event prevent");
    e.preventDefault();
    //console.log("handlesubmit function in after event prevent");
    //console.log("e: " + e);
    setError(false);
    console.log("before try/catch: " + username, email, password);
    try {
      // console.log("try in");
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      // console.log(res);
      // console.log("after try: " + username, email, password);
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log("catch in");
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <span className="registerSpan">
        You already have an acount?
        <Link className="link" to="/login">
          <span className="registerSpan_login"> login</span>
        </Link>
      </span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {error && <span>Something went wrong</span>}
    </div>
  );
}
