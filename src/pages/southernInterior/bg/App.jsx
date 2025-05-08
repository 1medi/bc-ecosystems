import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function BGPage() {
  return (
    <EcosystemPage
      title="Bunchgrass Zone"
      subtitle="A hot, dry grassland ecosystem found in the southern interior"
          //   heroImage={bgHero}
      description="The Bunchgrass zone is characterized by rolling grasslands, sparse trees, and semi-arid climate conditions. It is an important ecosystem for agriculture and grazing."
      stats={[
        { label: "Mean Annual Temp", value: "9°C" },
        { label: "Annual Precipitation", value: "250–400 mm" },
        { label: "Dominant Grass", value: "Bluebunch Wheatgrass" },
        { label: "Zone Code", value: "BG" },
      ]}
    />
  )
}
