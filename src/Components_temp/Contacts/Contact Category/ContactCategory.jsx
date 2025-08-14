import React, { useState } from "react";
import "./ContactCategory.css";

function ContactCategory() {
  const [pageSize, setPageSize] = useState("10");
  const columns = ["SL", "Name", "Description", "Status", "Action"];

  const rows = [
    { sl: 1, name: "No Category", description: "", status: "Active" },
    { sl: 2, name: "VIP Clients", description: "High value clients", status: "Inactive" }
  ];

  // ERP-style sort arrows as SVG
  const SortArrows = () => (
    <span className="sort-arrows">
      <svg className="arrow up-arrow" viewBox="0 0 10 6">
        <path d="M1 5L5 1L9 5H1Z" />
      </svg>
      <svg className="arrow down-arrow" viewBox="0 0 10 6">
        <path d="M1 1L5 5L9 1H1Z" />
      </svg>
    </span>
  );

  return (
    <div className="contactcat-table-container">
      <div className="cat-table-title">Contact Category</div>

      {/* Top controls */}
      <div className="top-bar">
        <div className="left-controls">
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
          <button className="add-btn">+ Add Contact Category</button>
        </div>
        <div className="right-icons">
          <button className="topbar-icon" title="Print">🖨</button>
          <button className="topbar-icon" title="Export">⬇</button>
          <button className="topbar-icon" title="Col Show/Hide">☰</button>
        </div>
      </div>

      {/* Table */}
      <div className="contactcat-table-area">
        <table className="contactcat-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>
                  {col}
                  <SortArrows />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="cat-table-empty"></td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.sl}</td>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                  <td>
                    <span className={`cat-status ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="cat-action-cell">
                    <button className="action-btn edit" title="Edit">✎</button>
                    <button className="action-btn delete" title="Delete">🗑</button>
                    <button className="action-btn more" title="More">⋮</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactCategory;
