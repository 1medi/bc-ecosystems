import HeroVideo from "../../../assets/videos/frontPageHero.mp4"

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <video
        src={HeroVideo}
        autoPlay
        loop
         className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-kapital-hero-header tracking-wide text-4xl md:text-6xl font-bold">
          Explore the Ecosystems of BC
        </h1>
        <a
          href="#explore"
          className="font-kapital-big-button mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white text-lg"
        >
          EXPLORE
        </a>
      </div>
    </section>
  )
}
