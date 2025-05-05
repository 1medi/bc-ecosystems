import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"

export default function BunchgrassPage() {
  return (
    <EcosystemPage
      title="Interior Cedar Hemlock"
      subtitle="A hot, dry grassland ecosystem found in the southern interior"
      ecosystem={"Interior Cedar Hemlock"}
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
