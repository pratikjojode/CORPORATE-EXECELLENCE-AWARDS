import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminLogin.css";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", password);
        navigate("/admin-dashboard/nominations");
      } else {
        setError(data.message || "Incorrect password. Please try again.");
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span role="img" aria-label="Shield">
            🛡️
          </span>
        </div>
        <h2>Welcome, Admin</h2>
        <p className="admin-login-subtitle">Sign in to access your dashboard</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Admin Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="admin-login-error">{error}</p>}
        <div className="admin-login-footer">
          <span>Need help? Contact your system administrator.</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
