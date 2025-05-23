import Background from "../../../../public/images/1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import HeroVideo from "../../../assets/videos/frontPage.mp4";

export default function Section() {
  const fullText = "EXPLORE THE ECOSYSTEMS OF BC";
  const [index, setIndex] = useState(0);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
     <div className="absolute inset-0 z-10 bg-opacity-40 flex flex-col justify-center items-center lg:items-start text-center text-white px-4">

        <div className="flex flex-col items-center justify-center lg:items-start lg:w-3/5 xl:w-2/5 p-8 text-center lg:text-left">
          <h1 className="font-hero-header text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108pt] font-bold m-auto leading-tight text-balance">
            {fullText
              .slice(0, index)
              .split("")
              .map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: idx * 0.01 }}
                >
                  {char}
                </motion.span>
              ))}
            <motion.span
              className="inline-block"
              animate={{ opacity: [0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              |
            </motion.span>
          </h1>
          <motion.a className="font-kapital-big-button px-6 py-3 bg-[#4C6440] rounded-xl text-white text-sm sm:text-base md:text-lg xl:text-xl mt-6">
            Explore
          </motion.a>
        </div>
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
