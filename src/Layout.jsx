import React from "react";
import SideBar from "./Components_temp/SideBar/SideBar";
import NavBar from "./Components_temp/NavBar/NavBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="main-area">
        <NavBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
