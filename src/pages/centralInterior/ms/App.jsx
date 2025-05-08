import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function MSPage() {
  return (
    <EcosystemPage
      title="Montane Spruce Zone"
      subtitle="Found at mid to high elevations, dominated by Engelmann spruce and subalpine fir"
          //   heroImage={bgHero}
      description="This transitional forest zone bridges lower interior forests and alpine areas. It’s important for snowpack storage and mountain wildlife."
      stats={[
        { label: "Mean Annual Temp", value: "2°C" },
        { label: "Annual Precipitation", value: "500–900 mm" },
        { label: "Dominant Tree", value: "Engelmann Spruce & Subalpine Fir" },
        { label: "Zone Code", value: "MS" },
      ]}
    />
  )
}
