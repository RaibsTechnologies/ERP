import React from "react";
import "./RoutePlanner.css";

function RoutePlanner() {
  const columns = [
    "Route",
    "Sales info",
    "Delivery info",
    "Action"
  ];

  // Empty data, as shown in SS
  const rows = [];

  return (
    <div className="routeplanner-container">
      <div className="main-title">Route planner</div>
      <div className="table-scroll-area">
        <table className="routeplanner-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
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

export default RoutePlanner;
