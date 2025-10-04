import React from "react";
import { img10 } from "../../imports";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import FadeIn from "../fadein";
import {
  Plane,
  Truck,
  Ship,
  Car,
  Warehouse,
  Globe,
  Settings,
  Users,
} from "lucide-react";


const About = () => {
  return (
    <div className="bg-customRed/10">
    <div className="container mx-auto px-7 lg:px-20 py-14 lg:py-20">
      <FadeIn className="" duration={100}>
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
          <div className="lg:w-1/2 lg:pl-10 flex flex-col justify-center h-full text-center lg:text-left">
            <h2 className="font-bold text-3xl mt-7 lg:mt-0 lg:text-5xl">
              About <span className="text-customRed">Muuvylity Logistics</span>
            </h2>
            <div className="lg:text-xl mt-6 space-y-4">
              <p className="font-semibold">
                Muuvylity Logistics Ltd specializes in comprehensive logistics
                and supply chain solutions:
              </p>

              <FadeIn>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Truck className="w-6 h-6 text-customRed" />
                  <span>
                    Land transportation expertise for local and regional
                    delivery.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Plane className="w-6 h-6 text-black-600" />
                  <span>
                    Air freight solutions for fast and secure shipments.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Ship className="w-6 h-6 text-customRed" />
                  <span>Sea transport services connecting global markets.</span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Car className="w-6 h-6 text-black-600" />
                  <span>e-Ride services tailored for urban logistics.</span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Warehouse className="w-6 h-6 text-customRed" />
                  <span>Warehousing and specialized logistics solutions.</span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Globe className="w-6 h-6 text-black-600" />
                  <span>
                    Integrated global shipping and supply chain management.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Settings className="w-6 h-6 text-customRed" />
                  <span>
                    Commitment to technology-driven logistics innovation.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <Users className="w-6 h-6 text-black-600" />
                  <span>
                    Strong customer service principles with global reach.
                  </span>
                </li>
              </ul>
              </FadeIn>
            </div>

            {/* Button */}
            <div className="pt-7 flex justify-center lg:justify-start">
              <Link to="/about">
                <button className="flex items-center gap-3 bg-customRed px-5 py-3 rounded-full font-bold text-white hover:scale-105 transition">
                  Read More <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
    </div>
  );
};

export default About;
