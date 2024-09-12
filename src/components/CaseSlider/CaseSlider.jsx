import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Intro from "../Intro/Intro";
import { projects } from "../../data/data";
import CaseCard from "../CaseCard/CaseCard";

const CaseSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-full relative lg:py-8 py-8 lg:px-8 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Intro
          pageTitle="case study"
          mainTitle="Our Projects"
          para="We always try to implement our creative ideas at the highest level. You can see it by looking at our case study."
        />
        <div className="slider-container w-auto  ">
          <Slider {...settings}>
            {projects.map((item, index) => (
              <CaseCard key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CaseSlider;
