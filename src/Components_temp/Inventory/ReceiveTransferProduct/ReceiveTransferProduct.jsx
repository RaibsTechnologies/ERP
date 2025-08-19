import React from "react";
import "./ReceiveTransferProduct.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ReceiveTransferProduct() {
  return (
    <div className="inventory-container">
      {/* Header */}
      <div className="stocktransfer-header">
        <h2 className="inventory-stocktransfer_header"> Receive Transfer Product</h2>
        <button className="inventory-stocktransfer_Btn">+ Transferred Products</button>
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
              <th className="inventory-table_heading">↓ Invoice No</th>
              <th className="inventory-table_heading">↓ Date</th>
              <th className="inventory-table_heading">↓ From</th>
              <th className="inventory-table_heading">↓ To</th>
              <th className="inventory-table_heading">↓ QTY</th>
              <th className="inventory-table_heading">↓ Total Amount</th>
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
