import React, { useState } from 'react';
import './PurchaseReturnOrderList.css';

const PurchaseReturnList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);

  // Sample data structure for backend integration
  const [purchaseReturns, setPurchaseReturns] = useState([
    {
      id: 1,
      sl: 1,
      date: '2025-08-12',
      supplierName: 'ABC Suppliers Ltd',
      invoiceNo: 'INV-001',
      returnQty: 5,
      returnAmount: '2,500.00',
      status: 'Approved',
      returnReason: 'Damaged goods',
      createdBy: 'John Doe',
      createdAt: '2025-08-12T10:30:00'
    },
    {
      id: 2,
      sl: 2,
      date: '2025-08-11',
      supplierName: 'XYZ Trading Co',
      invoiceNo: 'INV-002',
      returnQty: 2,
      returnAmount: '800.00',
      status: 'Pending',
      returnReason: 'Wrong specification',
      createdBy: 'Jane Smith',
      createdAt: '2025-08-11T15:45:00'
    },
    {
      id: 3,
      sl: 3,
      date: '2025-08-10',
      supplierName: 'Tech Solutions Inc',
      invoiceNo: 'INV-003',
      returnQty: 1,
      returnAmount: '1,200.00',
      status: 'Rejected',
      returnReason: 'Quality issues',
      createdBy: 'Mike Johnson',
      createdAt: '2025-08-10T09:15:00'
    }
  ]);

  const columns = [
    { key: 'sl', label: 'SL' },
    { key: 'date', label: 'Date' },
    { key: 'supplierName', label: 'Supplier Name' },
    { key: 'invoiceNo', label: 'Invoice No' },
    { key: 'returnQty', label: 'Return QTY' },
    { key: 'returnAmount', label: 'Return Amount' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ];

  // Filter returns based on search term
  const filteredReturns = purchaseReturns.filter(returnItem =>
    Object.values(returnItem).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle action clicks
  const handleAction = (action, returnItem) => {
    setSelectedAction(action);
    setSelectedReturn(returnItem);
    if (action === 'cancel') {
      setShowConfirmDialog(true);
    }
  };

  // Confirm action execution
  const confirmAction = () => {
    if (selectedAction === 'cancel') {
      // API call to cancel return
      console.log('Cancelling return:', selectedReturn.id);
      setPurchaseReturns(prev => 
        prev.map(item => 
          item.id === selectedReturn.id 
            ? { ...item, status: 'Cancelled' }
            : item
        )
      );
    }
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedReturn(null);
  };

  const cancelAction = () => {
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedReturn(null);
  };

  // View details handler
  const viewDetails = (returnItem) => {
    console.log('Viewing details for return:', returnItem.id);
    alert(`Return Details:\n\nSupplier: ${returnItem.supplierName}\nInvoice: ${returnItem.invoiceNo}\nQty: ${returnItem.returnQty}\nAmount: ${returnItem.returnAmount}\nReason: ${returnItem.returnReason}\nCreated: ${returnItem.createdAt}`);
  };

  // Edit return handler
  const editReturn = (returnItem) => {
    console.log('Editing return:', returnItem.id);
    // Navigate to edit form or open edit modal
    alert(`Opening edit form for return ${returnItem.invoiceNo}`);
  };

  // Print receipt handler
  const printReceipt = (returnItem) => {
    console.log('Printing receipt for return:', returnItem.id);
    // Generate and print return receipt
    window.print();
  };

  // Create new return handler
  const createNewReturn = () => {
    console.log('Creating new purchase return');
    // Navigate to create return form
    alert('Opening Create Purchase Return form');
  };

  return (
    <div className="purchase-return-list-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">Purchase Return List</h1>
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

          <button className="btn btn-primary" onClick={createNewReturn}>
            <span className="btn-icon">+</span>
            Create Purchase Return
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
          <table className="purchase-return-table">
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
              {filteredReturns.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="empty-state">
                    <div className="empty-message">
                      No purchase returns found
                    </div>
                  </td>
                </tr>
              ) : (
                filteredReturns.slice(0, parseInt(itemsPerPage)).map((returnItem, index) => (
                  <tr key={returnItem.id} className="table-row">
                    <td className="table-cell">{returnItem.sl}</td>
                    <td className="table-cell">{returnItem.date}</td>
                    <td className="table-cell">{returnItem.supplierName}</td>
                    <td className="table-cell">{returnItem.invoiceNo}</td>
                    <td className="table-cell">{returnItem.returnQty}</td>
                    <td className="table-cell">{returnItem.returnAmount}</td>
                    <td className="table-cell">
                      <span className={`status-badge ${returnItem.status.toLowerCase()}`}>
                        {returnItem.status}
                      </span>
                    </td>
                    <td className="table-cell">
                      <div className="action-buttons">
                        <button 
                          className="action-btn view-btn"
                          onClick={() => viewDetails(returnItem)}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => editReturn(returnItem)}
                          title="Edit Return"
                          disabled={returnItem.status === 'Approved' || returnItem.status === 'Cancelled'}
                        >
                          ✏️
                        </button>
                        <button 
                          className="action-btn print-btn"
                          onClick={() => printReceipt(returnItem)}
                          title="Print Receipt"
                        >
                          🖨️
                        </button>
                        <button 
                          className="action-btn cancel-btn"
                          onClick={() => handleAction('cancel', returnItem)}
                          title="Cancel Return"
                          disabled={returnItem.status === 'Approved' || returnItem.status === 'Cancelled'}
                        >
                          ❌
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
                Are you sure you want to cancel this purchase return?
              </p>
              <p><strong>Supplier:</strong> {selectedReturn?.supplierName}</p>
              <p><strong>Invoice:</strong> {selectedReturn?.invoiceNo}</p>
              <p><strong>Amount:</strong> {selectedReturn?.returnAmount}</p>
            </div>
            <div className="dialog-actions">
              <button className="btn btn-cancel" onClick={cancelAction}>
                Cancel
              </button>
              <button className="btn btn-delete" onClick={confirmAction}>
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseReturnList;