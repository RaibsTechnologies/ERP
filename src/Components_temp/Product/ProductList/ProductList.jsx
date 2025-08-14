import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./ProductList.css";
import "../Product.css"; // Assuming you have a common CSS file for product styles

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Dummy fallback data for regular products
  const demoProducts = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Sample Product A",
      sku: "SKU001",
      brand: "BrandX",
      model: "ModelA",
      purchasePrice: 100,
      sellingPrice: 120,
      minPrice: 90,
      stock: 50,
      supplier: "Supplier1",
      productType: "TypeA",
      category: "CategoryA",
      stockAlert: 5,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Sample Product B",
      sku: "SKU002",
      brand: "BrandY",
      model: "ModelB",
      purchasePrice: 150,
      sellingPrice: 200,
      minPrice: 130,
      stock: 20,
      supplier: "Supplier2",
      productType: "TypeB",
      category: "CategoryB",
      stockAlert: 3,
    },
  ];

  useEffect(() => {
    const apiUrl = "https://your-backend-api.com/api/products"; // Replace when backend is ready

    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
        setError(null);
      } catch (err) {
        console.warn("Error fetching products:", err);
        setError("Could not fetch products — showing sample data.");
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase())
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
      <div className="controls-row">
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

      {/* Regular Products Table */}
      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>Loading products...</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>SKU</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Purchase Price</th>
              <th>Selling Price</th>
              <th>Min Price</th>
              <th>Stock</th>
              <th>Supplier</th>
              <th>Product Type</th>
              <th>Category</th>
              <th>Stock Alert</th>
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
                  <td>{idx + 1}</td>
                  <td>
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
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.brand}</td>
                  <td>{product.model}</td>
                  <td>₹{product.purchasePrice}</td>
                  <td>₹{product.sellingPrice}</td>
                  <td>₹{product.minPrice}</td>
                  <td>{product.stock}</td>
                  <td>{product.supplier}</td>
                  <td>{product.productType}</td>
                  <td>{product.category}</td>
                  <td>{product.stockAlert}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
