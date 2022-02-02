import React from "react";
import { Link } from "react-router-dom";
import account from "../assets/account1.jpg";

const About = () => {
  return (
    <div className="about__container">
      <h1>Who are we?</h1>
      <p className="about__container__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sed
        reiciendis optio, illum nostrum facere fuga iure aliquid architecto
        voluptatibus at quidem iusto facilis eveniet, ducimus expedita
        temporibus exercitationem consectetur?
      </p>
      <div className="other__details">
        <img src={account} alt="account" />

        <div className="about__text">
          <h1>We are Honora!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt in
            beatae debitis quibusdam non quod quia eius, dignissimos rem magnam
            quis fugit libero id, illo inventore ipsam ab accusantium! Facilis
            maiores illum molestias iusto corrupti laboriosam
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
