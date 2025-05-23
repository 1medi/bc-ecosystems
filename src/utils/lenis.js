// src/utils/lenis.js
import LenisModule from "lenis";
const Lenis = LenisModule.default || LenisModule;

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});
