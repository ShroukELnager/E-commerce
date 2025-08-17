import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function validateForm(email, password) {
    let errors = {};
    let isValidForm = true;

    // Email Validation (Proper email format)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Enter a valid email (e.g., example@mail.com).";
      isValidForm = false;
    }

    // Password Validation
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      isValidForm = false;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter.";
      isValidForm = false;
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one number.";
      isValidForm = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
      errors.password = "Password must contain at least one special character (@, #, !, etc.).";
      isValidForm = false;
    }

    setError(errors);
    setIsValid(isValidForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      alert("Login Successful ✅");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#121212", color: "#fff" }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-lg rounded"
        style={{
          width: "350px",
          backgroundColor: "#1E1E1E",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#BB86FC" }}>
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              validateForm(e.target.value, password);
            }}
            value={email}
            style={{
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #BB86FC",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
          {error.email && <p className="text-danger mt-1">{error.email}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
              validateForm(email, e.target.value);
            }}
            value={password}
            style={{
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #BB86FC",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
          {error.password && <p className="text-danger mt-1">{error.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-100 fw-bold"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "#BB86FC" : "#555",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            transition: "0.3s",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
