import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import MHVEG1 from "../../assets/mh/mhVeg2.webp";
import MHVEG3 from "../../assets/mh/mhVeg3.webp";
import ICH from "../../assets/ich/ich.png";

const ecosystems = [
  {
    name: "Coastal",
    id: "coastal",
    images: [MHVEG1, MHVEG3],
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
    images: [MHVEG1],
    ringColor: "ring-purple-400",
  },
  {
    name: "Southern Interior",
    id: "Southern-Interior",
    images: [MHVEG1],
    ringColor: "ring-green-400",
  },
];

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
        className={`fixed -top-30 -left-200 z-[99999] w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl scale-105 backdrop-blur-md ring-4 ${hovered.ringColor}`}
        style={{ translateX: springX, translateY: springY }}
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img
          src={hovered.images[0]}
          alt={hovered.name}
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
    ) : null;

  return (
    <div className="relative flex flex-col gap-4 text-right">
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
          <a
            href={`#${eco.id}`}
            className="font-hero-header font-semibold text-white hover:text-green-300 transition-colors"
          >
            {eco.name}
          </a>
        </div>
      ))}

      {createPortal(bubble, document.body)}
    </div>
  );
}
