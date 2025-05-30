import React from "react";
import { motion } from "framer-motion";
import Slideshow from "../../slideshow";
import Acknowledgement1 from "../../../assets/acknowledgement/acknowledgement1.webp";
import Acknowledgement2 from "../../../assets/acknowledgement/acknowledgement2.webp";
export default function Description() {
  const combinedAcknowledgement = `
    We respectfully acknowledge the Indigenous Peoples across what is now known as British Columbia. 
    On Vancouver Island, we recognize the lək̓ʷəŋən-speaking peoples. In the Lower Mainland, we acknowledge the Musqueam, Squamish, and Tsleil-Waututh. 
    In the Cariboo, the T’exelcemc and Tsq’escenemc are recognized. 
    Within the Thompson-Okanagan, we honour the Nlaka’pamux, Syilx, and Secwépemc Nations. 
    The Kootenays are home to the Ktunaxa and Sinixt Peoples. 
    In Northern B.C., we recognize the Haida, Nisga’a, Tsimshian, and many other Nations who have stewarded these lands since time immemorial. We also would like to recognize the several other indigenous groups through the province.
  `;

  const slides = [
    {
      image: (
        <img
          src={Acknowledgement1}
          alt="Slide 1"
          className="w-full h-full object-fit"
        />
      ),
      description: "",
    },
    {
      image: (
        <img
          src={Acknowledgement2}
          alt="Slide 2"
          className="w-full h-full object-fit"
        />
      ),
      description: "",
    },
  ];

  return (
    <section className="w-full max-w-6xl m-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 m-8 bg-gray-100 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="w-full h-[240px] lg:h-120">
          <Slideshow slides={slides} />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Land Acknowledgement</h3>
          <p className="text-gray-700 leading-relaxed">
            {combinedAcknowledgement}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
