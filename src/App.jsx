import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components/LoginPage/Login";
import AddProduct from "./Components/Product/AddProduct/AddProduct";
import DashBoard from "./Components/DashBoard/DashBoard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Layout><DashBoard /></Layout>}
        />

        <Route
          path="/addproduct"
          element={<Layout><AddProduct /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
