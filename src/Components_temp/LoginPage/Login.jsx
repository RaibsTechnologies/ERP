import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";  // ✅ import Link here
// import axios from "axios";
import { AuthContext } from "../../context/Authcontext.jsx";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { user, login, loading } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const isSuccess = await login( {email, password} );
      if (isSuccess) {
        navigate("/dashboard");
      } else {
        setMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Invalid email or password. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching user
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <label htmlFor="email" className="login-label">Email Address</label>
        <input
          id="email"
          type="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="password" className="login-label">Password</label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          required
        />

        <button type="submit" className="login-button">Log In</button>

        {message && (
          <p className={`login-message ${message === "Login Successful!" ? "success" : "error"}`}>
            {message}
          </p>
        )}

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/register" className="signup-link"> {/* ✅ Correct usage */}
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
