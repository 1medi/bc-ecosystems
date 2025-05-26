import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/ms/ms.png"
export default function MSPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Montane Spruce Zone"
          subtitle="Found at mid to high elevations, dominated by Engelmann spruce and subalpine fir"
          heroImage={bgHero}
          description="This transitional forest zone bridges lower interior forests and alpine areas. It’s important for snowpack storage and mountain wildlife."
          stats={[
            { label: "Mean Annual Temp", value: "2°C" },
            { label: "Annual Precipitation", value: "500–900 mm" },
            {
              label: "Dominant Tree",
              value: "Engelmann Spruce & Subalpine Fir",
            },
            { label: "Zone Code", value: "MS" },
          ]}
        />
          <section className="p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">History and Classification</h2>
            <p className="text-base leading-relaxed">
              The MS zone was formally recognized in the mid to late 1970s by the BCMoF Research Branch. It was initially observed as an ecotone between the IDF and ESSF, particularly in the Cariboo Mountains, but was later distinguished due to its unique characteristics. Its ecosystems are now identified in various parts of BC's Central Interior, expanding northward and eastward.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <img src={MSMap} alt="MS zone distribution map" className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      <section className="p-8 max-w-screen-lg mx-auto bg-[#F0EAD6]">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Ecological Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              Common throughout the MS zone are lodgepole pine seral plant communities, often established following wildfire. These forests are crucial for timber supply and are ecologically adapted to frequent disturbance. The zone supports grazing practices, particularly during summer, under lodgepole pine canopy with a pinegrass-dominated understory.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Lodgepole pine forests</li>
              <li>Fire-influenced ecosystems</li>
              <li>Pinegrass understory</li>
              <li>Forestry and grazing land use</li>
              <li>Mountain Pine Beetle impacts</li>
            </ul>
          </div>
          <div>
            {/* <img src={Forestry} alt="Forestry and grazing in MS" className="rounded-lg" /> */}
          </div>
        </div>
      </section>
      </PageWrapper>
    </>
  );
}
