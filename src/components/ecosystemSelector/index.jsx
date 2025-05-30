import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import CDFBubble from "../../assets/bubbleImages/cdfBubble.webp";
import BWBS from "../../assets/bwbs/bwbsHero.webp";
import ICH from "../../assets/bubbleImages/ichBubble.webp";
import PP from "../../assets/bubbleImages/ppBubble.webp";

const ecosystems = [
  {
    name: "Coastal",
    id: "coastal",
    images: [CDFBubble],
    ringColor: "ring-blue-400",
  },
  {
    name: "Central Interior",
    id: "central-interior",
    images: [ICH],
    ringColor: "ring-yellow-400",
  },
  {
    name: "Northern",
    id: "northern",
    images: [BWBS],
    ringColor: "ring-purple-400",
  },
  {
    name: "Southern Interior",
    id: "southern-interior",
    images: [PP],
    ringColor: "ring-green-400",
  },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function EcosystemSelector() {
  const [hovered, setHovered] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX + 24);
      y.set(e.clientY + 24);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, [x, y]);

  const bubble =
    isHovering && hovered ? (
      <motion.div
        className={`fixed -top-40 -left-125 lg:-top-30 lg:-left-150 z-[99999] w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl scale-105 backdrop-blur-md ring-4 ${hovered.ringColor}`}
        style={{ translateX: springX, translateY: springY }}
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
          <p className="font-button text-white text-sm font-semibold">
            See more!
          </p>
        </div>
        <img
          src={hovered.images[0]}
          alt={hovered.name}
          className="z-0 w-full h-full object-cover scale-110"
        />
      </motion.div>
    ) : null;

  return (
    <div className="relative flex flex-col gap-12 text-right m-8">
      {ecosystems.map((eco) => (
        <div
          key={eco.id}
          onMouseEnter={() => {
            setHovered(eco);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setHovered(null);
            setIsHovering(false);
          }}
        >
          <button
            onClick={() => {
              setHovered(null);
              setIsHovering(false);
              scrollToId(eco.id);
            }}
            className="font-card-title font-semibold text-white hover:text-green-300 transition-colors text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl cursor-pointer"
          >
            {eco.name}
          </button>
        </div>
      ))}

      {createPortal(bubble, document.body)}
    </div>
  );
}
