import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroVideo from "/frontPage.mp4";
import EcosystemSelector from "../../ecosystemSelector";

export default function Intro() {
  const fullText = "EXPLORE THE ECOSYSTEMS OF BC";
  const words = fullText.split(" ");
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [showSelector, setShowSelector] = useState(false);
  const toggleSelector = () => setShowSelector((prev) => !prev);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-visible"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* BACKGROUND VIDEO */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full z-0">
        <motion.div style={{ y }} className="relative w-full h-full">
          <video
            src={HeroVideo}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            className="min-w-screen h-full object-cover"
          />
        </motion.div>
      </div>

      {/* OVERLAY CONTENT */}
      <div className="relative z-10 w-full px-4 text-white">
        <div className="flex flex-col lg:flex-row justify-around items-center w-full mx-auto gap-8">
          {/* LEFT: Welcome + Button */}
          <div className="flex mx-8 flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <h1 className="font-hero-header sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108pt] font-bold leading-tight text-balance">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.button
              onClick={toggleSelector}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-kapital-big-button px-6 py-3 bg-[#4C6440] rounded-xl text-white text-sm sm:text-base md:text-lg xl:text-xl mt-6"
            >
              {showSelector ? "Hide Ecosystems" : "Explore"}
            </motion.button>
          </div>

          {/* RIGHT: Ecosystem Selector */}
          <div className="w-full flex justify-center lg:justify-end z-10">
            <AnimatePresence>
              {showSelector && (
                <motion.div
                  key="ecosystem-selector"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="block lg:w-1/2 flex justify-center lg:justify-end"
                >
                  <EcosystemSelector />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
