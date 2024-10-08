import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import personTable from "../../assets/img/tablePerson.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "../../assets/img/contactbg.png";
import useFormHandler from "../../hooks/useFormHandler";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Contact({ portfolioRef, featuresRef, contactRef, homeRef }) {
  const headContact = useRef(null);
  const textContact = useRef(null);
  const formRef = useRef(null);

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    handleSubmit,
  } = useFormHandler();

  // const ContactText = gsap.timeline({ paused: true });

  useGSAP(() => {
    // ContactText
    // .from(headContact.current, {
    //   duration: 0.5,
    //   opacity: 0,
    //   y: -100,
    //   ease: "power1.out",
    //   scrollTrigger: {
    //     trigger: headContact.current,
    //     start: "top 70%",
    //     end: "top 30%",
    //     toggleActions: "play none none none",
    //     // scrub: true,
    //     // markers: true,
    //   },
    // })
    //   .from(textContact.current, {
    //     duration: 0.5,
    //     opacity: 0,
    //     y: -300,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: textContact.current,
    //       start: "top 70%",
    //       end: "top 30%",
    //       toggleActions: "play none none none",
    //       // scrub: true,
    //       // markers: true,
    //     },
    //   })
    gsap.from(formRef.current, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power1.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 70%", // Adjust the trigger position
        end: "top 30%", // This sets the end point of the trigger
        toggleActions: "play none none none", // Form will appear once when scrolling down
        once: true, // Ensure the animation happens only once
      },
    });
  });

  const personRef = useRef(null);

  useGSAP(() => {
    gsap.from(personRef.current, {
      duration: 0.2,
      opacity: 0,
      y: 30,
      ease: "power1.out",
      scrollTrigger: {
        trigger: personRef.current,
        start: "top 65%",
        end: "top 30%",
        toggleActions: "play none none none",
        // scrub: true,
        once: true,
      },
    });

    // Floating animation for the image
    gsap.to(personRef.current, {
      y: 10, // Adjust the value to control the movement range
      duration: 2, // Duration of the up-down movement
      ease: "sine.inOut", // Smooth easing function
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
    });
  });

  return (
    <>
      <div className="bg-[url('/src/assets/img/contactbg.png')] bg-no-repeat bg-cover xl:bg-bottom bg-moveupfooter max-w-full relative overflow-x-hidden overflow-y-hidden lg:py-32 lg:px-8 px-4 py-8 border-b-2 border-b-[#292929]">
        <div className="max-w-[1400px] mx-auto relative z-50 flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-2xl ">
            <h3
              className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-white font-bold"
              ref={headContact}
            >
              Contact <span className="text-heroColor">CollabEz</span>
            </h3>
            <p className="text-white lg:text-base text-sm" ref={textContact}>
              We always try to implement our creative ideas at the highest
              level. Tell us about your project and we will make it work.
            </p>
          </div>

          <form
            className="lg:flex lg:flex-col lg:gap-10 flex flex-col gap-8 lg:mt-10 max-w-full"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="lg:flex lg:flex-row lg:justify-between lg:gap-10 flex flex-col gap-8 max-w-full">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="" className="text-white text-base">
                  First Name
                </label>
                <input
                  name="first-name"
                  type="text"
                  className="p-3 rounded-lg bg-transparent border-2 border-heroColor text-white placeholder:text-sm text-sm focus:outline-none"
                  placeholder="Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="" className="text-white text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  className="p-3 rounded-lg bg-transparent border-2 border-heroColor text-white placeholder:text-sm text-sm focus:outline-none"
                  placeholder="Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-2">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-between lg:gap-10 flex flex-col gap-8 max-w-full text-white">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="" className="text-white text-base">
                  Phone
                </label>
                <input
                  type="number"
                  className="p-3 rounded-lg bg-transparent border-2 border-heroColor text-white remove-arrow placeholder:text-sm text-sm focus:outline-none"
                  placeholder="+11 8282 xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-2">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="" className="text-white text-base">
                  Email
                </label>
                <input
                  type="email"
                  className="p-3 rounded-lg bg-transparent border-2 border-heroColor text-white placeholder:text-sm text-sm focus:outline-none"
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 max-w-full">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="" className="text-white text-base">
                  Message
                </label>
                <textarea
                  rows={10}
                  type="text"
                  className="p-3 rounded-lg bg-transparent border-2 border-heroColor text-white placeholder:text-sm text-sm focus:outline-none"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="">
              <button
                className="sm:py-3 py-2 sm:px-10 px-6 bg-heroColor rounded-full text-white text-base"
                type="submit"
              >
                Send Message{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 21"
                  fill="none"
                  className="inline ml-2"
                >
                  <path
                    d="M19.4354 1.08198C18.9352 0.568598 18.1949 0.377337 17.5046 0.578664L1.408 5.25952C0.679698 5.46186 0.163487 6.04269 0.0244302 6.78055C-0.117628 7.5315 0.378575 8.48479 1.02684 8.88342L6.0599 11.9768C6.57611 12.2939 7.24238 12.2144 7.66956 11.7835L13.4329 5.9843C13.723 5.68231 14.2032 5.68231 14.4934 5.9843C14.7835 6.27623 14.7835 6.74935 14.4934 7.05134L8.71999 12.8516C8.29181 13.2814 8.21178 13.9508 8.52691 14.4702L11.6022 19.5538C11.9623 20.1577 12.5826 20.5 13.2628 20.5C13.3429 20.5 13.4329 20.5 13.513 20.4899C14.2933 20.3893 14.9135 19.8558 15.1436 19.1008L19.9156 3.02479C20.1257 2.34028 19.9356 1.59537 19.4354 1.08198Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="absolute top-0 right-10  z-30  lg:block hidden">
          <img
            src={personTable}
            alt=""
            className="w-72 object-contain"
            ref={personRef}
          />
        </div>
      </div>
      <div>
        <Footer
          portfolioRef={portfolioRef}
          featuresRef={featuresRef}
          contactRef={contactRef}
          homeRef={homeRef}
        />
      </div>
    </>
  );
}

export default Contact;
