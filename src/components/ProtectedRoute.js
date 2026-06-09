import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="container text-center py-5 mt-5">
        <div className="card p-5 shadow border-0 max-width-500 mx-auto bg-light text-dark">
          <h2 className="text-danger fw-bold mb-3">🔒 Access Denied</h2>
          <p className="text-muted mb-4">Please login to access premium vehicles and dashboards.</p>
          <Link to="/login" className="btn btn-primary px-4 py-2">Go to Login</Link>
        </div>
      </div>
    );
  }

  return children;
}