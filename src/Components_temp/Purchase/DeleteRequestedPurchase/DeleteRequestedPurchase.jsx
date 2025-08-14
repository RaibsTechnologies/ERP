import React, { useState } from 'react';
import './DeleteRequestedPurchase.css';

const DeleteRequestedPurchase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedPurchase, setSelectedPurchase] = useState(null);

  // Sample data structure for backend integration
  const [deletedPurchases, setDeletedPurchases] = useState([
    {
      id: 1,
      sl: 1,
      date: '2025-08-10',
      supplierName: 'ABC Suppliers Ltd',
      invoiceNo: 'INV-001',
      totalAmount: '15,000.00',
      paidAmount: '10,000.00',
      dueAmount: '5,000.00',
      isApprovedPurchase: 'Yes',
      deletedAt: '2025-08-14T08:30:00',
      deletedBy: 'Admin User',
      reason: 'Duplicate entry'
    },
    {
      id: 2,
      sl: 2,
      date: '2025-08-09',
      supplierName: 'XYZ Trading Co',
      invoiceNo: 'INV-002',
      totalAmount: '8,500.00',
      paidAmount: '8,500.00',
      dueAmount: '0.00',
      isApprovedPurchase: 'No',
      deletedAt: '2025-08-13T14:20:00',
      deletedBy: 'Manager',
      reason: 'Cancelled order'
    }
  ]);

  const columns = [
    { key: 'sl', label: 'SL' },
    { key: 'date', label: 'Date' },
    { key: 'supplierName', label: 'Supplier Name' },
    { key: 'invoiceNo', label: 'Invoice No' },
    { key: 'totalAmount', label: 'Total Amount' },
    { key: 'paidAmount', label: 'Paid Amount' },
    { key: 'dueAmount', label: 'Due Amount' },
    { key: 'isApprovedPurchase', label: 'Is Approved Purchase' },
    { key: 'action', label: 'Action' }
  ];

  // Filter purchases based on search term
  const filteredPurchases = deletedPurchases.filter(purchase =>
    Object.values(purchase).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle action clicks
  const handleAction = (action, purchase) => {
    setSelectedAction(action);
    setSelectedPurchase(purchase);
    setShowConfirmDialog(true);
  };

  // Confirm action execution
  const confirmAction = () => {
    if (selectedAction === 'restore') {
      // API call to restore purchase
      console.log('Restoring purchase:', selectedPurchase.id);
      // Remove from deleted list (simulate restore)
      setDeletedPurchases(prev => 
        prev.filter(p => p.id !== selectedPurchase.id)
      );
    } else if (selectedAction === 'permanent-delete') {
      // API call to permanently delete
      console.log('Permanently deleting purchase:', selectedPurchase.id);
      setDeletedPurchases(prev => 
        prev.filter(p => p.id !== selectedPurchase.id)
      );
    }
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedPurchase(null);
  };

  const cancelAction = () => {
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedPurchase(null);
  };

  // View details handler
  const viewDetails = (purchase) => {
    // Open details modal or navigate to details page
    console.log('Viewing details for:', purchase.id);
    alert(`Purchase Details:\n\nSupplier: ${purchase.supplierName}\nInvoice: ${purchase.invoiceNo}\nDeleted: ${purchase.deletedAt}\nReason: ${purchase.reason}`);
  };

  return (
    <div className="delete-requested-purchase-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">Delete Requested Purchase</h1>
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
            <button className="icon-btn" title="Menu">
              <span className="icon">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-container">
          <table className="delete-purchase-table">
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
              {filteredPurchases.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="empty-state">
                    <div className="empty-message">
                      No deleted purchase requests found
                    </div>
                  </td>
                </tr>
              ) : (
                filteredPurchases.slice(0, parseInt(itemsPerPage)).map((purchase, index) => (
                  <tr key={purchase.id} className="table-row">
                    <td className="table-cell">{purchase.sl}</td>
                    <td className="table-cell">{purchase.date}</td>
                    <td className="table-cell">{purchase.supplierName}</td>
                    <td className="table-cell">{purchase.invoiceNo}</td>
                    <td className="table-cell">{purchase.totalAmount}</td>
                    <td className="table-cell">{purchase.paidAmount}</td>
                    <td className="table-cell">{purchase.dueAmount}</td>
                    <td className="table-cell">
                      <span className={`approval-status ${purchase.isApprovedPurchase.toLowerCase()}`}>
                        {purchase.isApprovedPurchase}
                      </span>
                    </td>
                    <td className="table-cell">
                      <div className="action-buttons">
                        <button 
                          className="action-btn view-btn"
                          onClick={() => viewDetails(purchase)}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn restore-btn"
                          onClick={() => handleAction('restore', purchase)}
                          title="Restore Purchase"
                        >
                          ↻
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleAction('permanent-delete', purchase)}
                          title="Permanently Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="dialog-overlay">
          <div className="confirmation-dialog">
            <div className="dialog-header">
              <h3>Confirm Action</h3>
            </div>
            <div className="dialog-content">
              <p>
                Are you sure you want to {selectedAction === 'restore' ? 'restore' : 'permanently delete'} 
                this purchase order?
              </p>
              <p><strong>Supplier:</strong> {selectedPurchase?.supplierName}</p>
              <p><strong>Invoice:</strong> {selectedPurchase?.invoiceNo}</p>
            </div>
            <div className="dialog-actions">
              <button className="btn btn-cancel" onClick={cancelAction}>
                Cancel
              </button>
              <button 
                className={`btn ${selectedAction === 'restore' ? 'btn-restore' : 'btn-delete'}`}
                onClick={confirmAction}
              >
                {selectedAction === 'restore' ? 'Restore' : 'Permanently Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteRequestedPurchase;