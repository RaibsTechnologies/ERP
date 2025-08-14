import React, { useState } from "react";
import "./Customer.css";

function Customer() {
  const summaryCards = [
    { title: "Estimated", value: "$ 0.00" },
    { title: "Unbilled Income", value: "$ 0.00" },
    { title: "Overdue Invoice", value: "$ 0.00" },
    { title: "Open invoices", value: "$ 0.00" },
    { title: "Recent Paid", value: "$ 0.00" }
  ];

  const [pageSize, setPageSize] = useState("10");
  const [route, setRoute] = useState("All Route");
  const [filter, setFilter] = useState("All...");
  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      contactId: "CUS-100001",
      active: true,
      customerName: "Walk In Customer",
      phone: "",
      latitude: "",
      longitude: "",
      route: "(Up)",
      balance: "0.00",
      selected: false
    }
  ]);

  // Toggle individual row active state
  const toggleActive = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, active: !row.active } : row));
  };

  // Select all checkboxes
  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    setRows(rows.map(row => ({ ...row, selected: checked })));
  };

  // Select individual row
  const handleSelectRow = (id, checked) => {
    setRows(rows.map(row => row.id === id ? { ...row, selected: checked } : row));
  };

  return (
    <div className="customer-container">
      <div className="main-title">Customer</div>

      {/* Summary cards */}
      <div className="cards-row">
        {summaryCards.map(card => (
          <div key={card.title} className="summary-card">
            <div className="card-title">0 {card.title}</div>
            <div className="card-value">{card.value}</div>
          </div>
        ))}
      </div>

      {/* Top-bar */}
      <div className="top-bar">
        <select className="page-size" value={pageSize} onChange={e => setPageSize(e.target.value)}>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
        <select className="route-select" value={route} onChange={e => setRoute(e.target.value)}>
          <option value="All Route">All Route</option>
        </select>
        <select className="filter-select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All...">All...</option>
        </select>
        <button className="new-contact-btn">+ New Contact</button>
        <button className="assign-route-btn">Assign Route</button>
        <input type="text" className="search-input" placeholder="SEARCH"
               value={search} onChange={e => setSearch(e.target.value)} />
        <div className="topbar-icons">
          <button className="topbar-icon" title="Export">⬇</button>
          <button className="topbar-icon" title="Print">🖨</button>
          <button className="topbar-icon" title="Delete">🗑</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-scroll-area">
        <table className="customer-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={e => handleSelectAll(e.target.checked)}
                />
              </th>
              <th>SL</th>
              <th>Contact ID</th>
              <th>Active</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Route</th>
              <th>Balance ($)</th>
              <th className="action-th">
                Action
                <span className="header-action-icon">
                  <svg width="18" height="18" fill="#20c473" viewBox="0 0 18 18">
                    <rect x="3" y="7.5" width="12" height="3" rx="1.5" fill="#20c473" />
                    <circle cx="9" cy="9" r="2.2" stroke="#20c473" strokeWidth="1" fill="#fff" />
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={row.selected}
                    onChange={e => handleSelectRow(row.id, e.target.checked)}
                  />
                </td>
                <td>{row.id}</td>
                <td>{row.contactId}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={row.active}
                      onChange={() => toggleActive(row.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>{row.customerName}</td>
                <td>{row.phone}</td>
                <td>{row.latitude}</td>
                <td>{row.longitude}</td>
                <td>{row.route}</td>
                <td>{row.balance}</td>
                <td>
                  <button className="action-select-btn">
                    SELECT <span>&#9662;</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;
