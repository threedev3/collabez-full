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
    <div className="lg:py-24 lg:px-8 py-16 px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Intro
          pageTitle="portfolio"
          mainTitle="Our Projects"
          para="We always try to implement our creative ideas at the highest level. You can see it by looking at our portfolio."
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
