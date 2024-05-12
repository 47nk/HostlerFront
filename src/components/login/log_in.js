import React, { useState } from "react";
import axios from "axios";
import "./log_in.css";
import { EyeIcon } from "../../icons/EyeIcon";
import { SlashEyeIcon } from "../../icons/SlashEyeIcon";

const Login = () => {
  const [isSigningUp, setIsSigningUp] = useState(false); // Track sign-up state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/; // Username validation regex
    return usernameRegex.test(username);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Password validation regex
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSigningUp) {
      // Sign-up validation
      if (!validateUsername(username)) {
        setError(
          "Username must be 1-30 characters long and contain only letters, numbers, periods, and underscores."
        );
        return;
      }
      if (!validatePassword(password)) {
        setError(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
        );
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/handlers/signup",
          {
            username,
            password,
          }
        );
        console.log("Account Created:", response.data);
        // Handle successful account creation, e.g., display success message or redirect
      } catch (error) {
        console.error("Registration Error:", error.response.data);
        setError(error.response.data.message);
        // Handle registration error, e.g., display error message to the user
      }
    } else {
      // Login logic (unchanged)
      try {
        const response = await axios.post(
          "http://localhost:8080/handlers/login",
          {
            username,
            password,
          }
        );
        console.log("Login Successful:", response.data);
        // Handle successful login response, e.g., redirect to dashboard
      } catch (error) {
        console.error("Login Error:", error.response.data);
        setError(error.response.data.message);
        // Handle login error, e.g., display error message to the user
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isSigningUp ? "Create Account" : "Login"}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUsername("")}
            placeholder="Username"
          />
        </div>
        {/* password */}
        <div className="form-group">
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPassword("")}
              placeholder="Password"
            />
            {/* eye icon */}
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <SlashEyeIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>
        {/* confirm password in case of sign up */}
        {isSigningUp && (
          <div className="form-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <SlashEyeIcon /> : <EyeIcon />}
            </button>
          </div>
        )}
        {/* login/signup button */}
        <button type="submit">
          {isSigningUp ? "Create Account" : "Login"}
        </button>

        <p>
          {isSigningUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <a href="#" onClick={() => setIsSigningUp(!isSigningUp)}>
            {isSigningUp ? "Login" : "Sign Up"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
