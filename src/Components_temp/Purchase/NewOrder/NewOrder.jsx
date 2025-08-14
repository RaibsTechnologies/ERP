import React from 'react';
import './NewOrder.css';

const NewOrder = () => {
  return (
    <div className="new-order-container">
      <h2 className="page-title">Add Purchase Order</h2>

      <div className="form-section top-section">
        <div className="left-pane">
          <div className="form-group">
            <label>Supplier *</label>
            <select>
              <option>Select Supplier</option>
              <option>Supplier A</option>
              <option>Supplier B</option>
              <option>Supplier C</option>
            </select>
          </div>
          <div className="form-group">
            <label>Imported Product</label>
            <div className="radio-group">
              <input type="radio" id="imported_yes" name="imported_product" value="Yes" />
              <label htmlFor="imported_yes">Yes</label>
              <input type="radio" id="imported_no" name="imported_product" value="No" defaultChecked />
              <label htmlFor="imported_no">No</label>
            </div>
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea rows="4"></textarea>
          </div>
        </div>

        <div className="right-pane">
          <div className="details-grid">
            <div className="form-group">
              <label>User</label>
              <select defaultValue="Raibs">
                <option>Raibs</option>
              </select>
            </div>
            <div className="form-group">
              <label>Warehouse *</label>
              <select>
                <option>Select one</option>
                <option>Main Branch</option>
                <option>Branch A</option>
                <option>Branch B</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="text" defaultValue="08/13/2025" />
            </div>
            <div className="form-group">
              <label>Invoice No</label>
              <input type="text" defaultValue="PI-25081" />
            </div>
            <div className="form-group">
              <label>Reference No</label>
              <input type="text" placeholder="Reference No" />
            </div>
            <div className="form-group">
                <label>Pay Term</label>
                <select>
                    <option>Select One</option>
                    <option>Net 15</option>
                    <option>Net 30</option>
                    <option>Net 60</option>
                    <option>Due on Receipt</option>
                </select>
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input type="text" defaultValue="08/13/2025" />
            </div>
            <div className="form-group">
              <label>Shipper</label>
              <input type="text" placeholder="Shipper" />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select defaultValue="Cash">
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <div className="form-group">
              <label>Pay Amount</label>
              <input type="text" defaultValue="0" />
            </div>
            <div className="form-group attach-document">
                <label>Attach Document</label>
                <div className="file-input-wrapper">
                    <input type="text" placeholder="Browse File" readOnly/>
                    <button className="browse-btn">Browse</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-table-section">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Discount</th>
              <th>TAX (%)</th>
              <th>Quantity</th>
              <th>Rate (₹)</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="choose-product">Choose Product</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cost-line-section">
        <h3>Add cost line</h3>
        <div className="cost-line-form">
            <select className="cost-supplier">
                <option>Select One</option>
                <option>Supplier A</option>
                <option>Supplier B</option>
                <option>Supplier C</option>
            </select>
            <input type="text" placeholder="Cost *" className="cost-input"/>
            <input type="text" placeholder="Tax (%)" className="tax-input"/>
            <input type="text" placeholder="(mm/dd/YYYY)" className="date-input"/>
            <input type="text" placeholder="Comment" className="comment-input"/>
            <button className="add-btn">Add</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Supplier</th>
                    <th>Cost</th>
                    <th>Tax (%)</th>
                    <th>Total Cost</th>
                    <th>Date</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="6" className="no-items">
                        <span>0 Items</span>
                        <span className="sub-total">Sub Total: <strong>₹ 0.00</strong></span>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>

      <div className="summary-section">
          <div className="summary-details">
            <div><span>Cost line total :</span><span>0.00</span></div>
            <div>
              <span>Shipping Charge :</span>
              <input type="text" defaultValue="0" />
            </div>
            <div><span>Product Wise TAX :</span><span>0</span></div>
            <div><span>Discount :</span><span>₹ 0</span></div>
            <div>
              <span>Adjustment :</span>
              <input type="text" defaultValue="0" />
            </div>
            <div>
              <span>Amount in Word :</span>
              <input type="text" placeholder="Enter amount in words" />
            </div>
            <div className="grand-total"><span>Grand Total :</span><span>₹ 0.00</span></div>
        </div>
        <div className="notes-attachments">
    <div className="attachments-section">
        <input
            type="file"
            id="file-upload"
            className="file-input"
            multiple
            style={{ display: 'none' }}
        />
        <button
            className="add-attachment-btn"
            onClick={() => document.getElementById('file-upload').click()}
        >
            + Add Attachment
        </button>
        <div className="uploaded-files">
            
        </div>
    </div>
</div>
      </div>

      <div className="action-buttons">
        <button className="btn-save">Save</button>
        <button className="btn-save">Save & Close</button>
        <button className="btn-save">Save & New</button>
        <button className="btn-save">Save & Send Mail</button>
        <button className="btn-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default NewOrder;