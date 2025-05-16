import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function IMAPage() {
  return (
    <EcosystemPage
      title="Interior Mountain-Heather Alpine"
      subtitle="High elevation alpine tundra in the interior"
          //   heroImage={bgHero}
      description="Above the treeline, this cold and windswept zone supports dwarf shrubs and hardy herbs. It's essential for alpine species and snow storage."
      stats={[
        { label: "Mean Annual Temp", value: "-4°C" },
        { label: "Annual Precipitation", value: "200–500 mm" },
        { label: "Dominant Plant", value: "Mountain Heather" },
        { label: "Zone Code", value: "IMA" },
      ]}
    />
  )
}
