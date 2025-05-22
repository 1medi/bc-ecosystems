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
    { name: "Boreal White and Black Spruce", img: BWBS },
    { name: "Spruce–Willow–Birch", img: SWB },
    { name: "Engelmann Spruce–Subalpine Fir", img: ESSF },
    { name: "Alpine Tundra / CMA / BAFA", img: IMA },
  ],
  "Central Interior": [
    { name: "Sub-Boreal Pine–Spruce", img: SBPS },
    { name: "Sub-Boreal Spruce", img: SBS },
    { name: "Montane Spruce", img: MS },
    { name: "Interior Cedar–Hemlock", img: ICH },
    { name: "Interior Douglas-fir", img: IDF },
  ],
  "Southern Interior": [
    { name: "Bunchgrass", img: BG },
    { name: "Ponderosa Pine", img: PP },
    { name: "Engelmann Spruce–Subalpine Fir", img: ESSF },
  ],
  Coastal: [
    { name: "Coastal Douglas-fir", img: CDF },
    { name: "Coastal Western Hemlock", img: CWH },
    { name: "Mountain Hemlock", img: MH },
    { name: "Alpine Tundra / CMA / BAFA", img: IMA },
  ],
};

export default function InteractiveMapSidebar() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <>
      <PageWrapper>
        <div className="flex flex-col md:flex-row justify-center items-center p-8 gap-4 max-w-screen-lg mx-auto">
          <div className="w-full md:w-2/3 max-w-[650px]  bg-white flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedZone ? selectedZone.name : "BEC Map"}
                src={selectedZone ? selectedZone.img : BEC}
                alt={selectedZone ? selectedZone.name : "BC Zones"}
                className="max-w-full max-h-[500px] rounded-xl object-contain"
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
              Ecosystems of British Columbia
            </h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
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
