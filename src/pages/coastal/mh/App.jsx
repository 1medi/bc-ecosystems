import EcosystemPage from "../../../components/ecosystemTemplate";
import MHPieChart from "../../../components/mhPie";
// import bgHero from "@/assets/images/bg-hero.jpg"

export default function MountainHemlockPage() {
  return (
    <>
      <EcosystemPage
        title="Mountain Hemlock Zone"
        subtitle="Cool, wet mountain forests above coastal zones"
        //   heroImage={bgHero}
        description="Located at high elevations, the MH zone features heavy snowpack, cold temperatures, and mountain-adapted forests dominated by mountain hemlock."
        stats={[
          { label: "Mean Annual Temp", value: "3°C" },
          { label: "Annual Precipitation", value: "1400–2500 mm" },
          { label: "Dominant Tree", value: "Mountain Hemlock" },
          { label: "Zone Code", value: "MH" },
        ]}
      />
      <MHPieChart />
    </>
  );
}
