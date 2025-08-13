import React, { useState } from "react";
import "./SalesTarget.css";

function SalesTarget() {
  const [isRecurring, setIsRecurring] = useState(true);
  const [type, setType] = useState("");

  function handleSave(e) {
    e.preventDefault();
    alert(`Recurring: ${isRecurring ? 'Yes' : 'No'}\nType: ${type || '(None selected)'}`);
  }

  return (
    <div className="salestarget-container">
      <div className="main-title">Generate sales target</div>

      <form className="salestarget-form" onSubmit={handleSave}>
        <div className="form-row">
          <label className="recurring-label">
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={e => setIsRecurring(e.target.checked)}
              className="recurring-checkbox"
            />
            Is Recurring
          </label>
          <div className="type-select-row">
            <label className="type-label">Type</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="type-select"
            >
              <option value="">Select One</option>
              <option value="daily">DAILY</option>
              <option value="weekly">WEEKLY</option>
              <option value="monthly">MONTHLY</option>
              <option value="yearly">YEARLY</option>
            </select>
          </div>
        </div>
      </form>

      {/* Fixed Save Button */}
      <div className="fixed-save-container">
        <button type="submit" form="form" className="save-btn">
          <span className="check-mark">&#10003;</span> Save
        </button>
      </div>
    </div>
  );
}

export default SalesTarget;
