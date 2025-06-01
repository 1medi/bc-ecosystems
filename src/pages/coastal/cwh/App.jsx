import EcosystemPage from "../../../components/ecosystemTemplate";
// import bgHero from "@/assets/images/bg-hero.jpg"
import PageWrapper from "../../../components/pageWrapper";
import CWHHero from "../../../assets/videos/cwhHero.mp4";
import CWH from "../../../assets/otherImages/cwh.webp";
import CWHZone from "../../../assets/otherImages/zone.webp";
export default function CWHPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Coastal Western Hemlock Zone"
          subtitle="A moist, temperate rainforest ecosystem along the BC coast"
          heroVideo={CWHHero}
          description="The most extensive zone on the coast, CWH features dense conifer forests, mossy understories, and high biodiversity. It's vital for carbon storage and wildlife."
        />
        <section className="flex m-8 flex-wrap gap-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <div className="flex-1 min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4">
              Where it grows
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy">
              The Coastal Western Hemlock Biogeoclimatic Zone, or CWH zone, is
              named for the Western Hemlock trees that cover the Pacific coast.
              It’s a rainy area with dense forests of conifer trees and lots of
              moss. Wind shapes the landscape, creating patches of trees of
              different ages. Because of all the rain, there aren’t many fires,
              so the trees can grow really old and big.
            </p>

            <h2 className="font-regular-header text-green-900 mt-8 mb-4">
              Location & Distribution
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy">
              <ul>
                <li>
                  Found along the entire BC coast, Vancouver Island, Haida
                  Gwaii, and the Coast Mountains
                </li>
                <li>
                  Extends into river valleys (e.g., Fraser, Skeena) and parts of
                  Alaska & Washington/Oregon
                </li>
                <li className="font-subheader text-green-900 m-2">
                  Elevation:
                  <ul className="font-body-copy text-black">
                    <li>Sea level to 900 m (windward slopes, south coast)</li>
                    <li>Up to 1050 m (leeward slopes)</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <img
              src={CWH}
              alt="Vegetation image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>
        <section className="flex m-8 flex-wrap gap-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <div className="flex-1 min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mt-10 mb-4 text-center">
              Ecological Conditions
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy mb-4">
              The Coastal Western Hemlock (CWH) zone has the wettest climate in
              British Columbia, receiving between 1000 and 4400 mm of
              precipitation annually. In the south, most of this falls as rain,
              while in the north, up to 50% can fall as snow. The climate is
              cool and wet, with mild winters and cool summers. Although hot
              spells can occur in summer, they are usually short. The mean
              annual temperature is around 8°C, with 4 to 6 months above 10°C.
              The coldest month averages around 0.2°C, though colder
              temperatures are possible in the northern parts. These cool, moist
              conditions support lush forests, dense moss layers, and high
              biodiversity, making the CWH zone one of BC's most productive
              ecosystems.
            </p>
          </div>
        </section>
        <section className="p-8 m-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 mb-4 text-center">
            Forest Variation Across the Coastal Western Hemlock Zone
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <p className="font-body-copy m-2">
            The Coastal Western Hemlock (CWH) zone contains a wide variety of
            forest types that change depending on moisture levels and proximity
            to the coast. In hypermaritime areas, forests are dominated by
            western hemlock, western redcedar, Sitka spruce, and sometimes
            yellow cedar, with highly productive stands occurring on
            well-drained slopes and peatlands common on the outer coast. Wetter
            maritime subzones feature forests dominated by western hemlock and
            amabilis fir, often forming even-aged stands due to windthrow, with
            redcedar more common on long-undisturbed sites.
          </p>
          <p className="font-body-copy m-2">
            The typical vegetation includes a rich moss layer and ericaceous
            shrubs like Alaskan blueberry and salal. Drier maritime forests
            contain more Douglas-fir and have well-developed salal and Oregon
            grape in the understory, while submaritime forests—located farther
            inland—lack typical coastal species and instead include interior
            species like queen's cup, red-stemmed feathermoss, and false azalea,
            reflecting a transition toward continental ecosystems.
          </p>
        </section>

        <section className="flex flex-col gap-4 m-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 text-center ">
            CWH Subzone Climate Table
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col md:flex-row">
            <div className="basis-1/3 p-2">
              <h2 className="font-subheader-bold text-green-900 mb-4 text-center">
                Precipitation:
              </h2>
              <p className="font-body-copy ">
                Annual rainfall ranges from ~1300 mm to nearly 3000 mm, with the
                CWHvh being the wettest. Summer is generally drier, but all
                subzones still receive some rain.
              </p>
            </div>
            <div className="basis-1/3 p-2">
              <h2 className="font-subheader-bold text-green-900 mb-4 text-center">
                Growing season:
              </h2>
              <p className="font-body-copy">
                Most subzones have 4 to 6 months where temperatures exceed 10°C.
                <br />
                <strong>Continentality:</strong> Values range from 2 to 7,
                showing how inland subzones experience more temperature
                variation.
              </p>
            </div>
            <div className="basis-1/3 p-2">
              <h2 className="font-subheader-bold text-green-900 mb-4 text-center">
                Temperature:
              </h2>
              <ul className="list-disc pl-6 text-base text-gray-800 leading-relaxed space-y-1">
                <li className="font-body-copy">
                  Average annual temperatures range from 5.5°C to 9.8°C.
                </li>
                <li className="font-body-copy">Warmest month: 13.9-17.6°C</li>
                <li className="font-body-copy">
                  Coldest month: as low as -6.0°C in interior subzones like
                  CWHws.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 m-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 text-center">
            In-Depth Look at the CWH Ecosystem
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl" />
          <p className="font-body-copy text-base md:text-lg leading-relaxed text-center">
            To learn more about the Coastal Western Hemlock zone’s unique
            ecological role, biodiversity, and climate patterns through this
            short documentary.
          </p>
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src=" https://www.youtube.com/embed/Pmpfmw0jGXo?si=S4qSqYatmRmUeT7v"
              title="Coastal Western Hemlock Ecosystem Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </PageWrapper>
    </>
  );
}

("../../../assets/heh.png");
