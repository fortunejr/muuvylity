import { BoxIcon, Globe, Ship, Warehouse } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <div className="bg-customRed py-10 pb-16 h-12">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="text-white font-semibold text-lg tracking-wide"
      >
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <BoxIcon />
          Fast Delivery
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Ship />
          Global Shipping
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Warehouse />
          Warehousing Solutions
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Globe />
          Supply Chain Experts
        </h2>
      </Marquee>
    </div>
  );
}
