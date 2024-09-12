import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ item }) {
  const cardRef = useRef(null);
  const serviceCard = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setisHovered] = useState(false);

  const slug = item.slug;

  useEffect(() => {
    const card = cardRef.current;

    const onHover = () => {
      setisHovered(true);
      gsap.to(serviceCard.current, {
        scale: 1.1,
        duration: 0.5,
        ease: "circ.inOut",
      });
    };

    const onLeave = () => {
      setisHovered(false);
      gsap.to(serviceCard.current, {
        scale: 1,
        duration: 0.5,
        ease: "circ.inOut",
      });
    };

    card.addEventListener("mouseenter", onHover);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onHover);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [item.bgEnd, item.bgStart]);

  useGSAP(() => {
    gsap.from(serviceCard.current, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: serviceCard.current,
        toggleActions: "play none none none",
        start: "top 80%",
        end: "top 40%",
      },
    });
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/services/${slug}`);
  };

  return (
    <div className="h-[490px] card" ref={serviceCard}>
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-500 cursor-pointer z-10 fade-in"
        onClick={handleClick}
      >
        <div
          className={`py-12 px-4 absolute w-full h-full text-white flex flex-col justify-center gap-8 items-center overflow-hidden `}
          style={{
            background: `linear-gradient(to bottom, ${item.bgStart}, ${item.bgEnd})`,
          }}
        >
          {/* {isHovered ? (
            <div className="flex flex-col justify-center gap-8 items-center">
              <div className="bg-serviceRound p-6 rounded-full">
                <img src={item.icon} alt="" />
              </div>

              <div className="">
                <p className="text-center text-white text-lg">{item.title}</p>
              </div>

              <div className=" flex flex-col justify-center gap-8 items-center">
                <div className="">
                  <p className="text-center text-white text-sm line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <Link to={`/services/${slug}`}>
                  <button className="text-center text-heroColor uppercase border-b-2 border-heroColor cursor-pointer text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-8 items-center">
              <div className="bg-serviceRound p-6 rounded-full">
                <img src={item.icon} alt="" />
              </div>

              <div className="">
                <p className="text-center text-white text-lg">{item.title}</p>
              </div>
            </div>
          )} */}
          {/* Smooth transition between non-hovered and hovered content */}
          <div
            className={`flex flex-col justify-center gap-8 items-center transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-0 transform scale-95" : "opacity-100"
            }`}
          >
            <div className="bg-serviceRound p-6 rounded-full">
              <img src={item.icon} alt="" />
            </div>

            <div className="">
              <p className="text-center text-white text-lg">{item.title}</p>
            </div>

            <Link to={`/services/${slug}`}>
              <button className="text-center text-heroColor uppercase border-b-2 border-heroColor cursor-pointer text-sm">
                Read More
              </button>
            </Link>
          </div>

          {/* Hover content */}
          <div
            className={`flex flex-col justify-center gap-8 items-center absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out p-3 ${
              isHovered
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-105"
            }`}
          >
            <div className="bg-serviceRound p-6 rounded-full">
              <img src={item.icon} alt="" />
            </div>

            <div className="">
              <p className="text-center text-white text-lg">{item.title}</p>
            </div>

            <div className=" flex flex-col justify-center gap-8 items-center">
              <div className="">
                <p className="text-center text-white text-sm line-clamp-4">
                  {item.description}
                </p>
              </div>

              <Link to={`/services/${slug}`}>
                <button className="text-center text-heroColor uppercase border-b-2 border-heroColor cursor-pointer text-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
