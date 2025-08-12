import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components/LoginPage/Login";
import AddProduct from "./Components/Product/AddProduct/AddProduct";
import ProductList from "./Components/Product/ProductList/ProductList";
import ComboProductList from "./Components/Product/ProductList/ComboProductList";
import StockList from "./Components/Inventory/StockList/StockList";
import BrandList from "./Components/Product/Brand/BrandList";
import ModelList from "./Components/Product/Model/ModelList";
import UnitTypeList from "./Components/Product/UnitType/UnitTypeList";
import DashBoard from "./Components/DashBoard/DashBoard";
import Category from "./Components/Product/Category/Category";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashBoard />
            </Layout>
          }
        />

        {/* Add Product */}
        <Route
          path="/addproduct"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />

        {/* Products List */}
        <Route
          path="/productlist"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />

        {/* Combo Products List */}
        <Route
          path="/comboproducts"
          element={
            <Layout>
              <ComboProductList />
            </Layout>
          }
        />

        {/* Stock List */}
        <Route
          path="/stocklist"
          element={
            <Layout>
              <StockList />
            </Layout>
          }
        />
        {/* Add Category */}
        <Route
          path="/Category"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />

        {/* Model List */}
        <Route
          path="/modelList"
          element={
            <Layout>
              <ModelList />
            </Layout>
          }
        />

        {/* Brand List */}
        <Route
          path="/brandlist"
          element={
            <Layout>
              <BrandList />
            </Layout>
          }
        />

        <Route
  path="/unittype"      // or "/unit-type"
  element={
    <Layout>
      <UnitTypeList />
    </Layout>
  }
/>

        {/* 404 Fallback */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Page not found</h2>}
        />
      </Routes>
    </Router>
  );
};

export default App;
