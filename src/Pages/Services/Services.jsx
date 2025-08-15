import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const groupedServices = [
  {
    category: "Oil & Gas Services",
    items: [
      "Oil and Gas Services: We offer a range of services, including maintenance, inspection, and repair of oil and gas facilities, equipment, and infrastructure",
      "Wellhead Services: We offer wellhead maintenance, repair, and installation services to ensure the safe and efficient operation of your wells",
      "Procurement: Our procurement team sources high-quality materials and equipment for the oil and gas industry, ensuring timely delivery and cost-effectiveness.",
    ],
  },
  {
    category: "Engineering & Technical",
    items: [
      "Maintenance: Our maintenance services ensure that your equipment and facilities are running at optimal levels, minimizing downtime and increasing productivity.",
      "Instrumentation and Control: DWe design, install, and maintain instrumentation and control systems for oil and gas applications.",
      "Civil Works and General Contracting: Our team of civil engineers and contractors provides construction, maintenance, and repair services for oil and gas infrastructure.",
      "Welding and Fabrication: Our skilled welders and fabricators provide high-quality welding and fabrication services for oil and gas applications.",
      "Alternative Energy and Street Solar Lights.",
    ],
  },
  {
    category: "Development & Management",
    items: [
      "Real Estate Development.",
      "Project Management Services.",
      "Business Development and Advisory Solutions.",
    ],
  },
];

const Services = () => {
  return (
    <section className="px-7 py-16 bg-white text-blue-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Omphoenix Limited offers specialized oil and gas, engineering, and development
          solutions designed to meet industry standards and exceed client expectations.
        </p>

        <div className="space-y-12">
          {groupedServices.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-100 pb-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.items.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100"
                  >
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-left text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
