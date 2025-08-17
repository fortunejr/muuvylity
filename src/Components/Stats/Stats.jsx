import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    { number: 75, label: "Partners & Clients" },
    { number: 100, label: "Projects Delivered" },
    { number: 25, label: "Expert Engineers" },
  ];

  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // animate every time it's in view
            threshold: 0.3, // start when 30% visible
          });

          return (
            <div key={index} ref={ref}>
              <h2 className="text-5xl font-bold text-gray-800">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} />
                ) : (
                  0
                )}
                +
              </h2>
              <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
