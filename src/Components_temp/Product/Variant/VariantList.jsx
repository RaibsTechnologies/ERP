import React, { useState } from "react";
// import "./VariantList.css";
import { FaSearch, FaPrint, FaUpload, FaColumns, FaDownload ,FaArrowDown } from "react-icons/fa";
import "../Product.css"; // Assuming you have a common CSS file for product styles

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
    <div className="product-container">
      <h3 className="product-container_heading">Variant</h3>
      <div className="product-controls_row">
        <select
          className="product-select"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <button className="product-Btn">+ Add New Variant</button>
        <div className="product-searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
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
              <td colSpan={5} className="empty">No records found.</td>
            </tr>
          ) : (
            filtered.slice(0, pageSize).map((v, idx) => (
              <tr key={v.id || idx}>
                <td className="product-table_dat">{idx + 1}</td>
                <td className="product-table_dat">{v.name}</td>
                <td className="product-table_dat">{v.description}</td>
                <td className="product-table_dat">
                  <span className={`status ${v.status ? v.status.toLowerCase() : ""}`}>
                    {v.status}
                  </span>
                </td>
                <td>
                  <select className="product-select" defaultValue="">
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
    </div>
  );
}

export default VariantList;
