import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow sticky-top">
      <Link className="navbar-brand fw-bold fs-3 letter-spacing-1 text-primary" to="/">
         CarNest
      </Link>

      <div className="ms-auto d-flex gap-2 align-items-center">
        {user && (
          <>
            <Link className="btn btn-sm btn-outline-light px-3" to="/dashboard">Dashboard</Link>
            <Link className="btn btn-sm btn-outline-light px-3" to="/vehicles">Vehicles</Link>
            <Link className="btn btn-sm btn-outline-light px-3" to="/bookings">Bookings</Link>
          </>
        )}

        <button className="btn btn-sm btn-warning fw-bold px-3" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {user ? (
          <button className="btn btn-sm btn-danger px-3" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link className="btn btn-sm btn-success px-3" to="/login">Login</Link>
            <Link className="btn btn-sm btn-outline-primary px-3 text-white" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;