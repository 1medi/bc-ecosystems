import EcosystemPage from "../../../components/ecosystemTemplate";
import bgHero from "../../../assets/cdf/cdf.webp";
import PageWrapper from "../../../components/pageWrapper";
import CDFTemp from "../../../assets/otherImages/cdfTemperature.webp";
import CDFVeg from "../../../assets/otherImages/cdfVegetation.webp";
import CDFForest from "../../../assets/otherImages/forest.webp";
export default function CDFPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Coastal Douglas-fir Zone"
          subtitle="A dry coastal forest with a Mediterranean-like climate"
          heroImage={bgHero}
          description="This rare coastal ecosystem has warm, dry summers and supports open forests of Douglas-fir and Garry oak. It’s among BC’s most threatened zones."
          stats={[
            { label: "Mean Annual Temp", value: "9°C" },
            { label: "Annual Precipitation", value: "600–1000 mm" },
            { label: "Dominant Tree", value: "Douglas-fir" },
            { label: "Zone Code", value: "CDF" },
          ]}
        />
        <section className="p-8 m-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 mb-4">
            What is the CDF Zone?
          </h2>
          <p className="font-body-copy">
            The unique and biodiverse Coastal Douglas-fir (CDF) Biogeoclimatic
            zone of BC is home to numerous rare and threatened ecosystems and
            species. This zone represents one of BC's rarest forest types,
            occupying only 0.3% of the province and found nowhere else in
            Canada, making it highly threatened. It has experienced the most
            conversion in BC, with twice the deforestation and land
            fragmentation of the next most impacted zone. Consequently, the CDF
            harbors 44 at-risk ecological communities (98%) and a significant
            number of vulnerable species, including 49 vertebrate animals, 65
            vascular plants, 45 invertebrate animals, 5 lichens, and 3
            bryophytes. Its exceptional floral richness includes 50 species
            unique to the zone. Alarmingly, the CDF has the least protected land
            in BC, with the fewest large protected areas (over 250 ha),
            resulting in only 5% of Garry oak ecosystems remaining intact. The
            CDF consists of a single subzone: the moist maritime subzone
            (CDFmm).
          </p>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 mb-4">
            Distribution
          </h2>
          <p className="font-body-copy">
            The CDF zone covers approximately 350,000 hectares, accounting for
            0.3% of British Columbia's territory. It spans from Eastern
            Vancouver Island (from Race Rocks up to Deep Bay) and the Gulf
            islands, with pockets along the mainland coast in elevations below
            265m. Similar climate and plant communities extend south of the
            border into Washington, Oregon and the San Juan Islands.
          </p>
        </section>

        <section className="flex flex-wrap gap-8 m-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <div className="flex-1 min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4">Climate</h2>
            <p className="font-body-copy">
              The Coastal Douglas-fir biogeoclimatic zone boasts an appealing
              climate characterized by warm, dry summers and mild, wet winters.
              Average temperatures range from 16.9°C in the warmest month to
              3.4°C in the coldest, resulting in an annual mean of 9.8°C.
              Rainfall dominates the precipitation in this zone, accounting for
              approximately 95% of the 955 mm average, lending it an almost
              Mediterranean feel. This distinctive climate is largely shaped by
              two key factors: the moderating influence of the Pacific Ocean and
              the Salish Sea, and the rain shadow effect created by the Insular
              Mountains of the Olympic Peninsula and Vancouver Island.
              Geographically, the CDF zone extends across the southeastern
              quadrant of Vancouver Island, encompasses the Gulf Islands of the
              Salish Sea, and reaches its eastern limit in the southwestern
              Fraser Valley. While present at sea level, its abundance decreases
              with elevation, typically reaching its upper limit around 260
              meters and often disappearing within 150 meters of sea level.
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <img
              src={CDFTemp}
              alt="Climate image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        <section className="flex flex-wrap gap-8 m-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <div className="flex-1 min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4">
              Geology and Soils
            </h2>
            <p className="font-body-copy">
              The bedrock geology consists primarily of undivided sedimentary
              rocks, known as the Nanaimo Group, consisting of conglomerate,
              sandstone, shale, and siltstone. Granodioritic intrusive rocks and
              basaltic volcanic rocks such as pillow breccia also cover parts of
              the CDF zone. Parent material is formed from these rocks to form
              primarily Brunisolic soils, which are characterized by Bm or Btj
              horizons.
            </p>

            <h2 className="font-regular-header text-green-900 mt-8 mb-4">
              Vegetation
            </h2>
            <p className="font-body-copy">
              The Coastal Douglas-fir zone is home to a variety of tree species,
              including Douglas-fir, Western redcedar, red alder, Grand fir, and
              the significant Garry oak. This native oak, known as p'hwulp in
              Hul'quimi'num and cheng'ilhch by other Coast Salish peoples, is
              the only oak species indigenous to British Columbia and favors
              sunny, dry sites like meadows, clearings, and rocky bluffs. These
              Garry oak meadows, found solely within the CDF zone, are
              recognized as one of Canada's most imperiled and biodiverse
              ecosystems, with threats stemming from fire suppression,
              development, and introduced species. Other common species in this
              zone include dull Oregon grape, fawn lily, arbutus, and salal.
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <img
              src={CDFVeg}
              alt="Vegetation image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        <section className="flex flex-col gap-8 m-8 p-8 max-w-screen-lg mx-auto rounded-xl shadow-xl bg-[#C5D6F5]/75">
          <h2 className="font-regular-header text-green-900 text-center ">
            Life in the CDF zone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-screen-lg mx-auto ">
            <div>
              <h3 className="font-subheader-bold text-green-900 mb-4">
                Resource Use
              </h3>
              <p className="font-body-copy">
                The Coastal Douglas-fir one has experienced substantial logging
                since the early 20th century. Forestry operations within the CDF
                are constrained by low summer precipitation, which creates
                significant soil moisture deficits. However, privately held
                smaller sites often demonstrate high timber productivity and are
                managed intensively for forestry. Today, the CDF is under
                considerable pressure from diverse land uses, including
                residential, industrial, and recreational activities.
                Alarmingly, since 2008, another 30% of its second-growth natural
                areas have been lost to these developments. This rapid
                urbanization represents a critical threat to this small and
                poorly protected zone, where 93% is privately owned, only 4% has
                protected status, and a mere 1% constitutes old growth. Adding
                to the complexity, the CDF's coastal location makes it highly
                attractive for recreation, drawing many visitors to its limited
                parklands for hiking, camping, and boating.
              </p>
            </div>
            <div>
              <h3 className="font-subheader-bold text-green-900 mb-4">
                Wildlife
              </h3>
              <p className="font-body-copy">
                The CDF zone's mild, wet winters and warm, dry summers largely
                dictate its animal inhabitants. Receiving the least snowfall of
                any BC zone, the CDF supports a rich and diverse wildlife
                population. Birdlife includes seabirds like ancient murrelets
                and cormorants along the coast, songbirds such as song sparrows
                and yellow-rumped warblers throughout, and larger birds like
                great blue herons and bald eagles. Mammals inhabiting the CDF
                include black-tailed deer (forest edges and grasslands), harbour
                seals and sea lions (coastal waters), North American river
                otters (aquatic burrows), European and Alaska rabbits
                (grasslands and meadows), black bears (forests and shorelines),
                northern raccoons (varied habitats), mink (Pacific Northwest
                coast), red squirrels (coniferous/mixed forests and urban
                areas), and cougars (mountainous forests). Species of concern in
                the CDF include the threatened Western Screech-Owl and
                endangered Little Brown Myotis, along with the Western Toad,
                Common Sharp-tailed Snake, and Northern Red-legged Frog (all
                Special Concern).
              </p>
            </div>
          </div>
          <div className="flex m-auto justify-center items-center w-full">
            <img src={CDFForest} alt="forest" className="rounded-xl" />
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
