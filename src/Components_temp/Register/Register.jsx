import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";  // ✅ import Link here
import "./Register.css";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("username", name);
        formdata.append("email", email);   
        formdata.append("password_hash", password); 

        try{
            await axios.post("http://localhost:5000/api/auth/register",formdata, {
                headers: {
                    "Content-Type": "multipart/form-data"},
                    withCredentials: true, // ✅ Ensure credentials are sent
            });
            navigate("/login");

        }catch (error) {
            console.error("Registration error:", error);
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="register-wrapper">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="register-title">Create Account</h2>

                <label htmlFor="name" className="register-label">Full Name</label>
                <input
                    id="name"
                    type="text"
                    className="register-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                />

                <label htmlFor="email" className="register-label">Email Address</label>
                <input
                    id="email"
                    type="email"
                    className="register-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                />

                <label htmlFor="password" className="register-label">Password</label>
                <input
                    id="password"
                    type="password"
                    className="register-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    required
                />

                <button type="submit" className="register-button">
                    Sign Up
                </button>

                {message && (
                    <p
                        className={`register-message ${message === "Registration Successful!" ? "success" : "error"
                            }`}
                    >
                        {message}
                    </p>
                )}

                <p className="signup-text">
                    Already have an account{" "}
                    <Link to="/login" className="signup-link"> {/* ✅ Correct usage */}
                        sing in
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
