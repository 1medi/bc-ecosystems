import { motion } from 'framer-motion'
import CWHFeatured from '../../../assets/cardImages/cwh/cwhFeatured.png'
import PPFeatured from '../../../assets/cardImages/pp/ppFeatured.png'
import ATFeatured from '../../../assets/cardImages/at/atFeatured.png'
export default function FeaturedEcosystems() {
  const featured = [
    { name: 'Coastal Western Hemlock', img: CWHFeatured , link: '/Coastal-Western-Hemlock' },
    { name: 'Ponderosa Pine', img: PPFeatured , link: '/Ponderora-Pine' },
    { name: 'Coastal Mountain Altai Fescue Alpine', img: ATFeatured, link: '/Coastal-Mountain-Altai-Fescue-Alpine' },
  ]

  return (
    <section className="bg-amber-50 m-12 rounded-xl shadow-lg py-16 px-6 text-center">
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
