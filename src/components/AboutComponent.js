import React from "react";
import Navbar from "./Navbar";
import "./components.style.css";
import account from "../assets/account2.jpg";

const AboutComponent = () => {
  return (
    <div className="about__container__comp">
      <Navbar />
      <div>
        <div className="service__heading">
          <h1>About Us</h1>
        </div>
        <div
          className="other__details"
          style={{ marginTop: "20px", padding: "20px" }}
        >
          <img
            style={{ width: "400px", height: "500px" }}
            src={account}
            alt="account"
          />

          <div className="about__text">
            <h1 style={{ color: "blue" }}>We are Honora!</h1>
            <p>
              Honora Consult is a firm set up to solve hidden problems that may
              be plaguing your business. We proffer solution to complex
              situation that may be causing losses and stagnation to growth in
              Revenue and profit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
