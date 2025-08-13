import React, { useState } from "react";
import "./UserAssign.css";

function UserAssign() {
  const [salesman, setSalesman] = useState("");
  const [product, setProduct] = useState("");
  const [assign, setAssign] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Salesman: ${salesman} \nProduct: ${product} \nAssign: ${assign ? 'Yes' : 'No'}`);
  };

  return (
    <div className="productassign-container">
      <div className="main-title">Product assign</div>
      <form className="assign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Salesman <span className="required">*</span>
          </label>
          <select
            value={salesman}
            onChange={(e) => setSalesman(e.target.value)}
          >
            <option value="">Select One</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Product Name <span className="required">*</span>
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Select One</option>
          </select>
        </div>

        {/* Assign checkbox at the bottom */}
        <div className="assign-checkbox-row">
          <label className="assign-label">
            <input
              type="checkbox"
              checked={assign}
              onChange={e => setAssign(e.target.checked)}
            />
            Assign
          </label>
        </div>
      </form>
       <div className="fixed-save-container">
        <button type="submit" form="form" className="save-btn">
          <span className="check-mark">&#10003;</span> Save
        </button>
      </div>
    </div>
  );
}

export default UserAssign;
