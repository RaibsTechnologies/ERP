import React, { useState } from "react";
import "./SaleList.css";

function SalesList() {
  // Form states (basic demo, you can adapt as needed)
  const [form, setForm] = useState({
    warehouse: "",
    salesPerson: "",
    route: "",
    customer: "",
    email: "",
    mobile: "",
    billingAddress: "",
    shippingAddress: "",
    date: "",
    invoiceNo: "INV-25081",
    referenceNo: "",
    dueDate: "",
    payTerm: "",
    type: "Regular",
    paymentMethod: "Cash",
    attachDocument: "",
    amount: "",
    shipper: "",
    billToBill: "No",
    deliveryPerson: "",
    deliveryDate: "",
  });

  // Example products row; this can be replaced by dynamic state as needed
  const [items, setItems] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  // Summary demo
  const [summary, setSummary] = useState({
    shippingCharge: 0,
    discount: 0,
    adjustment: 0
  });

  // Footer buttons (these are always visible)
  const footerButtons = [
    { label: "Save" },
    { label: "Save & Close" },
    { label: "Save & New" },
    { label: "Save & Send Mail" }
  ];

  // Handle form updates (simplified for brevity)
  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSummaryChange(e) {
    const { name, value } = e.target;
    setSummary(prev => ({ ...prev, [name]: value }));
  }

  function handleProductAdd(e) {
    e.preventDefault();
    // You'd implement actual item adding logic here
    if(productSearch) {
      setItems([
        ...items,
        {
          name: productSearch, qty: 1, rate: 0, amount: 0, batch: "", serial: ""
        }
      ]);
      setProductSearch("");
    }
  }

  return (
    <div className="saleslist-page">
      {/* FORM AND DETAILS */}
      <div className="saleslist-main-form">
        {/* Left Panel */}
        <section className="saleslist-form-column">
          <h2 className="main-title">Add new Sale</h2>
          <div className="saleslist-form-group">
            <label>Warehouse <span>*</span></label>
            <select name="warehouse" value={form.warehouse} onChange={handleFormChange}>
              <option value="">Main WareHouse</option>
              <option value="WH1">Warehouse 1</option>
            </select>
          </div>
          <div className="saleslist-form-group">
            <label>Sales Person</label>
            <select name="salesPerson" value={form.salesPerson} onChange={handleFormChange}>
              <option value="">Select One</option>
              <option value="SP1">Sales 1</option>
            </select>
          </div>
          <div className="saleslist-form-group">
            <label>Route</label>
            <select name="route" value={form.route} onChange={handleFormChange}>
              <option value="">Select One</option>
            </select>
          </div>
          <div className="saleslist-form-group">
            <label>Customer <span>*</span></label>
            <select name="customer" value={form.customer} onChange={handleFormChange}>
              <option value="">Select</option>
            </select>
          </div>
          <div className="saleslist-form-row">
            <div style={{ flex: 1 }}>
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleFormChange} placeholder="info@email.com" />
            </div>
            <div style={{ flex: 1 }}>
              <label>Mobile</label>
              <input name="mobile" type="text" value={form.mobile} onChange={handleFormChange} placeholder="017 xxxx xxxx" />
            </div>
          </div>
          <div className="saleslist-form-row">
            <div style={{ flex: 1 }}>
              <label>Billing Address</label>
              <textarea name="billingAddress" value={form.billingAddress} onChange={handleFormChange} placeholder="Billing Address" />
            </div>
            <div style={{ flex: 1 }}>
              <label>Shipping Address</label>
              <textarea name="shippingAddress" value={form.shippingAddress} onChange={handleFormChange} placeholder="Shipping Address" />
            </div>
          </div>
        </section>
        {/* Right Panel */}
        <section className="saleslist-form-column saleslist-right">
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Date</label>
              <input name="date" type="date" value={form.date} onChange={handleFormChange} />
            </div>
            <div className="saleslist-form-group">
              <label>Invoice No</label>
              <input name="invoiceNo" value={form.invoiceNo} onChange={handleFormChange} />
            </div>
          </div>
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Reference No</label>
              <input name="referenceNo" value={form.referenceNo} onChange={handleFormChange} />
            </div>
            <div className="saleslist-form-group">
              <label>Pay Term</label>
              <select name="payTerm" value={form.payTerm} onChange={handleFormChange}>
                <option value="">Select One</option>
              </select>
            </div>
          </div>
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Due Date</label>
              <input name="dueDate" type="date" value={form.dueDate} onChange={handleFormChange} />
            </div>
            <div className="saleslist-form-group">
              <label>Shipper</label>
              <input name="shipper" value={form.shipper} onChange={handleFormChange} />
            </div>
          </div>
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Type</label>
              <select name="type" value={form.type} onChange={handleFormChange}>
                <option value="Regular">Regular</option>
              </select>
            </div>
            <div className="saleslist-form-group">
              <label>Is Bill To Bill</label>
              <select name="billToBill" value={form.billToBill} onChange={handleFormChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Payment Method</label>
              <select name="paymentMethod" value={form.paymentMethod} onChange={handleFormChange}>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className="saleslist-form-group">
              <label>Amount</label>
              <input name="amount" value={form.amount} onChange={handleFormChange} />
            </div>
          </div>
          <div className="saleslist-form-row">
            <div className="saleslist-form-group">
              <label>Attach Document</label>
              <input type="file" name="attachDocument" onChange={handleFormChange} />
            </div>
            <div className="saleslist-form-group">
              <label>Delivery Person</label>
              <select name="deliveryPerson" value={form.deliveryPerson} onChange={handleFormChange}>
                <option value="">Select One</option>
              </select>
            </div>
          </div>
          <div className="saleslist-form-group">
            <label>Delivery Date</label>
            <input name="deliveryDate" type="date" value={form.deliveryDate} onChange={handleFormChange} />
          </div>
        </section>
      </div>

      {/* ITEMS TABLE */}
      <div className="saleslist-items-box">
        <table className="saleslist-items-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Rate ($)</th>
              <th>Amount ($)</th>
              <th>Batch</th>
              <th>Serial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} style={{ background: "#fafafa" }}>
                <form onSubmit={handleProductAdd} className="saleslist-product-row">
                  <input
                    value={productSearch}
                    onChange={e => setProductSearch(e.target.value)}
                    type="text"
                    placeholder="Select Product"
                  />
                  <button type="submit" className="add-product-btn">+ Add</button>
                </form>
              </td>
            </tr>
            {items.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty-row">0 Items</td>
              </tr>
            ) : (
              items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.rate}</td>
                  <td>{item.amount}</td>
                  <td>{item.batch}</td>
                  <td>{item.serial}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}
      <div className="saleslist-summary">
        <div className="summary-left">
          <div>
            <b>Sub Total:</b> <span>$0.00</span>
          </div>
          <div>
            <label>Shipping Charge:</label>
            <input type="number" name="shippingCharge" value={summary.shippingCharge}
                   onChange={handleSummaryChange} min={0} />
          </div>
          <div>
            <label>Discount:</label>
            <input type="number" name="discount" value={summary.discount}
                   onChange={handleSummaryChange} min={0} />
            <select>
              <option>$</option>
              <option>%</option>
            </select>
          </div>
          <div>
            <label>Adjustment:</label>
            <input type="number" name="adjustment" value={summary.adjustment}
                   onChange={handleSummaryChange} />
          </div>
          <div>
            <label>Amount in Word:</label>
            <input type="text" readOnly value="Zero Dollar Only" />
          </div>
        </div>
        <div className="summary-right">
          <b>Grand Total: $0.00</b>
        </div>
      </div>

      {/* FIXED FOOTER BUTTONS */}
      <div className="saleslist-fixed-footer">
        <div className="footer-buttons">
          {footerButtons.map(btn =>
            <button key={btn.label} className="footer-btn">{btn.label}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesList;
