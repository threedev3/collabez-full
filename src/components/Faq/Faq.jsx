import React, { useRef, useState } from "react";
import faqImg from "../../assets/img/about2.png";
import Accordian from "../Accordian/Accordian";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { faqs } from "../../data/data";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqHead = useRef(null);
  const imgRef = useRef(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const faqAnimation = gsap.timeline({ paused: true });

  useGSAP(() => {
    // faqAnimation
    // .from(faqHead.current, {
    //   opacity: 0,
    //   y: -100,
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: faqHead.current,
    //     toggleActions: "play none none none",
    //     start: "top 50%",
    //     end: "top 40%",
    //     scrub: true,
    //   },
    // })
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 40%",
        once: true,
      },
    });
  });

  return (
    <div className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div>
            <h3
              className="text-white xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold"
              ref={faqHead}
            >
              Frequently Asked Question
            </h3>
          </div>

          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-5">
            <div className="max-w-7xl flex-1">
              {faqs.map((faq, index) => (
                <Accordian
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>

            <div className="lg:block flex justify-center">
              <img src={faqImg} alt="" ref={imgRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
