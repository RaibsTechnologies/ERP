import React from "react";
import SideBar from "./Components/SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, padding: "20px", background: "#f5f5f5" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
