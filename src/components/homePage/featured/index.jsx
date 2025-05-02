import { motion } from 'framer-motion'

export default function FeaturedEcosystems() {
  const featured = [
    { name: 'Coastal Western Hemlock', img: '/cwh.jpg', link: '/CWH' },
    { name: 'Ponderosa Pine', img: '/pp.jpg', link: '/PP' },
    { name: 'Alpine Tundra', img: '/at.jpg', link: '/AT' },
  ]

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-10">FEATURED ECOSYSTEMS</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {featured.map((eco) => (
          <motion.a
            key={eco.name}
            href={eco.link}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="bg-white shadow-lg rounded w-80 overflow-hidden cursor-pointer"
          >
            <img src={eco.img} alt={eco.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{eco.name}</h3>
              <span className="text-green-600 underline">Explore</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
