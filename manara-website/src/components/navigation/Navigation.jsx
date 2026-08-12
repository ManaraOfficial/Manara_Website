import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo2.png";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaGlobe,
  FaChevronDown,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import NavAmbientEffect from "./NavAmbientEffect";
import { SunCloudIcon, MoonStarIcon } from "../reusableComp/ThemeIcons";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ne", label: "नेपाली", flag: "🇳🇵" },
];

const PROJECTS = [
  { nameKey: "nav.curiousMinds", path: "/curious-minds" },
  { nameKey: "nav.project28", path: "/project-28" },
  { nameKey: "nav.sponsorships", path: "/sponsorship" },
  { nameKey: "nav.otherActivities", path: "/other-activities" },
];

const EXPLORE_SECTIONS = [
  { nameKey: "nav.ourWork", targetId: "our-work" },
  { nameKey: "nav.testimonials", targetId: "testimonials" },
  { nameKey: "nav.gallery", targetId: "gallery" },
  { nameKey: "nav.team", targetId: "team" },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Dropdown States
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  // Active Language State (restored from i18next across sessions)
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  // Click Outside Refs
  const projectsRef = useRef(null);
  const exploreRef = useRef(null);
  const langRef = useRef(null);
  const mobileLangRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the nav highlight in sync when the language is changed elsewhere
  useEffect(() => {
    setCurrentLang(i18n.language || "en");
  }, [i18n.language, i18n]);

  // Handle smooth scroll navigation across pages
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileDrawerOpen]);

  // Handle Click Outside to Close Dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setProjectsDropdownOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreDropdownOpen(false);
      }
      if (
        langRef.current &&
        !langRef.current.contains(event.target) &&
        mobileLangRef.current &&
        !mobileLangRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
    i18n.changeLanguage(langCode);
  };

  // Scroll to top when clicking Home / Logo
  const handleHomeClick = (e) => {
    setMobileDrawerOpen(false);
    setProjectsDropdownOpen(false);
    setExploreDropdownOpen(false);

    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (targetId) => {
    setExploreDropdownOpen(false);
    setMobileDrawerOpen(false);
    setMobileExploreOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const selectedLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#404040]/80 backdrop-blur-md border-b border-white/10 py-3 px-6 shadow-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 px-6"
        }`}
      >
        <NavAmbientEffect theme={theme} />

        <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center text-white">

          {/* 1. BRAND LOGO */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              alt="Menschen im Dialog e.V. Logo"
            />
          </Link>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-8 text-xs xl:text-sm font-bold uppercase tracking-wider">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="relative py-1 hover:text-[#EC8134] transition-colors duration-200 group"
            >
              {t("nav.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EC8134] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link 
              to="/about-us" 
              className="relative py-1 hover:text-[#EC8134] transition-colors duration-200 group"
            >
              {t("nav.aboutUs")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EC8134] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* PROJECTS DROPDOWN */}
            <div className="relative" ref={projectsRef}>
              <button
                onClick={() => {
                  setProjectsDropdownOpen(!projectsDropdownOpen);
                  setExploreDropdownOpen(false);
                  setLangDropdownOpen(false);
                }}
                className="relative py-1 text-white hover:text-[#366A35] transition-colors duration-200 uppercase font-bold group cursor-pointer border-none bg-transparent flex items-center gap-1.5"
              >
                {t("nav.projects")}
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${projectsDropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#366A35] transition-all duration-300 ${projectsDropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>

              {projectsDropdownOpen && (
                <div className="absolute left-0 mt-3 w-48 bg-[#404040]/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden py-1.5 z-50">
                  {PROJECTS.map((project, idx) => (
                    <Link
                      key={idx}
                      to={project.path}
                      onClick={() => setProjectsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-bold text-white/80 hover:text-[#366A35] hover:bg-white/10 transition-colors duration-200"
                    >
                      {t(project.nameKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* EXPLORE DROPDOWN */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => {
                  setExploreDropdownOpen(!exploreDropdownOpen);
                  setProjectsDropdownOpen(false);
                  setLangDropdownOpen(false);
                }}
                className="relative py-1 text-white hover:text-[#EC8134] transition-colors duration-200 uppercase font-bold group cursor-pointer border-none bg-transparent flex items-center gap-1.5"
              >
                {t("nav.explore")}
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${exploreDropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#EC8134] transition-all duration-300 ${exploreDropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>

              {exploreDropdownOpen && (
                <div className="absolute left-0 mt-3 w-48 bg-[#404040]/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden py-1.5 z-50">
                  {EXPLORE_SECTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(item.targetId)}
                      className="w-full text-left block px-4 py-2.5 text-xs font-bold text-white/80 hover:text-[#EC8134] hover:bg-white/10 transition-colors duration-200"
                    >
                      {t(item.nameKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* REPORTS PAGE LINK */}
            <Link 
              to="/reports" 
              className="relative py-1 hover:text-[#EC8134] transition-colors duration-200 group"
            >
              {t("nav.reports")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EC8134] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link 
              to="/contact" 
              className="relative py-1 hover:text-[#EC8134] transition-colors duration-200 group"
            >
              {t("nav.contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EC8134] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* 3. DESKTOP LANGUAGE SELECTOR */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition backdrop-blur-sm cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <SunCloudIcon className="w-5 h-5" /> : <MoonStarIcon className="w-5 h-5" />}
            </button>
            <div className="relative" ref={langRef}>
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setProjectsDropdownOpen(false);
                  setExploreDropdownOpen(false);
                }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-bold transition backdrop-blur-sm cursor-pointer"
                aria-label="Select Language"
              >
                <FaGlobe className="text-[#EC8134] text-sm" />
                <span>{selectedLang.flag} {selectedLang.code.toUpperCase()}</span>
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#404040]/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-left hover:bg-white/10 transition ${
                        currentLang === lang.code ? "text-[#EC8134] font-bold bg-white/10" : "text-white/80"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE TOGGLE & CONTROLS */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 bg-white/10 border border-white/20 rounded-full cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <SunCloudIcon className="w-[18px] h-[18px]" /> : <MoonStarIcon className="w-[18px] h-[18px]" />}
            </button>
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-1 text-xs font-bold cursor-pointer"
              >
                <span>{selectedLang.flag}</span>
                <span className="uppercase">{selectedLang.code}</span>
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#404040]/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-left hover:bg-white/10 transition ${
                        currentLang === lang.code ? "text-[#EC8134] font-bold bg-white/10" : "text-white/80"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="text-white text-xl p-2 focus:outline-none"
              aria-label="Open Navigation Drawer"
            >
              <FaBars />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE BACKDROP OVERLAY */}
      <div
        onClick={() => setMobileDrawerOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          mobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE SIDE NAVIGATION DRAWER */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#404040] text-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/15">
          <img
            src={logo}
            className="h-10 w-auto object-contain"
            alt="Menschen im Dialog e.V."
          />
          <button
            onClick={() => setMobileDrawerOpen(false)}
            className="text-white/80 hover:text-white text-xl p-1 focus:outline-none"
            aria-label="Close Drawer"
          >
            <FaXmark />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="py-4 text-base font-bold border-b border-white/15 text-white hover:text-[#EC8134] transition-colors"
          >
            {t("nav.home")}
          </Link>

          <Link
            to="/about-us"
            onClick={() => setMobileDrawerOpen(false)}
            className="py-4 text-base font-bold border-b border-white/15 text-white hover:text-[#EC8134] transition-colors"
          >
            {t("nav.aboutUs")}
          </Link>

          {/* Mobile Projects Accordion */}
          <div className="border-b border-white/15">
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="w-full py-4 flex items-center justify-between text-base font-bold text-white hover:text-[#366A35] transition-colors"
            >
              <span>{t("nav.projects")}</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-4 pb-3 space-y-2">
                {PROJECTS.map((project, idx) => (
                  <Link
                    key={idx}
                    to={project.path}
                    onClick={() => {
                      setMobileDrawerOpen(false);
                      setMobileProjectsOpen(false);
                    }}
                    className="block py-2 text-sm font-bold text-white/80 hover:text-[#366A35] transition-colors"
                  >
                    {t(project.nameKey)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Explore Accordion */}
          <div className="border-b border-white/15">
            <button
              onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
              className="w-full py-4 flex items-center justify-between text-base font-bold text-white hover:text-[#EC8134] transition-colors"
            >
              <span>{t("nav.explore")}</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileExploreOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileExploreOpen && (
              <div className="pl-4 pb-3 space-y-2">
                {EXPLORE_SECTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.targetId)}
                    className="block w-full text-left py-2 text-sm font-bold text-white/80 hover:text-[#EC8134] transition-colors"
                  >
                    {t(item.nameKey)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Reports Link */}
          <Link
            to="/reports"
            onClick={() => setMobileDrawerOpen(false)}
            className="py-4 text-base font-bold border-b border-white/15 text-white hover:text-[#EC8134] transition-colors"
          >
            {t("nav.reports")}
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileDrawerOpen(false)}
            className="py-4 text-base font-bold border-b border-white/15 text-white hover:text-[#EC8134] transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Drawer Social Icons */}
        <div className="p-6 border-t border-white/15 flex items-center justify-around text-white/80">
          <a
            href="https://www.instagram.com/MenschenDialog/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#EC8134] transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:info@menschen-dialog.de"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#EC8134] transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/MenschenDialog/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#EC8134] transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
