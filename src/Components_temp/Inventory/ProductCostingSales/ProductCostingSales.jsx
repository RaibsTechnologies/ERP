import React, { useState, useEffect } from "react";
import "./ProductCostingSales.css";
import { FaSearch, FaPrint, FaUpload, FaColumns } from "react-icons/fa";

export default function ProductCostingTable() {
  const [products, setProducts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">
      <h2 className="heading">Product Costing Sales</h2>

      <div className="table-controls">
        <select value={rowsPerPage} onChange={e => setRowsPerPage(Number(e.target.value))}>
          {[10, 20, 50].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
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
            <th>↓ SL</th>
            <th>↓ Image</th>
            <th>↓ Type</th>
            <th>↓ Address</th>
            <th>↓ Product Name</th>
            <th>↓ SKU</th>
            <th>↓ Brand</th>
            <th>↓ Model</th>
            <th>↓ Previous Stock</th>
            <th>↓ Newly added Stock</th>
            <th>↓ Last Costing Price (unit)</th>
            <th>↓ New Costing Price (unit)</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p, index) => (
            <tr key={index}>
              <td>{p.sl}</td>
              <td><img src={p.image} alt="product" className="product-img" /></td>
              <td>{p.type}</td>
              <td>{p.address}</td>
              <td>{p.productName}</td>
              <td>{p.sku}</td>
              <td>{p.brand}</td>
              <td>{p.model}</td>
              <td>{p.previousStock}</td>
              <td>{p.newlyAddedStock}</td>
              <td>{p.lastCostingPrice}</td>
              <td>{p.newCostingPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
