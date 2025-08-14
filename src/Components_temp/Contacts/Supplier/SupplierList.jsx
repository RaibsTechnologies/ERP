import React, { useState } from "react";
import "./SupplierList.css";

function SupplierList() {
  // Dashboard summary cards content
  const summaryCards = [
    {
      title: "Purchase Order",
      value: "$ 0.00",
      desc: "Unfilled last 365 days",
      icon: (
        <span className="card-icon">
          {/* Lock icon */}
          <svg width="30" height="30" fill="#36c479" viewBox="0 0 24 24"><path d="M12 17a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 12 17zm7-7h-1V7a5 5 0 0 0-10 0v3H5c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-8c0-1.11-.89-2-2-2zM8 7a4 4 0 1 1 8 0v3H8V7zm11 13H5c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"/></svg>
        </span>
      )
    },
    {
      title: "Overdue",
      value: "$ 0.00",
      desc: "Unpaid last 365 days",
      icon: (
        <span className="card-icon">
          {/* Overdue icon */}
          <svg width="30" height="30" fill="#36c479" viewBox="0 0 24 24">
            <circle cx={12} cy={12} r={10} fill="#36c479" opacity="0.16" />
            <rect x="8.5" y="7" width="7" height="4" rx="1.5" fill="#36c479" />
            <rect x="10" y="13" width="4" height="2" rx="0.8" fill="#36c479" />
          </svg>
        </span>
      )
    },
    {
      title: "Open Bills",
      value: "$ 0.00",
      desc: "Unpaid last 365 days",
      icon: (
        <span className="card-icon">
          {/* Bill icon */}
          <svg width="30" height="30" fill="#36c479" viewBox="0 0 24 24">
            <rect x="6" y="4" width="12" height="16" rx="2.5" fill="#36c479" opacity="0.16"/>
            <rect x="9" y="8" width="6" height="2.2" rx="1.1" fill="#36c479"/>
            <rect x="9" y="12" width="6" height="2.2" rx="1.1" fill="#36c479"/>
          </svg>
        </span>
      )
    },
    {
      title: "Paid",
      value: "$ 0.00",
      desc: "Last 30 days",
      icon: (
        <span className="card-icon">
          {/* Card icon */}
          <svg width="30" height="30" fill="#36c479" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" rx="3" fill="#36c479" opacity="0.16" />
            <rect x="6" y="13" width="8" height="2" rx="1" fill="#36c479" />
          </svg>
        </span>
      )
    }
  ];

  const [pageSize, setPageSize] = useState("10");

  const columns = [
    "SL", "Contact ID", "Active", "Supplier Name", "Phone", "Balance ($)", "Action"
  ];

  return (
    <div className="supplierlist-container">
      <div className="main-title">Supplier</div>
      {/* Summary Cards Row */}
      <div className="summary-cards-row">
        {summaryCards.map((card, idx) => (
          <div key={card.title} className="summary-card">
            <div className="icon-row">{card.icon}</div>
            <div className="card-title">0 {card.title}</div>
            <div className="card-value">{card.value}</div>
            <div className="card-desc">{card.desc}</div>
          </div>
        ))}
      </div>

      {/* Top Bar controls */}
      <div className="top-bar">
        <select
          className="page-size"
          value={pageSize}
          onChange={e => setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button className="add-btn">+ New Contact</button>
        <div className="searchbar">
          <input type="text" placeholder="SEARCH" />
        </div>
        <div className="topbar-right">
          <button className="topbar-icon" title="Print">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 
                  19H8v-5h8v5zm3-7c-.55
                  0-1-.45-1-1s.45-1 1-1 1
                  .45 1 1-.45 1-1 1zM17 3H7v4h10V3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Export">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          <button className="topbar-icon" title="Col Show/Hide">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1.2" fill="#36c479"/>
              <rect x="4" y="11" width="16" height="2" rx="1.2" fill="#36c479"/>
              <rect x="4" y="16" width="10" height="2" rx="1.2" fill="#36c479"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-scroll-area">
        <table className="supplierlist-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierList;
