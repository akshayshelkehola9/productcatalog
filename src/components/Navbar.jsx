import React, { useState } from "react";
import "./Navbar.css";
import eshop_logo from "./assets/images/eshop_logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <img className="eshop-logo" src={eshop_logo} alt="eshop_logo" />
      </Link>
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-link">
          <Link to="/home">HOME</Link>
        </li>
        <li className="nav-link">
          <Link to="/product-catalog">PRODUCTS</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
      <div className="search">
        <input className="input-search" type="text" placeholder="search..." />
        <IoSearchOutline className="search-icon" />
      </div>

      <div className="cart">
        <Link to="/cart">
          <CiShoppingCart className="cart-icon" />
        </Link>
        <div className="cart-count">0</div>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <RxCross2 className="close-icon" />
        ) : (
          <IoMenu className="menu-icon" />
        )}
      </div>
      <div className="user-section">
        <div className="sign-in">
          <Link to="/sign-in">SignIn</Link>
        </div>
        <hr />
        <div className="sign-up">
          <Link to="/sign-up">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
