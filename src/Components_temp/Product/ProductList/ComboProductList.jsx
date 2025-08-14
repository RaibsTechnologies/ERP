import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./productList.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles

function ComboProductList() {
  const [comboProducts, setComboProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Dummy data for combo products
  const demoComboProducts = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Combo Pack A",
      sku: "COMBO001",
      price: 250,
      regularPrice: 280,
      totalProduct: 3,
      status: "Active",
      enable: true,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Combo Pack B",
      sku: "COMBO002",
      price: 400,
      regularPrice: 450,
      totalProduct: 5,
      status: "Inactive",
      enable: false,
    },
  ];

  useEffect(() => {
    const apiUrl = "https://your-backend-api.com/api/combo-products"; // Replace when backend is ready

    async function fetchComboProducts() {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setComboProducts(data);
        } else if (Array.isArray(data.comboProducts)) {
          setComboProducts(data.comboProducts);
        } else {
          setComboProducts([]);
        }
        setError(null);
      } catch (err) {
        console.warn("Error fetching combo products:", err);
        setError("Could not fetch combo products — showing sample data.");
        setComboProducts(demoComboProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchComboProducts();
  }, []);

  const filteredProducts = comboProducts.filter(
    (combo) =>
      combo.name.toLowerCase().includes(search.toLowerCase()) ||
      combo.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">
      <h2 className="product-container_heading">Product</h2>

      {/* Tabs */}
      <div className="tabs">
        <Link 
          to="/productlist" 
          className={location.pathname === "/productlist" ? "tab active" : "tab"}
        >
          PRODUCTS
        </Link>
        <Link 
          to="/comboproducts" 
          className={location.pathname === "/comboproducts" ? "tab active" : "tab"}
        >
          COMBO PRODUCT
        </Link>
      </div>

      {/* Top Controls */}
      <div className="top-bar">
        <select className="page-size">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <button className="btn">+ Add New Product</button>

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

      {/* Combo Products Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading combo products...</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Regular Price</th>
              <th>Total Product</th>
              <th>Status</th>
              <th>Enable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={10} className="no-products">
                  No combo products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((combo, idx) => (
                <tr key={combo.id || idx}>
                  <td>{idx + 1}</td>
                  <td>
                    {combo.image ? (
                      <img
                        src={combo.image}
                        alt={combo.name}
                        className="product-image"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{combo.name}</td>
                  <td>{combo.sku}</td>
                  <td>₹{combo.price}</td>
                  <td>₹{combo.regularPrice}</td>
                  <td>{combo.totalProduct}</td>
                  <td>{combo.status}</td>
                  <td>{combo.enable ? "Yes" : "No"}</td>
                  <td>
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ComboProductList;
