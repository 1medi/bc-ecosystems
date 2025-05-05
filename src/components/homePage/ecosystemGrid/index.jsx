import { motion } from "framer-motion";

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
    { name: 'Boreal White and Black Spruce (BWBS)', color: 'bg-[#556B2F]' },
    { name: 'Spruce Willow Birch (SWB)', color: 'bg-[#556B2F]' },
    { name: 'Engelmann Spruce Subalpine Fir (ESSF)', color: 'bg-[#556B2F]' },
    { name: 'Boreal Altai Fescue Alpine (BAFA)', color: 'bg-[#556B2F]' },
  ],
  'Central Interior': [
    { name: 'Sub-Boreal Pine Spruce (SBPS)', color: 'bg-[#008080]' },
    { name: 'Sub-Boreal Spruce (SBS)', color: 'bg-[#008080]' },
    { name: 'Montane Spruce (MS)', color: 'bg-[#008080]' },
    { name: 'Interior Cedar-Hemlock (ICH)', color: 'bg-[#008080]' },
    { name: 'Interior Douglas-Fir (IDF)', color: 'bg-[#008080]' },
    { name: 'Engelmann Spruce Subalpine Fir (ESSF)', color: 'bg-[#008080]' },
    { name: 'Interior Mountain-heather Alpine (IMA)', color: 'bg-[#008080]' },
  ],
  'Southern Interior': [
    { name: 'Bunchgrass (BG)', color: 'bg-purple-500' },
    { name: 'Ponderosa Pine (PP)', color: 'bg-purple-500' },
    { name: 'Engelmann Spruce Subalpine Fir (ESSF)', color: 'bg-purple-500' },
  ],
  Coastal: [
    { name: 'Coastal Douglas Fir (CDF)', color: 'bg-pink-600' },
    { name: 'Coastal Western Hemlock (CWH)', color: 'bg-pink-600' },
    { name: 'Mountain Hemlock (MH)', color: 'bg-pink-600' },
    { name: 'Coastal Mountain-heather Alpine (CMHA)', color: 'bg-pink-600' },
  ],
}


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
      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(sections).map(([region, ecosystems]) => (
          <div key={region}>
            <h3 className="text-2xl font-bold mb-4">{region}</h3>
            <div className="flex flex-wrap gap-4">
              {ecosystems.map(({ name, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    color || "bg-gray-600"
                  } text-white px-6 py-4 rounded shadow text-center min-w-[345px] min-h-[500px] cursor-pointer`}
                >
                  <div className="text-base font-semibold">
                    {name.split(" (")[0]}
                  </div>
                  <div className="text-sm opacity-80 mt-1 tracking-wider">
                    ({name.split(" (")[1]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
