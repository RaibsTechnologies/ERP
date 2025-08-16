import React, { useEffect, useState } from "react";
// import "./UnitTypeList.css";
import { FaSearch, FaPrint, FaUpload, FaColumns, FaDownload ,FaArrowDown } from "react-icons/fa";

import "../Product.css"; // Assuming you have a common CSS file for product styles

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
    <div className="product-container">
      <h3 className="product-container_heading">Unit Type</h3>

      <div className="product-controls_row">
        <select
          className="product-select"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button className="product-Btn">+ Add Unit Type</button>

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
        <p className="loading">Loading unit types...</p>
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
                  <td colSpan={5} className="empty">
                    No unit types found.
                  </td>
                </tr>
              ) : (
                filtered.slice(0, +pageSize).map((u, i) => (
                  <tr key={u.id}>
                    <td className="product-table_dat">{i + 1}</td>
                    <td className="product-table_dat">{u.name}</td>
                    <td className="product-table_dat">{u.description}</td>
                    <td className="product-table_dat">
                      <span className={`status ${u.status.toLowerCase()}`}>
                        {u.status}
                      </span>
                    </td>
                    <td>
                      <select className="product-select" defaultValue="">
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
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UnitTypeList;
