import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/videos/bg.mp4";
import BGclimate from "../../../assets/bg/bgClimate.webp";
import BGspecies from "../../../assets/bg/bgSpecies.webp";
import BGindigenous from "../../../assets/bg/bgIndigenous.webp";
export default function BGPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Bunchgrass Zone"
        subtitle="A dry, rare grassland ecosystem home to unique wildlife, cryptogamic crusts, and limited forest cover"
        heroVideo={bgHero}
        description="Covering less than 1% of BC, the Bunchgrass (BG) zone features bunchgrass-dominated ecosystems, rare flora and fauna, and a climate prone to summer drought. It's ecologically vital and underrepresented in protected areas."
        stats={[
          { label: "Mean Annual Temp", value: "5.9°C" },
          { label: "Annual Precipitation", value: "337 mm" },
          { label: "Dominant Plant", value: "Bluebunch Wheatgrass" },
          { label: "Zone Code", value: "BG" },
        ]}
      />

      {/* Overview */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">Overview</h2>
        <p className="font-body-copy">
          Covering less than 1% of BC, the Bunchgrass (BG) zone supports rich
          ecosystems and diverse, often rare, flora and fauna. The BG zone is
          one of the few biogeoclimatic zones that is not forested. Known for
          abundant its bunchgrass and frequent summer droughts due to low
          precipitation, climax communities are typically 10-15% shrubs, 60%
          bunchgrass, and 25-35% cryptograms.The cryptogamic crust is a thin
          layer of low lying mosses, lichens, algae, and bacteria that helps
          bind the soil and prevents erosion. Major threats include overgrazing
          and invasive plants like knapweed and cheatgrass, which outcompete
          natives. Overgrazing also damages the vital cryptogamic crust that
          protects the soil and inhibits weed invasion. Interestingly, the BG
          zone may expand with climate change-induced decline in adjacent
          forests. Its dry, mild, low-elevation climate and productive
          agricultural land make it a highly populated and developed area in
          BC's interior. Similar to the Coastal Douglas-fir zone, the BG zone
          has minimal representation in protected areas, with only 10% currently
          under protection. Recently, the Nature Conservancy of Canada has
          created the Bunchgrass Hills Conservation Area:
          https://youtu.be/Wa-eLyiUNEc
        </p>
      </section>

      {/* Distribution */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">
          Distribution
        </h2>
        <p className="font-body-copy">
          One of the smallest BEC zones, the Bunchgrass zone is located in the
          Central and Southern Interior areas, primarily in major southern
          interior valleys from valley bottoms up to 700-1000 meters elevation.
          Typically below the Ponderosa Pine (PP) zone and often transitioning
          into the Interior Douglas-Fir (IDF) zone, it's limited to continental
          regions, notably the Okanagan, Similkameen, Thompson, Nicola, and
          middle Fraser/lower Chilcotin River Valleys. These narrow bands of
          land center on the Okanagan (Summerland south), Thompson (Kamloops to
          Spences Bridge), Nicola, and Fraser/Chilcotin (south of Riske Creek to
          north of Lillooet) river valleys, extending up to approximately 900
          meters on valley slopes.
        </p>
      </section>

      {/* Climate */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">Climate</h2>
        <p className="font-body-copy">
          The arid Bunchgrass Zone experiences low precipitation and snowfall
          due to the rainshadow effect of the Coast Mountains, which forces
          moisture out of westward-moving air. This effect is strongest in
          deeper river valleys, where temperatures also increase with lower
          elevation. Summers are warm to hot, while winters are cold. The mean
          annual temperature is 5.9°C, with the average warmest month at 17.4°C
          and coldest at -6.7°C. Most precipitation falls in December and
          January, with a smaller peak in June. Vegetation relies on winter
          moisture due to low soil moisture, leading to common summer droughts.
          March and April are typically the driest months. The mean annual
          precipitation is low at 337 mm, limiting tree growth and favoring
          graminoid vegetation.
        </p>
        <img
          src={BGclimate}
          alt="BG Climate Graph"
          className="w-full m-auto mt-4 rounded-xl"
        />
      </section>

      {/* Vegetation */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-6">Vegetation</h2>

        <div className="space-y-4">
          <p className="font-body-copy">
            The Bunchgrass (BG) zone is named for its native bunchgrasses, like
            the widely spaced bluebunch wheatgrass, accompanied by other common
            grasses such as needle-and-thread grass, junegrass, and Sandberg's
            bluegrass.
          </p>

          <p className="font-body-copy">
            Characterized by few to no trees, the dominant vegetation also
            includes big sagebrush and rabbitbrush, while fescue species often
            dominate steep north and east aspects.
          </p>

          <p className="font-body-copy">
            Ponderosa pine and Douglas-fir can be found on poor, coarse soils
            and in sheltered ravines. Overgrazing leads to an increase in less
            palatable species like prickly pear cactus, low pussytoes,
            needle-and-thread grass, and pasture sage.
          </p>

          <p className="font-body-copy">
            Maintaining the crucial cryptogamic crust, composed of mosses,
            lichens, algae, and bacteria found between plant clumps, is vital
            for preventing soil erosion, regulating soil temperature and
            moisture, and limiting the establishment of weeds.
          </p>

          <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg my-6">
            <img
              src={BGspecies}
              alt="BG zone species composition"
              className="w-full h-auto"
            />
          </div>

          <p className="font-body-copy">
            While trees aren’t abundant in the Bunchgrass Zone, there are some
            present. Above is a breakdown of the tree species composition in the
            Bunchgrass Zone.
          </p>

          <p className="font-body-copy">
            The BG zone has two subzones: <strong>BGxh</strong> (very dry, hot)
            and <strong>BGxw</strong> (very dry, warm).
          </p>

          <p className="font-body-copy">
            The <strong>BGxh</strong> or lower grassland occupies the valley
            bottoms up to around 700 m elevation. It's the hotter and drier of
            the two, resulting in fragile ecosystems with low plant productivity
            and limited soil development. Key plant species include widely
            spaced clumps of <em>Agropyron spicatum</em> (bluebunch wheatgrass),{" "}
            <em>Artemisia tridentata</em> (big sagebrush), and numerous soil
            surface lichens. The soils are typically silty clay loam to sandy
            loam, classified as Brown Chernozems or Regosols, and have developed
            from fluvial (river) or lacustrine (lake) deposits.
          </p>

          <p className="font-body-copy">
            The <strong>BGxw</strong> or middle grassland is found above the
            BGxh, between approximately 700 and 1000 m elevation. A defining
            characteristic is the absence of big sagebrush. With a somewhat
            cooler and moister climate, the bluebunch wheatgrass is more densely
            distributed compared to the BGxh. There's a slightly higher
            diversity of forbs but a lower diversity of lichens. The soils in
            this subzone are more developed Dark Brown Chernozems, originating
            predominantly from compacted gravelly tills (unsorted glacial
            sediment containing gravel).
          </p>
        </div>
      </section>

      {/* Soils */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">Soils</h2>
        <p className="font-body-copy">
          The fertile soils of the Bunchgrass Zone are deeply influenced by the
          dominant graminoid vegetation. The extensive root systems of these
          grasses decompose over time, enriching the soil with organic matter
          and creating the characteristic deep, rich, dark brown to black
          colors. These dark upper layers are known as Ah horizons and are the
          defining feature of the Chernozemic soil order found in this zone. The
          humus forms present are typically Mulls, which are actively processed
          by soil fauna such as earthworms, contributing to soil structure and
          nutrient cycling. Importantly, these soils represent a significant
          reservoir of stored carbon due to the long history of grass growth and
          decomposition, making their preservation and restoration valuable
          strategies in climate change mitigation efforts. Example of a
          Chernozemic soil: https://monoliths.soilweb.ca/2-06/
        </p>
      </section>

      {/* Wildlife */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">
          Life in the BG Zone
        </h2>
        <h3 className="font-subheader-bold text-green-800 mb-2">Wildlife</h3>
        <p className="font-body-copy">
          Despite its small size, the Bunchgrass zone boasts tremendous wildlife
          diversity and density due to varied habitats (grasslands, shrubsteppe,
          riparian, forest) and its location bridging southern and northern
          species. The BG zone is home to more than 30% of the BC’s species at
          risk. Many BG wildlife species are provincially or nationally
          significant, with several rarities restricted to the southern Okanagan
          such as the Great Basin Pocket Mouse, Pallid Bat, and Burrowing Owl.
          The Burrowing Owl was extirpated from BC in 1980 but the Burrowing Owl
          Conservation Society of BC has been working to breed and release
          Burrowing Owls back into the wild. Through their efforts, they hope to
          re-establish a stable population of Burrowing Owls in BC. Grassland
          ecosystems support elk, bighorn sheep, and numerous smaller fauna, but
          are threatened by overgrazing of cattle and habitat loss to
          agriculture and development, leading to many at-risk species.
          Shrubsteppe wildlife is similar to grasslands. Rocky cliffs and talus
          are crucial breeding habitats for at-risk species like Spotted Bat,
          Pallid Bat, and Canyon Wren. The Spotted Bat is considered one of the
          rarest North American bats. The Pallid Bat is considered one of the
          rarest mammals in BC and is the second-largest bat species in the
          province. Small pockets of trees within the BG zone create distinct,
          productive habitats for species like White-headed Woodpecker and
          Yellow-pine Chipmunk. Riparian woodlands also support rich fauna,
          including Wood Duck and Western Skink. Lakes and streams, often
          ice-free early, are vital spring staging areas for waterfowl, with
          bulrushes and cattails providing habitat for Marsh Wren and Muskrat.
        </p>
      </section>

      {/* Resource Use */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-4">
          Resource Use
        </h2>
        <p className="font-body-copy">
          The Bunchgrass Zone's primary resource use is cattle grazing, though
          overgrazing can harm vegetation and promote weeds. Grasslands are
          critical to the livestock industry and the BG zone is used for early
          spring, late fall, and winter livestock range. The desirable climate
          in the zone makes it a highly populated and developed area, with much
          of the land in either urban or agricultural use. High agricultural
          capability allows for orchards, vineyards, and alfalfa with
          irrigation. The warm, dry climate and water bodies support popular
          water sports, wildlife viewing, and hiking.
        </p>
      </section>

      {/* Indigenous Communities */}
      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#6B5B95]/40 rounded-xl shadow-xl">
        <h2 className="font-regular-header text-green-900 mb-6">
          Indigenous Communities and Land Management
        </h2>
        <div className="space-y-4">
          <p className="font-body-copy">
            Many different Indigenous Peoples inhabit and take care of the land
            within the Bunchgrass zone. One example is the Nlaka’pamux people,
            whose traditional territory extends across Southern BC and into the
            US.
          </p>
          <p className="font-body-copy italic">
            In the words of the Nlaka’pamux Nation Tribal Council (NNTC) “Our
            homeland is a gift from the Creator, passed to us from our ancestors
            and held by us in trust for our children and future generations.
            What defines us is not a line on a map but a way of life, a shared
            culture and a communal responsibility to future generations. As
            Indigenous peoples we are inherently connected to the land. Our
            physical, intellectual, emotional and spiritual well-being depends
            upon that connection. Nlaka’pamux identity extends beyond the
            Canadian border.”
          </p>
          <p className="font-body-copy">
            An important medicinal plant to the Nlaka’pamux people is Yarrow
            (Achillea millefolium). In the Nlaka’pamux language, Yarrow is known
            as qʷoqʷm’xn-ún’peʔ which translates to little chipmunk-tail. Yarrow
            is an important medicinal plant globally, as this plant has a
            circumpolar distribution. It's one of the most widely used medicinal
            plants in the world and is considered a panacea since it is
            effective at treating so many different ailments. For example, the
            Nlaka’pamux people boiled the entire plant to make an infusion that
            was used to treat sore eyes, chapped hands, pimples, skin rashes,
            insect bites, snakebites, diarrhea and stomach cramps. They also
            infused into the bath for sick people or those suffering from
            rheumatism. Chewing a leaf was a treatment for toothaches. They
            burned as a smudge to repel mosquitos. These are only a few of the
            uses of this amazingly potent medicinal plant. Want to learn more
            about Yarrow and the Nlaka’pamux people? Check out{" "}
            <a
              className="underline text-blue-600"
              href="https://www.mqup.ca/ancient-pathways--ancestral-knowledge-products-9780773543805.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ancient Pathways, Ancestral Knowledge
            </a>{" "}
            by Nancy Turner.
          </p>

          <img
            src={BGindigenous}
            alt="BG indigenous graphic"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
