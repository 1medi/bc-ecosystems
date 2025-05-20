import EcosystemPage from "../../../components/ecosystemTemplate";
import MHPieChart from "../../../components/mhPie";
// import bgHero from "@/assets/images/bg-hero.jpg"
import AboutZoneCard from "../../../components/aboutZoneCard";
import MHChart from "../../../components/mhChart/index";
import PageWrapper from "../../../components/pageWrapper";
import Krumm from "../../../assets/mh/krumhotz.png";
import MHCover from "../../../assets/mh/mhcover.png";
import Coastal from "../../../assets/mh/diagram/coastalMountain.webp";
import Western from "../../../assets/mh/diagram/coastalWestern.webp";
import Hemlock from "../../../assets/mh/diagram/mountainHemlock.webp";
import Forested from "../../../assets/mh/subzones/forestedSubzone.webp";
import Parkland from "../../../assets/mh/subzones/parklandSubzone.webp";
import MHHeader from "../../../assets/videos/mhHeader.mp4";
import MHLand1 from "../../../assets/mh/mhLand1.png";

export default function MountainHemlockPage() {
  return (
    <>
      <PageWrapper bgGradient="bg-gradient-to-br from-[#BBD4FF] to-[#7B9BD1]">
        <EcosystemPage
          title="Mountain Hemlock Zone"
          heroVideo={MHHeader}
          subtitle="Cool, wet mountain forests above coastal zones"
          description="Located at high elevations, the MH zone features heavy snowpack, cold temperatures, and mountain-adapted forests dominated by mountain hemlock."
          stats={[
            { label: "Mean Annual Temp", value: "3°C" },
            { label: "Annual Precipitation", value: "1400–2500 mm" },
            { label: "Dominant Tree", value: "Mountain Hemlock" },
            { label: "Zone Code", value: "MH" },
          ]}
        ></EcosystemPage>
        <AboutZoneCard
          bgColor="bg-[#C5D6F5]/75"
          title="About this zone"
          description="The Mountain Hemlock Biogeoclimatic zone (or MH zone) gets its name from the abundance of mountain hemlock present in the higher elevation areas across the Pacific coast region. Mountain hemlock is also known as Tsuga mertensiana and is well adapted to the colder and snowier conditions found at higher elevations. Deep snow and a shorter growing season play a large role in the MH zone ecosystem. At higher elevations the forest transitions into subalpine parklands where trees are found grouped together. These “islands” are microsites where the snow melts a little bit earlier. At these upper edges, trees can be small, misshapen, but older than you might think as they are slow to grow. These are known as Krummholz trees, a German word meaning “crooked wood”. These forests are rarely disturbed by events like fires, so trees can become old growth forests in this zone. More typical disturbance agents are avalanches or rock slides."
          image={Krumm}
          // background={MHCover}
          caption="A Krummholz tree"
        />
        {/* Distribution Section */}
        <div className="p-12 md:px-8">
          <div className="flex flex-col md:flex-row md:space-x-12 items-start ">
            <div className="md:w-1/3 mb-6 md:mb-0 bg-[#C5D6F5] p-4 rounded-xl shadow-xl">
              <h2 className="font-section-header">Distribution</h2>
              <p className="font-body-copy">
                The Mountain Hemlock zone covers much of the mid to high
                elevations along the Pacific coast, including Vancouver Island,
                Haida Gwaii and the Coast Mountains within BC. The MH zone also
                extends north into Alaska, and south into Washington and Oregon.
                It occupies elevations from 900–1800 m above sea level in the
                southern part of the zone, and 400–1000 m above sea level in the
                northern extent of the zone. At lower elevations below the MH
                zone, the ecosystem transitions into the Coastal Western Hemlock
                zone, where mountain hemlock is replaced by western hemlock. In
                areas where the mountains are high enough, the MH zone
                transitions into the treeless alpine meadows of the Coastal
                Mountain Heather Alpine zone.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center text-center">
                <p className="font-semibold mb-1">SEA LEVEL</p>
                <img
                  src={Coastal}
                  alt="Coastal Western Hemlock"
                  className="w-full max-w-[600px] object-contain"
                />
                <p className="mt-2 text-sm font-medium">
                  Coastal Western Hemlock reside here!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="font-semibold mb-1">400–1000 METERS</p>
                <img
                  src={Western}
                  alt="Mountain Hemlock"
                  className="w-full max-w-[600px] object-contain"
                />
                <p className="mt-2 text-sm font-medium">
                  Mountain Hemlock reside here!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="font-semibold mb-1">900–1800 METERS</p>
                <img
                  src={Hemlock}
                  alt="Coastal Mountain Heather Alpine"
                  className="w-full max-w-[600px] object-contain"
                />
                <p className="mt-2 text-sm font-medium">
                  Coastal Mountain Heather Alpine reside here!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Section */}
        <div className="px-4 py-12 md:px-8 flex flex-col md:flex-row ">
          <h2 className="font-section-header m-auto">Climate</h2>
          <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 bg-[#C5D6F5] p-4 rounded-xl shadow-xl">
            <div className="md:w-1/2 ">
              <p className="text-[16px] leading-relaxed">
                The Mountain Hemlock zone is one of Canada’s wettest ecosystems
                with annual precipitation of 1700-5000 mm. The majority of the
                precipitation falls as snow, and the snowpack can reach up to 6m
                in depth. The snow is usually wet and heavy, which can cause
                trees to bend or break. You will often see mountain hemlock
                trees with broken branches and a very “rugged” appearance! The
                summers are short and cool and the winters are long, cool and
                wet. The mean annual temperature in the MH zone ranges from 0 to
                5°C. The snow melts slowly, so the growing season is relatively
                short; only 1-3 months long. The thick snow provides good
                insulation, which means the ground rarely freezes.
              </p>
            </div>
            <div className="md:w-[80%] flex items-center justify-center">
              <MHChart />
            </div>
          </div>
        </div>

        {/* Subzones Section */}
        <div className="px-4 py-12 md:px-8 ">
          <h2 className="font-section-header text-center mb-6">
            Subzones in the Mountain Hemlock Zone
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center m-4">
            <div className=" bg-[#C5D6F5] p-4 rounded-xl shadow-xl max-w-[500px]">
              <p className="font-body-copy">
                The Mountain Hemlock (MH) zone is a unique ecological region
                deeply influenced by the Pacific Ocean and the surrounding
                mountain ranges. This combination of oceanic proximity,
                elevation, and high precipitation gives rise to four distinct
                subzones within the MH zone, each supporting different plant
                communities and soil conditions. These subzones are named based
                on their distance from the ocean and the moisture they receive.
                The hypermaritime subzones—the wettest and most coastal—are
                found along the outer mainland coast, as well as the western
                edges of Vancouver Island and Haida Gwaii. Moving inland, the
                conditions shift slightly to what are known as maritime and
                submaritime subzones, where ocean influence still plays a role
                but is less dominant. These subzones each form their own
                micro-ecosystems, from dense conifer forests to open subalpine
                meadows.
              </p>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="font-body-copy">
                Moisture levels are categorized simply as either moist or wet,
                and vegetation is further divided into two types:
              </p>

              <div className="m-auto flex flex-col md:flex-row ">
                <img
                  src={Forested}
                  alt="a forested subzone"
                  className="rounded-lg w-full max-w-screen md:max-w-[1000px] p-4"
                />
                <p className="mt-2 text-sm text-center italic">
                  Forested subzones, found at lower elevations.
                </p>
              </div>

              <div className="m-auto flex flex-row-reverse">
                <img
                  src={Parkland}
                  alt="a parkland subzone"
                  className="rounded-lg  w-full max-w-screen md:max-w-[1000px] p-4"
                />
                <p className="mt-2 text-sm text-center italic">
                  Parkland subzones, which occur higher up where conditions
                  become harsher.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Forests and Meadows Section */}
        <div className="px-4 py-12 md:px-8 ">
          <h2 className="font-section-header text-center mb-6">
            Forests and Meadows
          </h2>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-row">
              <div className="w-1/2">
                <MHPieChart />
              </div>
              <div className="flex flex-row w-1/2">
                <div className="flex flex-col w-1/2 p-2">
                  <p className="font-body-copy">
                    The MH zone is rich with species like mountain hemlock,
                    yellow cedar, and amabilis fir. Meadows are often
                    interspersed among forests.
                  </p>
                  <img
                    src={MHLand1}
                    alt="Species Pie Chart"
                    className="w-full max-w-screen md:max-w-[600px]"
                  />
                </div>
                <div className="flex w-1/2 p-2">
                  <p className="font-body-copy">
                    In the lower forested regions, you'll also find species like
                    Western hemlock, Western redcedar, Douglas-fir, Sitka
                    spruce, and Western white pine, varying by location and
                    elevation. Higher up, near the timberline, Subalpine fir and
                    Whitebark pine make appearances, particularly where the MH
                    zone begins to transition into the Engelmann
                    Spruce–Subalpine Fir zone as you move from the coastal
                    ecosystems to the interior ecosystems.  The understory is
                    rich with shrubs, including various species of blueberry
                    (oval-leaved, Alaska, and black huckleberry), false azalea,
                    white-flowered rhododendron, and copperbush. Mosses form
                    thick carpets, such as pipecleaner moss, red-stemmed
                    feathermoss, and fan moss. Herbs and low-growing plants are
                    fewer, but species like queen’s cup, skunk cabbage, and
                    twisted stalk can be found.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="font-body-copy">
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
              <div className="items-center justify-center m-auto grid grid-cols-2 gap-4">
                <img src="/meadow-1.png" alt="Meadow" className="rounded-lg" />
                <img src="/meadow-2.png" alt="Plants" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {/* Cultural connections of the MH Ecosystem */}
        <div className="px-4 py-12 md:px-8">
          <h2 className="font-section-header text-center">
            Cultural Connections of MH
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <p className="font-body-copy">
              Culturally, the MH zone is part of the traditional territory of
              many Indigenous communities. One significant species is the Yellow
              cedar, prized for its durability, spiritual importance, and use in
              carving and canoe building. Visitors can deepen their
              understanding of Indigenous land stewardship at the Squamish
              Lil’wat Cultural Centre in Whistler, which showcases the enduring
              connection between people and the land.
            </p>
          </div>
        </div>
        {/* Glacial Landscape and Soils Section */}
        <div className="px-4 py-12 md:px-8">
          <h2 className="font-section-header text-center mb-6">
            Glacial Landscape and Soils
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="font-body-copy">
                The MH zone is shaped by glacial activity, which has left behind
                rocky and nutrient-poor soils. Cultural connections to this land
                are strong among Indigenous communities who rely on traditional
                ecological knowledge.
              </p>
              <img src="/soil-type-1.png" alt="Soil 1" className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <img
                src="/soil-type-2.png"
                alt="Soil 2"
                className="rounded-lg mb-4"
              />
              <p className="text-sm italic text-center">
                Modern soil classifications and traditional knowledge often
                intersect in this zone.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
