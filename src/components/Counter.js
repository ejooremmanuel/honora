import React from "react";
import CountUp from "react-countup";
import { Carousel } from "react-responsive-carousel";
import ror from "../assets/ror.png";
const Counter = () => {
  return (
    <div>
      <h1>Number of Happy Clients</h1>
      <CountUp end={100} className="countup" />
      <Carousel
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        centerMode={true}
        showStatus={false}
        infiniteLoop={true}
        interval={5000}
      >
        <div className="testimonial__content">
          <img src={ror} alt="" />
        </div>
        <div className="testimonial__content">
          <img src={ror} alt="" />
        </div>
        <div className="testimonial__content">
          <img src={ror} alt="" />
        </div>
        <div className="testimonial__content">
          <img src={ror} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Counter;
