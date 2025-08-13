import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
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
