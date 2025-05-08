import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function IDFPage() {
  return (
    <EcosystemPage
      title="Interior Douglas-fir"
      subtitle="A dry forested ecosystem with Douglas-fir dominance"
          //   heroImage={bgHero}
      description="Found in valleys and low-elevation slopes, this zone is known for its dry conditions, grassy understories, and fire-adapted species."
      stats={[
        { label: "Mean Annual Temp", value: "7°C" },
        { label: "Annual Precipitation", value: "300–800 mm" },
        { label: "Dominant Tree", value: "Douglas-fir" },
        { label: "Zone Code", value: "IDF" },
      ]}
    />
  )
}

