import React, { useState } from "react";

export default function Register() {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState({});

  function handleFullName(event) {
    setError((prev) => ({ ...prev, fullName: "" }));
    setFullName(event.target.value);
  }

  function handleEmail(event) {
    setError((prev) => ({ ...prev, email: "" }));
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setError((prev) => ({ ...prev, password: "" }));
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setError((prev) => ({ ...prev, confirmPassword: "" }));
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let errors = {};
    if (fullName.length < 3) {
      errors.fullName = "Name must be at least 3 characters long.";
    }
    if (!email.includes("@") || email.length < 5) {
      errors.email = "Enter a valid email address.";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setError(errors);
  }

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#121212"
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#1e1e1e", padding: "20px", borderRadius: "10px", width: "350px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", color: "white"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#bb86fc" }}>Register</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={handleFullName} 
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #bb86fc", background: "#333", color: "white" }}
          />
          {error.fullName && <p style={{ color: "#ff5252" }}>{error.fullName}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} 
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #bb86fc", background: "#333", color: "white" }}
          />
          {error.email && <p style={{ color: "#ff5252" }}>{error.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} 
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #bb86fc", background: "#333", color: "white" }}
          />
          {error.password && <p style={{ color: "#ff5252" }}>{error.password}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPassword} 
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #bb86fc", background: "#333", color: "white" }}
          />
          {error.confirmPassword && <p style={{ color: "#ff5252" }}>{error.confirmPassword}</p>}
        </div>

        <button type="submit" style={{
          width: "100%", padding: "10px", background: "#bb86fc", color: "white", border: "none",
          borderRadius: "5px", fontSize: "16px", cursor: "pointer"
        }}>
          Register
        </button>
      </form>
    </div>
  );
}
