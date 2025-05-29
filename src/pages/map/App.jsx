import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BEC from "../../assets/regionHighlights/BEC.webp";
import BG from "../../assets/regionHighlights/BG.webp";
import BWBS from "../../assets/regionHighlights/BWBS.webp";
import CDF from "../../assets/regionHighlights/CDF.webp";
import CWH from "../../assets/regionHighlights/CWH.webp";
import ESSF from "../../assets/regionHighlights/ESSF.webp";
import IDF from "../../assets/regionHighlights/IDF.webp";
import ICH from "../../assets/regionHighlights/ICH.webp";
import PP from "../../assets/regionHighlights/PP.webp";
import MS from "../../assets/regionHighlights/MS.webp";
import MH from "../../assets/regionHighlights/MH.webp";
import IMA from "../../assets/regionHighlights/IMA_CMA_BAFA.webp";
import SBPS from "../../assets/regionHighlights/SBPS.webp";
import SBS from "../../assets/regionHighlights/SBS.webp";
import SWB from "../../assets/regionHighlights/SWB.webp";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../../components/pageWrapper";

const groupedZones = {
  "Northern BC": [
    {
      name: "Boreal White and Black Spruce",
      img: BWBS,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Spruce–Willow–Birch",
      img: SWB,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Engelmann Spruce–Subalpine Fir",
      img: ESSF,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Alpine Tundra / CMA / BAFA",
      img: IMA,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
  ],
  "Central Interior": [
    {
      name: "Sub-Boreal Pine–Spruce",
      img: SBPS,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Sub-Boreal Spruce",
      img: SBS,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Montane Spruce",
      img: MS,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Interior Cedar–Hemlock",
      img: ICH,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Interior Douglas-fir",
      img: IDF,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
  ],
  "Southern Interior": [
    {
      name: "Bunchgrass",
      img: BG,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Ponderosa Pine",
      img: PP,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Engelmann Spruce–Subalpine Fir",
      img: ESSF,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
  ],
  Coastal: [
    {
      name: "Coastal Douglas-fir",
      img: CDF,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Coastal Western Hemlock",
      img: CWH,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Mountain Hemlock",
      img: MH,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
    {
      name: "Alpine Tundra / CMA / BAFA",
      img: IMA,
      description:
        "Dominated by spruce forests and cold winters, typical of northern boreal zones.",
    },
  ],
};

export default function InteractiveMapSidebar() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <>
      <PageWrapper>
        <h1 className="font-hero-header text-center">British Columbia Heatmap</h1>
        <div className="flex flex-col md:flex-row justify-center items-center  gap-4 max-w-screen-lg  mx-auto">
          
          <div className="w-full md:w-2/3 max-w-[650px] bg-white flex flex-col items-center justify-center text-center">
            {selectedZone && (
              <>
                <div className="mb-4 text-center px-4">
                  <h1 className="text-2xl md:text-3xl font-semibold text-green-700 mb-2">
                    {selectedZone.name}
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
                    {selectedZone.description}
                  </p>
                </div>
              </>
            )}
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedZone ? selectedZone.name : "BEC Map"}
                src={selectedZone ? selectedZone.img : BEC}
                alt={selectedZone ? selectedZone.name : "BC Zones"}
                className="max-w-full max-h-[1200px] rounded-xl object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* right grouped list */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              See Our Ecosystems
            </h2>
            <div className="space-y-4 max-h-[1500px] overflow-y-auto pr-2">
              <div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedZone(null)}
                  className={`cursor-pointer p-3 rounded-lg border transition-colors text-sm font-medium text-center mb-4
    ${
      !selectedZone
        ? "bg-green-100 text-green-900 border-green-400"
        : "bg-white text-blue-700 hover:bg-blue-50 border-gray-200"
    }`}
                >
                  BEC Map
                </motion.div>
              </div>
              {Object.entries(groupedZones).map(([region, zones]) => (
                <div key={region} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    {region}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {zones.map((zone) => (
                      <motion.div
                        key={zone.name}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedZone(zone)}
                        className={`cursor-pointer p-3 rounded-lg border transition-colors text-sm font-medium text-center 
            ${
              selectedZone?.name === zone.name
                ? "bg-green-100 text-green-900 border-green-400"
                : "bg-white text-blue-700 hover:bg-blue-50 border-gray-200"
            }`}
                      >
                        {zone.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
