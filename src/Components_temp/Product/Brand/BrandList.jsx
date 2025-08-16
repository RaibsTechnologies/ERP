import React, { useEffect, useState } from "react";
// import "./BrandList.css";
import { FaSearch, FaPrint, FaUpload, FaColumns, FaDownload ,FaArrowDown } from "react-icons/fa";
import "../Product.css"; // Assuming you have a common CSS file for product styles

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
    <div className="product-container">
      <h2 className="product-container_heading">Brand</h2>

      {/* Top Controls */}
      <div className="product-controls_row">
        <select className="product-select" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button className="product-Btn">+ Add Brand</button>

        <div className="product-searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="product-search_input"
          />
        </div>

        {/* Action Icons */}
        <div className="product-icon_btns">
          <button className="product-icon_btn">
            <FaPrint />
          </button>
          <button className="product-icon_btn">
            <FaUpload />
          </button>
          <button className="product-icon_btn">
            <FaDownload />
          </button>
          <button className="product-icon_btn">
            <FaColumns />
          </button>
        </div>
      </div>

      {/* Brand Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading brands...</p>
      ) : (
        <div className="product-table-wrapper">

        <table className="product-table">
          <thead>
            <tr>
              <th className="product-table_heading">SL</th>
              <th className="product-table_heading">Name</th>
              <th className="product-table_heading">Description</th>
              <th className="product-table_heading">Status</th>
              <th className="product-table_heading">Action</th>
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
                  <td className="product-table_dat">{idx + 1}</td>
                  <td className="product-table_dat">{brand.name}</td>
                  <td className="product-table_dat">{brand.description || ""}</td>
                  <td className="product-table_dat">
                    <span className={`status ${brand.status.toLowerCase()}`}>
                      {brand.status}
                    </span>
                  </td>
                  <td>
                    <select
                      className="product-select"
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
        </div>
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
