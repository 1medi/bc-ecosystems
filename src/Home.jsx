import HeroSection from '../src/components/homePage/hero/index'
import ExploreSection from '../src/components/homePage/explore/index'
import FeaturedEcosystems from '../src/components/homePage/featured/index'
import EcosystemGrid from '../src/components/homePage/ecosystemGrid/index'
import Footer from '../src/components/footer/index'
import Header from './components/header'

export default function Home() {
  return (
    <main className="font-sans">
      <Header/>
      <HeroSection />
      <ExploreSection />
      <FeaturedEcosystems />
      <EcosystemGrid />
      <Footer />
    </main>
  )
}
