import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    { number: 75, label: "Trusted Partners & Clients" },
    { number: 1000, label: "Successful Products Shipped" },
    { number: 25, label: "Skilled Workers & Experts" },
  ];

  return (
    <section className="py-6 flex justify-center px-4">
      <div className="bg-customRed rounded-2xl px-10 py-10 max-w-5xl w-full text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <div
                key={index}
                ref={ref}
                className="transform transition duration-500 hover:scale-105"
              >
                <h2 className="text-5xl font-extrabold text-yellow-200">
                  {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}+
                </h2>
                <p className="mt-3 text-lg text-yellow-200 tracking-wide font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
