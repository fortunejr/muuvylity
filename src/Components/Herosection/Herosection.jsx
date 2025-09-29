import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import "./herosection.css";
import { heroimg } from "../../imports";

// Animation variants
const leftContent = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6 + index * 0.2, ease: "easeOut" },
  }),
};

const Herosection = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat kenburns-top pointer-events-none z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      ></div>
      <div className="absolute inset-0 bg-[#4d0000] opacity-70"></div>

      <div className="relative z-20 container mx-auto px-7 lg:px-10 pt-20 lg:py-40 py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="p-5 lg:mx-20 text-center lg:text-center"
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-customYellow font-bold">Muuvylity Logistics Ltd</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-normal pb-6">
            Delivering reliable haulage and supply chain solutions across Nigeria and beyond.
          </h1>
          <p className="text-white text-base lg:text-lg opacity-90">
            The aim is to provide
            comprehensive, reliable, and effcient logistics solutions,
            optimizing supply chains and building strong client
            partnerships.
          </p>

          {/* CTA Buttons */}
          {/* <div className="pt-9 flex flex-row justify-center lg:justify-start items-center gap-4 flex-wrap">
            <motion.a
              target="_blank"
              href="https://wa.me/2348033670069"
              rel="noreferrer"
              variants={buttonVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button className="flex gap-2 items-center bg-white px-4 py-3 lg:px-8 lg:py-4 font-bold text-black cursor-pointer hover:scale-105 transition text-sm lg:text-base">
                <FaWhatsapp size={22} className="lg:size-27" />
                Chat us
              </button>
            </motion.a>

            <motion.a
              href="mailto:Omphoenixlimited@gmail.com"
              variants={buttonVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button className="flex gap-2 items-center border-white hover:bg-lime-400 border-2 px-4 py-3 lg:px-8 lg:py-4 font-bold text-white cursor-pointer hover:scale-105 transition text-sm lg:text-base">
                <MdOutlineMail size={22} className="lg:size-27" />
                Email us
              </button>
            </motion.a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
