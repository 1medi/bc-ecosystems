import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function SBPSPage() {
  return (
    <EcosystemPage
      title="Sub-Boreal Pine Spruce Zone"
      subtitle="A dry, cool interior forest dominated by lodgepole pine and hybrid white spruce"
          //   heroImage={bgHero}
      description="This zone has open forests with grassy understories, and it's highly valued for timber and habitat."
      stats={[
        { label: "Mean Annual Temp", value: "3°C" },
        { label: "Annual Precipitation", value: "300–600 mm" },
        { label: "Dominant Tree", value: "Lodgepole Pine & White Spruce" },
        { label: "Zone Code", value: "SBPS" },
      ]}
    />
  )
}
