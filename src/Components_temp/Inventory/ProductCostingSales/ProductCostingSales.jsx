import React from "react";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ProductCostSales() {
  return (
    <div className="inventory-container">
      {/* Header */}
      <h2 className="inventory-header">Product Costing Sales</h2>

      {/* Controls */}
      <div className="inventory-controls_row">
        <select className="inventory-select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <div className="inventory-searchbar">
          <input type="text" placeholder="SEARCH" className="inventory-search_input" />
          <button className="inventory-icon_btn">
            <FaSearch />
          </button>
        </div>

        <div className="inventory-icon_btns">
          <button className="inventory-icon_btn">
            <FaPrint />
          </button>
          <button className="inventory-icon_btn">
            <FaUpload />
          </button>
          <button className="inventory-icon_btn">
            <FaColumns />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th className="inventory-table_heading">↓ SL</th>
              <th className="inventory-table_heading">↓ Image</th>
              <th className="inventory-table_heading">↓ Type</th>
              <th className="inventory-table_heading">↓ Address</th>
              <th className="inventory-table_heading">↓ Product Name</th>
              <th className="inventory-table_heading">↓ SKU</th>
              <th className="inventory-table_heading">↓ Brand</th>
              <th className="inventory-table_heading">↓ Model</th>
              <th className="inventory-table_heading">↓ Previous Stock</th>
              <th className="inventory-table_heading">↓ Newly added Stock</th>
              <th className="inventory-table_heading">↓  Last Costing Price (unit)</th>
              <th className="inventory-table_heading">↓  New Costing Price (unit)</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty state - no data */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
