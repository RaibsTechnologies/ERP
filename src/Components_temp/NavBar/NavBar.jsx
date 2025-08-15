import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUserCircle, FaSearch, FaBars } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <nav className="navbar-container">
      {/* Left side - Hamburger + Search */}
      <div className="navbar-container_left">
        <button
          className={`navbar-toggle-btn ${sidebarOpen ? "desktop-hide" : ""}`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <div className="navbar-container_left-search-box">
          <input className="navbar-container_left-search-box__input" type="text" placeholder="Search..." />
          <FaSearch className="navbar-container_left-search-icon" />
        </div>
      </div>

      {/* Right side - POS, profile, notifications */}
      <div className="navbar-container_right">
        <Link to="/pos" className="navbar-container_right-pos-link">POS</Link>
        <FaUserCircle className="navbar-container_right-icon" title="Profile" />
        <FaBell className="navbar-container_right-icon" title="Notifications" />
      </div>
    </nav>
  );
};

export default NavBar;
