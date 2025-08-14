import React, { useState } from 'react';
import './PurchaseOrder.css';

const PurchaseOrder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10');

  const columns = [
    { key: 'sl', label: 'SL' },
    { key: 'date', label: 'Date' },
    { key: 'supplierName', label: 'Supplier Name' },
    { key: 'invoiceNo', label: 'Invoice No' },
    { key: 'purchaseWithTax', label: 'Purchase with Tax' },
    { key: 'totalAmount', label: 'Total Amount' },
    { key: 'paidAmount', label: 'Paid Amount' },
    { key: 'dueAmount', label: 'Due Amount' },
    { key: 'isApproved', label: 'Is Approved' },
    { key: 'action', label: 'Action' }
  ];

  // Sample data - empty for now as shown in the image
  const [orders, setOrders] = useState([]);

  return (
    <div className="purchase-orders-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">Purchase Orders</h1>
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        <div className="left-controls">
          <div className="items-per-page">
            <select 
              value={itemsPerPage} 
              onChange={(e) => setItemsPerPage(e.target.value)}
              className="items-dropdown"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <button className="btn btn-primary">
            <span className="btn-icon">+</span>
            New Order
          </button>

          <button className="btn btn-secondary">
            <span className="btn-icon">→</span>
            Draft List
          </button>
        </div>

        <div className="right-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="action-icons">
            <button className="icon-btn" title="Print">
              <span className="icon">🖨️</span>
            </button>
            <button className="icon-btn" title="Export">
              <span className="icon">📤</span>
            </button>
            <button className="icon-btn" title="Menu">
              <span className="icon">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-container">
          <table className="purchase-table">
            <thead>
              <tr className="table-header">
                {columns.map((column) => (
                  <th key={column.key} className="table-header-cell">
                    <div className="header-content">
                      <span>{column.label}</span>
                      <span className="sort-icon">↕️</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="empty-state">
                    <div className="empty-message">
                      No purchase orders found
                    </div>
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={order.id || index} className="table-row">
                    {columns.map((column) => (
                      <td key={column.key} className="table-cell">
                        {order[column.key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
