import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components_temp/LoginPage/Login";
import AddProduct from "./Components_temp/Product/AddProduct/AddProduct";
import ProductList from "./Components_temp/Product/ProductList/ProductList";
import ComboProductList from "./Components_temp/Product/ProductList/ComboProductList";
import StockList from "./Components_temp/Inventory/StockList/StockList";
import BrandList from "./Components_temp/Product/Brand/BrandList";
import ModelList from "./Components_temp/Product/Model/ModelList";
import UnitTypeList from "./Components_temp/Product/UnitType/UnitTypeList";
import DashBoard from "./Components_temp/DashBoard/DashBoard";
import Category from "./Components_temp/Product/Category/Category";
import VariantList from "./Components_temp/Product/Variant/VariantList";
import PrintLabelList from "./Components_temp/Product/PrintLabel/PrintLableList";
import AddOpeningStock from "./Components_temp/Inventory/AddOpeningStock/AddOpeningStock";
import NewOrder from "./Components_temp/Purchase/NewOrder/NewOrder";
import PurchaseOrder from "./Components_temp/Purchase/PurchaseOrder/PurchaseOrder";
import DeleteRequestedPurchase from "./Components_temp/Purchase/DeleteRequestedPurchase/DeleteRequestedPurchase";
import PurchaseReturnOrderList from "./Components_temp/Purchase/PurchaseReturnOrderList/PurchaseReturnOrderList";
import Fleet from "./Components_temp/Purchase/Fleet/Fleet";




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

        {/* Add Opening Stock */}
        <Route
          path="/addopeningstock"
          element={
            <Layout>
              <AddOpeningStock />
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
<Route
  path="/variantList"      // or "/variant-list"
  element={
    <Layout>
      <VariantList />
    </Layout>
  }
/>
<Route
  path="/printLabel"
  element={
    <Layout>
      <PrintLabelList />
    </Layout>
  }
  />
 
 <Route
  path="/NewOrder"
  element={
    <Layout>
      <NewOrder />
    </Layout>
  }
  />
  <Route
  path="/PurchaseOrder"
  element={
    <Layout>
      <PurchaseOrder />
    </Layout>
  }
  />
  <Route
  path="/DeleteRequestedPurchase"
  element={
    <Layout>
      <DeleteRequestedPurchase />
    </Layout>
  }
  />
 
  <Route
  path="/PurchaseReturnOrderList"
  element={
    <Layout>
      <PurchaseReturnOrderList />
    </Layout>
  }
  />
  <Route
  path="/Fleet"
  element={
    <Layout>
      <Fleet />
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
