import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./pages.style.css";
import Services from "./services";
import Testimonial from "./testimonial";

const Homepage = () => {
  return (
    <div>
      <Navbar background="white" color="blue" />
      <div className="herosection">
        <h1>Better Business with Honora!</h1>
        <Link to="/">Request a Call</Link>
      </div>
      <Services id="services" />
      <Testimonial />
    </div>
  );
};

export default Homepage;
