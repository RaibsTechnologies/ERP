import React, { useState } from "react";
import "./PrintLableList.css"; // Assuming you have a CSS file for styles 

function PrintLabel() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [numLabels, setNumLabels] = useState("");
  const [options, setOptions] = useState({
    productName: true,
    price: true,
    productVariation: true,
    businessName: true
  });
  const [fontSizes, setFontSizes] = useState({
    productName: 12,
    price: 12,
    variant: 12,
    businessName: 12
  });
  const [exTax, setExTax] = useState("Ex. Tax");

  const products = ["Product A", "Product B", "Product C"];

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFontSizeChange = (e) => {
    const { name, value } = e.target;
    setFontSizes((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="print-label-container">
      {/* Table Header */}
      <div className="label-table-header">
        <div className="header-cell">Product Name</div>
        <div className="header-cell">No. Of Label</div>
        <div className="header-cell">Action</div>
      </div>

      {/* Row */}
      <div className="label-table-row">
        <div className="cell">
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select Product</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="cell">
          <input
            type="number"
            value={numLabels}
            onChange={(e) => setNumLabels(e.target.value)}
          />
        </div>

        <div className="cell action-buttons">
          <button className="delete-btn">🗑</button>
          <button className="drag-btn">⇅</button>
        </div>
      </div>

      {/* Info Section */}
      <h3 className="info-title">Information to Show In Label</h3>
      <div className="info-grid">
        {/* Left Column */}
        <div className="info-item">
          <label>
            <input
              type="checkbox"
              name="productName"
              checked={options.productName}
              onChange={handleOptionChange}
            />{" "}
            Product Name
          </label>
          <div>
            <label>Product Name Font Size *</label>
            <input
              type="number"
              name="productName"
              value={fontSizes.productName}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>

        <div className="info-item">
          <label>
            <input
              type="checkbox"
              name="price"
              checked={options.price}
              onChange={handleOptionChange}
            />{" "}
            Price
          </label>
          <select value={exTax} onChange={(e) => setExTax(e.target.value)}>
            <option>Ex. Tax</option>
            <option>Inc. Tax</option>
          </select>
          <div>
            <label>Price Font Size *</label>
            <input
              type="number"
              name="price"
              value={fontSizes.price}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="info-item">
          <label>
            <input
              type="checkbox"
              name="productVariation"
              checked={options.productVariation}
              onChange={handleOptionChange}
            />{" "}
            Product Variation (Recommended)
          </label>
          <div>
            <label>Variant Font Size *</label>
            <input
              type="number"
              name="variant"
              value={fontSizes.variant}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>

        <div className="info-item">
          <label>
            <input
              type="checkbox"
              name="businessName"
              checked={options.businessName}
              onChange={handleOptionChange}
            />{" "}
            Business Name
          </label>
          <div>
            <label>Business Name Font Size *</label>
            <input
              type="number"
              name="businessName"
              value={fontSizes.businessName}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintLabel;
