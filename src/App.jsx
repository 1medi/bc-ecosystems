import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CWH from "./pages/coastal/cwh/App.jsx";
import MH from "./pages/coastal/mh/App.jsx";
import CMHA from "./pages/coastal/cmha/App.jsx";
import CDF from "./pages/coastal/cdf/App.jsx";
import BG from "./pages/southernInterior/bg/App.jsx";
import PP from "./pages/southernInterior/pp/App.jsx";
import ICH from "./pages/centralInterior/ich/App.jsx";
import IDF from "./pages/centralInterior/idf/App.jsx";
import IMA from "./pages/centralInterior/ima/App.jsx";
import MS from "./pages/centralInterior/ms/App.jsx";
import SBPS from "./pages/centralInterior/sbps/App.jsx";
import SBS from "./pages/centralInterior/sbs/App.jsx";
import AT from "./pages/alpineTundra/App.jsx";
import BWBS from "./pages/northern/bwbs/App.jsx";
import ESSF from "./pages/northern/essf/App.jsx";
import SWB from "./pages/northern/swb/App.jsx";
import Map from "./pages/map/App.jsx";
import Home from "./Home.jsx";
import Gallery from "./pages/gallery/App.jsx";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Alpine-Tundra" element={<AT />} />

          {/* Coastal */}
          <Route path="/Mountain-Hemlock" element={<MH />} />
          <Route path="/Coastal-Western-Hemlock" element={<CWH />} />
          <Route path="/Coastal-Douglas-Fir" element={<CDF />} />

          {/* Southern Interior */}
          <Route path="/Bunchgrass" element={<BG />} />
          <Route path="/Ponderosa-Pine" element={<PP />} />

          {/* Central Interior */}
          <Route path="/Interior-Cedar-Hemlock" element={<ICH />} />
          <Route path="/Interior-Douglas-Fir" element={<IDF />} />
          <Route path="/Montane-Spruce" element={<MS />} />
          <Route path="/Sub-Boreal-Pine-Spruce" element={<SBPS />} />
          <Route path="/Sub-Boreal-Spruce" element={<SBS />} />

          {/* Northern */}

          <Route path="/Boreal-White-and-Black-Spruce" element={<BWBS />} />
          <Route path="/Engelmann-Spruce-Subalpine-Fir" element={<ESSF />} />
          <Route path="/Spruce-Willow-Birch" element={<SWB />} />

          {/* Interactive Map*/}
          <Route path="Interactive-Map" element={<Map />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
