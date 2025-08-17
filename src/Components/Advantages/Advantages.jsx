import React from "react";
import { FaIndustry, FaUserTie, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // staggered animation
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Advantages = () => {
  return (
    <div className="container mx-auto px-7 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold mb-12 text-center text-blue-500"
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {advantagesList.map((advantage, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index} // pass index to variants
          >
            <div className="flex justify-center mb-4">{advantage.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{advantage.title}</h3>
            <p className="text-sm text-gray-600">{advantage.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
