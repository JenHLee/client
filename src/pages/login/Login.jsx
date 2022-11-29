import {axiosInstance} from "../../config";

import axios  from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // const res = await axios.post("https://jenlog.herokuapp.com/api/auth/login", {
      const res = await axios.post("/auth/login", {
      // const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <span className="loginSpan">You don't have an account? 
        <Link className="link" to="/register">
            <span className="loginSpan_register"> Register</span>
            </Link>
        </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          key="{userRef}"
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          key="{passwordRef}"
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
