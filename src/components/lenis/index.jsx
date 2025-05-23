import { useEffect } from "react";
import { lenis } from "../../utils/lenis.js";

export default function LenisProvider({ children }) {
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
