"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import PageWrapper from "../../components/pageWrapper";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Updated gallery data with ecosystem regions
  const galleryImages = [
    {
      id: 1,
      src: "https://source.unsplash.com/random/800x600?north",
      alt: "Northern landscape with conifer forest",
      categories: ["Northern"],
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random/800x600?interior",
      alt: "Mountain ridges in Central Interior",
      categories: ["Central Interior"],
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/800x600?coast",
      alt: "Lush rainforest near coastal mountains",
      categories: ["Coastal"],
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/800x600?southern",
      alt: "Dry grasslands in Southern Interior",
      categories: ["Southern Interior"],
    },
    {
      id: 5,
      src: "https://source.unsplash.com/random/800x600?alpine",
      alt: "Alpine peaks in the Northern zone",
      categories: ["Northern"],
    },
    {
      id: 6,
      src: "https://source.unsplash.com/random/800x600?river",
      alt: "River flowing through the Interior",
      categories: ["Central Interior"],
    },
    {
      id: 7,
      src: "https://source.unsplash.com/random/800x600?coastal-forest",
      alt: "Dense Coastal Western Hemlock forest",
      categories: ["Coastal"],
    },
    {
      id: 8,
      src: "https://source.unsplash.com/random/800x600?desert",
      alt: "Southern Interior desert plateau",
      categories: ["Southern Interior"],
    },
  ];

  // Ecosystem section categories
  const categories = [
    { value: "Northern", label: "Northern" },
    { value: "Central Interior", label: "Central Interior" },
    { value: "Southern Interior", label: "Southern Interior" },
    { value: "Coastal", label: "Coastal" },
  ];


  const filteredImages = selectedCategory
    ? galleryImages.filter((image) =>
        image.categories.includes(selectedCategory)
      )
    : galleryImages;

  return (
    <>
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Photo Gallery
        </h1>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium truncate">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 italic">
              No images found for this category.
            </p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              <div className="bg-gray-900">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] mx-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedImage.alt}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedImage.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
    </>

  );
};

export default Gallery;
