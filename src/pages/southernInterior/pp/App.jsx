import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/videos/pp.mp4";
import PPIndigenous from "../../../assets/otherImages/ppIndigenous.webp";

export default function PPPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Ponderosa Pine Zone"
          subtitle="The warmest and driest forested zone in BC, found in southern interior valleys"
          heroVideo={bgHero}
          description="A low-elevation, open forest ecosystem dominated by Ponderosa Pine, this zone plays an important ecological role in supporting grassland species, fire cycles, and unique plant communities."
        />
        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 mb-4">Overview</h2>
          <p className="font-body-copy">
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

        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 mb-4">
            Geographic Distribution
          </h2>
          <p className="font-body-copy">
            Found in the Lytton-Lillooet, Thompson, Nicola, Similkameen,
            Okanagan Lake, and Southern Rocky Mountain Trench areas, the PP zone
            occurs at the bottom and lower slopes of interior valleys. It
            transitions to Bunchgrass zones below and Interior Douglas-fir zones
            above. Southward, it continues into eastern Washington and Oregon.
          </p>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Climate & Ecology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-body-copy mb-4">
                This zone has long, dry summers and short winters with little
                snow. It features the highest daytime temperatures in BC with
                rapid nighttime cooling. Frequent low-intensity fires help
                maintain its characteristic open stand structure.
              </p>
              <ul className="list-disc list-inside text-sm font-body-copy space-y-1">
                <li>Summer-dry cool continental climate</li>
                <li>High heat + low precipitation</li>
                <li>Frequent low-severity fires</li>
                <li>Ground-layer dominated by bunchgrasses</li>
              </ul>
            </div>
            <div>{/* optional image placeholder */}</div>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 mb-4">
            Vegetation
          </h2>
          <p className="font-body-copy mb-4">
            The PP zone features open stands of Ponderosa Pine with understory
            dominated by bunchgrasses and herbaceous plants. Douglas-fir and
            other trees like Trembling Aspen and Paper Birch occur in cooler,
            wetter sites.
          </p>
          <ul className="list-disc list-inside text-sm font-body-copy space-y-1">
            <li>Ponderosa Pine, Douglas Fir, Trembling Aspen</li>
            <li>Bluebunch Wheatgrass, Rough Fescue, Yarrow</li>
            <li>Subzones: PPxh (very dry hot), PPdh (dry hot)</li>
          </ul>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 mb-6 text-center">
            Wildlife & Habitat
          </h2>
          <p className="font-body-copy mb-4">
            With mild winters and varied terrain, the PP zone supports a wide
            range of wildlife. Its grasslands, open forests, cliffs, and
            wetlands provide niches for many rare and regionally important
            species.
          </p>
          <ul className="grid grid-cols-2 list-disc list-inside text-sm text-gray-700 gap-2 font-body-copy">
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

        <section className="p-8 max-w-screen-lg mx-auto bg-[#6B5B95]/20 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 mb-4">
            Indigenous communities and land management
          </h2>
          <p className="font-body-copy text-base leading-relaxed text-gray-800 space-y-4">
            The shrub-steppe habitat within the PP zone is home to the Big
            Sagebrush (<em>Artemisia tridentata</em>) plant. Big Sagebrush is a
            highly aromatic plant with a long history of cultural importance.
            South Interior First Nations peoples, such as the Stk’emlupsemc te
            Secwepemc Nation, used Big Sagebrush in many different ways. The
            Secwepemctsín name for Big Sagebrush is <strong>kéwku</strong>. Big
            Sagebrush is best known for its use as a smudge, but it also has
            many other uses. The leaves and branches can be made into a
            medicinal tea for colds or a solution for soaking sore feet. The
            bark can be shredded and used as a fire starter or sometimes it is
            woven into mats, baskets, caps or used as bedding.
          </p>

          <p className="font-body-copy text-base leading-relaxed text-gray-800 space-y-4 mt-4">
            Harvesting and selling sage has grown in popularity, to the point
            where wild populations of other types of sages, such White Sage (
            <em>Salvia apiana</em>), have been poached to the point where these
            plants have become threatened. Learn more in the{" "}
            <a
              href="https://www.youtube.com/watch?v=_V7NoB1UPU8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Saging the World documentary
            </a>
            . We need to protect our wild populations of Big Sagebrush and
            ensure they are not overharvested and mistreated like its cousin,
            the White Sage in the US.
          </p>

          <p className="font-body-copy text-base leading-relaxed text-gray-800 space-y-4 mt-4">
            If you are ever interested in harvesting wild plants, keep in mind
            the guidelines of the Honorable Harvest, as described by Robin Wall
            Kimmerer in her book, <em>Braiding Sweetgrass</em>:
          </p>

          <ul className="grid p-4 grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-8 list-disc list-inside font-body-copy text-gray-800 pl-4">
            <li>
              Know the ways of the ones who take care of you, so that you may
              take care of them.
            </li>
            <li>
              Introduce yourself. Be accountable as the one who comes asking for
              life.
            </li>
            <li>Ask permission before taking. Abide by the answer.</li>
            <li>Never take the first. Never take the last.</li>
            <li>Take only what you need.</li>
            <li>Take only that which is given.</li>
            <li>Never take more than half.</li>
            <li>Leave some for others.</li>
            <li>Harvest in a way that minimizes harm.</li>
            <li>Use it respectfully.</li>
            <li>Never waste what you have taken.</li>
            <li>Share.</li>
            <li>Give thanks for what you have been given.</li>
            <li>Give a gift, in reciprocity for what you have taken.</li>
            <li>
              Sustain the ones who sustain you and the earth will last forever.
            </li>
          </ul>
          <figure className="max-w-screen font-body-copy">
            <img src={PPIndigenous}/>
            <figcaption>A map displaying the indigenous communities within the Ponderosa Pine</figcaption>
          </figure>
        </section>
      </PageWrapper>
    </>
  );
}
