import React, { useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      login(res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg border-0 rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input required type="email" placeholder="Email" className="form-control py-2" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input required type="password" placeholder="Password" className="form-control py-2" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-3">Sign In</button>
        </form>
        <p className="text-center mt-3 mb-0 text-muted small">
          New to CarNest? <Link to="/register" className="text-primary fw-bold text-decoration-none">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;