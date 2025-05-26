import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";

export default function IDFPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Interior Douglas-fir"
          subtitle="A dry forested ecosystem with Douglas-fir dominance"
          description="Found in valleys and low-elevation slopes, this zone is known for its dry conditions, grassy understories, and fire-adapted species."
          stats={[
            { label: "Mean Annual Temp", value: "7°C" },
            { label: "Annual Precipitation", value: "300–800 mm" },
            { label: "Dominant Tree", value: "Douglas-fir" },
            { label: "Zone Code", value: "IDF" },
          ]}
        />

        {/* Overview */}
        <section className="p-4 max-w-screen-lg mx-auto mb-12">
          <div className="min-w-[300px]">
            <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Overview</h2>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              The Interior Douglas-fir Biogeoclimatic zone (or the IDF BEC zone) is located in the central and southern interior regions of British Columbia. The zone is known for its warm dry summers, long growing seasons, and brisk winters. This is partly due to its location in the rain shadow of the Coast, Cascade and Columbia Mountains.
              <br /><br />
              The IDF zone is characterized by its dry-belt Douglas fir (Pseudotsuga menziesii) dominated ecosystems. Due to its topology, soil composition and long history of fire, the IDF zone has also developed large grassland communities - often used for domestic livestock grazing. Non-forested wetlands are common in the IDF, near or following small streams and drainage channels.
            </p>
            <img src="idf.png" alt="IDF vegetation" className="rounded-lg w-full h-auto" />
          </div>
        </section>

        {/* Distribution */}
        <section className="p-4 max-w-screen-lg mx-auto mb-12">
          <div className="min-w-[300px]">
            <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Distribution</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              In British Columbia, the Interior Douglas-fir zone occurs between the 49th and 52nd parallels and covers about 5% of the province. Its elevation ranges from 130m in the western portion of the range to 900m in the northern portion, with upper elevations reaching 1600m. The IDF zone can be found between other biogeoclimatic zones. To the north, the zone is surrounded by the Sub-Boreal Pine-Spruce and Sub-Boreal Spruce zones. The Bunchgrass zone is found below the IDF along the Fraser and Chilcotin rivers. In the coastal transition areas, the IDF is found below the Coastal Western Hemlock zone. Typically, the IDF zone is found at elevations below the Montane Spruce zone and above the Ponderosa Pine zone.
            </p>
          </div>
        </section>

        {/* Climate */}
        <section className="p-4 max-w-screen-lg mx-auto mb-12">
          <div className="min-w-[300px]">
            <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Climate</h2>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              The IDF zone has a continental climate characterized by warm, dry summers, a fairly long growing season, and cool winters. The rain shadow created by the topographical barriers of the Coast, Cascade and Columbia mountains is the main factor affecting the IDF zone’s climate. The rain shadow, coupled with other location factors, allows for the IDF to have warm, dry, and relatively long growing seasons of 3-5 months. During this time the average temperature is above 10°C+, but during the winter, for about 2-5 months, the temperature is below 0°C. Temperature and precipitation both vary depending on subzone; mean annual precipitation ranges from 300 to 750mm. However, in the wettest areas, precipitation exceeds 1000mm. Across the zone, twenty to fifty percent of the precipitation falls as snow. Significant growing season moisture deficits are common, and frosts can occur at any time.
            </p>
            <img src="idf-climate.png" alt="Climate chart" className="rounded-lg w-full h-auto" />
          </div>
        </section>

        {/* Geology and Soils */}
        <section className="p-4 max-w-screen-lg mx-auto mb-12">
          <div className="min-w-[300px]">
            <h2 className="text-2xl font-bold text-green-900 text-center mb-4">Geology and Soils</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Ecosystems in the IDF occur on well to moderately well-drained sites on deposits derived from volcanic bedrock. Soils are typically orthic or dark gray luvisols, and eutric or dystric brunisols. They generally have a medium to rich nutrient status because they have developed from parent materials rich in alkaline minerals. In addition to the base-rich bedrock, the low rates of leaching in the dry climates also helps provide rich nutrients. In the IDF grasslands, soils are mainly orthic dark brown chernozems at lower elevations and orthic black and dark grey chernozems and higher elevations.
              <br /><br />
              Humus form development usually results in moders, with occasional mors and mullmoders. Leptomoders are common on lower elevation zonal ecosystems, whereas mormoders and hemimors are more common at upper elevations. The mormoders are most prevalent where there is a grassy ground cover.
            </p>
          </div>
        </section>

        {/* Life in the IDF */}
        <section className="p-4 max-w-screen-lg mx-auto mb-12">
          <div className="min-w-[300px]">
            <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Life in the IDF zone</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Due to the relatively short, cool winters and the variable canopy closure of the Douglas-fir forests, the IDF zone has a wide range of vegetation types that provide habitat for wildlife. In the northern parts of the zone, mule deer use old-growth Douglas-fir stands for forage. These stands also provide snow interception, which is the retention of snow in tree crowns, and a crucial factor in mule deer winter survival. In the southern parts of the zone, south aspect forests and dry Douglas-fir/ponderosa pine forests provide winter habitat for Rocky Mountain elk, mule deer, white-tailed deer, and Bighorn Sheep.
              <br /><br />
              The lower elevation grasslands of the IDF provide habitat for smaller mammals such as mice, voles, and ground squirrels. Other common species at lower elevations include the badger and the great basin pocket mouse. Rocky cliffs and talus provide security cover and breeding habitat for the mountain goat, yellow-bellied marmot and the common pika.
              <br /><br />
              A wide variety of birds feed on conifer seeds, bark insects, and small mammals. Some of the birds that can be found in this zone include the Pileated Woodpecker, Northern Flicker, Clark’s Nutcracker, Red Cross-bill and the rare blue-listed Flammulated Owl which nests in old ponderosa pine and Douglas-fir trees. Non-migratory passerine birds descend from higher elevations to form mixed species flocks during the winter months.
              <br /><br />
              Larger lakes and marshes are important staging and breeding areas for a great variety of waterbirds. Small lakes and potholes also serve as breeding grounds for various dabbling and diving ducks such as Northern Pintail, American Wigeon, Mallard, Blue-winged Teal, Lesser Scaup, and American Coot, as well as for the Painted Turtle.
              <br /><br />
              Wetland meadows and shady draws provide habitat for the Western Terrestrial Garter Snake, Northern Leopard Frog, and the Tiger Salamander. The Western Rattlesnake and Great Basin Spadefoot toad can also be found.
            </p>
          </div>
        </section>

        {/* Remaining sections already use p-4 or were covered above */}
      </PageWrapper>
    </>
  );
}
