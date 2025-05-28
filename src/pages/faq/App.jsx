import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../../components/pageWrapper";

const faqData = [
  {
    question:
      "Why did you divide the BEC zones into 4 categories (Northern, Central Interior, Southern Interior, Coastal)?",
    answer: `The 16 Biogeoclimatic Ecosystem Classification (BEC) zones are organized into four latitudinal/regional categories. This grouping is based on their north-south distribution and general regional distinctions, resulting in categories with broadly similar climates and vegetation.`,
  },
  {
    question:
      "Where can I learn more about the Biogeoclimatic Ecosystem Classification system and the BEC zones?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <a
            className="underline"
            href="https://cfcg.forestry.ubc.ca/resources/cataloguing-in-situ-genetic-resources/about-bec-and-bgc-units/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UBC: Center for Forest Conservation Genetics
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.for.gov.bc.ca/hfd/pubs/docs/srs/srs06.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecosystems of British Columbia Manual
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www2.gov.bc.ca/assets/gov/environment/plants-animals-and-ecosystems/ecosystems/bec/maps/bgcmap201608.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detailed Map of BEC Zones
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://youtu.be/QLoAQa89xkQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            BEC Overview Video
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.for.gov.bc.ca/hfd/library/documents/treebook/biogeo/atzone1.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maps and Brochures for Each Zone
          </a>
        </li>
      </ul>
    ),
  },
  {
    question:
      "Are there any programs where you can learn about the BEC system and how to use it in the field?",
    answer: (
      <span>
        Yes! The{" "}
        <a
          className="underline"
          href="https://www.bcit.ca/programs/forest-and-natural-areas-management-diploma-full-time-7485dipma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forest and Natural Areas Management (FNAM) diploma program at BCIT
        </a>{" "}
        in Burnaby, BC has multiple classes that utilize the principles of the
        BEC system to help with land management.
      </span>
    ),
  },
  {
    question:
      "Are there any other resources to learn more about BC Ecosystems?",
    answer: (
      <span>
        YES!
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QLoAQa89xkQ?si=bd9sVHmczODlkHwV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </span>
    ),
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PageWrapper>
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          FAQ’s and Resources
        </h1>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left text-lg font-medium hover:text-green-700 transition"
              >
                {item.question}
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2 text-gray-700"
                  >
                    <div className="py-2">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
