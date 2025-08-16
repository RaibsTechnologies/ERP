import React, { useState, useEffect } from "react";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";
// import "./Category.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories") // replace with your backend API
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="product-container">
      {/* Header */}
      <div>
        <h3 className="product-container_heading">Category</h3>
      </div>

      {/* Controls Row */}
      <div className="product-controls_row ">
        {/* Left Controls */}
        <select className="product-select">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button className="product-Btn">+ Add Category</button>

        {/* Search */}
        <div className="product-searchbar">
          <input type="text" placeholder="SEARCH" className="product-search_input" />
          <button className="product-icon_btn">
            <FaSearch />
          </button>
        </div>

        {/* Right Icons */}
        <div className="product-icon_btns ">
          <button className="product-icon_btn">
            <FaPrint />
          </button>
          <button className="product-icon_btn">
            <FaUpload />
          </button>
          <button className="product-icon_btn">
            <FaColumns />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="product-table-wrapper">


        <table className="product-table">
          <thead>
            <tr>
              <th className="product-table_heading" >↓ SL</th>
              <th className="product-table_heading" >↓ Image</th>
              <th className="product-table_heading" >↓ Name</th>
              <th className="product-table_heading" >↓ Code</th>
              <th className="product-table_heading" >↓ Parent</th>
              <th className="product-table_heading" >↓ Description</th>
              <th className="product-table_heading" >↓ Status</th>
              <th className="product-table_heading" >↓ Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={cat.image} alt={cat.name} />
                </td>
                <td className="product-table_dat">{cat.name}</td>
                <td className="product-table_dat">{cat.code}</td>
                <td className="product-table_dat">{cat.parent}</td>
                <td className="product-table_dat">{cat.description}</td>
                <td className="product-table_dat">{cat.status}</td>
                <td className="product-table_dat">
                  {/* Add your edit/delete buttons here */}
                  Edit | Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryPage;
