import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const advantagesList = [
  "Integrated logistics solutions under one roof, from transportation to warehousing and distribution.",
  "Experienced and professional team committed to efficiency, safety, and reliability.",
  "Cutting-edge technology for fleet tracking, inventory management, and supply chain optimization.",
  "Strong partnerships with carriers, manufacturers, and suppliers to ensure competitive pricing and dependable service.",
  "Commitment to customer satisfaction and transparent operations.",
];

const strategies = [
  {
    title: "Expansion of Fleet Size and Logistics Coverage:",
    body: "We aim to increase our fleet capacity and extend our transportation network across Nigeria and to international routes, ensuring wider reach and faster delivery times.",
  },
  {
    title: "Strategic Investment in Warehousing, Technology, and Infrastructure:",
    body: "By investing in modern warehouses, advanced inventory management systems, and state-of-the-art transport infrastructure, we enhance efficiency, reduce operational costs, and support seamless logistics operations.",
  },
  {
    title: "Development of E-Hailing Platforms and Smart Fleet Management:",
    body: "We leverage technology to provide innovative ride-hailing solutions, track fleet performance, optimize routes, and improve service delivery for both individual and corporate clients.",
  },
  {
    title: "Strengthening Partnerships with Carriers, Manufacturers, and Industry Stakeholders:",
    body: "Building strong relationships with key partners allows us to negotiate better rates, expand market reach, and deliver superior services to clients.",
  },
  {
    title: "Continuous Training and Capacity Building:",
    body: "We invest in the development of our workforce through training programs, workshops, and skills enhancement initiatives to maintain high professional standards and operational excellence.",
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
    <div className="container mx-auto px-5 py-16">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold mb-12 text-center text-customRed"
      >
        Why Choose Us?
      </motion.h2>

      {/* Advantages list */}
      <ul className="space-y-6 mb-12">
        {advantagesList.map((advantage, index) => (
          <li key={index} className="flex items-start">
            <CircleCheckBig className="mr-3 text-customRed flex-shrink-0 mt-1" />
            <p className="text-gray-700">{advantage}</p>
          </li>
        ))}
      </ul>

      {/* Legacy & Leadership side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 p-6 rounded-2xl mb-12">
        <div>
          <h3 className="text-2xl font-semibold text-customRed mb-3">
            OUR LEGACY POSITIONING
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Muuvylity Logistics Ltd is committed to leaving a lasting legacy of
            innovation, reliability, and excellence in the logistics and supply
            chain sector in Nigeria. Our work extends beyond moving goods; we
            empower businesses by improving operational efficiency, reducing
            costs, and creating employment opportunities. By integrating modern
            technology, optimized supply chains, and professional service
            delivery, we contribute to the growth of commerce, strengthen the
            national logistics infrastructure, and foster economic development
            that benefits communities and stakeholders nationwide.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-customRed mb-3">
            LEADERSHIP
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The leadership team at Muuvylity Logistics Ltd is composed of
            seasoned professionals with extensive experience in logistics,
            transportation, supply chain management, and corporate governance.
            Their combined expertise guides strategic planning, operational
            execution, and continuous improvement across all company operations.
            Our leaders prioritize innovation, customer satisfaction, and
            sustainable business practices, ensuring that Muuvylity Logistics
            Ltd remains at the forefront of the logistics industry. Through
            strong governance, strategic vision, and hands-on management, the
            leadership team drives growth, builds partnerships, and delivers
            value to clients, partners, and the broader community.
          </p>
        </div>
      </div>

      {/* Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-customRed mb-6">
          STRATEGIES FOR GROWTH AND SUCCESS
        </h3>
        <p className="text-gray-700 mb-6">
          Muuvylity Logistics Ltd employs a dynamic and forward-looking strategy
          to drive sustainable growth, expand service coverage, and maintain
          excellence in logistics and supply chain management. Key strategies
          include:
        </p>

        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              custom={index}
              variants={cardVariants}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white shadow-md"
            >
              <h4 className="text-lg font-semibold text-customRed mb-2">
                {strategy.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{strategy.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-700 mt-6">
          Through these strategies, Muuvylity Logistics Ltd ensures sustainable
          growth, operational efficiency, and consistent delivery of high-quality
          logistics services to clients across all sectors.
        </p>
      </div>

      {/* Craftsmanship */}
      <div>
        <h3 className="text-2xl font-semibold text-customRed mb-4">
          CRAFTSMANSHIP AND QUALITY
        </h3>
        <p className="text-gray-700 leading-relaxed">
          MUUVYLITY LOGISTICS LTD is dedicated to achieving excellence in every
          facet of logistics and supply chain management. From transportation
          and haulage to warehousing, fleet management, and specialized logistics
          services, we prioritize quality, reliability, and efficiency. We
          leverage advanced technology, modern equipment, and industry best
          practices to ensure that every operation is executed safely, on time,
          and to the highest standard. Our commitment to craftsmanship and
          quality extends to continuous monitoring, rigorous maintenance of
          vehicles and facilities, and adherence to operational protocols that
          guarantee the integrity and safety of goods in transit. By maintaining
          strict quality control, implementing innovative solutions, and
          fostering a culture of excellence, Muuvylity Logistics Ltd builds
          trust with clients, strengthens its market reputation, and consistently
          delivers value across all logistics and supply chain services.
        </p>
      </div>
    </div>
  );
};

export default Advantages;
