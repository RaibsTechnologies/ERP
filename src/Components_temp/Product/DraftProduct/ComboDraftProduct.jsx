import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./DraftProduct.css";
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
      <div className="product-controls_row ">
        <select className="product-select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <button className="product-Btn">+ Add New Product</button>

        <div className="product-searchbar">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="product-search_input"
          />
          <button className="product-icon_btn">
            <FaSearch />
          </button>
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

      {/* Combo Products Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading products...</p>
      ) : (
        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th className="product-table_heading">SL</th>
                <th className="product-table_heading">Image</th>
                <th className="product-table_heading">Name</th>
                <th className="product-table_heading">SKU</th>
                <th className="product-table_heading">Brand</th>
                <th className="product-table_heading">Model</th>
                <th className="product-table_heading">Purchase Price</th>
                <th className="product-table_heading">Selling Price</th>
                <th className="product-table_heading">Min Price</th>
                <th className="product-table_heading">Stock</th>
                <th className="product-table_heading">Supplier</th>
                <th className="product-table_heading">Product Type</th>
                <th className="product-table_heading">Category</th>
                <th className="product-table_heading">Stock Alert</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={14} className="no-products">
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product, idx) => (
                  <tr key={product.id || idx}>
                    <td className="product-table_dat">{idx + 1}</td>
                    <td className="product-table_dat">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="product-table_dat">{product.name}</td>
                    <td className="product-table_dat">{product.sku}</td>
                    <td className="product-table_dat">{product.brand}</td>
                    <td className="product-table_dat">{product.model}</td>
                    <td className="product-table_dat">₹{product.purchasePrice}</td>
                    <td className="product-table_dat">₹{product.sellingPrice}</td>
                    <td className="product-table_dat">₹{product.minPrice}</td>
                    <td className="product-table_dat">{product.stock}</td>
                    <td className="product-table_dat">{product.supplier}</td>
                    <td className="product-table_dat">{product.productType}</td>
                    <td className="product-table_dat">{product.category}</td>
                    <td className="product-table_dat">{product.stockAlert}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ComboProductList;
