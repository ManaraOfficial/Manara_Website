import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaGraduationCap,
  FaLeaf,
  FaFemale,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaGlobe,
  FaShareAlt,
  FaHeart,
  FaDownload,
  FaBookOpen
} from "react-icons/fa";

// Image assets
import Project28Hero from "../assets/images/Project28Img.jpg";
import Phase1Img from "../assets/images/Project28Img.jpg";
import Phase2Img from "../assets/images/Project28Img.jpg";
import Phase3Img from "../assets/images/Project28Img.jpg";

// Helper hook for animating numbers
const useCountUp = (endValue, duration = 2000, startAnimating = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);

      const easeOut = 1 - Math.pow(1 - rate, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, startAnimating]);

  return count;
};

// Sub-component for individual metric items
const MetricCard = ({ item, isVisible }) => {
  const animatedNumber = useCountUp(item.numericValue, 2000, isVisible);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
      <div className="mb-3 p-3 bg-gray-50 rounded-xl">{item.icon}</div>
      <span className="text-3xl font-extrabold text-[#ff1493] mb-1 font-['Montserrat',sans-serif]">
        {item.prefix || ""}
        {animatedNumber}
        {item.suffix || ""}
      </span>
      <span className="text-xs sm:text-sm font-medium text-gray-600">
        {item.label}
      </span>
    </div>
  );
};

const metricIcons = [
  <FaFemale className="text-2xl text-[#ff1493]" />,
  <FaUsers className="text-2xl text-[#ff1493]" />,
  <FaShieldAlt className="text-[#ff1493] text-2xl" />,
  <FaShieldAlt className="text-2xl text-[#ff1493]" />,
];

const pillarStyles = [
  { id: "pillar-1", borderBg: "bg-[#B03A2E]", icon: <FaGraduationCap className="text-lg text-white" />, image: Phase1Img },
  { id: "pillar-2", borderBg: "bg-[#E66B19]", icon: <FaLeaf className="text-lg text-white" />, image: Phase2Img },
  { id: "pillar-3", borderBg: "bg-[#1E5622]", icon: <FaShieldAlt className="text-lg text-white" />, image: Phase3Img },
];

const expertiseIcons = [
  <FaGraduationCap className="text-2xl text-yellow-300 mb-3" />,
  <FaLeaf className="text-2xl text-green-300 mb-3" />,
  <FaCheckCircle className="text-2xl text-orange-300 mb-3" />,
];

const Project28Detail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const metricsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  const metrics = t("project28Detail.metrics", { returnObjects: true }).map((m, idx) => ({
    id: idx + 1,
    icon: metricIcons[idx],
    numericValue: m.value,
    prefix: m.prefix,
    suffix: m.suffix,
    label: m.label,
  }));

  // Pillar Data
  const projectPillars = t("project28Detail.pillars", { returnObjects: true }).map((pillar, idx) => ({
    ...pillar,
    ...pillarStyles[idx],
  }));

  const expertiseCards = t("project28Detail.expertiseCards", { returnObjects: true });
  const otherAreas = t("project28Detail.otherAreas", { returnObjects: true });

  return (
    <div className="w-full bg-white text-[#404040] font-['Nunito_Sans',sans-serif]">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-red-50/40 via-white to-white pt-28 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff1493]/10 text-[#ff1493] text-xs font-extrabold uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">
              {t("project28Detail.heroBadge")}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 font-['Montserrat',sans-serif]">
              {t("project28Detail.heroTitleLine1")}{" "}
              <span className="text-[#ff1493]">{t("project28Detail.heroTitleHighlight")}</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
              {t("project28Detail.heroSubtitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-4 py-2 rounded-full font-medium">
                <FaMapMarkerAlt className="text-[#ff1493]" /> {t("project28Detail.heroLocation")}
              </span>
              <span className="bg-red-100/70 text-[#ff1493] border border-red-200 px-4 py-2 rounded-full font-bold">
                {t("project28Detail.heroCooperation")}
              </span>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff1493]/20 via-[#EC8134]/20 to-[#ff1493]/20 rounded-3xl blur-lg" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <img
                src={Project28Hero}
                alt="Project 28 Nepal Initiative"
                className="w-full h-[320px] sm:h-[460px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8 flex justify-between items-end text-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif]">
                    {t("project28Detail.bannerInitiatedBy")}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 max-w-md">
                    {t("project28Detail.bannerInitiatorText")}
                  </p>
                </div>
                <span className="hidden sm:block text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/30">
                  {t("project28Detail.bannerBadge")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: OVERVIEW, QUICK INFO & DOCUMENTATION GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN: Overview & Detailed Breakdown (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Program Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                {t("project28Detail.programOverviewTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {t("project28Detail.programOverviewText")}
              </p>
            </div>

            {/* Detailed Project Breakdown Header */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif] mb-6">
                {t("project28Detail.breakdownTitle")}
              </h3>

              {/* Breakdown Card 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#ffd2d9] rounded-2xl text-[#ff1493] shrink-0">
                    <FaBookOpen className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                      {t("project28Detail.breakdownItemTitle")}
                    </h4>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("project28Detail.breakdownItemText")}
                </p>

                {/* Key Highlights & Actions Box */}
                <div className="bg-gray-50/80 p-5 sm:p-6 rounded-2xl border border-gray-100 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-['Montserrat',sans-serif] block mb-2">
                    {t("project28Detail.keyHighlightsLabel")}
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-semibold">
                    {t("project28Detail.breakdownHighlights", { returnObjects: true }).map((point, idx) => (
                      <div className="flex items-start gap-2.5" key={idx}>
                        <FaCheckCircle className="text-[#ff1493] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Quick Info & Download Callout (Spans 1 col) */}
          <div className="space-y-6">
            
            {/* Quick Info Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                {t("project28Detail.quickInfoTitle")}
              </h3>

              <div className="space-y-4">
                {/* Info Item 1 */}
                <div className="flex items-start gap-3">
                  <FaTag className="text-[#EC8134] text-sm shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block font-['Montserrat',sans-serif]">
                      {t("project28Detail.focusAreasLabel")}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {t("project28Detail.focusAreasValue")}
                    </span>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-500 text-sm shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block font-['Montserrat',sans-serif]">
                      {t("project28Detail.locationLabel")}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {t("project28Detail.locationValue")}
                    </span>
                  </div>
                </div>

                {/* Info Item 3 */}
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-[#ff1493] text-sm shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block font-['Montserrat',sans-serif]">
                      {t("project28Detail.organizerLabel")}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      {t("project28Detail.organizerValue")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: t("project28Detail.shareTitle"), url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert(t("project28Detail.linkCopied"));
                    }
                  }}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition font-['Montserrat',sans-serif]"
                >
                  <FaShareAlt /> {t("project28Detail.shareProject")}
                </button>

                <Link
                  to='/contact'
                  className="w-full py-3 bg-gradient-to-br from-[#D34A32] to-[#ff1493] hover:bg-[deeppink] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition font-['Montserrat',sans-serif]"
                >
                  <FaHeart /> {t("project28Detail.becomeVolunteer")}
                </Link>
              </div>
            </div>

            {/* Full Program Documentation Card */}
            <div className="bg-gradient-to-br from-[#EC8134] to-[#ff1493] text-white p-6 sm:p-7 rounded-3xl shadow-md space-y-4">
              <h3 className="text-xl font-bold font-['Montserrat',sans-serif]">
                {t("project28Detail.reportBannerTitle")}
              </h3>
              <p className="text-xs text-red-50 leading-relaxed">
                {t("project28Detail.reportBannerText")}
              </p>

              <a
                href="#download-report"
                className="w-full py-3 bg-white text-[#ff1493] hover:bg-gray-50 text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 transition shadow-sm font-['Montserrat',sans-serif]"
              >
                <FaDownload /> {t("project28Detail.downloadReportPdf")}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ANIMATED METRICS STRIP */}
      <section ref={metricsRef} className="bg-gray-50 border-y border-gray-100 py-10 px-6">
        <div className="max-w-6xl px-8 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <MetricCard key={item.id} item={item} isVisible={isVisible} />
          ))}
        </div>
      </section>

      {/* CONTEXT & OBJECTIVE */}
      <section className="max-w-6xl px-8 mx-auto py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div className="bg-white border-l-4 border-[#ff1493] p-8 rounded-r-3xl shadow-sm bg-gradient-to-r from-red-50/20 to-transparent">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ff1493] mb-3 font-['Montserrat',sans-serif]">
              {t("project28Detail.challengeTitle")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {t("project28Detail.challengeText")}
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#EC8134] p-8 rounded-r-3xl shadow-sm bg-gradient-to-r from-orange-50/20 to-transparent">
            <h3 className="text-xl sm:text-2xl font-bold text-[#EC8134] mb-3 font-['Montserrat',sans-serif]">
              {t("project28Detail.solutionTitle")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {t("project28Detail.solutionText")}
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="bg-gray-50/50 py-16 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* SECTION HEADER & TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#ff1493]/10 text-[#ff1493] text-xs font-black uppercase tracking-widest mb-3 font-['Montserrat',sans-serif]">
              {t("project28Detail.pillarsLabel")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Montserrat',sans-serif]">
              {t("project28Detail.pillarsTitle")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              {t("project28Detail.pillarsSubtitle")}
            </p>
          </div>

          {/* 3 CARDS GRID */}
          <div className="grid lg:grid-cols-3 gap-6">
            {projectPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-[28px] border border-gray-200/70 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md"
              >
                {/* Header Image Box */}
                <div className="relative h-[250px] w-full overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                  <div className="absolute top-5 left-5">
                    <span className="bg-white text-gray-900 text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm font-['Montserrat',sans-serif]">
                      {pillar.badgeText}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
                    {pillar.icon}
                  </div>

                  <div className="absolute bottom-5 left-5 right-18 text-white pr-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300 block mb-0.5 font-['Montserrat',sans-serif]">
                      {pillar.subTitle}
                    </span>
                    <h3 className="text-xl font-bold leading-snug font-['Montserrat',sans-serif]">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className={`absolute bottom-0 inset-x-0 h-1 ${pillar.borderBg}`} />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-8">
                    {pillar.description}
                  </p>

                  <div>
                    <div className="pt-5 border-t border-gray-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4 font-['Montserrat',sans-serif]">
                        {t("project28Detail.coreDeliverablesLabel")}
                      </span>
                      <div className="space-y-3">
                        {pillar.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-[#ff1493] text-xs shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600 font-semibold leading-tight">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM & PARTNERS CORNERSTONE */}
      <section className="max-w-6xl px-8 mx-auto py-16 sm:py-20">
        <div className="bg-gradient-to-br from-[#D34A32] to-[#ff1493] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        {/* <div className="bg-[#D34A32] text-white rounded-3xl p-8 sm:p-12 shadow-xl"> */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-200 font-['Montserrat',sans-serif]">
              {t("project28Detail.expertiseLabel")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 font-['Montserrat',sans-serif]">
              {t("project28Detail.expertiseTitle")}
            </h3>
            <p className="text-sm text-red-100 mt-3 leading-relaxed">
              {t("project28Detail.expertiseText")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertiseCards.map((card, idx) => (
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10" key={idx}>
                {expertiseIcons[idx]}
                <h4 className="font-bold text-base mb-2 font-['Montserrat',sans-serif]">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-100 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER ACTIVITIES NAVIGATION */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl px-8 mx-auto space-y-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6 font-['Montserrat',sans-serif]">
            {t("project28Detail.exploreOtherTitle")}
          </h3>

          <div className="grid sm:grid-cols-3 gap-6">
            <div
              onClick={() => navigate("/curious-minds")}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#ff1493]/50 transition cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#ff1493] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[0].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-2 group-hover:text-[#ff1493] transition font-['Montserrat',sans-serif]">
                {otherAreas[0].title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {otherAreas[0].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff1493] mt-4">
                {t("project28Detail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            <div
              onClick={() => navigate("/sponsorship")}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#ff1493]/50 transition cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#EC8134] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[1].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-2 group-hover:text-[#EC8134] transition font-['Montserrat',sans-serif]">
                {otherAreas[1].title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {otherAreas[1].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC8134] mt-4">
                {t("project28Detail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            <div
              onClick={() => navigate("/other-activities")}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#ff1493]/50 transition cursor-pointer group"
            >
              <span className="text-xs font-bold text-[#ff1493] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[2].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-2 group-hover:text-[#ff1493] transition font-['Montserrat',sans-serif]">
                {otherAreas[2].title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {otherAreas[2].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff1493] mt-4">
                {t("project28Detail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>
          </div>

          {/* TRANSPARENCY & CONTACT FOOTER CALLOUT */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <h4 className="font-bold text-gray-900 text-sm font-['Montserrat',sans-serif]">
                {t("project28Detail.inquiryTitle")}
              </h4>
              <p className="text-xs text-gray-600">
                {t("project28Detail.inquiryText")}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                to="/reports"
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 transition"
              >
                <FaExternalLinkAlt /> {t("project28Detail.transparency")}
              </Link>
              <a
                href="mailto:info@menschen-dialog.de"
                className="inline-flex items-center gap-1.5 bg-[#EC8134] hover:bg-[#d4702b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
              >
                <FaEnvelope /> {t("project28Detail.emailUs")}
              </a>
              <a
                href="tel:+49000000000"
                className="inline-flex items-center gap-1.5 bg-[#ff1493] hover:bg-[#EC8134] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
              >
                <FaPhoneAlt /> {t("project28Detail.callUs")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project28Detail;