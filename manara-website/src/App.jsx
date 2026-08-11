import './index.css'
import HomePage from './views/HomePage'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import NotFound from './components/404 Page/NotFound'
import CuriousMindDetail from './detailPage/CuriousMindsDetail'
import Project28Detail from './detailPage/Project28Detail'
import SponsorshipDetail from './detailPage/SponsorshipsDetail'
import CategoryGalleryPage from './components/body/CategoryGalleryPage'
import ReportsPage from './views/reportsPage'
import ContactUs from './views/ContactUs'
import AboutUsDetail from './detailPage/AboutUsDetail'
import OtherActivities from './detailPage/OtherActivities'
import SmoothScroll from './components/reusableComp/SmoothScroll'
import { getLenis } from './lib/lenis'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Resets scroll position to (0,0) when switching routes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // New route = new page height/content, so scroll-triggered
    // animations need their trigger positions recalculated.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
};

// Scroll Progress Ring + Bouncing Scroll To Top Button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      // Visibility threshold
      if (currentScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll percentage (0 to 100)
      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // SVG Progress Ring calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        /* Smooth Brand Color Cycling for stroke and background */
        @keyframes brandColorCycle {
          0%, 100% { stroke: #366A35; } /* Green */
          25% { stroke: #EC8134; }      /* Orange */
          50% { stroke: #D34A32; }      /* Red */
          75% { stroke: #FF1493; }      /* Deep Pink */
        }

        @keyframes brandBgCycle {
          0%, 100% { background-color: #366A35; }
          25% { background-color: #EC8134; }
          50% { background-color: #D34A32; }
          75% { background-color: #FF1493; }
        }

        /* Smooth floating bounce effect */
        @keyframes floatBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .animated-stroke {
          animation: brandColorCycle 12s ease-in-out infinite;
        }

        .animated-bg {
          animation: brandBgCycle 12s ease-in-out infinite;
        }

        .animated-bounce {
          animation: floatBounce 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Outer Wrapper: Handles entrance/exit visibility */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-8 scale-50 pointer-events-none'
        }`}
      >
        {/* Inner Button: Handles continuous gentle bouncing */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="animated-bounce relative flex items-center justify-center w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer"
        >
          {/* SVG Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90 p-1" viewBox="0 0 52 52">
            {/* Background ring track */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              className="stroke-gray-200"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Dynamic scroll progress ring */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              className="animated-stroke transition-all duration-150 ease-out"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Center Circle with Arrow Icon */}
          <div className="animated-bg w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300">
            <FaArrowUp className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5" />
          </div>
        </button>
      </div>
    </>
  );
};

const MainLayout = () => {
  return (
    <div className="m-auto">
      <SmoothScroll />
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
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
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUsDetail />} />
        <Route path="/other-activities" element={<OtherActivities />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;