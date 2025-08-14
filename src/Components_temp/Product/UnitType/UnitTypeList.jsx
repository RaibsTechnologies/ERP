import React, { useEffect, useState } from "react";
import "./UnitTypeList.css";

function UnitTypeList() {
  const [unitTypes, setUnitTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");

  // Dummy fallback data
  const demoUnitTypes = [
    { id: 1, name: "Pcs", description: "", status: "Active" },
  ];

  useEffect(() => {
    fetchUnitTypes();
  }, []);

  const fetchUnitTypes = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://your-backend-api.com/api/unit-types");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const list = Array.isArray(data.unitTypes)
        ? data.unitTypes
        : Array.isArray(data)
        ? data
        : [];
      setUnitTypes(list);
      setError(null);
    } catch (err) {
      console.warn("Error fetching unit types:", err);
      setError("Could not fetch unit types — showing sample data.");
      setUnitTypes(demoUnitTypes);
    } finally {
      setLoading(false);
    }
  };

  const filtered = unitTypes.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="unit-container">
      <h3 className="heading">Unit Type</h3>

      <div className="top-bar">
        <select
          className="page-size"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button className="add-btn">+ Add Unit Type</button>

        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="action-icons">
          {/* Print / Export */}
          <button className="icon-btn" title="Print / Export">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3z M16 19H8v-5h8v5zm3-7c-.55
              0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/>
            </svg>
          </button>
          {/* Import */}
          <button className="icon-btn" title="Import">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 14v5c0 1.1-.9 2-2
              2H5c-1.1 0-2-.9-2-2v-5h2v5h14v-5h2zM11 16V5.83L8.41
              8.41 7 7l5-5 5 5-1.41 1.41L13 5.83V16h-2z"/>
            </svg>
          </button>
          {/* Download */}
          <button className="icon-btn" title="Download">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10v9c0 1.1-.9 2-2
              2H5c-1.1 0-2-.9-2-2v-9h2v9h14v-9h2zM11 4V14l-3.59-3.59L6
              12l6 6 6-6-1.41-1.41L13 14V4h-2z"/>
            </svg>
          </button>
          {/* Delete */}
          <button className="icon-btn" title="Delete">
            <svg width="20" height="20" viewBox="0 0 24 24"
                 fill="currentColor"><path d="M6 19c0 1.1.9 2
                 2 2h8c1.1 0 2-.9
                 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1
                 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>

      {loading ? (
        <p className="loading">Loading unit types...</p>
      ) : (
        <>
          <table className="unit-table">
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
                  <td colSpan={5} className="empty">
                    No unit types found.
                  </td>
                </tr>
              ) : (
                filtered.slice(0, +pageSize).map((u, i) => (
                  <tr key={u.id}>
                    <td>{i + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.description}</td>
                    <td>
                      <span className={`status ${u.status.toLowerCase()}`}>
                        {u.status}
                      </span>
                    </td>
                    <td>
                      <select className="action-select" defaultValue="">
                        <option value="" disabled>
                          SELECT
                        </option>
                        <option value="edit">Edit</option>
                        <option value="delete">Delete</option>
                        <option value="view">View</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {filtered.length > 0 && (
            <div className="footer">
              Showing 1 to {Math.min(filtered.length, +pageSize)} out of{" "}
              {filtered.length} entries
            </div>
          )}
        </>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UnitTypeList;
