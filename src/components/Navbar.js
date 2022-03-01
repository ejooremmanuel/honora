/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./components.style.css";
import { Link } from "react-router-dom";
import { Menu } from "@rsuite/icons";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.jpeg";

const NavbarComp = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  React.useEffect(() => {
    document.addEventListener(
      "scroll",
      (window.onscroll = () => {
        if (window.pageYOffset > 0) {
          document.getElementById("navbar").classList.add("containerScroll");
        } else {
          // alert("hey");
          // document.getElementById("navbar").classList.remove("sticky");
        }
      })
    );
  }, []);

  return (
    <>
      {showSidebar ? (
        <Sidebar />
      ) : (
        <div
          className="container"
          id="navbar"
          style={{
            backgroundColor: props.background || "white",
            color: props.color || "blue",
          }}
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Honora Consult" />
            </Link>
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
