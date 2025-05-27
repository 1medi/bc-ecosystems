import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function EcosystemPage({
  title,
  subtitle,
  heroImage,
  heroVideo,
  children,
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
            <Link to="/#ecosystems">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="font-button font-bold absolute top-6 left-6 flex items-center gap-2 text-white bg-[#4C6440] bg-opacity-30 hover:bg-opacity-50 rounded-full px-3 py-1 text-sm transition"
              >
                ← Back to Homepage
              </motion.div>
            </Link>

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
                className="font-subheader mt-4 text-lg max-w-xl bg-black/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </section>

        {children && (
          <section className="py-10 px-6 max-w-6xl mx-auto">{children}</section>
        )}
      </div>
    </>
  );
}
