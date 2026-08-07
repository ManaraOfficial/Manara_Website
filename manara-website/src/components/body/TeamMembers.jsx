import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaArrowRight, 
  FaChevronLeft, 
  FaChevronRight, 
  FaPause,
  FaMagic
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeader from "../reusableComp/SectionHeader";

import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.jpeg";
import person5 from "../../assets/images/person5.png";
import person6 from "../../assets/images/rajesh3.jpg";
import person7 from "../../assets/images/person7.jpeg";

// 🎨 BRAND COLOR
const BRAND_COLOR = "#e5005a"; 

// 🎬 TRANSITION TYPES ASSIGNED TO EACH SLIDE
const TRANSITION_TYPES = [
  { id: "iris", name: "Iris Expansion" },
  { id: "blinds", name: "Venetian Blinds" },
  { id: "doors", name: "Center Barn Doors" },
  { id: "staggerWipe", name: "Staggered Slices" },
  { id: "diagonal", name: "Diagonal Sweep" },
];

// Static identity data — translatable fields are merged in from i18next inside the component
const BASE_TEAM = [
  {
    id: "ralf",
    name: "Ralf Ledl",
    image: person1,
    stats: { projects: "45+", experience: "14 Yrs" },
    effect: TRANSITION_TYPES[0],
  },
  {
    id: "jurgen",
    name: "Jürgen Luck",
    image: person2,
    stats: { projects: "30+", experience: "9 Yrs" },
    effect: TRANSITION_TYPES[1],
  },
  {
    id: "andrea",
    name: "Andrea Spieth",
    image: person3,
    stats: { projects: "28+", experience: "8 Yrs" },
    effect: TRANSITION_TYPES[2],
  },
  {
    id: "ridam",
    name: "Ridam Gurung",
    image: person4,
    stats: { projects: "22+", experience: "5 Yrs" },
    effect: TRANSITION_TYPES[3],
  },
  {
    id: "anju",
    name: "Anju Devkota",
    image: person5,
    stats: { projects: "18+", experience: "4 Yrs" },
    effect: TRANSITION_TYPES[4],
  },
  {
    id: "rajesh",
    name: "Rajesh Jacko",
    image: person6,
    stats: { projects: "35+", experience: "6 Yrs" },
    effect: TRANSITION_TYPES[0],
  },
  {
    id: "neha",
    name: "Neha Adhikari",
    image: person7,
    stats: { projects: "15+", experience: "3 Yrs" },
    effect: TRANSITION_TYPES[1],
  },
];

export default function EditorialTeam() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Merge translated copy (role, dept, category, location, quote) into the base team data
  const teamMeta = t("home.team.members", { returnObjects: true });
  const teamList = useMemo(
    () =>
      BASE_TEAM.map((member, idx) => ({
        ...member,
        role: teamMeta[idx]?.role || member.role,
        dept: teamMeta[idx]?.dept || member.dept,
        category: teamMeta[idx]?.category || member.category,
        location: teamMeta[idx]?.location || member.location,
        quote: teamMeta[idx]?.quote || member.quote,
      })),
    [teamMeta]
  );

  const activeMember = teamList[activeIndex];
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const isFirstRender = useRef(true);

  // ⏱️ AUTOMATIC 5-SECOND ROTATION
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamList.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // 🔄 CATCH UP PREVIOUS INDEX AFTER TRANSITION DURATION (1000MS) TO PREVENT SEAMS
  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(activeIndex);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // SCROLL DIRECTORY TO ACTIVE MEMBER
  useEffect(() => {
    const container = containerRef.current;
    const activeItem = itemRefs.current[activeIndex];

    if (container && activeItem) {
      const behavior = isFirstRender.current ? "auto" : "smooth";
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      if (itemRect.top < containerRect.top) {
        container.scrollTo({
          top: container.scrollTop + (itemRect.top - containerRect.top),
          behavior,
        });
      } else if (itemRect.bottom > containerRect.bottom) {
        container.scrollTo({
          top: container.scrollTop + (itemRect.bottom - containerRect.bottom),
          behavior,
        });
      }

      if (isFirstRender.current) {
        isFirstRender.current = false;
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamList.length) % teamList.length);
  };

  const handleSelectMember = (idx) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  };

  // 🎨 TRANSITION RENDERER COMPONENT
  const renderTransitionEffect = (member, isActive) => {
    const effectType = member.effect.id;

    // 🎯 1. IRIS CIRCLE EXPANSION
    if (effectType === "iris") {
      return (
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-[clip-path]"
          style={{
            clipPath: isActive ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
            transform: "translateZ(0)",
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      );
    }

    // 🎯 2. VENETIAN BLINDS (MICRO-OVERLAP PREVENTS SEAMS)
    if (effectType === "blinds") {
      return (
        <div className="absolute inset-0 w-full h-full">
          {[0, 1, 2, 3, 4, 5].map((blindIdx) => {
            const topPercent = blindIdx * (100 / 6);

            return (
              <div
                key={blindIdx}
                className="absolute inset-x-0 w-full transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden will-change-[clip-path]"
                style={{
                  top: `${topPercent}%`,
                  height: "calc(100% / 6 + 1.5px)",
                  clipPath: isActive ? "inset(0% 0% 0% 0%)" : "inset(50% 0% 50% 0%)",
                  transitionDelay: isActive ? `${blindIdx * 60}ms` : "0ms",
                  transform: "translateZ(0)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute left-0 w-full h-[460px] sm:h-[540px] object-cover object-center"
                  style={{ top: `-${topPercent * (540 / 100)}px` }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    // 🎯 3. CENTER BARN DOORS SPLIT
    if (effectType === "doors") {
      return (
        <div className="absolute inset-0 w-full h-full">
          {/* Left Door */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-[clip-path]"
            style={{
              clipPath: isActive ? "inset(0% 49.5% 0% 0%)" : "inset(0% 100% 0% 0%)",
              transform: "translateZ(0)",
            }}
          >
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
          </div>
          {/* Right Door */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-[clip-path]"
            style={{
              clipPath: isActive ? "inset(0% 0% 0% 49.5%)" : "inset(0% 0% 0% 100%)",
              transform: "translateZ(0)",
            }}
          >
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      );
    }

    // 🎯 4. STAGGERED VERTICAL SLICES
    if (effectType === "staggerWipe") {
      return (
        <div className="absolute inset-0 w-full h-full">
          {[0, 1, 2, 3].map((sliceIdx) => {
            const leftPercent = Math.max(0, sliceIdx * 25 - 0.2);
            const rightPercent = Math.max(0, 100 - (sliceIdx + 1) * 25 - 0.2);

            return (
              <div
                key={sliceIdx}
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-[clip-path]"
                style={{
                  clipPath: isActive
                    ? `inset(0% ${rightPercent}% 0% ${leftPercent}%)`
                    : `inset(100% ${rightPercent}% 0% ${leftPercent}%)`,
                  transitionDelay: isActive ? `${sliceIdx * 80}ms` : "0ms",
                  transform: "translateZ(0)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      );
    }

    // 🎯 5. DIAGONAL SWEEP CURTAIN
    if (effectType === "diagonal") {
      return (
        <div
          className="absolute inset-0 w-full h-full transition-all duration-900 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-[clip-path]"
          style={{
            clipPath: isActive
              ? "polygon(0% 0%, 150% 0%, 150% 150%, 0% 150%)"
              : "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
            transform: "translateZ(0)",
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section className="relative w-full min-h-screen bg-white text-slate-900 pb-20 px-6 lg:px-16 flex flex-col justify-between overflow-hidden select-none font-sans" id="team">
      
      {/* BRAND COLOR DYNAMIC GRADIENT MESH BACKDROPS */}
      <div 
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-20"
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-15"
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`
        }}
      />

      {/* HEADER SECTION */}
      <div className="w-full max-w-7xl mx-auto z-20">
        <SectionHeader
          title={t("home.team.title")}
          subtitle={t("home.team.subtitle")}
        />
      </div>

      {/* MAIN CONTAINER GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto z-20">
        
        {/* LEFT COLUMN: HERO SPOTLIGHT CANVAS */}
        <div 
          className="lg:col-span-6 relative group"
          onMouseEnter={() => setIsPaused(true)}  // ⏸️ PAUSE ROTATION ON HOVER
          onMouseLeave={() => setIsPaused(false)} // ▶️ RESUME ON MOUSE LEAVE
        >
          <div className="relative w-full h-[460px] sm:h-[540px] rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            
            {/* 🛡️ 1. BASE BACKGROUND LAYER (HOLDS PREVIOUS IMAGE DURING TRANSITION) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={teamList[prevIndex].image}
                alt={teamList[prevIndex].name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 🎬 2. ACTIVE TRANSITION LAYER */}
            {teamList.map((member, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={member.id}
                  className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
                    isActive ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                >
                  {renderTransitionEffect(member, isActive)}
                </div>
              );
            })}

            {/* VIGNETTE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 z-20 pointer-events-none" />

            {/* OVERLAY BADGES */}
            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2 z-30">
              <span 
                className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/95 backdrop-blur-md border border-slate-200/80 font-bold shadow-md"
                style={{ color: BRAND_COLOR }}
              >
                {activeMember.category}
              </span>

              {/* 🎭 EFFECT TYPE INDICATOR BADGE */}
              <span className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/50 flex items-center gap-1.5 shadow-md">
                <FaMagic size={9} style={{ color: BRAND_COLOR }} /> {activeMember.location}
              </span>

              {/* ⏸️ HOVER PAUSE INDICATOR BADGE */}
              {isPaused && (
                <span className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-amber-500/90 text-slate-950 font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md animate-pulse">
                  <FaPause size={8} /> {t("home.team.paused")}
                </span>
              )}
            </div>

            {/* OVERLAY FOOTER CARD ON IMAGE */}
            <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-2xl z-30">
              <div 
                key={activeMember.id}
                className="animate-[slideInRight_0.9s_cubic-bezier(0.16,1,0.3,1)]"
              >
                <p className="text-xs italic text-slate-600 leading-relaxed font-medium">
                  "{activeMember.quote}"
                </p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">{t("home.team.projectsLabel")}</p>
                      <p className="text-sm font-black text-slate-900">{activeMember.stats.projects}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">{t("home.team.experienceLabel")}</p>
                      <p className="text-sm font-black text-slate-900">{activeMember.stats.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrev} 
                      className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200 hover:text-white transition-all active:scale-95 shadow-sm"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = BRAND_COLOR;
                        e.currentTarget.style.borderColor = BRAND_COLOR;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.borderColor = "";
                      }}
                      aria-label="Previous Team Member"
                    >
                      <FaChevronLeft size={12} />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200 hover:text-white transition-all active:scale-95 shadow-sm"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = BRAND_COLOR;
                        e.currentTarget.style.borderColor = BRAND_COLOR;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.borderColor = "";
                      }}
                      aria-label="Next Team Member"
                    >
                      <FaChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: ACTIVE DETAILS & DIRECTORY SELECTOR */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
          
          {/* ACTIVE MEMBER DETAILS */}
          <div
            key={activeMember.id}
            className="space-y-3 animate-[slideInRight_0.9s_cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8" style={{ backgroundColor: BRAND_COLOR }} />
              <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: BRAND_COLOR }}>
                {activeMember.dept}
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900">
              {activeMember.name}
            </h2>

            <p className="text-base font-bold text-slate-600">
              {activeMember.role}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[FaXTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-3 rounded-xl bg-white/80 border border-slate-200 text-slate-600 hover:text-white shadow-sm transition-all active:scale-95"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_COLOR;
                    e.currentTarget.style.borderColor = BRAND_COLOR;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* DIRECTORY SELECTOR */}
          <div className="space-y-2 pt-4">
            <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase pb-2 border-b border-slate-100 flex justify-between items-center">
              <span>{t("home.team.directory")}</span>
              {isPaused && <span className="text-amber-600 font-bold tracking-normal">{t("home.team.timerPaused")}</span>}
            </p>

            <div 
              ref={containerRef}
              className="space-y-1.5 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar"
            >
              {teamList.map((member, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={member.id}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    onClick={() => handleSelectMember(idx)}
                    className={`w-full text-left p-3 rounded-2xl transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                      isActive
                        ? "bg-slate-900 text-white shadow-xl"
                        : "bg-white/70 border border-slate-200/60 text-slate-600 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3 z-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-8 h-8 rounded-full object-cover transition-transform duration-500 ${
                          isActive ? "scale-110 ring-2" : "opacity-80"
                        }`}
                        style={{ ringColor: isActive ? BRAND_COLOR : "transparent" }}
                      />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wide">
                          {member.name}
                        </h4>
                        <p className={`text-[10px] font-mono ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                          {member.role} • <span className="opacity-70">{member.effect.name}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 z-10">
                      <span className="text-[10px] font-mono text-slate-400">
                        0{idx + 1}
                      </span>
                      <FaArrowRight
                        size={10}
                        style={{ color: isActive ? BRAND_COLOR : undefined }}
                        className={`transition-transform duration-300 ${
                          isActive ? "translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400"
                        }`}
                      />
                    </div>

                    {/* Active Progress Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-800">
                        <div
                          key={activeIndex}
                          className="h-full animate-[progress_5s_linear_infinite]"
                          style={{ 
                            backgroundColor: BRAND_COLOR,
                            animationPlayState: isPaused ? "paused" : "running"
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BAR */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-20 border-t border-slate-200/80 pt-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-12">
        <span>{t("home.team.footerLeft")}</span>
        <span>{isPaused ? t("home.team.footerRightPaused") : t("home.team.footerRightAuto")}</span>
      </div>

      {/* HARDWARE-ACCELERATED KEYFRAMES */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(50px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
