import HeroVideo from "../../../assets/videos/frontPage.mp4";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <video
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-kapital-hero-header tracking-wide text-4xl md:text-6xl font-bold">
          Explore the Ecosystems of BC
        </h1>
        <motion.a
          href="#explore"
          whileHover={{ backgroundColor: "#5C7A50" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="font-kapital-big-button mt-6 p-6 bg-[#4C6440] rounded-xl text-white text-lg inline-block"
        >
          EXPLORE
        </motion.a>
      </div>
    </section>
  );
}
