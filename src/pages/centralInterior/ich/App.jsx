import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/ich/ich.webp";
export default function ICHPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Interior Cedar–Hemlock Zone"
          subtitle="A wet, productive forest zone with diverse flora"
          heroImage={bgHero}
          description="This lush interior rainforest supports redcedar, hemlock, ferns, and mosses. It's one of the most biodiverse zones in BC’s interior."
          stats={[
            { label: "Mean Annual Temp", value: "6°C" },
            { label: "Annual Precipitation", value: "800–1400 mm" },
            {
              label: "Dominant Tree",
              value: "Western Redcedar & Western Hemlock",
            },
            { label: "Zone Code", value: "ICH" },
          ]}
        />
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Distribution
              </h2>
              <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
              <p className="text-base leading-relaxed">
                The ICH zone is found at elevations of 400–1500 meters in
                southeastern British Columbia, the Quesnel and Shuswap
                Highlands, and east of the Coast Mountains in the Nass Basin and
                Skeena ranges. It receives more precipitation than typical
                interior zones, much of it falling as snow, supporting a
                vegetation pattern with coastal similarities.
              </p>
            </div>
            {/* <div className="md:w-1/2">
              <img
                src={ZoneMap}
                alt="ICH zone distribution map"
                className="rounded-lg"
              />
            </div> */}
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Ecological Characteristics
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed mb-4">
                This zone hosts the most tree species of any biogeoclimatic zone
                in the province. Its high productivity and biodiversity result
                from a unique combination of moist snowpack and transitional
                geography. Climax forests are dominated by western hemlock and
                redcedar.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>False box</li>
                <li>Queen's cup</li>
                <li>Bunchberry</li>
                <li>Twinflower</li>
                <li>Step moss</li>
                <li>Knight’s plume moss</li>
                <li>Red-stemmed feather moss</li>
              </ul>
            </div>
            <div>
              {/* <img
                src={ICHForest}
                alt="ICH forest understory"
                className="rounded-lg"
              /> */}
            </div>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Soils & Land Use
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <p className="text-base leading-relaxed mb-4">
                Zonal soils in the ICH include Humo-Ferric Podzols, Brunisolic
                and Orthic Gray Luvisols with typically mor humus forms.
                Forestry dominates land use, with timber harvests common.
                Agricultural use is limited but found in lowland valleys like
                Creston.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Forestry (primary use)</li>
                <li>Limited agriculture (e.g., Creston Valley)</li>
                <li>Wildlife: Grizzly Bears, Mountain Caribou</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              {/* <img src={Wildlife} alt="ICH wildlife" className="rounded-lg" /> */}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
