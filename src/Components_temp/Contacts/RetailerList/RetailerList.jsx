import React, { useState } from "react";
import "./RetailerList.css";

function RetailerList() {
  const [pageSize, setPageSize] = useState("10");
  const [search, setSearch] = useState("");
  const columns = [
    "SL", "Name", "Email", "Phone", "Country", "State", "City", "Status", "Address", "Action"
  ];
  const rows = [];

  return (
    <div className="retailerlist-container">
      <div className="main-title">Retailer List</div>
      <div className="top-bar">
        <select
          className="page-size"
          value={pageSize}
          onChange={e => setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="All">All</option>
        </select>
        <button className="add-btn">Add New Retailer</button>
        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="topbar-right">
          {/* Missing icon - Refresh/Reload */}
          <button className="topbar-icon" title="Refresh">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L7 6l5 5V7
                       a6 6 0 1 1-6 6h-2c0 4.42 
                       3.58 8 8 8s8-3.58 8-8
                       c0-2.21-.9-4.21-2.35-5.65z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Print">
            <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6
                         c0-1.66-1.34-3-3-3z
                         M16 19H8v-5h8v5zm3-7
                         c-.55 0-1-.45-1-1s.45-1 
                         1-1 1 .45 1 1-.45 1-1 1z
                         M17 3H7v4h10V3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Export">
            <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 
                       0 1-2-2v-9h2v9h14v-9h2z
                       M17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Col Show/Hide">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1.2" fill="#14b56b"/>
              <rect x="4" y="11" width="16" height="2" rx="1.2" fill="#14b56b"/>
              <rect x="4" y="16" width="10" height="2" rx="1.2" fill="#14b56b"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="table-area">
        <table className="retailer-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="table-empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RetailerList;
