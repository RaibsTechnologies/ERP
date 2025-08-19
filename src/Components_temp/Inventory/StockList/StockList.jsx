import React, { useState } from 'react';
// import './StockList.css';

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
    <div className="inventory-container">
      {/* Filters */}
      <h2 className="inventory-header">Stock List of Product</h2>
      <div className="stockList-filter_row">
        <div className="stockList-filter_group">
          <label>Warehouse</label>
          <select value={warehouse} onChange={(e) => setWarehouse(e.target.value)} className="inventory-search_input">
            <option value="">Select one</option>
            <option value="warehouse1">Warehouse 1</option>
            <option value="warehouse2">Warehouse 2</option>
          </select>
        </div>

        <div className="stockList-filter_group">
          <label>Supplier</label>
          <select value={supplier} onChange={(e) => setSupplier(e.target.value)} className="inventory-search_input">
            <option value="">Choose Supplier</option>
            <option value="supplier1">Supplier 1</option>
            <option value="supplier2">Supplier 2</option>
          </select>
        </div>

        <div className="stockList-filter_group">
          <label>Select Brand</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="inventory-search_input">
            <option value="">Choose One</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
        </div>
      </div>

      <div className="stockList-filter_row">
        <div className="stockList-filter_group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="inventory-search_input" />
        </div>

        <div className="stockList-button_section">
          <button onClick={handleReset} className="inventory-Btn">RESET</button>
        </div>
      </div>


      <hr />
      {/* Stock Summary */}
      <div className="stockList-summary">
        <div className="stockList-summary_card">
          <p className="stockList-summary_card__p">Available</p>
          <h2 className="stockList-summary_card__h2">0</h2>
          <div className="stockList-summary_card__progress-bar green"></div>
        </div>
        <div className="stockList-summary_card">
          <p className="stockList-summary_card__p">Stock Low</p>
          <h2 className="stockList-summary_card__h2">0</h2>
          <div className="stockList-summary_card__progress-bar orange"></div>
        </div>
        <div className="stockList-summary_card">
          <p className="stockList-summary_card__p">Out of Stock</p>
          <h2 className="stockList-summary_card__h2">0</h2>
          <div className="stockList-summary_card__progress-bar red"></div>
        </div>
      </div>
      <hr />

      {/* Heading instead of small stats */}
      <h2 className="inventory-header">Stock List of Product</h2>

      {/* Table Header Row with dropdown + search */}
      <div className="inventory-controls_row">
        <select className="inventory-select">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <div className="inventory-searchbar">
          <input type="text" placeholder="Search" className="inventory-search_input" />
        </div>
      </div>

      {/* Table */}
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th className='inventory-table_heading'>SL</th>
              <th className='inventory-table_heading'>Image</th>
              <th className='inventory-table_heading'>Name</th>
              <th className='inventory-table_heading'>SKU</th>
              <th className='inventory-table_heading'>Brand</th>
              <th className='inventory-table_heading'>Model</th>
              <th className='inventory-table_heading'>Warehouse</th>
              <th className='inventory-table_heading'>Supplier</th>
              <th className='inventory-table_heading'>In Stock</th>
              <th className='inventory-table_heading'>Stock Alert</th>
              <th className='inventory-table_heading'>Purchase Price</th>
              <th className='inventory-table_heading'>Selling Price</th>
              <th className='inventory-table_heading'>Total Inventory</th>
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
    </div>
  );
};

export default StockList;
