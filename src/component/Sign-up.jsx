import React from "react";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="image-container">
        <img src="/assets/signup.png" alt="Signup" />
      </div>

      <div className="form-container">
        <h2>Get Start Shopping</h2>
        <p>Welcome to FreshCart! Enter your email to get started.</p>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="register-btn">Register</button>
        <p>By continuing, you agree to our <a href="#">Terms of Service & Privacy Policy</a></p>
      </div>
    </div>
  );
} 
