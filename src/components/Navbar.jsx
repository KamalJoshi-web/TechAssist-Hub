import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <h1>
        TechAssist <span>Hub</span>
      </h1>
      <div>
        <HashLink to="/#home">Home</HashLink>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <HashLink to="/#about">About</HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
