import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Banner from "../../assets/adidas_banner.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={Banner} alt="adidas_banner" className="banner"></img>
      </Link>
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
