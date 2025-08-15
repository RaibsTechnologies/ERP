import React, { useState } from "react";
import SideBar from "./Components_temp/SideBar/SideBar";
import NavBar from "./Components_temp/NavBar/NavBar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="layout">
      <SideBar isOpen={sidebarOpen} />
      <div className={`main-area ${!sidebarOpen ? "expanded" : ""}`}>
        <NavBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
