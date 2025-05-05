import { Routes, Route } from 'react-router-dom'
import CWH from './pages/coastal/cwh/App.jsx'
import MH from './pages/coastal/mh/App.jsx'
import BG from './pages/southernInterior/bg/App.jsx'
import ICH from './pages/centralInterior/ich/App.jsx'
import Home from "./Home.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Mountain-Hemlock" element={<MH />} />
      <Route path="/Coastal-Western-Hemlock" element={<CWH />} />
      <Route path='/Bunchgrass' element={<BG/>} />
      <Route path='/Interior-Cedar-Hemlock' element={<ICH/>} />
    </Routes>
  )
}

export default App
