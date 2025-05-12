import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function BAFAPage() {
  return (
    <EcosystemPage
      title="Boreal Altai Fescue Alpine Zone"
      subtitle="An alpine tundra ecosystem with grasses and herbs in high northern elevations"
          //   heroImage={bgHero}
      description="This harsh, treeless ecosystem exists above the forest line and supports specialized plant communities and cold-adapted species."
      stats={[
        { label: "Mean Annual Temp", value: "-3°C" },
        { label: "Annual Precipitation", value: "200–400 mm" },
        { label: "Dominant Grass", value: "Altai Fescue" },
        { label: "Zone Code", value: "BAFA" },
      ]}
    />
  )
}
