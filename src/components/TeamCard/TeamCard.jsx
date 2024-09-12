import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function TeamCard({ imgMember, name, role, socialIcons }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const cardDetail = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    const overlay = overlayRef.current;

    card.addEventListener("mouseenter", () => {
      gsap.to(teamRef.current, { height: "494px", duration: 0.5 });
      gsap.to(img, {
        height: "425px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        duration: 0.5,
      });
      gsap.to(cardDetail.current, { opacity: 0, duration: 0.5 });
      gsap.to(overlay, { opacity: 1, duration: 0.5 });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(teamRef.current, { height: "463px", duration: 0.5 });
      gsap.to(img, {
        height: "350px",
        borderBottomLeftRadius: "9999px",
        borderBottomRightRadius: "9999px",
        duration: 0.5,
      });
      gsap.to(cardDetail.current, { opacity: 1, duration: 0.5 });
      gsap.to(overlay, { opacity: 0, duration: 0.5 });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  useGSAP(() => {
    gsap.from(teamRef.current, {
      opacity: 0,
      y: -200,
      duration: 0.5,
      ease: "back.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });

  return (
    <div
      className="relative xl:w-80 lg:w-72 w-72 h-[463px] mx-auto overflow-hidden rounded-full shadow-lg bg-teamBg "
      ref={teamRef}
    >
      <div ref={cardRef} className="">
        <div
          ref={imgRef}
          style={{
            backgroundImage: `url(${imgMember})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "350px",
            borderRadius: "9999px",
          }}
          className="absolute inset-0 w-full"
        />
        <div
          ref={cardDetail}
          className="absolute bottom-5 text-white w-full text-center py-2"
        >
          <h3 className="text-xl font-bold">{name}</h3>
          <h3 className="text-sm">{role}</h3>
        </div>
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-heroColor from-15% to-transparent to-75% opacity-0 flex flex-col justify-end p-4"
        >
          <div className="text-white text-center p-6">
            <h3 className="text-3xl font-bold">{name}</h3>
            <p className="text-base">{role}</p>
            <div className="flex justify-center space-x-4 mt-2">
              {socialIcons.map((icon, index) => (
                <div key={index}>
                  <img src={icon} alt="" className="h-8 w-8 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
