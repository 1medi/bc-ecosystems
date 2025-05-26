import React from "react";
import { motion } from "framer-motion";

export default function Description() {
  const combinedAcknowledgement = `
    We respectfully acknowledge the Indigenous Peoples across what is now known as British Columbia. 
    On Vancouver Island, we recognize the lək̓ʷəŋən-speaking peoples. In the Lower Mainland, we acknowledge the Musqueam, Squamish, and Tsleil-Waututh. 
    In the Cariboo, the T’exelcemc and Tsq’escenemc are recognized. 
    Within the Thompson-Okanagan, we honour the Nlaka’pamux, Syilx, and Secwépemc Nations. 
    The Kootenays are home to the Ktunaxa and Sinixt Peoples. 
    In Northern B.C., we recognize the Haida, Nisga’a, Tsimshian, and many other Nations who have stewarded these lands since time immemorial.
  `;

  return (
    <section className="w-full bg-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="w-full h-60">
          <img
            src="https://via.placeholder.com/800x500?text=BC+Land+Acknowledgement"
            alt="Land Acknowledgement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Land Acknowledgement</h3>
          <p className="text-gray-700 leading-relaxed">{combinedAcknowledgement}</p>
        </div>
      </motion.div>
    </section>
  );
}
