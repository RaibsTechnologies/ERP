import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import SideBar from "./Components/SideBar/SideBar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </Router>
  );
};

export default App;