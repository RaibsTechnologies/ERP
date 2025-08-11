import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // for success/error messages
  const navigate = useNavigate();

  // Predefined valid credentials (change as needed)
  const validEmail = "RaibsTech@gmai.com";
  const validPassword = "Raibs@123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      setMessage("Login Successful!");
     navigate("/sidebar"); // Redirect to sidebar page
    } else {
      setMessage("Incorrect email or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <label htmlFor="email" className="login-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          required
        />

        <button type="submit" className="login-button">
          Log In
        </button>

        {/* Show message below button */}
        {message && (
          <p
            className={`login-message ${
              message === "Login Successful!" ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}

        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
