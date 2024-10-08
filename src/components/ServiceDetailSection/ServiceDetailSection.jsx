import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../../data/data";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import personImg from "../../assets/img/personImg.png";
import sendIcon from "../../assets/img/sendIcon.png";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useFormHandler from "../../hooks/useFormHandler";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ServiceDetailSection({ contactRef }) {
  const [selectedService, setSelectedService] = useState(null);
  const serviceHead = useRef(null);
  const borderRef = useRef(null);
  const serviceRef = useRef(null);
  const imgRef = useRef(null);
  const topRef = useRef(null);
  const sliderRef = useRef(null);
  const descRef = useRef(null);
  const workHeadRef = useRef(null);
  const workCardRef = useRef(null);
  const detailsRef = useRef(null);
  const listRef = useRef(null);
  const tabsRef = useRef(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const { email, setEmail, errors, handleNewsLetter } = useFormHandler();

  useEffect(() => {
    const service = services.find((s) => s.slug === slug);
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.location.reload();
  }, [slug]);

  const handleTabClick = (service) => {
    const serviceSlug = service.slug;
    navigate(`/services/${serviceSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.location.reload();
  };

  const sections = {
    Contact: contactRef,
  };

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const workingDetailsLines = selectedService?.workingDetails
    .split(".")
    .filter((line) => line.trim() !== "");

  useGSAP(() => {
    gsap.from(borderRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: borderRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(serviceRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(serviceHead.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceHead.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
  });

  useEffect(() => {
    if (selectedService) {
      gsap.from(sliderRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: sliderRef.current,
          toggleActions: "play none none none",
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
        },
      });
      gsap.from(descRef.current, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: descRef.current,
          toggleActions: "play none none none",
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
        },
      });
      gsap.from(workHeadRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: workHeadRef.current,
          toggleActions: "play none none none",
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
        },
      });
      gsap.from(workCardRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: workCardRef.current,
          toggleActions: "play none none none",
          start: "top 50%",
          end: "top 30%",
          // scrub: true,
        },
      });
      gsap.from(detailsRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: detailsRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
          // scrub: true,
        },
      });
      gsap.from(listRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: listRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
          // scrub: true,
        },
      });
    }
  }, [selectedService]);

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const handleChange = (event) => {
    const selectedService = services.find(
      (service) => service.title === event.target.value
    );
    handleTabClick(selectedService);
  };

  return (
    <div
      className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden overflow-y-hidden"
      ref={topRef}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-5 mb-12">
            <div className="flex flex-row items-center gap-4">
              <div
                className="w-16 h-0 border-[1px] border-serviceText"
                ref={borderRef}
              ></div>
              <div>
                <h3
                  className="text-serviceText lg:text-lg text-sm uppercase"
                  ref={serviceRef}
                >
                  Creative ideas
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
              <h3
                className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-bold"
                ref={serviceHead}
              >
                {selectedService?.serviceName}{" "}
                <span className="text-heroColor">
                  {selectedService?.serviceColorName}
                </span>
              </h3>
            </div>
          </div>

          <div className="lg:block lg:w-96 flex justify-end">
            <img
              src={personImg}
              alt=""
              ref={imgRef}
              className="object-cover lg:w-full w-72"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-3 flex flex-col gap-8">
          {selectedService && (
            <div className="flex flex-col gap-12 flex-1 lg:max-w-[70%] max-w-[100%]">
              <div className="lg:hidden block w-full bg-transparent">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md p-2 bg-transparent text-white shadow-sm sm:text-sm sm:leading-6 border-2 border-borderColor outline-none text-sm"
                  onChange={handleChange}
                >
                  {services.map((item, index) => (
                    <option
                      key={index}
                      className={`cursor-pointer text-white bg-borderColor w-full text-sm`}
                      onClick={() => handleTabClick(item)}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="slider-container w-auto " ref={sliderRef}>
                <Slider {...settings}>
                  {selectedService.sliderImages.map((img, index) => (
                    <div
                      className="md:h-[500px] sm:h-[400px] h-[270px] w-full"
                      key={index}
                    >
                      <img
                        src={img}
                        alt="sliderImg"
                        className="h-full w-full rounded-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="">
                <p
                  className="text-white xl:text-base text-sm md:leading-8 leading-6"
                  ref={descRef}
                >
                  {selectedService.description}
                </p>
              </div>

              <div className="flex flex-col gap-12 ">
                <div className="lg:absolute lg:bottom-40 lg:left-0 md:absolute md:left-0 md:bottom-[800px] absolute left-0 bottom=[700px] w-full h-[80vh] bg-[url('/src/assets/img/workingBg.png')] bg-no-repeat bg-cover bg-center "></div>

                <div className="sm:flex sm:flex-col sm:gap-12 flex flex-col gap-6 relative z-40">
                  <div>
                    <h3
                      className="text-white md:text-3xl text-2xl font-bold"
                      ref={workHeadRef}
                    >
                      Working Process
                    </h3>
                  </div>

                  <div
                    className="md:flex md:flex-row md:justify-start md:items-center md:flex-wrap md:gap-2 "
                    ref={workCardRef}
                  >
                    {selectedService.workingHead.map((item, index) => (
                      <div
                        className="md:w-[32%] w-full min-h-[260px] flex flex-col gap-8 items-center justify-center p-4 border-2 border-borderColor rounded-lg mb-3"
                        key={index}
                      >
                        <div>
                          <h3 className="uppercase text-heroColor text-xl">{`Step ${
                            index + 1
                          }`}</h3>
                        </div>
                        <div>
                          <h3 className="text-white text-lg text-center">
                            {item}
                          </h3>
                        </div>
                        <div>
                          <p className="text-white text-sm text-center">
                            {selectedService.workingPara[index]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div ref={detailsRef}>
                    {workingDetailsLines.map((line, index) => (
                      <p
                        key={index}
                        className="text-white xl:text-base text-sm mb-3"
                      >
                        {line.trim()}{" "}
                      </p>
                    ))}
                  </div>

                  <div>
                    <ul
                      className="flex flex-col gap-5 text-white xl:text-base text-sm"
                      ref={listRef}
                    >
                      {selectedService.workingItems.map((item, index) => (
                        <div
                          className="flex flex-row gap-5 items-center"
                          key={index}
                        >
                          <div className="w-2 h-2 rounded-full bg-heroColor"></div>
                          <li key={index}>{item}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="lg:flex lg:flex-col lg:gap-8 lg:max-w-[30%] flex flex-col justify-center items-center gap-5 max-w-[100%]">
            <div
              className="bg-tabsColor py-16 px-6 rounded-lg lg:w-72 w-full lg:block hidden"
              ref={tabsRef}
            >
              <ul className="flex flex-col gap-8">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer xl:text-base text-sm ${
                      selectedService?.title === item.title
                        ? "text-white"
                        : "text-tabsText"
                    }`}
                    onClick={() => handleTabClick(item)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black py-16 px-6 rounded-lg lg:w-72 w-full">
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg capitalize font-bold">
                    How Can we help you?
                  </h3>
                </div>

                <div>
                  <p className="text-white md:text-base text-sm">
                    Don't know where to start? We'll help you.
                  </p>
                </div>

                <div className="cursor-pointer z-30">
                  <button
                    className="text-heroColor border-b-2 border-heroColor uppercase text-sm"
                    onClick={() => handleNavClick("Contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-tabsColor py-16 px-6 rounded-lg lg:w-72 w-full">
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-white xl:text-xl lg:text-lg md:text-xl text-lg capitalize">
                    Newsletter
                  </h3>
                </div>

                <div className="">
                  <form
                    action=""
                    onSubmit={handleNewsLetter}
                    className="relative flex"
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-2 bg-transparent border-b-2 border-borderColor outline-none w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">
                      <img
                        src={sendIcon}
                        alt=""
                        className="absolute right-2 bottom-3 w-5 cursor-pointer"
                      />
                    </button>
                  </form>
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                <div className="flex gap-5 items-center text-white text-sm">
                  <div className="uppercase">fb</div>
                  <div className="w-2 h-2 rounded-full bg-heroColor"></div>
                  <div className="uppercase">lin</div>
                  <div className="w-2 h-2 rounded-full bg-heroColor"></div>
                  <div className="uppercase">inst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailSection;
