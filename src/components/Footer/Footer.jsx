import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import footerGrad from "../../assets/img/footerGrad.png";
import Logo from "../../assets/img/logo.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Footer({ portfolioRef, featuresRef, contactRef, homeRef }) {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Study", href: "/portfolio" },
  ];

  const handleNavClick = (href) => {
    navigate(href);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleHomeRedirect = (href) => {
    navigate(href);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-16 max-w-full mx-auto relative lg:px-8 px-4 overflow-hidden bg-[url('/src/assets/img/workingBg.png')] bg-no-repeat bg-cover bg-top">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[450px] h-[300px]">
          <img src={footerGrad} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6 md:items-start grid grid-cols-1 gap-6 max-w-[1400px] mx-auto pb-24">
        <div className="md:mx-auto w-64">
          <img
            src={Logo}
            alt=""
            className="cursor-pointer object-contain"
            onClick={() => handleHomeRedirect("/")}
          />
        </div>

        <div className="md:flex md:justify-center md:items-center text-white">
          <ul className="leading-8 text-sm">
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
            <h3 className="lg:text-2xl text-xl font-bold">Contact Us</h3>
          </div>

          <ul className="leading-8 text-sm">
            <li>hello@collabez.co.uk</li>
            <li>+1 845 631 78 49</li>
            <li>20-22, Wenlock Road, N1 7GU, London, UK</li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center text-white w-full text-sm mb-2">
          <p>Copyright © {currentYear} Collabez</p>
        </div>
        <div className="max-w-full mx-auto flex justify-center">
          <div className="w-[1150px] max-[1180px]:w-[1000px] max-[1024px]:w-[800px] max-[825px]:w-[600px] max-[625px]:w-[400px] max-[425px]:w-[260px] sm:h-[15px] h-[12px] bg-heroColor rounded-t-full " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
