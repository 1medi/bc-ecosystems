import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function SBSPage() {
  return (
    <EcosystemPage
      title="Sub-Boreal Spruce Zone"
      subtitle="A moist, cool forested zone important for forestry and wildlife"
          //   heroImage={bgHero}
      description="This zone includes dense forests and wetlands, supporting moose, bears, and other northern wildlife."
      stats={[
        { label: "Mean Annual Temp", value: "4°C" },
        { label: "Annual Precipitation", value: "400–1000 mm" },
        { label: "Dominant Tree", value: "Hybrid White Spruce" },
        { label: "Zone Code", value: "SBS" },
      ]}
    />
  )
}
