import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components/LoginPage/Login";
import AddProduct from "./Components/Product/AddProduct/AddProduct";
import StockList from "./Components/Inventory/StockList/StockList"; // ✅ Path now exactly correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/sidebar"
          element={<Layout><div>Welcome to Dashboard</div></Layout>}
        />

        <Route
          path="/addproduct"
          element={<Layout><AddProduct /></Layout>}
        />

        <Route
          path="/stocklist"
          element={<Layout><StockList /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
