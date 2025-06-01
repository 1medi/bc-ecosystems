import HeroSection from '../src/components/homePage/hero/index'
import ExploreSection from '../src/components/homePage/explore/index'
import FeaturedEcosystems from '../src/components/homePage/featured/index'
import EcosystemGrid from '../src/components/homePage/ecosystemGrid/index'
import PageWrapper from "./components/pageWrapper/index"
import Acknowledgement from "../src/components/homePage/acknowledgement/index"
export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <Acknowledgement/>
      <ExploreSection />
      <FeaturedEcosystems />
      <EcosystemGrid />
    </PageWrapper>
  
  )
}
