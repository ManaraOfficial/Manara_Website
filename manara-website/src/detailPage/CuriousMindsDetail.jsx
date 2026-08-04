import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  FaLaptopCode
} from "react-icons/fa";

// Image assets
import CuriousMindsHero from "../assets/images/CuriousMinds.jpg";
import Phase1Img from "../assets/images/CuriousMinds.jpg";
import Phase2Img from "../assets/images/CuriousMinds.jpg";
import Phase3Img from "../assets/images/CuriousMinds.jpg";

// Hero Gallery Images Array for Pagination Slider
const galleryImages = [
  {
    src: CuriousMindsHero,
    title: "Digital Classroom Launch",
    subtitle: "Empowering rural schools in Gorkha & Sindhupalchok with interactive ICT labs."
  },
  {
    src: Phase1Img,
    title: "Teacher Mentorship & Training",
    subtitle: "Training local educators to independently manage e-learning materials."
  },
  {
    src: Phase2Img,
    title: "Interactive E-Learning",
    subtitle: "Students engaging directly with modern digital educational resources."
  }
];

// Custom Hook for smooth counting animation with Intersection Observer
const useCountUp = (endValue, duration = 2000) => {
  const numericTarget = parseInt(endValue.replace(/,/g, ""), 10);
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

  const formattedCount = count.toLocaleString();

  let displayValue = formattedCount;
  if (endValue.includes("%")) displayValue = `${formattedCount}%`;
  if (endValue.includes("+")) displayValue = `${formattedCount}+`;

  return { displayValue, elementRef };
};

// Animated Metric Card Component
const MetricCard = ({ item }) => {
  const { displayValue, elementRef } = useCountUp(item.value, 2000);

  return (
    <div
      ref={elementRef}
      className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-1.5"
    >
      <div className="p-3 bg-slate-50 rounded-xl mb-1 text-[#366A35]">{item.icon}</div>
      <span className="text-2xl sm:text-3xl font-extrabold text-[#366A35] font-['Montserrat',sans-serif]">
        {displayValue}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-gray-600">
        {item.label}
      </span>
    </div>
  );
};

const CuriousMindDetail = () => {
  const navigate = useNavigate();
  
  // Gallery Pagination State
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Phase Tab Pagination State
  const [activePhase, setActivePhase] = useState(0);

  // Auto-play gallery every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Key Impact Metrics
  const metrics = [
    {
      id: 1,
      icon: <FaSchool className="text-2xl text-[#366A35]" />,
      value: "12+",
      label: "Partner Schools",
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-2xl text-[#366A35]" />,
      value: "1,500+",
      label: "Students Empowered",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-2xl text-[#366A35]" />,
      value: "80+",
      label: "Educators Trained",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-2xl text-[#366A35]" />,
      value: "100%",
      label: "Local Ownership",
    },
  ];

  // 3-Stage Methodology Process Data
  const processStages = [
    {
      stage: "01",
      title: "1. Analysis & Awareness",
      badgeText: "Phase 1: Analysis",
      color: "#D34A32",
      headerBg: "bg-[#D34A32]",
      image: Phase1Img,
      summary: "Inventory & Community Alignment",
      description:
        "As a first step, we conduct a comprehensive inventory: interested schools are evaluated, risk assessments are carried out, and challenges are identified. Together with teachers, parents, and local officials, we communicate the importance of education and children's rights to create the foundation for targeted measures. Additionally, baseline student knowledge is assessed to measure learning progress over time.",
    },
    {
      stage: "02",
      title: "2. Implementation & Infrastructure",
      badgeText: "Phase 2: Execution",
      color: "#EC8134",
      headerBg: "bg-[#EC8134]",
      image: Phase2Img,
      summary: "Digital Setup & Teacher Mentorship",
      description:
        "In phase II, we set up the digital infrastructure: networks and computers are implemented, basic IT skills are taught, and teachers are trained in using e-learning materials. At the same time, selected technically skilled teachers receive specialized training in system maintenance. Schools formally commit to maintaining and protecting these educational resources.",
    },
    {
      stage: "03",
      title: "3. Independence & Sustainability",
      badgeText: "Phase 3: Sustainability",
      color: "#366A35",
      headerBg: "bg-[#366A35]",
      image: Phase3Img,
      summary: "Long-term Autonomy & Refresher Training",
      description:
        "In the final phase, we ensure that supported schools become self-sufficient in the long term. We conduct a refresher training session three to six months after the official handover to address remaining questions and deepen knowledge. This ensures the sustainable, independent integration of digital learning methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO SECTION: Centered Editorial Header */}
        <div className="space-y-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/20 text-xs font-black uppercase tracking-widest font-['Montserrat',sans-serif]">
              Education Program | Let's Learn
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight font-['Montserrat',sans-serif]">
              Empowering Young Minds Through Digital Education: <br />
              <span className="text-[#366A35]">CURIOUS MINDS</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto pt-1">
              We bridge the gap in rural educational access by providing schools in Nepal with interactive ICT equipment, long-term teacher training, and sustainable infrastructure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700 pt-2">
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-xs px-4 py-2 rounded-full font-semibold">
                <FaMapMarkerAlt className="text-[#EC8134]" /> Gorkha & Sindhupalchok, Nepal
              </span>
              <span className="bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/30 px-4 py-2 rounded-full font-bold">
                Active Initiative
              </span>
            </div>
          </div>

          {/* INTERACTIVE PAGINATED HERO IMAGE CAROUSEL */}
          <div className="relative w-full h-[340px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl group">
            
            {/* Gallery Images with Transition */}
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#366A35] text-white text-[11px] font-bold uppercase tracking-wider">
                    Let's Learn Program
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-['Montserrat',sans-serif] text-white leading-tight">
                    {img.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                    {img.subtitle}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <FaUser className="text-[#EC8134]" /> Initiated by Ralf Ledl
                    </span>
                    <span>•</span>
                    <span>Building local capacity across rural Nepal</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition flex items-center justify-center border border-white/40 shadow-md"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition flex items-center justify-center border border-white/40 shadow-md"
            >
              <FaChevronRight />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-8 bg-[#EC8134]" : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* NEW SECTION: PROGRAM OVERVIEW, QUICK INFO & FULL PROGRAM DOCS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Overview & Detailed Breakdown (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Program Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 font-['Montserrat',sans-serif]">
                Program Overview
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our initiative takes a holistic approach to improving school life in rural communities. By combining physical infrastructure enhancements—like interactive ICT computer labs and solar power support—with long-term teacher training and early digital learning resources, we help ensure every child studies in a safe, inspiring, and forward-looking environment.
              </p>
            </div>

            {/* Detailed Project Breakdown */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 font-['Montserrat',sans-serif]">
                Core Program Deliverables
              </h2>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                
                {/* Header with Badge Icon */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-green-50 text-[#366A35] rounded-2xl flex-shrink-0">
                    <FaLaptopCode className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                      1. Digital Infrastructure & ICT Lab Setup
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Establishing modern, solar-assisted digital classrooms ensures students gain direct hands-on experience with ICT tools and offline e-learning software. We build safe, dust-free laptop stations, configure network access, and provide durable educational software suited for remote learning environments.
                </p>

                {/* Key Highlights & Actions Box */}
                <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100 space-y-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 font-['Montserrat',sans-serif]">
                    KEY HIGHLIGHTS & ACTIONS TAKEN:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                      <span>Installed energy-efficient computers & solar battery backups</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                      <span>Deployed offline e-learning servers & interactive curriculum</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                      <span>Constructed secure, dust-free laptop stations & work desks</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                      <span>Trained local IT guardians for ongoing system maintenance</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Quick Info & Documentation Downloads (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Info Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-lg font-black text-gray-900 font-['Montserrat',sans-serif]">
                Quick Info
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Focus Areas */}
                <div className="flex items-start gap-3">
                  <FaTag className="text-[#EC8134] text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 font-['Montserrat',sans-serif]">
                      FOCUS AREAS
                    </span>
                    <span className="font-extrabold text-gray-800">
                      ICT Equipment, E-Learning Software, Teacher Mentorship & Solar Power
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-500 text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 font-['Montserrat',sans-serif]">
                      LOCATION
                    </span>
                    <span className="font-extrabold text-gray-800">
                      Gorkha & Sindhupalchok Schools, Nepal
                    </span>
                  </div>
                </div>

                {/* Organizer */}
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-[#366A35] text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 font-['Montserrat',sans-serif]">
                      ORGANIZER
                    </span>
                    <span className="font-extrabold text-gray-800">
                      Let's Learn & Digital Outreach Team
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: "Curious Minds Initiative", url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-2xl text-xs font-bold transition"
                >
                  <FaShareAlt /> Share Project
                </button>

                <a
                  href="mailto:info@menschen-dialog.de?subject=Support%20Curious%20Minds"
                  className="w-full flex items-center justify-center gap-2 bg-[#366A35] hover:bg-[#2d582c] text-white py-3 rounded-2xl text-xs font-bold transition shadow-sm"
                >
                  <FaHandshake className="text-base" /> Support This Cause
                </a>
              </div>

            </div>

            {/* Full Program Documentation Card */}
            <div className="bg-[#EC8134] text-white p-6 sm:p-7 rounded-3xl shadow-lg space-y-4">
              <h3 className="text-lg font-black font-['Montserrat',sans-serif] leading-tight">
                Full Program Documentation
              </h3>
              
              <p className="text-xs text-white/90 leading-relaxed">
                Download the complete field report detailing computer hardware specifications, e-learning software logs, teacher mentorship guides, and school deployment timelines.
              </p>

              <a
                href="/reports"
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#EC8134] hover:bg-slate-50 font-black text-xs py-3.5 px-4 rounded-xl transition shadow-sm font-['Montserrat',sans-serif]"
              >
                <FaDownload /> Download Report PDF
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
          <div className="bg-white border-l-4 border-[#D34A32] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 shadow-sm space-y-3 hover:shadow-md transition">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#D34A32] font-['Montserrat',sans-serif]">
              The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Students in remote regions often lack access to digital learning tools and interactive education. Without early access to computer literacy, young learners encounter barriers that limit future educational and career opportunities.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#366A35] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 shadow-sm space-y-3 hover:shadow-md transition">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#366A35] font-['Montserrat',sans-serif]">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We connect schools with ICT resources, educational software, and teacher mentorship—building self-sufficient learning environments where local educators guide students toward self-determined futures.
            </p>
          </div>
        </div>

        {/* METHODOLOGY SECTION WITH INTERACTIVE STEPPER / PAGINATION TABS */}
        <div className="space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#366A35] font-['Montserrat',sans-serif]">
              Methodology Blueprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
              Three Phases to Project Success
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Click through each phase to explore how we work alongside schools and local leadership to ensure lasting transformation.
            </p>
          </div>

          {/* Phase Stepper Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-gray-200 pb-4">
            {processStages.map((stg, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold font-['Montserrat',sans-serif] transition-all duration-300 ease-in-out transform ${
                  activePhase === idx
                    ? "bg-[#366A35] text-white shadow-md scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    activePhase === idx ? "bg-white text-[#366A35]" : "bg-gray-400 text-white"
                  }`}
                >
                  {stg.stage}
                </span>
                <span>{stg.title}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Content Highlight Card */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-lg overflow-hidden transition-all duration-500">
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
                    STAGE {processStages[activePhase].stage}
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
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-['Montserrat',sans-serif]">
                    {processStages[activePhase].title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500">
                    {processStages[activePhase].summary}
                  </p>
                </div>

                <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                  {processStages[activePhase].description}
                </p>

                {/* Interactive Controls inside Phase Card */}
                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-400 font-['Montserrat',sans-serif]">
                    Phase {activePhase + 1} of {processStages.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={activePhase === 0}
                      onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 disabled:opacity-40 hover:bg-slate-100 transition"
                    >
                      Previous Phase
                    </button>
                    <button
                      disabled={activePhase === processStages.length - 1}
                      onClick={() => setActivePhase((prev) => Math.min(processStages.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded-lg bg-[#366A35] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#2e592d] transition"
                    >
                      Next Phase
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
                className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col ${
                  activePhase === idx
                    ? "border-[#366A35] ring-2 ring-[#366A35]/20 shadow-md"
                    : "border-gray-200 hover:border-gray-300 shadow-xs"
                }`}
              >
                <div className={`${stage.headerBg} text-white px-5 py-3 font-['Montserrat',sans-serif] flex items-center justify-between`}>
                  <h3 className="text-xs sm:text-sm font-extrabold tracking-tight">
                    {stage.title}
                  </h3>
                  <span className="text-xs opacity-80 font-mono">0{idx + 1}</span>
                </div>

                <div className="p-4 flex-1 text-xs text-gray-600 leading-relaxed space-y-2">
                  <p className="line-clamp-3">{stage.description}</p>
                  <span className="inline-block text-[11px] font-bold text-[#EC8134]">
                    Click to expand details →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* QUOTE CALLOUT SECTION */}
        <div className="py-4">
          <div className="bg-slate-50/80 rounded-2xl border-l-4 border-[#EC8134] p-6 sm:p-10 shadow-xs relative">
            <div className="space-y-4">
              <FaQuoteLeft className="text-3xl sm:text-4xl text-[#EC8134]/40" />
              <blockquote className="text-base sm:text-xl font-bold text-slate-800 italic leading-relaxed font-['Nunito_Sans',sans-serif]">
                "Combining clean toilets, dry roofs, warm carpets, and hygiene demonstrations has completely changed our students' daily attitude toward coming to school."
              </blockquote>
              <div className="pt-2 text-xs sm:text-sm font-extrabold text-slate-500 uppercase tracking-wider font-['Montserrat',sans-serif]">
                — Local School Headmaster & Community Representative
              </div>
            </div>
          </div>
        </div>

        {/* SUSTAINABILITY & COMMUNITY CORNERSTONE (GREEN CARD) */}
        <div className="bg-[#366A35] p-8 sm:p-12 rounded-3xl shadow-xl space-y-8 text-white">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-green-200 font-['Montserrat',sans-serif]">
              LONG-TERM VISION
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Montserrat',sans-serif]">
              Built on Local Ownership & Dignity
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#437942] p-6 rounded-2xl space-y-3 hover:bg-[#4b854a] transition duration-300">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-extrabold text-base text-white font-['Montserrat',sans-serif]">
                Teacher Empowerment
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Educators gain technical expertise to operate labs, troubleshoot hardware, and guide students independently.
              </p>
            </div>

            <div className="bg-[#437942] p-6 rounded-2xl space-y-3 hover:bg-[#4b854a] transition duration-300">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-extrabold text-base text-white font-['Montserrat',sans-serif]">
                Community Stewardship
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                School committees and local leaders assume full management of facilities, ensuring long-term protection and care.
              </p>
            </div>

            <div className="bg-[#437942] p-6 rounded-2xl space-y-3 hover:bg-[#4b854a] transition duration-300">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-extrabold text-base text-white font-['Montserrat',sans-serif]">
                Continuous Support
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Follow-up visits at 3 and 6 months offer refresher training and ensure resources remain actively integrated into learning.
              </p>
            </div>
          </div>
        </div>

        {/* NAVIGATION TO OTHER CORE ACTIVITIES */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            Explore Other Core Focus Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Health-NOW (Orange #EC8134) */}
            <div
              onClick={() => navigate("/project-28")}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-[#EC8134]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#EC8134] uppercase tracking-wider font-['Montserrat',sans-serif]">
                Health-NOW (Health)
              </span>
              <h4 className="text-base font-bold text-gray-900 group-hover:text-[#EC8134] transition font-['Montserrat',sans-serif]">
                PROJECT 28
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Promoting menstrual health, dignity, and active care across remote communities in Nepal.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC8134] pt-2">
                View Program <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Impact Alliance (Red #D34A32) */}
            <div
              onClick={() => navigate("/cecs")}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-[#D34A32]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#D34A32] uppercase tracking-wider font-['Montserrat',sans-serif]">
                Impact-Alliance (Collaboration)
              </span>
              <h4 className="text-base font-bold text-gray-900 group-hover:text-[#D34A32] transition font-['Montserrat',sans-serif]">
                SPONSORSHIPS
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connecting partners and resources to support education, wellbeing, and community development.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D34A32] pt-2">
                View Program <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Let's Learn (Green #366A35) */}
            <div
              onClick={() => navigate("/others")}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-[#366A35]/50 hover:shadow-md transition cursor-pointer group space-y-2"
            >
              <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                Let's Learn (Education)
              </span>
              <h4 className="text-base font-bold text-gray-900 group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                OTHER ACTIVITIES
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fostering environmental education, community livelihoods, and disaster preparedness.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] pt-2">
                View Program <FaArrowRight className="text-[10px]" />
              </span>
            </div>
          </div>
        </div>

        {/* INQUIRY BANNER */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-gray-900 text-sm font-['Montserrat',sans-serif]">
              Inquire More About Curious Minds
            </h4>
            <p className="text-xs text-gray-600">
              Get in touch to review our annual transparency reports.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/reports"
              className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 transition"
            >
              <FaExternalLinkAlt /> Transparency
            </Link>
            <a
              href="mailto:info@menschen-dialog.de"
              className="inline-flex items-center gap-1.5 bg-[#EC8134] hover:bg-[#d4702b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaEnvelope /> Email Us
            </a>
            <a
              href="tel:+49000000000"
              className="inline-flex items-center gap-1.5 bg-[#366A35] hover:bg-[#2e592d] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaPhoneAlt /> Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CuriousMindDetail;