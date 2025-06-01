import EcosystemPage from "../../components/ecosystemTemplate";
import AboutZoneCard from "../../components/aboutZoneCard";
import PageWrapper from "../../components/pageWrapper";
import ATVideo from "../../assets/videos/alpineTundra.mp4";
import Skypilot from "../../assets/at/skypilot.webp";


export default function AlpineTundraPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Alpine Tundra Complex"
        subtitle="High-elevation ecosystems above the treeline shaped by snow, wind, and resilience."
        description="Located above the treeline, the Alpine Tundra Complex endures extreme conditions, supporting a tapestry of hardy plants and subdivided into three biogeoclimatic zones."
        heroVideo={ATVideo}
      />

      <AboutZoneCard
        title="About this complex"
        bgColor="bg-[#FCF5EE]"
        description="Nestled at the highest elevations, above the comforting embrace of the tree line, lies this Alpine Tundra Complex, a realm sculpted by cold and wind. Here, the snow's presence is fleeting, its depth a dynamic interplay between mean annual precipitation and the relentless artistry of wind, which scours some areas bare while sculpting drifts in others. Despite these harsh conditions, life tenaciously persists in the form of low, often wind-sculpted trees, a tapestry of low woody shrubs including numerous heath species, resilient grasses, sedges, and vibrant forbs. The soils that develop in this environment, likely Regosols, Cryosols, and Brunisols, often bear a thin, mor-like humus layer, reflecting the slow pace of decomposition. "
        image={Skypilot}
        caption="A skypliot plant"
      />

      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#FCF5EE] rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 text-center mb-6">
          Alpine Tundra Subzones
        </h2>
        <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
        <p className="font-body-copy m-8">
          Nestled at the highest elevations, above the comforting embrace of the
          tree line, lies this Alpine Tundra Complex, a realm sculpted by cold
          and wind. Here, the snow's presence is fleeting, its depth a dynamic
          interplay between mean annual precipitation and the relentless
          artistry of wind, which scours some areas bare while sculpting drifts
          in others. Despite these harsh conditions, life tenaciously persists
          in the form of low, often wind-sculpted trees, a tapestry of low woody
          shrubs including numerous heath species, resilient grasses, sedges,
          and vibrant forbs. The soils that develop in this environment, likely
          Regosols, Cryosols, and Brunisols, often bear a thin, mor-like humus
          layer, reflecting the slow pace of decomposition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="font-subheader-bold text-green-800 mb-2">BAFA</h3>
            <p className="font-body-copy">
              The Boreal Altai Fescue Alpine Tundra is the largest and most
              northern alpine subzone. It features Festuca altaica and Betula
              nana in a continental climate above ESSF or SWB zones.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="font-subheader-bold text-green-800 mb-2">IMA</h3>
            <p className="font-body-copy">
              The Interior Mountain Heather Alpine Tundra is found further south
              in BC's interior. It features diverse heath vegetation and
              maintains a cold, continental climate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="font-subheader-bold text-green-800 mb-2">CMA</h3>
            <p className="font-body-copy">
              The Coastal Mountain Heather Alpine Tundra lies above the MH zone
              along BC's coast. A maritime climate shapes its flora, which
              resembles coastal ecosystems.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
