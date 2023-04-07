/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header__container">
      <div className="Header__ancherTag">
        <a href="#">Start Here</a>
        <a href="#">Popular</a>
        <a href="#">Archies</a>
        <Link to="/">
          <a className="Header__ancherTag__Logo" href="#">
            N/S
          </a>
        </Link>
        <a href="#">Course</a>
        <a href="#">Magazines</a>
        <a href="#">Write For Us</a>
        <Link to="/bict">Link</Link>
      </div>
    </div>
  );
}

export default Header;
