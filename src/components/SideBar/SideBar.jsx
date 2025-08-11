import React, { useState } from "react";
import "./SideBar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"; // ✅ You already had this

function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Menu Data (unchanged)
  const menus = [
    { name: "Product", submenu: ["Add Product", "Manage Products", "Categories"] },
    { name: "Inventory", submenu: ["Stock List", "Stock In", "Stock Out"] },
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
      <div className="sidebar-header">
        <h1>Raibs ERP</h1>
        <img src="/vite.svg" alt="Vite logo" className="logo" />
      </div>

      <div className="sidebar-menu">
        {/* Dashboard */}
        <button className="menu-btn">Dashboard</button>

        {/* Dynamic Menu Rendering */}
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

            {/* submenu */}
            <div className={`submenu ${openMenu === menu.name ? "open" : ""}`}>
              {menu.submenu.map((item) =>
                item === "Add Product" ? (
                  // ✅ Changed here: use React Router Link
                  <Link to="/addproduct" key={item}>
                    {item}
                  </Link>
                ) : (
                  <a href="#" key={item}>
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        ))}

        {/* Static items */}
        <button className="menu-btn">Reports</button>
        <button className="menu-btn">Backup</button>
      </div>
    </div>
  );
}

export default SideBar;
