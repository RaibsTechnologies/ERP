import React, { useState } from "react";
import "./CanceledInvoice.css";

function CanceledInvoice() {
  const [criteria, setCriteria] = useState({
    warehouse: "", route: "", customer: "", invoiceDate: "",
    deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: ""
  });

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [rows] = useState([]); // Blank as in your screenshot

  const tableColumns = [
    "SL", "Date", "Type", "Invoice No", "Branch", "Warehouse",
    "Customer Name", "Sales Person", "Total Quantity", "Total Amount",
    "Cancel Status", "Cancel Reason", "Action"
  ];

  function handleCriteriaChange(e) {
    const { name, value } = e.target;
    setCriteria(prev => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setCriteria({
      warehouse: "", route: "", customer: "", invoiceDate: "",
      deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: ""
    });
    setSearch("");
  }

  return (
    <div className="canceledinvoice-container">
      {/* Select Criteria Panel */}
      <div className="select-criteria-panel">
        <div className="criteria-title">Select Criteria</div>
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
              <option value="">Select One</option>
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
        </div>
        <div className="criteria-actions">
          <button className="criteria-btn search-btn">Search</button>
          <button className="criteria-btn reset-btn" onClick={handleReset}>Reset</button>
          <select
            className="page-size"
            value={pageSize}
            onChange={e => setPageSize(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="criteria-underbar">
          <input
            type="text"
            className="criteria-search"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section-titlebar">
        <button className="add-btn">+ Add Canceled Invoice</button>
        <div className="table-icons">
          <button className="icon-btn" title="Print">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 19H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 .45.45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/></svg>
          </button>
          <button className="icon-btn" title="Download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/></svg>
          </button>
          <button className="icon-btn" title="Delete">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
          </button>
        </div>
      </div>
      <div className="table-scroll-area">
        <table className="canceledinvoice-table">
          <thead>
            <tr>
              {tableColumns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={tableColumns.length} className="empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CanceledInvoice;
