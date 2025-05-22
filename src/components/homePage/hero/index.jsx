import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroVideo from "../../../assets/videos/frontPage.mp4";

export default function HeroSection() {
  const fullText = "EXPLORE THE ECOSYSTEMS OF BC";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center lg:items-start text-center text-white px-4">
        <div className="flex flex-col items-center justify-center lg:items-start lg:w-3/5 xl:w-2/5 p-8 text-center lg:text-left">
          <h1
            className="font-hero-header text-center lg:text-left 
 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108pt]
  font-bold m-auto leading-tight text-balance"
          >
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

          <motion.a
            className="font-kapital-big-button px-6 py-3 bg-[#4C6440] rounded-xl 
    text-white text-sm sm:text-base md:text-lg xl:text-xl mt-6"
          >
            Explore
          </motion.a>
        </div>
      </div>
    </section>
  );
}
