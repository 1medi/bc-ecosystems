import { motion } from "framer-motion";
import CWHFeatured from "../../../assets/cardImages/cwh/cwhFeatured.png";
import PPFeatured from "../../../assets/cardImages/pp/ppFeatured.png";
import ATFeatured from "../../../assets/cardImages/at/atFeatured.png";
import { useNavigate } from "react-router-dom";

export default function FeaturedEcosystems() {
  const navigate = useNavigate();

  const featured = [
    {
      name: "Coastal Western Hemlock",
      description:
        "Home to ancient cedars and diverse wildlife, these temperate rainforests are characterized by high rainfall and moderate temperatures year-round.",
      img: CWHFeatured,
      link: "/Coastal-Western-Hemlock",
    },
    {
      name: "Ponderosa Pine",
      description:
        "These semi-arid regions support unique plant and animal species adapted to dry conditions and extreme temperature variations.",
      img: PPFeatured,
      link: "/Ponderosa-Pine",
    },
    {
      name: "Coastal Mountain Heather Alpine",
      description:
        "These high-altitude ecosystems feature stunning wildflower displays during summer months and provide crucial habitat for mountain wildlife.",
      img: ATFeatured,
      link: "/Alpine-Tundra",
    },
  ];

  return (
    <section className="bg-[#FCF5EE] m-12 rounded-xl shadow-lg py-16 px-6 text-center">
      <h2 className="font-section-header mb-10">FEATURED ECOSYSTEMS</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {featured.map((eco) => (
          <motion.a
            key={eco.name}
            href={eco.link}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-white shadow-lg rounded w-80 overflow-hidden cursor-pointer"
          >
            <img
              src={eco.img}
              alt={eco.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-featured-title mb-2">{eco.name}</h3>
              <p className="font-body-copy">{eco.description}</p>
              <motion.button
                onClick={() => navigate(eco.link)}
                whileHover={{ backgroundColor: "#5C7A50" }}
                className="mt-4 inline-block text-white bg-[#16A34A] p-2 rounded-xl"
              >
                Learn More
              </motion.button>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
