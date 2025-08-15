import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";  
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
  FaCog,
  FaSync,
  FaExclamationTriangle
} from "react-icons/fa";

// Mock data that simulates what you'd get from a backend
const mockShortcuts = [
  { id: 1, name: "Add Product", icon: "FaBox" ,directory:"/AddProduct" },
  { id: 2, name: "New Sale", icon: "FaPlus" ,directory:"/AddProduct" },
  { id: 3, name: "New Order", icon: "FaExchangeAlt" ,directory:"/AddProduct" },
  { id: 4, name: "Add Quotation", icon: "FaBox" ,directory:"/AddProduct" },
  { id: 5, name: "Print Label", icon: "FaPrint" ,directory:"/AddProduct" },
  { id: 6, name: "Add Contact", icon: "FaUser" ,directory:"/AddProduct"},
  { id: 7, name: "Add Expense", icon: "FaMoneyBill" ,directory:"/AddProduct"},
  { id: 8, name: "Add Income", icon: "FaWallet" ,directory:"/AddProduct"},
  { id: 9, name: "Cashbooks", icon: "FaMoneyBill" ,directory:"/AddProduct" },
  { id: 10, name: "Transaction", icon: "FaUniversity" ,directory:"/AddProduct"},
  { id: 11, name: "Payroll", icon: "FaChartLine" ,directory:"/AddProduct" },
  { id: 12, name: "Manage Shortcut", icon: "FaCog", highlight: true ,directory:"/AddProduct" }
];

const mockStats = [
  { label: "Total Purchase", value: "$25,000", icon: "FaShoppingCart" },
  { label: "Total Sale", value: "$40,000", icon: "FaMoneyBill" },
  { label: "Purchase Due", value: "$5,000", icon: "FaFileInvoice" },
  { label: "Invoice Due", value: "$2,000", icon: "FaFileInvoice" },
  { label: "Total Cash", value: "$15,000", icon: "FaWallet" },
  { label: "Total In Bank", value: "$30,000", icon: "FaUniversity" }
];

const Dashboard = () => {
  const [shortcuts, setShortcuts] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Simulate API call with timeout
  const fetchMockData = () => {
    setLoading(true);
    setError(null);
    
    // Simulate network delay
    setTimeout(() => {
      try {
        // In a real app, you might transform the API response here
        setShortcuts(mockShortcuts);
        setStats(mockStats);
        setLastUpdated(new Date());
      } catch (err) {
        setError("Failed to load mock data");
      } finally {
        setLoading(false);
      }
    }, 800); // 0.8 second delay to simulate network
  };

  // Initial data fetch
  useEffect(() => {
    fetchMockData();
  }, []);

  // Handle shortcut click


  // Handle view details report
  const handleViewDetails = () => {
    console.log("View details clicked - would fetch report data in real app");
    alert("This would show a detailed report in a real application");
  };

  if (loading && !lastUpdated) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <FaExclamationTriangle className="error-icon" />
        <p>{error}</p>
        <button onClick={fetchMockData} className="retry-button">
          <FaSync /> Retry
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
        <h3 className="dashboard-container_heading">Dashboard</h3>
      <div className="dashboard-container__details">
        {/* Left Shortcuts */}
        <div className="dashboard-container__details-shortcut-grid">
          {shortcuts.map((item) => (
            <Link to={item.directory}
              key={item.id}
              className={`shortcut-card ${item.highlight ? "highlight" : ""}`}
            >
              <div className="shortcut-icon">{getIconComponent(item.icon)}</div>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Right Stats */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{getIconComponent(stat.icon)}</div>
                <div className="stat-info">
                  <h4>{stat.label}</h4>
                  <p>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="details-button" 
            onClick={handleViewDetails}
            disabled={loading}
          >
            View Details Report
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to map icon names to components
const getIconComponent = (iconName) => {
  const icons = {
    FaBox: <FaBox />,
    FaShoppingCart: <FaShoppingCart />,
    FaMoneyBill: <FaMoneyBill />,
    FaFileInvoice: <FaFileInvoice />,
    FaWallet: <FaWallet />,
    FaUniversity: <FaUniversity />,
    FaPlus: <FaPlus />,
    FaUser: <FaUser />,
    FaPrint: <FaPrint />,
    FaExchangeAlt: <FaExchangeAlt />,
    FaChartLine: <FaChartLine />,
    FaCog: <FaCog />
  };
  return icons[iconName] || <FaBox />;
};

export default Dashboard;