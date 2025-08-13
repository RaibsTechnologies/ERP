import React, { useState } from "react";
import "./RecurringInvoice.css";

function RecurringInvoice() {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [recurringInvoices] = useState([]); // hook up to backend later

  const filtered = recurringInvoices.filter((row) =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    "SL", "Invoice No", "Total Invoices", "Start Date", "End Date",
    "Frequently Generate After", "Is Running", "Action"
  ];

  return (
    <div className="recurringinvoice-container">
      {/* ---- Page Title ---- */}
      <div className="criteria-title">Recurring Invoice</div>

      {/* ---- Top Bar ---- */}
      <div className="top-bar">
        {/* Left: dropdown + 3 icons */}
        <div className="topbar-left">
          <select
            className="page-size"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>

          <button className="topbar-icon" title="Print">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 19H8v-5h8v5zM19 12c-.55 0-1-.45-1-1s.45-1 1-1 .999.45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Import">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 15v1H6v-1H4v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4h-2zM12 4l-5 6h3v6h4v-6h3l-5-6z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Filter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 7h18v2H3zm4 7h10v2H7z"/>
            </svg>
          </button>
        </div>

        {/* Center: search */}
        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Right: +Add button and 3 icons */}
        <div className="topbar-right">
          <button className="add-btn">+ Add Recurring Invoice</button>
          <button className="topbar-icon" title="Download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Delete">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Export">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 16v-1H5v1H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-2zM12 0L7 5.41 8.41 6.83 11 4.25V15h2V4.25l2.59 2.58L17 5.41 12 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ---- Table ---- */}
      <div className="table-scroll-area">
        <table className="recurringinvoice-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="empty">
                  No records found.
                </td>
              </tr>
            ) : (
              filtered.slice(0, pageSize).map((row, idx) => (
                <tr key={row.id || idx}>
                  {columns.map((col) => (
                    <td key={col}>{row[col.toLowerCase().replace(/\s/g, '')]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="footer">
        Showing 1 to {Math.min(filtered.length, pageSize)} out of {filtered.length} entries
      </div>
    </div>
  );
}

export default RecurringInvoice;
