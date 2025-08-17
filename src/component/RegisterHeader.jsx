import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo.png';
import './RegisterHeader.css'
export default function RegisterHeader() {
  return (
    <nav className="register-navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
       <Link to='/' style={{textDecoration:'none'}}> 
       <h1 className="brand-name">FreshCart</h1></Link>
      </div>
      <div className="auth-link">
        <p>
          Already have an account? <Link to="/Sign-in"><span>Sign in</span></Link>
        </p>
      </div>
    </nav>
  );
}
