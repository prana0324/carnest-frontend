import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registration Successful!  Welcome to CarNest.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg border-0 rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input required type="text" placeholder="Full Name" className="form-control py-2" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <input required type="email" placeholder="Email Address" className="form-control py-2" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input required type="password" placeholder="Password" className="form-control py-2" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-3">Create Account</button>
        </form>
        <p className="text-center mt-3 mb-0 text-muted small">
          Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;