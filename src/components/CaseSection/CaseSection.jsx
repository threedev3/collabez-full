import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Intro from "../Intro/Intro";
import uiux from "../../assets/img/uiux.jpg";
import appDev from "../../assets/img/appdev.jpg";
import webDev from "../../assets/img/webdev.jpg";
import CaseSlider from "../CaseSlider/CaseSlider";
import { projects } from "../../data/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import sendIcon from "../../assets/img/sendIcon.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import useFormHandler from "../../hooks/useFormHandler";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function CaseSection({ contactRef }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);
  const abtRef = useRef(null);
  const descRef = useRef(null);
  const lineRef = useRef(null);
  const detailRef1 = useRef(null);
  const detailRef2 = useRef(null);
  const lineRef2 = useRef(null);
  const webRef = useRef(null);
  const tabsRef = useRef(null);
  const contactTabRef = useRef(null);
  const newsTabRef = useRef(null);

  const { email, setEmail, errors, handleNewsLetter } = useFormHandler();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: 0,
          top: "105%",
        }}
        onClick={onClick}
      >
        <p className="absolute top-0 text-base text-heroColor right-0 cursor-pointer border-b-2 border-b-heroColor">
          NEXT
        </p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: 0,
          top: "105%",
        }}
        onClick={onClick}
      >
        <p className="absolute top-0 text-base text-white left-0 cursor-pointer border-b-2 border-b-white">
          PREV
        </p>
      </div>
    );
  }

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const project = projects.find((p) => p.slug === slug);
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleTabClick = (project) => {
    const projectSlug = project.slug;
    navigate(`/casestudy/${projectSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to top on tab click
    // window.location.reload(); // Forces a full page reload
  };

  const handleChange = (event) => {
    const selectedProject = projects.find(
      (project) => project.title === event.target.value
    );
    handleTabClick(selectedProject);
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

  useEffect(() => {
    if (selectedProject) {
      gsap.from(sliderRef.current, {
        y: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sliderRef.current,
          toggleActions: "play none none none",
          start: "top 40%",
          end: "top 30%",
          // scrub: true,
        },
      });
      gsap.from(abtRef.current, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: abtRef.current,
          toggleActions: "play none none none",
          start: "top 80%",
          end: "top 60%",
          // markers: true,
          // scrub: true,
        },
      });
      gsap.from(descRef.current, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: descRef.current,
          toggleActions: "play none none none",
          start: "top 80%",
          end: "top 60%",
          // scrub: true,
        },
      });
      gsap.from(lineRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: lineRef.current,
          toggleActions: "play none none none",
          start: "top 80%",
          end: "top 60%",
          // scrub: true,
        },
      });
      gsap.from(detailRef1.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: detailRef1.current,
          toggleActions: "play none none none",
          start: "top 80%",
          end: "top 60%",
          // scrub: true,
        },
      });
      gsap.from(detailRef2.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: detailRef2.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
          // scrub: true,
        },
      });
      gsap.from(lineRef2.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: lineRef2.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
        },
      });
      gsap.from(webRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: webRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
        },
      });
      gsap.from(tabsRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: tabsRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
        },
      });
      gsap.from(contactTabRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: contactTabRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
        },
      });
      gsap.from(newsTabRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: newsTabRef.current,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top 50%",
        },
      });
    }
  }, [selectedProject]);

  return (
    <div className="lg:py-24 lg:px-8 py-16 px-8 overflow-hidden bg-[url('/src/assets/img/caseBg.png')] bg-no-repeat bg-cover bg-bottom max-w-full relative">
      <div className="max-w-[1400px] mx-auto">
        <Intro pageTitle="portfolio" mainTitle={`${selectedProject?.title}`} />
        <div className="lg:flex lg:flex-row lg:justify-between lg:item-center lg:gap-2 flex flex-col gap-8">
          {selectedProject && (
            <div className="flex flex-col gap-12 flex-1 lg:max-w-[70%] max-w-[100%]">
              <div className="lg:hidden block w-full bg-transparent ">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md p-2 bg-transparent text-white shadow-sm sm:text-sm sm:leading-6 border-2 border-borderColor outline-none text-sm "
                  onChange={handleChange}
                >
                  {projects.map((item, index) => (
                    <option
                      key={index}
                      className={`cursor-pointer text-white bg-borderColor w-full text-sm `}
                      onClick={() => handleTabClick(item)}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="slider-container w-auto " ref={sliderRef}>
                {/* <img src={serviceDemo} alt="" className="w-full" /> */}
                <Slider {...settings}>
                  {selectedProject?.sliderImages.map((img, index) => (
                    <div
                      className="lg:h-[600px] md:h-[500px] sm:h-[400px] h-[270px] w-full focus:outline-none"
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

              <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:mt-16 mt-8">
                <div ref={abtRef}>
                  <h2 className="text-white lg:text-2xl sm:text-xl text-xl font-bold">
                    About Project
                  </h2>
                </div>
                <div ref={descRef}>
                  <p className="text-serviceText sm:text-base text-sm ">
                    {selectedProject?.description}
                  </p>
                </div>

                <hr className="my-8 border-borderColor" ref={lineRef} />

                <div className="flex flex-col min-[420px]:gap-8 gap-4">
                  <div
                    className="min-[420px]:flex min-[420px]:flex-row min-[420px]:justify-between min-[420px]:items-center min-[420px]:gap-2 flex flex-col gap-3"
                    ref={detailRef1}
                  >
                    <div>
                      <h2 className="text-white font-bold sm:text-sm min-[420px]:text-xs text-sm min-[420px]:block flex justify-between">
                        Client:{" "}
                        <span className="text-serviceText sm:text-sm min-[420px]:text-xs text-sm sm:ml-2 min-[420px]:ml-0 ml-3 font-medium">
                          {selectedProject?.client}
                        </span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-white font-bold sm:text-sm min-[420px]:text-xs text-sm min-[420px]:block flex justify-between">
                        Start Date:{" "}
                        <span className="text-serviceText sm:text-sm min-[420px]:text-xs text-sm sm:ml-2 min-[420px]:ml-0 ml-3 font-medium ">
                          {selectedProject?.startDate}
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div
                    className="min-[420px]:flex min-[420px]:flex-row min-[420px]:justify-between min-[420px]:items-center min-[420px]:gap-2 flex flex-col gap-3"
                    ref={detailRef2}
                  >
                    <div>
                      <h2 className="text-white font-bold sm:text-sm min-[420px]:text-xs text-sm min-[420px]:block flex justify-between">
                        Category:{" "}
                        <span className="text-serviceText sm:text-sm min-[420px]:text-xs text-sm sm:ml-2 min-[420px]:ml-0 ml-3 font-medium">
                          {selectedProject?.category}
                        </span>
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-white font-bold sm:text-sm min-[420px]:text-xs text-sm min-[420px]:block flex justify-between">
                        Finish Date:{" "}
                        <span className="text-serviceText sm:text-sm min-[420px]:text-xs text-sm sm:ml-2 min-[420px]:ml-0 ml-3 font-medium">
                          {selectedProject?.endDate}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-borderColor" ref={lineRef2} />

                <Link to={selectedProject?.webUrl} target="__blank">
                  <button
                    className="py-3 px-6 border-2 border-heroColor rounded-full text-white text-base"
                    ref={webRef}
                  >
                    Visit Website
                  </button>
                </Link>
              </div>
            </div>
          )}
          <div className="lg:flex lg:flex-col lg:gap-8 lg:max-w-[30%] flex flex-col justify-start items-center gap-5 max-w-[100%]">
            <div
              className="bg-tabsColor py-16 px-6 rounded-lg lg:w-72 w-full h-[600px] lg:block hidden text-white"
              ref={tabsRef}
            >
              <h2 className="mb-6 text-xl font-semibold">Related Projects</h2>
              <div className="w-full h-[420px] overflow-y-auto cust-scroll">
                <ul className="flex flex-col gap-8">
                  {projects.map((item, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer xl:text-base text-sm flex flex-row items-center gap-3 ${
                        selectedProject?.title === item.title
                          ? "text-heroColor"
                          : "text-white"
                      }`}
                      onClick={() => handleTabClick(item)}
                    >
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="h-12 w-12 rounded-sm"
                      />
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="bg-black py-16 px-6 rounded-lg lg:w-72 w-full"
              ref={contactTabRef}
            >
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

            <div
              className="bg-tabsColor py-16 px-6 rounded-lg lg:w-72 w-full"
              ref={newsTabRef}
            >
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

export default CaseSection;
