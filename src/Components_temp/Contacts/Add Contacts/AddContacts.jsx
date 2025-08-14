import React, { useState } from "react";
import "./AddContacts.css";

function AddContacts() {
  const [type, setType] = useState("Customer"); // "Customer" or "Supplier"
  const [activeTab, setActiveTab] = useState("business");

  // Password states
  const [password, setPassword] = useState("********");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="addcontacts-container">
      <div className="main-title">Add Contacts</div>
      {/* Toggle */}
      <div className="type-toggle">
        <label>
          <input
            type="radio"
            checked={type === "Customer"}
            onChange={() => setType("Customer")}
          />
          Customer
        </label>
        <label>
          <input
            type="radio"
            checked={type === "Supplier"}
            onChange={() => setType("Supplier")}
          />
          Supplier
        </label>
      </div>
      
      <form className="addcontacts-form">
        {/* CUSTOMER FIELDS */}
        {type === "Customer" && (
          <>
            <div className="row-columns">
              <div className="left-form">
                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input type="text" placeholder="Mobile" />
                </div>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" placeholder="User Name" />
                </div>
                <div className="form-group">
                  <label>Latitude</label>
                  <input type="text" placeholder="Latitude" />
                </div>
                <div className="form-group">
                  <label>Route</label>
                  <select><option value="">Select route</option></select>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select><option value="">Select One</option></select>
                </div>
              </div>
              <div className="right-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label>Profile Pic</label>
                  <div className="profile-row">
                    <input type="file" id="profilePicC" className="file-input" />
                    <label htmlFor="profilePicC" className="browse-btn">Browse</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="password-row">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      readOnly
                    />
                    <button type="button" className="show-btn" onClick={() => setShowPassword(s => !s)}>
                      <span role="img" aria-label="show">&#128065;</span>
                    </button>
                    <button type="button" className="autogen-btn">Auto Generate</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Longitude</label>
                  <input type="text" placeholder="Longitude" />
                </div>
                <div className="form-group updown-row">
                  <label>Up/Down</label>
                  <span>
                    <label><input type="radio" name="updownC" defaultChecked /> Up</label>
                    <label><input type="radio" name="updownC" /> Down</label>
                  </span>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select><option value="">Select One</option></select>
                </div>
              </div>
            </div>
            <div className="get-location-row">
              <span className="get-location">Get Current Location</span>
            </div>

            {/* Tabs BAR */}
            <div className="tabs-row">
              <button type="button" className={activeTab === "business" ? "tab-btn active" : "tab-btn"} onClick={() => setActiveTab("business")}>Business Information</button>
              <button type="button" className="tab-btn">Address</button>
              <button type="button" className="tab-btn">Payments</button>
              <button type="button" className="tab-btn">Additional info</button>
              <button type="button" className="tab-btn">Remarks</button>
            </div>
            {activeTab === "business" && (
              <div className="tab-content">
                <div className="tab-grid">
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Business Name" />
                  </div>
                  <div className="form-group">
                    <label>VAT Number / BIN / Trade No</label>
                    <input type="text" placeholder="VAT-000000000 / BIN-000000000 / Trade-000" />
                  </div>
                  <div className="form-group">
                    <label>Pay Term</label>
                    <select><option value="">Select One</option></select>
                  </div>
                  <div className="form-group">
                    <label>Alternate Contact No</label>
                    <input type="text" placeholder="Alternate Contact No" />
                  </div>
                  <div className="form-group">
                    <label>Credit Limit</label>
                    <input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="vat-info">(Use Title as Prefix)</div>
              </div>
            )}
          </>
        )}

        {/* SUPPLIER FIELDS */}
        {type === "Supplier" && (
          <>
            <div className="row-columns">
              <div className="left-form">
                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input type="text" placeholder="Mobile" />
                </div>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" placeholder="User Name" />
                </div>
              </div>
              <div className="right-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label>Profile Pic</label>
                  <div className="profile-row">
                    <input type="file" id="profilePicS" className="file-input" />
                    <label htmlFor="profilePicS" className="browse-btn">Browse</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="password-row">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      readOnly
                    />
                    <button type="button" className="show-btn" onClick={() => setShowPassword(s => !s)}>
                      <span role="img" aria-label="show">&#128065;</span>
                    </button>
                    <button type="button" className="autogen-btn">Auto Generate</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tab bar for Supplier */}
            <div className="tabs-row">
              <button type="button" className={activeTab === "business" ? "tab-btn active" : "tab-btn"} onClick={() => setActiveTab("business")}>Business Information</button>
              <button type="button" className="tab-btn">Address</button>
              <button type="button" className="tab-btn">ACH payment Info</button>
              <button type="button" className="tab-btn">Additional info</button>
              <button type="button" className="tab-btn">Remarks</button>
            </div>
            {activeTab === "business" && (
              <div className="tab-content">
                <div className="tab-grid">
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Business Name" />
                  </div>
                  <div className="form-group">
                    <label>VAT Number / BIN / Trade No</label>
                    <input type="text" placeholder="VAT-000000000 / BIN-000000000 / Trade-000" />
                  </div>
                  <div className="form-group">
                    <label>Pay Term</label>
                    <select><option value="">Select One</option></select>
                  </div>
                  <div className="form-group">
                    <label>Alternate Contact No</label>
                    <input type="text" placeholder="Alternate Contact No" />
                  </div>
                  <div className="form-group">
                    <label>Credit Limit</label>
                    <input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="vat-info">(Use Title as Prefix)</div>
              </div>
            )}
          </>
        )}
      </form>

      {/* Footer Buttons */}
      <div className="footer-actions">
        <button className="footer-btn save-btn">&#10003; Save</button>
        <button className="footer-btn save-new-btn">&#10003; Save & New</button>
        <button className="footer-btn save-details-btn">&#10003; Save & Details</button>
        <button className="footer-btn save-close-btn">&#10003; Save & Close</button>
      </div>
    </div>
  );
}

export default AddContacts;
