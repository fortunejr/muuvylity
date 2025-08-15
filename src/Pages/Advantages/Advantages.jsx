import React from "react";
import { FaIndustry, FaUserTie, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const advantagesList = [
  {
    icon: <FaIndustry className="text-blue-500 text-4xl" />,
    title: "Experience",
    text: "Our team has extensive experience in the oil and gas industry, ensuring that we understand the unique challenges and requirements of our clients.",
  },
  {
    icon: <FaUserTie className="text-blue-500 text-4xl" />,
    title: "Expertise",
    text: "We have a team of skilled professionals with expertise in various disciplines, ensuring that our clients receive high-quality services and solutions.",
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
    title: "Safety",
    text: "We prioritize safety in all our operations, ensuring that our clients' personnel and assets are protected.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
    title: "Quality",
    text: "We are committed to delivering high-quality services and solutions that meet or exceed our clients' expectations.",
  },
];

const Advantages = () => {
  return (
    <div className="container mx-auto px-7 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-blue-500">
        Why Choose Us?
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {advantagesList.map((advantage, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4">{advantage.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{advantage.title}</h3>
            <p className="text-sm text-gray-600">{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
