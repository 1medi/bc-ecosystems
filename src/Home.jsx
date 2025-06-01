import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../src/components/homePage/hero/index";
import ExploreSection from "../src/components/homePage/explore/index";
import FeaturedEcosystems from "../src/components/homePage/featured/index";
import EcosystemGrid from "../src/components/homePage/ecosystemGrid/index";
import PageWrapper from "./components/pageWrapper/index";
import Acknowledgement from "../src/components/homePage/acknowledgement/index";
export default function Home() {

 useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50); // tiny delay to ensure element is mounted
      }
    }
  }, []);

  return (
    <PageWrapper>
      <HeroSection />
      <Acknowledgement />
      <ExploreSection />
      <FeaturedEcosystems />
      <div id="ecosystems" className="scroll-mt-24">
        <EcosystemGrid />
      </div>
    </PageWrapper>
  );
}
