import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaPrint, FaUpload, FaColumns, FaDownload, FaArrowDown } from "react-icons/fa";

// import "./ProductList.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const location = useLocation();



  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/productList/fetchData";

    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        console.log("API Response:", response.data); // should log your DB rows
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="product-container">
      <h3 className="product-container_heading">Product</h3>

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
      <div className="product-controls_row">
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

      {/* Regular Products Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading products...</p>
      ) : (
        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                {products.length > 0 &&
                  Object.keys(products[0]).map((key) => (
                    <th key={key}>{key.toUpperCase()}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={products.length > 0 ? Object.keys(products[0]).length : 1} className="no-products">
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product, idx) => (
                  <tr key={product.id || idx}>
                    {Object.keys(product).map((key) => (
                      <td key={key}>
                        {key === "image" ? (
                          product.image ? (
                            <img src={product.image} alt={product.name} className="product-image" />
                          ) : (
                            "-"
                          )
                        ) : (
                          product[key]
                        )}
                      </td>
                    ))}
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

export default ProductList;
