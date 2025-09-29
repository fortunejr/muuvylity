import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../fadein";
import {
  imports,
  marine,
  supply,
  taxi,
  third_party,
  transportation,
  warehouse,
} from "../../imports";

const services = [
  {
    heading: "Transportation & Haulage",
    body: "Muuvylity Logistics Ltd provides reliable, efficient, and secure transportation and haulage services across land, air, and sea to meet the diverse needs of individuals, businesses, and corporate clients.",
    img: transportation,
  },
  {
    heading: "E-Ride Taxi Services & Fleet Management",
    body: "Muuvylity Logistics Ltd provides modern e-ride taxi services designed to offer safe, convenient, and efficient transportation for individuals and corporate clients.",
    img: taxi,
  },
  {
    heading: "Warehousing & Inventory Management",
    body: "Muuvylity Logistics Ltd provides comprehensive warehousing and inventory management solutions designed to optimize the storage, handling, and distribution of goods for businesses, manufacturers, and retailers.",
    img: warehouse,
  },
];

const Services = () => {
  return (
    <section className="px-7 py-16 bg-gray-50 text-customRed">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-black">
          Our Services
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.heading}
                  className="w-full h-58 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.heading.split("&").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="text-black">{part.trim()}</span>
                        {i < arr.length - 1 && (
                          <span className="text-customRed"> & </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow">
                    {service.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/services"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-customRed text-white font-semibold hover:scale-105 transition duration-300 shadow-md"
        >
          See all services
        </Link>
      </div>
    </section>
  );
};

export default Services;
