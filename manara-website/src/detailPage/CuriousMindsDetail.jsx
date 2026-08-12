import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroTitle from "../components/reusableComp/HeroTitle";
import {
  FaSchool,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandshake,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaTag,
  FaGlobe,
  FaShareAlt,
  FaDownload,
  FaLaptopCode,
  FaHeart
} from "react-icons/fa";

// Image assets
import CuriousMindsHero from "../assets/images/CuriousMinds.jpg";
import Phase1Img from "../assets/images/CuriousMinds.jpg";
import Phase2Img from "../assets/images/CuriousMinds3.jpg";
import Phase3Img from "../assets/images/CuriousMinds5.jpg";

// Hero Gallery Images Array for Pagination Slider
const galleryImages = [
  {
    src: Phase1Img,
    title: "Digital Classroom Launch",
    subtitle: "Empowering rural schools in Gorkha & Sindhupalchok with interactive ICT labs."
  },
  {
    src: Phase2Img,
    title: "Teacher Mentorship & Training",
    subtitle: "Training local educators to independently manage e-learning materials."
  },
  {
    src: Phase3Img,
    title: "Interactive E-Learning",
    subtitle: "Students engaging directly with modern digital educational resources."
  }
];

// Converts Devanagari digits (used in the Nepali locale's metric strings) to Arabic digits so parseInt can read them
const toArabicDigits = (str) =>
  str.replace(/[०-९]/g, (digit) => "०१२३४५६७८९".indexOf(digit));

// Custom Hook for smooth counting animation with Intersection Observer
const useCountUp = (endValue, duration = 2000, locale = "en") => {
  const numericTarget = parseInt(toArabicDigits(endValue).replace(/,/g, ""), 10);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * numericTarget));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericTarget, duration]);

  const formattedCount = count.toLocaleString(locale === "ne" ? "ne-NP-u-nu-deva" : undefined);

  let displayValue = formattedCount;
  if (endValue.includes("%")) displayValue = `${formattedCount}%`;
  if (endValue.includes("+")) displayValue = `${formattedCount}+`;

  return { displayValue, elementRef };
};

// Animated Metric Card Component
const MetricCard = ({ item }) => {
  const { i18n } = useTranslation();
  const { displayValue, elementRef } = useCountUp(item.value, 2000, i18n.language);

  return (
    <div
      ref={elementRef}
      className="bg-white dark:bg-[#1f1f23] p-5 rounded-2xl border border-gray-100 dark:border-white/15 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-1.5"
    >
      <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl mb-1 text-[#366A35]">{item.icon}</div>
      <span className="text-2xl sm:text-3xl font-extrabold text-[#366A35] font-['Montserrat',sans-serif]">
        {displayValue}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
        {item.label}
      </span>
    </div>
  );
};

const stageStyles = [
  { color: "#D34A32", headerBg: "bg-[#D34A32]", image: Phase1Img },
  { color: "#EC8134", headerBg: "bg-[#EC8134]", image: Phase2Img },
  { color: "#366A35", headerBg: "bg-[#366A35]", image: Phase3Img },
];

const metricIcons = [
  <FaSchool className="text-2xl text-[#366A35]" />,
  <FaGraduationCap className="text-2xl text-[#366A35]" />,
  <FaChalkboardTeacher className="text-2xl text-[#366A35]" />,
  <FaHandshake className="text-2xl text-[#366A35]" />,
];

const CuriousMindDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Phase Tab Pagination State
  const [activePhase, setActivePhase] = useState(0);

  // Key Impact Metrics
  const metrics = t("curiousMindsDetail.metrics", { returnObjects: true }).map((m, idx) => ({
    id: idx + 1,
    icon: metricIcons[idx],
    value: m.value,
    label: m.label,
  }));

  // 3-Stage Methodology Process Data
  const processStages = t("curiousMindsDetail.processStages", { returnObjects: true }).map((stg, idx) => ({
    ...stg,
    ...stageStyles[idx],
  }));

  const visionCards = t("curiousMindsDetail.visionCards", { returnObjects: true });
  const otherAreas = t("curiousMindsDetail.otherAreas", { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO SECTION: Centered Editorial Header */}
        <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO SECTION: Centered Editorial Header */}
        <div className="space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/20 text-xs font-black uppercase tracking-widest font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.heroBadge")}
            </div>

            <HeroTitle
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight font-['Montserrat',sans-serif]"
              segments={[
                { text: t("curiousMindsDetail.heroTitleLine1") },
                { break: true },
                { text: t("curiousMindsDetail.heroTitleHighlight"), className: "text-[#366A35]" },
              ]}
            />

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto pt-1">
              {t("curiousMindsDetail.heroSubtitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 pt-2">
              <span className="inline-flex items-center gap-2 bg-white dark:bg-[#1f1f23] border border-gray-200 dark:border-white/15 shadow-xs px-4 py-2 rounded-full font-semibold">
                <FaMapMarkerAlt className="text-[#EC8134]" /> {t("curiousMindsDetail.heroLocation")}
              </span>
              <span className="bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/30 px-4 py-2 rounded-full font-bold">
                {t("curiousMindsDetail.heroActiveInitiative")}
              </span>
            </div>
          </div>

          {/* STATIC HERO IMAGE BANNER */}
          <div className="relative w-full h-[340px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden border border-gray-200/80 dark:border-white/15 shadow-2xl group">
            <img
              src={CuriousMindsHero}
              alt="Curious Minds Digital Classroom"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Image Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#366A35] text-white text-[11px] font-bold uppercase tracking-wider">
                {t("curiousMindsDetail.bannerBadge")}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-['Montserrat',sans-serif] text-white leading-tight">
                {t("curiousMindsDetail.bannerTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {t("curiousMindsDetail.bannerSubtitle")}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 font-semibold">
                  <FaUser className="text-[#EC8134]" /> {t("curiousMindsDetail.bannerInitiatedBy")}
                </span>
                <span>•</span>
                <span>{t("curiousMindsDetail.bannerFooterText")}</span>
              </div>
            </div>
          </div>

        </div>

        {/* METRICS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <MetricCard key={item.id} item={item} />
          ))}
        </div>

      </div>

        {/* ========================================================================= */}
        {/* NEW SECTION: PROGRAM OVERVIEW, QUICK INFO & FULL PROGRAM DOCS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Overview & Detailed Breakdown (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Program Overview Card */}
            <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/15 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("curiousMindsDetail.programOverviewTitle")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {t("curiousMindsDetail.programOverviewText")}
              </p>
            </div>

            {/* Detailed Project Breakdown */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("curiousMindsDetail.deliverablesTitle")}
              </h2>

              <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/15 shadow-sm space-y-6">

                {/* Header with Badge Icon */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-green-50 text-[#366A35] rounded-2xl flex-shrink-0">
                    <FaLaptopCode className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                      {t("curiousMindsDetail.deliverableTitle")}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {t("curiousMindsDetail.deliverableDescription")}
                </p>

                {/* Key Highlights & Actions Box */}
                <div className="bg-slate-50 dark:bg-white/5 p-5 sm:p-6 rounded-2xl border border-slate-100 dark:border-white/10 space-y-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 font-['Montserrat',sans-serif]">
                    {t("curiousMindsDetail.keyHighlightsLabel")}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {t("curiousMindsDetail.deliverableHighlights", { returnObjects: true }).map((point, idx) => (
                      <div className="flex items-start gap-2.5" key={idx}>
                        <FaCheckCircle className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Quick Info & Documentation Downloads (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Quick Info Card */}
            <div className="bg-white dark:bg-[#1f1f23] p-6 rounded-3xl border border-gray-100 dark:border-white/15 shadow-sm space-y-6">
              <h3 className="text-lg font-black text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("curiousMindsDetail.quickInfoTitle")}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">

                {/* Focus Areas */}
                <div className="flex items-start gap-3">
                  <FaTag className="text-[#EC8134] text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-['Montserrat',sans-serif]">
                      {t("curiousMindsDetail.focusAreasLabel")}
                    </span>
                    <span className="font-extrabold text-gray-800 dark:text-gray-200">
                      {t("curiousMindsDetail.focusAreasValue")}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-500 text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-['Montserrat',sans-serif]">
                      {t("curiousMindsDetail.locationLabel")}
                    </span>
                    <span className="font-extrabold text-gray-800 dark:text-gray-200">
                      {t("curiousMindsDetail.locationValue")}
                    </span>
                  </div>
                </div>

                {/* Organizer */}
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-['Montserrat',sans-serif]">
                      {t("curiousMindsDetail.organizerLabel")}
                    </span>
                    <span className="font-extrabold text-gray-800 dark:text-gray-200">
                      {t("curiousMindsDetail.organizerValue")}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: t("curiousMindsDetail.shareTitle"), url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert(t("curiousMindsDetail.linkCopied"));
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white py-3 rounded-2xl text-xs font-bold transition"
                >
                  <FaShareAlt /> {t("curiousMindsDetail.shareProject")}
                </button>

                <Link
                  to='/contact'
                  className="w-full py-3 bg-[#366A35] hover:bg-[#2d582c] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition font-['Montserrat',sans-serif]"
                >
                  <FaHeart /> {t("curiousMindsDetail.becomeVolunteer")}
                </Link>
              </div>

            </div>

            {/* Full Program Documentation Card */}
            <div className="bg-[#EC8134] text-white p-6 sm:p-7 rounded-3xl shadow-lg space-y-4">
              <h3 className="text-lg font-black font-['Montserrat',sans-serif] leading-tight">
                {t("curiousMindsDetail.reportBannerTitle")}
              </h3>

              <p className="text-xs text-white/90 leading-relaxed">
                {t("curiousMindsDetail.reportBannerText")}
              </p>

              <a
                href="/reports"
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#EC8134] hover:bg-slate-50 font-black text-xs py-3.5 px-4 rounded-xl transition shadow-sm font-['Montserrat',sans-serif]"
              >
                <FaDownload /> {t("curiousMindsDetail.downloadReportPdf")}
              </a>
            </div>

          </div>

        </div>

        {/* METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <MetricCard key={item.id} item={item} />
          ))}
        </div>

        {/* CONTEXT & OBJECTIVE DUAL CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1f1f23] border-l-4 border-[#D34A32] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 dark:border-white/15 shadow-sm space-y-3 hover:shadow-md transition">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#D34A32] font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.challengeTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t("curiousMindsDetail.challengeText")}
            </p>
          </div>

          <div className="bg-white dark:bg-[#1f1f23] border-l-4 border-[#366A35] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 dark:border-white/15 shadow-sm space-y-3 hover:shadow-md transition">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#366A35] font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.approachTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t("curiousMindsDetail.approachText")}
            </p>
          </div>
        </div>

        {/* METHODOLOGY SECTION WITH INTERACTIVE STEPPER / PAGINATION TABS */}
        <div className="space-y-8">

          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#366A35] font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.methodologyLabel")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.methodologyTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              {t("curiousMindsDetail.methodologySubtitle")}
            </p>
          </div>

          {/* Phase Stepper Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-gray-200 dark:border-white/15 pb-4">
            {processStages.map((stg, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold font-['Montserrat',sans-serif] transition-all duration-300 ease-in-out transform ${activePhase === idx
                    ? "bg-[#366A35] text-white shadow-md scale-105"
                    : "bg-white dark:bg-[#1f1f23] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activePhase === idx ? "bg-white text-[#366A35]" : "bg-gray-400 text-white"
                    }`}
                >
                  {stg.stage}
                </span>
                <span>{stg.title}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Content Highlight Card */}
          <div className="bg-white dark:bg-[#1f1f23] rounded-3xl border border-gray-200/80 dark:border-white/15 shadow-lg overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Phase Left Image */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px]">
                <img
                  src={processStages[activePhase].image}
                  alt={processStages[activePhase].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black text-white bg-slate-900/80 backdrop-blur-md border border-white/20 font-['Montserrat',sans-serif]">
                    {t("curiousMindsDetail.stageLabel")} {processStages[activePhase].stage}
                  </span>
                </div>
              </div>

              {/* Phase Right Description */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-center">
                <div className="space-y-1">
                  <span
                    className="text-xs font-extrabold uppercase tracking-wider font-['Montserrat',sans-serif]"
                    style={{ color: processStages[activePhase].color }}
                  >
                    {processStages[activePhase].badgeText}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                    {processStages[activePhase].title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {processStages[activePhase].summary}
                  </p>
                </div>

                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {processStages[activePhase].description}
                </p>

                {/* Interactive Controls inside Phase Card */}
                <div className="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-white/15">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 font-['Montserrat',sans-serif]">
                    {t("curiousMindsDetail.phaseOfLabel", { current: activePhase + 1, total: processStages.length })}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={activePhase === 0}
                      onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/15 text-xs font-bold text-gray-700 dark:text-gray-300 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-white/10 transition"
                    >
                      {t("curiousMindsDetail.previousPhase")}
                    </button>
                    <button
                      disabled={activePhase === processStages.length - 1}
                      onClick={() => setActivePhase((prev) => Math.min(processStages.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded-lg bg-[#366A35] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#2e592d] transition"
                    >
                      {t("curiousMindsDetail.nextPhase")}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Grid Overview of All 3 Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {processStages.map((stage, idx) => (
              <div
                key={stage.stage}
                onClick={() => setActivePhase(idx)}
                className={`bg-white dark:bg-[#1f1f23] rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col ${activePhase === idx
                    ? "border-[#366A35] ring-2 ring-[#366A35]/20 shadow-md"
                    : "border-gray-200 dark:border-white/15 hover:border-gray-300 dark:hover:border-white/25 shadow-xs"
                  }`}
              >
                <div className={`${stage.headerBg} text-white px-5 py-3 font-['Montserrat',sans-serif] flex items-center justify-between`}>
                  <h3 className="text-xs sm:text-sm font-extrabold tracking-tight">
                    {stage.title}
                  </h3>
                  <span className="text-xs opacity-80 font-mono">0{idx + 1}</span>
                </div>

                <div className="p-4 flex-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                  <p className="line-clamp-3">{stage.description}</p>
                  <span className="inline-block text-[11px] font-bold text-[#EC8134]">
                    {t("curiousMindsDetail.clickToExpand")}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* QUOTE CALLOUT SECTION */}
        <div className="py-4">
          <div className="bg-slate-50/80 dark:bg-white/5 rounded-2xl border-l-4 border-[#EC8134] p-6 sm:p-10 shadow-xs relative">
            <div className="space-y-4">
              <FaQuoteLeft className="text-3xl sm:text-4xl text-[#EC8134]/40" />
              <blockquote className="text-base sm:text-xl font-bold text-slate-800 dark:text-white italic leading-relaxed font-['Nunito_Sans',sans-serif]">
                "{t("curiousMindsDetail.quoteText")}"
              </blockquote>
              <div className="pt-2 text-xs sm:text-sm font-extrabold text-slate-500 dark:text-gray-400 uppercase tracking-wider font-['Montserrat',sans-serif]">
                {t("curiousMindsDetail.quoteAuthor")}
              </div>
            </div>
          </div>
        </div>

        {/* SUSTAINABILITY & COMMUNITY CORNERSTONE (GREEN CARD) */}
        <div className="bg-[#366A35] p-8 sm:p-12 rounded-3xl shadow-xl space-y-8 text-white">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-green-200 font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.visionLabel")}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.visionTitle")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visionCards.map((card, idx) => (
              <div className="bg-[#437942] p-6 rounded-2xl space-y-3 hover:bg-[#4b854a] transition duration-300" key={idx}>
                <FaCheckCircle className="text-2xl text-[#EC8134]" />
                <h4 className="font-extrabold text-base text-white font-['Montserrat',sans-serif]">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION TO OTHER CORE ACTIVITIES */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("curiousMindsDetail.exploreOtherTitle")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Health-NOW (Orange #EC8134) */}
            <div
              onClick={() => navigate("/project-28")}
              className="bg-white dark:bg-[#1f1f23] p-5 rounded-2xl border border-gray-100 dark:border-white/15 shadow-xs hover:border-[#EC8134]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#EC8134] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[0].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#EC8134] transition font-['Montserrat',sans-serif]">
                {otherAreas[0].title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {otherAreas[0].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC8134] pt-2">
                {t("curiousMindsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Impact Alliance (Red #D34A32) */}
            <div
              onClick={() => navigate("/sponsorship")}
              className="bg-white dark:bg-[#1f1f23] p-5 rounded-2xl border border-gray-100 dark:border-white/15 shadow-xs hover:border-[#D34A32]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#D34A32] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[1].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#D34A32] transition font-['Montserrat',sans-serif]">
                {otherAreas[1].title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {otherAreas[1].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D34A32] pt-2">
                {t("curiousMindsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Let's Learn (Green #366A35) */}
            <div
              onClick={() => navigate("/other-activities")}
              className="bg-white dark:bg-[#1f1f23] p-5 rounded-2xl border border-gray-100 dark:border-white/15 shadow-xs hover:border-[#366A35]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                {otherAreas[2].tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                {otherAreas[2].title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {otherAreas[2].text}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] pt-2">
                {t("curiousMindsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
              </span>
            </div>
          </div>
        </div>

        {/* INQUIRY BANNER */}
        <div className="bg-white dark:bg-[#1f1f23] p-6 rounded-2xl border border-gray-200 dark:border-white/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm font-['Montserrat',sans-serif]">
              {t("curiousMindsDetail.inquiryTitle")}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {t("curiousMindsDetail.inquiryText")}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/reports"
              className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/15 transition"
            >
              <FaExternalLinkAlt /> {t("curiousMindsDetail.transparency")}
            </Link>
            <a
              href="mailto:info@menschen-dialog.de"
              className="inline-flex items-center gap-1.5 bg-[#EC8134] hover:bg-[#d4702b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaEnvelope /> {t("curiousMindsDetail.emailUs")}
            </a>
            <a
              href="tel:+49000000000"
              className="inline-flex items-center gap-1.5 bg-[#366A35] hover:bg-[#2e592d] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaPhoneAlt /> {t("curiousMindsDetail.callUs")}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CuriousMindDetail;