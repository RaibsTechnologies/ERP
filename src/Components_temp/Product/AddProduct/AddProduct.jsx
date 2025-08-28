import React, { useState } from "react";
import "../Product.css"; // Common CSS file for product styles
import ImageUpload from "./ImageUpload";
import TypeToggles from "./TypeToggles";
import Toolbar from "./ToolBar";
import axios from "axios";

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
    Image: null,             // product photo (File object)
    Name: "",                // product name
    SKU: "",                 // sku/barcode
    Brand: "",               // brand
    Model: "",               // model
    PurchasePrice: "",       // cost price
    SellingPrice: "",        // selling price
    MinPrice: "",            // minimum selling price
    Stock: "",               // stock qty
    Supplier: "",            // supplier (optional)
    ProductType: "Single",   // type
    Category: "",            // category
    StockAlert: 0,           // alert quantity
    Status: "Active",        // status
    Action: "Save",          // default action
    Warranty: "",            // warranty
    BarcodeType: "C39",      // barcode type
    HsnSac: "",              // hsn/sac
    PurchaseTax: "",         // purchase tax
    Unit: "",                // unit
  });

  const [toggles, setToggles] = useState(initialToggles);
  const [content, setContent] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload (file object)
  const handlePhotoChange = (file) => {
    setForm((prev) => ({ ...prev, Image: file }));
  };

  // Handle toggle switches
  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle submit actions
  const handleSubmit = async (type) => {
    try {
      const apiUrl = "http://localhost:5000/api/productList/addProduct";
      const formData = new FormData();

      // Append image explicitly 👇
      if (form.Image) {
        formData.append("Image", form.Image);
      }

      // Append the rest of the fields
      Object.entries(form).forEach(([key, value]) => {
        if (key !== "Image") {
          formData.append(key, value);
        }
      });

      // Append toggles
      Object.entries(toggles).forEach(([key, value]) => {
        formData.append(key, value ? 1 : 0);
      });

      // Append description
      formData.append("Description", content);

      // Append action
      formData.set("Action", type);

      // API request
      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      alert(`✅ Product saved successfully! Product ID: ${response.data.productId}`);

      // Reset form if Save & New
      if (type === "Save & New") {
        setForm({
          Image: null,
          Name: "",
          SKU: "",
          Brand: "",
          Model: "",
          PurchasePrice: "",
          SellingPrice: "",
          MinPrice: "",
          Stock: "",
          Supplier: "",
          ProductType: "Single",
          Category: "",
          StockAlert: 0,
          Status: "Active",
          Action: "Save",
          Warranty: "",
          BarcodeType: "C39",
          HsnSac: "",
          PurchaseTax: "",
          Unit: "",
        });
        setToggles(initialToggles);
        setContent("");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error.response?.data || error);
      alert("Internal error while saving product.");
    }
  };

  // Text editor format (placeholder)
  const handleFormat = (format) => {
    console.log("Format:", format);
  };

  return (
    <div className="product-container">
      <h3 className="product-container_heading">Add New Product</h3>

      <div className="product-container_addproduct-row">
        {/* ===== Left: Form ===== */}
        <form
          className="product-container_addproduct-row_form"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Top dropdowns */}
          <div className="inlineRow">
            <div className="inputGroup">
              <label>Categorize *</label>
              <select
                name="Categorize"
                value={form.Categorize}
                onChange={handleChange}
                className="product-search_input"
              >
                <option>Inventory (Track Stock)</option>
                <option>Non-Inventory</option>
                <option>Service</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Product Type *</label>
              <select
                name="ProductType"
                value={form.ProductType}
                onChange={handleChange}
                className="product-search_input"
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
              name="Name"
              value={form.Name}
              onChange={handleChange}
              className="product-search_input"
            />
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Category</label>
              <select
                name="Category"
                value={form.Category}
                onChange={handleChange}
                className="product-search_input"
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
                name="SKU"
                value={form.SKU}
                onChange={handleChange}
                className="product-search_input"
              />
            </div>
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Selling Price</label>
              <input
                type="number"
                name="SellingPrice"
                value={form.SellingPrice}
                onChange={handleChange}
                className="product-search_input"
              />
            </div>
            <div className="inputGroup">
              <label>Unit</label>
              <select
                name="Unit"
                value={form.Unit}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="">Select Unit</option>
                <option value="Piece">Piece</option>
                <option value="KG">KG</option>
                <option value="Liter">Liter</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <ImageUpload file={form.Image} onFileChange={handlePhotoChange} />

          {/* Buying & Selling Info */}
          <h4 className="sectionTitle">Buying & Selling Info</h4>
          <div className="inlineRow">
            <div className="inputGroup">
              <label>HSN/SAC</label>
              <select
                name="HsnSac"
                value={form.HsnSac}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="">Select one</option>
                <option value="HSN1234">HSN1234</option>
                <option value="HSN5678">HSN5678</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Purchase Tax</label>
              <select
                name="PurchaseTax"
                value={form.PurchaseTax}
                onChange={handleChange}
                className="product-search_input"
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
                name="PurchasePrice"
                value={form.PurchasePrice}
                onChange={handleChange}
                className="product-search_input"
              />
            </div>
            <div className="inputGroup">
              <label>Min Selling Price</label>
              <input
                type="number"
                name="MinPrice"
                value={form.MinPrice}
                onChange={handleChange}
                className="product-search_input"
              />
            </div>
          </div>

          {/* ===== Additional Info ===== */}
          <h4 className="sectionTitle">Additional Info</h4>
          <div className="inlineRow">
            <div className="inputGroup">
              <label>Brand</label>
              <select
                name="Brand"
                value={form.Brand}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="">Select Brand</option>
                <option value="Brand1">Brand 1</option>
                <option value="Brand2">Brand 2</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Model</label>
              <select
                name="Model"
                value={form.Model}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="">Select Model</option>
                <option value="Model1">Model 1</option>
                <option value="Model2">Model 2</option>
              </select>
            </div>
          </div>

          <div className="inlineRow">
            <div className="inputGroup">
              <label>Warranty</label>
              <select
                name="Warranty"
                value={form.Warranty}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="">Select one</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
                <option value="2 years">2 Years</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Barcode Type</label>
              <select
                name="BarcodeType"
                value={form.BarcodeType}
                onChange={handleChange}
                className="product-search_input"
              >
                <option value="C39">C39 (Support for BarCode)</option>
                <option value="QR">QR Code</option>
              </select>
            </div>
          </div>

          <div className="inputGroup">
            <label>
              Alert Quantity <span title="Minimum quantity before stock alert">ℹ️</span>
            </label>
            <input
              type="number"
              name="StockAlert"
              value={form.StockAlert}
              onChange={handleChange}
              className="product-search_input"
            />
          </div>

          {/* Description editor */}
          <div className="text-editor">
            <Toolbar onFormat={handleFormat} />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="editor-textarea"
            />
          </div>

          {/* Buttons */}
          <div className="buttonRow">
            <button
              type="button"
              className="product-Btn"
              onClick={() => handleSubmit("Save & New")}
            >
              Save & New
            </button>
            <button
              type="button"
              className="product-Btn"
              onClick={() => handleSubmit("Save & Edit")}
            >
              Save & Edit
            </button>
            <button
              type="button"
              className="product-Btn"
              onClick={() => handleSubmit("Save As Draft")}
            >
              Save As Draft
            </button>
            <button
              type="button"
              className="product-Btn orangeBtn"
              onClick={() => handleSubmit("Save & Close")}
            >
              Save & Close
            </button>
          </div>
        </form>

        {/* ===== Right: Toggles ===== */}
        <TypeToggles
          className="toggleRow"
          toggles={toggles}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default AddProduct;
