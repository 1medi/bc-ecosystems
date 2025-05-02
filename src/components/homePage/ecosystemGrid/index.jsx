import { motion } from 'framer-motion'

const sections = {
  Northern: ['Boreal White and Black Spruce', 'Spruce Willow Birch', 'Engelmann Spruce Subalpine Fir', 'Alpine Tundra'],
  'Central Interior': ['Sub-Boreal Pine Spruce', 'Sub-Boreal Spruce', 'Montane Spruce', 'Interior Cedar-Hemlock', 'Interior Douglas-Fir', 'Engelmann Spruce Subalpine Fir', 'Alpine Tundra'],
  'Southern Interior': ['Bunchgrass', 'Ponderosa Pine', 'Engelmann Spruce Subalpine Fir'],
  Coastal: ['Coastal Douglas Fir', 'Coastal Western Hemlock', 'Mountain Hemlock', 'Coastal Mountain-heather Alpine'],
}

export default function EcosystemGrid() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-center text-3xl font-semibold mb-6">EXPLORE BC'S ECOSYSTEMS</h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(sections).map(([region, ecosystems]) => (
          <div key={region}>
            <h3 className="text-2xl font-bold mb-4">{region}</h3>
            <div className="flex flex-wrap gap-4">
              {ecosystems.map((eco) => (
                <motion.div
                  key={eco}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-green-700 text-white px-6 py-4 rounded shadow text-center min-w-[180px] cursor-pointer"
                >
                  {eco}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
