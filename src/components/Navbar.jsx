import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#1e1e1e", zIndex: 100 }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        <h3 style={{ padding: "20px", borderBottom: "2px solid #fff" }}>Social Media App</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
