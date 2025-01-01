import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="nav-list">
            <li className="logo">Untitled UI</li>
            <li>Home</li>
            <li>Products</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
