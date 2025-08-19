import React from "react";
// import "./ProductMovement.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ProductMovement() {
  return (
    <div className="inventory-container">
      {/* Header */}
      <h2 className="inventory-header"> Product Movement</h2>


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
        <table className="products-table">
          <thead>
            <tr>
              <th className="inventory-table_heading">↓ SL</th>
              <th className="inventory-table_heading">↓ Warehouse</th>
              <th className="inventory-table_heading">↓ Purpose</th>
              <th className="inventory-table_heading">↓ Product Name</th>
              <th className="inventory-table_heading">↓ In / Out</th>
              <th className="inventory-table_heading">↓ Quantity</th>
              <th className="inventory-table_heading">↓ Date</th>
              <th className="inventory-table_heading">↓ Created User</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty state - no data */}
          </tbody>
        </table>
      </div>
    </div >
  );
}
