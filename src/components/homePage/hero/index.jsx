export default function HeroSection() {
    return (
      <section className="relative h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/path/to/your/mountain.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Explore the Ecosystems of BC</h1>
          <a href="#explore" className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white text-lg">
            EXPLORE
          </a>
        </div>
      </section>
    )
  }
  