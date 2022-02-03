import { Close, Menu } from "@rsuite/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.style.css";

const Sidebar = () => {
  const [hideBar, setHideBar] = useState(false);
  return (
    <>
      {hideBar ? (
        <Menu
          style={{
            padding: "10px",
          }}
          onClick={() => {
            setHideBar(!hideBar);
          }}
        />
      ) : (
        <>
          <div className="sidebar__container">
            <div className="sidebar__subcontainer">
              <Close
                style={{ position: "absolute", top: "10px" }}
                onClick={() => {
                  setHideBar(!hideBar);
                }}
              />
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Home</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
