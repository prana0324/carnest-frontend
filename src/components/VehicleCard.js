import React from "react";

function VehicleCard({ vehicle, onBook }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 rounded-4 overflow-hidden h-100 transition-card">
        <img
          src={vehicle.image}
          className="card-img-top"
          alt={vehicle.name}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body p-4 d-flex flex-column justify-content-between">
          <div>
            <span className="badge bg-secondary mb-2 uppercase-text">{vehicle.brand}</span>
            <h4 className="fw-bold mb-1">{vehicle.name}</h4>
            <p className="text-muted small mb-3">{vehicle.model}</p>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h5 className="text-success fw-bold m-0 fs-4">₹{vehicle.rentperday || vehicle.rentPerDay}/day</h5>
              <span className={`badge ${vehicle.available ? 'bg-success-light text-success' : 'bg-danger-light text-danger'}`}>
                {vehicle.available ? 'Available' : 'Rented Out'}
              </span>
            </div>
            <button
              className="btn btn-primary w-100 mt-3 py-2 fw-bold rounded-3"
              disabled={!vehicle.available}
              onClick={() => onBook(vehicle._id)}
            >
              {vehicle.available ? 'Book Now 🚗' : 'Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;