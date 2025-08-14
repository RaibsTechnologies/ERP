import React, { useState } from "react";
import "./SalesInvoice.css";

function SalesInvoice() {
  // All criteria fields in grid
  const [criteria, setCriteria] = useState({
    warehouse: "", route: "", customer: "", invoiceDate: "",
    deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: "",
    paymentStatus: "", invoiceNo: "", status: ""
  });

  function handleCriteriaChange(e) {
    const { name, value } = e.target;
    setCriteria(prev => ({ ...prev, [name]: value }));
  }
  function handleReset() {
    setCriteria({
      warehouse: "", route: "", customer: "", invoiceDate: "",
      deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: "",
      paymentStatus: "", invoiceNo: "", status: ""
    });
  }

  // Table data empty (like screenshot)
  const [rows] = useState([]);

  return (
    <div className="salesinvoice-container">
      {/* Title + Collect Payments Button */}
      <div className="title-row">
        <span className="main-title">Sales invoice</span>
        <button className="collect-btn">Collect Payments</button>
      </div>

      {/* Criteria grid */}
      <div className="criteria-grid">
        <div>
          <label>Warehouse</label>
          <select name="warehouse" value={criteria.warehouse} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Route</label>
          <select name="route" value={criteria.route} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Customer</label>
          <select name="customer" value={criteria.customer} onChange={handleCriteriaChange}>
            <option value="">Select one</option>
          </select>
        </div>
        <div>
          <label>Invoice Date</label>
          <input type="date" name="invoiceDate" value={criteria.invoiceDate} onChange={handleCriteriaChange} />
        </div>
        <div>
          <label>Delivery Date</label>
          <input type="date" name="deliveryDate" value={criteria.deliveryDate} onChange={handleCriteriaChange} />
        </div>
        <div>
          <label>Delivery Man</label>
          <select name="deliveryMan" value={criteria.deliveryMan} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Salesman</label>
          <select name="salesman" value={criteria.salesman} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Delivery Status</label>
          <select name="deliveryStatus" value={criteria.deliveryStatus} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Payment Status</label>
          <select name="paymentStatus" value={criteria.paymentStatus} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div>
          <label>Invoice No</label>
          <input name="invoiceNo" value={criteria.invoiceNo} onChange={handleCriteriaChange} />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={criteria.status} onChange={handleCriteriaChange}>
            <option value="">Select One</option>
          </select>
        </div>
        <div className="criteria-reset-cell">
          <button className="reset-btn" type="button" onClick={handleReset}>Reset</button>
        </div>
      </div>

      {/* Table title bar */}
      <div className="invoices-title-row">
        <span className="table-title">Invoices</span>
        <select className="page-size-select">
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
        {/* List & Grid view icons */}
        <button className="table-view-icon" title="List view">&#9776;</button>
        <button className="table-view-icon" title="Grid view">&#9638;</button>
        {/* Search input */}
        <input
          className="table-search"
          type="text"
          placeholder="Search"
        />
        {/* Print icon */}
        <button className="table-print-icon" title="Print">&#128424;</button>
      </div>

      {/* Table */}
      <div className="table-scroll-area">
        <table className="salesinvoice-table">
          <thead>
            <tr>
              <th></th>
              <th>SL</th>
              <th>Invoice info</th>
              <th>User info</th>
              <th>Delivery status</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="empty">{/* Table empty as in SS */}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesInvoice;
