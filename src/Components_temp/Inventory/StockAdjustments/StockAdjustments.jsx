import React from "react";
// import "./StockAdjustments.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function TransferredProducts() {
  return (
    <div className="inventory-container">
      {/* Header */}
      <div className="stocktransfer-header">
        <h2 className="inventory-stocktransfer_header">Stock Adjustments</h2>
        <button className="inventory-stocktransfer_Btn">+ Add Stock Adjustments</button>
      </div>

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
              <th className="inventory-table_heading">↓ Date</th>
              <th className="inventory-table_heading">↓ Branch or WareHouse</th>
              <th className="inventory-table_heading">↓ Reference No</th>
              <th className="inventory-table_heading">↓ Recovery Amount</th>
              <th className="inventory-table_heading">↓ Created User</th>
              <th className="inventory-table_heading">↓ Updated By</th>
              <th className="inventory-table_heading">↓ Status</th>
              <th className="inventory-table_heading">↓ Action</th>
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
