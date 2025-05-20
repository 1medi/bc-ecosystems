// Alpine Tundra Complex Layout

import EcosystemPage from "../../components/ecosystemTemplate";
import AboutZoneCard from "../../components/aboutZoneCard";
import PageWrapper from "../../components/pageWrapper"


export default function AlpineTundraPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Alpine Tundra Complex"
        subtitle="High-elevation ecosystems above the treeline shaped by snow, wind, and resilience"
        description="Located above the treeline, the Alpine Tundra Complex endures extreme conditions, supporting a tapestry of hardy plants and subdivided into three biogeoclimatic zones."
        stats={[
          { label: "Elevation", value: "Above treeline" },
          { label: "Zones", value: "BAFA, IMA, CMA" },
          { label: "Soils", value: "Regosols, Cryosols, Brunisols" },
          { label: "Tree Form", value: "Low or wind-sculpted" },
        ]}
      />

      <AboutZoneCard
        title="About this complex"
        bgColor="bg-[#E8F1F5]/75"
        description="The Alpine Tundra Complex occupies the highest elevations in BC, where snow and wind define the landscape. Vegetation includes wind-sculpted trees, shrubs, heath species, grasses, and forbs. Soils are often thin and weakly developed. Due to its harsh conditions and inaccessibility, early BEC mapping overlooked these areas, leading to limited ecological data until the 2000s. This led to the subdivision of the original AT zone into three refined zones."

        caption="Wind-sculpted tundra at high elevations"
      />

      <section className="p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Elevation & Climate</h2>
            <p className="text-base leading-relaxed">
              This high-elevation complex exists above the treeline throughout BC, where wind and cold dominate. Snowpacks vary dramatically due to wind redistribution. Growing seasons are extremely short, decomposition is slow, and soils are often Regosolic or Cryosolic with mor-like humus.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <img src={ATMap} alt="Alpine Tundra distribution map" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto bg-[#E8F1F5]">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Ecological Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              Alpine vegetation is a mosaic of low shrubs, heaths, sedges, and forbs adapted to harsh alpine conditions. Early BEC efforts focused on forest zones, leaving alpine systems understudied until the early 2000s. Their ecological role is vital, supporting fragile, biodiverse systems with limited recovery capacity.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Short snow-free season</li>
              <li>Wind-scoured and drift-formed snowpack</li>
              <li>Low woody shrubs and heath species</li>
              <li>Thin Regosolic and Cryosolic soils</li>
              <li>Limited human access and data</li>
            </ul>
          </div>
          <div>
            {/* <img src={AlpineTundra} alt="Alpine vegetation" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Alpine Tundra Subzones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">BAFA</h3>
            <p className="text-sm">
              The Boreal Altai Fescue Alpine Tundra is the largest and most northern alpine subzone. It features Festuca altaica and Betula nana in a continental climate above ESSF or SWB zones.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">IMA</h3>
            <p className="text-sm">
              The Interior Mountain Heather Alpine Tundra is found further south in BC’s interior. It features diverse heath vegetation and maintains a cold, continental climate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">CMA</h3>
            <p className="text-sm">
              The Coastal Mountain Heather Alpine Tundra lies above the MH zone along BC’s coast. A maritime climate shapes its flora, which resembles coastal ecosystems.
            </p>
          </div>
        </div>
        <div className="mt-8">
          {/* <img src={Subzones} alt="Alpine tundra subzone diagram" className="rounded-lg mx-auto" /> */}
        </div>
      </section>
    </PageWrapper>
  );
}
