import React, { useState } from "react";
import "./StockAssign.css";

function StockAssign() {
  const [date, setDate] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [deliveryMan, setDeliveryMan] = useState("");

  return (
    <div className="stockadjust-container">
      <div className="main-title">Stock adjust</div>
      <form className="stockadjust-form">
        <div className="form-row">
          {/* Date */}
          <div className="form-group">
            <label>
              Date <span className="required">*</span>
            </label>
            <div className="input-icon-row">
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="date-input"
                required
              />
              <span className="calendar-icon">
                {/* Simple SVG calendar */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#909090">
                  <rect x="3" y="5" width="18" height="16" rx="2" fill="#fafafa" stroke="#bbb" />
                  <rect x="7" y="9" width="10" height="2.4" rx=".8" fill="#e6e6e6" />
                  <rect x="7" y="13.2" width="5" height="2.4" rx=".8" fill="#e6e6e6" />
                  <rect x="14" y="13.2" width="3" height="2.4" rx=".8" fill="#e6e6e6" />
                </svg>
              </span>
            </div>
            <div className="date-format"> (mm/dd/yyyy) </div>
          </div>

          {/* Warehouse */}
          <div className="form-group">
            <label>
              Warehouse <span className="required">*</span>
            </label>
            <div className="custom-select">
              <select
                value={warehouse}
                onChange={e => setWarehouse(e.target.value)}
                required
              >
                <option value="">Select warehouse</option>
                <option value="main">Main Warehouse</option>
              </select>
            </div>
          </div>

          {/* Delivery Man */}
          <div className="form-group">
            <label>
              Delivery Man <span className="required">*</span>
            </label>
            <div className="custom-select">
              <select
                value={deliveryMan}
                onChange={e => setDeliveryMan(e.target.value)}
                required
              >
                <option value="">Select One</option>
                {/* Add delivery man options later */}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StockAssign;
