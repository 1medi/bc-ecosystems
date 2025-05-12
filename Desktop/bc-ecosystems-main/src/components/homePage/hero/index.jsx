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
        <div className="flex flex-col items-start justify-center lg:w-3/5 p-8">
          <h1 className="font-hero-header lg:text-left text-4xl md:text-6xl font-bold m-auto]">
            EXPLORE THE ECOSYSTEMS OF BC
          </h1>
            <motion.a
              href="#explore"
              whileHover={{ backgroundColor: "#5C7A50", scale: 1.25}}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="font-kapital-big-button flex p-2 bg-[#4C6440] rounded-xl text-white text-lg m-auto"
            >
              Explore
            </motion.a>
        </div>
      </div>
    </section>
  );
}
