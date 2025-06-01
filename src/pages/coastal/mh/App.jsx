import EcosystemPage from "../../../components/ecosystemTemplate";
import MHPieChart from "../../../components/charts/mhPie";
import AboutZoneCard from "../../../components/aboutZoneCard";
import MHChart from "../../../components/charts/mhChart/index";
import PageWrapper from "../../../components/pageWrapper";
import Krumm from "../../../assets/mh/krumhotz.webp";
import MHCover from "../../../assets/mh/mhcover.webp";
import Coastal from "../../../assets/mh/diagram/coastalMountain.webp";
import Western from "../../../assets/mh/diagram/coastalWestern.webp";
import Hemlock from "../../../assets/mh/diagram/mountainHemlock.webp";
import Forested from "../../../assets/mh/subzones/forestedSubzone.webp";
import Parkland from "../../../assets/mh/parkland.webp";
import MHHeader from "../../../assets/videos/mhHeader.mp4";
import MHLand1 from "../../../assets/mh/mhLand1.webp";
import Forest1 from "../../../assets/mh/forestMeadows1.webp";
import Forest2 from "../../../assets/mh/forestMeadows2.webp";
import Roadcut from "../../../assets/mh/roadCut.webp";
import Veg1 from "../../../assets/mh/mhVeg2.webp";
import Veg2 from "../../../assets/mh/mhVeg3.webp";
import Slideshow from "../../../components/slideshow";
const soilSlides = [
  {
    image: (
      <img src={Veg2} alt="Slide 1" className="w-full h-full object-fill" />
    ),
    description:
      "Organic Soils (e.g., Fibrisols, Mesisols): found in waterlogged areas.",
  },
  {
    image: (
      <img src={Veg2} alt="Slide 1" className="w-full h-full object-fill" />
    ),
    description:
      "Podzolic Soils (e.g., Ferro-Humic Podzols): formed by water leaching in well-drained sites.",
  },
];

export default function MountainHemlockPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Mountain Hemlock Zone"
          heroVideo={MHHeader}
          subtitle="Cool, wet mountain forests above coastal zones"
          description="Located at high elevations, the MH zone features heavy snowpack, cold temperatures, and mountain-adapted forests dominated by mountain hemlock."
        />
        <AboutZoneCard
          bgColor="bg-[#C5D6F5]/75"
          title="About this zone"
          description="The Mountain Hemlock Biogeoclimatic zone (or MH zone) gets its name from the abundance of mountain hemlock present in the higher elevation areas across the Pacific coast region. Mountain hemlock is also known as Tsuga mertensiana and is well adapted to the colder and snowier conditions found at higher elevations. Deep snow and a shorter growing season play a large role in the MH zone ecosystem. At higher elevations the forest transitions into subalpine parklands where trees are found grouped together. These “islands” are microsites where the snow melts a little bit earlier. At these upper edges, trees can be small, misshapen, but older than you might think as they are slow to grow. These are known as Krummholz trees, a German word meaning “crooked wood”. These forests are rarely disturbed by events like fires, so trees can become old growth forests in this zone. More typical disturbance agents are avalanches or rock slides."
          image={Krumm}
          caption="A Krummholz tree"
        />

        <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="font-regular-header text-green-900 mb-4">
                Distribution
              </h2>
              <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
              <p className="font-body-copy">
                The Mountain Hemlock zone covers much of the mid to high
                elevations along the Pacific coast, including Vancouver Island,
                Haida Gwaii and the Coast Mountains within BC. The MH zone also
                extends north into Alaska, and south into Washington and Oregon.
                It occupies elevations from 900–1800 m above sea level in the
                southern part of the zone, and 400–1000 m in the northern
                extent. At lower elevations it transitions into the Coastal
                Western Hemlock zone. Higher up, it becomes treeless alpine
                meadows.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-col md:flex-row justify-between items-center m-auto gap-6">
              {[
                {
                  label: "SEA LEVEL",
                  img: Coastal,
                  alt: "Coastal Western Hemlock",
                  caption: "Coastal Western Hemlock reside here!",
                },
                {
                  label: "400-1000 METERS",
                  img: Hemlock,
                  alt: "Mountain Hemlock",
                  caption: "Mountain Hemlock reside here!",
                },
                {
                  label: "900-1800 METERS",
                  img: Western,
                  alt: "Coastal Mountain Heather Alpine",
                  caption: "Coastal Mountain Heather Alpine reside here!",
                },
              ].map(({ label, img, alt, caption }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <p className="font-semibold mb-1">{label}</p>
                  <img
                    src={img}
                    alt={alt}
                    className="w-[200px] h-[200px] object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto  bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="font-regular-header text-green-900 mb-4">
                Climate
              </h2>
              <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
              <p className="font-body-copy">
                The Mountain Hemlock zone is one of Canada's wettest ecosystems
                with annual precipitation of 1700-5000 mm. The majority of the
                precipitation falls as snow, and the snowpack can reach up to 6m
                in depth. The snow is usually wet and heavy, which can cause
                trees to bend or break. You will often see mountain hemlock
                trees with broken branches and a very “rugged” appearance! The
                summers are short and cool and the winters are long, cool and
                wet. The mean annual temperature in the MH zone ranges from 0 to
                5°C. The snow melts slowly, so the growing season is relatively
                short; only 1-3 months long. The thick snow provides good
                insulation, which means the ground rarely freezes.
              </p>
            </div>
            <div className="md:w-[80%] min-h-[100%] flex items-center justify-center">
              <MHChart />
            </div>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Subzones in the Mountain Hemlock Zone
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col justify-center gap-8">
            <p className="font-body-copy">
              Moisture levels are categorized simply as either moist or wet, and
              vegetation is further divided into two types:
            </p>
            <div className="flex flex-col w-full ">
              <img
                src={Forested}
                alt="Subzone"
                className="rounded-lg max-h-150"
              />
              <p className="mt-2 font-body-copy text-center italic">
                Forested subzones, found at lower elevations
              </p>
            </div>
            <div className="flex flex-col w-full">
              <img
                src={Parkland}
                alt="Subzone"
                className="rounded-lg max-h-150"
              />
              <p className="mt-2 font-body-copy text-center italic">
                Parkland subzones, which occur higher up where conditions become
                harsher.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto  bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Forests and Meadows
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="relative w-full h-[100vw] max-h-[600px] p-4 m-auto mb-6">
            <MHPieChart />
          </div>
          <div className="flex flex-col justify-center m-auto p-4">
            <div className="flex flex-col md:grid md:grid-cols-[60fr_100fr] md:gap-4 p-4">
              <figure>
                <img
                  src={MHLand1}
                  alt="Species Pie Chart"
                  className="mb-4 rounded-xl w-full"
                />
              </figure>
              <p className="font-body-copy">
                One of the most defining features of the MH zone is the
                dominance of Mountain hemlock (Tsuga mertensiana), which thrives
                in both forested and parkland areas. Alongside it, Amabilis fir
                (Abies amabilis) and Yellow cedar (Chamaecyparis nootkatensis)
                are common, forming the backbone of the subalpine forest
                ecosystems. In the lower forested regions, you'll also find
                species like Western hemlock, Western redcedar, Douglas-fir,
                Sitka spruce, and Western white pine, varying by location and
                elevation. Higher up, near the timberline, Subalpine fir and
                Whitebark pine make appearances, particularly where the MH zone
                begins to transition into the Engelmann Spruce-Subalpine Fir
                zone as you move from the coastal ecosystems to the interior
                ecosystems. The understory is rich with shrubs, including
                various species of blueberry (oval-leaved, Alaska, and black
                huckleberry), false azalea, white-flowered rhododendron, and
                copperbush. Mosses form thick carpets, such as pipecleaner moss,
                red-stemmed feathermoss, and fan moss. Herbs and low-growing
                plants are fewer, but species like queen's cup, skunk cabbage,
                and twisted stalk can be found.
              </p>
            </div>
            <div>
              <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                <img
                  src={Forest1}
                  alt="Meadow"
                  className="rounded-lg min-h-[100px] w-full"
                />
                <img
                  src={Forest2}
                  alt="Plants"
                  className="rounded-lg min-h-[100px] w-full"
                />
              </div>
              <p className="p-2 font-body-copy">
                In the parkland subzones, the forest canopy becomes more sparse.
                Trees grow in clusters, separated by lush meadows or low-lying
                heath vegetation. These meadows are home to colorful herbs like
                false hellebore, Sitka valerian, paintbrush species, and white
                marsh marigold. Subalpine heaths support mountain heather
                species—pink, white, and yellow—as well as partridgefoot,
                running clubmoss, and crowberry. Wet subalpine basins may host
                species like black alpine sedge, thriving in cold, wet
                conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto  bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Life in the MH zone
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col md:flex-row gap-8">
            <p className="font-body-copy">
              Few animals reside year-round in the MH zone due to its climate.
              Instead, many species utilize it seasonally. Black and grizzly
              bears move to higher elevations for late-summer berries, and some
              den there. Mountain goats migrate between high summer slopes and
              lower winter forests. Pikas and marmots occupy rocky terrain.
              Avalanche tracks are important for mountain goats, Roosevelt elk,
              black-tailed deer, and bears. Forests support great grey owl,
              Clark's nutcracker, raven, pileated woodpecker, chestnut-backed
              chickadee, Townsend's warbler, and golden crowned kinglet to name
              a few. While subalpine areas host golden eagles, white-tailed
              ptarmigan, willow ptarmigan and blue grouse.
            </p>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto  bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Cultural Connections of MH
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col md:flex-row gap-8">
            <p className="font-body-copy">
              Culturally, the MH zone is part of the traditional territory of
              many Indigenous communities. One significant species is the Yellow
              cedar, prized for its durability, spiritual importance, and use in
              carving and canoe building. Visitors can deepen their
              understanding of Indigenous land stewardship at the Squamish
              Lil'wat Cultural Centre in Whistler, which showcases the enduring
              connection between people and the land.
            </p>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto  bg-[#C5D6F5]/75 rounded-xl shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Glacial Landscape and Soils
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col gap-8">
            <div className="flex-col">
              <p className="font-body-copy p-2">
                The Mountain Hemlock (MH) zone is shaped by a powerful
                combination of geology, glacial history, and cultural heritage.
                Its foundation lies on granitic bedrock (mainly quartz diorite
                and granodiorite), which is naturally acidic and nutrient-poor,
                forming well-drained, sandy soils. However, it's the region's
                glacial history that gives the MH zone its dramatic
                features—steep valleys, flat ridges, and rugged peaks.
              </p>
              <p className="font-body-copy p-2">
                Glaciers also left behind till deposits that, along with
                colluvium and organic material, act as the parent material for
                soil formation. Despite being geologically young, soils here are
                surprisingly mature due to the cool, moist climate which slows
                decomposition and allows thick layers of Mor humus to form.
                These organic-rich layers, dominated by fungi, provide critical
                nutrient and moisture reserves for tree growth.
              </p>
            </div>
            <figure>
              <img src={Roadcut} alt="Soil 1" className="rounded-lg w-full" />
              <figcaption>The till and layers of parent materials</figcaption>
            </figure>
          </div>
          <div className="rounded-xl">
            <h2 className="font-regular-header text-green-900 text-center p-4">
              Two primary soil types define the area
            </h2>
            <div className="w-full h-[240px] lg:h-120 ">
              <Slideshow slides={soilSlides} />
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
