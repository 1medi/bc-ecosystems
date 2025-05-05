import EcosystemPage from "../../../components/ecosystemTemplate"
// import bgHero from "@/assets/images/bg-hero.jpg"
export default function CDFPage() {
  return (
    <EcosystemPage
      title="Coastal Douglas-fir Zone"
      subtitle="A dry coastal forest with a Mediterranean-like climate"
          //   heroImage={bgHero}
      description="This rare coastal ecosystem has warm, dry summers and supports open forests of Douglas-fir and Garry oak. It’s among BC’s most threatened zones."
      stats={[
        { label: "Mean Annual Temp", value: "9°C" },
        { label: "Annual Precipitation", value: "600–1000 mm" },
        { label: "Dominant Tree", value: "Douglas-fir" },
        { label: "Zone Code", value: "CDF" },
      ]}
    />
  )
}
