import React from "react";
import { Link } from "react-router-dom";
import account from "../assets/account1.jpg";

const About = () => {
  return (
    <div className="about__container">
      <h1>Who are we?</h1>
      <p className="about__container__text">
        Honora Consult and Services offers you an array of business skills,
        ideas and direction your business should take to hit those dreams.
      </p>
      <div className="other__details">
        <img src={account} alt="account" />

        <div className="about__text">
          <h1>We are Honora!</h1>
          <p>
            Honora Consult is a firm set up to solve hidden problems that may be
            plaguing your business. We proffer solution to complex situation
            that may be causing losses and stagnation to growth in Revenue and
            profit.
          </p>
          <Link className="about__link" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
