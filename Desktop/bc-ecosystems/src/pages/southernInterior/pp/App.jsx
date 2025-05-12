import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function PPPage() {
  return (
    <EcosystemPage
      title="Ponderosa Pine Zone"
      subtitle="An open, dry forested area with scattered Ponderosa pines"
          //   heroImage={bgHero}
      description="This zone includes dry slopes and grasslands with widely spaced Ponderosa pine. It is fire-adapted and critical for grazing."
      stats={[
        { label: "Mean Annual Temp", value: "8°C" },
        { label: "Annual Precipitation", value: "300–500 mm" },
        { label: "Dominant Tree", value: "Ponderosa Pine" },
        { label: "Zone Code", value: "PP" },
      ]}
    />
  )
}
