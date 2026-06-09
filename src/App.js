import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vehicles from "./pages/Vehicles";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/vehicles" element={<ProtectedRoute><Vehicles /></ProtectedRoute>} />
        <Route path="/bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;