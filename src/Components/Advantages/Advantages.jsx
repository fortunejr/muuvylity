import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router";

const advantagesList = [
  "Integrated logistics solutions under one roof, from transportation to warehousing and distribution.",
  "Experienced and professional team committed to efficiency, safety, and reliability.",
  "Cutting-edge technology for fleet tracking, inventory management, and supply chain optimization.",
  "Strong partnerships with carriers, manufacturers, and suppliers to ensure competitive pricing and dependable service.",
  "Commitment to customer satisfaction and transparent operations.",
];

const Advantages = () => {
  return (
    <div className="container mx-auto px-7 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-customRed">
        Why Choose Us?
      </h2>

      <ul className="space-y-6">
        {advantagesList.map((advantage, index) => (
          <li key={index} className="flex items-center">
            {/* Custom attractive bullet */}
            <CircleCheckBig className="mr-3 text-customRed flex-shrink-0" />
            <p className="text-gray-700">{advantage}</p>
          </li>
        ))}
      </ul>
      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          to="/services"
          className="inline-block px-6 py-3 rounded-full bg-customRed text-white font-semibold hover:scale-105 transition duration-300 shadow-md text-center"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Advantages;
