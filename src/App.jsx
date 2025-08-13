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

import DraftProduct from "./Components_temp/Product/DraftProduct/DraftProduct";
import ComboDraftProductList from "./Components_temp/Product/DraftProduct/ComboDraftProduct";

import VariantList from "./Components_temp/Product/Variant/VariantList";
import PrintLabelList from "./Components_temp/Product/PrintLabel/PrintLableList";
import SalesList from "./Components_temp/Sales/NewSale/SaleList"; 
import InvoiceList from "./Components_temp/Sales/Invoice/InvoiceList";
import ConditionalSaleList from "./Components_temp/Sales/ConditionalSale/ConditionalSaleList";
import RecurringInvoice from "./Components_temp/Sales/RecurringInvoice/RecurringInvoice";
import POSSale from "./Components_temp/Sales/POS Sale/POSSale";
import Allinvoice from "./Components_temp/Sales/All Invoice/AllInvoice";
import Quotations from "./Components_temp/Sales/Quotations/Quotations";
import SaleReturn from "./Components_temp/Sales/SaleReturn/SaleReturn";
import CanceledInvoice from "./Components_temp/Sales/CanceledInvoice/CanceledInvoice";
import DeleteReqSale from "./Components_temp/Sales/DeleteReqSale/DeleteReqSale";
import AddOpeningStock from "./Components_temp/Inventory/AddOpeningStock/AddOpeningStock";
import ReceivePurchaseOrders from "./Components_temp/Inventory/ReceivePurchaseOrders/ReceivePurchaseOrders";
import ProductCostingSales from "./Components_temp/Inventory/ProductCostingSales/ProductCostingSales";
import StockTransfer from "./Components_temp/Inventory/StockTransfer/StockTransfer";
import ReceiveTransferProduct from "./Components_temp/Inventory/ReceiveTransferProduct/ReceiveTransferProduct";
import ProductMovement from "./Components_temp/Inventory/ProductMovement/ProductMovement";
import StockAdjustments from "./Components_temp/Inventory/StockAdjustments/StockAdjustments";
import ProductInfo from "./Components_temp/Inventory/ProductInfo/ProductInfo";


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
        {/* DraftProduct */}
        <Route
          path="/draftproduct"
          element={
            <Layout>
              < DraftProduct/>
            </Layout>
          }
        />
        <Route
          path="/draftcomboproducts"
          element={
            <Layout>
              < ComboDraftProductList/>
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

        {/* Receive Purchase Orders */}
        <Route
          path="/Receive Purchase Orders"
          element={
            <Layout>
              <ReceivePurchaseOrders /> 
            </Layout>
          }
        />

        {/* Product Costing Sales */}
        <Route
          path="/productcostingsales"
          element={
            <Layout>
              <ProductCostingSales />
            </Layout>
          }
        />

        {/* Stock Transfer*/}
        <Route 
          path="/stocktransfer"
          element={
            <Layout>
              <StockTransfer />
            </Layout>
          }
        />

        {/* Receive Transfer Product */}
        <Route
          path="/receivetransferproduct"
          element={
            <Layout>
              <ReceiveTransferProduct />
            </Layout>
          }
        />

        {/* Product Movement */}
        <Route
          path="/productmovement"
          element={
            <Layout>
              <ProductMovement />
            </Layout>
          }
        />

        {/* Stock Adjustments */}
        <Route
          path="/stockadjustments"
          element={
            <Layout>
              <StockAdjustments />
            </Layout>
          }
        />

        {/* Product Info*/}
        <Route
          path="/productinfo"
          element={
            <Layout>
              <ProductInfo />
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
  <Route path="/SalesList" element={<Layout><SalesList /></Layout>} />
  <Route path="/invoicelist" element={<Layout><InvoiceList /></Layout>} />
   <Route path="/conditionalsales" element={<Layout><ConditionalSaleList /></Layout>} />
   <Route path="/recurringinvoice" element={<Layout><RecurringInvoice /></Layout>} />
    <Route path="/possale" element={<Layout><POSSale/></Layout>} />
    <Route path="/allinvoice" element={<Layout><Allinvoice/></Layout>} />
     <Route path="/quotations" element={<Layout><Quotations/></Layout>} />
     <Route path="/salereturn" element={<Layout><SaleReturn/></Layout>} />
      <Route path="/canceledinvoice" element={<Layout><CanceledInvoice/></Layout>} />
       <Route path="/deleterequestedsale" element={<Layout><DeleteReqSale/></Layout>} />
 


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
