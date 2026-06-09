import React, { useEffect, useState } from "react";
import API from "../api/axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings/mybookings");
      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await API.put(`/bookings/${id}`);
        alert("Booking cancelled successfully.");
        fetchBookings();
      } catch (err) {
        alert("Cancellation failed");
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Rental Statements</h2>

      {bookings.length === 0 ? (
        <div className="card p-5 border-0 shadow-sm text-center bg-light text-dark"><p className="mb-0 text-muted">No rental history discovered yet.</p></div>
      ) : (
        <div className="table-responsive bg-white rounded-4 shadow p-3 text-dark">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Automobile</th>
                <th>Brand</th>
                <th>Schedule</th>
                <th>Invoice</th>
                <th>Status</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id}>
                  <td className="fw-bold text-primary">{b.vehicleId?.name || "N/A"}</td>
                  <td className="text-muted">{b.vehicleId?.brand || "N/A"}</td>
                  <td className="small">{new Date(b.startDate).toLocaleDateString()} - {new Date(b.endDate).toLocaleDateString()}</td>
                  <td className="fw-bold text-success">₹{b.totalAmount}</td>
                  <td>
                    <span className={`badge ${b.bookingStatus === 'Cancelled' ? 'bg-danger' : 'bg-success'}`}>
                      {b.bookingStatus}
                    </span>
                  </td>
                  <td>
                    {b.bookingStatus !== "Cancelled" ? (
                      <button className="btn btn-sm btn-outline-danger px-3 rounded-pill" onClick={() => handleCancel(b._id)}>Cancel</button>
                    ) : (
                      <span className="text-muted small">Terminated</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyBookings;