import React from "react";
import "./Sign-in.css";
import signInImage from "/assets/signin.png";
import RegisterHeader from './RegisterHeader.jsx'
export default function Signin() {
  return (<>
  
    <div className="signin-container">
      <div className="signin-image">
        <img src={signInImage} alt="Sign In Illustration" />
      </div>

      <div className="signin-form">
        <h2>Sign in to FreshCart</h2>
        <p>Welcome back to FreshCart! Enter your email to get started.</p>

        <input type="email" placeholder="Email" />
        <div className="password-field">
          <input type="password" placeholder="*****" />
        </div>

        <div className="signin-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot password? <span className="reset-link">Reset It</span>
          </a>
        </div>

        <button className="signin-button">Sign In</button>

        <p className="signup-text">
          Don't have an account? <a href="/Sign-up" >Sign Up</a>
        </p>
      </div>
    </div></>
  );
}
