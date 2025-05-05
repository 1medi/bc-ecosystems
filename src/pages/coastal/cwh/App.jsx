import EcosystemPage from "../../../components/ecosystemTemplate";
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function CWHPage() {
  return (
    <EcosystemPage
      title="Coastal Western Hemlock Zone"
      subtitle="A moist, temperate rainforest ecosystem along the BC coast"
      //   heroImage={bgHero}
      description="The most extensive zone on the coast, CWH features dense conifer forests, mossy understories, and high biodiversity. It's vital for carbon storage and wildlife."
      stats={[
        { label: "Mean Annual Temp", value: "8°C" },
        { label: "Annual Precipitation", value: "1200–3000 mm" },
        { label: "Dominant Tree", value: "Western Hemlock" },
        { label: "Zone Code", value: "CWH" },
      ]}
    />
  );
}
