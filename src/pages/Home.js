import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero-section text-center d-flex align-items-center justify-content-center vh-100">
      <div className="container backdrop-blur p-5 rounded-5 shadow-lg max-width-800">
        <h1 className="display-1 fw-bold text-white mb-2 tracking-tight">CarNest 🚗</h1>
        <p className="lead text-light mb-5 fs-3 font-weight-300">Premium Car Rental Experience At Your Fingertips.</p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/register" className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg transition-btn">Create Account</Link>
          <Link to="/login" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill transition-btn">Sign In to Book</Link>
        </div>
      </div>
      <style>{`
        .hero-section {
          background: linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1280');
          background-size: cover;
          background-position: center;
        }
        .backdrop-blur {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}