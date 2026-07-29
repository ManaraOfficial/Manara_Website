import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
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
  FaPhoneAlt 
} from "react-icons/fa";

// Image assets
import CuriousMindsHero from "../assets/images/CuriousMinds.jpg";
import Phase1Img from "../assets/images/CuriousMinds.jpg";
import Phase2Img from "../assets/images/CuriousMinds.jpg";
import Phase3Img from "../assets/images/CuriousMinds.jpg";

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
      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-1"
    >
      <div className="p-3 bg-gray-50 rounded-xl mb-1">{item.icon}</div>
      <span className="text-2xl sm:text-3xl font-extrabold text-[#366A35] font-['Montserrat',sans-serif]">
        {displayValue}
      </span>
      <span className="text-xs sm:text-sm font-medium text-gray-600">
        {item.label}
      </span>
    </div>
  );
};

const CuriousMindDetail = () => {
  const navigate = useNavigate();

  // Key Impact Metrics (Education Focus - Green #366A35)
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

  // 3-Stage Methodology
  const processStages = [
    {
      stage: "01",
      title: "1. Analysis & Awareness Raising",
      headerBg: "bg-[#D34A32]",
      badgeText: "Phase 1: Analysis",
      image: Phase1Img,
      description:
        "As a first step, we conduct a comprehensive inventory: interested schools are evaluated, risk assessments are carried out, and challenges are identified. Together with teachers, parents, and local officials, we communicate the importance of education and children's rights to create the foundation for targeted measures. Additionally, baseline student knowledge is assessed to measure learning progress over time.",
    },
    {
      stage: "02",
      title: "2. Implementation & Training",
      headerBg: "bg-[#EC8134]",
      badgeText: "Phase 2: Execution",
      image: Phase2Img,
      description:
        "In phase II, we set up the digital infrastructure: networks and computers are implemented, basic IT skills are taught, and teachers are trained in using e-learning materials. At the same time, selected technically skilled teachers receive specialized training in system maintenance. Schools formally commit to maintaining and protecting these educational resources.",
    },
    {
      stage: "03",
      title: "3. Independence & Sustainability",
      headerBg: "bg-[#366A35]",
      badgeText: "Phase 3: Sustainability",
      image: Phase3Img,
      description:
        "In the final phase, we ensure that supported schools become self-sufficient in the long term. We conduct a refresher training session three to six months after the official handover to address remaining questions and deepen knowledge. This ensures the sustainable, independent integration of digital learning methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO SECTION: Centered Editorial Header & Wide Hero Image */}
        <div className="space-y-12">
          {/* Centered Heading & Meta */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/20 text-xs font-extrabold uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">
              Education Program | Let's Learn
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 font-['Montserrat',sans-serif]">
              Empowering Young Minds Through Digital Education: <br />
              <span className="text-[#366A35]">CURIOUS MINDS</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
              We bridge the gap in rural educational access by providing schools in Nepal with interactive ICT equipment, long-term teacher training, and sustainable infrastructure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700">
              <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full font-medium">
                <FaMapMarkerAlt className="text-[#EC8134]" /> Kavre & Sindhupalchok, Nepal
              </span>
              <span className="bg-[#366A35]/10 text-[#366A35] border border-[#366A35]/30 px-4 py-2 rounded-full font-bold">
                Active Initiative
              </span>
            </div>
          </div>

          {/* FEATURED HERO IMAGE WITH OVERLAY BANNER */}
          <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
            <img
              src={CuriousMindsHero}
              alt="Curious Minds Education Initiative"
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Banner Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#366A35] text-white text-xs font-bold uppercase tracking-wider">
                Let's Learn Program
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-['Montserrat',sans-serif] leading-tight">
                Sustainable Impact in Action
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <FaUser className="text-[#EC8134]" /> Initiated by Ralf Ledl
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Building local capacity across rural Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <MetricCard key={item.id} item={item} />
          ))}
        </div>

        {/* CONTEXT & OBJECTIVE */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-l-4 border-[#D34A32] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#D34A32] font-['Montserrat',sans-serif]">
              The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Students in remote regions often lack access to digital learning tools and interactive education. Without early access to computer literacy, young learners encounter barriers that limit future educational and career opportunities.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#366A35] p-6 sm:p-8 rounded-2xl border-y border-r border-gray-100 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#366A35] font-['Montserrat',sans-serif]">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We connect schools with ICT resources, educational software, and teacher mentorship—building self-sufficient learning environments where local educators guide students toward self-determined futures.
            </p>
          </div>
        </div>

        {/* PROCESS BLUEPRINT SECTION */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#366A35] font-['Montserrat',sans-serif]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              Three Phases to Project Success
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              How we work alongside schools and local leadership to ensure lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.stage}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Stage Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white border border-white/20 font-black text-xs px-3 py-1 rounded-full font-['Montserrat',sans-serif]">
                    STAGE {stage.stage}
                  </div>
                </div>

                {/* Header Strip */}
                <div className={`${stage.headerBg} text-white px-5 py-3 font-['Montserrat',sans-serif]`}>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight">
                    {stage.title}
                  </h3>
                </div>

                {/* Card Description */}
                <div className="p-5 flex-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {stage.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUSTAINABILITY & COMMUNITY CORNERSTONE (RESTORED GREEN CARD DESIGN) */}
        <div className="bg-[#366A35] p-8 sm:p-10 rounded-3xl shadow-lg space-y-8 text-white">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-green-200 font-['Montserrat',sans-serif]">
              LONG-TERM VISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Montserrat',sans-serif]">
              Built on Local Ownership & Dignity
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#437942] p-6 rounded-2xl space-y-3">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-bold text-base text-white font-['Montserrat',sans-serif]">
                Teacher Empowerment
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Educators gain technical expertise to operate labs, troubleshoot hardware, and guide students independently.
              </p>
            </div>

            <div className="bg-[#437942] p-6 rounded-2xl space-y-3">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-bold text-base text-white font-['Montserrat',sans-serif]">
                Community Stewardship
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                School committees and local leaders assume full management of facilities, ensuring long-term protection and care.
              </p>
            </div>

            <div className="bg-[#437942] p-6 rounded-2xl space-y-3">
              <FaCheckCircle className="text-2xl text-[#EC8134]" />
              <h4 className="font-bold text-base text-white font-['Montserrat',sans-serif]">
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
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#EC8134]/50 transition cursor-pointer group space-y-2"
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
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#D34A32]/50 transition cursor-pointer group space-y-2"
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
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#366A35]/50 transition cursor-pointer group space-y-2"
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