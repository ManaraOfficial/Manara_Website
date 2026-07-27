import './index.css' 
import HomePage from './views/HomePage'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import NotFound from './components/404 Page/NotFound'
import CuriousMindDetail from './detailPage/CuriousMindsDetail' // 1. Import CuriousMindDetail
import Project28Detail from './detailPage/Project28Detail' // 2. Import Project28Detail
import SponsorshipDetail from './detailPage/SponsorshipsDetail' // 3. Import SponsorshipDetail
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Helper component to auto-scroll to top when clicking "Learn More"
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main Layout component containing Header, Page Content, and Footer
const MainLayout = () => {
  return (
    <div className="m-auto">
      <ScrollToTop /> {/* Resets scroll position when navigating */}
      <Navigation />
      <Outlet /> {/* Renders the matching child route (e.g. HomePage or CuriousMindDetail) */}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* 1. Routes that use the standard Navigation + Footer layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        
        {/* 2. Add the Curious Minds Detail route here */}
        <Route path="/curious-minds" element={<CuriousMindDetail />} />
        <Route path="/project-28" element={<Project28Detail />} />
        <Route path="/sponsorship" element={<SponsorshipDetail />} />
      </Route>

      {/* 3. Catch-all route for broken or invalid URLs */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App