import React from "react";
import "./pages.style.css";
import serviceData from "../components/servicesdata";
import { Link } from "react-router-dom";

const Services = (props) => {
  const serviceList = serviceData.map(({ id, heading, desc, icon }) => {
    return (
      <Link to={`/service/${id}`} key={id}>
        <div className="service">
          <span class="material-icons">{icon}</span>
          <h3>{heading}</h3>
          <p>{desc.substring(0, 50)} ...Read more</p>
        </div>
      </Link>
    );
  });

  return (
    <div id={props.id} className="services__container">
      <h1>Professional Services</h1>
      <div className="services">{serviceList}</div>
    </div>
  );
};

export default Services;
