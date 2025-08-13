import React, { useState } from "react";
import "./AddProduct.css";
import ImageUpload from "./ImageUpload";
import TypeToggles from "./TypeToggles";

const initialToggles = {
  neverDiminishing: false,
  assembledProduct: false,
  componentProduct: false,
  obsolete: false,
  serialized: false,
  batchTracked: false,
  saleable: true,
  purchasable: true,
};

const AddProduct = () => {
  const [form, setForm] = useState({
    categorize: "Inventory (Track Stock)",
    productType: "Single",
    productName: "",
    category: "",
    sku: "",
    sellingPrice: "",
    unit: "",
    productPhoto: null,
    hsnSac: "",
    purchaseTax: "",
    costPrice: "",
    minSellingPrice: "",
  });

  const [toggles, setToggles] = useState(initialToggles);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handlePhotoChange = (file) => {
    setForm((prev) => ({ ...prev, productPhoto: file }));
  };

  // Handle toggle switches
  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle submit actions
  const handleSubmit = (type) => {
    console.log("Form:", form);
    console.log("Toggles:", toggles);
    alert(`Form action: ${type}`);
  };

  return (
    <div className="container">
      <h3 className="heading">Add New Product</h3>

      <div className="row">
        {/* ===== Left: Form ===== */}
        <form className="form">
          {/* Top dropdowns */}
          <div className="inlineRow">
            <div className="inputGroup">
              <label>Categorize *</label>
              <select
                name="categorize"
                value={form.categorize}
                onChange={handleChange}
                className="input"
              >
                <option>Inventory (Track Stock)</option>
                <option>Non-Inventory</option>
                <option>Service</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Product Type *</label>
              <select
                name="productType"
                value={form.productType}
                onChange={handleChange}
                className="input"
              >
                <option>Single</option>
                <option>Variant</option>
              </select>
            </div>
          </div>

          {/* Basic Info */}
          <h4 className="sectionTitle">Basic Info</h4>
          <div className="inputGroupFull">
            <label>Product Name *</label>
            <input
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>SKU / Barcode</label>
              <input
                type="text"
                name="sku"
                value={form.sku}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Selling Price</label>
              <input
                type="number"
                name="sellingPrice"
                value={form.sellingPrice}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label>Unit</label>
              <select
                name="unit"
                value={form.unit}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Unit</option>
                <option value="Piece">Piece</option>
                <option value="KG">KG</option>
                <option value="Liter">Liter</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <ImageUpload file={form.productPhoto} onFileChange={handlePhotoChange} />

          {/* Buying & Selling Info */}
          <h4 className="sectionTitle">Buying & Selling Info</h4>
          <div className="inlineRow">
            <div className="inputGroup">
              <label>HSN/SAC</label>
              <select
                name="hsnSac"
                value={form.hsnSac}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select one</option>
                <option value="HSN1234">HSN1234</option>
                <option value="HSN5678">HSN5678</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Purchase Tax</label>
              <select
                name="purchaseTax"
                value={form.purchaseTax}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select one</option>
                <option value="5%">GST 5%</option>
                <option value="18%">GST 18%</option>
              </select>
            </div>
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Cost Price</label>
              <input
                type="number"
                name="costPrice"
                value={form.costPrice}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label>Min Selling Price</label>
              <input
                type="number"
                name="minSellingPrice"
                value={form.minSellingPrice}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="buttonRow">
            <button type="button" className="greenBtn" onClick={() => handleSubmit("Save & New")}>
              Save & New
            </button>
            <button type="button" className="greenBtn" onClick={() => handleSubmit("Save & Edit")}>
              Save & Edit
            </button>
            <button type="button" className="greenBtn" onClick={() => handleSubmit("Save As Draft")}>
              Save As Draft
            </button>
            <button type="button" className="orangeBtn" onClick={() => handleSubmit("Save & Close")}>
              Save & Close
            </button>
          </div>
        </form>

        {/* ===== Right: Toggles ===== */}
        <TypeToggles className="togg" toggles={toggles} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default AddProduct;