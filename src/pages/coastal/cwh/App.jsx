import EcosystemPage from "../../../components/ecosystemTemplate";
// import bgHero from "@/assets/images/bg-hero.jpg"
import PageWrapper from "../../../components/pageWrapper";
import CWHHero from "../../../assets/videos/cwhHero.mp4"
import CWHGraph from "../../../components/interactiveElements/cwhGraph"
export default function CWHPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Coastal Western Hemlock Zone"
          subtitle="A moist, temperate rainforest ecosystem along the BC coast"
          heroVideo={CWHHero}
          description="The most extensive zone on the coast, CWH features dense conifer forests, mossy understories, and high biodiversity. It's vital for carbon storage and wildlife."
          stats={[
            { label: "Mean Annual Temp", value: "8°C" },
            { label: "Annual Precipitation", value: "1200–3000 mm" },
            { label: "Dominant Tree", value: "Western Hemlock" },
            { label: "Zone Code", value: "CWH" },
          ]}
        />
        <section className="flex flex-wrap gap-8 p-8 max-w-screen-lg mx-auto">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Where it grows
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Western Hemlock is the most widespread and abundant tree species
            along the coast of British Columbia. It thrives from sea level to
            mid-elevation, growing on both the eastern and western slopes of the
            Coast Mountains, and even extends inland into the wet belt of the
            Interior, west of the Rocky Mountains. Rather than forming pure
            stands, Western Hemlock typically grows in mixed forests alongside
            species like Douglas-fir, Amabilis fir, Sitka spruce, and Western
            redcedar. While it can occasionally form pure stands—especially
            after large-scale windthrow—it more often flourishes in the
            understory thanks to its high shade tolerance. Due to its shallow
            root system, Western Hemlock is vulnerable to being uprooted by
            strong winds and damaged by wildfires, but it regenerates quickly in
            moist, shaded environments, often forming dense young growth beneath
            mature canopies.
          </p>

          <h2 className="text-2xl font-bold text-green-900 mt-8 mb-4">
            Location & Distribution
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <ul>
              <li>
                Found along the entire BC coast, Vancouver Island, Haida Gwaii,
                and the Coast Mountains
              </li>
              <li>
                Extends into river valleys (e.g., Fraser, Skeena) and parts of
                Alaska & Washington/Oregon
              </li>
              <li>
                Elevation:
                <ul>
                  <li>Sea level to 900 m (windward slopes, south coast)</li>
                  <li>Up to 1050 m (leeward slopes)</li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
        <div className="flex-1 min-w-[300px]">
          <img
            src="/wh.png"
            alt="Vegetation image"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-wrap gap-8 p-8 max-w-screen-lg mx-auto">
        <div className="flex-1 min-w-[300px]">
          <div className="flex-1 min-w-[300px]">
            <img
              src="Ecological Conditions.png"
              alt="Ecological Conditions"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-green-900 mt-10 mb-4 text-center">
            Ecological Conditions
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            The Coastal Western Hemlock (CWH) zone has the wettest climate in
            British Columbia, receiving between 1000 and 4400 mm of
            precipitation annually. In the south, most of this falls as rain,
            while in the north, up to 50% can fall as snow. The climate is cool
            and wet, with mild winters and cool summers. Although hot spells can
            occur in summer, they are usually short. The mean annual temperature
            is around 8°C, with 4 to 6 months above 10°C. The coldest month
            averages around 0.2°C, though colder temperatures are possible in
            the northern parts. These cool, moist conditions support lush
            forests, dense moss layers, and high biodiversity, making the CWH
            zone one of BC’s most productive ecosystems.
          </p>
        </div>
      </section>
      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
          Forest Variation Across the Coastal Western Hemlock Zone
        </h2>
        <p className="text-base text-gray-800 leading-relaxed">
          The Coastal Western Hemlock (CWH) zone contains a wide variety of
          forest types that change depending on moisture levels and proximity to
          the coast. In hypermaritime areas, forests are dominated by western
          hemlock, western redcedar, Sitka spruce, and sometimes yellow cedar,
          with highly productive stands occurring on well-drained slopes and
          peatlands common on the outer coast. Wetter maritime subzones feature
          forests dominated by western hemlock and amabilis fir, often forming
          even-aged stands due to windthrow, with redcedar more common on
          long-undisturbed sites. The typical vegetation includes a rich moss
          layer and ericaceous shrubs like Alaskan blueberry and salal. Drier
          maritime forests contain more Douglas-fir and have well-developed
          salal and Oregon grape in the understory, while submaritime
          forests—located farther inland—lack typical coastal species and
          instead include interior species like queen’s cup, red-stemmed
          feathermoss, and false azalea, reflecting a transition toward
          continental ecosystems.
        </p>
      </section>
      <div className="flex-1 mt-10">
        <img src="zone.png" alt="zone" className="rounded-lg w-full h-250" />
      </div>
      <h2 className="text-2xl font-bold text-green-900  mt-10 mb-4 text-center">
        CWH Subzone Climate Table
      </h2>
      <section className="flex flex-nowrap gap-8 p-8 max-w-screen-lg mx-auto">
        <div className="basis-1/3">
          <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
            Precipitation:
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Annual rainfall ranges from ~1300 mm to nearly 3000 mm, with the
            CWHvh being the wettest. Summer is generally drier, but all subzones
            still receive some rain.
          </p>
        </div>
        <div className="basis-1/3">
          <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
            Growing season:
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Most subzones have 4 to 6 months where temperatures exceed 10°C.
            <br />
            <strong>Continentality:</strong> Values range from 2 to 7, showing
            how inland subzones experience more temperature variation.
          </p>
        </div>
        <div className="basis-1/3">
          <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
            Temperature:
          </h2>
          <ul className="list-disc pl-6 text-base text-gray-800 leading-relaxed space-y-1">
            <li>Average annual temperatures range from 5.5°C to 9.8°C.</li>
            <li>Warmest month: 13.9–17.6°C</li>
            <li>
              Coldest month: as low as −6.0°C in interior subzones like CWHws.
            </li>
          </ul>
        </div>
      </section>

      {/* <div className="flex-1">
          <CWHGraph/>
      </div> */}
      </PageWrapper>
    </>
  );
}
  
"../../../assets/heh.png";