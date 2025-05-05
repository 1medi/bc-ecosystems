import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/gridCard/bg.JPEG";

const colorMap = {
  "Boreal White and Black Spruce (BWBS)": "bg-[#556B2F]",
  "Spruce Willow Birch (SWB)": "bg-[#556B2F]",
  "Engelmann Spruce Subalpine Fir (ESSF)": "bg-[#556B2F]",
  "Boreal Altai Fescue Alpine (BAFA)": "bg-[#556B2F]",

  "Sub-Boreal Pine Spruce (SBPS)": "bg-[#008080]",
  "Sub-Boreal Spruce (SBS)": "bg-[#008080]",
  "Montane Spruce (MS)": "bg-[#008080]",
  "Interior Cedar-Hemlock (ICH)": "bg-[#008080]",
  "Interior Douglas-Fir (IDF)": "bg-[#008080]",
  "Interior Mountain-heather Alpine (IMA)": "bg-[#008080]",

  "Bunchgrass (BG)": "bg-purple-500",
  "Ponderosa Pine (PP)": "bg-purple-500",

  "Coastal Douglas Fir (CDF)": "bg-pink-600",
  "Coastal Western Hemlock (CWH)": "bg-pink-600",
  "Mountain Hemlock (MH)": "bg-pink-600",
  "Coastal Mountain-heather Alpine (CMHA)": "bg-pink-600",
};

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
    { name: "Interior Mountain-heather Alpine (IMA)", color: "bg-[#008080]" },
  ],
  "Southern Interior": [
    { name: "Bunchgrass (BG)", color: "bg-purple-500" },
    { name: "Ponderosa Pine (PP)", color: "bg-purple-500" },
    { name: "Engelmann Spruce Subalpine Fir (ESSF)", color: "bg-purple-500" },
  ],
  Coastal: [
    { name: "Coastal Douglas Fir (CDF)", color: "bg-pink-600" },
    { name: "Coastal Western Hemlock (CWH)", color: "bg-pink-600" },
    { name: "Mountain Hemlock (MH)", color: "bg-pink-600" },
    { name: "Coastal Mountain-heather Alpine (CMHA)", color: "bg-pink-600" },
  ],
};

const routeMap = {
  "Boreal White and Black Spruce (BWBS)": "/Boreal-White-and-Black-Spruce",
  "Spruce Willow Birch (SWB)": "/Spruce-Willow-Birch",
  "Engelmann Spruce Subalpine Fir (ESSF)": "/Engelmann-Spruce-Subalpine-Fir",
  "Boreal Altai Fescue Alpine (BAFA)": "/Boreal-Altai-Fescue-Alpine",

  "Sub-Boreal Pine Spruce (SBPS)": "/Sub-Boreal-Pine-Spruce",
  "Sub-Boreal Spruce (SBS)": "/Sub-Boreal-Spruce",
  "Montane Spruce (MS)": "/Montane-Spruce",
  "Interior Cedar-Hemlock (ICH)": "/Interior-Cedar-Hemlock",
  "Interior Douglas-Fir (IDF)": "/Interior-Douglas-Fir",
  "Interior Mountain-heather Alpine (IMA)": "/Interior-Mountain-Heather-Alpine",

  "Bunchgrass (BG)": "/Bunchgrass",
  "Ponderosa Pine (PP)": "/Ponderora-Pine",

  "Coastal Douglas Fir (CDF)": "/Coastal-Douglas-Fir",
  "Coastal Western Hemlock (CWH)": "/Coastal-Western-Hemlock",
  "Mountain Hemlock (MH)": "/Mountain-Hemlock",
  "Coastal Mountain-heather Alpine (CMHA)":
    "/Coastal-Mountain-Altai-Fescue-Alpine",
};

const imageMap = {
  "Boreal White and Black Spruce (BWBS)": bgImage,
  "Spruce Willow Birch (SWB)": bgImage,
  "Engelmann Spruce Subalpine Fir (ESSF)": bgImage,
  "Boreal Altai Fescue Alpine (BAFA)": bgImage,
  "Sub-Boreal Pine Spruce (SBPS)": bgImage,
  "Sub-Boreal Spruce (SBS)": bgImage,
  "Montane Spruce (MS)": bgImage,
  "Interior Cedar-Hemlock (ICH)": bgImage,
  "Interior Douglas-Fir (IDF)": bgImage,
  "Interior Mountain-heather Alpine (IMA)": bgImage,
  "Bunchgrass (BG)": bgImage,
  "Ponderosa Pine (PP)": bgImage,
  "Coastal Douglas Fir (CDF)": bgImage,
  "Coastal Western Hemlock (CWH)": bgImage,
  "Mountain Hemlock (MH)": bgImage,
  "Coastal Mountain-heather Alpine (CMHA)": bgImage,
};

export default function EcosystemGrid() {
  return (
    <section className="bg-white py-16 px-4">
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
          <div key={region}>
            <h3 className="font-regular-header mb-4">{region}</h3>
            <div className="flex flex-wrap gap-4 justify-center items-center">
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
                      className={`relative overflow-hidden text-white px-6 py-4 rounded shadow text-center sm:min-w-[145px] lg:min-w-[345px] min-h-[500px] cursor-pointer`}
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
                        <div className="text-left font-card-title max-w-[200px]">
                          {name.split(" (")[0]}
                        </div>
                        <div className="text-sm text-left opacity-80 mt-1 tracking-wider">
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
  );
}
