import React, { useEffect, useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { role } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalVehicles: 0, totalBookings: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const vRes = await API.get("/vehicles");
        const bRes = await API.get("/bookings/mybookings");
        setStats({
          totalVehicles: vRes.data.length,
          totalBookings: bRes.data.length
        });
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-7">
          <h1 className="fw-bold display-4">Premium Mobility Hub 🚗</h1>
          <p className="text-muted fs-5">Hello! You are currently logged in with authorization role: <span className="badge bg-dark px-3 py-2 uppercase-text">{role}</span></p>
        </div>
        <div className="col-md-5">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=500" alt="Dashboard Hero" className="img-fluid rounded-4 shadow-sm" />
        </div>
      </div>

      <div className="row g-4 text-center">
        <div className="col-md-6">
          <div className="card border-0 shadow p-4 rounded-4 bg-primary text-white">
            <h4 className="opacity-75">Active Fleet Size</h4>
            <h1 className="display-2 fw-bold">{stats.totalVehicles}</h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow p-4 rounded-4 bg-success text-white">
            <h4 className="opacity-75">Your Transactions</h4>
            <h1 className="display-2 fw-bold">{stats.totalBookings}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}