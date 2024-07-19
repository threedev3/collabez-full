import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function BeDifferent() {
  const dareHead = useRef(null);
  const darePara = useRef(null);

  useGSAP(() => {
    const letters = dareHead.current.querySelectorAll("span");
    gsap.from(letters, {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: dareHead.current,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    gsap.from(darePara.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: darePara.current,
        start: "top 90%",
        end: "top 60%",
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
    <div className="bg-wholeBg absolute w-full h-full bg-[url('/src/assets/img/differentBg.png')] bg-no-repeat bg-cover bg-center overflow-hidden lg:py-8 lg:px-8 sm:py-8 py-2 px-4 max-w-full flex justify-center items-center">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-10">
            <h3
              className="text-white xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-center"
              ref={dareHead}
            >
              {splitText("Dare To Be ")}
              <span className="inline-block">{splitText("Different ")}</span>
            </h3>
            <p
              className="text-introColor sm:text-sm text-sm text-center"
              ref={darePara}
            >
              Welcome to CollabEz, where we believe in the power of creativity,
              innovation, and daring to be different. We're not just a digital
              agency —we're a creative revolution, dedicated to transforming the
              ordinary into the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeDifferent;
