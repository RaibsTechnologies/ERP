import React, { useEffect, useState } from "react";
import "./BrandList.css";

function BrandList() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");

  // Dummy fallback data for brands
  const demoBrands = [
    {
      id: 1,
      name: "No Brand",
      description: "",
      status: "Active",
    },
    {
      id: 2,
      name: "Apple",
      description: "Technology brand for electronics",
      status: "Active",
    },
    {
      id: 3,
      name: "Samsung",
      description: "Consumer electronics and appliances",
      status: "Inactive",
    },
  ];

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const apiUrl = "https://your-backend-api.com/api/brands"; // Replace when backend is ready
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setBrands(data);
      } else if (Array.isArray(data.brands)) {
        setBrands(data.brands);
      } else {
        setBrands([]);
      }
      setError(null);
    } catch (err) {
      console.warn("Error fetching brands:", err);
      setError("Could not fetch brands — showing sample data.");
      setBrands(demoBrands);
    } finally {
      setLoading(false);
    }
  };

  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(search.toLowerCase()) ||
      brand.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleActionSelect = (brandId, action) => {
    console.log(`Action: ${action} for brand ID: ${brandId}`);
    // Handle actions like edit, delete, etc.
  };

  return (
    <div className="brand-container">
      <h2 className="heading">Brand</h2>

      {/* Top Controls */}
      <div className="top-bar">
        <select className="page-size" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button className="add-btn">+ Add Brand</button>

        <div className="searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Action Icons */}
        <div className="action-icons">
          <button className="icon-btn" title="Print/Export">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
            </svg>
          </button>
          <button className="icon-btn" title="Import">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 14v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-5h2v5h14v-5h2zM17 7l-1.41 1.41L13 5.83V16h-2V5.83L8.41 8.41 7 7l5-5 5 5z"/>
            </svg>
          </button>
          <button className="icon-btn" title="Download">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9h2v9h14v-9h2zM17 7l-5 5-5-5h3V1h4v6h3z"/>
            </svg>
          </button>
          <button className="icon-btn" title="Delete">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Brand Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading brands...</p>
      ) : (
        <table className="brand-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands.length === 0 ? (
              <tr>
                <td colSpan={5} className="no-brands">
                  No brands found.
                </td>
              </tr>
            ) : (
              filteredBrands.slice(0, parseInt(pageSize)).map((brand, idx) => (
                <tr key={brand.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{brand.name}</td>
                  <td>{brand.description || ""}</td>
                  <td>
                    <span className={`status ${brand.status.toLowerCase()}`}>
                      {brand.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      className="action-select"
                      onChange={(e) => handleActionSelect(brand.id, e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>SELECT</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                      <option value="view">View</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* Footer Info */}
      {!loading && filteredBrands.length > 0 && (
        <div className="table-footer">
          <p>Showing 1 to {Math.min(parseInt(pageSize), filteredBrands.length)} out of {filteredBrands.length} entries</p>
        </div>
      )}
    </div>
  );
}

export default BrandList;
