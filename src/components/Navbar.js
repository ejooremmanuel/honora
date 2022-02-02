/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./components.style.css";
import { Link } from "react-router-dom";
import { Menu } from "@rsuite/icons";
import Sidebar from "./Sidebar";

const NavbarComp = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <Sidebar />
      ) : (
        <div
          className="container"
          style={{
            backgroundColor: props.background || "white",
            color: props.color || "blue",
          }}
        >
          <div className="logo">
            <Link to="/">Honora</Link>
          </div>

          <div className="links">
            <Menu
              className="showMenu"
              onClick={() => {
                setShowSidebar(true);
              }}
            />
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="#services">Services</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComp;
