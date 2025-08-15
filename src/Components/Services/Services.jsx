import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import FadeIn from "../fadein";
import { Link } from "react-router-dom";

const services = [
  "Oil and Gas Services: Maintenance, inspection, and repair of oil and gas facilities, equipment, and infrastructure.",
  "Maintenance: Ensuring optimal performance of equipment and facilities, minimizing downtime.",
  "Instrumentation and Control: Designing, installing, and maintaining control systems for oil and gas applications.",
  "Civil Works and General Contracting: Construction, maintenance, and repair of oil and gas infrastructure.",
  "Wellhead Services: Maintenance, repair, and installation for safe and efficient well operation.",
  "Procurement: Sourcing high-quality materials and equipment with timely delivery and cost-effectiveness.",
];

const Services = () => {
  return (
    <section className="px-7 py-16 bg-blue-100 text-blue-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-down">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 animate-fade-in-up max-w-3xl mx-auto">
          Omphoenix Limited offers specialized oil and gas, engineering, and development solutions designed to meet industry standards and exceed client expectations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="flex items-start gap-3 bg-white p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-left text-gray-700">{service}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          to="/services"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-900  transition duration-300 shadow-md"
        >
          See more services
        </Link>
      </div>
    </section>
  );
};

export default Services;
