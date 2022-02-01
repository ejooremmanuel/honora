/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./components.style.css";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <>
      {showIcon ? (
        <CloseIcon />
      ) : (
        <MenuIcon onClick={() => setShowIcon(true)} />
      )}
      <div
        className="container"
        style={{
          backgroundColor: props.background || "white",
          color: props.color || "blue",
        }}
      >
        <div className="logo">Honora</div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="#services">Services</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
