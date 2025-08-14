import React from "react";
import "./ProductInfo.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ProductInfo() {
  return (
    <div className="transferred-container">
      {/* Header */}
      <div className="hhhhh">
        <h2 className="heading"> Product Information</h2>
      </div>

      {/* Controls */}
      <div className="table-controls">
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <div className="search-box">
          <FaSearch   className="search-icon" />
          <input type="text" placeholder="SEARCH" />
        </div>

        <div className="icon-buttons">
            <button className="icon-btn">
              <FaPrint />
            </button>
            <button className="icon-btn">
              <FaUpload />
            </button>
            <button className="icon-btn">
              <FaColumns />
            </button>
        </div>
      </div>

      {/* Table */}
      <table className="products-table">
        <thead>
          <tr>
            <th>↓ SL</th>
            <th>↓ Warehouse</th>
            <th>↓ Purpose</th>
            <th>↓ Product Name</th>
            <th>↓ In / Out</th>
            <th>↓ Quantity</th>
            <th>↓ Date</th>
            <th>↓ Created User</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty state - no data */}
        </tbody>
      </table>
    </div>
  );
}
