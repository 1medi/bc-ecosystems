import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/videos/pp.mp4";

export default function PPPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Ponderosa Pine Zone"
          subtitle="The warmest and driest forested zone in BC, found in southern interior valleys"
          heroVideo={bgHero}
          description="A low-elevation, open forest ecosystem dominated by Ponderosa Pine, this zone plays an important ecological role in supporting grassland species, fire cycles, and unique plant communities."
          stats={[
            { label: "Mean Annual Temp", value: "17.7–18.7°C" },
            { label: "Annual Precipitation", value: "130–220 mm" },
            { label: "Dominant Tree", value: "Ponderosa Pine" },
            { label: "Zone Code", value: "PP" },
          ]}
        />
        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Overview</h2>
          <p className="text-base leading-relaxed">
            The Ponderosa Pine (PP) biogeoclimatic zone is the warmest and
            driest forested zone in British Columbia. It is the third smallest
            biogeoclimatic zone covering 0.4% of BC. The PP zone primarily
            occurs in valleys in the southern interior including the Fraser,
            Thompson, Nicola, Okanagan, Similkameen, Kettle, and Pend d'Oreille
            regions. This zone transitions at lower elevations to the Bunchgrass
            biogeoclimatic zone, and to the Interior Douglas Fir zone at higher
            elevations. The Ponderosa Pine is the dominant tree and is found in
            the open savannah-like stands, while Douglas Firs thrive in the
            cooler and moister sites throughout the PP zone. The understory is
            made up primarily of grasses such as Bluebunch Wheatgrass and Rough
            Fescues. Ground fires are frequent in this zone, which contribute to
            maintaining the stand structure and creating openings. It serves as
            crucial habitat for various species including Bighorn Sheep,
            Burrowing Owls, Grouse, and White-Tailed Deer, among others.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Geographic Distribution
          </h2>
          <p className="text-base leading-relaxed">
            Found in the Lytton-Lillooet, Thompson, Nicola, Similkameen,
            Okanagan Lake, and Southern Rocky Mountain Trench areas, the PP zone
            occurs at the bottom and lower slopes of interior valleys. It
            transitions to Bunchgrass zones below and Interior Douglas-fir zones
            above. Southward, it continues into eastern Washington and Oregon.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#F9F4EC]">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Climate & Ecology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed mb-4">
                This zone has long, dry summers and short winters with little
                snow. It features the highest daytime temperatures in BC with
                rapid nighttime cooling. Frequent low-intensity fires help
                maintain its characteristic open stand structure.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Summer-dry cool continental climate</li>
                <li>High heat + low precipitation</li>
                <li>Frequent low-severity fires</li>
                <li>Ground-layer dominated by bunchgrasses</li>
              </ul>
            </div>
            <div>{/* optional image placeholder */}</div>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Vegetation</h2>
          <p className="text-base leading-relaxed mb-4">
            The PP zone features open stands of Ponderosa Pine with understory
            dominated by bunchgrasses and herbaceous plants. Douglas-fir and
            other trees like Trembling Aspen and Paper Birch occur in cooler,
            wetter sites.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Ponderosa Pine, Douglas Fir, Trembling Aspen</li>
            <li>Bluebunch Wheatgrass, Rough Fescue, Yarrow</li>
            <li>Subzones: PPxh (very dry hot), PPdh (dry hot)</li>
          </ul>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#F0EAD6]">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
            Wildlife & Habitat
          </h2>
          <p className="text-base leading-relaxed mb-4">
            With mild winters and varied terrain, the PP zone supports a wide
            range of wildlife. Its grasslands, open forests, cliffs, and
            wetlands provide niches for many rare and regionally important
            species.
          </p>
          <ul className="grid grid-cols-2 list-disc list-inside text-sm text-gray-700 gap-2">
            <li>California Bighorn Sheep</li>
            <li>Burrowing Owl</li>
            <li>Coyote, Cougar, Black Bear</li>
            <li>Garter Snake, Tiger Salamander</li>
            <li>Clark’s Nutcracker, Grouse</li>
            <li>American Kestrel, Badger</li>
            <li>Beaver, Yellow-Pine Chipmunk</li>
            <li>Painted Turtle, Red Squirrel</li>
          </ul>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Indigenous Knowledge & Use
          </h2>
          <p className="text-base leading-relaxed">
            The Big Sagebrush plant, or <em>kéwku</em> in Secwepemctsín, holds
            cultural and medicinal significance for the Stk’emlupsemc te
            Secwepemc Nation. It’s used for smudging, teas, and woven materials.
            The PP zone’s shrub-steppe habitats emphasize the need for
            respectful, reciprocal harvesting practices guided by principles of
            the Honorable Harvest.
          </p>
        </section>
      </PageWrapper>
    </>
  );
}
