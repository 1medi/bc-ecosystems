import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/sbs/sbs.png";

export default function SBSPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Sub-Boreal Spruce Zone"
          subtitle="A moist, cool forested zone important for forestry and wildlife"
          heroImage={bgHero}
          description="This zone includes dense forests and wetlands, supporting moose, bears, and other northern wildlife."
          stats={[
            { label: "Mean Annual Temp", value: "4°C" },
            { label: "Annual Precipitation", value: "400–1000 mm" },
            { label: "Dominant Tree", value: "Hybrid White Spruce" },
            { label: "Zone Code", value: "SBS" },
          ]}
        />

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Overview</h2>
          <p className="font-body-copy">
            The Sub-Boreal Spruce zone (SBS) is the third largest forested zone in BC, covering an area of 10.31 million hectares. The zone features a mean annual temperature of 2.3°C, ranging from 13.7°C in the warmest month to -10.2°C in the coldest. It receives about 652 mm of precipitation annually. The SBS zone spans elevations from valley bottoms to 1300 meters, predominantly covering plateaus between 1100–1300 m in the Central and Boreal Interior regions. Climax species include Hybrid Spruce, White Spruce, and Subalpine Fir.
          </p>
          <p className="font-body-copy mt-4">
            Formerly, areas now classified as the Sub-Boreal Pine-Spruce zone (SBPS) were part of the SBS. However, differences in climate and ground vegetation, including more lichens and pinegrass in the SBPS, warranted their separation.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Distribution</h2>
          <p className="font-body-copy">
            The SBS dominates BC’s central interior, extending from the Nechako and Fraser plateaus into adjacent mountain slopes. It spans areas like Quesnel, Horsefly, Babine Lake, Takla Lake, and Williston Lake, with Vanderhoof and Prince George near its center. The region is rich with rivers—Skeena, Fraser, Babine—and large lakes such as Stuart and Trembleur. Wetlands are widespread, particularly in poorly drained post-glacial depressions and oxbows, featuring sedge marshes and shrub fens.
          </p>
          <p className="font-body-copy mt-4">
            The SBS borders multiple zones: Boreal White and Black Spruce to the north, Interior Cedar-Hemlock to the northwest and east, Sub-Boreal Pine-Spruce to the southwest, and Interior Douglas-Fir to the south. At higher elevations, it transitions into the Engelmann Spruce–Subalpine Fir zone.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Climate</h2>
          <p className="font-body-copy">
            Climate varies across the SBS due to its broad range. Annual precipitation can range from 500 mm in the drier SBSdw subzones to 950 mm in wetter mountainous SBSvk areas. Winters are long and severe, while summers are short and warm. On average, temperatures remain below 0°C for 4–5 months and above 10°C for only 2–5 months.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Geology & Soils</h2>
          <p className="font-body-copy">
            The geological foundation of the SBS zone dates back 250 million years with volcanic lava and deep-sea sediment origins. Glaciation 25,000 years ago sculpted the terrain, leaving behind till and forming lakes like Glacial Lake Prince George. Today, rivers like the Fraser and Nechako shape the sandy, gravelly landscapes.
          </p>
          <p className="font-body-copy mt-4">
            Upland soils include Luvisols, Podzols, and Brunisols. Brunisolic Grey Luvisols with loamy textures dominate zonal sites, while Brunisols are common in sandy, well-drained areas.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Vegetation</h2>
          <p className="font-body-copy">
            Climax species include Hybrid White Spruce and Subalpine Fir. Early successional species like Lodgepole Pine, Trembling Aspen, and Paper Birch are common in younger forests.
          </p>
          <ul className="list-disc pl-6 mt-4 font-body-copy">
            <li><strong>Streams, wetlands, and bogs:</strong> Sitka alder, willows, shrub birch, sedges, sphagnum moss</li>
            <li><strong>Wetter, alluvial sites:</strong> Black spruce, balsam poplar, paper birch, highbush cranberry, coltsfoot, oak fern</li>
            <li><strong>Warmer, drier sites:</strong> Douglas-Fir, Lodgepole Pine, soopolallie, kinnikinnik, pinegrass, rough-leaved rice grass</li>
          </ul>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Wildlife</h2>
          <p className="font-body-copy">
            Moose thrive in the SBS due to dense cover and plentiful wetlands. Mule deer and caribou forage on shrubs and lichens. Small mammals like voles, shrews, and groundhogs hibernate or travel under snow in winter. Red squirrels, snowshoe hares, marten, and fisher remain active above snow.
          </p>
          <p className="font-body-copy mt-4">
            Birdlife includes year-round residents like owls and grouse, and seasonal visitors like waterfowl and sandhill cranes. Wetlands support amphibians such as the spotted frog, wood frog, and Western toad, while garter snakes are found throughout.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Indigenous Communities & Land Management</h2>
          <p className="font-body-copy">
            Eighteen First Nations from six language groups live within the SBS zone. The Dakelh (ᑕᗸᒡ) are prominent, with deep ties to fishing, hunting, and berry picking. Nations like the Natzko and Saik'uz maintain cultural practices while developing forestry, tourism, and language revitalization initiatives.
          </p>
        </section>
      </PageWrapper>
    </>
  );
}
