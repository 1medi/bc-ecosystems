import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";
import BKG from "../../assets/bkgSubtle.webp";
export default function PageWrapper({ children }) {
  return (
    <>
      <main >
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`min-h-screen flex flex-col`}
          style={{
            backgroundColor: "#E9E1D8",
            backgroundImage: `url(${BKG})`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        >
          {children}
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
