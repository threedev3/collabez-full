import React, { useRef } from "react";
import footerLogo from "../../assets/img/footerlogo.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import footerGrad from "../../assets/img/footerGrad.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Footer({ portfolioRef, featuresRef, contactRef, homeRef }) {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 100,
      duration: 2,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 100%",
        end: "top 90%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      },
    });
  });

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ];

  const sections = {
    Home: homeRef,
    Portfolio: portfolioRef,
    Features: featuresRef,
    Contact: contactRef,
  };

  const handleNavClick = (href) => {
    navigate(href);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleHomeRedirect = (href) => {
    navigate(href);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-16 max-w-full mx-auto relative lg:px-8 px-4 overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[450px] h-[300px]">
          {/* <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at bottom left, #fce077, transparent 60%)",
              opacity: "0.7",
            }}
          /> */}
          <img src={footerGrad} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6 md:items-start grid grid-cols-1 gap-6 max-w-[1400px] mx-auto pb-24">
        <div className="mx-auto">
          <img
            src={footerLogo}
            alt=""
            className="cursor-pointer"
            onClick={() => handleHomeRedirect("/")}
          />
        </div>

        <div className="md:flex md:justify-center md:items-center text-white">
          <ul className="leading-8">
            {navigation.map((item, index) => (
              <button
                key={index}
                className="block"
                onClick={() => {
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </button>
            ))}
          </ul>
        </div>

        <div className="flex flex-col text-white gap-4">
          <div>
            <h3 className="lg:text-3xl text-2xl font-bold">Contact Us</h3>
          </div>

          <ul className="leading-8">
            <li>hello@collabez.co.uk</li>
            <li>+1 845 631 78 49</li>
            <li>20-22, Wenlock Road, N1 7GU, London, UK</li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center text-white w-full text-base">
          <p>Copyright © {currentYear} Collabez</p>
        </div>
        <div className="max-w-full mx-auto flex justify-center">
          <div className="w-[1150px] max-[1180px]:w-[1000px] max-[1024px]:w-[800px] max-[825px]:w-[600px] max-[625px]:w-[400px] max-[425px]:w-[260px] sm:h-[20px] h-[15px] bg-heroColor rounded-t-full " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
