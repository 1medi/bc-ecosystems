import EcosystemPage from "../../../components/ecosystemTemplate";
import SWB from "../../../../src/assets/swb/dempsterHighway.png"
import PageWrapper from "../../../components/pageWrapper";
export default function SWBPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Spruce Willow Birch Zone"
          subtitle="A transitional zone between boreal forests and alpine tundra"
          heroImage={SWB}
          description="Located at mid to high elevations, this zone supports mixed forests and shrublands and plays a vital role in wildlife migration corridors."
          stats={[
            { label: "Mean Annual Temp", value: "0°C" },
            { label: "Annual Precipitation", value: "400–800 mm" },
            { label: "Dominant Tree", value: "White Spruce & Paper Birch" },
            { label: "Zone Code", value: "SWB" },
          ]}
        />
        <section className="p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Distribution & Climate</h2>
            <p className="text-base leading-relaxed">
              The SWB zone begins around 57°N in British Columbia and extends north into Yukon. It is found at elevations ranging from 900 to 1700 meters and spans about 7.8% of BC’s area. The zone features a cold climate with extended snow cover and very short growing seasons—only about 40 days in places like Cassiar. Snow depth varies significantly across the region.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <img src={SWBMap} alt="SWB zone distribution map" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto bg-[#E6EDF3]">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Ecological Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              The zonal climax ecosystems resemble open parkland and consist mainly of white spruce, with occasional subalpine fir. These stands are accompanied by well-developed shrub layers featuring willows and scrub birch. The poor tree productivity makes commercial timber harvesting unfeasible, yet the zone plays an essential ecological role supporting a wide range of wildlife.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Open spruce parklands</li>
              <li>Scrub birch and willow shrub layer</li>
              <li>No commercial timber value</li>
              <li>Important breeding and ungulate habitat</li>
              <li>Large carnivores: bears, wolves</li>
              <li>Mining exploration and disturbance risk</li>
            </ul>
          </div>
          <div>
            {/* <img src={Wildlife} alt="Wildlife in SWB zone" className="rounded-lg" /> */}
          </div>
        </div>
      </section>
      </PageWrapper>
    </>
  );
}
