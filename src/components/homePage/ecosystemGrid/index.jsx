import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BWBS from "../../../assets/regionHighlights/BWBS.webp";
import SWB from "../../../assets/regionHighlights/SWB.webp";
import ESSF from "../../../assets/regionHighlights/ESSF.webp";
import BG from "../../../assets/regionHighlights/BG.webp";
import CDF from "../../../assets/regionHighlights/CDF.webp";
import CWH from "../../../assets/regionHighlights/CWH.webp";
import ICH from "../../../assets/regionHighlights/ICH.webp";
import IDF from "../../../assets/regionHighlights/IDF.webp";
import MH from "../../../assets/regionHighlights/MH.webp";
import IMA from "../../../assets/regionHighlights/IMA_CMA_BAFA.webp";
import MS from "../../../assets/regionHighlights/MS.webp";
import PP from "../../../assets/regionHighlights/PP.webp";
import SBPS from "../../../assets/regionHighlights/SBPS.webp";
import SBS from "../../../assets/regionHighlights/SBS.webp";

const sections = {
  Northern: [
    { name: "Boreal White and Black Spruce (BWBS)", color: "bg-[#556B2F]" },
    { name: "Spruce Willow Birch (SWB)", color: "bg-[#556B2F]" },
    { name: "Engelmann Spruce Subalpine Fir (ESSF)", color: "bg-[#556B2F]" },
    { name: "Boreal Altai Fescue Alpine (BAFA)", color: "bg-[#556B2F]" },
  ],
  "Central Interior": [
    { name: "Sub-Boreal Pine Spruce (SBPS)", color: "bg-[#008080]" },
    { name: "Sub-Boreal Spruce (SBS)", color: "bg-[#008080]" },
    { name: "Montane Spruce (MS)", color: "bg-[#008080]" },
    { name: "Interior Cedar-Hemlock (ICH)", color: "bg-[#008080]" },
    { name: "Interior Douglas-Fir (IDF)", color: "bg-[#008080]" },
    { name: "Engelmann Spruce Subalpine Fir (ESSF)", color: "bg-[#008080]" },
    { name: "Interior Mountain-Heather Alpine (IMA)", color: "bg-[#008080]" },
  ],
  "Southern Interior": [
    { name: "Bunchgrass (BG)", color: "bg-[#6B5B95]" },
    { name: "Ponderosa Pine (PP)", color: "bg-[#6B5B95]" },
    { name: "Engelmann Spruce Subalpine Fir (ESSF)", color: "bg-[#6B5B95]" },
  ],
  Coastal: [
    { name: "Coastal Douglas Fir (CDF)", color: "bg-[#7B9BD1]" },
    { name: "Coastal Western Hemlock (CWH)", color: "bg-[#7B9BD1]" },
    { name: "Mountain Hemlock (MH)", color: "bg-[#7B9BD1]" },
    { name: "Coastal Mountain-Heather Alpine (CMHA)", color: "bg-[#7B9BD1]" },
  ],
};

const routeMap = {
  "Boreal White and Black Spruce (BWBS)": "/Boreal-White-and-Black-Spruce",
  "Spruce Willow Birch (SWB)": "/Spruce-Willow-Birch",
  "Engelmann Spruce Subalpine Fir (ESSF)": "/Engelmann-Spruce-Subalpine-Fir",
  "Boreal Altai Fescue Alpine (BAFA)": "/Alpine-Tundra",

  "Sub-Boreal Pine Spruce (SBPS)": "/Sub-Boreal-Pine-Spruce",
  "Sub-Boreal Spruce (SBS)": "/Sub-Boreal-Spruce",
  "Montane Spruce (MS)": "/Montane-Spruce",
  "Interior Cedar-Hemlock (ICH)": "/Interior-Cedar-Hemlock",
  "Interior Douglas-Fir (IDF)": "/Interior-Douglas-Fir",
  "Interior Mountain-Heather Alpine (IMA)": "/Alpine-Tundra",

  "Bunchgrass (BG)": "/Bunchgrass",
  "Ponderosa Pine (PP)": "/Ponderosa-Pine",

  "Coastal Douglas Fir (CDF)": "/Coastal-Douglas-Fir",
  "Coastal Western Hemlock (CWH)": "/Coastal-Western-Hemlock",
  "Mountain Hemlock (MH)": "/Mountain-Hemlock",
  "Coastal Mountain-Heather Alpine (CMHA)": "/Alpine-Tundra",
};

const imageMap = {
  "Boreal White and Black Spruce (BWBS)": BWBS,
  "Spruce Willow Birch (SWB)": SWB,
  "Engelmann Spruce Subalpine Fir (ESSF)": ESSF,
  "Boreal Altai Fescue Alpine (BAFA)": IMA,
  "Sub-Boreal Pine Spruce (SBPS)": SBPS,
  "Sub-Boreal Spruce (SBS)": SBS,
  "Montane Spruce (MS)": MS,
  "Interior Cedar-Hemlock (ICH)": ICH,
  "Interior Douglas-Fir (IDF)": IDF,
  "Interior Mountain-Heather Alpine (IMA)": IMA,
  "Bunchgrass (BG)": BG,
  "Ponderosa Pine (PP)": PP,
  "Coastal Douglas Fir (CDF)": CDF,
  "Coastal Western Hemlock (CWH)": CWH,
  "Mountain Hemlock (MH)": MH,
  "Coastal Mountain-Heather Alpine (CMHA)": IMA,
};

export default function EcosystemGrid() {
  return (
    <div className="scroll-mt-32">
      <section className="bg-[#FCF5EE] m-12 rounded-xl shadow-lg py-16 px-4">
        <h2 className="text-center text-3xl font-semibold mb-6">
          EXPLORE BC'S ECOSYSTEMS
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          British Columbia is home to some of the most diverse ecosystems in the
          world. Discover the unique flora, fauna, and landscapes that make each
          region special.
        </p>
        <div className="max-w-[1600px] mx-auto space-y-12">
          {Object.entries(sections).map(([region, ecosystems]) => (
            <div
              key={region}
              id={region.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-32"
            >
              <h3 className="font-regular-header mb-4">{region}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                {ecosystems.map(({ name, color }) => {
                  const path = routeMap[name];
                  return (
                    <Link to={path} key={name}>
                      <motion.div
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.05 },
                        }}
                        className={`relative overflow-hidden text-white px-4 py-4 rounded shadow 
    w-full h-[240px] lg:h-[420px] 
    flex flex-col justify-end cursor-pointer`}
                      >
                        {/* Background Image */}
                        <motion.div
                          variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 0.9 },
                          }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 z-0"
                          style={{
                            backgroundImage: `url(${imageMap[name]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />

                        {/* Semi-transparent Color Overlay */}
                        <div
                          className={`absolute inset-0 z-[1] ${color} opacity-70`}
                        />

                        {/* Foreground Text */}
                        <div className="relative z-10">
                          <div className="text-left font-card leading-tight break-words text-[clamp(0.85rem,3.5vw,2.125rem)] w-full">
                            {name.split(" (")[0]}
                          </div>

                          <div className="text-[clamp(0.75rem,3vw,0.9rem)] text-left opacity-80 mt-1 tracking-wider">
                            ({name.split(" (")[1]}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
