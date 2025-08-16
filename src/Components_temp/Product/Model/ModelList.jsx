import React, { useEffect, useState } from "react";
// import "./ModelList.css";

import { FaSearch, FaPrint, FaUpload, FaColumns, FaDownload, FaArrowDown } from "react-icons/fa";
import "../Product.css"; // Assuming you have a common CSS file for product styles

function ModelList() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");

  // Dummy fallback data
  const demoModels = [
    { id: 1, name: "No Model", description: "", status: "Active" },
    { id: 2, name: "Model X", description: "High-end device", status: "Active" },
    { id: 3, name: "Model Y", description: "Budget-friendly", status: "Inactive" },
  ];

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      setLoading(true);
      const apiUrl = "https://your-backend-api.com/api/models";
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const list = Array.isArray(data.models) ? data.models : Array.isArray(data) ? data : [];
      setModels(list);
      setError(null);
    } catch (err) {
      console.warn("Error fetching models:", err);
      setError("Could not fetch models — showing sample data.");
      setModels(demoModels);
    } finally {
      setLoading(false);
    }
  };

  const filtered = models.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">
      <h3 className="product-container_heading">Model</h3>

      <div className="product-controls_row">
        <select className="product-select" value={pageSize} onChange={(e) => setPageSize(e.target.value)} >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button className="product-Btn">+ Add Model</button>
        <div className="product-searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="product-search_input"
          />
          <button className="product-icon_btn">
            <FaSearch />
          </button>
        </div>

        {/* Correct Action Icons */}
        <div className="product-icon_btns">
          <button className="product-icon_btn">
            <FaPrint />
          </button>
          <button className="product-icon_btn">
            <FaUpload />
          </button>
          <button className="product-icon_btn">
            <FaDownload />
          </button>
          <button className="product-icon_btn">
            <FaColumns />
          </button>
        </div>
      </div>

      {loading ? (
        <p className="loading">Loading models...</p>
      ) : (
        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th className="product-table_heading">SL</th>
                <th className="product-table_heading">Name</th>
                <th className="product-table_heading">Description</th>
                <th className="product-table_heading">Status</th>
                <th className="product-table_heading">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="empty">No models found.</td>
                </tr>
              ) : (
                filtered.slice(0, +pageSize).map((m, idx) => (
                  <tr key={m.id}>
                    <td className="product-table_dat">{idx + 1}</td>
                    <td className="product-table_dat">{m.name}</td>
                    <td className="product-table_dat">{m.description}</td>
                    <td className="product-table_dat">
                      <span className={`status ${m.status.toLowerCase()}`}>
                        {m.status}
                      </span>
                    </td>
                    <td>
                      <select className="product-select" defaultValue="">
                        <option value="" disabled>SELECT</option>
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
              Showing 1 to {Math.min(filtered.length, +pageSize)} out of {filtered.length} entries
            </div>
          )}
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ModelList;
