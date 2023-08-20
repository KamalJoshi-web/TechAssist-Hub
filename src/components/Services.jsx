import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Web from "../assets/web.jpg";

import Coding from "../assets/coo.jpg";

const Services = () => {
  const imgs = [Web, Coding];
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        interval={2000}
      >
        {imgs.map((item, index) => (
          <img src={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
