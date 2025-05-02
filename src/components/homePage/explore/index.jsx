import { motion } from 'framer-motion'

export default function ExploreSection() {
  const items = [
    { title: 'Interactive Maps', desc: 'Discover BC’s ecosystems visually.', link: '#' },
    { title: 'Ecosystem Gallery', desc: 'View our ecosystem cards.', link: '#' },
    { title: 'View Our Color Guide', desc: 'Understand ecosystem colors.', link: '#' },
  ]

  return (
    <section id="explore" className="bg-amber-50 py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">COME EXPLORE!</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white shadow rounded p-6 w-72 cursor-pointer"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <a href={item.link} className="mt-4 inline-block text-green-700 underline">Go</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
