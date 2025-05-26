import { motion } from "framer-motion";

export default function EcosystemPage({
  title,
  subtitle,
  heroImage,
  heroVideo, // 🔥 new
  description,
  stats,
  imageGallery = [],
  children,
  cardImage,
  alt,
}) {
  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[100vh] w-full overflow-hidden">
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={heroImage}
              alt={alt || title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <motion.a
              href="/#ecosystems"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="absolute top-6 left-6 flex items-center gap-2 text-white bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full px-3 py-1 text-sm transition"
            >
              ← Back to Ecosystems
            </motion.a>
            <motion.h1
              className="font-hero-header"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="mt-4 text-lg max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </section>

        {/* Image Gallery */}
        {imageGallery.length > 0 && (
          <section className="py-10 px-6 max-w-6xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imageGallery.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gallery ${idx}`}
                  className="rounded shadow object-cover w-full h-48"
                />
              ))}
            </div>
          </section>
        )}

        {/* Additional Custom Content */}
        {children && (
          <section className="py-10 px-6 max-w-6xl mx-auto">{children}</section>
        )}
      </div>
    </>
  );
}
