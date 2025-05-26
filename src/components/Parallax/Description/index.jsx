import React from "react";
import { motion } from "framer-motion";

const acknowledgements = [
  {
    region: "Vancouver Island",
    text: "On Vancouver Island, we recognize the lək̓ʷəŋən-speaking peoples...",
    image: "https://via.placeholder.com/800x500?text=Vancouver+Island",
  },
  {
    region: "Lower Mainland",
    text: "In the Lower Mainland, we acknowledge the Musqueam, Squamish...",
    image: "https://via.placeholder.com/800x500?text=Lower+Mainland",
  },
  {
    region: "Cariboo",
    text: "In the Cariboo region, we acknowledge the T’exelcemc and Tsq’escenemc...",
    image: "https://via.placeholder.com/800x500?text=Cariboo",
  },
  {
    region: "Thompson-Okanagan",
    text: "In the Thompson-Okanagan, we recognize the Nlaka’pamux, Syilx...",
    image: "https://via.placeholder.com/800x500?text=Thompson-Okanagan",
  },
  {
    region: "Kootenays",
    text: "In the Kootenays, we acknowledge the Ktunaxa and Sinixt Peoples...",
    image: "https://via.placeholder.com/800x500?text=Kootenays",
  },
  {
    region: "Northern B.C.",
    text: "In Northern B.C., we recognize the Haida, Nisga’a, Tsimshian...",
    image: "https://via.placeholder.com/800x500?text=Northern+BC",
  },
];

export default function Description() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="relative">
        <div className="overflow-x-scroll scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-10 px-10 w-max">
            {acknowledgements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="w-[80vw] md:w-[50vw] flex-shrink-0 bg-gray-100 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="w-full h-60">
                  <img
                    src={item.image}
                    alt={item.region}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.region}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
