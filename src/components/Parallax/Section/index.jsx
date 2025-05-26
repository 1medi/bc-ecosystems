import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Background from "../../../../public/images/2.jpg";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <img
          src={Background}
          alt="background"
          className="min-w-screen object-fill h-full w-full"
        />
      </motion.div>
    </div>
  );
}
