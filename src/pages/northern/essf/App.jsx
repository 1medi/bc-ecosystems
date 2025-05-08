import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function ESSFPage() {
  return (
    <EcosystemPage
      title="Engelmann Spruce–Subalpine Fir Zone"
      subtitle="A high-elevation forested ecosystem characterized by cold, snowy winters"
          //   heroImage={bgHero}
      description="Spanning rugged mountainous terrain, this zone is crucial for snow retention and supports diverse alpine wildlife and vegetation."
      stats={[
        { label: "Mean Annual Temp", value: "-2°C to 2°C" },
        { label: "Annual Precipitation", value: "600–1500 mm" },
        { label: "Dominant Tree", value: "Engelmann Spruce & Subalpine Fir" },
        { label: "Zone Code", value: "ESSF" },
      ]}
    />
  )
}
