import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Basics from './pages/Basics'
import History from './pages/History'
import Masters from './pages/Masters'
import MasterDetail from './pages/MasterDetail'
import Plays from './pages/Plays'
import PlayDetail from './pages/PlayDetail'
import Guide from './pages/Guide'
import GuideDetail from './pages/GuideDetail'
import Interactive from './pages/Interactive'
import Map from './pages/Map'
import Culture from './pages/Culture'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/history" element={<History />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/masters/:id" element={<MasterDetail />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/plays/:id" element={<PlayDetail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/map" element={<Map />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
