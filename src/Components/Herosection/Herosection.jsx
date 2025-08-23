import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import "./herosection.css";
import { heroimg, img9 } from "../../imports";

// Animation variants
const leftContent = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightImage = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
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
    <section className="bg-customBlue">
      <div className="container mx-auto px-7 lg:px-10 pt-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-customYellow font-bold">Omphoenix Limited</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-normal pb-6">
            We Provide Comprehensive Services to the <span className="text-lime-400">Oil and Gas </span>
             Industry and <span className="text-lime-400">Other Allieds</span>.
          </h1>
          <p className="text-white text-base lg:text-lg opacity-90">
            Our expertise spans across various disciplines, ensuring that our
            clients receive top-notch support for their operations.
          </p>

          {/* CTA Buttons */}
          <div className="pt-9 flex flex-row justify-center lg:justify-start items-center gap-4 flex-wrap">
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
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={rightImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={heroimg}
            alt="Omphoenix services"
            className=" max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
