import React, { useState } from "react";
import "./SideBar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Menu configuration with optional paths for submenus
  const menus = [
    { 
      name: "Product", 
      submenu: [
        { label: "Add Product", path: "/addproduct" },
        { label: "Manage Products" },
        { label: "Categories" }
      ] 
    },
    { 
      name: "Inventory", 
      submenu: [
        { label: "Stock List", path: "/stocklist" },
        { label: "Stock In" },
        { label: "Stock Out" }
      ] 
    },
    { name: "Sales", submenu: ["Orders", "Invoices", "Reports"] },
    { name: "Purchase", submenu: ["Suppliers", "Purchase Orders", "Bills"] },
    { name: "Distribution", submenu: ["Dispatch", "Logistics", "Tracking"] },
    { name: "Production", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Contacts", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Human Resource", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Account", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Others", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Settings", submenu: ["Work Orders", "Schedules", "Machines"] },
    { name: "Whatsapp", submenu: ["Work Orders", "Schedules", "Machines"] },
  ];

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <h1>Raibs ERP</h1>
        <img src="/vite.svg" alt="Vite logo" className="logo" />
      </div>

      {/* Menu items */}
      <div className="sidebar-menu">
        {/* Dashboard (static) */}
        <button className="menu-btn">Dashboard</button>

        {/* Dynamic Menus */}
        {menus.map((menu) => (
          <div key={menu.name} className="menu-section">
            <button
              className="menu-btn toggle"
              onClick={() => toggleMenu(menu.name)}
            >
              {menu.name}
              <span className={`arrow ${openMenu === menu.name ? "open" : ""}`}>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>

            {/* Submenu list */}
            <div className={`submenu ${openMenu === menu.name ? "open" : ""}`}>
              {menu.submenu.map((item) =>
                typeof item === "string" ? (
                  // when item is just a string (no path)
                  <a href="#" key={item}>
                    {item}
                  </a>
                ) : item.path ? (
                  // when submenu has a path -> use router Link
                  <Link to={item.path} key={item.label}>
                    {item.label}
                  </Link>
                ) : (
                  // when submenu object has no path
                  <a href="#" key={item.label}>
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        ))}

        {/* Static footer menu items */}
        <button className="menu-btn">Reports</button>
        <button className="menu-btn">Backup</button>
      </div>
    </div>
  );
}

export default SideBar;
