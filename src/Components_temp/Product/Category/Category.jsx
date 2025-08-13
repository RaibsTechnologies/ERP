import React, { useState, useEffect } from "react";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";
import "./Category.css";

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories") // replace with your backend API
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="category-container">
      {/* Header */}
      <div className="category-header">
        <h1>Category</h1>
      </div>

      {/* Controls Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Left Controls */}
        <div className="category-controls">
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button className="add-btn">+ Add Category</button>
        </div>

        {/* Search */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="SEARCH" />
        </div>

        {/* Right Icons */}
        <div
          style={{
            display: "flex",
            border: "1px solid #ddd",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <button style={iconButtonStyle}>
            <FaPrint />
          </button>
          <button style={iconButtonStyle}>
            <FaUpload />
          </button>
          <button style={iconButtonStyle}>
            <FaColumns />
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="category-table">
        <thead>
          <tr>
            <th>↓ SL</th>
            <th>↓ Image</th>
            <th>↓ Name</th>
            <th>↓ Code</th>
            <th>↓ Parent</th>
            <th>↓ Description</th>
            <th>↓ Status</th>
            <th>↓ Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={cat.id}>
              <td>{index + 1}</td>
              <td>
                <img src={cat.image} alt={cat.name} />
              </td>
              <td>{cat.name}</td>
              <td>{cat.code}</td>
              <td>{cat.parent}</td>
              <td>{cat.description}</td>
              <td>{cat.status}</td>
              <td>
                {/* Add your edit/delete buttons here */}
                Edit | Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const iconButtonStyle = {
  background: "none",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  color: "#555",
};

export default CategoryPage;
