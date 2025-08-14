import React, { useState } from 'react';
import './StockList.css';

const StockList = () => {
  const [warehouse, setWarehouse] = useState('');
  const [supplier, setSupplier] = useState('');
  const [brand, setBrand] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    console.log("Search clicked", { warehouse, supplier, brand, date });
  };

  const handleReset = () => {
    setWarehouse('');
    setSupplier('');
    setBrand('');
    setDate('');
  };

  return (
    <div className="stock-list-container">
      {/* Filters */}
      <h2 className="heading">Stock List of Product</h2>
      <div className="filter-row">
        <div className="filter-group">
          <label>Warehouse</label>
          <select value={warehouse} onChange={(e) => setWarehouse(e.target.value)}>
            <option value="">Select one</option>
            <option value="warehouse1">Warehouse 1</option>
            <option value="warehouse2">Warehouse 2</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Supplier</label>
          <select value={supplier} onChange={(e) => setSupplier(e.target.value)}>
            <option value="">Choose Supplier</option>
            <option value="supplier1">Supplier 1</option>
            <option value="supplier2">Supplier 2</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Select Brand</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">Choose One</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="button-section">
          <button onClick={handleSearch} className="btn">SEARCH</button>
          <button onClick={handleReset} className="btn">RESET</button>
        </div>
      </div>

      <div style={{ marginTop: '25px' }}></div>

      {/* Stock Summary */}
      <div className="stock-summary">
        <div className="summary-card">
          <p>Available</p>
          <h2>0</h2>
          <div className="progress-bar green"></div>
        </div>
        <div className="summary-card">
          <p>Stock Low</p>
          <h2>0</h2>
          <div className="progress-bar orange"></div>
        </div>
        <div className="summary-card">
          <p>Out of Stock</p>
          <h2>0</h2>
          <div className="progress-bar red"></div>
        </div>
      </div>

      {/* Heading instead of small stats */}
      <h3 className="heading">Stock List of Product</h3>

      {/* Table Header Row with dropdown + search */}
      <div className="table-header-row">
        <select>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <input type="text" placeholder="Search" />
      </div>

      {/* Table */}
      <table className="stock-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Warehouse</th>
            <th>Supplier</th>
            <th>In Stock</th>
            <th>Stock Alert</th>
            <th>Purchase Price</th>
            <th>Selling Price</th>
            <th>Total Inventory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="13" style={{ textAlign: 'center' }}>
              No Data Available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
