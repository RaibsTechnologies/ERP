import React from "react";
// import "./AddProduct.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles

const togglesData = [
  { key: "neverDiminishing", label: "Never Diminishing" },
  { key: "assembledProduct", label: "Assembled Product" },
  { key: "componentProduct", label: "Component Product" },
  { key: "obsolete", label: "Obsolete" },
  { key: "serialized", label: "Serialized" },
  { key: "batchTracked", label: "Batch Tracked" },
  { key: "saleable", label: "Saleable" },
  { key: "purchasable", label: "Purchasable" },
];

const TypeToggles = ({ toggles, onToggle }) => (
  <div className="typeBox">
    <h4>Type</h4>
    {togglesData.map((tog) => (
      <div key={tog.key} className="toggleRow">
        <span>{tog.label}</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={toggles[tog.key]}
            onChange={() => onToggle(tog.key)}
          />
          <span className="slider"></span>
        </label>
      </div>
    ))}
  </div>
);

export default TypeToggles;