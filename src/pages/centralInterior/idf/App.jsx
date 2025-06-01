import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import BGHero from "../../../assets/videos/idf.mp4";
import IDF1 from "../../../assets/otherImages/idf.webp";
import IDFClimate from "../../../assets/otherImages/idfClimate.webp";
import IDFLand from "../../../assets/otherImages/idfLand.webp";
import IDFVegetation from "../../../assets/otherImages/idfVegetation.webp";
export default function IDFPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Interior Douglas-fir"
          subtitle="A dry forested ecosystem with Douglas-fir dominance."
          heroVideo={BGHero}
        />

        {/* Overview */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Overview
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              The Interior Douglas-fir Biogeoclimatic zone (or the IDF BEC zone)
              is located in the central and southern interior regions of British
              Columbia. The zone is known for its warm dry summers, long growing
              seasons, and brisk winters. This is partly due to its location in
              the rain shadow of the Coast, Cascade and Columbia Mountains.
            </p>
            <p className="font-body-copy p-2">
              The IDF zone is characterized by its dry-belt Douglas fir
              (Pseudotsuga menziesii) dominated ecosystems. Due to its topology,
              soil composition and long history of fire, the IDF zone has also
              developed large grassland communities - often used for domestic
              livestock grazing. Non-forested wetlands are common in the IDF,
              near or following small streams and drainage channels.
            </p>
            <img
              src={IDF1}
              alt="IDF vegetation"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Distribution */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Distribution
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              In British Columbia, the Interior Douglas-fir zone occurs between
              the 49th and 52nd parallels and covers about 5% of the province.
              Its elevation ranges from 130m in the western portion of the range
              to 900m in the northern portion, with upper elevations reaching
              1600m. The IDF zone can be found between other biogeoclimatic
              zones.
            </p>
            <p className="font-body-copy p-2">
              To the north, the zone is surrounded by the Sub-Boreal Pine-Spruce
              and Sub-Boreal Spruce zones. The Bunchgrass zone is found below
              the IDF along the Fraser and Chilcotin rivers. In the coastal
              transition areas, the IDF is found below the Coastal Western
              Hemlock zone. Typically, the IDF zone is found at elevations below
              the Montane Spruce zone and above the Ponderosa Pine zone.
            </p>
          </div>
        </section>

        {/* Climate */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Climate
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              The IDF zone has a continental climate characterized by warm, dry
              summers, a fairly long growing season, and cool winters. The rain
              shadow created by the topographical barriers of the Coast, Cascade
              and Columbia mountains is the main factor affecting the IDF zone’s
              climate. The rain shadow, coupled with other location factors,
              allows for the IDF to have warm, dry, and relatively long growing
              seasons of 3-5 months. During this time the average temperature is
              above 10°C+, but during the winter, for about 2-5 months, the
              temperature is below 0°C.
            </p>
            <p className="font-body-copy p-2">
              Temperature and precipitation both vary depending on subzone; mean
              annual precipitation ranges from 300 to 750mm. However, in the
              wettest areas, precipitation exceeds 1000mm. Across the zone,
              twenty to fifty percent of the precipitation falls as snow.
              Significant growing season moisture deficits are common, and
              frosts can occur at any time.
            </p>
            <img
              src={IDFClimate}
              alt="Climate chart"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Geology and Soils */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 text-center mb-4">
              Geology and Soils
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              Ecosystems in the IDF occur on well to moderately well-drained
              sites on deposits derived from volcanic bedrock. Soils are
              typically orthic or dark gray luvisols, and eutric or dystric
              brunisols. They generally have a medium to rich nutrient status
              because they have developed from parent materials rich in alkaline
              minerals. In addition to the base-rich bedrock, the low rates of
              leaching in the dry climates also helps provide rich nutrients. In
              the IDF grasslands, soils are mainly orthic dark brown chernozems
              at lower elevations and orthic black and dark grey chernozems and
              higher elevations.
            </p>
            <p className="font-body-copy p-2">
              Humus form development usually results in moders, with occasional
              mors and mullmoders. Leptomoders are common on lower elevation
              zonal ecosystems, whereas mormoders and hemimors are more common
              at upper elevations. The mormoders are most prevalent where there
              is a grassy ground cover.
            </p>
          </div>
        </section>

        {/* Life in the IDF */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Life in the IDF zone
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              Due to the relatively short, cool winters and the variable canopy
              closure of the Douglas-fir forests, the IDF zone has a wide range
              of vegetation types that provide habitat for wildlife. In the
              northern parts of the zone, mule deer use old-growth Douglas-fir
              stands for forage. These stands also provide snow interception,
              which is the retention of snow in tree crowns, and a crucial
              factor in mule deer winter survival. In the southern parts of the
              zone, south aspect forests and dry Douglas-fir/ponderosa pine
              forests provide winter habitat for Rocky Mountain elk, mule deer,
              white-tailed deer, and Bighorn Sheep.
            </p>
            <p className="font-body-copy p-2">
              The lower elevation grasslands of the IDF provide habitat for
              smaller mammals such as mice, voles, and ground squirrels. Other
              common species at lower elevations include the badger and the
              great basin pocket mouse. Rocky cliffs and talus provide security
              cover and breeding habitat for the mountain goat, yellow-bellied
              marmot and the common pika.
            </p>
            <p className="font-body-copy p-2">
              A wide variety of birds feed on conifer seeds, bark insects, and
              small mammals. Some of the birds that can be found in this zone
              include the Pileated Woodpecker, Northern Flicker, Clark’s
              Nutcracker, Red Cross-bill and the rare blue-listed Flammulated
              Owl which nests in old ponderosa pine and Douglas-fir trees.
              Non-migratory passerine birds descend from higher elevations to
              form mixed species flocks during the winter months.
            </p>
            <p className="font-body-copy p-2">
              Larger lakes and marshes are important staging and breeding areas
              for a great variety of waterbirds. Small lakes and potholes also
              serve as breeding grounds for various dabbling and diving ducks
              such as Northern Pintail, American Wigeon, Mallard, Blue-winged
              Teal, Lesser Scaup, and American Coot, as well as for the Painted
              Turtle.
            </p>
            <p className="font-body-copy p-2">
              Wetland meadows and shady draws provide habitat for the Western
              Terrestrial Garter Snake, Northern Leopard Frog, and the Tiger
              Salamander. The Western Rattlesnake and Great Basin Spadefoot toad
              can also be found.
            </p>
          </div>
        </section>

        {/* Vegetation */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Vegetation
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <div className="flex flex-col md:flex-row p-2">
              <div className="p-2 md:w-1/2 ">
                <p className="font-body-copy p-2">
                  Douglas fir is the most common species in this zone,
                  comprising over fifty percent of all other species. The thick
                  bark of mature Douglas fir trees can withstand frequent ground
                  fires, which clear the forests in the IDF but leave the larger
                  trees standing. Mixed stands with lodgepole pine and ponderosa
                  pine indicate the historical presence of crown fires.
                  Kinnikinnik and Soopolallie are found along the understory.
                </p>
                <p className="font-body-copy p-2">
                  In wetter sites across the IDF, trembling aspen is a common
                  minor species. It is most frequently found in the northern
                  zones of IDFdk, dw, and xm and in the southern subzone of
                  IDFdm. Engelmann or hybrid spruce is found in high elevations
                  on the wetter, cooler transitional sites to the Montane Spruce
                  zone.
                </p>
              </div>

              <div className="p-2 md:w-1/2 ">
                <p className="font-body-copy p-2">
                  Edaphic and topographic conditions, as well as fire history,
                  has led to the development of large grassland communities in
                  parts of the IDF zone. These grasslands have been further
                  modified by the grazing of domestic livestock and influenced
                  by fire suppression. Ponderosa pine can be found in these
                  areas in scattered, open composition, along with bunchgrass
                  species such as Bluebunch Wheatgrass.
                </p>
                <p className="font-body-copy p-2">
                  Non-forested wetlands are also common in the IDF. Species
                  found in these wetlands include cattail and great bulrush
                  marshes in shallow depressions and around open water. Tall
                  willow swamps also follow small streams and drainage channels.
                  Fens are peatlands with nutrient-rich waters derived in part
                  from groundwater and runoff from adjacent mineral uplands. In
                  the IDF there are sedge-dominated fens with canopies of
                  shrubby willows. Saline meadow wetlands can also be found in
                  the IDF.
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto flex justify-center items-center">
            <img
              src={IDFVegetation}
              alt="IDF vegetation"
              className="rounded-xl max-w-full"
            />
          </div>
        </section>

        {/* Resource Use */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Resource Use
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              In the IDF zone, resource value is placed on forestry,
              agriculture, and recreation tourism. In the past, sawlog and
              pulpwood production was prevalent in the area, but now a shift
              towards protecting the planted trees can be seen. Timber
              harvesting is still prevalent in the area however, with the IDF
              zone comprising 25% of the Timber Harvesting Land Base in Williams
              Lake Timber Supply Area (TSA) and 50% in the 100 Mile House TSA.
            </p>
            <p className="font-body-copy p-2">
              The IDF zone’s primary agricultural use is cattle grazing as the
              zone provides forested and grassland ranges for cattle to roam. In
              the southern regions of the zone, vineyards and orchards are
              common. During the summer in the Okanagan valley, temperatures can
              reach 40 degrees celsius during the day, but cool nights allow for
              the grapes to maintain their natural acidity. This makes wines
              coming from the IDF zone unique.
            </p>
            <p className="font-body-copy p-2">
              The IDF zone has a variety of topographical features that make
              outdoor recreation desirable. Thousands of tourists visit the IDF
              zone in the winter for activities like downhill skiing, cross
              country skiing, and snowmobiling. In the summer the IDF zone is
              popular for camping, hiking, and mountain biking. Hunting and
              fishing in the IDF zone is extremely popular. Many lakes and
              rivers make the zone a great location for fishing rainbow trout
              and sockeye salmon. Rocky Mountain mule deer, white-tailed deer,
              and Rocky Mountain elk are some of the most common species hunted
              in the IDF zone.
            </p>
          </div>
        </section>

        {/* Indigenous Communities and Land Management  */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Indigenous Communities and Land Management{" "}
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy pb-2">
              There are many Indigenous Communities that call the IDF region
              home. The Okanagan region, making up a large portion of the IDF
              zone, is on the unceded and traditional territory of the Okanagan
              Nation. The 8 major communities of the Okanagan Nation Include:
              Okanagan Indian Band, Upper Nicola Band, Westbank First Nation,
              Penticton Indian Band, Osoyoos Indian Band, the Upper and Lower
              Similkameen Indian Bands, and The Colville Confederated Tribes.
              Numerous other Indigenous Communities exist outside of the
              Okanagan region, but still within areas of IDF designation such
              as: Yale First Nation, Spuzzum First Nation, Boston Bar First
              Nation, Boothroyd Indian Band, Siska First Nation and the Skuppah
              First Nation.
            </p>
            <p className="font-body-copy pb-2">
              Wildfires in B.C. can be described using the “natural disturbance
              types” system. This system describes the level and frequency of
              natural disturbances across different BEC zones. As an example,
              the IDF zone is predominantly NDT4. NDT4 zones see a variety of
              fire regimes. Surface fire return intervals range from 4-50 years
              and would help to maintain the landscape. At the same time, larger
              stand-initiating crown fires could return less frequently.
              However, this system is based on disturbance patterns
              pre-colonization and without human intervention. Climate change
              and a century of fire exclusion (removing fire from the landscape)
              has created more intense fires throughout this BEC zone.
            </p>
            <img
              src={IDFLand}
              alt="IDF vegetation"
              className="rounded-lg w-full h-auto"
            />
            <p className="font-body-copy pt-2">
              Cultural burning is one way to bring back fire onto the landscape
              and reduce wildfire risk. Prior to the bushfire act of 1874 some
              Indigenous communities within the IDF regularly burned the
              landscape through controlled methods to reduce fire risk, improve
              biodiversity, cultivate foods and medicines, improve hunting
              conditions, and to practice spirituality and culture amongst other
              things. Unfortunately, the bushfire act made the cultural use of
              fire illegal for over a century. Present day, some First Nations
              communities are reintroducing the use of cultural burning back
              onto the landscape for these same reasons.
            </p>
          </div>
        </section>

        {/* Subzones and Variants */}
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="min-w-[300px]">
            <h2 className="font-regular-header text-green-900 mb-4 text-center">
              Subzones and Variants
            </h2>
            <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
            <p className="font-body-copy p-2">
              The IDF landscape ranges from open forest with grassy ground
              cover, to a closed forest with shrubs and mixed forb-grass-moss
              ground cover. Seven subzones cover this variable landscape.
            </p>
            <p className="font-body-copy p-2">
              The three very dry subzones commonly include ponderosa pine, but
              lack lodgepole pine, twinflower, falsebox, and prince’s pine
              species. These very dry subzones occupy the major valleys of the
              southern Interior Plateau. The IDFxh occurs in the lower
              elevations of the Okanagan valley south of Enderby, along the
              Similkameen valley, the North and South Thompson rivers, and in
              the Fraser River valley in the Lytton-Lillooet area. The IDFxw
              occupies lower elevations of major valleys in the Clinton-Cache
              Creek area and midslopes of the Fraser River valley west of
              Clinton. The IDFxm occupies lower elevations of the Chilcotin and
              Fraser river valleys from south of Alexandria to west of Clinton.
            </p>
            <p className="font-body-copy p-2">
              The dry IDF subzones occur at moderate elevations on the lee side
              of the Coast, Cascade, and Purcell mountains. The modal IDFdk
              subzone occupies lower to middle elevations of the southern
              Interior Plateau in the lee of the Coast and Cascade Mountains,
              extending east from the Tatla Lake area to north of Williams Lake
              and southeast of Princeton. The IDFdm occurs in the Okanagan
              Highlands and along the Kettle River drainage, north of Grand
              Forks, and in the valley bottoms and on lower slopes of the Rocky
              Mountain Trench and its major tributaries south of the Blaeberry
              River. This subzone is distinguished by the presence of western
              larch.
            </p>
            <p className="font-body-copy p-2">
              The two moist and wet subzones include western redcedar, paper
              birch, and pinegrass cover, but do not include kinnikinnick. The
              moister IDFmw occurs in a narrow band from east of Peachland to
              Salmon Arm, and then northwest to the North Thompson River and its
              tributaries near Clearwater. The less moist IDFww subzone occurs
              on the lee side of the Coast Mountains along the eastern end of
              the Klinaklini and Atnarko river valleys, along the Lillooet River
              valley east of Pemberton, as well as in the Fraser River valley
              around Boston Bar.
            </p>
            <p className="font-body-copy p-2">
              Four typical site associations include: hybrid spruce, Douglas
              fir, gooseberry and feathermoss; Douglas fir, lodgepole pine,
              pinegrass and feathermoss; Douglas fir, pinegrass and yarrow; and
              Douglas fir, snowberry and bluebunch wheatgrass.
            </p>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
