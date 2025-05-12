import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function CMHAPage() {
  return (
    <EcosystemPage
      title="Coastal Mountain-heather Alpine Zone"
      subtitle="An alpine zone with heathers and shrubs above the treeline"
          //   heroImage={bgHero}
      description="This high-elevation ecosystem lies above the forested slopes of coastal BC. Harsh weather, short growing seasons, and unique alpine flora define the CMHA zone."
      stats={[
        { label: "Mean Annual Temp", value: "-3°C" },
        { label: "Annual Precipitation", value: "1500 mm" },
        { label: "Dominant Plant", value: "Mountain Heather" },
        { label: "Zone Code", value: "CMHA" },
      ]}
    />
  )
}
