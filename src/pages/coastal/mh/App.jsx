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
      <PageWrapper>
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
        <section className="p-8 max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Distribution
              </h2>
              <p className="text-base leading-relaxed">
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
            <div className="md:w-2/3 flex flex-col md:flex-row justify-between gap-6">
              {[
                {
                  label: "SEA LEVEL",
                  img:{Coastal},
                  alt: "Coastal Western Hemlock",
                  caption: "Coastal Western Hemlock reside here!",
                },
                {
                  label: "400–1000 METERS",
                  img: {Hemlock},
                  alt: "Mountain Hemlock",
                  caption: "Mountain Hemlock reside here!",
                },
                {
                  label: "900–1800 METERS",
                  img: {Western},
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

        {/* Climate Section */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#C5D6F5]">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Climate
              </h2>
              <p className="text-base leading-relaxed">
                Mountain Hemlock zones experience heavy snowfall and cool
                summers. Climate is a key driver of the vegetation distribution,
                as shown in the seasonal temperature and precipitation graph
                below.
              </p>
            </div>
            <div className="md:w-[80%] flex items-center justify-center">
              <MHChart />
            </div>
          </div>
        </section>

        {/* Subzones Section */}
        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Subzones in the Mountain Hemlock Zone
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {["/subzone-1.png", "/subzone-2.png"].map((src, i) => (
              <div key={src} className="w-full md:w-1/3">
                <img
                  src={src}
                  alt={`Subzone ${i + 1}`}
                  className="rounded-lg"
                />
                <p className="mt-2 text-sm text-center italic">
                  {i === 0 ? "Windward Moist Subzone" : "Leeward Drier Subzone"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Forests and Meadows Section */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#C5D6F5]">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Forests and Meadows
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <MHPieChart />
            <div className="md:w-1/2">
              <img
                src="/species-pie.png"
                alt="Species Pie Chart"
                className="mb-4"
              />
              <p className="text-base leading-relaxed">
                The MH zone is rich with species like mountain hemlock, yellow
                cedar, and amabilis fir. Meadows are often interspersed among
                forests.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="/meadow-1.png" alt="Meadow" className="rounded-lg" />
              <img src="/meadow-2.png" alt="Plants" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Glacial Landscape and Soils Section */}
        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Glacial Landscape, Soils, and Cultural Connections
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-base leading-relaxed mb-4">
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
        </section>
      </PageWrapper>
    </>
  );
}
