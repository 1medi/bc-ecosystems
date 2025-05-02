import { Routes, Route } from 'react-router-dom'
import CWH from '../src/pages/cwh/App.jsx'
import MH from '../src/pages/mh/App.jsx'
import Home from "./Home.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/MH" element={<MH />} />
      <Route path="/CWH" element={<CWH />} />
    </Routes>
  )
}

export default App
