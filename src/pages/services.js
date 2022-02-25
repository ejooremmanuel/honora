import React from "react";
import "./pages.style.css";
import serviceData from "../components/servicesdata";
import { Link } from "react-router-dom";

const Services = (props) => {
  const serviceList = serviceData.map(({ id, heading, desc, icon }) => {
    return (
      <Link to={`/our-service/${heading.replace(/\s/g, "-")}/${id}`} key={id}>
        <div className="service">
          <span className="material-icons">{icon}</span>
          <h3>{heading}</h3>
          <p>{desc.substring(0, 100)} ...Read more</p>
        </div>
      </Link>
    );
  });

  return (
    <div id={props.id} className="services__container">
      <h1>HONORA CONSULT AT A GLANCE</h1>
      <div className="services">{serviceList}</div>
    </div>
  );
};

export default Services;
