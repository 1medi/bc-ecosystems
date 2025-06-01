import { useState } from "react";
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
import { Link } from "react-router-dom";

const groupedZones = {
  "Northern BC": [
    {
      name: "Boreal White & Black Spruce Zone (BWBS)",
      img: BWBS,
      link: "/Boreal-White-and-Black-Spruce",
      description:
        "The BWBS zone represents the boreal forest in BC, extending across North America and into northern Europe and Asia. It features a cool, moist climate, though it has the lowest precipitation of the northern subzones, with 35-55% occurring as snow. This zone occupies much of NE BC's northern Great Plains region and lower elevation valleys in more mountainous areas to the west.",
    },
    {
      name: "Spruce Willow Birch Zone (SWB)",
      img: SWB,
      link: "/Spruce-Willow-Birch",
      description:
        "The Spruce Willow Birch zone is a northern, interior, subalpine zone starting from roughly 57 degrees N latitude northward, extending into Yukon and likely the NWT. It is characterized by cold temperatures and a long duration of snow cover, with very short growing seasons in some areas. Zonal, climax ecosystems feature open stands of white spruce, sometimes with scattered subalpine fir, and a well-developed shrub strata of willows and scrub birch.",
    },
    {
      name: "Engelmann Spruce Subalpine Fir Zone (ESSF)",
      img: ESSF,
      link: "/Engelmann-Spruce-Subalpine-Fir",
      description:
        "The ESSF is an extensive, subalpine forest zone with a diverse climate, covering 14.4 million hectares (about 15% of BC). It is found below the Alpine Tundra and above other forest zones like MS, ICH, SBS, BWBS, and CWH. Climax ecosystems are dominated by dense forests of Engelmann spruce, with subalpine fir abundant in the understory and lower tree strata.",
    },
    {
      name: "Alpine Tundra Complex (AT)",
      img: IMA,
      link: "/Alpine-Tundra",
      description:
        "The Alpine Tundra zone is found at the highest elevations, above the treeline, and is characterized by a cold, windy environment with varying snowpack duration. Within the AT complex there are three Alpine Zones: Boreal Altai Fescue Alpine Tundra (BAFA), Interior Mountain Heather Alpine Tundra (IMA) and Coastal Mountain Heather Alpine Tundra (CMA)",
    },
  ],
  "Central Interior": [
    {
      name: "Sub-boreal Pine-Spruce Zone (SBPS)",
      img: SBPS,
      link: "/Sub-Boreal-Pine-Spruce",
      description:
        'The SBPS zone is located in west-central BC interior in the Chilcotin region and was created from Forest Service classification work in the Cariboo Forest Region in the mid-1970s. It is comparatively colder and drier than the Sub-boreal Spruce (SBS) zone and is subject to extreme cold from cold air drainage in the winter months. The landscape is a mosaic of forest patches interspersed with "wild hay meadows" (fens).',
    },
    {
      name: "Sub-boreal Spruce Zone (SBS)",
      img: SBS,
      link: "/Sub-Boreal-Spruce",
      description:
        "The Sub-boreal Spruce zone spans roughly 9-10 million hectares, mainly across gently to strongly rolling plateaus in the Central Interior of BC. It is situated between true montane forests to the south, boreal forest to the north, and subalpine forests at higher elevations, and is affected by moderate to long-term frequency, severe fire disturbance. Zonal, climax ecosystems are characterized by dense, hybrid spruce forest with some subalpine fir.",
    },
    {
      name: "Montane Spruce Zone (MS)",
      img: MS,
      link: "/Montane-Spruce",
      description:
        "The Montane Spruce zone shares similarities with some subzones of the IDF, ESSF, and SBS. It was identified as a distinct zone after initially being considered a transition between the IDF and ESSF. Lodgepole pine seral fire-generated plant communities are common in this zone, which is fairly important for forestry and summer grazing for livestock.",
    },
    {
      name: "Interior Cedar Hemlock Zone (ICH)",
      img: ICH,
      link: "/Interior-Cedar-Hemlock",
      description:
        "The ICH zone is located at lower elevations in southeastern BC, Quesnel and Shuswap highlands, and east of the Coast Mountains in NW BC. It experiences relatively heavy precipitation for an interior zone, with 25-50% falling as snow, and moisture from snowpack is thought to maintain flora similar to coastal zones. This zone boasts the highest tree species diversity of any zone in BC and is second only to coastal zones in potential forest productivity.",
    },
    {
      name: "Interior Douglas-Fir Zone (IDF)",
      img: IDF,
      link: "/Interior-Douglas-Fir",
      description:
        "The IDF zone is located in the southern and central interior regions of BC, between approximately 49 and 52 degrees N latitude. It has a continental climate with warm, dry summers and cool winters, with 20-50% of precipitation falling as snow. Douglas-fir is the main climax tree species on zonal sites, while lodgepole pine, ponderosa pine, hybrid spruce, and trembling aspen occur in seral stands or non-zonal sites.",
    },
    {
      name: "Engelmann Spruce Subalpine Fir Zone (ESSF)",
      img: ESSF,
      link: "/Engelmann-Spruce-Subalpine-Fir",
      description:
        "The ESSF is an extensive, subalpine forest zone with a diverse climate, covering 14.4 million hectares (about 15% of BC). It is found below the Alpine Tundra and above other forest zones like MS, ICH, SBS, BWBS, and CWH. Climax ecosystems are dominated by dense forests of Engelmann spruce, with subalpine fir abundant in the understory and lower tree strata.",
    },
    {
      name: "Alpine Tundra Complex (AT)",
      img: IMA,
      link: "/Alpine-Tundra",
      description:
        "The Alpine Tundra zone is found at the highest elevations, above the treeline, and is characterized by a cold, windy environment with varying snowpack duration. Within the AT complex there are three Alpine Zones: Boreal Altai Fescue Alpine Tundra (BAFA), Interior Mountain Heather Alpine Tundra (IMA) and Coastal Mountain Heather Alpine Tundra (CMA)",
    },
  ],
  "Southern Interior": [
    {
      name: "Bunchgrass Zone (BG)",
      img: BG,
      link: "/Bunchgrass",
      description:
        "The Bunchgrass zone is the warmest and driest zone, with mean annual precipitation ranging from 242-328 mm and mean annual temperatures between 5.8-9.2 C. It occurs at the lowest elevations in southern Interior valleys like the Okanagan, Thompson, and Fraser river valleys, typically below 900 m a.s.l.. This zone is characterized by few or no trees, with dominant vegetation including bluebunch wheatgrass, june grass, Sandberg’s bluegrass, big sagebrush, and rabbitbrush.",
    },
    {
      name: "Ponderosa Pine Zone (PP)",
      img: PP,
      link: "/Ponderosa-Pine",
      description:
        "The Ponderosa Pine zone is the warmest and driest forest zone in BC, found at the lowest elevations in southern interior valleys, often above the Bunchgrass zone. It has low or no commercial timber production due to low yield and poor log quality. This zone has potentially high values for wildlife, livestock, agriculture, recreational, and residential land uses.",
    },
    {
      name: "Engelmann Spruce Subalpine Fir Zone (ESSF)",
      img: ESSF,
      link: "/Engelmann-Spruce-Subalpine-Fir",
      description:
        "The ESSF is an extensive, subalpine forest zone with a diverse climate, covering 14.4 million hectares (about 15% of BC). It is found below the Alpine Tundra and above other forest zones like MS, ICH, SBS, BWBS, and CWH. Climax ecosystems are dominated by dense forests of Engelmann spruce, with subalpine fir abundant in the understory and lower tree strata.",
    },
  ],
  Coastal: [
    {
      name: "Coastal Douglas-fir Zone (CDF)",
      img: CDF,
      link: "/Coastal-Douglas-Fir",
      description:
        "The Coastal Douglas-fir zone is the warmest and driest coastal biogeoclimatic zone, covering a relatively small area of southwestern, coastal B.C.. It is found in parts of southern and eastern Vancouver Island, southern Gulf Islands, and portions of the Fraser delta, often in the rain shadow of the Olympic Mountains. The climate is warmer and drier in the summers and milder and drier in the winters compared to adjacent zones, and Garry oak ecosystems are uniquely found here in Canada.",
    },
    {
      name: "Coastal Western Hemlock Zone (CWH)",
      img: CWH,
      link: "/Coastal-Western-Hemlock",
      description:
        "The CWH is one of the largest and most extensive zones in BC, covering about 16 million hectares, approximately 11.3% of the province's area. It is the most extensive zone on the coast, ranging from dry units to very wet, hypermaritime units, with 10 subzones distinguished by precipitation and maritime influence. This is Canada's most productive forest zone, typically occurring from sea level to about 670 m a.s.l. (Above Sea Level).",
    },
    {
      name: "Mountain Hemlock Zone (MH)",
      img: MH,
      link: "/Mountain-Hemlock",
      description:
        "The Mountain Hemlock zone is the coastal subalpine forest biogeoclimatic zone, typically found between the CWH (below) and the AT (above) along the BC Mainland coast, including Vancouver Island and Haida Gwai. It receives heavy precipitation, much of it as snow, and soil freezing is superficial or absent due to early, deep snowpack. Zonal, climax ecosystems are characterized by mountain hemlock, sometimes with amabilis fir or yellow cedar, and western hemlock may be present at lower elevations.",
    },
    {
      name: "Alpine Tundra Complex (AT)",
      img: IMA,
      link: "/Alpine-Tundra",
      description:
        "The Alpine Tundra zone is found at the highest elevations, above the treeline, and is characterized by a cold, windy environment with varying snowpack duration. Within the AT complex there are three Alpine Zones: Boreal Altai Fescue Alpine Tundra (BAFA), Interior Mountain Heather Alpine Tundra (IMA) and Coastal Mountain Heather Alpine Tundra (CMA)",
    },
  ],
};

export default function InteractiveMapSidebar() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <>
      <PageWrapper>
        <div className="p-8 m-8 max-w-screen-5xl mx-auto bg-[#FCF5EE] rounded-xl shadow-xl ">
          <h1 className="font-section-header text-center p-4 ">
            British Columbia Ecosystems Map
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-around lg:items-around  gap-4 max-w-screen-5xl  mx-auto">
            <div className="w-full md:w-2/3 max-w-[650px] flex flex-col items-center justify-center  text-center">
              {selectedZone && (
                <>
                  <div className="mb-4 text-center px-4">
                    <h1 className="text-2xl md:text-3xl font-subheader text-green-700 mb-2">
                      {selectedZone.name}
                    </h1>
                    <p className="font-body-copy max-w-xl mx-auto leading-relaxed">
                      {selectedZone.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4"
                    >
                      <Link
                        to={selectedZone.link}
                        className="block px-5 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
                      >
                        Learn More
                      </Link>
                    </motion.div>
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
        : "bg-white text-black hover:bg-blue-50 border-gray-200"
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
                    <div className="grid m-4 grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                : "bg-white text-black hover:bg-blue-50 border-gray-200"
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
        </div>
      </PageWrapper>
    </>
  );
}
