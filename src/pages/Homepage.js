import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import "./pages.style.css";
import Services from "./services";
import Testimonial from "./testimonial";
const Homepage = () => {
  return (
    <div>
      <Navbar background="white" color="blue" />
      <div className="herosection">
        <h1 className="animate__bounce">Better Business with Honora!</h1>
        <Link to="/contact">Request a Call</Link>
      </div>
      <About id="about" />
      <Services id="services" />
      <Testimonial />
      <div className="counter__clients">
        <Counter />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
