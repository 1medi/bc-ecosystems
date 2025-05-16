import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function SWBPage() {
  return (
    <EcosystemPage
      title="Spruce Willow Birch Zone"
      subtitle="A transitional zone between boreal forests and alpine tundra"
          //   heroImage={bgHero}
      description="Located at mid to high elevations, this zone supports mixed forests and shrublands and plays a vital role in wildlife migration corridors."
      stats={[
        { label: "Mean Annual Temp", value: "0°C" },
        { label: "Annual Precipitation", value: "400–800 mm" },
        { label: "Dominant Tree", value: "White Spruce & Paper Birch" },
        { label: "Zone Code", value: "SWB" },
      ]}
    />
  )
}
