import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff");  // Default to 'staff'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Reset error state
    setLoading(true);  // Show loading state

    const userData = { email, password, role };

    try {
      await registerUser(userData); // Call backend register service
      navigate("/login");  // Redirect to login after successful signup
    } catch (err) {
      setError(err.error || "An error occurred during registration"); // Show error if signup fails
    } finally {
      setLoading(false);  // Disable loading state
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
