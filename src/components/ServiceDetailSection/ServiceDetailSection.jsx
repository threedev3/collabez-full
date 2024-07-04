import React, { useRef } from "react";
import { services } from "../../data/data";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import personImg from '../../assets/img/person.png'
import sendIcon from '../../assets/img/sendIcon.png'
import serviceDemo from '../../assets/img/demoService.png'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ServiceDetailSection() {
  const serviceHead = useRef(null);
  const borderRef = useRef(null);
  const serviceRef = useRef(null);
  const imgRef = useRef(null);

  const { slug } = useParams();
  const service = services.find(
    (s) =>
      s.title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "") === slug
  );

  console.log(service);

  useGSAP(() => {
    gsap.from(borderRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: borderRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(serviceRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(serviceHead.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: serviceHead.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "play none none none",
        start: "top 50%",
        end: "top 30%",
      },
    });
  });

  return (
    <div className="max-w-full relative lg:py-8 py-4 lg:px-8 px-4 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-5 mb-12">
            <div className="flex flex-row items-center gap-4">
              <div
                className="w-16 h-0 border-2 border-serviceText"
                ref={borderRef}
              ></div>
              <div>
                <h3
                  className="text-serviceText text-xl uppercase"
                  ref={serviceRef}
                >
                  Creative ideas
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
              <h3
                className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-white font-bold"
                ref={serviceHead}
              >
                Building Digital{" "}
                <span className="text-heroColor">Kingdoms.</span>
              </h3>
            </div>
          </div>

          <div>
            <img src={personImg} alt="" ref={imgRef} />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start gap-12">
            <div className="flex flex-col gap-8 flex-1">
                <div className="w-full">
                    <img src={serviceDemo} alt="" className="w-full" />
                </div>

                <div className="">
                    <p className="text-white text-base">{service.description}</p>
                </div>

                <div className="flex flex-col gap-8 ">
                    <div>
                        <h3 className="text-white text-4xl">Working Process</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="bg-tabsColor py-16 px-6 rounded-lg w-72">
                    <ul className="flex flex-col gap-8">
                        {
                            services.map((item, index) => (
                                <li className="text-white cursor-pointer">{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="bg-black py-16 px-6 rounded-lg w-72">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h3 className="text-white text-2xl capitalize">How Can we help you?</h3>
                        </div>

                        <div>
                            <p className="text-white text-base">Don't know where to start? We'll help you.</p>
                        </div>

                        <div className="">
                            <button className="text-heroColor border-b-2 border-heroColor uppercase">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="bg-tabsColor py-16 px-6 rounded-lg w-72">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h3 className="text-white text-2xl capitalize">Newsletter</h3>
                        </div>

                        <div className="relative flex">
                            <input type="email" placeholder="Email" className="p-2 bg-transparent border-b-2 border-borderColor outline-none" />
                            <img src={sendIcon} alt="" className="absolute right-8 bottom-3 w-5 cursor-pointer" />
                        </div>

                        <div className="flex gap-5 items-center text-white">
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

export default ServiceDetailSection;
