import React, { useEffect, useState } from "react";
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
    <div className="inventory-container">
      {/* Title */}
      <h2 className="inventory-header">Receive Purchase Orders</h2>

      {/* Controls Row */}
      <div className="inventory-controls_row">
        <select className="inventory-select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <button className="inventory-Btn" onClick={handleNewOrder}>
          <FaPlus style={{ marginRight: "6px" }} /> New Order
        </button>

        <div className="inventory-searchbar">
          <input type="text" placeholder="SEARCH" className="inventory-search_input" />
          <button className="inventory-icon_btn">
            <FaSearch />
          </button>
        </div>

        <div className="inventory-icon_btns">
          <button className="inventory-icon_btn">
            <FaPrint />
          </button>
          <button className="inventory-icon_btn">
            <FaUpload />
          </button>
          <button className="inventory-icon_btn">
            <FaColumns />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th className="inventory-table_heading">↓ SL</th>
              <th className="inventory-table_heading">↓ Date</th>
              <th className="inventory-table_heading">↓ Supplier Name</th>
              <th className="inventory-table_heading">↓ Invoice No</th>
              <th className="inventory-table_heading">↓ Is Approved</th>
              <th className="inventory-table_heading">↓ Is Added to Stock</th>
              <th className="inventory-table_heading">↓ Action</th>
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
                  <td className="inventory-table_dat">{index + 1}</td>
                  <td className="inventory-table_dat">{order.date}</td>
                  <td className="inventory-table_dat">{order.supplierName}</td>
                  <td className="inventory-table_dat">{order.invoiceNo}</td>
                  <td className="inventory-table_dat">{order.isApproved ? "Yes" : "No"}</td>
                  <td className="inventory-table_dat">{order.isAddedToStock ? "Yes" : "No"}</td>
                  <td className="inventory-table_dat">...</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="inventory-table_dat" colSpan="7" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
