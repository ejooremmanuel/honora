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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt in
              beatae debitis quibusdam non quod quia eius, dignissimos rem
              magnam quis fugit libero id, illo inventore ipsam ab accusantium!
              Facilis maiores illum molestias iusto corrupti laboriosam! In
              natus suscipit dolorum, repudiandae quisquam dignissimos
              perspiciatis beatae ratione debitis illum quas necessitatibus.
              Lorem, ipsum dolor sit Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
