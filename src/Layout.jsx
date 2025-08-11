import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
