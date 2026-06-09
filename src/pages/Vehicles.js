import React, { useEffect, useState } from "react";
import API from "../api/axios";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [startDate, setStartDate] = useState("2026-06-01");
  const [endDate, setEndDate] = useState("2026-06-05");

  const fetchVehicles = async () => {
    try {
      const res = await API.get("/vehicles");
      setVehicles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const bookVehicle = async (id) => {
    try {
      await API.post("/bookings", {
        vehicleId: id,
        startDate,
        endDate,
        totalAmount: 12000
      });
      alert("Vehicle Booked Successfully! Enjoy your ride. 🚗🎉");
      fetchVehicles(); // Refresh status
    } catch (error) {
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Explore Our Luxury Fleet</h1>
      
      <div className="row justify-content-center mb-5 p-4 border-0 shadow rounded-4 bg-card text-dark max-width-700 mx-auto bg-light">
        <h5 className="fw-bold mb-3 text-center">Select Reservation Schedule</h5>
        <div className="col-md-6 mb-2">
          <label className="small fw-bold text-muted">Pick-up Date:</label>
          <input type="date" className="form-control mt-1" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="col-md-6 mb-2">
          <label className="small fw-bold text-muted">Drop-off Date:</label>
          <input type="date" className="form-control mt-1" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>

      <div className="row">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle} onBook={bookVehicle} />
        ))}
      </div>
    </div>
  );
}

export default Vehicles;