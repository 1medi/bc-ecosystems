import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/sbps/sbps.png"
export default function SBPSPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Sub-Boreal Pine Spruce Zone"
          subtitle="A dry, cool interior forest dominated by lodgepole pine and hybrid white spruce"
          heroImage={bgHero}
          description="This zone has open forests with grassy understories, and it's highly valued for timber and habitat."
          stats={[
            { label: "Mean Annual Temp", value: "3°C" },
            { label: "Annual Precipitation", value: "300–600 mm" },
            { label: "Dominant Tree", value: "Lodgepole Pine & White Spruce" },
            { label: "Zone Code", value: "SBPS" },
          ]}
        />
         <section className="p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Distribution & Landscape</h2>
            <p className="text-base leading-relaxed">
              The SBPS zone spans portions of the Cariboo Forest Region and includes lands from earlier classifications like the Cariboo Aspen-Lodgepole Pine-Douglas Fir zone. It features a rolling terrain with morainal and organic parent materials and a patchwork of lodgepole pine forest and "wild hay meadows" (fens).
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <img src={SBPSMap} alt="SBPS zone map" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto bg-[#E6E1DA]">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Ecological Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              The White Spruce–Scrub Birch–Feathermoss site association dominates zonal plant communities. Luvisolic and Brunisolic soils with mor humus forms are widespread. While timber productivity is low, the zone is actively managed for lodgepole pine and offers valuable ranching land for grazing and haying. Wildlife habitat and fur resources are also significant.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Cold air drainage → extreme winter cold</li>
              <li>Patchy lodgepole pine forests</li>
              <li>“Wild hay meadows” (fens)</li>
              <li>Scrub birch and feathermoss understory</li>
              <li>Low forest productivity</li>
              <li>Grazing, haying, furbearer habitat</li>
            </ul>
          </div>
          <div>
            {/* <img src={Ranching} alt="Ranching in SBPS" className="rounded-lg" /> */}
          </div>
        </div>
      </section>
      </PageWrapper>
    </>
  );
}
