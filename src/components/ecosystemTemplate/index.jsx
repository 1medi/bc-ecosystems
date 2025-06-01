import { motion } from "framer-motion";
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
            <a href="/#ecosystems" className="absolute top-6 left-6">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#14532d",
                  color: "#ffffff",
                  transition: { duration: 0.2 },
                }}
                className="font-button bg-green-800/20 text-black border-2 border-green-800/50 shadow-md hover:shadow-lg transition-all ease-in-out duration-300 text-center mx-auto px-6 py-2 rounded-full w-fit backdrop-blur-sm"
              >
                ← Back to Homepage
              </motion.div>
            </a>

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
