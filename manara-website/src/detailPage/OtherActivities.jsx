import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaCheckCircle, 
  FaDownload, 
  FaShareAlt, 
  FaQuoteLeft, 
  FaHandHoldingHeart,
  FaGlobe,
  FaClock,
  FaTag,
  FaTooth,
  FaBuilding,
  FaSmile,
  FaShapes,
  FaCubes,
  FaFeather,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

// Hero Carousel images (static assets; text comes from i18n)
const heroImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"
];

// Icon/style metadata per initiative (kept in code; text comes from i18n)
const initiativeMeta = [
  {
    id: "toilet-construction",
    icon: <FaBuilding className="text-[#366A35] text-2xl" />,
    accentColor: "border-[#366A35]",
    badgeBg: "bg-[#366A35]/10 text-[#366A35]"
  },
  {
    id: "roof-construction",
    icon: <FaBuilding className="text-[#EC8134] text-2xl" />,
    accentColor: "border-[#EC8134]",
    badgeBg: "bg-[#EC8134]/10 text-[#EC8134]"
  },
  {
    id: "toothbrushing-demo",
    icon: <FaTooth className="text-blue-600 text-2xl" />,
    accentColor: "border-blue-600",
    badgeBg: "bg-blue-100 text-blue-700"
  },
  {
    id: "ecd-play-materials",
    icon: <FaCubes className="text-purple-600 text-2xl" />,
    accentColor: "border-purple-600",
    badgeBg: "bg-purple-100 text-purple-700"
  },
  {
    id: "ecd-carpet-flooring",
    icon: <FaShapes className="text-emerald-600 text-2xl" />,
    accentColor: "border-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-700"
  }
];

const OtherActivitiesDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const heroSlides = t("otherActivitiesDetail.heroSlides", { returnObjects: true }).map((slide, idx) => ({
    ...slide,
    src: heroImages[idx]
  }));

  const initiatives = t("otherActivitiesDetail.initiatives", { returnObjects: true }).map((item, idx) => ({
    ...item,
    ...initiativeMeta[idx]
  }));

  const impactMetrics = t("otherActivitiesDetail.impactMetrics", { returnObjects: true });

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t("otherActivitiesDetail.shareTitle"),
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("otherActivitiesDetail.linkCopied"));
    }
  };

  const handleScrollToOurWork = (e) => {
    e.preventDefault();
    const element = document.getElementById("our-work");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "our-work" } });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-20 font-['Nunito_Sans',sans-serif]">
      
      {/* 1. CENTERED HERO HEADER SECTION WITH INTEGRATED CAROUSEL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          
          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif] bg-[#EC8134]/10 text-[#EC8134]">
              {t("otherActivitiesDetail.categoryBadge")}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-200 text-gray-700 text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">
              {t("otherActivitiesDetail.statusBadge")}
            </span>
          </div>

          {/* Centered Balanced Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-['Montserrat',sans-serif] leading-tight">
            {t("otherActivitiesDetail.pageTitle")}
          </h1>

          {/* Key Event Details Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 font-medium pt-2">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#EC8134]" />
              <span>{t("otherActivitiesDetail.eventDetails.duration")}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#366A35]" />
              <span>{t("otherActivitiesDetail.eventDetails.location")}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-[#D34A32]" />
              <span>{t("otherActivitiesDetail.eventDetails.beneficiaries")}</span>
            </div>
          </div>
        </div>

        {/* HERO CAROUSEL (Replaces static hero image) */}
        <div className="mt-10 relative w-full h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 group">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EC8134] text-white text-[11px] font-extrabold uppercase tracking-wider font-['Montserrat',sans-serif]">
                  {slide.badge}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Montserrat',sans-serif] text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition flex items-center justify-center border border-white/40 shadow-md cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition flex items-center justify-center border border-white/40 shadow-md cursor-pointer"
          >
            <FaChevronRight />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-[#EC8134]" : "w-2.5 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT MAIN COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Summary */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                {t("otherActivitiesDetail.programOverviewTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("otherActivitiesDetail.programOverviewText")}
              </p>
            </div>

            {/* DETAILED SECTIONS */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-gray-900 font-['Montserrat',sans-serif]">
                {t("otherActivitiesDetail.detailedBreakdownTitle")}
              </h2>

              {initiatives.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-3xl p-6 sm:p-8 border-l-4 ${item.accentColor} border-y border-r border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-5`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 font-['Montserrat',sans-serif]">
                      {t("otherActivitiesDetail.keyHighlightsLabel")}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                      {item.details.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#366A35] text-base shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Program Outcomes */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-md">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#EC8134] font-['Montserrat',sans-serif] mb-6">
                {t("otherActivitiesDetail.impactMetricsTitle")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {impactMetrics.map((metric, idx) => (
                  <div className="space-y-1" key={idx}>
                    <div className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">{metric.value}</div>
                    <div className="text-xs font-semibold text-gray-300 font-['Montserrat',sans-serif]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#EC8134]/10 via-[#366A35]/5 to-transparent border-l-4 border-[#EC8134] relative space-y-3">
              <FaQuoteLeft className="text-3xl text-[#EC8134]/30" />
              <p className="text-base sm:text-lg font-bold text-gray-900 italic font-['Montserrat',sans-serif] leading-relaxed">
                "{t("otherActivitiesDetail.quoteText")}"
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider font-['Montserrat',sans-serif]">
                {t("otherActivitiesDetail.quoteAuthor")}
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 font-['Montserrat',sans-serif] border-b border-gray-100 pb-4">
                {t("otherActivitiesDetail.quickInfoTitle")}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaTag className="text-[#EC8134] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{t("otherActivitiesDetail.focusAreasLabel")}</span>
                    <span className="font-bold text-gray-800">{t("otherActivitiesDetail.focusAreasValue")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{t("otherActivitiesDetail.locationLabel")}</span>
                    <span className="font-bold text-gray-800">{t("otherActivitiesDetail.locationValue")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaGlobe className="text-[#366A35] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{t("otherActivitiesDetail.organizerLabel")}</span>
                    <span className="font-bold text-gray-800">{t("otherActivitiesDetail.organizerValue")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition font-['Montserrat',sans-serif] cursor-pointer"
                >
                  <FaShareAlt /> {t("otherActivitiesDetail.shareProject")}
                </button>

                <a
                  href="mailto:contact@project28.org"
                  className="w-full flex items-center justify-center gap-2 bg-[#366A35] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#2e592d] transition font-['Montserrat',sans-serif]"
                >
                  <FaHandHoldingHeart /> {t("otherActivitiesDetail.becomeVolunteer")}
                </a>
              </div>
            </div>

            {/* Report Download Banner */}
            <div className="bg-gradient-to-br from-[#EC8134] to-[#d36f26] rounded-3xl p-6 text-white space-y-4 shadow-md">
              <h4 className="text-lg font-bold font-['Montserrat',sans-serif]">
                {t("otherActivitiesDetail.reportBannerTitle")}
              </h4>
              <p className="text-xs text-orange-100 leading-relaxed">
                {t("otherActivitiesDetail.reportBannerText")}
              </p>
              <button
                onClick={() => alert(t("otherActivitiesDetail.downloadingAlert"))}
                className="inline-flex items-center gap-2 bg-white text-[#EC8134] px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition shadow-sm font-['Montserrat',sans-serif] cursor-pointer"
              >
                <FaDownload /> {t("otherActivitiesDetail.downloadReportPdf")}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. RELATED ACTIVITIES / FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
            {t("otherActivitiesDetail.footerCtaTitle")}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t("otherActivitiesDetail.footerCtaText")}
          </p>
          <button
            onClick={handleScrollToOurWork}
            className="inline-flex items-center gap-2 bg-[#EC8134] text-[#FFFFFF] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#d9732b] transition font-['Montserrat',sans-serif] cursor-pointer"
          >
            {t("otherActivitiesDetail.exploreAllActivities")}
          </button>
        </div>
      </section>

    </div>
  );
};

export default OtherActivitiesDetail;