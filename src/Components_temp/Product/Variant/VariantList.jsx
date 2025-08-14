import React, { useState } from "react";
import "./VariantList.css";

function VariantList() {
  const [variants, setVariants] = useState([]); // Start empty, as in screenshot
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);

  // Filtering and pagination (will work if you add data later)
  const filtered = variants.filter(
    v =>
      v.name?.toLowerCase().includes(search.toLowerCase()) ||
      v.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="variant-container">
      <h3 className="heading">Variant</h3>
      <div className="top-bar">
        <select
          className="page-size"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <button className="add-btn">+ Add New Variant</button>
        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="action-icons">
          {/* Print */}
          <button className="icon-btn" title="Print / Export">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 19H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1
               1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
            </svg>
          </button>
          {/* Import */}
          <button className="icon-btn" title="Import">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 14v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-5h2v5h14v-5h2zM17 7l-1.41 1.41L13 5.83V16h-2V5.83
                        L8.41 8.41 7 7l5-5 5 5z"/>
            </svg>
          </button>
          {/* Download */}
          <button className="icon-btn" title="Download">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
        </div>
      </div>

      <table className="variant-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={5} className="empty">No records found.</td>
            </tr>
          ) : (
            filtered.slice(0, pageSize).map((v, idx) => (
              <tr key={v.id || idx}>
                <td>{idx + 1}</td>
                <td>{v.name}</td>
                <td>{v.description}</td>
                <td>
                  <span className={`status ${v.status ? v.status.toLowerCase() : ""}`}>
                    {v.status}
                  </span>
                </td>
                <td>
                  <select className="action-select" defaultValue="">
                    <option value="" disabled>SELECT</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default VariantList;
