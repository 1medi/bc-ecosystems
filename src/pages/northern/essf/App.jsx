import EcosystemPage from "../../../components/ecosystemTemplate";
import ESSF from "../../../assets/videos/essf.mp4";
import PageWrapper from "../../../components/pageWrapper";
import WildlifeTable from "../../../components/tables/essf/habitat";
import ESSFSpecies from "../../../components/charts/essfSpecies";
import ESSFRocks from "../../../components/charts/essfRock";
import ESSFClimate from "../../../assets/otherImages/essfClimate.webp";
import ESSFSubzones from "../../../assets/otherImages/essfSubzones.webp";
export default function ESSFPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Engelmann Spruce–Subalpine Fir Zone"
          subtitle="A high-elevation forested ecosystem characterized by cold, snowy winters"
          heroVideo={ESSF}
        />
        <section className="flex flex-col m-8 p-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">
          <h2 className="text-2xl font-regular-header text-green-900 mb-4">
            Engelmann Spruce Subalpine Fir Zone (ESSF)
          </h2>
          <p className="font-body-copy">
            Spanning approximately 18.6% of British Columbia's landmass, the
            Engelmann Spruce - Subalpine Fir (ESSF) Biogeoclimatic Zone (BEC)
            stands as the province's second largest ecological region. Its
            extensive distribution across rugged, mountainous terrain with steep
            slopes results in a sub-alpine boreal climate characterized by long,
            cold winters and short, cool summers. This seemingly harsh
            environment surprisingly fosters high biodiversity, supporting a
            diverse array of shrubs, herbs, and climax forests dominated by
            Engelmann Spruce (Picea engelmannii) and Subalpine Fir (Abies
            lasiocarpa). Notably, these resilient trees can live for centuries,
            a testament to their adaptation to cold climates. The ESSF zone's
            unique combination of biodiversity, climate, and vast scale makes it
            a compelling area for biological research and a popular destination
            for year-round recreation.
          </p>
        </section>

        <section className="flex flex-col p-8 max-w-screen-lg  m-8 mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">
          <h2 className="text-2xl font-regular-header text-green-900 mb-4 text-center">
            Distribution
          </h2>
          <p className="font-body-copy">
            Globally, spruce-fir forests thrive at high altitudes and latitudes,
            with Engelmann spruce and subalpine fir forming North America's most
            extensive combination. This ESSF zone spans the Rocky Mountains from
            Yukon to New Mexico and the Coast Ranges/Cascades from British
            Columbia to California. As BC's uppermost forested zone, it covers
            about 18.6% (17.6 Mha) of the province, typically found in steep,
            rugged mountainous terrain at subalpine elevations ranging from
            900-2300 m (varying by region). Situated above several other forest
            zones (MS, ICH, SBS, BWBS, CWH) and below alpine zones (BAFA, IMA,
            CMA), the ESSF sweeps across much of BC, from the southeast to the
            far northwest, and is common in the Coast Mountains' rainshadow. It
            is less prevalent or absent in coastal, central, and northern
            regions. This vast distribution, coupled with climatic and
            vegetative variations, results in 19 distinct forested subzones,
            further divided by elevation into forested, woodland, and parkland
            designations. The most extensive subzones are ESSFmv (moist very
            cold) and ESSFwc (wet cold), accounting for 38.0% (6.70 Mha) of the
            ESSF.
          </p>
        </section>

        <section className="flex flex-col flex-wrap gap-8 m-8 p-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-regular-header text-green-900 mb-4 text-center">
              Climate
            </h2>
            <p className="font-body-copy">
              Situated at 1200-2300 m elevation and typically between 49-57
              degrees latitude, the ESSF zone experiences long, cold winters and
              short, cool summers. While climate varies across its extensive
              range, the mean annual temperature generally falls between -2 and
              2 °C, with 5-7 months below freezing and only about two months
              exceeding 10 °C. Mean annual precipitation ranges significantly
              from 400-2200 mm, with December being the wettest and May the
              driest month. A substantial 50-70% of precipitation falls as snow,
              resulting in a winter snowpack of 1-4 m that provides crucial
              water storage for lower elevations during spring and early summer.
              The short snow-free period (as little as 110 days at higher
              elevations and northerly aspects) and potential for year-round
              frost are primary limitations for vegetation growth. Local site
              factors like soil, slope, aspect, and vegetation create important
              microclimates that influence sunlight and water availability,
              further impacting growing conditions often described as "harsh"
              and "severe" at higher elevations.
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <img
              src={ESSFClimate}
              alt="Climate image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 m-8 p-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">
          {/* Left column: Geology and Soils */}
          <div className="flex-1 min-w-[300px] space-y-4">
            <h2 className="text-2xl font-regular-header text-green-900 text-center">
              Geology and Soils
            </h2>
            <p className="font-body-copy">
              The ESSF zone exhibits variable geology, but sedimentary rocks
              constitute the primary bedrock type, making up nearly 60%.
              Volcanic and intrusive rocks are also present. The dominant soil
              in the ESSF zone is Orthic Humo-Ferric Podzol (O.HFP), with Orthic
              Dystric Brunisol (O.DYB) as subdominant. These soils, typical of
              coniferous forests with mor humus, often freeze in winter unless
              insulated by significant snowpack.
              <br />
              <br />
              O.HFPs form in stable, variably humid sites on coarse, acidic
              parent materials like sandy till and colluvium. They are often
              nutrient-poor due to leaching, resulting in reddish-brown
              subsurface horizons. However, productive forests can still occur
              in moister, nutrient-rich pockets within these podzolic soils.
              <br />
              <br />
              O.DYBs are found in younger, less stable, and typically drier,
              less productive areas of the ESSF, sometimes occurring alongside
              podzolic soils in more humid forests.
            </p>
            <ESSFRocks />
          </div>

          {/* Right column: Vegetation */}
          <div className="flex-1 min-w-[300px] space-y-4">
            <h2 className="text-2xl font-regular-header text-green-900 text-center">
              Vegetation in the ESSF
            </h2>
            <p className="font-body-copy">
              The ESSF zone is home to an abundance of diverse organisms that
              all share a resilience for challenging climate. The climatic tree
              species in this zone are Engelmann spruce and subalpine fir, but
              other species such as lodgepole pine, mountain hemlock, whitebark
              pine, and limber pine occur as well. Whitebark pine and limber
              pine are associated with drier subzones of the ESSF and mountain
              hemlock is associated with regions of higher snowfall.
              <br />
              <br />
              Depending on the moisture regime and annual precipitation in the
              subzone, there is great variation within the shrubs and forbs
              present. It is important to note that deciduous trees are uncommon
              in the ESSF.
            </p>
            <ESSFSpecies />
          </div>
        </section>
        <section className="flex flex-col p-8 m-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">
          <h2 className="text-2xl font-regular-header text-green-900 mb-4 text-center">
            Wildlife in the ESSF
          </h2>
          <p className="font-body-copy">
            In addition to the diversity of plant species, there is a variety of
            wildlife species that reside within the ESSF zone. Ungulates such as
            the mountain goat and bighorn sheep take advantage of the tree cover
            that the ESSF treeline provides. These conifer forests within the
            ESSF provide important extreme weather refuge and forage
            opportunities for species like the mountain goat who otherwise spend
            most of their time above treeline. In some ESSF subzones species at
            risk such as the woodland caribou reside and rely on these subalpine
            forests, and the lichens that grow within, to survive. This is not
            an exhaustive list but does show the breadth of species that occur
            in this BEC zone.
          </p>
          <WildlifeTable />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8 p-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl">

          <div>
            <h2 className="text-2xl font-regular-header text-green-900 mb-4 text-center">
              Subzones and Variation
            </h2>
            <p className="font-body-copy">
              The ESSF zone's vast distribution, diverse climate (spanning all
              wetness and temperature codes), and rich biodiversity result in
              significant internal variation. This is reflected in the
              classification of subzones as forested, woodland ('w' suffix), or
              parkland ('p' suffix), totaling 47 distinct units. These
              designations, not variants, indicate differences in timber value,
              canopy closure, and understory vegetation. Initially mapped as
              forested or parkland based on timber operability, a transitional
              'woodland' zone with an open but continuous canopy and
              parkland-like understory was later recognized. Woodland subzone
              mapping is ongoing.
            </p>
          </div>


          <div className="bg-emerald-50 m-auto border border-emerald-700 rounded-md p-4 italic text-emerald-900 shadow-sm h-fit self-start">
            This diagram illustrates the elevational layering of the ESSF zone:
            forested areas lie lowest, followed by woodlands with open canopy,
            then parklands with scattered tree clusters, and finally the alpine
            BAFA zone at the highest elevation.
          </div>

          <div>
            <img
              src={ESSFSubzones}
              alt="Vegetation image"
              className="rounded-lg w-full h-auto"
            />
          </div>


          <div>
            <p className="font-body-copy">
              Woodlands feature an open canopy, while parklands have tree
              clusters interspersed with meadows or heather snowbeds, often with
              stunted (krummholz) trees. Branches of subalpine trees under the
              snow of winter are lush (woodland), while those exposed to winds
              are thin and sparse (parkland). Woodland understories include
              indicators like pink or white mountain-heather, partridge-foot,
              and mountain sagewort, with specific bryophytes like heron’s-bill
              mosses and leafy liverworts. Species distribution also varies:
              black huckleberry is less vigorous in woodlands, while aspen,
              false azalea, and bunchberry may occur on warmer aspects. Forested
              areas contain species like black cottonwood and devil's club,
              absent in woodlands. Forested areas also contain a higher
              abundance of feathermosses.
            </p>
          </div>
        </section>
        <section className="p-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl shadow-xl m-8">
          <h2 className="text-2xl font-regular-header text-green-900 mb-4 text-center">
            Indigenous Peoples and Land Management in the ESSF
          </h2>
          <div className="space-y-6">
            <p className="font-body-copy">
              The Indigenous Peoples of Turtle Island have lived and cared for
              this land since time immemorial. Long before BEC zones existed,
              Indigenous Peoples lived (and continue to live) throughout this
              province in distinct communities, each with diverse sets of
              cultural and societal values. Among these values is the passing
              down of traditional knowledge such as languages and learning to
              live in reciprocity with the natural world. The knowledge keepers
              (also referred to as Elders) who live within these communities are
              often sought after for guidance, wisdom, and teachings.
            </p>

            <p className="font-body-copy">
              Unfortunately, a direct result of the Residential School System
              saw many Indigenous Peoples and their values, such as connection
              to the land, purposefully targeted and eradicated. The colonial
              legacy left behind by this system has resulted in the loss and
              even extinction of many Indigenous practices and continues to
              impact multiple generations of Indigenous Peoples to this day.
            </p>

            <p className="font-body-copy">
              Today, many Indigenous communities are reclaiming their ancestral
              lands, heritages and values and are continuing to persevere.
              Determination, strength, and resiliency are what the Indigenous
              Peoples of this land so beautifully embody. Interestingly, that’s
              also what it takes to survive in the unforgiving ESSF BEC zone,
              given its short summers and harsh winters.
            </p>

            <p className="font-body-copy">
              There is strength and resiliency to be found in the plants and
              animals that live in the ESSF. Many First Nations communities,
              like the Secwepemc (Shuswap) Nation, used whitebark pine roots and
              bark to build canoes while using the seeds as a food source. The
              Secwepemc would also split the roots of the Engelmann spruce and
              sew it into baskets while using the pitch (sap) for skin sores and
              slivers. Known for being flexible, resilient, and strong, the
              alpine larch has been traditionally used for medicinal purposes by
              using its needles, bark, and resin to treat coughs and colds.
            </p>

            <p className="font-body-copy">
              As a resident of the ESSF, the hoary marmot can be heard whistling
              when threats are nearby. As the largest member of the squirrel
              family, this marmot spends its days sunning itself on rocks and
              eating green plants. The Nuxalk (Bella Coola) people greatly
              valued the fur and meat of the hoary marmot for trade, clothing,
              and food. The gray wolf (known to frequent the ESSF in search of
              food and denning opportunities) is known to Indigenous communities
              as a tough, resilient teacher and protector. Oral histories tell
              of wolves teaching Indigenous Peoples how to live on the land,
              hunt, and protect themselves in the wild.
            </p>

            <p className="bg-emerald-50 border-l-4 border-emerald-700 p-4 font-body-copy italic text-emerald-900">
              Living in reciprocity with the land and other living beings is a
              core value for many Indigenous Peoples and this exchange of mutual
              benefit can be found within the ESSF.
            </p>

            <p className="font-body-copy">
              A great example of this is the relationship between the whitebark
              pine and Clark’s nutcracker. These two species need each other to
              survive as the nutcracker relies on the pine seeds for food
              meanwhile the pine relies on the nutcracker to store those seeds
              (sometimes thousands of them), in excess so they spread and
              germinate. We can learn how to better live in relation with the
              land and each other by observing relationships like this one.
            </p>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
