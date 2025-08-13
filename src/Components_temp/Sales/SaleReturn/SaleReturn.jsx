import React, { useState } from "react";
import "./SaleReturn.css";

function SaleReturn() {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [rows] = useState([]); // stays empty as per screenshot

  const columns = [
    "SL", "Date", "Customer Name", "Invoice No",
    "Return Qty", "Total Amount", "Status", "Action"
  ];

  const filtered = rows.filter(row =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="salereturn-container">
      <div className="main-title">Sale Return List</div>
      <div className="top-bar">
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
          <button className="add-btn">+ Create Sale Return</button>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="topbar-right">
          <button className="topbar-icon" title="Print">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 19H8v-5h8v5zm3-7c-.55
              0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Download">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Delete">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="table-scroll-area">
        <table className="salereturn-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="empty">
                {/* empty as in your screenshot */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SaleReturn;
