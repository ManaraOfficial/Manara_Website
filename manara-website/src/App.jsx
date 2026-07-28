import './index.css' 
import HomePage from './views/HomePage'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import NotFound from './components/404 Page/NotFound'
import CuriousMindDetail from './detailPage/CuriousMindsDetail'
import Project28Detail from './detailPage/Project28Detail'
import SponsorshipDetail from './detailPage/SponsorshipsDetail'
import CategoryGalleryPage from './components/body/CategoryGalleryPage'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <div className="m-auto">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/curious-minds" element={<CuriousMindDetail />} />
        <Route path="/project-28" element={<Project28Detail />} />
        <Route path="/sponsorship" element={<SponsorshipDetail />} />

        {/* Dynamic Gallery Route */}
        <Route path="/gallery/:category" element={<CategoryGalleryPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App