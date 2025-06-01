import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/ich/ich.webp";
export default function ICHPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Interior Cedar-Hemlock Zone"
          subtitle="A wet, productive forest zone with diverse flora."
          heroImage={bgHero}
        />
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="">
              <h2 className="font-regular-header text-center text-green-900 ">
                Distribution
              </h2>
              <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
              <p className="font-body-copy">
                The ICH zone is found at elevations of{" "}
                <strong>400-1500 meters </strong> in southeastern British
                Columbia, the Quesnel and Shuswap Highlands, and east of the
                Coast Mountains in the Nass Basin and Skeena ranges. It receives
                more precipitation than typical interior zones, much of it
                falling as snow, supporting a vegetation pattern with coastal
                similarities.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-center text-green-900 text-center ">
            Ecological Characteristics
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
            <p className="font-body-copy">
              This zone hosts the most tree species of any biogeoclimatic zone
              in the province. Its high productivity and biodiversity result
              from a unique combination of moist snowpack and transitional
              geography. Climax forests are dominated by western hemlock and
              red cedar.
            </p>
            <ul className="m-auto list-disc list-inside font-body-copy space-y-1">
              <h3 className="font-subheader text-green-900">Common Species</h3>
              <li>False box</li>
              <li>Queen's cup</li>
              <li>Bunchberry</li>
              <li>Twinflower</li>
              <li>Step moss</li>
              <li>Knight's plume moss</li>
              <li>Red-stemmed feather moss</li>
            </ul>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-center text-green-900 text-center ">
            Soils & Land Use
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
            <p className="font-body-copy">
              Zonal soils in the ICH include Humo-Ferric Podzols, Brunisolic and
              Orthic Gray Luvisols with typically mor humus forms. Forestry
              dominates land use, with timber harvests common. Agricultural use
              is limited but found in lowland valleys like Creston.
            </p>
            <ul className="list-disc font-body-copy list-inside space-y-1">
              <li>Forestry (Primary use)</li>
              <li>Limited agriculture (e.g., Creston Valley)</li>
              <li>Wildlife: Grizzly Bears, Mountain Caribou</li>
            </ul>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
