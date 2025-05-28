import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import bgHero from "../../../assets/sbps/sbps.png";
import Chilcotin from "../../../assets/sbps/chilcotinAmpitheatre.jpg";
export default function SBPSPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Sub-Boreal Pine Spruce Zone"
          subtitle="A dry, cool interior forest dominated by lodgepole pine and hybrid white spruce"
          heroImage={bgHero}
        />
        <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#E6E1DA] rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="font-regular-header text-green-900 mb-4">
                Distribution & Landscape
              </h2>
              <p className="font-body-copy">
                The Sub-boreal Pine-Spruce (SBPS) biogeoclimatic zone is
                situated in the west-central interior of British Columbia,
                specifically in the Chilcotin region. This zone was established
                based on Forest Service classification work conducted in the
                Cariboo Forest Region during the mid-1970s. It encompasses
                portions of Krajina's former Cariboo Aspen-Lodgepole
                Pine-Douglas Fir zone, as well as previous areas classified
                within the Sub-boreal Spruce (SBS) zone. The SBPS is
                characterized by extreme cold during the winter months due to
                cold air drainage and is comparatively colder and drier than the
                adjacent SBS zone. It is further divided into four subzones:
                SBPSxc, SBPSdc, SBPSmk, and SBPSmc.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={Chilcotin}
                alt="chilcotin ampitheatre"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="p-8 max-w-screen-lg m-auto rounded-xl bg-[#E6E1DA] shadow-xl mb-8 ">
          <h2 className="font-regular-header text-green-900 text-center mb-6">
            Ecological Characteristics
          </h2>
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-body-copy mb-4">
                The landscape of the SBPS is a mosaic of forest patches
                interspersed with "wild hay meadows," which are essentially
                fens. The zonal plant community is classified as the White
                Spruce-Scrub Birch-Feathermoss Site Association. The terrain is
                mostly rolling, with morainal and organic parent materials being
                common. Luvisolic and Brunisolic soils with mor humus forms are
                prevalent in this zone. While forest productivity is relatively
                low, the SBPS has been utilized for lodgepole pine timber
                harvesting. Other significant resources within the zone include
                ranching, providing areas for summer grazing and haying, as well
                as supporting furbearer and other wildlife populations.
              </p>
              <ul className="font-body-copy list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Cold air drainage → extreme winter cold</li>
                <li>Patchy lodgepole pine forests</li>
                <li>“Wild hay meadows” (fens)</li>
                <li>Scrub birch and feathermoss understory</li>
                <li>Low forest productivity</li>
                <li>Grazing, haying, furbearer habitat</li>
              </ul>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
