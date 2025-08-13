import React, { useState, useEffect } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(10);

  useEffect(() => {
    fetch('http://localhost:3001/api/transferred-products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="tp-container">
      <div className="tp-header-row">
        <h2 className="tp-title">Product Info</h2>
      </div>
      <div className="tp-toolbar">
        {/* Dropdown */}
        <div className="tp-dropdown-wrap">
          <select
            className="tp-dropdown"
            value={rows}
            onChange={e => setRows(+e.target.value)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        {/* Search */}
        <div className="tp-search-box">
          <span className="tp-search-icon" aria-label="Search Icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#18c382"
              strokeWidth="2.0"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'block' }}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            className="tp-search"
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {/* Action Buttons */}
        <div className="tp-actions">
          {/* Print */}
          <button className="tp-action-btn" aria-label="Print">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="9" width="12" height="7" rx="2" ry="2" />
              <path d="M6 18h12v4H6z" />
              <path d="M6 9V4h12v5" />
            </svg>
          </button>
          {/* Upload */}
          <button className="tp-action-btn" aria-label="Upload">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V6" />
              <polyline points="6 12 12 6 18 12" />
              <rect x="4" y="17" width="16" height="3" rx="1" ry="1" />
            </svg>
          </button>
          {/* Hide Column */}
          <button className="tp-action-btn" aria-label="Hide Column">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="4" height="16" />
              <line x1="11" y1="4" x2="21" y2="4" />
              <line x1="11" y1="12" x2="21" y2="12" />
              <line x1="11" y1="20" x2="21" y2="20" />
            </svg>
          </button>
        </div>
      </div>
      <table className="tp-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Model</th>
            <th>Brand</th>
            <th>In Stock</th>
            <th>Purchase Price</th>
            <th>Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center', height: '180px', background: "#fff" }}></td>
            </tr>
          ) : (
            products.map((item, idx) => (
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{/* image cell, e.g. <img src={item.image} alt="" /> */}</td>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.model}</td>
                <td>{item.brand}</td>
                <td>{item.inStock}</td>
                <td>{item.purchasePrice}</td>
                <td>{item.sellPrice}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInfo;
