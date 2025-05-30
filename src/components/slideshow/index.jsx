import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slideshow({ slides = [], autoPlay = true }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[current].image}
          <div className="absolute bottom-0 left-0 w-full bg-[#4C6440] bg-opacity-50 font-body-copy text-white p-4 text-sm md:text-base">
            {slides[current].description}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center px-4">
        <button
          onClick={prev}
          className="bg-black/40 text-white px-3 py-2 rounded hover:bg-black/60"
        >
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-4">
        <button
          onClick={next}
          className="bg-black/40 text-white px-3 py-2 rounded hover:bg-black/60"
        >
          →
        </button>
      </div>
    </div>
  );
}
