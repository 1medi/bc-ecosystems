import { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import BEC from '/BEC.png';
import BG from '/BG.png';
import BWBS from '/BWBS.png';
import CDF from '/CDF.png';
import CWH from '/CWH.png';
import ESSF from '/ESSF.png';
import IDF from '/IDF.png';
import ICH from '/ICH.png';
import PP from '/PP.png';
import MS from '/MS.png';
import MH from '/MH.png';
import IMA from '/IMA_CMA_BAFA.png';
import SBPS from '/SBPS.png';
import SBS from '/SBS.png';
import SWB from '/SWB.png';


const zoneList = [
  { name: 'BEC Map', img: BEC },
  { name: 'Bunchgrass', img: BG },
  { name: 'Boreal White and Black Spruce', img: BWBS },
  { name: 'Coastal Douglas-fir', img: CDF },
  { name: 'Coastal Western Hemlock', img: CWH },
  { name: 'Engelmann Spruce–Subalpine Fir', img: ESSF },
  { name: 'Interior Douglas-fir', img: IDF },
  { name: 'Interior Cedar–Hemlock', img: ICH },
  { name: 'Ponderosa Pine', img: PP },
  { name: 'Montane Spruce', img: MS },
  { name: 'Mountain Hemlock', img: MH },
  { name: 'Alpine Tundra / CMA / BAFA', img: IMA },
  { name: 'Sub-Boreal Pine–Spruce', img: SBPS },
  { name: 'Sub-Boreal Spruce', img: SBS },
  { name: 'Spruce–Willow–Birch', img: SWB },
];


export default function InteractiveMapSidebar() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <>
    <Header />
<div className="flex flex-col md:flex-row justify-center items-center p-8 gap-4 max-w-screen-lg mx-auto">
<div className="w-full md:w-2/3 max-w-[650px] border p-4 bg-white flex items-center justify-center">
    <img
      src={selectedZone ? selectedZone.img : BEC}
      alt={selectedZone ? selectedZone.name : 'BC Zones'}
      className="max-w-full max-h-[500px]"
    />
  </div>


      {/* right list */}
      <div className="w-full md:w-1/3">
  <h2 className="text-xl font-semibold text-green-900 mb-4">Ecosystems of British Columbia</h2>
  <ul className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
    {zoneList.map((zone) => (
      <li
        key={zone.name}
        onClick={() => setSelectedZone(zone.name === 'BEC Map' ? null : zone)}
        className={`px-4 py-2 rounded cursor-pointer transition-colors duration-200 border 
        ${selectedZone?.name === zone.name || (!selectedZone && zone.name === 'BEC Map')
          ? 'bg-green-100 text-green-900 border-green-400'
          : 'bg-white text-blue-700 hover:bg-blue-50 border-gray-200'}`}
      >
        {zone.name}
      </li>
    ))}
  </ul>
</div>
    </div>
    <Footer />
    </>
  );
}
