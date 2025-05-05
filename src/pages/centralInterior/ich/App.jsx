import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function ICHPage() {
  return (
    <EcosystemPage
      title="Interior Cedar–Hemlock Zone"
      subtitle="A wet, productive forest zone with diverse flora"
          //   heroImage={bgHero}
      description="This lush interior rainforest supports redcedar, hemlock, ferns, and mosses. It's one of the most biodiverse zones in BC’s interior."
      stats={[
        { label: "Mean Annual Temp", value: "6°C" },
        { label: "Annual Precipitation", value: "800–1400 mm" },
        { label: "Dominant Tree", value: "Western Redcedar & Western Hemlock" },
        { label: "Zone Code", value: "ICH" },
      ]}
    />
  )
}
