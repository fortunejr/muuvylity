import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css";
import { img9 } from "../../imports";

const Herosection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img9})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 lg:px-10 pt-14 container mx-auto px-7 h-fit lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="lg:w-[50%]">
          <p className="text-customYellow font-bold">Omphoenix Limited</p>
          <h1 className="lg:text-4xl leading-tight font-black text-3xl text-white pb-6 slide-in-bottom">
            We specialize in providing comprehensive services to the oil and gas industry and other allieds.
          </h1>
          <p className="lg:text-sm text-white lg:w-120 slide-in-left">
            Our expertise spans across various disciplines, ensuring that our clients receive top-notch support for their operations.
          </p>

          <div className="pt-9 flex items-center gap-6 slide-in-left2">
            <a target="_blank" href="https://wa.me/2348033670069" rel="noreferrer">
              <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold text-white cursor-pointer">
                <FaWhatsapp size={27} />
                Chat us
              </button>
            </a>
            <a href="mailto:Omphoenixlimited@gmail.com">
              <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center border-customYellow hover:bg-customYellow border-2 p-4 rounded-2xl font-bold text-white cursor-pointer">
                <MdOutlineMail size={27} />
                Email us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
