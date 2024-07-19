import React, { useRef } from "react";
import TeamCard from "../TeamCard/TeamCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { members } from "../../data/data";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Team() {
  const teamHead = useRef(null);
  const teamPara = useRef(null);

  useGSAP(() => {
    const letters = teamHead.current.querySelectorAll("span");
    gsap.from(letters, {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.2,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: teamHead.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    gsap.from(teamPara.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: teamPara.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });
  });

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
          whiteSpace: char === " " ? "pre" : "normal",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="lg:py-12 lg:px-8 py-8 px-4 max-w-full min-h-[78vh]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h3
              className="text-white xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold"
              ref={teamHead}
            >
              {splitText("OUR EXPERTS ")}
              <span className="inline-block">{splitText("Friendly ")}</span>
              <span className="inline-block">{splitText("Team ")}</span>
            </h3>
            <p className="text-introColor sm:text-sm text-sm" ref={teamPara}>
              At the heart of CollabEz is our team—a diverse group of dreamers,
              doers, and digital enthusiasts who live and breathe creativity.
              We're designers, developers, marketers, and social media gurus,
              each bringing our unique skills and perspectives to the table. But
              what unites us is our shared passion for helping our clients
              succeed.
            </p>
          </div>

          <div className="flex flex-row justify-between items-start flex-wrap gap-5">
            {members.map((member, index) => (
              <TeamCard
                key={index}
                imgMember={member.imgMember}
                name={member.name}
                role={member.role}
                socialIcons={member.socialIcons}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
