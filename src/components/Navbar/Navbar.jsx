import React, { useRef, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  // { name: "Contact", link: "/" },
];

function Navbar() {
  const menuToggle = useRef(null);
  const fullpageMenu = useRef(null);
  const navRef = useRef(null);
  const menuBg = useRef(null);
  const headerRef = useRef(null);
  const menuItems = useRef([]);
  const navigate = useNavigate();

  let menuBar;
  let navTl;

  useEffect(() => {
    menuBar = gsap.timeline({ paused: true });

    menuBar
      .to(
        ".bar-1",

        {
          attr: { d: "M8,2 L2,8" },
          x: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        "start"
      )
      .to(
        ".bar-2",

        {
          autoAlpha: 0,
          duration: 0.5,
        },
        "start"
      )
      .to(
        ".bar-3",

        {
          attr: { d: "M8,8 L2,2" },
          x: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        "start"
      );

    navTl = gsap.timeline({ paused: true });

    navTl
      .to(
        fullpageMenu.current,
        {
          duration: 0,
          display: "block",
          ease: "expo.inOut",
        },
        "<"
      )
      .to(
        menuBg.current,
        {
          duration: 0,
          opacity: 1,
          ease: "expo.inOut",
        },
        "<"
      )
      .to(
        navRef.current,
        {
          duration: 1,
          opacity: 100,
          ease: "expo.inOut",
        },
        "<"
      );

    navTl.to(
      menuItems.current,
      {
        duration: 1,
        opacity: 100,

        rotateY: 30,
        stagger: 0.2,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    menuBar.reverse();
    navTl.reverse();

    const handleMenuToggle = () => {
      menuBar.reversed(!menuBar.reversed());
      navTl.reversed(!navTl.reversed());

      if (!navTl.reversed()) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        document.body.style.overflow = ""; // Restore scrolling
      }
    };

    if (menuToggle.current) {
      menuToggle.current.addEventListener("click", handleMenuToggle);
    }

    return () => {
      if (menuToggle.current) {
        menuToggle.current.removeEventListener("click", handleMenuToggle);
      }
    };
  });

  const handleNavClick = (link) => {
    navTl.reverse();
    menuBar.reverse();

    document.body.style.overflow = ""; // Restore scrolling

    setTimeout(() => {
      navigate(link);
    }, 500);
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power1.out",
      stagger: 0.5,
    });
  });

  return (
    <header className="absolute inset-x-0 top-0 max-w-[1400px] mx-auto pt-8 px-4">
      <nav
        className="flex items-start justify-between py-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 cursor-pointer z-20" ref={headerRef}>
          <Link to="/" className="-m-1.5 p-1.5 h-20 w-auto ">
            <img className="object-cover" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex">
          <button
            className="bg-transparent border-none cursor-pointer relative z-[1000] outline-none"
            id="menuToggle"
            ref={menuToggle}
          >
            <svg
              viewBox="0 0 12 10"
              className="hamburger"
              height="40px"
              width="40px"
            >
              <path
                d="M10,2 L2,2"
                className="bar-1 fill-none"
                stroke="#fff"
                strokeLinecap="round"
              ></path>
              <path
                d="M2,5 L10,5"
                className="bar-2 fill-none"
                stroke="#fff"
                strokeLinecap="round"
              ></path>
              <path
                d="M10,8 L2,8"
                className="bar-3 fill-none"
                stroke="#fff"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className="fixed left-0 top-0 w-full h-screen z-50 hidden "
        ref={fullpageMenu}
      >
        <div className="flex justify-center items-center h-full px-12">
          <div
            className="h-full w-full absolute left-0 top-0 bg-black/50 backdrop-blur-lg z-40 opacity-0"
            ref={menuBg}
          ></div>
          <nav className="absolute top-40 z-50 text-center opacity-0" ref={navRef}>
            <ul className="list-none flex flex-col justify-center items-center">
              {navigation.map((item, index) => (
                <li className="overflow-hidden mt-5 " key={index}>
                  <Link
                    // to={item.link}
                    className="inline-block lg:text-[12vh] sm:text-[10vh] text-[6vh] text-center uppercase font-bold leading-none tracking-wide text-transparent stroke-2 stroke-white menu-item opacity-0 cursor-pointer"
                    ref={(el) => (menuItems.current[index] = el)}
                    onClick={() => handleNavClick(item.link)}
                  >
                    <span className="relative block " data-clip={item.name}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
