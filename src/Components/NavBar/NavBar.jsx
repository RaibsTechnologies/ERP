import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Left side - Search */}
      <div className="navbar-left">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Right side - POS, profile, notifications */}
      <div className="navbar-right">
        <Link to="/pos" className="pos-link">POS</Link>
        <FaUserCircle className="icon" title="Profile" />
        <FaBell className="icon" title="Notifications" />
      </div>
    </nav>
  );
};

export default NavBar;
