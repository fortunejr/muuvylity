import React from "react";
import { img10 } from "../../imports";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import FadeIn from "../fadein";

const About = () => {
  return (
    <div className="container mx-auto px-7 lg:px-20 py-14 lg:py-20">
      <FadeIn duration={100}>
        <div className="lg:flex items-center">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              className="w-full object-cover pr-2 lg:h-full slide-in-blurred-bottom rounded-3xl"
              src={img10}
              alt="about image"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2 lg:pl-10 flex flex-col justify-center h-full">
            <h2 className="font-bold text-3xl mt-7 lg:mt-0 lg:text-5xl">
              About Us
            </h2>
            <p className="lg:text-xl mt-4">
              Muuvylity Logistics Ltd expertise in land, air, and sea transport,
              e-ride services, warehousing, and specialized logistics, with a
              strategic intent on integrated global shipping and supply chain
              management services, including its mission, services (such as
              freight forwarding, warehousing, etc), commitment to technology,
              customer service principles, and geographic reach.
            </p>

            {/* Button */}
            <div className="pt-7">
              <Link to="/about">
                <button className="flex items-center gap-3 bg-customRed px-5 py-3 rounded-xl font-bold text-white hover:scale-105 transition">
                  Read More <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
