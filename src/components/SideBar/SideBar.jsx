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
        {name: "Product List",link: "/productlist" },
        { name: "Draft Product List", link: "/Draft Product List" },
        { name: "Category", link: "/Category" },
        { name: "Brand", link: "/Brand" },
        { name: "Model", link: "/Model" },
        { name: "Unit Type", link: "/Unit Type" },
        { name: "Variant", link: "/Variant" },
        { name: "Print Label", link: "/Print Label" },
      ],
    },
    {
      name: "Inventory",
      submenu: [
        { name: "Add Opening Stock", link: "/addopeningstock" },
        { name: "Stock Management", link: "/stockmanagement" },
        { name: "Product Costing Sales", link: "/productcostingsales" },
        { name: "Stock Transfer", link: "/stocktransfer" },
        { name: "Receive Transfer Product", link: "/receivetransferproduct" },
        { name: "Stock List", link: "/stocklist" },
        { name: "Product Movement", link: "/productmovement" },
        { name: "Stock Adjustments", link: "/stockadjustments" },
        { name: "Product Information", link: "/productinformation" }
      ]
    },
    {
      name: "Sales",
      submenu: [
        { name: "New Sales", link: "/newsales" },
        { name: "Invoice", link: "/invoice" },
        { name: "Conditional Sales", link: "/conditionalsales" },
        { name: "Recurring Invoice", link: "/recurringinvoice" },
        { name: "POS", link: "/pos" },
        { name: "POS Sale", link: "/possale" },
        { name: "All Invoice", link: "/allinvoice" },
        { name: "Quotations", link: "/quotations" },
        { name: "Sale Return", link: "/salereturn" },
        { name: "Canceled Invoice", link: "/canceledinvoice" },
        { name: "Delete Requested Sale", link: "/deleterequestedsale" }
      ]
    },
    {
      name: "Purchase",
      submenu: [
        { name: "New Order", link: "/neworder" },
        { name: "Purchase Orders", link: "/purchaseorders" },
        { name: "Delete Requested Purchase", link: "/deleterequestedpurchase" },
        { name: "Suggested List", link: "/suggestedlist" },
        { name: "Purchase Return List", link: "/purchasereturnlist" },
        { name: "Fleet", link: "/fleet" }
      ]
    },
    {
      name: "Distribution",
      submenu: [
        { name: "Route planner", link: "/routeplanner" },
        { name: "Sales invoice", link: "/salesinvoice" },
        { name: "Pending payments", link: "/pendingpayments" },
        { name: "Stock Transfer", link: "/stocktransfer" },
        { name: "Approved payments", link: "/approvedpayments" },
        {
          name: "Sales Target",
          children: [
            { name: "Generate", link: "/generate" }
          ]
        },
        {
          name: "Product",
          children: [
            { name: "User Assign", link: "/userassign" }
          ]
        },
        { name: "Stock adjust", link: "/stockadjust" },
        { name: "Route", link: "/route" }
      ]
    },
    {
      name: "Production",
      submenu: [
        { name: "Add bill of materials", link: "/addbillofmaterials" },
        { name: "Bill of Materials", link: "/billofmaterials" },
        { name: "Add assembly", link: "/addassembly" },
        { name: "Assemblies", link: "/assemblies" },
        { name: "Add Disassembly", link: "/adddisassembly" },
        { name: "Disassembles", link: "/disassembles" }
      ]
    },
    {
      name: "Contacts",
      submenu: [
        { name: "Add Contacts", link: "/addcontacts" },
        { name: "Contact Type", link: "/contacttype" },
        { name: "Contact Category", link: "/contactcategory" },
        { name: "Supplier", link: "/supplier" },
        { name: "Customer", link: "/customer" },
        {
          name: "Retailer",
          children: [
            { name: "Retailer List", link: "/retailerlist" }
          ]
        }
      ]
    },
    {
      name: "Human Resource",
      submenu: [
        { name: "Staff List", link: "/stafflist" },
        { name: "Department", link: "/department" },
        { name: "Event", link: "/event" },
        { name: "Holiday Setup", link: "/holidaysetup" },
        { name: "Attendance", link: "/attendance" },
        { name: "Payroll", link: "/payroll" },
        { name: "Unlock User", link: "/unlockuser" }
      ]
    },
    {
      name: "Account",
      submenu: [
        {
          name: "Account List",
          children: [
            { name: "Chart Of Accounts", link: "/chartofaccounts" },
            { name: "Partner Account", link: "/partneraccount" }
          ]
        },
        {
          name: "Receivable",
          children: [
            { name: "Receivable", link: "/receivable" },
            { name: "Voucher Receive", link: "/voucherreceive" }
          ]
        },
        {
          name: "Payable",
          children: [
            { name: "Payable", link: "/payable" },
            { name: "Voucher Payment", link: "/voucherpayment" }
          ]
        },
        {
          name: "Journal",
          children: [
            { name: "Journal", link: "/journal" },
            { name: "Voucher Approval", link: "/voucherapproval" }
          ]
        },
        {
          name: "Contra",
          children: [
            { name: "Contra", link: "/contra" }
          ]
        },
        { name: "Transactions", link: "/transactions" },
        { name: "Banking", link: "/banking" },
        { name: "Expense", link: "/expense" },
        { name: "Income", link: "/income" },
        { name: "Cashbook", link: "/cashbook" }
      ]
    },
    {
      name: "Others",
      submenu: [
        { name: "All Activity Logs", link: "/allactivitylogs" },
        { name: "Location", link: "/location" }
      ]
    },
    {
      name: "Settings",
      submenu: [
        { name: "System Settings", link: "/systemsettings" },
        { name: "Custom SMS Gateway", link: "/customsmsgateway" },
        { name: "Intro Prefix List", link: "/introprefixlist" },
        {
          name: "Notifications",
          children: [
            { name: "Notification List", link: "/notificationlist" },
            { name: "Settings", link: "/settings" }
          ]
        },
        { name: "File Storage", link: "/filestorage" },
        { name: "Company List", link: "/companylist" },
        { name: "Recurring Frequency", link: "/recurringfrequency" },
        { name: "Pay Terms", link: "/payterms" },
        {
          name: "GST / TAX / VAT",
          children: [
            { name: "Product TAX", link: "/producttax" }
          ]
        },
        { name: "Currency Settings", link: "/currencysettings" },
        { name: "POS Settings", link: "/possettings" },
        { name: "Sale Settings", link: "/salesettings" },
        { name: "Invoice Settings", link: "/invoicesettings" },
        { name: "Purchase Settings", link: "/purchasesettings" },
        { name: "Customer Settings", link: "/customersettings" },
        { name: "Invoice NO Settings", link: "/invoicenosettings" },
        { name: "2FA Settings", link: "/2fasettings" },
        {
          name: "Accounting Settings",
          children: [
            { name: "Entry System", link: "/entrysystem" },
            { name: "Settings", link: "/settings" },
            { name: "Report", link: "/report" },
            { name: "Financial Years", link: "/financialyears" }
          ]
        }
      ]
    },
    {
      name: "Whatsapp",
      submenu: [
        { name: "My devices", link: "/mydevices" },
        { name: "Central device", link: "/centraldevice" },
        { name: "Message History", link: "/messagehistory" },
        { name: "Whatsapp settings", link: "/whatsappsettings" }
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
                          <span className={`arrow ${openSubMenu === item.name ? "open" : ""}`}>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </button>
                        <div className={`sub-submenu ${openSubMenu === item.name ? "open" : ""}`}>
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
