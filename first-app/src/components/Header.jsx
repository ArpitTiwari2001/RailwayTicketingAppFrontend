import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">SoT Railways Ticketing System</h1>
      <nav>
        <a href="/" className="nav-link">Home</a>
        <a href="/logout" className="nav-link logout">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
