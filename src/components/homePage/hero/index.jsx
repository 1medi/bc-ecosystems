import { useEffect, useState } from "react";
import Intro from "../../Parallax/Intro";
import Description from "../../Parallax/Description";
import Lenis from "lenis";

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

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative w-full min-h-screen">
      <Intro />
      <Description />
    </main>
  );
}
