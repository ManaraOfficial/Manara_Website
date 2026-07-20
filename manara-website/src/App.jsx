import './index.css' 
import HomePage from './views/HomePage'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import NotFound from './components/404 Page/NotFound'
import { Routes, Route, Outlet } from 'react-router-dom'

// Main Layout component containing Header, Page Content, and Footer
const MainLayout = () => {
  return (
    <div className="m-auto">
      <Navigation />
      <Outlet /> {/* Renders the matching child route (e.g. HomePage) */}
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
        {/* You can add more valid routes here later, e.g. <Route path="/about" element={<AboutPage />} /> */}
      </Route>

      {/* 2. Catch-all route for broken or invalid URLs (Displays standalone 404) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App