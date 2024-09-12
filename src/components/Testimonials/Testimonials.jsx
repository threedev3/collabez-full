import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { testimonials } from "../../data/data";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
  const headRef = useRef(null);
  const textRef = useRef(null);

  const featureText = gsap.timeline({ paused: true });

  useGSAP(() => {
    featureText
      .from(headRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(textRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -300,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
  });

  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="lg:py-16 lg:px-8 px-4 py-8 max-w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-col gap-3">
              <p
                className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold"
                ref={headRef}
              >
                Testimonials
              </p>
              <p className="text-introColor lg:text-base text-sm" ref={textRef}>
                We never faill to deliver desired result with E4!!{" "}
              </p>
            </div>
          </div>

          <div className="max-w-full mx-auto py-10">
            <div className="my-auto ">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
