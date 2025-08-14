import React, { useState } from 'react';
import './Fleet.css';

const Fleet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedFleet, setSelectedFleet] = useState(null);

  // Sample data structure for backend integration
  const [fleets, setFleets] = useState([
    {
      id: 1,
      sl: 1,
      name: 'ABC Clearing & Forwarding',
      address: '123 Port Road, Chittagong',
      email: 'abc@fleetagent.com',
      phone: '+880-1700-123456',
      status: 'Active',
      licenseNo: 'Fleet-001-2024',
      joinDate: '2024-01-15',
      rating: 4.5,
      totalShipments: 150,
      createdAt: '2024-01-15T10:30:00'
    },
    {
      id: 2,
      sl: 2,
      name: 'XYZ Freight Services',
      address: '456 Marine Drive, Dhaka',
      email: 'contact@xyzfreight.com',
      phone: '+880-1800-654321',
      status: 'Active',
      licenseNo: 'Fleet-002-2024',
      joinDate: '2024-02-20',
      rating: 4.2,
      totalShipments: 89,
      createdAt: '2024-02-20T14:15:00'
    },
    {
      id: 3,
      sl: 3,
      name: 'Global Logistics Ltd',
      address: '789 Export Zone, Chittagong',
      email: 'info@globallogistics.bd',
      phone: '+880-1600-987654',
      status: 'Inactive',
      licenseNo: 'Fleet-003-2024',
      joinDate: '2024-03-10',
      rating: 3.8,
      totalShipments: 45,
      createdAt: '2024-03-10T09:20:00'
    },
    {
      id: 4,
      sl: 4,
      name: 'Express Fleet Services',
      address: '321 Industrial Area, Dhaka',
      email: 'service@expressfleet.com',
      phone: '+880-1900-456789',
      status: 'Pending',
      licenseNo: 'Fleet-004-2024',
      joinDate: '2025-08-01',
      rating: null,
      totalShipments: 0,
      createdAt: '2025-08-01T16:45:00'
    }
  ]);

  const columns = [
    { key: 'sl', label: 'SL' },
    { key: 'name', label: 'Name' },
    { key: 'address', label: 'Address' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ];

  // Filter Fleet agents based on search term
  const filteredFleets = fleets.filter(fleet =>
    Object.values(fleet).some(value =>
      value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle action clicks
  const handleAction = (action, fleet) => {
    setSelectedAction(action);
    setSelectedFleet(fleet);
    if (action === 'deactivate' || action === 'activate' || action === 'delete') {
      setShowConfirmDialog(true);
    }
  };

  // Confirm action execution
  const confirmAction = () => {
    if (selectedAction === 'deactivate') {
      console.log('Deactivating Fleet agent:', selectedFleet.id);
      setFleets(prev => 
        prev.map(agent => 
          agent.id === selectedFleet.id 
            ? { ...agent, status: 'Inactive' }
            : agent
        )
      );
    } else if (selectedAction === 'activate') {
      console.log('Activating Fleet agent:', selectedFleet.id);
      setFleets(prev => 
        prev.map(agent => 
          agent.id === selectedFleet.id 
            ? { ...agent, status: 'Active' }
            : agent
        )
      );
    } else if (selectedAction === 'delete') {
      console.log('Deleting Fleet agent:', selectedFleet.id);
      setFleets(prev => prev.filter(agent => agent.id !== selectedFleet.id));
    }
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedFleet(null);
  };

  const cancelAction = () => {
    setShowConfirmDialog(false);
    setSelectedAction(null);
    setSelectedFleet(null);
  };

  // View details handler
  const viewDetails = (fleet) => {
    console.log('Viewing details for Fleet agent:', fleet.id);
    alert(`Fleet Agent Details:\n\nName: ${fleet.name}\nLicense: ${fleet.licenseNo}\nEmail: ${fleet.email}\nPhone: ${fleet.phone}\nRating: ${fleet.rating || 'N/A'}\nTotal Shipments: ${fleet.totalShipments}\nJoin Date: ${fleet.joinDate}`);
  };

  // Edit Fleet agent handler
  const editFleet = (fleet) => {
    console.log('Editing Fleet agent:', fleet.id);
    alert(`Opening edit form for ${fleet.name}`);
  };

  // Contact handler
  const contactFleet = (fleet) => {
    console.log('Contacting Fleet agent:', fleet.id);
    window.location.href = `mailto:${fleet.email}?subject=Inquiry from System`;
  };

  // View history handler
  const viewHistory = (fleet) => {
    console.log('Viewing history for Fleet agent:', fleet.id);
    alert(`Showing shipment history for ${fleet.name}\nTotal Shipments: ${fleet.totalShipments}`);
  };

  // Add new Fleet handler
  const addNewFleet = () => {
    console.log('Adding new Fleet agent');
    alert('Opening Add New Fleet Agent form');
  };

  return (
    <div className="fleet-list-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">Fleet List</h1>
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

          <button className="btn btn-primary" onClick={addNewFleet}>
            <span className="btn-icon">+</span>
            Add New Fleet
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
          <table className="fleet-table">
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
              {filteredFleets.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="empty-state">
                    <div className="empty-message">
                      No Fleet agents found
                    </div>
                  </td>
                </tr>
              ) : (
                filteredFleets.slice(0, parseInt(itemsPerPage)).map((fleet, index) => (
                  <tr key={fleet.id} className="table-row">
                    <td className="table-cell">{fleet.sl}</td>
                    <td className="table-cell">{fleet.name}</td>
                    <td className="table-cell">{fleet.address}</td>
                    <td className="table-cell">
                      <a href={`mailto:${fleet.email}`} className="email-link">
                        {fleet.email}
                      </a>
                    </td>
                    <td className="table-cell">
                      <a href={`tel:${fleet.phone}`} className="phone-link">
                        {fleet.phone}
                      </a>
                    </td>
                    <td className="table-cell">
                      <span className={`status-badge ${fleet.status.toLowerCase()}`}>
                        {fleet.status}
                      </span>
                    </td>
                    <td className="table-cell">
                      <div className="action-buttons">
                        <button 
                          className="action-btn view-btn"
                          onClick={() => viewDetails(fleet)}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => editFleet(fleet)}
                          title="Edit Fleet"
                        >
                          ✏️
                        </button>
                        <button 
                          className="action-btn contact-btn"
                          onClick={() => contactFleet(fleet)}
                          title="Contact Fleet"
                        >
                          ✉️
                        </button>
                        <button 
                          className="action-btn history-btn"
                          onClick={() => viewHistory(fleet)}
                          title="View History"
                        >
                          📋
                        </button>
                        {fleet.status === 'Active' ? (
                          <button 
                            className="action-btn deactivate-btn"
                            onClick={() => handleAction('deactivate', fleet)}
                            title="Deactivate"
                          >
                            🚫
                          </button>
                        ) : fleet.status === 'Inactive' ? (
                          <button 
                            className="action-btn activate-btn"
                            onClick={() => handleAction('activate', fleet)}
                            title="Activate"
                          >
                            ✅
                          </button>
                        ) : null}
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleAction('delete', fleet)}
                          title="Delete Fleet"
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
                Are you sure you want to {selectedAction} this Fleet agent?
              </p>
              <p><strong>Name:</strong> {selectedFleet?.name}</p>
              <p><strong>Email:</strong> {selectedFleet?.email}</p>
              <p><strong>License:</strong> {selectedFleet?.licenseNo}</p>
            </div>
            <div className="dialog-actions">
              <button className="btn btn-cancel" onClick={cancelAction}>
                Cancel
              </button>
              <button 
                className={`btn ${
                  selectedAction === 'delete' ? 'btn-delete' : 
                  selectedAction === 'activate' ? 'btn-activate' : 'btn-deactivate'
                }`}
                onClick={confirmAction}
              >
                {selectedAction === 'delete' ? 'Delete' : 
                 selectedAction === 'activate' ? 'Activate' : 'Deactivate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fleet;