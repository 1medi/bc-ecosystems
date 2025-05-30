import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

export default function PageWrapper({
  children,
}) {

  return (
    <>
      <main>
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`min-h-screen flex flex-col`}
          style={{
            backgroundColor: "#dedbcf",
            backgroundImage:
              "https://www.transparenttextures.com/patterns/absurdity.png",
          }}
        >
          {children}
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
