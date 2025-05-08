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

      <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center lg:items-start  text-center text-white px-4">
        <div className="flex flex-col items-start justify-center lg:w-1/2">
          <h1 className="font-hero-header tracking-wide text-4xl md:text-6xl font-bold m-auto">
            Explore the Ecosystems of BC
          </h1>
          <motion.a
            href="#explore"
            whileHover={{ backgroundColor: "#5C7A50" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-kapital-big-button flex p-6 bg-[#4C6440] rounded-xl text-white text-lg m-auto"
          >
            EXPLORE
          </motion.a>
        </div>
      </div>
    </section>
  );
}
