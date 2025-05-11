import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function BWBSPage() {
  return (
    <EcosystemPage
      title="Boreal White and Black Spruce Zone"
      subtitle="A cold forested ecosystem found in northern BC"
          //   heroImage={bgHero}
      description="This zone features extensive coniferous forests, long cold winters, and short growing seasons. It's critical for biodiversity and carbon storage."
      stats={[
        { label: "Mean Annual Temp", value: "-1°C" },
        { label: "Annual Precipitation", value: "300–600 mm" },
        { label: "Dominant Tree", value: "White & Black Spruce" },
        { label: "Zone Code", value: "BWBS" },
      ]}
    />
  )
}

