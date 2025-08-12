import React, { useState } from "react";
import "./SideBar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function SideBar() {
  const [openMainMenu, setOpenMainMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMainMenu = (menu) => {
    setOpenMainMenu(openMainMenu === menu ? null : menu);
    setOpenSubMenu(null); // close any submenus when main changes
  };

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  // Menu Data
  const menus = [
    {
      name: "Product",
      submenu: [
        { name: "Add Product", link: "/addproduct" },
        { name: "Product List", link: "/productlist" },
        { name: "Draft Product List", link: "/Draft Product List" },
        { name: "Category", link: "/category" },
        { name: "Brand", link: "/brandlist" },        // updated link
        { name: "Model", link: "/Model" },
        { name: "Unit Type", link: "/Unit Type" },
        { name: "Variant", link: "/Variant" },
        { name: "Print Label", link: "/Print Label" }
      ]
    },
    {
      name: "Inventory",
      submenu: [
        { name: "Add Opening Stock", link: "/Add Opening Stock" },
        { name: "Stock Management", link: "/stock Management" },
        { name: "Product Costing Sales", link: "/Product Costing Sales" },
        { name: "Stock Transfer", link: "/Stock Transfer" },
        { name: "Receive Transfer Product", link: "/Receive Transfer Product" },
        { name: "Stock List", link: "/StockList" },
        { name: "Product Movement", link: "/Product Movement" },
        { name: "Stock Adjustments", link: "/Stock Adjustments" },
        { name: "Product Information", link: "/Product Information" }
      ]
    },
    {
      name: "Sales",
      submenu: [
        { name: "New Sales", link: "/New Sales" },
        { name: "Invoice", link: "/Invoice" },
        { name: "Conditional Sales", link: "/Conditional Sales" },
        { name: "Recurring Invoice", link: "/Recurring Invoice" },
        { name: "POS", link: "/POS" },
        { name: "POS Sale", link: "/POS Sale" },
        { name: "All Invoice", link: "/All Invoice" },
        { name: "Quotations", link: "/Quotations" },
        { name: "Sale Return", link: "/Sale Return" },
        { name: "Canceled Invoice", link: "/Canceled Invoice" },
        { name: "Delete Requested Sale", link: "/Delete Requested Sale" }
      ]
    },
    {
      name: "Purchase",
      submenu: [
        { name: "New Order", link: "/New Order" },
        { name: "Purchase Orders", link: "/Purchase Orders" },
        { name: "Delete Requested Purchase", link: "/Delete Requested Purchase" },
        { name: "Suggested List", link: "/Suggested List" },
        { name: "Purchase Return List", link: "/Purchase Return List" },
        { name: "Fleet", link: "/Fleet" }
      ]
    },
    {
      name: "Distribution",
      submenu: [
        { name: "Route planner", link: "/Route planner" },
        { name: "Sales invoice", link: "/Sales invoice" },
        { name: "Pending payments", link: "/Pending payments" },
        { name: "Stock Transfer", link: "/Stock Transfer" },
        { name: "Approved payments", link: "/Approved payments" },
        {
          name: "Sales Target",
          children: [
            { name: "Generate", link: "/Generate" }
          ]
        },
        {
          name: "Product",
          children: [
            { name: "User Assign", link: "/User Assign" }
          ]
        },
        { name: "Stock adjust", link: "/Stock adjust" },
        { name: "Route", link: "/Route" }
      ]
    },
    {
      name: "Production",
      submenu: [
        { name: "Add bill of materials", link: "/Add bill of materials" },
        { name: "Bill of Materials", link: "/Bill of Materials" },
        { name: "Add assembly", link: "/Add assembly" },
        { name: "Assemblies", link: "/Assemblies" },
        { name: "Add Disassembly", link: "/Add Disassembly" },
        { name: "Disassembles", link: "/Disassembles" }
      ]
    },
    {
      name: "Contacts",
      submenu: [
        { name: "Add Contacts", link: "/Add Contacts" },
        { name: "Contact Type", link: "/Contact Type" },
        { name: "Contact Category", link: "/Contact Category" },
        { name: "Supplier", link: "/Supplier" },
        { name: "Customer", link: "/Customer" },
        {
          name: "Retailer",
          children: [
            { name: "Retailer List", link: "/Retailer List" }
          ]
        }
      ]
    },
    {
      name: "Human Resource",
      submenu: [
        { name: "Staff List", link: "/Staff List" },
        { name: "Department", link: "/Department" },
        { name: "Event", link: "/Event" },
        { name: "Holiday Setup", link: "/Holiday Setup" },
        { name: "Attendance", link: "/Attendance" },
        { name: "Payroll", link: "/Payroll" },
        { name: "Unlock User", link: "/Unlock User" }
      ]
    },
    {
      name: "Account",
      submenu: [
        {
          name: "Account List",
          children: [
            { name: "Chart Of Accounts", link: "/Chart Of Accounts" },
            { name: "Partner Account", link: "/Partner Account" }
          ]
        },
        {
          name: "Receivable",
          children: [
            { name: "Receivable", link: "/Receivable" },
            { name: "Voucher Receive", link: "/Voucher Receive" }
          ]
        },
        {
          name: "Payable",
          children: [
            { name: "Payable", link: "/Payable" },
            { name: "Voucher Payment", link: "/Voucher Payment" }
          ]
        },
        {
          name: "Journal",
          children: [
            { name: "Journal", link: "/Journal" },
            { name: "Voucher Approval", link: "/Voucher Approval" }
          ]
        },
        {
          name: "Contra",
          children: [
            { name: "Contra", link: "/Contra" }
          ]
        },
        { name: "Transactions", link: "/Transactions" },
        { name: "Banking", link: "/Banking" },
        { name: "Expense", link: "/Expense" },
        { name: "Income", link: "/Income" },
        { name: "Cashbook", link: "/Cashbook" }
      ]
    },
    {
      name: "Others",
      submenu: [
        { name: "All Activity Logs", link: "/All Activity Logs" },
        { name: "Location", link: "/Location" }
      ]
    },
    {
      name: "Settings",
      submenu: [
        { name: "System Settings", link: "/System Settings" },
        { name: "Custom SMS Gateway", link: "/Custom SMS Gateway" },
        { name: "Intro Prefix List", link: "/Intro Prefix List" },
        {
          name: "Notifications",
          children: [
            { name: "Notification List", link: "/Notification List" },
            { name: "Settings", link: "/Settings" }
          ]
        },
        { name: "File Storage", link: "/File Storage" },
        { name: "Company List", link: "/Company List" },
        { name: "Recurring Frequency", link: "/Recurring Frequency" },
        { name: "Pay Terms", link: "/Pay Terms" },
        {
          name: "GST / TAX / VAT",
          children: [
            { name: "Product TAX", link: "/Product TAX" }
          ]
        },
        { name: "Currency Settings", link: "/Currency Settings" },
        { name: "POS Settings", link: "/POS Settings" },
        { name: "Sale Settings", link: "/Sale Settings" },
        { name: "Invoice Settings", link: "/Invoice Settings" },
        { name: "Purchase Settings", link: "/Purchase Settings" },
        { name: "Customer Settings", link: "/Customer Settings" },
        { name: "Invoice NO Settings", link: "/Invoice NO Settings" },
        { name: "2FA Settings", link: "/2FA Settings" },
        {
          name: "Accounting Settings",
          children: [
            { name: "Entry System", link: "/Entry System" },
            { name: "Settings", link: "/Settings" },
            { name: "Report", link: "/Report" },
            { name: "Financial Years", link: "/Financial Years" }
          ]
        }
      ]
    },
    {
      name: "Whatsapp",
      submenu: [
        { name: "My devices", link: "/My devices" },
        { name: "Central device", link: "/Central device" },
        { name: "Message History", link: "/Message History" },
        { name: "Whatsapp settings", link: "/Whatsapp settings" }
      ]
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Raibs ERP</h1>
        <img src="/vite.svg" alt="Vite logo" className="logo" />
      </div>

      <div className="sidebar-menu">
        {/* Dashboard */}
        <Link to="/dashboard" className="menu-btn">
          Dashboard
        </Link>

        {/* Dynamic Menu Rendering */}
        {menus.map((menu) => (
          <div key={menu.name} className="menu-section">
            {/* Main menu */}
            <button
              className="menu-btn toggle"
              onClick={() => toggleMainMenu(menu.name)}
            >
              {menu.name}
              <span className={`arrow ${openMainMenu === menu.name ? "open" : ""}`}>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>

            {/* Submenu */}
            <div className={`submenu ${openMainMenu === menu.name ? "open" : ""}`}>
              {menu.submenu.map((item) => {
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div key={item.name} className="submenu-item">
                    {hasChildren ? (
                      <>
                        <button
                          className="submenu-btn toggle nested"
                          onClick={() => toggleSubMenu(item.name)}
                        >
                          {item.name}
                          <span
                            className={`arrow ${openSubMenu === item.name ? "open" : ""}`}
                          >
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </button>
                        <div
                          className={`sub-submenu ${openSubMenu === item.name ? "open" : ""}`}
                        >
                          {item.children.map((child) => (
                            <Link key={child.name} to={child.link}>
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link to={item.link}>{item.name}</Link>
                    )}
                  </div>
                );
              })}
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
