import EcosystemPage from "../../../components/ecosystemTemplate";
import SWB from "../../../../src/assets/swb/dempsterHighway.webp";
import PageWrapper from "../../../components/pageWrapper";
import SWB2 from "../../../assets/swb/swb.webp";

export default function SWBPage() {
  return (
    <>
      <PageWrapper>
        <EcosystemPage
          title="Spruce Willow Birch Zone"
          subtitle="A transitional zone between boreal forests and alpine tundra"
          heroImage={SWB}
        />
        <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl drop-shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-center font-regular-header text-green-900">
                Distribution & Climate
              </h2>
              <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
              <p className="font-body-copy p-2">
                The Spruce Willow Birch Zone is a northern, interior, subalpine
                zone in British Columbia, beginning around 57 degrees North
                latitude and extending northward into the Yukon and likely the
                Northwest Territories. It covers approximately 7.8% of British
                Columbia's land area and occurs at elevations ranging from 900
                to 1700 meters.
              </p>
              <p className="font-body-copy p-2">
                This zone is characterized by a cold climate with a long period
                of snow cover, resulting in very short growing seasons, as brief
                as around 40 days near Cassiar. The depth of the snowpack varies
                across the zone, ranging from very shallow in some areas to
                quite deep in others.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={SWB2}
                alt="SWB zone distribution map"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl drop-shadow-xl">
          <h2 className="font-regular-header text-green-900 text-center">
            Ecological Characteristics
          </h2>
          <div className="border-b border-4 border-green-950 my-3 rounded-xl " />
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-base leading-relaxed mb-4">
                The zonal, climax ecosystems of the Spruce Willow Birch Zone are
                defined by open, parkland-like stands of white spruce, sometimes
                with scattered subalpine fir, and a well-developed shrub layer
                composed of willows and scrub birch. Due to poor tree
                productivity, this zone does not support commercial timber
                production. However, it is ecologically significant, providing
                important habitat for a variety of wildlife, including breeding
                birds, numerous ungulate species, and large carnivores such as
                bears and wolves. Additionally, the zone has experienced
                considerable mining exploration, and these sites are generally
                susceptible to disturbance.
              </p>
              <ul className="list-disc list-inside font-body-copy space-y-1">
                <h2 className="font-subheader text-green-900">Key Characteristics</h2>
                <li className="font-bold">Open spruce parklands</li>
                <li className="font-bold">
                  Scrub birch and willow shrub layer
                </li>
                <li className="font-bold">No commercial timber value</li>
                <li className="font-bold">
                  Important breeding and ungulate habitat
                </li>
                <li className="font-bold">Large carnivores: bears, wolves</li>
                <li className="font-bold">
                  Mining exploration and disturbance risk
                </li>
              </ul>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
