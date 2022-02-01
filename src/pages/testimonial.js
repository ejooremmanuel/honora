import React from "react";
import "./pages.style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Testimonial = () => {
  return (
    <div className="testimonial__container">
      <h1>Testimonials</h1>

      <Carousel
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        centerMode={true}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className="testimonial__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolorum veniam libero reiciendis corrupti eos assumenda harum totam
            ab dolores iste ipsum accusantium possimus, temporibus provident
            vero itaque aliquid minus.
          </p>
          <span>-Ejoor Emmanuel (Lotus)</span>
        </div>
        <div className="testimonial__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolorum veniam libero reiciendis corrupti eos assumenda harum totam
            ab dolores iste ipsum accusantium possimus, temporibus provident
            vero itaque aliquid minus.
          </p>
          <span style={{ marginBottom: "30px" }}>-Ejoor Emmanuel (Lotus)</span>
        </div>
        <div className="testimonial__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolorum veniam libero reiciendis corrupti eos assumenda harum totam
            ab dolores iste ipsum accusantium possimus, temporibus provident
            vero itaque aliquid minus.
          </p>
          <span style={{ marginBottom: "30px" }}>-Ejoor Emmanuel (Lotus)</span>
        </div>
        <div className="testimonial__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolorum veniam libero reiciendis corrupti eos assumenda harum totam
            ab dolores iste ipsum accusantium possimus, temporibus provident
            vero itaque aliquid minus.
          </p>
          <span style={{ marginBottom: "30px" }}>-Ejoor Emmanuel (Lotus)</span>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
