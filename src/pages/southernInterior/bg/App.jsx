import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
// import bgHero from "@/assets/images/bg-hero.jpg";

export default function BGPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Bunchgrass Zone"
        subtitle="A dry, rare grassland ecosystem home to unique wildlife, cryptogamic crusts, and limited forest cover"
        // heroImage={bgHero}
        description="Covering less than 1% of BC, the Bunchgrass (BG) zone features bunchgrass-dominated ecosystems, rare flora and fauna, and a climate prone to summer drought. It's ecologically vital and underrepresented in protected areas."
        stats={[
          { label: "Mean Annual Temp", value: "5.9°C" },
          { label: "Annual Precipitation", value: "337 mm" },
          { label: "Dominant Plant", value: "Bluebunch Wheatgrass" },
          { label: "Zone Code", value: "BG" },
        ]}
      />

      {/* Overview */}
      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Overview</h2>
        <p className="text-base leading-relaxed">
          The BG zone is one of the few non-forested BEC zones in BC, made up of 60% bunchgrass, 10–15% shrubs, and 25–35% cryptogamic crust (mosses, lichens, algae). These crusts are essential for preventing erosion and maintaining soil health. Threats include overgrazing, invasive species like knapweed and cheatgrass, and loss of cryptogamic crust. Climate change may expand this zone. Only 10% of it is currently protected. The Bunchgrass Hills Conservation Area was recently created by the Nature Conservancy of Canada.
        </p>
      </section>

      {/* Distribution */}
      <section className="p-8 max-w-screen-lg mx-auto bg-[#F6F4ED]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Distribution</h2>
        <p className="text-base leading-relaxed">
          Located in BC’s Central and Southern Interior, the BG zone exists in valley bottoms and low slopes (up to 1000 m). It’s found in the Okanagan, Similkameen, Thompson, Nicola, and Fraser/Chilcotin valleys. It typically lies below the Ponderosa Pine (PP) zone and transitions into Interior Douglas-fir (IDF).
        </p>
      </section>

      {/* Climate */}
      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Climate</h2>
        <p className="text-base leading-relaxed">
          The BG zone's dry climate is influenced by the rainshadow of the Coast Mountains. Summers are hot and winters cold, with most precipitation falling in winter. Annual precipitation is low at 337 mm. Droughts are common due to poor soil moisture retention. See full climate normals: <a className="underline text-blue-600" href="https://climate.weather.gc.ca/climate_normals/results_1991_2020_e.html?stnID=333000000" target="_blank" rel="noopener noreferrer">Environment Canada Climate Normals</a>.
        </p>
      </section>

      {/* Vegetation */}
      <section className="p-8 max-w-screen-lg mx-auto bg-[#EDE8DD]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Vegetation</h2>
        <p className="text-base leading-relaxed mb-4">
          Bluebunch wheatgrass dominates, along with junegrass, Sandberg's bluegrass, sagebrush, and rabbitbrush. Cryptogamic crusts are crucial for soil stability. Ponderosa pine and Douglas-fir exist in ravines or poor soils. Overgrazing reduces plant diversity and harms crusts.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>BGxh: Lower, hotter, drier – sparse sagebrush & moss-lichen crusts</li>
          <li>BGxw: Slightly higher, cooler – denser bunchgrass, fewer lichens</li>
        </ul>
      </section>

      {/* Soils */}
      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Soils</h2>
        <p className="text-base leading-relaxed">
          Dominated by Chernozemic soils — dark, nutrient-rich, formed from decomposed grasses. These soils support productive agriculture and store carbon. Ah horizons and Mull humus types dominate. Example profile: <a className="underline text-blue-600" href="https://monoliths.soilweb.ca/2-06/" target="_blank" rel="noopener noreferrer">Chernozem Example</a>.
        </p>
      </section>

      {/* Wildlife */}
      <section className="p-8 max-w-screen-lg mx-auto bg-[#F6F4ED]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Wildlife</h2>
        <p className="text-base leading-relaxed mb-4">
          Despite its size, the BG zone supports 30% of BC's species at risk. Includes rare mammals like the Pallid Bat and reintroduced Burrowing Owls. Rocky cliffs, shrubsteppe, and riparian areas provide habitat for elk, Canyon Wrens, bats, and chipmunks.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Reintroduction: <strong>Burrowing Owl Conservation Society of BC</strong></li>
          <li>Rare species: Pallid Bat, Great Basin Pocket Mouse, Spotted Bat</li>
          <li>Key birds: White-headed Woodpecker, Wood Duck, Marsh Wren</li>
        </ul>
      </section>

      {/* Resource Use */}
      <section className="p-8 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Resource Use</h2>
        <p className="text-base leading-relaxed">
          The BG zone supports BC’s cattle industry with grazing across seasons. Much land is used for orchards, vineyards, and alfalfa. The climate also supports tourism activities like water sports, hiking, and wildlife viewing.
        </p>
      </section>

      {/* Indigenous Knowledge */}
      <section className="p-8 max-w-screen-lg mx-auto bg-[#EDE8DD]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Indigenous Communities & Traditional Knowledge</h2>
        <p className="text-base leading-relaxed mb-4">
          The Nlaka’pamux people are one of many whose traditional territories include the BG zone. In their words: 
          <em>“Our homeland is a gift from the Creator... Our physical, intellectual, emotional and spiritual well-being depends upon that connection.”</em>
        </p>
        <p className="text-base leading-relaxed">
          A key medicinal plant is <strong>Yarrow (qʷoqʷm’xn-ún’peʔ)</strong>, used for everything from stomach cramps to snakebites and mosquito repellent. Learn more via <a className="underline text-blue-600" href="https://www.mqup.ca/ancient-pathways--ancestral-knowledge-products-9780773543805.php" target="_blank" rel="noopener noreferrer">Ancient Pathways, Ancestral Knowledge</a> by Nancy Turner.
        </p>
      </section>
    </PageWrapper>
  );
}
