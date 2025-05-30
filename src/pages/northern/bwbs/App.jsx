import EcosystemPage from "../../../components/ecosystemTemplate";
import PageWrapper from "../../../components/pageWrapper";
import BWBSHero from "../../../assets/bwbs/bwbsHero.webp";
import BWBSLandscape1 from "../../../assets/bwbs/bwbsLandscape1.webp";
import Slideshow from "../../../components/slideshow";
import BWBSLandscape2 from "../../../assets/bwbs/bwbsLandscape2.webp";
import BWBSSpruce from "../../../assets/bwbs/bwbsSpruce.webp";
import BWBSTrees from "../../../assets/bwbs/bwbsTrees1.webp";

const slides = [
  {
    image: (
      <img
        src={BWBSLandscape2}
        className="w-full h-full object-cover rounded-xl"
        alt="Slide 1"
      />
    ),
    description:
      "Boreal White and Black Spruce forests are found in the Northern Interior of BC.",
  },
  {
    image: (
      <img
        src={BWBSSpruce}
        className="w-full h-full object-cover rounded-xl"
        alt="Slide 2"
      />
    ),
    description:
      "These forests support a wide range of wildlife and are vital to the ecosystem.",
  },
  {
    image: (
      <img
        src={BWBSTrees}
        className="w-full h-full object-cover rounded-xl"
        alt="Slide 2"
      />
    ),
    description:
      "These forests support a wide range of wildlife and are vital to the ecosystem.",
  },
];

export default function BWBSPage() {
  return (
    <PageWrapper>
      <EcosystemPage
        title="Boreal White and Black Spruce Zone"
        subtitle="Part of the vast boreal forest that spans across northern continents, characterized by cool, moist conditions and spruce-dominated forests."
        heroImage={BWBSHero}
      />

      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl drop-shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold font-regular-header text-green-900 mb-4">
              Overview and Geography
            </h2>
            <p className="font-body-copy">
              The Boreal White and Black Spruce Zone in British Columbia
              represents a significant portion of the broader boreal forest that
              stretches across North America and into northern Europe and Asia.
              Characterized by a cool and moist climate, this zone experiences
              the lowest precipitation levels among the northern subzones, with
              35 to 55% of the mean annual precipitation falling as snow.
              Geographically, it occupies a large part of northeastern British
              Columbia's northern Great Plains and extends into the lower
              elevation valleys of the more mountainous regions to the west.
              This zone is further divided into four subzones.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={BWBSLandscape1}
              alt="BWBS zone map"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="p-8 m-8 max-w-screen-lg mx-auto bg-[#556B2F]/15 rounded-xl drop-shadow-xl">
        <h2 className="text-2xl font-bold font-regular-header text-green-900 text-center mb-6">
          Ecological Characteristics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-body-copy mb-4">
              The climax, or zonal, ecosystems within this boreal zone are
              typically dominated by black and white spruce, accompanied by
              heath shrubs and feather mosses such as{" "}
              <i>Hylocomnium splendens</i> and
              <i> Pleurozium schreberi</i>. These ecosystems often develop on
              Humo-Ferric Podzol soils, although Luvisolic soils, specifically
              Orthic Gray and Brunisolic Gray Luvisols, are more prevalent in
              the Great Plains region.
              <br />
              <br />
              Fire plays a significant role as a disturbance factor in this
              zone. Historically, particularly in the Peace River country, many
              fires were human-caused, but in more recent times, lightning is
              considered the primary ignition source. Notably, especially within
              the Peace River area of the Great Plains, seral forest ecosystems
              are frequently dominated by trembling aspen, featuring a diverse
              understory of forbs and shrubs.
            </p>
            <ul className="list-disc list-inside text-sm font-body-copy text-gray-700 space-y-1">
              <li className="font-bold">Spruce-dominated climax forests</li>
              <li className="font-bold">Trembling aspen in seral stages</li>
              <li className="font-bold">
                Heath shrub and feather moss understories
              </li>
              <li className="font-bold">Podzolic and Luvisolic soils</li>
              <li className="font-bold">
                Fire and lightning as disturbance drivers
              </li>
            </ul>
          </div>
          <div>
            <Slideshow slides={slides} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
