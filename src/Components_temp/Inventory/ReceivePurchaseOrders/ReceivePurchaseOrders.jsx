import React, { useEffect, useState } from "react";
import "./ReceivePurchaseOrders.css";
import { FaSearch, FaPrint, FaUpload, FaColumns, FaPlus } from "react-icons/fa";

export default function ReceivePurchaseOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  const fetchOrders = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/purchase-orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Add new order to backend
  const handleNewOrder = () => {
    const newOrder = {
      date: new Date().toISOString().split("T")[0],
      supplierName: "Test Supplier",
      invoiceNo: "INV-" + Math.floor(Math.random() * 1000),
      isApproved: false,
      isAddedToStock: false
    };

    fetch("http://localhost:5000/api/purchase-orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder)
    })
      .then((res) => res.json())
      .then(() => fetchOrders());
  };

  return (
    <div className="purchase-orders-container">
      {/* Title */}
      <h2 className="heading">Receive Purchase Orders</h2>

      {/* Controls Row */}
      <div className="table-controls">
        <select className="rows-select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <button className="add-btn" onClick={handleNewOrder}>
          <FaPlus style={{ marginRight: "6px" }} /> New Order
        </button>

        <div className="search-box">
          <FaSearch   className="search-icon"  />
          <input type="text" placeholder="SEARCH" />
        </div>

        <div className="icon-buttons">
            <button className="icon-btn">
              <FaPrint />
            </button>
            <button className="icon-btn">
              <FaUpload />
            </button>
            <button className="icon-btn">
              <FaColumns />
            </button>
        </div>
      </div>

      {/* Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>↓ SL</th>
            <th>↓ Date</th>
            <th>↓ Supplier Name</th>
            <th>↓ Invoice No</th>
            <th>↓ Is Approved</th>
            <th>↓ Is Added to Stock</th>
            <th>↓ Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          ) : orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.date}</td>
                <td>{order.supplierName}</td>
                <td>{order.invoiceNo}</td>
                <td>{order.isApproved ? "Yes" : "No"}</td>
                <td>{order.isAddedToStock ? "Yes" : "No"}</td>
                <td>...</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
