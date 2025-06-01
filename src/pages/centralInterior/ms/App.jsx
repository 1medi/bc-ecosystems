import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/ms/ms.webp";
import LodgepolePine from "../../../assets/ms/lodgepolePine.webp";
export default function MSPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Montane Spruce Zone"
          subtitle="A narrow zone found below ESSF and above IDF or SBPS."
          heroImage={bgHero}
        />
        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <div className="flex flex-col gap-4 ">
            <h2 className="font-regular-header font-bold text-green-900 text-center">
              History and Classification
            </h2>
            <div className="border-b border-4 border-green-950 rounded-xl w-full" />
            <p className="font-body-copy">
              The <strong>Montane Spruce (MS)</strong> Zone, like the Bunchgrass
              (BG) zone, was not part of the original biogeoclimatic zones
              identified by Krajina in 1972. This zone shares characteristics
              with certain subzones of the Interior Douglas-fir (IDF), Engelmann
              Spruce-Subalpine Fir (ESSF), and Sub-Boreal Spruce (SBS) zones and
              is divided into five subzones. Its recognition as a distinct zone
              originated from a British Columbia Ministry of Forests (BCMoF)
              Research Branch project in the mid to late 1970s, during
              biogeoclimatic mapping of the Cariboo Forest Region.
            </p>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg mx-auto bg-[#008080]/25 rounded-xl shadow-xl m-8">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Ecological Characteristics
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="m-auto">
              <p className="font-body-copy p-2">
                Initially observed as a transitional zone, or ecotone, between
                the IDF and the ESSF at higher elevations, the MS zone was
                subsequently recognized for its extensive and distinct presence
                in the moderate terrain of the Cariboo Mountains. It's
                characteristics were deemed sufficiently different from the IDF,
                ESSF, and SBS zones to warrant its classification as a separate
                zone.
              </p>
              <p className="font-body-copy p-2">
                Later, similar ecosystems were identified in other areas of the
                Central Interior of British Columbia, extending to the north and
                east. Lodgepole pine seral plant communities, often resulting
                from fire, are common within this zone, which holds considerable
                importance for forestry. Similar to some areas within the IDF
                zone, the MS zone is also utilized for summer grazing,
                particularly grazing under the cover of lodgepole pine with a
                pinegrass understory. Mountain Pine Beetle has also been a
                significant ecological and economic issue in this zone.
              </p>
            </div>
            <div>
              <figure className="m-auto">
                <img
                  src={LodgepolePine}
                  alt="Lodgepole Pine"
                  className="rounded-lg w-full"
                />
                <figcaption className="font-caption pb-2">
                  A Lodgepole Pine
                </figcaption>
              </figure>
              <ul className="list-disc list-inside font-body-copy space-y-1">
                <h3 className="font-subheader-bold text-green-900">
                  Key Features
                </h3>
                <li>Lodgepole pine forests</li>
                <li>Fire-influenced ecosystems</li>
                <li>Pinegrass understory</li>
                <li>Forestry and grazing land use</li>
                <li>Mountain Pine Beetle impacts</li>
              </ul>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
