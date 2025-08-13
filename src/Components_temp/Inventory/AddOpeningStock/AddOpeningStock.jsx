import React, { useState, useEffect } from "react";
import "./AddOpeningStock.css";
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
    <div className="opening-stock-container">
      {/* Add Opening Stock */}
      <h2 className="section-title">Add Opening Stock</h2>
      <div className="form-row">
        <div className="form-group">
          <label>
            Product <span className="required">*</span>
          </label>
          <select name="product" value={formData.product} onChange={handleChange}>
            <option value="">Choose Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Warehouse <span className="required">*</span>
          </label>
          <select name="warehouse" value={formData.warehouse} onChange={handleChange}>
            <option value="">Select One</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Date <span className="required">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>SKU / Barcode</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="save-btn">
        <button className="btn" onClick={handleSave}>
          ✓ Save
        </button>
      </div>

      {/* Opening Stock List */}
      <h2 className="section-title">Opening Stock List</h2>

      <div className="table-controls">
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <div className="search-box">
          <FaSearch />
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

      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Warehouse</th>
            <th>Purchase Price</th>
            <th>Min Selling Price</th>
            <th>Selling Price</th>
            <th>Stock</th>
            <th>Created User</th>
            <th>Status</th>
            <th>↓ Action</th>
          </tr>
        </thead>
        <tbody>
          {stockList.length > 0 ? (
            stockList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.product}</td>
                <td>{item.sku}</td>
                <td>{item.brand || "-"}</td>
                <td>{item.model || "-"}</td>
                <td>{item.warehouse}</td>
                <td>{item.purchasePrice || "-"}</td>
                <td>{item.minSellingPrice || "-"}</td>
                <td>{item.sellingPrice || "-"}</td>
                <td>{item.stock || "-"}</td>
                <td>{item.createdUser || "-"}</td>
                <td>{item.status || "-"}</td>
                <td>...</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
