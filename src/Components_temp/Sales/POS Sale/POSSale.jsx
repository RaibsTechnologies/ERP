import React, { useState } from "react";
import "./POSSale.css";

function POSSale() {
  // --- Criteria State ---
  const [criteria, setCriteria] = useState({
    warehouse: "", route: "", customer: "", invoiceDate: "",
    deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: "",
    status: "", invoiceNo: "", isDraft: false, isCanceled: false,
  });

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");

  // --- Dummy table data ---
  const [invoices] = useState([]); // Add demo rows if needed

  // --- Criteria Handlers ---
  function handleCriteriaChange(e) {
    const { name, value, type, checked } = e.target;
    setCriteria(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }
  function handleReset() {
    setCriteria({
      warehouse: "", route: "", customer: "", invoiceDate: "",
      deliveryDate: "", deliveryMan: "", salesman: "", deliveryStatus: "",
      status: "", invoiceNo: "", isDraft: false, isCanceled: false,
    });
  }

  // --- Table filtering logic ---
  const filtered = invoices.filter(row =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    "SL", "Date", "Type", "Invoice No", "Branch", "Warehouse", "Customer Name",
    "Sales Person", "Total Quantity", "Return Qty", "Total Amount", "Paid", "Credit",
    "Status", "Delivery status", "Payment status", "Action"
  ];

  return (
    <div className="invoicelist-container">

      {/* -------- Select Criteria Panel ---------- */}
      <div className="select-criteria-panel">
        <div className="criteria-title">Select Criteria</div>
        <form className="criteria-grid">
          <div>
            <label>Warehouse</label>
            <select name="warehouse" value={criteria.warehouse} onChange={handleCriteriaChange}>
              <option value="">Select</option>
              <option>Main Warehouse</option>
            </select>
          </div>
          <div>
            <label>Route</label>
            <select name="route" value={criteria.route} onChange={handleCriteriaChange}>
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label>Customer</label>
            <select name="customer" value={criteria.customer} onChange={handleCriteriaChange}>
              <option value="">Select</option>
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
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label>Salesman</label>
            <select name="salesman" value={criteria.salesman} onChange={handleCriteriaChange}>
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label>Delivery Status</label>
            <select name="deliveryStatus" value={criteria.deliveryStatus} onChange={handleCriteriaChange}>
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select name="status" value={criteria.status} onChange={handleCriteriaChange}>
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label>Invoice No</label>
            <input name="invoiceNo" value={criteria.invoiceNo} onChange={handleCriteriaChange} />
          </div>
          <div className="criteria-checkboxes">
            <label>
              <input type="checkbox" name="isDraft" checked={criteria.isDraft} onChange={handleCriteriaChange} />
              Is Draft
            </label>
            <label>
              <input type="checkbox" name="isCanceled" checked={criteria.isCanceled} onChange={handleCriteriaChange} />
              Is Canceled
            </label>
          </div>
          <div className="criteria-reset-container">
            <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {/* -------------------- Invoice Table ----------------- */}
      <div className="criteria-title">POS SALE</div>
      <div className="invoice-table-area">
        <div className="top-bar">
          {/* Left group: page size select and first 3 icons */}
          <div className="topbar-left">
            <select
              className="page-size"
              value={pageSize}
              onChange={e => setPageSize(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <button className="topbar-icon" title="Print">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 19H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM17 3H7v4h10V3z" />
              </svg>
            </button>
            <button className="topbar-icon" title="Import">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 15v1H6v-1H4v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4h-2zm-6-7l-5.5 6 1.42 1.42L11 11.83V3h2v8.83l4.08 4.59L17.5 14z" />
              </svg>
            </button>
            <button className="topbar-icon" title="Filter">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 7h18v2H3V7zm4 7h10v2H7v-2z" />
              </svg>
            </button>
          </div>
          {/* Center: search bar */}
          <div className="searchbar">
            <input
              type="text"
              placeholder="SEARCH"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {/* Right group: last 3 icons */}
          <div className="topbar-right">
            <button className="topbar-icon" title="Download">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 10v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z" />
              </svg>
            </button>
            <button className="topbar-icon" title="Delete">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </button>
            <button className="topbar-icon" title="Export">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 16v-1H5v1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2zm-7-1V3.97l-2.88 2.88L7 5.41 12 0l5 5.41-1.12 1.44L13 3.97V15h-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="table-scroll-area">
          <table className="invoicelist-table">
            <thead>
              <tr>
                {columns.map(col => <th key={col}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="empty">No records found.</td>
                </tr>
              ) : (
                filtered.slice(0, pageSize).map((row, idx) => (
                  <tr key={row.id || idx}>
                    {columns.map(col =>
                      <td key={col}>{row[col.toLowerCase().replace(/\s/g, '')]}</td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="footer">
          Showing 1 to {Math.min(filtered.length, pageSize)} out of {filtered.length} entries
        </div>
      </div>
    </div>
  );
}

export default POSSale;
