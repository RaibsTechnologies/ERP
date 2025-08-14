import React, { useState } from "react";
import "./ContactType.css";

function ContactType() {
  const [pageSize, setPageSize] = useState("10");
  const columns = ["SL", "Name", "Description", "Status", "Action"];
  const [rows] = useState([]); // Table is empty

  return (
    <div className="contacttype-container">
      <div className="main-title">Contact Type</div>
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
            <option value="100">100</option>
            <option value="All">All</option>
          </select>
          <button className="add-btn">+ Add Contact Type</button>
        </div>
        <div className="topbar-right">
          {/* Print */}
          <button className="topbar-icon" title="Print">
            <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3z
                         M16 19H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1
                         1 .45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/>
            </svg>
          </button>
          {/* Export */}
          <button className="topbar-icon" title="Export">
            <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2z
                         M17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          {/* Col show/hide */}
          <button className="topbar-icon" title="Col Show/Hide">
            <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1.2" fill="#18bc77"/>
              <rect x="4" y="11" width="16" height="2" rx="1.2" fill="#18bc77"/>
              <rect x="4" y="16" width="10" height="2" rx="1.2" fill="#18bc77"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="table-scroll-area">
        <table className="contacttype-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactType;
