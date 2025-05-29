import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroVideo from "/frontPage.mp4";

export default function Intro() {
  const fullText = "EXPLORE THE ECOSYSTEMS OF BC";
  const words = fullText.split(" ");
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const handleScrollToSection = () => {
    const target = document.getElementById("ecosystems");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 z-10 bg-opacity-40 flex flex-col justify-center items-center lg:items-start text-center text-white px-4">
        <div className="flex flex-col items-center justify-center lg:items-start lg:w-3/5 xl:w-2/5 p-8 text-center lg:text-left">
          <h1 className="font-hero-header text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108pt] font-bold m-auto leading-tight text-balance">
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
        </div>
        <motion.a
          onClick={handleScrollToSection}
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-kapital-big-button mx-8 z-40 px-6 py-3 bg-[#4C6440] rounded-xl text-white text-sm sm:text-base md:text-lg xl:text-xl mt-6"
        >
          Explore
        </motion.a>
      </div>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <video
            src={HeroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="min-w-screen h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
