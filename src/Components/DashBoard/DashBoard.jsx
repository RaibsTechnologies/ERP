import React from "react";
import "./Dashboard.css";
import {
  FaBox,
  FaShoppingCart,
  FaMoneyBill,
  FaFileInvoice,
  FaWallet,
  FaUniversity,
  FaPlus,
  FaUser,
  FaPrint,
  FaExchangeAlt,
  FaChartLine,
  FaCog
} from "react-icons/fa";

const Dashboard = () => {
  const shortcuts = [
    { id: 1, name: "Add Product", icon: <FaBox /> },
    { id: 2, name: "New Sale", icon: <FaPlus /> },
    { id: 3, name: "New Order", icon: <FaExchangeAlt /> },
    { id: 4, name: "Add Quotation", icon: <FaBox /> },
    { id: 5, name: "Print Label", icon: <FaPrint /> },
    { id: 6, name: "Add Contact", icon: <FaUser /> },
    { id: 7, name: "Add Expense", icon: <FaMoneyBill /> },
    { id: 8, name: "Add Income", icon: <FaWallet /> },
    { id: 9, name: "Cashbooks", icon: <FaMoneyBill /> },
    { id: 10, name: "Transaction", icon: <FaUniversity /> },
    { id: 11, name: "Payroll", icon: <FaChartLine /> },
    { id: 12, name: "Manage Shortcut", icon: <FaCog />, highlight: true }
  ];

  const stats = [
    { label: "Total Purchase", value: "$25,000", icon: <FaShoppingCart /> },
    { label: "Total Sale", value: "$40,000", icon: <FaMoneyBill /> },
    { label: "Purchase Due", value: "$5,000", icon: <FaFileInvoice /> },
    { label: "Invoice Due", value: "$2,000", icon: <FaFileInvoice /> },
    { label: "Total Cash", value: "$15,000", icon: <FaWallet /> },
    { label: "Total In Bank", value: "$30,000", icon: <FaUniversity /> }
  ];

  return (
    <div className="dashboard-container">
      {/* Left Shortcuts */}
      <div className="shortcut-grid">
        {shortcuts.map((item) => (
          <div
            key={item.id}
            className={`shortcut-card ${item.highlight ? "highlight" : ""}`}
          >
            <div className="shortcut-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Right Stats */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h4>{stat.label}</h4>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="details-button">View Details Report</button>
      </div>
    </div>
  );
};

export default Dashboard;
