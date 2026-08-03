import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="admin-info">
        <img src="/icons/admin.png" alt="Admin" className="admin-avatar" />
        <p className="admin-name">admin</p>
      </div>
      <nav className="sidebar-menu">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/passengers" className="menu-item active">View All Passengers</Link>
        <Link to="/financial-reports" className="menu-item active">Financial Reports</Link>
        <Link to="/station-passengers" className="menu-item">Passenger Per Station</Link>
        <Link to="/search-passenger" className="menu-item">Search Passenger</Link>
        <Link to="/analytics" className="menu-item">Analytics</Link>
        <Link to="/dashboard" className="menu-item">Dashboard</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
