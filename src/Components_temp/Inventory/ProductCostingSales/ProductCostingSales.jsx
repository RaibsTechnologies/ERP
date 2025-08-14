import React from "react";
import "./ProductCostingSales.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ProductCostSales() {
  return (
    <div className="transferred-container">
      {/* Header */}
      <div className="hhhhh">
        <h2 className="heading">Product Costing Sales</h2>
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
            <th>↓ Image</th>
            <th>↓ Type</th>
            <th>↓Address</th>
            <th>↓ Product Name</th>
            <th>↓ SKU</th>
            <th>↓ Brand</th>
            <th>↓ Model</th>
            <th>↓ Previous Stock</th>
            <th>↓ Newly added Stock</th>
            <th>↓  Last Costing Price (unit)</th>
            <th>↓  New Costing Price (unit)</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty state - no data */}
        </tbody>
      </table>
    </div>
  );
}
