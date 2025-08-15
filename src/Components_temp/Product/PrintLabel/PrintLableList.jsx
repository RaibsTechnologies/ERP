import React, { useState } from "react";
import "./PrintLableList.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles

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

  // Barcode settings
  const [barcodeSetting, setBarcodeSetting] = useState(
    "20 Labels per Sheet, Sheet Size: 8.5\" x 11\", Label Size: 4\" x 1\", Labels per sheet: 20"
  );
  const [barcodeWidth, setBarcodeWidth] = useState(1);
  const [barcodeHeight, setBarcodeHeight] = useState(0.2);

  const products = ["Product A", "Product B", "Product C"];

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFontSizeChange = (e) => {
    const { name, value } = e.target;
    setFontSizes((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateLabel = () => {
    alert(`Generating label with:
    Product: ${selectedProduct}
    No. of Labels: ${numLabels}
    Barcode: ${barcodeSetting}, Width: ${barcodeWidth}", Height: ${barcodeHeight}"`);
  };

  return (
    <div className="product-container">
      {/* Table Header */}
      <h3 className="product-container_heading">Print Label</h3>
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

      {/* Barcode Settings */}
      <h3 className="info-title">Barcode Settings</h3>
      <select
        value={barcodeSetting}
        onChange={(e) => setBarcodeSetting(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "16px" }}
      >
        <option>
          20 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 4" x 1", Labels per sheet: 20
        </option>
        <option>
          30 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 2.625" x 1", Labels per sheet: 30
        </option>
      </select>

      <h3 className="info-title">
        Barcode Size <span role="img" aria-label="barcode">📊</span>
      </h3>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <label>Max Width : Inches *</label>
          <input
            type="number"
            value={barcodeWidth}
            onChange={(e) => setBarcodeWidth(e.target.value)}
            style={{ width: "100%", padding: "6px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Height : Inches *</label>
          <input
            type="number"
            value={barcodeHeight}
            onChange={(e) => setBarcodeHeight(e.target.value)}
            style={{ width: "100%", padding: "6px" }}
          />
        </div>
      </div>

      <button
        onClick={handleGenerateLabel}
        style={{
          backgroundColor: "#15d38b",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        ✓ Generate Label
      </button>
    </div>
  );
}

export default PrintLabel;
