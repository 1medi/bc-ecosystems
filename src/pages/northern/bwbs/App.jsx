import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
// import bgHero from "@/assets/images/bg-hero.jpg"

export default function BWBSPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Boreal White and Black Spruce Zone"
        subtitle="Part of the vast boreal forest that spans across northern continents, characterized by cool, moist conditions and spruce-dominated forests."
        // heroImage={bgHero}
        description="Covering much of northeastern British Columbia, this zone represents the southern extent of Canada’s boreal biome. With its distinctive spruce forests, long winters, and fire-influenced ecology, it plays a critical role in carbon storage and forest succession."
        stats={[
          { label: "Mean Annual Temp", value: "0.5°C" },
          { label: "Annual Precipitation", value: "300–500 mm" },
          { label: "Dominant Tree", value: "Black & White Spruce" },
          { label: "Zone Code", value: "BWBS" },
        ]}
      />

      <section className="p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Overview and Geography</h2>
            <p className="text-base leading-relaxed">
              The BWBS zone is a significant extension of the boreal forest stretching across North America, Europe, and Asia. In British Columbia, it spans much of the northern Great Plains and enters the lower valleys of mountainous western regions. Its climate is cool and moist, though it receives the lowest precipitation among northern zones — with 35% to 55% falling as snow.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <img src={BWBSMap} alt="BWBS zone map" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto bg-[#F0EAD6]">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Ecological Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              Zonal ecosystems are dominated by black and white spruce, with heath shrubs and feather mosses like <i>Hylocomnium splendens</i> and <i>Pleurozium schreberi</i>. These forests typically grow on Humo-Ferric Podzols or Luvisolic soils, particularly Orthic and Brunisolic Gray Luvisols in the Great Plains.
              <br /><br />
              Fire is a key natural disturbance. While many past fires in the Peace River country were human-caused, lightning is now the dominant ignition source. Seral forests, particularly in fire-affected areas, are often dominated by trembling aspen with rich forb and shrub understories.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Spruce-dominated climax forests</li>
              <li>Trembling aspen in seral stages</li>
              <li>Heath shrub and feather moss understories</li>
              <li>Podzolic and Luvisolic soils</li>
              <li>Fire and lightning as disturbance drivers</li>
            </ul>
          </div>
          <div>
            {/* <img src={AspenForest} alt="Trembling aspen ecosystem" className="rounded-lg" /> */}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
  