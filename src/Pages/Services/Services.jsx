import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  marine,
  supply,
  taxi,
  third_party,
  transportation,
  warehouse,
  imports,
} from "../../imports";

const services = [
  {
    heading: "Transportation & Haulage",
    body: "Muuvylity Logistics Ltd provides reliable, efficient, and secure transportation and haulage services across land, air, and sea to meet the diverse needs of individuals, businesses, and corporate clients. Our services cover the movement of goods of all types, including raw materials, finished products, heavy machinery, and sensitive cargo, ensuring they reach their destinations safely and on schedule. We employ a modern fleet of vehicles, including trucks, vans, and specialized carriers, complemented by strategic partnerships with air and sea transport providers for seamless logistics solutions. Our team of professional drivers, logistics planners, and support staff ensure careful handling, route optimization, and compliance with all relevant regulations. By integrating advanced tracking systems, real-time monitoring, and proactive communication, Muuvylity Logistics Ltd delivers peace of mind to clients, guaranteeing transparency, accountability, and timely delivery. Our comprehensive haulage solutions are designed to reduce operational costs, minimize transit risks, and support the growth and efficiency of our clients’ businesses.",
    img: transportation,
  },
  {
    heading: "E-Ride Taxi Services & Fleet Management",
    body: "Muuvylity Logistics Ltd provides modern e-ride taxi services designed to offer safe, convenient, and efficient transportation for individuals and corporate clients. Our fleet is equipped with advanced vehicle tracking systems, ensuring real-time monitoring, route optimization, and timely service delivery. In addition to ride-hailing, we offer comprehensive fleet management solutions for businesses, including vehicle maintenance scheduling, fuel monitoring, driver performance management, and utilization optimization. By leveraging technology and data-driven insights, we help clients reduce operational costs, improve service efficiency, and maximize the productivity of their transportation assets. Our e-ride and fleet management services are tailored to meet the demands of urban mobility, corporate logistics, and specialized transport requirements, providing a reliable, innovative, and customer-focused solution for modern mobility challenges.",
    img: taxi,
  },
  {
    heading: "Warehousing & Inventory Management",
    body: "Muuvylity Logistics Ltd provides comprehensive warehousing and inventory management solutions designed to optimize the storage, handling, and distribution of goods for businesses, manufacturers, and retailers. Our services cover secure storage, stock control, order processing, packaging, and timely distribution across multiple strategically located warehouses. We employ advanced inventory management systems, real-time tracking, and automated reporting tools to ensure optimal stock levels, minimize shortages or overstocking, and streamline order fulfillment processes. Our warehouses are equipped with modern storage facilities, climate control where needed, and safety systems to preserve the quality and integrity of goods. By integrating professional inventory planning, packaging solutions, and efficient logistics coordination, Muuvylity Logistics Ltd ensures that products move seamlessly through the supply chain, reducing operational costs, preventing delays, and enhancing overall customer satisfaction.",
    img: warehouse,
  },
  {
    heading: "Supply Chain Optimization",
    body: "Muuvylity Logistics Ltd specializes in streamlining end-to-end supply chain operations to ensure efficiency, cost-effectiveness, and timely delivery of goods from raw materials to end customers. Our approach involves analyzing every stage of the supply chain, identifying bottlenecks, and implementing strategies to optimize procurement, inventory management, transportation, and distribution. We leverage advanced logistics software, route optimization tools, and real-time data tracking to reduce operational costs, minimize delays, and improve overall service performance. By coordinating suppliers, carriers, warehouse operations, and delivery channels, we create a seamless flow of goods that enhances reliability and customer satisfaction. Our supply chain optimization services enable businesses to operate more efficiently, respond quickly to market demands, and maintain a competitive edge while ensuring products reach their destinations safely and on time.",
    img: supply,
  },
  {
    heading: "Third-Party & Specialized Logistics Services",
    body: "Muuvylity Logistics Ltd provides comprehensive third-party (3PL) and specialized logistics services, including fourth-party (4PL) logistics, inbound, outbound, and reverse logistics solutions, tailored to meet the unique needs of businesses and organizations. Our services cover the management of entire supply chains, coordination with multiple service providers, and optimization of transportation, warehousing, and distribution processes. We integrate advanced logistics technology, real-time tracking, and data-driven planning to ensure seamless operations, cost efficiency, and timely delivery. Inbound logistics focuses on the efficient movement of raw materials and supplies to manufacturing or storage facilities, while outbound logistics ensures finished products reach customers and markets promptly. Reverse logistics enables efficient returns, recycling, and waste management, supporting sustainability and operational flexibility. By offering end-to-end logistics solutions, Muuvylity Logistics Ltd helps businesses streamline their operations, reduce costs, improve customer satisfaction, and maintain a competitive advantage in a dynamic market environment.",
    img: third_party,
  },
  {
    heading: "Imports, Exports & Manufacturing Representation",
    body: "Muuvylity Logistics Ltd engages in the import, export, and distribution of manufactured goods, connecting producers to local and international markets. Our services encompass sourcing high-quality products, handling customs and regulatory compliance, and ensuring efficient transportation and delivery to clients worldwide. In addition, we act as trusted agents and representatives for manufacturers, promoting their products, managing sales channels, and providing after-sales support to strengthen brand presence and market penetration. By leveraging our extensive network, logistics expertise, and knowledge of international trade regulations, Muuvylity Logistics Ltd ensures seamless transactions, reduced operational risks, and reliable access to global markets for both manufacturers and clients.",
    img: imports,
  },
  {
    heading: "Marine Spare Parts & Mining Logistics Solutions",
    body: "Muuvylity Logistics Ltd provides a comprehensive range of logistics support services for the maritime sector through the provisions of marine spare parts and equipment for vessels, ensuring that maritime operations are efficient, safe, and reliable. Our supply chain covers sourcing, quality verification, and timely delivery of essential marine components to clients in shipping, transport, and industrial sectors. In addition, we provide the same service solutions in the mining sector thereby leading to efficiency and downtime for mining companies by helping with processing, and exportation of solid minerals, operating in full compliance with all relevant government regulations and licensing requirements. Our operations leverage modern technology, safety protocols, and sustainable practices to ensure responsible extraction and high-quality output for both domestic and international markets. By combining technical expertise, regulatory compliance, and robust logistics capabilities, Muuvylity Logistics Ltd delivers dependable marine solutions and mineral products, contributing to industrial growth and economic development.",
    img: marine,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white text-blue-500">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="bg-lime-100 px-2 py-10 mb-12 rounded-xl shadow-sm">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image side */}
              <div className="w-full">
                <img
                  src={service.img}
                  alt={service.heading}
                  className="w-full object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text side */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-100 pb-3">
                  {service.heading}
                </h3>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-left text-gray-700">{service.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
