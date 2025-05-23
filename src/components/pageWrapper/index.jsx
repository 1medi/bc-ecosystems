import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

import { useEffect } from "react";
import Lenis from "lenis";

export default function PageWrapper({
  children,
  bgColor = "bg-white",
  bgGradient = "",
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {/* Lenis scroll container */}
      <main>
        <Header />
        {/* <Intro />
        <Description />
        <Section /> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`min-h-screen flex flex-col ${bgColor} ${bgGradient}`}
        >
          {children}
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
