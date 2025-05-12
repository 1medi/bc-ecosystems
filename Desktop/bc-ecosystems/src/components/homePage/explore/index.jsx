import { motion } from "framer-motion";

export default function ExploreSection() {
  const items = [
    {
      title: "Interactive Maps",
      desc: "Discover BC’s ecosystems visually.",
      link: "/pages/map/App.jsx",
    },
    {
      title: "Ecosystem Gallery",
      desc: "View our ecosystem cards.",
      link: "#",
    },
    {
      title: "View Our Color Guide",
      desc: "Understand ecosystem colors.",
      link: "#",
    },
  ];

  return (
    <section id="explore" className="bg-amber-50 rounded-xl shadow-lg m-12 py-12 text-center">
      <h2 className="font-section-header mb-6">COME EXPLORE!</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow rounded p-6 w-72 cursor-pointer"
          >
            <h3 className="font-card-title">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <motion.a
              href={item.link}
              whileHover={{ backgroundColor: "#5C7A50"}}
              className="mt-4 inline-block text-white bg-[#16A34A] p-2 rounded-xl"
            >
              Learn More
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
