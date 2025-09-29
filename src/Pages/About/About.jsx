import React from "react";
import { Target, Eye, CircleCheckBig } from "lucide-react";
import { cac } from "../../imports";

const aimsandobj = [
  "To provide public, private, and corporate transportation services and haulage via land, air, or sea.",
  "To offer e-ride taxi services, fleet management, warehousing, and inventory optimization.",
  "To manage end-to-end supply chains, including order processing, packaging, and shipping.",
  "To reduce operational costs, optimize routes, and improve delivery times for clients.",
  "To provide third-party, fourth-party, and specialized logistics services, including inbound, outbound, and reverse logistics.",
  "To engage in general imports and exports, manufacturing representation, and distribution of goods.",
  "To operate as construction contractors, estate developers, and suppliers of building materials where relevant.",
  "To trade in marine spare parts and participate in mining, extraction, and exportation of solid minerals subject to approvals.",
];

const corevalues = [
  "Reliability: Ensuring timely and safe delivery of goods.",
  "Innovation: Leveraging technology for smarter logistics solutions.",
  "Customer Focus: Prioritizing client satisfaction through responsive service.",
  "Integrity: Conducting all operations transparently and ethically.",
  "Efficiency: Optimizing operations to reduce costs and enhance productivity.",
];

const About = () => {
  return (
    <div className="bg-customBlue">
      <div className="container mx-auto px-4 py-12">
        {/* About + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          {/* About Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-5 text-black">About Us</h2>
            <p className="text-black text-sm lg:text-base leading-relaxed">
              Muuvylity Logistics Ltd was established with a vision to modernize
              logistics and supply chain management in Nigeria. We recognize the
              need for a company that seamlessly integrates transportation,
              warehousing, fleet management, and specialized logistics services,
              providing clients with a one-stop solution for all their logistics
              needs.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-2xl w-full object-contain"
              src={cac}
              alt="CAC Registration"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 bg-gray-100 p-7 rounded-xl">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-customRed w-6 h-6" />
              <h2 className="text-xl font-bold text-black tracking-wide">MISSION STATEMENT</h2>
            </div>
            <p className="text-black text-sm lg:text-base leading-relaxed">
              The company’s overarching strategic goal is to provide efficient,
              reliable, and innovative logistics and supply chain solutions that
              streamline operations, reduce costs, and enhance customer
              experience leading to fulfillment and satisfaction.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-customRed w-6 h-6" />
              <h2 className="text-xl font-bold text-black tracking-wide">VISION STATEMENT</h2>
            </div>
            <p className="text-black text-sm lg:text-base leading-relaxed">
              To be the leading logistics and supply chain company in Nigeria,
              known for innovation, reliability, and excellence in service
              delivery.
            </p>
          </div>
        </div>

        {/* Aims & Objectives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Aims & Objectives
          </h2>
          <ul className="list-disc list-inside space-y-3 text-black text-sm lg:text-base">
            {aimsandobj.map((item, index) => (
              <li key={index} className="leading-relaxed flex items-center">
                <CircleCheckBig className="mr-3 text-customRed flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            CORE VALUES
          </h2>
          <div className="space-y-6">
            {corevalues.map((value, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded-lg overflow-hidden"
              >
                {/* Number box */}
                <div
                  className={`px-5 py-4 text-white font-bold text-lg ${
                    index % 2 === 0 ? "bg-red-600" : "bg-black"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Value text */}
                <div className="px-5 py-4 text-sm lg:text-base text-black font-medium">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
