import React from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Card = ({ title }) => {
  return (
    <div
      className="flex max-xl:flex-col gap-[58px] max-xl:gap-4 rounded-xl shadow-xl p-12 max-xl:p-4 bg-[#C5D6F5] "
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] max-xl:text-[16px]">
          {title}
        </div>
      </div>
    </div>
  );
};

const MountainHemlockZone = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Cover Section */}
      <div className="relative w-full">
        <img
          src="/mhcover.png"
          alt="Mountain Hemlock"
          className="w-full h-170 object-cover"
        />
        <div className="absolute top-10 left-40">
          <Card title={<><br />MOUNTAIN<br />HEMLOCK</>} />
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-full overflow-hidden mt-20">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="/about.png"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative px-4 py-12 md:px-8 z-10">
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg">
              <Card
                title={
                  <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-start">
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-bold mb-2">About this zone</h2>
                      <p className="text-[16px] leading-relaxed">
                        The Mountain Hemlock Biogeoclimatic zone (or MH zone) gets its name from the abundance of mountain hemlock present in the higher elevation areas across the Pacific coast region. Mountain hemlock is also known as <i>Tsuga mertensiana</i> and is well adapted to the colder and snowier conditions found at higher elevations. Deep snow and a shorter growing season play a large role in the MH zone ecosystem. At higher elevations the forest transitions into subalpine parklands where trees are found grouped together. These "islands" are microsites where the snow melts a little bit earlier. At these upper edges, trees can be small, misshapen, but older than you might think as they are slow to grow. These are known as <strong>Krummholz</strong> trees, a German word meaning "crooked wood". These forests are rarely disturbed by events like fires, so trees can become old growth forests in this zone. More typical disturbance agents are avalanches or rock slides.
                      </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-start">
                      <img
                        src="/krumhotz.png"
                        alt="A Krummholz tree"
                        className="w-full h-70 object-cover rounded-lg"
                      />
                      <p className="text-sm mt-2 italic">A Krummholz tree</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Distribution Section */}
      <div className="px-4 py-12 md:px-8">
        <div className="flex flex-col md:flex-row md:space-x-12 items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Distribution</h2>
            <p className="text-gray-800 leading-relaxed mt-3 text-[16px]">
              The Mountain Hemlock zone covers much of the mid to high elevations along the Pacific coast, including Vancouver Island, Haida Gwaii and the Coast Mountains within BC. The MH zone also extends north into Alaska, and south into Washington and Oregon. It occupies elevations from 900–1800 m above sea level in the southern part of the zone, and 400–1000 m above sea level in the northern extent of the zone. At lower elevations below the MH zone, the ecosystem transitions into the Coastal Western Hemlock zone, where mountain hemlock is replaced by western hemlock. In areas where the mountains are high enough, the MH zone transitions into the treeless alpine meadows of the Coastal Mountain Heather Alpine zone.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold mb-1">SEA LEVEL</p>
              <img
                src="/Coastal Western.png"
                alt="Coastal Western Hemlock"
                className="w-[200px] h-[200px] object-contain"
              />
              <p className="mt-2 text-sm font-medium">Coastal Western Hemlock reside here!</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold mb-1">400–1000 METERS</p>
              <img
                src="/MountainHemlock.png"
                alt="Mountain Hemlock"
                className="w-[200px] h-[200px] object-contain"
              />
              <p className="mt-2 text-sm font-medium">Mountain Hemlock reside here!</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold mb-1">900–1800 METERS</p>
              <img
                src="/Coastal Mountain.png"
                alt="Coastal Mountain Heather Alpine"
                className="w-[200px] h-[200px] object-contain"
              />
              <p className="mt-2 text-sm font-medium">Coastal Mountain Heather Alpine reside here!</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MountainHemlockZone;
