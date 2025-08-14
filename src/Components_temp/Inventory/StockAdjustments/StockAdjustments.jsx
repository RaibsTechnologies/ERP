import React from "react";
import "./StockAdjustments.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function TransferredProducts() {
  return (
    <div className="transferred-container">
      {/* Header */}
      <div className="hhhhh">
        <h2 className="heading">Stock Adjustments</h2>
        <button className="add-btn">+ Add Stock Adjustments</button>
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
            <th>↓ Date</th>
            <th>↓ Branch or WareHouse</th>
            <th>↓ Reference No</th>
            <th>↓ Recovery Amount</th>
            <th>↓ Created User</th>
            <th>↓ Updated By</th>
            <th>↓ Status</th>
            <th>↓ Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty state - no data */}
        </tbody>
      </table>
    </div>
  );
}
