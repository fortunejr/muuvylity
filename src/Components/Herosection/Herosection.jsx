import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css";
import { img9 } from "../../imports";

const Herosection = () => {
  return (
    <section className="bg-customBlue">
      <div className="container mx-auto px-7 lg:px-10 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-customYellow font-bold">Omphoenix Limited</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight pb-6">
            We specialize in providing comprehensive services to the oil and gas
            industry and other allieds.
          </h1>
          <p className="text-white text-base lg:text-lg opacity-90">
            Our expertise spans across various disciplines, ensuring that our
            clients receive top-notch support for their operations.
          </p>

          {/* CTA Buttons */}
          <div className="pt-9 flex flex-row justify-center lg:justify-start items-center gap-4 flex-wrap">
            <a
              target="_blank"
              href="https://wa.me/2348033670069"
              rel="noreferrer"
            >
              <button className="flex gap-2 items-center bg-customYellow px-4 py-3 lg:px-8 lg:py-4 rounded-2xl font-bold text-white cursor-pointer hover:scale-105 transition text-sm lg:text-base">
                <FaWhatsapp size={22} className="lg:size-27" />
                Chat us
              </button>
            </a>
            <a href="mailto:Omphoenixlimited@gmail.com">
              <button className="flex gap-2 items-center border-customYellow hover:bg-customYellow border-2 px-4 py-3 lg:px-8 lg:py-4 rounded-2xl font-bold text-white cursor-pointer hover:scale-105 transition text-sm lg:text-base">
                <MdOutlineMail size={22} className="lg:size-27" />
                Email us
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={img9}
            alt="Omphoenix services"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
