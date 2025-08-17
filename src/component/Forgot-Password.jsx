import React from 'react'
import RegisterHeader from './RegisterHeader.jsx'
import './Forgot-Password.css'

export default function ForgotPassword() {
  return (

    <>
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <div className="forgot-password-image">
          <img src="/assets/passward.png" alt="Forgot Password" />
        </div>

        <div className="forgot-password-form">
          <h2>Forgot your password?</h2>
          <p>
            Please enter the email address associated with your account and we
            will email you a link to reset your password.
          </p>

          <input type="email" placeholder="Email" className="input-field" />

          <button className="reset-btn">Reset Password</button>
          <button className="back-btn">Back</button>
        </div>
      </div>
    </div></>
  );
}
