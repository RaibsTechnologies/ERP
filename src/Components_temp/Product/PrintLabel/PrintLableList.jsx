import React, { useState } from "react";
import "./PrintLableList.css";

function PrintLableList() {
  // State for controls (demo purposes)
  const [selectedProduct, setSelectedProduct] = useState("");
  const [numLabels, setNumLabels] = useState("");
  const [show, setShow] = useState({
    productName: true,
    productNameFontSize: 12,
    productVariation: true,
    variantFontSize: 12,
    price: true,
    priceTaxOption: "exTax",
    priceFontSize: 12,
    businessName: true,
    businessNameFontSize: 12
  });
  const [barcodeSetting, setBarcodeSetting] = useState("");
  const [barcodeSize, setBarcodeSize] = useState({
    maxWidth: 1.0, height: 0.2
  });

  // Demo products
  const products = ["Product A", "Product B", "Product C"];

  const labelSheetOptions = [
    '20 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 4" x 1", Labels per sheet: 20',
    '30 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2.625" x 1", Labels per sheet: 30',
    '32 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2" x 1.25", Labels per sheet: 32',
    '40 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2" x 1", Labels per sheet: 40',
    '50 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 1.5" x 1", Labels per sheet: 50',
    'Continuous Rolls - 31.75mm x 25.4mm, Label Size: 31.75mm x 25.4mm, Gap: 3.18mm'
  ];

  // Handlers
  const handleShowChange = (e) => {
    const { name, type, checked, value } = e.target;
    setShow(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleBarcodeSizeChange = (e) => {
    const { name, value } = e.target;
    setBarcodeSize(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateLabel = () => {
    alert("Label generated with current settings!");
  };

  return (
    <div className="printlable-all-container">
      <h2 className="title">Print Label</h2>
      <div className="top-bar">
        <div className="table-header">
          <b>Product Name</b>
          <b>No. of Label</b>
          <span style={{ fontWeight: "bold" }}>Action</span>
        </div>
        <div className="tbl-row">
          <select
            value={selectedProduct}
            onChange={e => setSelectedProduct(e.target.value)}
            className="product-select"
          >
            <option value="">Select Product</option>
            {products.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <input
            type="number"
            min="1"
            placeholder="Enter No. of Label"
            value={numLabels}
            onChange={e => setNumLabels(e.target.value)}
            className="num-label-input"
          />
        </div>
      </div>

      <div className="section-subtitle">Information to Show In Label</div>
      <div className="info-labels">
        <div className="info-row">
          <input type="checkbox" name="productName" checked={show.productName}
                 onChange={handleShowChange} />
          Product Name
          <label>
            Product Name Font Size *
            <input name="productNameFontSize" type="number" min="8" max="36"
                   value={show.productNameFontSize}
                   onChange={handleShowChange} />
          </label>
        </div>
        <div className="info-row">
          <input type="checkbox" name="productVariation" checked={show.productVariation}
                 onChange={handleShowChange} />
          Product Variation (Recommended)
          <label>
            Variant Font Size *
            <input name="variantFontSize" type="number" min="8" max="36"
                   value={show.variantFontSize}
                   onChange={handleShowChange} />
          </label>
        </div>
        <div className="info-row">
          <input type="checkbox" name="price" checked={show.price}
                 onChange={handleShowChange} /> Price
          <span style={{ marginLeft: "16px" }}>
            <select name="priceTaxOption" value={show.priceTaxOption} onChange={handleShowChange}>
              <option value="exTax">Ex. Tax</option>
              <option value="plainTax">Plain TAX</option>
            </select>
          </span>
          <label>
            Price Font Size *
            <input name="priceFontSize" type="number" min="8" max="36"
                   value={show.priceFontSize}
                   onChange={handleShowChange} />
          </label>
        </div>
        <div className="info-row">
          <input type="checkbox" name="businessName" checked={show.businessName}
                 onChange={handleShowChange} />
          Business Name
          <label>
            Business Name Font Size *
            <input name="businessNameFontSize" type="number" min="8" max="36"
                   value={show.businessNameFontSize}
                   onChange={handleShowChange} />
          </label>
        </div>
      </div>

      <div className="section-subtitle">Barcode Settings</div>
      <div className="form-row">
        <select
          value={barcodeSetting}
          onChange={e => setBarcodeSetting(e.target.value)}
          className="barcode-setting-select"
        >
          <option value="">Select Sheet/Label format</option>
          {labelSheetOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="section-subtitle">Barcode Size</div>
      <div className="barcode-size-row">
        <label>
          Max Width : Inches *
          <input
            name="maxWidth"
            type="number"
            step="0.01"
            min="0"
            value={barcodeSize.maxWidth}
            onChange={handleBarcodeSizeChange}
          />
        </label>
        <label>
          Height : Inches *
          <input
            name="height"
            type="number"
            step="0.01"
            min="0"
            value={barcodeSize.height}
            onChange={handleBarcodeSizeChange}
          />
        </label>
      </div>
      <div className="generate-label-row">
        <button className="generate-btn" onClick={handleGenerateLabel}>
          &#10004; Generate Label
        </button>
      </div>
    </div>
  );
}

export default PrintLableList;
