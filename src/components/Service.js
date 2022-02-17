import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import serviceData from "./servicesdata";

const ServiceComp = (props) => {
  const { id } = useParams();

  const filteredService = serviceData.filter((service) => {
    return service.id === id;
  });

  return (
    <>
      <Navbar />
      {filteredService.map((service) => {
        return (
          <>
            <div key={service.id} className="single__service">
              <div className="service__heading">
                <h3>
                  <span>Service</span>
                  <span>{service.heading}</span>
                </h3>
              </div>

              <p className="service__desc">{service.desc}</p>
            </div>
            <Footer />
          </>
        );
      })}
    </>
  );
};

export default ServiceComp;
