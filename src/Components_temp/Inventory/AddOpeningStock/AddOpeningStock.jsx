import React, { useState, useEffect } from "react";
// import "./AddOpeningStock.css";
import "../Inventory.css"; // Common product styles
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function AddOpeningStock() {
  const [formData, setFormData] = useState({
    product: "",
    warehouse: "",
    date: "2025-08-13",
    sku: ""
  });

  const [stockList, setStockList] = useState([]);

  // Fetch existing stock list from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/opening-stock")
      .then(res => res.json())
      .then(data => setStockList(data))
      .catch(err => console.error("Error fetching stock list:", err));
  }, []);

  // Handle form field change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to backend
  const handleSave = () => {
    fetch("http://localhost:5000/api/opening-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setStockList(prev => [...prev, data]); // add new row
        setFormData({ product: "", warehouse: "", date: "2025-08-13", sku: "" });
      })
      .catch(err => console.error("Error saving stock:", err));
  };

  return (
    <div className="inventory-container">
      {/* Add Opening Stock */}
      <h3 className="inventory-header">Add Opening Stock</h3>
      <div className="addOpeningStock-form-row">
        <div className="addOpeningStock-form-group">
          <label>
            Product <span className="required">*</span>
          </label>
          <select name="product" value={formData.product} onChange={handleChange}  className="inventory-search_input">
            <option value="">Choose Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
          </select>
        </div>

        <div className="addOpeningStock-form-group">
          <label>
            Warehouse <span className="required">*</span>
          </label>
          <select name="warehouse" value={formData.warehouse} onChange={handleChange} className="inventory-search_input">
            <option value="">Select One</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
          </select>
        </div>

        <div className="addOpeningStock-form-group">
          <label>
            Date <span className="required">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="inventory-search_input"
          />
        </div>

        <div className="addOpeningStock-form-group">
          <label>SKU / Barcode</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="inventory-search_input"
          />
        </div>
      </div>
      <div className="addOpeningStock-save_button">
        <button className="inventory-Btn" onClick={handleSave}>
          ✓ Save
        </button>
      </div>

      {/* Opening Stock List */}
      <h3 className="inventory-header">Opening Stock List</h3>

      <div className="inventory-controls_row">
        <select className="inventory-select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <div className="inventory-searchbar">
          <input type="text" placeholder="SEARCH" className="inventory-search_input"/>
          <button className="inventory-icon_btn">
          <FaSearch className="inventory-search_icon" />
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
    <div className="inventory-table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr>
            <th className="inventory-table_heading">SL</th>
            <th className="inventory-table_heading">Date</th>
            <th className="inventory-table_heading">Name</th>
            <th className="inventory-table_heading">SKU</th>
            <th className="inventory-table_heading"> className="inventory-table_heading"Brand</th>
            <th className="inventory-table_heading">Model</th>
            <th className="inventory-table_heading">Warehouse</th>
            <th className="inventory-table_heading">Purchase Price</th>
            <th className="inventory-table_heading">Min Selling Price</th>
            <th className="inventory-table_heading">Selling Price</th>
            <th className="inventory-table_heading">Stock</th>
            <th className="inventory-table_heading">Created User</th>
            <th className="inventory-table_heading">Status</th>
            <th className="inventory-table_heading">↓ Action</th>
          </tr>
        </thead>
        <tbody>
          {stockList.length > 0 ? (
            stockList.map((item, index) => (
              <tr key={index}>
                <td className="inventory-table_dat">{index + 1}</td>
                <td className="inventory-table_dat">{item.date}</td>
                <td className="inventory-table_dat">{item.product}</td>
                <td className="inventory-table_dat">{item.sku}</td>
                <td className="inventory-table_dat">{item.brand || "-"}</td>
                <td className="inventory-table_dat">{item.model || "-"}</td>
                <td className="inventory-table_dat">{item.warehouse}</td>
                <td className="inventory-table_dat">{item.purchasePrice || "-"}</td>
                <td className="inventory-table_dat">{item.minSellingPrice || "-"}</td>
                <td className="inventory-table_dat">{item.sellingPrice || "-"}</td>
                <td className="inventory-table_dat">{item.stock || "-"}</td>
                <td className="inventory-table_dat">{item.createdUser || "-"}</td>
                <td className="inventory-table_dat">{item.status || "-"}</td>
                <td className="inventory-table_dat">...</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="inventory-table_dat" colSpan="14" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
