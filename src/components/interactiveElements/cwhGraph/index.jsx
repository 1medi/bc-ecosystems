// file: components/MHInteractiveDiagram.tsx

import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heh from "../../../assets/heh.png";

const labels = [
  {
    name: "Yellow-cedar – Mountain hemlock – Skunk cabbage",
    top: "78%",
    left: "15%",
    moistureRange: [0, 0.25],
    color: "bg-gradient-to-r from-blue-700 to-blue-400",
    width: "29%",
    height: "100%",
  },
  {
    name: "Amabilis fir – Mountain hemlock – Twistedstalk",
    top: "70%",
    left: "35%",
    moistureRange: [0.25, 0.5],
    color: "bg-gradient-to-r from-green-500 to-green-300",
    width: "25%",
    height: "100%",
  },
  {
    name: "Mountain hemlock – Amabilis fir",
    top: "60%",
    left: "60%",
    moistureRange: [0.5, 0.75],
    color: "bg-gradient-to-r from-orange-400 to-orange-200",
    width: "25%",
    height: "100%",
  },
  {
    name: "Mountain hemlock – Amabilis fir – Blueberry",
    top: "50%",
    left: "85%",
    moistureRange: [0.75, 1],
    color: "bg-gradient-to-r from-purple-500 to-purple-300",
    width: "25%",
    height: "100%",
  },
];

export default function MHInteractiveDiagram() {
  const [activeLabelIndex, setActiveLabelIndex] = useState(0);
  const x = useMotionValue(0);
  const barRef = useRef(null);
  const [barWidth, setBarWidth] = useState(400);

  useEffect(() => {
    if (barRef.current) {
      setBarWidth(barRef.current.offsetWidth);
    }
  }, []);

  const handleDrag = (event, info) => {
    const knobX = info.point.x - barRef.current.getBoundingClientRect().left;
    const percent = Math.min(Math.max(knobX / barWidth, 0), 1);
    const index = labels.findIndex(
      (l) => percent >= l.moistureRange[0] && percent < l.moistureRange[1]
    );
    if (index !== -1 && index !== activeLabelIndex) {
      setActiveLabelIndex(index);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12">
      <div className="relative">
        <img
          src={heh}
          alt="Mountain Hemlock Zone B&W Diagram"
          className="w-full rounded-lg"
        />

        {/* Gradient Region Highlights */}
        {labels.map((label, i) => (
          <motion.div
            key={i}
            className={`absolute z-10 ${label.color}`}
            style={{
              top: 0,
              left: `${label.moistureRange[0] * 100}%`,
              width: label.width,
              height: label.height,
              opacity: i === activeLabelIndex ? 0.5 : 0,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Moisture Bar */}
      <div className="mt-16 px-4 flex flex-col items-center">
        <div
          ref={barRef}
          className="relative w-full max-w-[400px] h-6 bg-gradient-to-r from-blue-800 via-green-400 to-purple-500 rounded"
        >
          <motion.div
            className="absolute top-1/2 w-6 h-6 rounded-full bg-green-600 cursor-pointer shadow-lg"
            style={{ x, y: "-50%" }}
            drag="x"
            dragConstraints={{ left: 0, right: barWidth }}
            dragElastic={0}
            onDrag={handleDrag}
          />

          {/* Active label display */}
          <motion.div
            className="absolute -top-10 left-0 text-sm text-gray-800 bg-white px-3 py-1 rounded shadow"
            style={{ x: x }}
          >
            {labels[activeLabelIndex].name}
          </motion.div>
        </div>

        <p className="mt-4 text-sm text-gray-700 text-center max-w-lg">
          Drag the knob to explore how growing-season soil moisture changes plant communities.
        </p>
      </div>
    </div>
  );
}
